import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import test from 'node:test';
import { AgentsClient, ApiError } from '../src/client';
import { ResponseError } from '../src/runtime';

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

    const user = new AgentsClient(baseUrl, channelId, { accessKey, secretKey })
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
    const invoke = async <T>(method: string, suffix: string, action: () => Promise<T>, successStatus = 200): Promise<T> => {
        const value = await action();
        register(method, suffix, successStatus, '通过');
        return value;
    };
    const expectedDomain = async (method: string, suffix: string, action: () => Promise<unknown>) => {
        try {
            await action();
            throw new Error(`${method} ${suffix} unexpectedly succeeded`);
        } catch (error) {
            const status = error instanceof ApiError
                ? error.status
                : error instanceof ResponseError
                    ? error.response.status
                    : undefined;
            assert(
                status !== undefined && domainStatuses.has(status),
                `${method} ${suffix} returned ${status === undefined ? 'a non-HTTP error' : `HTTP ${status}`}`,
            );
            register(method, suffix, status, '环境能力受限，参数与错误响应已验证');
        }
    };

    const first = await invoke('POST', '', () => user.chat.createChat({ query: '仅回复英文 OK' }), 201);
    try {
        await invoke('GET', '/config', () => user.configuration.getAgentsConfig());
        let eventCount = 0;
        for await (const event of user.chat.streamChatEvents(first.conversationId, { messageId: first.messageId })) {
            eventCount += 1;
            if (event.type === 'end') break;
        }
        assert(eventCount > 0);
        register('POST', '/conversations/{conversationId}/stream', 200, '流式响应完成');
        await invoke('GET', `/conversations/${first.conversationId}/config`, () => user.configuration.getConversationConfig(first.conversationId));
        await invoke('GET', `/conversations/${first.conversationId}/context-usage`, () => user.conversations.getConversationContextUsage(first.conversationId));
        await invoke('GET', '/conversations', () => user.conversations.listConversations({ current: 0, size: 5 }));
        await invoke('GET', '/conversations/active', () => user.conversations.listActiveConversations());
        await invoke('GET', '/conversations/unread', () => user.conversations.listUnreadConversations());
        await invoke('POST', '/conversations/activity/query', () => user.conversations.queryConversationActivities({ conversationIds: [first.conversationId] }));
        await invoke('PUT', `/conversations/${first.conversationId}/read-receipt`, () => user.conversations.markConversationRead(first.conversationId, { messageId: first.messageId }));
        await invoke('GET', '/conversations/stats', () => user.conversations.getConversationStats());
        await invoke('PATCH', `/conversations/${first.conversationId}/title`, () => user.conversations.updateConversationTitle(first.conversationId, { title: 'TypeScript SDK 全接口测试' }));
        await invoke('GET', `/conversations/${first.conversationId}/title`, () => user.conversations.getConversationTitle(first.conversationId));
        await invoke('GET', `/conversations/${first.conversationId}/messages`, () => user.messages.listConversationMessages(first.conversationId));
        await invoke('GET', `/conversations/${first.conversationId}/messages/${first.messageId}`, () => user.messages.getConversationMessage(first.conversationId, first.messageId));
        await invoke('GET', '/events', () => user.events.getChatEvents({ conversationId: first.conversationId, messageId: first.messageId }));
        await invoke('POST', '/events/batch', () => user.events.getChatEventsBatch({ conversationId: first.conversationId, messageIds: [first.messageId] }));
        const second = await invoke('POST', `/conversations/${first.conversationId}`, () => user.chat.continueChat(first.conversationId, { query: '再次仅回复英文 OK' }), 201);
        for await (const event of user.chat.streamChatEvents(second.conversationId, { messageId: second.messageId })) if (event.type === 'end') break;
        await invoke('DELETE', `/conversations/${first.conversationId}/interrupt`, () => user.chat.interruptConversation(first.conversationId));
        await invoke('POST', `/conversations/${first.conversationId}/compact`, () => user.chat.compactConversation(first.conversationId));
        await invoke('GET', `/conversations/${first.conversationId}/async-tasks`, () => user.messages.listConversationAsyncTasks(first.conversationId));
        await expectedDomain('GET', `/conversations/${first.conversationId}/async-tasks/missing-async-task`, () => user.messages.getConversationAsyncTask(first.conversationId, 'missing-async-task'));
        await expectedDomain('DELETE', `/conversations/${first.conversationId}/messages/${first.messageId}/queue`, () => user.messages.cancelQueuedMessage(first.conversationId, first.messageId));
        const share = await invoke('POST', `/conversations/${first.conversationId}/shares`, () => user.conversations.createConversationShare(first.conversationId, {}), 201);
        await invoke('GET', `/conversations/${first.conversationId}/shares`, () => user.conversations.listConversationShares(first.conversationId));
        await invoke('DELETE', `/conversations/${first.conversationId}/shares/${share.shareId}`, () => user.conversations.revokeConversationShare(first.conversationId, share.shareId));
        await invoke('POST', '/plan/approve', () => user.interactions.approvePlan({ conversationId: first.conversationId, messageId: first.messageId, approved: false }));
        await invoke('GET', '/plan/missing-plan/status', () => user.interactions.getPlanStatus('missing-plan'));
        await invoke('GET', '/user-input/missing-question/status', () => user.interactions.getUserInputStatus('missing-question', { conversationId: first.conversationId, messageId: first.messageId }));
        await invoke('POST', '/user-input/answer', () => user.interactions.answerUserInput({ conversationId: first.conversationId, messageId: first.messageId, questionId: 'missing-question', selectedOptions: [], customInput: 'not pending' }));
        await expectedDomain('GET', `/conversations/${first.conversationId}/sql-query-results/missing-result`, () => user.sql.getSqlQueryResult(first.conversationId, 'missing-result'));
        await expectedDomain('GET', `/conversations/${first.conversationId}/sql-query-results/missing-result/chart-data`, () => user.sql.getSqlQueryChartData(first.conversationId, 'missing-result'));
        await expectedDomain('GET', `/conversations/${first.conversationId}/sql-query-results/missing-result/export`, () => user.sql.exportSqlQueryResult(first.conversationId, 'missing-result', { format: 'CSV' }));
        const md5 = '17/2WOZXDPjhZzwMQCHrDg==';
        await invoke('GET', '/files/meta/contentMd5', () => user.files.fileExistsByContentMd5({ contentMd5: md5 }));
        const upload = await invoke('POST', '/files/pre-signed-url/write', () => user.files.createPreSignedUpload({ fileName: 'lingya-sdk-endpoint-test.txt', module: 'ai-chat-attachments', contentMd5: md5 }));
        await expectedDomain('POST', '/files/pre-signed-url/confirm', () => user.files.confirmPreSignedUpload({ fileUk: upload.fileUk, contentMd5: md5 }));
        await expectedDomain('POST', '/files/contentMd5', () => user.files.createFileByContentMd5({ fileName: 'lingya-sdk-endpoint-test.txt', contentMd5: md5 }));
        await expectedDomain('GET', `/conversations/${first.conversationId}/files/9223372036854775807/preview`, () => user.files.getConversationFilePreview(first.conversationId, 9223372036854775807));
        await expectedDomain('GET', `/conversations/${first.conversationId}/messages/${first.messageId}/plan-intermediate-files/9223372036854775807/preview`, () => user.files.getPlanIntermediateFilePreview(first.conversationId, first.messageId, 9223372036854775807));
        await invoke('POST', '/knowledge-bases/citations/metadata', () => user.knowledge.getCitationMetadataBatch([]));
        await expectedDomain('GET', '/knowledge-bases/citations/CHUNK/9223372036854775807/metadata', () => user.knowledge.getCitationMetadata('CHUNK', 9223372036854775807));
        await invoke('GET', `/conversations/${first.conversationId}/workspace/files`, () => user.workspace.listWorkspaceArtifacts(first.conversationId));
        await expectedDomain('GET', `/conversations/${first.conversationId}/workspace/files/preview`, () => user.workspace.getWorkspaceFilePreview(first.conversationId, { path: 'missing-file.txt' }));
        let probeCount = 0;
        for await (const event of user.chat.probeEventStream({ probeId: `all-${crypto.randomUUID()}` })) { void event; probeCount += 1; }
        assert.equal(probeCount, 4);
        register('POST', '/stream-probe', 200, '流式响应完成');
        await invoke('PATCH', `/conversations/${first.conversationId}/status`, () => user.conversations.updateConversationStatus(first.conversationId, { status: 'ARCHIVED' }));
    } finally {
        try { await invoke('DELETE', `/conversations/${first.conversationId}`, () => user.conversations.deleteConversation(first.conversationId)); }
        finally { await writeReport(results); }
    }

    const published = await publishedEndpoints();
    assert.equal(seen.size, 46);
    assert.deepEqual([...seen].sort(), published.sort());
});

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
