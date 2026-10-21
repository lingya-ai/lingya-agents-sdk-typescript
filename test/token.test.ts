import assert from 'node:assert/strict';
import test from 'node:test';
import { AgentsClient, createTokenFetch } from '../src/client';
import { AgentsClient as BrowserClient } from '../src/browser';

test('token clients acquire independently for concurrent requests and reconnects', async () => {
    const original = globalThis.fetch;
    const requests: Request[] = [];
    let issued = 0;
    globalThis.fetch = async input => {
        const request = input as Request;
        requests.push(request);
        return request.headers.get('Accept') === 'text/event-stream'
            ? new Response('data: {"type":"future-event"}\n\ndata: {"type":"end","executionTimeMillis":0,"totalUsage":{},"artifacts":[],"nonFileArtifacts":[]}\n\n', {
                headers: { 'Content-Type': 'text/event-stream' },
            })
            : new Response("{\"modelConfig\": {\"defaultModel\": {\"keyGroupId\": 42, \"model\": \"example-model\"}, \"modelKeyGroups\": [{\"keyGroupId\": 42, \"keyGroupName\": \"Example models\", \"models\": [{\"maker\": \"OPENAI\", \"modelName\": \"example-model\", \"modelLabel\": \"Example model\", \"modelDescription\": \"Example model used for integration\", \"maxContextTokens\": 1, \"maxOutputTokens\": 1, \"supportImage\": true, \"supportVideo\": true, \"thinkingMode\": true}]}]}, \"supportAttachmentExt\": [{\"ext\": \"example\", \"media\": \"example\"}], \"maxAttachmentCount\": 10, \"goal\": {\"supported\": true, \"continuationEnabled\": true}}", { headers: { 'Content-Type': 'application/json' } });
    };
    try {
        const client = new AgentsClient({ baseUrl: 'https://example.test', channelId: 'channel', auth: {
            type: 'token', tokenProvider: async context => {
                assert.equal(context.channelId, 'channel');
                const id = ++issued;
                await Promise.resolve();
                return `fresh-${id}`;
            },
        } });
        await Promise.all([client.configuration.getAgentsConfig(), client.configuration.getAgentsConfig()]);
        for (let connection = 0; connection < 2; connection++) {
            let count = 0;
            for await (const event of client.chat.streamChatEvents('conversation', { messageId: 'message' })) count++;
            assert.equal(count, 2);
        }
        assert.equal(issued, 4);
        assert.deepEqual(requests.map(r => r.headers.get('X-OpenAPI-Token')), ['fresh-1', 'fresh-2', 'fresh-3', 'fresh-4']);
        for (const request of requests) {
            assert.equal(request.redirect, 'error');
            assert.deepEqual([...request.headers.keys()].filter(k => k.startsWith('x-openapi-')), ['x-openapi-token']);
        }
        await assert.rejects(client.configuration.createOpenApiToken(), /presign requires HMAC/);
        assert.equal(issued, 4);
        assert.throws(() => client.forUser('other'), /already bind/);
    } finally { globalThis.fetch = original; }
});

