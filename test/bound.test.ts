import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { AgentsClient } from '../src/client';

interface OperationManifest {
    operationId: string;
}

test('generates one channel-bound method for every contract operation', async () => {
    const manifest = JSON.parse(await readFile(new URL('../openapi/endpoints.json', import.meta.url), 'utf8')) as OperationManifest[];
    const source = await readFile(new URL('../src/bound.ts', import.meta.url), 'utf8');
    const declarations = [...source.matchAll(/^    public (?:async \*|async )?(\w+)\(/gm)]
        .map((match) => match[1])
        .filter((name) => !['constructor', 'subscribeChatEvents', 'exportSqlQueryResultWithMetadata'].includes(name));

    assert.equal(manifest.length, 64);
    assert.deepEqual(declarations.sort(), manifest.map((operation) => operation.operationId).sort());
    for (const declaration of source.matchAll(/^    public (?!constructor\b)(?:async \*|async )?\w+\(([^)]*)\)/gm)) {
        assert(!declaration[1].includes('channelId'), `bound signature leaked channelId: ${declaration[0]}`);
    }
});

test('uses the channel selected by the root client exactly once', async () => {
    const originalFetch = globalThis.fetch;
    let requestedUrl = '';
    globalThis.fetch = async (input) => {
        requestedUrl = input instanceof Request ? input.url : String(input);
        return new Response(JSON.stringify({
            conversationId: 'conversation-1',
            messageId: 'message-1',
            disposition: 'queued',
            status: 'pending',
        }), { status: 201, headers: { 'Content-Type': 'application/json' } });
    };
    try {
        const user = new AgentsClient('https://example.test', 'channel/一', {
            accessKey: 'abcdefghijklmnopqrstuvwxyzABCDEF',
            secretKey: 'test-secret',
        }).forUser('external-user');

        const result = await user.chat.createChat({ query: '你好' });

        assert.equal(result.messageId, 'message-1');
        assert.equal(new URL(requestedUrl).pathname, '/api/agents/channel/openapi/v1/channel%2F%E4%B8%80/chat');
    } finally {
        globalThis.fetch = originalFetch;
    }
});

test('preserves explicit null when moving a conversation out of a group', async () => {
    const originalFetch = globalThis.fetch;
    let capturedBody = '';
    globalThis.fetch = async (input, init) => {
        capturedBody = input instanceof Request ? await input.clone().text() : String(init?.body);
        return new Response(JSON.stringify({ conversationId: 'c1', status: 'ACTIVE', title: 'Title',
            titleState: 'GENERATED', groupId: null, groupName: null, lastUpdateTime: '2026-10-20T00:00:00Z' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } });
    };
    try {
        const user = new AgentsClient('https://example.test', 'channel', {
            accessKey: 'abcdefghijklmnopqrstuvwxyzABCDEF', secretKey: 'test-secret',
        }).forUser('external-user');
        const metadata = await user.conversations.moveConversationToGroup('c1', { groupId: null });
        assert.deepEqual(JSON.parse(capturedBody), { groupId: null });
        assert.equal(metadata.title, 'Title');
        const updated = await user.conversations.updateConversationTitle('c1', { title: 'Title' });
        assert.equal(updated.conversationId, 'c1');
    } finally {
        globalThis.fetch = originalFetch;
    }
});
