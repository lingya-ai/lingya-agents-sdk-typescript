import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import test from 'node:test';
import type { AiChatSubmission, ConversationShareCreated, GeneratePreSignedUrlOutput } from '../src/models';
import { decodeSse } from '../src/sse';
import { LingyaAgentsClient, LingyaApiError, type LingyaAgentsUserClient } from '../src/client';

interface Endpoint { method: string; path: string }
interface Result extends Endpoint { requestId: string; status: number; outcome: string }

const basePath = '/api/agents/channel/openapi/v1/{channelId}/chat';
const domainStatuses = new Set([400, 403, 404, 409, 422]);

test('真实服务覆盖契约中的全部 46 个接口', { timeout: 240_000 }, async (context) => {
    const accessKey = process.env.OPENAPI_AK;
    const secretKey = process.env.OPENAPI_SK;
    const baseUrl = process.env.LINGYA_LIVE_BASE_URL;
    const channelId = process.env.LINGYA_LIVE_CHANNEL_ID;
    if (!accessKey || !secretKey || !baseUrl || !channelId) return context.skip('live environment variables are required');

    const user = new LingyaAgentsClient(baseUrl, channelId, { accessKey, secretKey })
        .forUser(process.env.LINGYA_LIVE_EXTERNAL_USER_ID ?? 'lingya-typescript-sdk-all-endpoints');
    const results: Result[] = [];
    const seen = new Set<string>();
    const register = (method: string, suffix: string, status: number, outcome: string, requestId?: string) => {
        const path = basePath + canonicalSuffix(suffix);
        const key = `${method} ${path}`;
        assert(!seen.has(key), `duplicate endpoint coverage: ${key}`);
        seen.add(key);
        results.push({ method, path, status, outcome, requestId: requestId ?? `local-${String(results.length + 1).padStart(3, '0')}` });
    };
    const request = async <T>(method: string, suffix: string, body?: object, query?: URLSearchParams): Promise<T> => {
        const response = await user.rawRequest(method, suffix, body, query);
        register(method, suffix, response.status, '通过', requestId(response));
        return await response.json() as T;
    };
    const status = async (method: string, suffix: string, body?: object) => {
        const response = await user.rawRequest(method, suffix, body);
        register(method, suffix, response.status, '通过', requestId(response));
    };
    const expectedDomain = async (method: string, suffix: string, body?: object, query?: URLSearchParams, accept = 'application/json') => {
        try {
            const response = await user.rawRequest(method, suffix, body, query, accept);
            throw new Error(`${method} ${suffix} unexpectedly returned ${response.status}`);
        } catch (error) {
            assert(
                error instanceof LingyaApiError && domainStatuses.has(error.status),
                `${method} ${suffix} returned ${error instanceof LingyaApiError ? `HTTP ${error.status}` : 'a non-HTTP error'}`,
            );
            register(method, suffix, error.status, '环境能力受限，参数与错误响应已验证');
        }
    };

    const first = await request<AiChatSubmission>('POST', '', { query: '仅回复英文 OK' });
    try {
        await request('GET', '/config');
        let eventCount = 0;
        for await (const event of user.streamChatEvents(first.conversationId, first.messageId)) {
            eventCount += 1;
            if (event.type === 'end') break;
        }
        assert(eventCount > 0);
        register('POST', '/conversations/{conversationId}/stream', 200, '流式响应完成');
        await request('GET', `/conversations/${first.conversationId}/config`);
        await request('GET', `/conversations/${first.conversationId}/context-usage`);
        await request('GET', '/conversations', undefined, new URLSearchParams({ current: '0', size: '5' }));
        await request('GET', '/conversations/active');
        await request('GET', '/conversations/unread');
        await request('POST', '/conversations/activity/query', { conversationIds: [first.conversationId] });
        await request('PUT', `/conversations/${first.conversationId}/read-receipt`, { messageId: first.messageId });
        await request('GET', '/conversations/stats');
        await status('PATCH', `/conversations/${first.conversationId}/title`, { title: 'TypeScript SDK 全接口测试' });
        await request('GET', `/conversations/${first.conversationId}/title`);
        await request('GET', `/conversations/${first.conversationId}/messages`);
        await request('GET', `/conversations/${first.conversationId}/messages/${first.messageId}`);
        await request('GET', '/events', undefined, new URLSearchParams({ conversationId: first.conversationId, messageId: first.messageId }));
        await request('POST', '/events/batch', { conversationId: first.conversationId, messageIds: [first.messageId] });
        const second = await request<AiChatSubmission>('POST', `/conversations/${first.conversationId}`, { query: '再次仅回复英文 OK' });
        for await (const event of user.streamChatEvents(second.conversationId, second.messageId)) if (event.type === 'end') break;
        await status('DELETE', `/conversations/${first.conversationId}/interrupt`);
        await status('POST', `/conversations/${first.conversationId}/compact`);
        await request('GET', `/conversations/${first.conversationId}/async-tasks`);
        await expectedDomain('GET', `/conversations/${first.conversationId}/async-tasks/missing-async-task`);
        await expectedDomain('DELETE', `/conversations/${first.conversationId}/messages/${first.messageId}/queue`);
        const share = await request<ConversationShareCreated>('POST', `/conversations/${first.conversationId}/shares`, {});
        await request('GET', `/conversations/${first.conversationId}/shares`);
        await request('DELETE', `/conversations/${first.conversationId}/shares/${share.shareId}`);
        await request('POST', '/plan/approve', { conversationId: first.conversationId, messageId: first.messageId, approved: false });
        await request('GET', '/plan/missing-plan/status');
        await request('GET', '/user-input/missing-question/status', undefined, new URLSearchParams({ conversationId: first.conversationId, messageId: first.messageId }));
        await request('POST', '/user-input/answer', { conversationId: first.conversationId, messageId: first.messageId, questionId: 'missing-question', selectedOptions: [], customInput: 'not pending' });
        await expectedDomain('GET', `/conversations/${first.conversationId}/sql-query-results/missing-result`);
        await expectedDomain('GET', `/conversations/${first.conversationId}/sql-query-results/missing-result/chart-data`);
        await expectedDomain('GET', `/conversations/${first.conversationId}/sql-query-results/missing-result/export`, undefined, new URLSearchParams({ format: 'CSV' }), 'text/csv');
        const md5 = '17/2WOZXDPjhZzwMQCHrDg==';
        await request('GET', '/files/meta/contentMd5', undefined, new URLSearchParams({ contentMd5: md5 }));
        const upload = await request<GeneratePreSignedUrlOutput>('POST', '/files/pre-signed-url/write', { fileName: 'lingya-sdk-endpoint-test.txt', module: 'ai-chat-attachments', contentMd5: md5 });
        await expectedDomain('POST', '/files/pre-signed-url/confirm', { fileUk: upload.fileUk, contentMd5: md5 });
        await expectedDomain('POST', '/files/contentMd5', { fileName: 'lingya-sdk-endpoint-test.txt', contentMd5: md5 });
        await expectedDomain('GET', `/conversations/${first.conversationId}/files/9223372036854775807/preview`);
        await expectedDomain('GET', `/conversations/${first.conversationId}/messages/${first.messageId}/plan-intermediate-files/9223372036854775807/preview`);
        await request('POST', '/knowledge-bases/citations/metadata', []);
        await expectedDomain('GET', '/knowledge-bases/citations/CHUNK/9223372036854775807/metadata');
        await request('GET', `/conversations/${first.conversationId}/workspace/files`);
        await expectedDomain('GET', `/conversations/${first.conversationId}/workspace/files/preview`, undefined, new URLSearchParams({ path: 'missing-file.txt' }));
        const probe = await user.rawRequest('POST', '/stream-probe', { probeId: `all-${crypto.randomUUID()}` }, undefined, 'text/event-stream');
        let probeCount = 0;
        for await (const data of decodeSse(probe)) { JSON.parse(data); probeCount += 1; }
        assert.equal(probeCount, 4);
        register('POST', '/stream-probe', probe.status, '流式响应完成', requestId(probe));
        await status('PATCH', `/conversations/${first.conversationId}/status`, { status: 'ARCHIVED' });
    } finally {
        try { await status('DELETE', `/conversations/${first.conversationId}`); }
        finally { await writeReport(results); }
    }

    const published = await publishedEndpoints();
    assert.equal(seen.size, 46);
    assert.deepEqual([...seen].sort(), published.sort());
});