test('invalid tokens, callback failures, header overrides and cancellation never send', async () => {
    const original = globalThis.fetch;
    let sends = 0;
    globalThis.fetch = async () => { sends++; return new Response("{\"modelConfig\": {\"defaultModel\": {\"keyGroupId\": 42, \"model\": \"example-model\"}, \"modelKeyGroups\": [{\"keyGroupId\": 42, \"keyGroupName\": \"Example models\", \"models\": [{\"maker\": \"OPENAI\", \"modelName\": \"example-model\", \"modelLabel\": \"Example model\", \"modelDescription\": \"Example model used for integration\", \"maxContextTokens\": 1, \"maxOutputTokens\": 1, \"supportImage\": true, \"supportVideo\": true, \"thinkingMode\": true}]}]}, \"supportAttachmentExt\": [{\"ext\": \"example\", \"media\": \"example\"}], \"maxAttachmentCount\": 10, \"goal\": {\"supported\": true, \"continuationEnabled\": true}}"); };
    try {
        for (const token of ['', 'secret\r\nheader', 'invalid token', '中文']) {
            await assert.rejects(createTokenFetch(() => token, 'channel')('https://example.test'), /Invalid OpenAPI token/);
        }
        await assert.rejects(createTokenFetch(() => { throw new Error('secret-value'); }, 'channel')('https://example.test'), error => {
            assert.equal((error as Error).message, 'OpenAPI token provider failed');
            return true;
        });
        let issued = 0;
        const transport = createTokenFetch(() => { issued++; return 'fresh'; }, 'channel');
        await assert.rejects(transport('https://example.test', { headers: { 'X-OpenAPI-AK': 'override' } }), /managed by the SDK/);
        await assert.rejects(transport('https://example.test', { signal: AbortSignal.abort() }));
        assert.equal(issued, 0);
        const abort = new AbortController();
        await assert.rejects(createTokenFetch(() => { abort.abort(); return 'fresh'; }, 'channel')('https://example.test', { signal: abort.signal }));
        assert.equal(sends, 0);
    } finally { globalThis.fetch = original; }
});

test('browser entry uses token auth and a manual retry acquires a new token after 401', async () => {
    const original = globalThis.fetch;
    let issued = 0;
    let sent = 0;
    globalThis.fetch = async () => new Response("{\"modelConfig\": {\"defaultModel\": {\"keyGroupId\": 42, \"model\": \"example-model\"}, \"modelKeyGroups\": [{\"keyGroupId\": 42, \"keyGroupName\": \"Example models\", \"models\": [{\"maker\": \"OPENAI\", \"modelName\": \"example-model\", \"modelLabel\": \"Example model\", \"modelDescription\": \"Example model used for integration\", \"maxContextTokens\": 1, \"maxOutputTokens\": 1, \"supportImage\": true, \"supportVideo\": true, \"thinkingMode\": true}]}]}, \"supportAttachmentExt\": [{\"ext\": \"example\", \"media\": \"example\"}], \"maxAttachmentCount\": 10, \"goal\": {\"supported\": true, \"continuationEnabled\": true}}", { status: ++sent === 1 ? 401 : 200 });
    try {
        const client = new BrowserClient({ baseUrl: 'https://example.test', channelId: 'channel', auth: {
            type: 'token', tokenProvider: () => `fresh-${++issued}`,
        } });
        await assert.rejects(client.configuration.getAgentsConfig());
        assert.equal(sent, 1);
        await client.configuration.getAgentsConfig();
        assert.equal(issued, 2);
    } finally { globalThis.fetch = original; }
});

test('HMAC options bind the user while preserving signing', async () => {
    const original = globalThis.fetch;
    globalThis.fetch = async input => {
        const headers = (input as Request).headers;
        assert.equal(headers.get('X-OpenAPI-AK'), 'access');
        assert.equal(headers.get('X-OpenAPI-User'), 'dXNlcg');
        assert.equal(headers.has('X-OpenAPI-Token'), false);
        return new Response("{\"modelConfig\": {\"defaultModel\": {\"keyGroupId\": 42, \"model\": \"example-model\"}, \"modelKeyGroups\": [{\"keyGroupId\": 42, \"keyGroupName\": \"Example models\", \"models\": [{\"maker\": \"OPENAI\", \"modelName\": \"example-model\", \"modelLabel\": \"Example model\", \"modelDescription\": \"Example model used for integration\", \"maxContextTokens\": 1, \"maxOutputTokens\": 1, \"supportImage\": true, \"supportVideo\": true, \"thinkingMode\": true}]}]}, \"supportAttachmentExt\": [{\"ext\": \"example\", \"media\": \"example\"}], \"maxAttachmentCount\": 10, \"goal\": {\"supported\": true, \"continuationEnabled\": true}}");
    };
    try {
        await new AgentsClient({ baseUrl: 'https://example.test', channelId: 'channel', auth: {
            type: 'hmac', accessKey: 'access', secretKey: 'secret', externalUserId: 'user',
        } }).configuration.getAgentsConfig();
    } finally { globalThis.fetch = original; }
});
