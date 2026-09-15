import { Configuration } from './runtime';
import { ChatApi, ConfigurationApi, ConversationsApi, EventsApi, FilesApi, InteractionsApi, KnowledgeApi, MessagesApi, SQLApi, WorkspaceApi } from './apis';
import { createSignedFetch, type OpenApiCredentials } from './hmac';
import { type LingyaAiChatBriefEvent } from './events';
import {
    LingyaAgentsLowLevelApis,
    LingyaChatApi,
    LingyaConfigurationApi,
    LingyaConversationsApi,
    LingyaEventsApi,
    LingyaFilesApi,
    LingyaInteractionsApi,
    LingyaKnowledgeApi,
    LingyaMessagesApi,
    LingyaSqlApi,
    LingyaWorkspaceApi,
} from './bound';

/**
 * Lingya Agents SDK 入口，仅适用于可信服务端。 / Server-side Lingya Agents SDK entry point.
 *
 * 客户端保存 channel 范围的凭证，但只有 [forUser] 创建的用户客户端可以发起请求。
 */
export class LingyaAgentsClient {
    /**
     * 创建 channel 范围的客户端。 / Creates a channel-scoped client.
     *
     * @param baseUrl - 服务根地址，不包含 `/api/.../chat`。 / Service root without the API path.
     * @param channelId - OpenAPI channel ID，不得为空。 / Non-empty OpenAPI channel ID.
     * @param credentials - 仅保存在当前服务端进程中的 HMAC 凭证。 / HMAC credentials kept in this server process.
     */
    public constructor(
        private readonly baseUrl: string,
        public readonly channelId: string,
        private readonly credentials: OpenApiCredentials,
    ) {
        if (channelId.length === 0) throw new Error('channelId must not be empty');
    }

    /**
     * 绑定外部用户身份；后续所有请求都以该身份独立签名。 / Binds one external user to all subsequent signed calls.
     *
     * @param externalUserId - 调用方系统的稳定用户 ID，UTF-8 编码后为 1..256 字节且不能含 NUL。
     * @returns 注入用户身份并可调用全部契约 API 的客户端。
     */
    public forUser(externalUserId: string): LingyaAgentsUserClient {
        const signedFetch = createSignedFetch(this.credentials, externalUserId);
        const configuration = new Configuration({ basePath: this.baseUrl.replace(/\/+$/, ''), fetchApi: signedFetch });
        return new LingyaAgentsUserClient(this.channelId, configuration, signedFetch, this.baseUrl);
    }
}

/** 已绑定外部用户的强类型 API 集合。 / Strongly typed API collection bound to one external user. */
export class LingyaAgentsUserClient {
    /** 发起新聊天和流探针。 / Starts chats and stream probes. */
    public readonly chat: LingyaChatApi;
    /** 读取 Agent 与会话配置。 / Reads Agent and conversation configuration. */
    public readonly configuration: LingyaConfigurationApi;
    /** 管理会话、状态、分享和异步任务。 / Manages conversations, status, shares, and async tasks. */
    public readonly conversations: LingyaConversationsApi;
    /** 查询已持久化事件。 / Reads persisted events. */
    public readonly events: LingyaEventsApi;
    /** 管理附件与预签名 URL。 / Manages attachments and pre-signed URLs. */
    public readonly files: LingyaFilesApi;
    /** 回答用户问题并处理计划审批。 / Handles user answers and plan approval. */
    public readonly interactions: LingyaInteractionsApi;
    /** 查询引用元数据。 / Reads citation metadata. */
    public readonly knowledge: LingyaKnowledgeApi;
    /** 查询消息并控制排队消息。 / Reads messages and controls queued messages. */
    public readonly messages: LingyaMessagesApi;
    /** 查询、导出 SQL 结果与图表数据。 / Reads and exports SQL results and chart data. */
    public readonly sql: LingyaSqlApi;
    /** 查询工作区文件及预览。 / Reads workspace files and previews. */
    public readonly workspace: LingyaWorkspaceApi;

    /**
     * 兼容旧版本的原始生成 API；正常业务调用应使用绑定门面。 / Raw generated APIs retained for migration only.
     *
     * @deprecated 将在 1.0 移除。 / Scheduled for removal in 1.0.
     */
    public readonly lowLevel: LingyaAgentsLowLevelApis;

    public constructor(
        public readonly channelId: string,
        configuration: Configuration,
        private readonly signedFetch: typeof fetch,
        private readonly baseUrl: string,
    ) {
        const chat = new ChatApi(configuration);
        const configurationApi = new ConfigurationApi(configuration);
        const conversations = new ConversationsApi(configuration);
        const events = new EventsApi(configuration);
        const files = new FilesApi(configuration);
        const interactions = new InteractionsApi(configuration);
        const knowledge = new KnowledgeApi(configuration);
        const messages = new MessagesApi(configuration);
        const sql = new SQLApi(configuration);
        const workspace = new WorkspaceApi(configuration);
        this.lowLevel = new LingyaAgentsLowLevelApis(configurationApi, chat, conversations, sql, messages, events, interactions, files, knowledge, workspace);
        const rawRequest = this.rawRequest.bind(this);
        this.chat = new LingyaChatApi(channelId, chat, rawRequest);
        this.configuration = new LingyaConfigurationApi(channelId, configurationApi);
        this.conversations = new LingyaConversationsApi(channelId, conversations);
        this.events = new LingyaEventsApi(channelId, events);
        this.files = new LingyaFilesApi(channelId, files);
        this.interactions = new LingyaInteractionsApi(channelId, interactions);
        this.knowledge = new LingyaKnowledgeApi(channelId, knowledge);
        this.messages = new LingyaMessagesApi(channelId, messages);
        this.sql = new LingyaSqlApi(channelId, sql);
        this.workspace = new LingyaWorkspaceApi(channelId, workspace);
    }

