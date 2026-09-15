# 灵涯 Agents TypeScript SDK
Lingya Agents SDK for TypeScript

这是面向可信 Node.js 服务端的灵涯 Agents OpenAPI 强类型 SDK；契约包含 46 个公共接口，并生成全部请求、响应、事件与工具扩展类型。
This strongly typed Lingya Agents OpenAPI SDK is designed for trusted Node.js servers. Its contract covers 46 public operations and generates every request, response, event, and tool-extension type.

## 安装
Installation

```bash
npm install @lingya-ai/agents-sdk
```

包同时支持 CommonJS `require`、ES module `import` 与 TypeScript 类型声明，运行时要求 Node.js 20 或更高版本。
The package supports CommonJS `require`, ES module `import`, and TypeScript declarations, and requires Node.js 20 or later.

## 调用与 SSE
Calls and SSE

```ts
import { LingyaAgentsClient } from '@lingya-ai/agents-sdk';

const user = new LingyaAgentsClient('https://lingtong.lingya.tech/', channelId, {
  accessKey: process.env.OPENAPI_AK!,
  secretKey: process.env.OPENAPI_SK!,
}).forUser('external-user-id');

const submission = await user.chat.createChat({
  query: '你好',
});

for await (const event of user.chat.streamChatEvents(
  submission.conversationId,
  { messageId: submission.messageId },
)) {
  if (event.type === 'end') break;
}
```

十个业务分组覆盖全部 46 个接口；`channelId` 只在根客户端构造时提供，`user.lowLevel` 仅作为迁移入口保留到 1.0。
Ten business groups cover all 46 operations; provide `channelId` only to the root client, while `user.lowLevel` remains a migration-only escape hatch until 1.0.

SDK 会在最终 URL、查询串、`Content-Type` 与正文（body）字节确定后签名；每次请求独立生成 nonce，secret 不会进入请求、日志或异常。
The SDK signs only after the final URL, query string, `Content-Type`, and body bytes are fixed. Every request receives a fresh nonce, and the secret is never included in requests, logs, or exceptions.

未知事件与工具扩展会分别保留为带 `rawJson` 的明确后备类型，已知结构不会退化为动态对象。
Unknown events and tool extensions are retained in explicit fallback types with `rawJson`; known structures never degrade into dynamic objects.

本 SDK 仅适用于可信服务端，不得在浏览器、桌面或移动客户端中分发 secret。
This SDK is for trusted servers only. Never distribute the secret in browser, desktop, or mobile applications.
