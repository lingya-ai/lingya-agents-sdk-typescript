// Bundle the package export for a browser, then run HTTP and SSE without Node globals.
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { createContext, runInContext } from 'node:vm';

const result = await build({
    stdin: {
        contents: "export { AgentsClient } from '@lingya-ai/agents-sdk';",
        resolveDir: process.cwd(),
    },
    bundle: true,
    platform: 'browser',
    format: 'iife',
    globalName: 'Sdk',
    write: false,
    metafile: true,
});
for (const path of Object.keys(result.metafile.inputs)) {
    assert(!path.endsWith('/hmac.js') && !path.endsWith('/hmac.ts'), `HMAC leaked into browser: ${path}`);
    assert(!path.startsWith('node:'), `Node module leaked into browser: ${path}`);
}
let sent = 0;
const context = createContext({
    Request, Response, Headers, URL, URLSearchParams, AbortController, TextDecoder, ReadableStream, setTimeout, clearTimeout,
    fetch: async request => {
        sent++;
        assert.equal(request.headers.get('X-OpenAPI-Token'), `fresh-${sent}`);
        assert.equal(request.headers.has('X-OpenAPI-AK'), false);
        return request.headers.get('Accept') === 'text/event-stream'
            ? new Response('data: {"type":"end","totalUsage":{},"executionTimeMillis":0,"artifacts":[],"nonFileArtifacts":[]}\n\n', { headers: { 'Content-Type': 'text/event-stream' } })
            : new Response('{"conversationId":"c","messageId":"m","disposition":"queued","status":"pending"}', {
                status: 201, headers: { 'Content-Type': 'application/json' },
            });
    },
});
runInContext(result.outputFiles[0].text, context);
await runInContext(`(async () => {
    let issued = 0;
    const client = new Sdk.AgentsClient({ baseUrl: 'https://example.test', channelId: 'channel', auth: {
        type: 'token', tokenProvider: async () => 'fresh-' + (++issued),
    } });
    const result = await client.chat.createChat({ query: 'hello' });
    if (result.messageId !== 'm') throw new Error('Browser HTTP failed');
    let events = 0;
    for await (const event of client.chat.streamChatEvents('c', { messageId: 'm' })) events++;
    if (issued !== 2 || events !== 1) throw new Error('Browser SSE failed');
})()`, context);
assert.equal(sent, 2);
console.log('Browser bundle, token HTTP, and SSE smoke checks passed without Node globals.');
