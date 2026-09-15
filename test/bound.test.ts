import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { LingyaAgentsClient } from '../src/client';

interface OperationManifest {
    operationId: string;
}

test('generates one channel-bound method for every contract operation', async () => {
    const manifest = JSON.parse(await readFile(new URL('../openapi/endpoints.json', import.meta.url), 'utf8')) as OperationManifest[];
    const source = await readFile(new URL('../src/bound.ts', import.meta.url), 'utf8');
    const declarations = [...source.matchAll(/^    public (?:async \*|async )?(\w+)\(/gm)]
        .map((match) => match[1])
        .filter((name) => name !== 'constructor');

    assert.equal(manifest.length, 46);
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
        const user = new LingyaAgentsClient('https://example.test', 'channel/一', {
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
