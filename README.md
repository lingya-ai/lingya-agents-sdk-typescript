# 灵涯 Agents TypeScript SDK
Lingya Agents SDK for TypeScript

支持 Node.js 服务端 HMAC 认证及浏览器一次性令牌认证。
Use HMAC on trusted Node.js servers or single-use tokens in browsers.

## 安装
Installation

```bash
npm install @lingya-ai/agents-sdk@0.7.0
```

Node 入口需要 Node.js 20 或更高版本；浏览器入口使用现代 Web API。
The runtime requires Node.js 20 or later.

## 一次性令牌与浏览器

浏览器使用专用入口；支持浏览器条件导出的打包器也会自动选择此入口。它不包含 `node:crypto`，只接受 token 回调。服务端入口同时支持 HMAC 和 token。
The browser entry excludes Node crypto and only accepts token callbacks. The Node entry supports both authentication modes.

```typescript
import { AgentsClient } from '@lingya-ai/agents-sdk/browser';

const client = new AgentsClient({
    baseUrl: 'https://agents.example.com',
    channelId: 'channel-id',
    auth: {
        type: 'token',
        tokenProvider: async ({ fetch, signal }) => {
            // 自己的业务服务端根据登录用户签发一枚新令牌。
            const response = await fetch('/api/agents-token', {
                method: 'POST', credentials: 'same-origin', signal,
            });
            if (!response.ok) throw new Error('获取令牌失败');
            const { token } = await response.json();
            return token;
        },
    },
});
await client.chat.createChat({ query: '你好' });
```

Node 新选项构造支持 `auth: { type: 'hmac', accessKey, secretKey, externalUserId }`，并在 `client` 上直接提供业务分组；原有三参数构造加 `forUser` 保持兼容。选项构造已绑定身份，不能再调用 `forUser` 切换用户。浏览器部署需要服务端 CORS 放行页面来源和 `X-OpenAPI-Token` 请求头。浏览器 SSE 使用 Fetch 响应流和增量 `TextDecoder` 解码，不依赖 `TextDecoderStream`；取消与计时由 SDK 管理，不依赖 `AbortSignal.any/timeout` 或 `throwIfAborted`。浏览器仍需提供 Fetch、ReadableStream、TextDecoder 和 AbortController。
Node options also accept HMAC credentials and an external user ID. Legacy constructors remain supported. Options clients already bind identity. Configure CORS for your browser origin and token header; Fetch-based SSE uses incremental TextDecoder decoding without TextDecoderStream. The SDK manages cancellation and timers without AbortSignal.any/timeout or throwIfAborted; Fetch, ReadableStream, TextDecoder, and AbortController are still required.

令牌有效期十分钟，但只允许认证一次；每次请求、手动重试和 SSE/WebSocket 重新连接都独立调用回调，不缓存、不合并并发签发、不自动重试或跟随重定向。认证成功后即消费，业务失败不能复用。Token 模式不携带 HMAC 头，不能调用 `createOpenApiToken`；需由持有 AK/SK 的可信服务端签发。回调异常及非法 token 会在业务请求发出前拒绝。`/api/agents-token`、`issue_fresh_token` / `issueFreshToken` 都是业务系统示意，并非 SDK 新增接口。签发服务应从登录态确定用户和允许的渠道。
Tokens expire after ten minutes but authenticate only once. Each request, explicit retry, and SSE/WebSocket reconnection invokes the provider independently. Token clients do not cache, share issuance, retry automatically, follow redirects, send HMAC headers, or call presign. Use a trusted server to issue tokens for the authenticated business user and permitted channel; the example issuer functions/routes belong to your application.

## 快速开始
Quick start

```typescript
import { AgentsClient } from '@lingya-ai/agents-sdk';

const user = new AgentsClient(
  'https://lingtong.lingya.tech/',
  process.env.OPENAPI_CHANNEL_ID!,
  {
    accessKey: process.env.OPENAPI_AK!,
    secretKey: process.env.OPENAPI_SK!,
  },
).forUser('external-user-id');

const submission = await user.chat.createChat({ query: '你好' });
```

`channelId` 只在创建 `AgentsClient` 时提供，业务方法不再接收它。
Provide `channelId` only when creating `AgentsClient`; business methods do not accept it.

## SSE 事件流
SSE event stream

```typescript
for await (const event of user.chat.streamChatEvents(
  submission.conversationId,
  { messageId: submission.messageId },
)) {
  console.log(event.type);
}
```

## API 分组
API groups

可用分组为 `chat`、`configuration`、`conversations`、`events`、`files`、`interactions`、`knowledge`、`messages`、`sql` 和 `workspace`。
Available groups are `chat`, `configuration`, `conversations`, `events`, `files`, `interactions`, `knowledge`, `messages`, `sql`, and `workspace`.

## 错误处理
Error handling

```typescript
import { ApiError } from '@lingya-ai/agents-sdk';

try {
  await user.conversations.getConversationTitle('conversation-id');
} catch (error) {
  if (error instanceof ApiError) console.error(error.kind, error.status, error.code, error.message, error.fields, error.requestId);
}
```

请只在可信服务端保存 `secretKey`，不要将其放入浏览器、移动端、桌面端或日志。
Keep `secretKey` on trusted servers only; never put it in browsers, mobile apps, desktop apps, or logs.


## 0.7 请求生命周期与订阅

```typescript
const client = new AgentsClient({
    baseUrl, channelId, fetch: customFetch,
    auth: { type: 'token', tokenProvider: async ({ fetch, signal }) => {
        const response = await fetch('/api/agents-token', { method: 'POST', signal });
        if (!response.ok) throw new Error('Token issuance failed');
        return (await response.json()).token;
    } },
});
const controller = new AbortController();
await client.configuration.getAgentsConfig({ signal: controller.signal, timeoutMs: 5000 });
const subscription = client.chat.subscribeChatEvents(conversationId, { messageId }, {
    transport: 'websocket', signal: controller.signal, idleTimeoutMs: 30000,
    onConnectionEvent: event => console.debug(event),
});
try { for await (const event of subscription) consume(event); }
finally { subscription.close(); await subscription.closed; }
const download = await client.sql.exportSqlQueryResultWithMetadata(conversationId, resultId, { format: 'CSV' });
```

超时覆盖获取令牌、建连和完整响应；SDK 不自动重试或重连。业务 End 立即释放连接，WebSocket complete/1000 不补造 End。错误包含可判别分类、HTTP 状态和可取得的业务错误及请求标识。详见 [生命周期、错误和生成机制](docs/request-lifecycle.md)。运行时由契约项目统一生成，修改生成产物会被 CI 检出。
