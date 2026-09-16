# 灵涯 Agents TypeScript SDK
Lingya Agents SDK for TypeScript

用于在 Node.js 可信服务端调用灵涯 Agents OpenAPI。
Use this SDK to call Lingya Agents OpenAPI from a trusted Node.js server.

## 安装
Installation

```bash
npm install @lingya-ai/agents-sdk@0.4.0
```

运行环境需要 Node.js 20 或更高版本。
The runtime requires Node.js 20 or later.

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
  if (error instanceof ApiError) console.error(error.status, error.responseBody);
}
```

请只在可信服务端保存 `secretKey`，不要将其放入浏览器、移动端、桌面端或日志。
Keep `secretKey` on trusted servers only; never put it in browsers, mobile apps, desktop apps, or logs.
