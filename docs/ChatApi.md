# ChatApi

All URIs are relative to *https://tenant.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**compactConversation**](ChatApi.md#compactconversation) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/compact | 压缩会话上下文 / Compact conversation context |
| [**continueChat**](ChatApi.md#continuechat) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId} | 向已有会话提交消息 / Submit a message to an existing conversation |
| [**createChat**](ChatApi.md#createchat) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat | 创建会话并提交消息 / Create a conversation and submit a message |
| [**interruptConversation**](ChatApi.md#interruptconversation) | **DELETE** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/interrupt | 中断会话执行 / Interrupt conversation execution |
| [**probeEventStream**](ChatApi.md#probeeventstream) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/stream-probe | 探测 SSE 连接 / Probe the SSE connection |
| [**streamChatEvents**](ChatApi.md#streamchatevents) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/stream | 订阅消息事件流 / Stream message events |



## compactConversation

> compactConversation(channelId, conversationId, force)

压缩会话上下文 / Compact conversation context

压缩会话上下文 / Compact conversation context 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@lingya-ai/agents-sdk';
import type { CompactConversationRequest } from '@lingya-ai/agents-sdk';

async function example() {
  console.log("🚀 Testing @lingya-ai/agents-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: OpenApiUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiAccessKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiSignature
    apiKey: "YOUR API KEY",
  });
  const api = new ChatApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // boolean | 是否忽略当前阈值并强制压缩。 / Whether to compact regardless of the current threshold. (optional)
    force: true,
  } satisfies CompactConversationRequest;

  try {
    const data = await api.compactConversation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **channelId** | `string` | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID. | [Defaults to `undefined`] |
| **conversationId** | `string` | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user. | [Defaults to `undefined`] |
| **force** | `boolean` | 是否忽略当前阈值并强制压缩。 / Whether to compact regardless of the current threshold. | [Optional] [Defaults to `true`] |

### Return type

`void` (Empty response body)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | 压缩会话上下文 / Compact conversation context 的成功响应。 / Successful response for compactConversation. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## continueChat

> AiChatSubmission continueChat(channelId, conversationId, aiChatInput)

向已有会话提交消息 / Submit a message to an existing conversation

向已有会话提交消息 / Submit a message to an existing conversation 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@lingya-ai/agents-sdk';
import type { ContinueChatRequest } from '@lingya-ai/agents-sdk';

async function example() {
  console.log("🚀 Testing @lingya-ai/agents-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: OpenApiUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiAccessKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiSignature
    apiKey: "YOUR API KEY",
  });
  const api = new ChatApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // AiChatInput | 向已有会话提交消息 / Submit a message to an existing conversation 的 JSON 请求参数。 / JSON request parameters for continueChat.
    aiChatInput: ...,
  } satisfies ContinueChatRequest;

  try {
    const data = await api.continueChat(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **channelId** | `string` | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID. | [Defaults to `undefined`] |
| **conversationId** | `string` | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user. | [Defaults to `undefined`] |
| **aiChatInput** | [AiChatInput](AiChatInput.md) | 向已有会话提交消息 / Submit a message to an existing conversation 的 JSON 请求参数。 / JSON request parameters for continueChat. | |

### Return type

[**AiChatSubmission**](AiChatSubmission.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 向已有会话提交消息 / Submit a message to an existing conversation 的成功响应。 / Successful response for continueChat. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createChat

> AiChatSubmission createChat(channelId, aiChatInput)

创建会话并提交消息 / Create a conversation and submit a message

创建会话并提交消息 / Create a conversation and submit a message 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@lingya-ai/agents-sdk';
import type { CreateChatRequest } from '@lingya-ai/agents-sdk';

async function example() {
  console.log("🚀 Testing @lingya-ai/agents-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: OpenApiUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiAccessKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiSignature
    apiKey: "YOUR API KEY",
  });
  const api = new ChatApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // AiChatInput | 创建会话并提交消息 / Create a conversation and submit a message 的 JSON 请求参数。 / JSON request parameters for createChat.
    aiChatInput: ...,
  } satisfies CreateChatRequest;

  try {
    const data = await api.createChat(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **channelId** | `string` | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID. | [Defaults to `undefined`] |
| **aiChatInput** | [AiChatInput](AiChatInput.md) | 创建会话并提交消息 / Create a conversation and submit a message 的 JSON 请求参数。 / JSON request parameters for createChat. | |

### Return type

[**AiChatSubmission**](AiChatSubmission.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 创建会话并提交消息 / Create a conversation and submit a message 的成功响应。 / Successful response for createChat. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## interruptConversation

> interruptConversation(channelId, conversationId)

中断会话执行 / Interrupt conversation execution

中断会话执行 / Interrupt conversation execution 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@lingya-ai/agents-sdk';
import type { InterruptConversationRequest } from '@lingya-ai/agents-sdk';

async function example() {
  console.log("🚀 Testing @lingya-ai/agents-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: OpenApiUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiAccessKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiSignature
    apiKey: "YOUR API KEY",
  });
  const api = new ChatApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
  } satisfies InterruptConversationRequest;

  try {
    const data = await api.interruptConversation(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **channelId** | `string` | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID. | [Defaults to `undefined`] |
| **conversationId** | `string` | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 中断会话执行 / Interrupt conversation execution 的成功响应。 / Successful response for interruptConversation. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## probeEventStream

> ChatStreamProbeEvent probeEventStream(channelId, chatStreamProbeInput, xRequestID)

探测 SSE 连接 / Probe the SSE connection

探测 SSE 连接 / Probe the SSE connection 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@lingya-ai/agents-sdk';
import type { ProbeEventStreamRequest } from '@lingya-ai/agents-sdk';

async function example() {
  console.log("🚀 Testing @lingya-ai/agents-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: OpenApiUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiAccessKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiSignature
    apiKey: "YOUR API KEY",
  });
  const api = new ChatApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // ChatStreamProbeInput | 探测 SSE 连接 / Probe the SSE connection 的 JSON 请求参数。 / JSON request parameters for probeEventStream.
    chatStreamProbeInput: ...,
    // string | 可选诊断请求 ID，便于关联客户端与服务端日志。 / Optional diagnostic request ID used to correlate client and server logs. (optional)
    xRequestID: xRequestID_example,
  } satisfies ProbeEventStreamRequest;

  try {
    const data = await api.probeEventStream(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **channelId** | `string` | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID. | [Defaults to `undefined`] |
| **chatStreamProbeInput** | [ChatStreamProbeInput](ChatStreamProbeInput.md) | 探测 SSE 连接 / Probe the SSE connection 的 JSON 请求参数。 / JSON request parameters for probeEventStream. | |
| **xRequestID** | `string` | 可选诊断请求 ID，便于关联客户端与服务端日志。 / Optional diagnostic request ID used to correlate client and server logs. | [Optional] [Defaults to `undefined`] |

### Return type

[**ChatStreamProbeEvent**](ChatStreamProbeEvent.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/event-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server-Sent Events stream |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## streamChatEvents

> AiChatBriefEvent streamChatEvents(channelId, conversationId, aiChatStreamInput, xRequestID)

订阅消息事件流 / Stream message events

订阅消息事件流 / Stream message events 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  ChatApi,
} from '@lingya-ai/agents-sdk';
import type { StreamChatEventsRequest } from '@lingya-ai/agents-sdk';

async function example() {
  console.log("🚀 Testing @lingya-ai/agents-sdk SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: OpenApiUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiAccessKey
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiTimestamp
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiNonce
    apiKey: "YOUR API KEY",
    // To configure API key authorization: OpenApiSignature
    apiKey: "YOUR API KEY",
  });
  const api = new ChatApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // AiChatStreamInput | 订阅消息事件流 / Stream message events 的 JSON 请求参数。 / JSON request parameters for streamChatEvents.
    aiChatStreamInput: ...,
    // string | 可选诊断请求 ID，便于关联客户端与服务端日志。 / Optional diagnostic request ID used to correlate client and server logs. (optional)
    xRequestID: xRequestID_example,
  } satisfies StreamChatEventsRequest;

  try {
    const data = await api.streamChatEvents(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **channelId** | `string` | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID. | [Defaults to `undefined`] |
| **conversationId** | `string` | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user. | [Defaults to `undefined`] |
| **aiChatStreamInput** | [AiChatStreamInput](AiChatStreamInput.md) | 订阅消息事件流 / Stream message events 的 JSON 请求参数。 / JSON request parameters for streamChatEvents. | |
| **xRequestID** | `string` | 可选诊断请求 ID，便于关联客户端与服务端日志。 / Optional diagnostic request ID used to correlate client and server logs. | [Optional] [Defaults to `undefined`] |

### Return type

[**AiChatBriefEvent**](AiChatBriefEvent.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `text/event-stream`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Server-Sent Events stream |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

