
# OpenApiToken

十分钟内有效的一次性渠道令牌，绑定签发时的渠道和用户身份。截止 expiresAt 前仅能认证一个新请求；认证成功即消费，业务失败不退还。每次新请求、重试或 SSE/WebSocket 重连都必须重新签发，不得缓存复用。使用 X-OpenAPI-Token，与所有 HMAC 鉴权头互斥，不能用于 presign。 / A single-use channel token valid for ten minutes, bound to the issuing channel and user. It authenticates only one new request before expiresAt and is consumed on successful authentication even if the business operation fails. Obtain a fresh token for every new request, retry, or SSE/WebSocket reconnection; never cache or reuse it. Send X-OpenAPI-Token without any HMAC authentication headers; tokens cannot call presign.

## Properties

Name | Type
------------ | -------------
`token` | string
`expiresAt` | Date

## Example

```typescript
import type { OpenApiToken } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "token": null,
  "expiresAt": null,
} satisfies OpenApiToken

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OpenApiToken
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


