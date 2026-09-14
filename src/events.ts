import type { AiChatBriefEvent, ToolExtension, UnknownAiChatBriefEvent, UnknownToolExtension } from './models';

const knownEventTypes = new Set([
    'user-query', 'compressor-context-start', 'compressor-context-end', 'compactor-warning', 'manual-interrupt',
    'error', 'start', 'think', 'chat-client-request', 'chat-client-response', 'message', 'tool-execution',
    'tool-execution-sub-agent-call', 'tool-execution-awaiting-user-input', 'end',
]);
const knownToolCategories = new Set([
    'plan-approval', 'ask-user-question', 'image-generation', 'sql-query', 'sql-query-result', 'sql-chart-result',
    'math-formula', 'math-result', 'javascript-run-script', 'javascript-run-script-result', 'skill-resource', 'task-progress',
]);

/** 包含全部已知事件以及携带原始 JSON 的未知事件。 / All known events plus a raw-JSON fallback for future event types. */
export type LingyaAiChatBriefEvent = AiChatBriefEvent | UnknownAiChatBriefEvent;

/** 包含全部已知工具扩展以及携带原始 JSON 的未知扩展。 / All known tool extensions plus a raw-JSON fallback. */
export type LingyaToolExtension = ToolExtension | UnknownToolExtension;

/** 按 type 判别事件；未知值只暴露 type 与 rawJson。 / Decodes by type and preserves only the discriminator and exact JSON for unknown values. */
export function decodeAiChatBriefEvent(rawJson: string): LingyaAiChatBriefEvent {
    const parsed = JSON.parse(rawJson) as { type?: unknown };
    const type = typeof parsed.type === 'string' ? parsed.type : 'unknown';
    return knownEventTypes.has(type) ? parsed as AiChatBriefEvent : { type, rawJson };
}

/** 按 category 判别工具扩展。 / Decodes a tool extension by category. */
export function decodeToolExtension(rawJson: string): LingyaToolExtension {
    const parsed = JSON.parse(rawJson) as { category?: unknown };
    const category = typeof parsed.category === 'string' ? parsed.category : 'unknown';
    return knownToolCategories.has(category) ? parsed as ToolExtension : { category, rawJson };
}
