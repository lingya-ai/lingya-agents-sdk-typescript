import assert from 'node:assert/strict';
import test from 'node:test';
import { createServer } from 'node:http';
import { once } from 'node:events';
import { WebSocketServer } from 'ws';
import { AgentsClient } from '../src/client';

test('Node WebSocket uses fresh subprotocol tokens and HMAC handshake headers', async () => {
    const http = createServer();
    const server = new WebSocketServer({ server: http });
    const protocols: string[] = [], keys: string[] = [];
    const requestIds: string[] = [], diagnostics: Array<{ requestId?: string; connectionId?: string }> = [];
    server.on('headers', headers => headers.push('X-Request-ID: server-handshake'));
    server.on('connection', (socket, request) => {
        requestIds.push(String(request.headers['x-request-id'] ?? ''));
        protocols.push(request.headers['sec-websocket-protocol'] ?? '');
        keys.push(String(request.headers['x-openapi-ak'] ?? ''));
        const id = new URL(request.url!, 'http://fixture').searchParams.get('messageId');
        socket.send(JSON.stringify({ id, event: 'ready' }));
        socket.send(JSON.stringify({ id, event: 'future', data: { type: 'future', preserved: true } }));
        socket.send(JSON.stringify({ id, event: 'complete' }));
    });
    http.listen(0, '127.0.0.1');
    await once(http, 'listening');
    const address = http.address() as { port: number };
    let issued = 0;
    const options = { baseUrl: `http://127.0.0.1:${address.port}`, channelId: 'channel' };
    try {
        const token = new AgentsClient({ ...options, auth: { type: 'token', tokenProvider: () => `fresh-${++issued}` } });
        const hmac = new AgentsClient(options.baseUrl, 'channel', { accessKey: 'fixture-ak', secretKey: 'fixture-sk' }).forUser('user');
        for (const client of [token, token, hmac]) {
            const subscription = client.chat.subscribeChatEvents('conversation', { messageId: 'message' }, { transport: 'websocket', timeoutMs: 2000, xRequestID: 'client-request', onConnectionEvent: event => diagnostics.push(event) });
            const events = [];
            for await (const event of subscription) events.push(event.type);
            assert.deepEqual(events, ['future']);
            assert.equal((await subscription.closed).reason, 'complete');
        }
        assert.equal(issued, 2);
        assert.deepEqual(protocols, ['xlt-openapi-token.fresh-1', 'xlt-openapi-token.fresh-2', '']);
        assert.deepEqual(keys, ['', '', 'fixture-ak']);
        assert.deepEqual(requestIds, ['client-request', 'client-request', 'client-request']);
        assert(diagnostics.every(event => event.requestId === 'server-handshake'));
        assert.equal(new Set(diagnostics.map(event => event.connectionId)).size, 3);
    } finally {
        for (const socket of server.clients) socket.terminate();
        await new Promise<void>(resolve => server.close(() => resolve()));
        await new Promise<void>(resolve => http.close(() => resolve()));
    }
});

test('Node WebSocket exposes an actual failed handshake status and business error', async () => {
    const http = createServer();
    http.on('upgrade', (_request, socket) => {
        const body = '{"code":"UNAUTHORIZED","message":"expired"}';
        socket.end(`HTTP/1.1 401 Unauthorized\r\nConnection: close\r\nContent-Length: ${Buffer.byteLength(body)}\r\nX-Request-ID: server-rejected\r\n\r\n${body}`);
    });
    http.listen(0, '127.0.0.1');
    await once(http, 'listening');
    try {
        const client = new AgentsClient({ baseUrl: `http://127.0.0.1:${(http.address() as { port: number }).port}`, channelId: 'c', auth: { type: 'token', tokenProvider: () => 'fresh' } });
        const subscription = client.chat.subscribeChatEvents('c', { messageId: 'm' }, { transport: 'websocket', timeoutMs: 2000 });
        await assert.rejects(async () => { for await (const event of subscription) void event; }, (error: any) => error.kind === 'http' && error.status === 401 && error.code === 'UNAUTHORIZED' && error.requestId === 'server-rejected');
    } finally {
        await new Promise<void>(resolve => http.close(() => resolve()));
    }
});
