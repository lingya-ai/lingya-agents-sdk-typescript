# Lingya Agents SDK for TypeScript

面向可信 Node.js 服务端的 Lingya Agents OpenAPI 强类型 SDK。契约包含 46 个公共接口，并生成了所有请求、响应、事件与工具扩展类型。

```ts
import { LingyaAgentsClient } from '@lingya-ai/agents-sdk';

const user = new LingyaAgentsClient('https://lingtong.lingya.tech/', channelId, {
  accessKey: process.env.OPENAPI_AK!,
  secretKey: process.env.OPENAPI_SK!,
}).forUser('external-user-id');

const submission = await user.chat.createChat({
  channelId,
  aiChatInput: { query: '你好' },
});

for await (const event of user.streamChatEvents(submission.conversationId, submission.messageId)) {
  if (event.type === 'end') break;
}
```

SDK 会在最终 URL、查询串、Content-Type 与 body 字节确定后签名。每次请求独立生成 nonce，secret 不进入请求、日志或异常。未知事件与工具扩展分别保留为带 `rawJson` 的明确 fallback。

本 SDK 不适用于浏览器、桌面或移动客户端，不能将 secret 分发给最终用户。
