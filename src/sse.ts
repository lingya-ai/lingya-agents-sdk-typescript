/**
 * 按 SSE 规范解码分片、多行 data 与心跳。 / Decodes chunked, multiline SSE data while ignoring heartbeats.
 *
 * @param response - Content-Type 为 `text/event-stream` 且 body 未被读取的成功响应。
 * @returns 每个完整事件合并后的 data 字符串；关闭迭代器会取消后续读取。
 * @throws Error 当响应没有可读 body。
 */
export async function* decodeSse(response: Response): AsyncGenerator<string> {
    if (response.body === null) throw new Error('SSE response has no body');
    const reader = response.body.pipeThrough(new TextDecoderStream()).getReader();
    let buffer = '';
    let data: string[] = [];
    try {
        for (;;) {
            const chunk = await reader.read();
            buffer += chunk.value ?? '';
            const lines = buffer.split(/\r?\n/);
            buffer = lines.pop() ?? '';
            for (const line of lines) {
                if (line === '') {
                    if (data.length > 0) yield data.join('\n');
                    data = [];
                } else if (line.startsWith('data:')) {
                    data.push(line.slice(5).replace(/^ /, ''));
                }
            }
            if (chunk.done) break;
        }
        if (buffer.startsWith('data:')) data.push(buffer.slice(5).replace(/^ /, ''));
        if (data.length > 0) yield data.join('\n');
    } finally {
        reader.releaseLock();
    }
}