function requestId(response: Response): string | undefined {
    return response.headers.get('X-Request-Id') ?? response.headers.get('Trace-Id') ?? response.headers.get('X-B3-TraceId') ?? undefined;
}

async function publishedEndpoints(): Promise<string[]> {
    const yaml = await readFile(new URL('../../lingya-agents-openapi/openapi/lingya-agents-v1.yaml', import.meta.url), 'utf8');
    const endpoints: string[] = [];
    let path: string | undefined;
    for (const line of yaml.split(/\r?\n/)) {
        const pathMatch = /^  (\/api\/agents\/channel\/openapi\/[^:]+):$/.exec(line);
        if (pathMatch) path = pathMatch[1];
        const methodMatch = /^    (get|post|put|patch|delete):$/.exec(line);
        if (methodMatch && path) endpoints.push(`${methodMatch[1].toUpperCase()} ${path}`);
    }
    return endpoints;
}

async function writeReport(results: Result[]): Promise<void> {
    await mkdir('build/reports/live-api', { recursive: true });
    const rows = results.map((result) => `| ${result.requestId} | ${result.method} | \`${result.path}\` | ${result.status} | ${result.outcome} |`).join('\n');
    await writeFile('build/reports/live-api/all-endpoints.md', `# TypeScript SDK 真实环境全接口测试报告\n\n报告不含凭证、请求正文或响应正文。\n\n| 请求标识 | Method | Path | HTTP | 结果 |\n|---|---|---|---:|---|\n${rows}\n`);
}

function canonicalSuffix(suffix: string): string {
    return suffix
        .replace(/^\/conversations\/(?!active(?:\/|$)|unread(?:\/|$)|stats(?:\/|$)|activity(?:\/|$))[^/]+/, '/conversations/{conversationId}')
        .replace(/\/async-tasks\/[^/]+/, '/async-tasks/{asyncTaskId}')
        .replace(/\/messages\/[^/]+/, '/messages/{messageId}')
        .replace(/\/plan-intermediate-files\/[^/]+/, '/plan-intermediate-files/{fileId}')
        .replace(/^\/conversations\/\{conversationId}\/[f]iles\/[^/]+/, '/conversations/{conversationId}/files/{fileId}')
        .replace(/\/shares\/[^/]+/, '/shares/{shareId}')
        .replace(/\/sql-query-results\/[^/]+/, '/sql-query-results/{resultId}')
        .replace(/^\/plan\/[^/]+\/status$/, '/plan/{planId}/status')
        .replace(/^\/user-input\/[^/]+\/status$/, '/user-input/{questionId}/status')
        .replace(/^\/knowledge-bases\/citations\/[^/]+\/[^/]+\/metadata$/, '/knowledge-bases/citations/{citationType}/{referenceId}/metadata');
}
