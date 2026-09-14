import { Configuration } from './runtime';
import { ChatApi, ConfigurationApi, ConversationsApi, EventsApi, FilesApi, InteractionsApi, KnowledgeApi, MessagesApi, SQLApi, WorkspaceApi } from './apis';
import { createSignedFetch, type OpenApiCredentials } from './hmac';
import { decodeSse } from './sse';
import { decodeAiChatBriefEvent, type LingyaAiChatBriefEvent } from './events';

/** Lingya Agents SDK 入口，仅适用于可信服务端。 / Server-side Lingya Agents SDK entry point. */
export class LingyaAgentsClient {
    public constructor(
        private readonly baseUrl: string,
        public readonly channelId: string,
        private readonly credentials: OpenApiCredentials,
    ) {
        if (channelId.length === 0) throw new Error('channelId must not be empty');
    }

    /** 绑定外部用户身份；后续所有请求都以该身份独立签名。 / Binds one external user to all subsequent signed calls. */
    public forUser(externalUserId: string): LingyaAgentsUserClient {
        const signedFetch = createSignedFetch(this.credentials, externalUserId);
        const configuration = new Configuration({ basePath: this.baseUrl.replace(/\/+$/, ''), fetchApi: signedFetch });
        return new LingyaAgentsUserClient(this.channelId, configuration, signedFetch, this.baseUrl);
    }
}

/** 已绑定外部用户的强类型 API 集合。 / Strongly typed API collection bound to one external user. */
export class LingyaAgentsUserClient {
    public readonly chat: ChatApi;
    public readonly configuration: ConfigurationApi;
    public readonly conversations: ConversationsApi;
    public readonly events: EventsApi;
    public readonly files: FilesApi;
    public readonly interactions: InteractionsApi;
    public readonly knowledge: KnowledgeApi;
    public readonly messages: MessagesApi;
    public readonly sql: SQLApi;
    public readonly workspace: WorkspaceApi;

    public constructor(
        public readonly channelId: string,
        configuration: Configuration,
        private readonly signedFetch: typeof fetch,
        private readonly baseUrl: string,
    ) {
        this.chat = new ChatApi(configuration);
        this.configuration = new ConfigurationApi(configuration);
        this.conversations = new ConversationsApi(configuration);
        this.events = new EventsApi(configuration);
        this.files = new FilesApi(configuration);
        this.interactions = new InteractionsApi(configuration);
        this.knowledge = new KnowledgeApi(configuration);
        this.messages = new MessagesApi(configuration);
        this.sql = new SQLApi(configuration);
        this.workspace = new WorkspaceApi(configuration);
    }

    /** 调用契约端点并按指定类型返回 JSON；二进制响应使用 [requestBinary]。 / Calls a contract endpoint and decodes its typed JSON response. */
    public async request<T>(method: string, suffix: string, body?: object, query?: URLSearchParams): Promise<T> {
        const response = await this.rawRequest(method, suffix, body, query, 'application/json');
        return await response.json() as T;
    }

    /** 调用无响应正文的契约端点。 / Calls a contract endpoint that has no response body. */
    public async requestStatus(method: string, suffix: string, body?: object, query?: URLSearchParams): Promise<number> {
        return (await this.rawRequest(method, suffix, body, query, 'application/json')).status;
    }

    /** 下载二进制响应，返回精确响应字节。 / Downloads an exact binary response. */
    public async requestBinary(method: string, suffix: string, query?: URLSearchParams): Promise<Uint8Array> {
        const response = await this.rawRequest(method, suffix, undefined, query, 'application/octet-stream');
        return new Uint8Array(await response.arrayBuffer());
    }

    /** 订阅对话 SSE，事件按契约判别联合返回。 / Streams conversation SSE events as the contract discriminated union. */
    public async *streamChatEvents(conversationId: string, messageId: string): AsyncGenerator<LingyaAiChatBriefEvent> {
        const suffix = `/conversations/${encodeURIComponent(conversationId)}/stream`;
        const response = await this.rawRequest('POST', suffix, { messageId }, undefined, 'text/event-stream');
        for await (const data of decodeSse(response)) yield decodeAiChatBriefEvent(data);
    }

    /** 发送底层受控请求；HTTP 非成功响应抛出不包含 secret 的异常。 / Sends a controlled request and rejects non-success HTTP responses without exposing the secret. */
    public async rawRequest(method: string, suffix: string, body?: object, query?: URLSearchParams, accept = 'application/json'): Promise<Response> {
        const root = `${this.baseUrl.replace(/\/+$/, '')}/api/agents/channel/openapi/v1/${encodeURIComponent(this.channelId)}/chat`;
        const url = `${root}${suffix}${query === undefined || query.size === 0 ? '' : `?${query.toString()}`}`;
        const response = await this.signedFetch(url, {
            method,
            headers: { Accept: accept, ...(body === undefined ? {} : { 'Content-Type': 'application/json' }) },
            body: body === undefined ? undefined : JSON.stringify(body),
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