    /**
     * 调用契约端点并按指定类型返回 JSON；优先使用上方生成的强类型 API。 / Calls a contract endpoint and decodes typed JSON.
     *
     * @param method - 大写 HTTP method。
     * @param suffix - 相对于 channel chat 根路径的已编码路径。
     * @param bodyJson - 最终发送并参与签名的 UTF-8 JSON 字符串；无请求体时省略。
     * @param query - 已按最终顺序组装的查询参数，允许重复键。
     * @returns 调用方指定的响应类型。
     * @throws [LingyaApiError] 当服务端返回非 2xx 状态。
     */
    /** @deprecated 使用对应的业务分组方法。 / Use the matching grouped facade operation. */
    public async request<T>(method: string, suffix: string, bodyJson?: string, query?: URLSearchParams): Promise<T> {
        const response = await this.rawRequest(method, suffix, bodyJson, query, 'application/json');
        return await response.json() as T;
    }

    /**
     * 调用无响应正文的契约端点。 / Calls a contract endpoint that has no response body.
     *
     * @param method - 大写 HTTP method。
     * @param suffix - 相对于 channel chat 根路径的已编码路径。
     * @param bodyJson - 最终发送并参与签名的 UTF-8 JSON 字符串。
     * @param query - 保留顺序的查询参数。
     * @returns 2xx HTTP 状态码。
     */
    /** @deprecated 使用对应的业务分组方法。 / Use the matching grouped facade operation. */
    public async requestStatus(method: string, suffix: string, bodyJson?: string, query?: URLSearchParams): Promise<number> {
        return (await this.rawRequest(method, suffix, bodyJson, query, 'application/json')).status;
    }

    /**
     * 下载二进制响应，返回精确响应字节。 / Downloads an exact binary response.
     *
     * @param method - HTTP method，通常为 `GET`。
     * @param suffix - 已编码的相对路径。
     * @param query - 保留顺序的查询参数。
     * @returns 未经文本转换的响应字节。
     */
    /** @deprecated 使用对应的业务分组方法。 / Use the matching grouped facade operation. */
    public async requestBinary(method: string, suffix: string, query?: URLSearchParams): Promise<Uint8Array> {
        const response = await this.rawRequest(method, suffix, undefined, query, 'application/octet-stream');
        return new Uint8Array(await response.arrayBuffer());
    }

    /**
     * 订阅对话 SSE，事件按契约判别联合返回。 / Streams SSE as the contract discriminated union.
     *
     * @param conversationId - 要订阅的会话 ID。
     * @param messageId - 触发本次生成的消息 ID。
     * @returns 支持取消的异步事件序列；未知 type 保留 `rawJson`。
     */
    /** @deprecated 使用 `chat.streamChatEvents(conversationId, { messageId })`。 / Use the channel-bound chat facade. */
    public streamChatEvents(conversationId: string, messageId: string): AsyncGenerator<LingyaAiChatBriefEvent> {
        return this.chat.streamChatEvents(conversationId, { messageId });
    }

    /**
     * 发送底层受控请求；调用前固定最终 path、query、Content-Type 与 body 字节。 / Sends an exactly signed low-level request.
     *
     * 每次调用重新生成 timestamp 与 nonce，不对写请求自动重试。
     *
     * @param method - HTTP method。
     * @param suffix - 已完成路径转义的相对路径；本方法不会二次编码。
     * @param bodyJson - 最终 JSON 字符串，最大 2 MiB；省略时 Content-Type 为空。
     * @param query - 最终查询参数；顺序和重复键均参与签名。
     * @param accept - 精确的 Accept 值，例如 `application/json`、`text/event-stream` 或 `text/csv`。
     * @returns 成功的原始 Fetch Response。
     * @throws [LingyaApiError] 当服务端返回非 2xx 状态。
     */
    /** @deprecated 使用 `lowLevel`，或使用对应的业务分组方法。 / Use `lowLevel` or a grouped facade operation. */
    public async rawRequest(method: string, suffix: string, bodyJson?: string, query?: URLSearchParams, accept = 'application/json', requestId?: string): Promise<Response> {
        const root = `${this.baseUrl.replace(/\/+$/, '')}/api/agents/channel/openapi/v1/${encodeURIComponent(this.channelId)}/chat`;
        const url = `${root}${suffix}${query === undefined || query.size === 0 ? '' : `?${query.toString()}`}`;
        const response = await this.signedFetch(url, {
            method,
            headers: { Accept: accept, ...(bodyJson === undefined ? {} : { 'Content-Type': 'application/json' }), ...(requestId === undefined ? {} : { 'X-Request-ID': requestId }) },
            body: bodyJson,
        });
        if (!response.ok) throw new LingyaApiError(method, suffix, response.status, await response.text());
        return response;
    }
}

/** 不含凭证的 HTTP 错误。 / HTTP failure that never includes credentials. */
export class LingyaApiError extends Error {
    public constructor(public readonly method: string, public readonly path: string, public readonly status: number, public readonly responseBody: string) {
        super(`${method} ${path} returned HTTP ${status}`);
        this.name = 'LingyaApiError';
    }
}
