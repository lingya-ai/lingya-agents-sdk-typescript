import assert from 'node:assert/strict';
import test from 'node:test';
import { decodeSse } from '../src/sse';

test('decodes chunks, multiline data and heartbeat comments', async () => {
    const encoder = new TextEncoder();
    const chunks = [': heartbeat\n', 'data: {"a":\n', 'data: 1}\n\n', 'data: done\n\n'];
    const body = new ReadableStream({ start(controller) { chunks.forEach((chunk) => controller.enqueue(encoder.encode(chunk))); controller.close(); } });
    const values: string[] = [];
    for await (const value of decodeSse(new Response(body))) values.push(value);
    assert.deepEqual(values, ['{"a":\n1}', 'done']);
});
