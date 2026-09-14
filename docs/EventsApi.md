# EventsApi

All URIs are relative to *https://tenant.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getChatEvents**](EventsApi.md#getchatevents) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/events | 读取消息事件 / Get message events |
| [**getChatEventsBatch**](EventsApi.md#getchateventsbatch) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/events/batch | 批量读取消息事件 / Get message events in batch |



## getChatEvents

> AiChatBriefEventList getChatEvents(channelId, conversationId, messageId)

读取消息事件 / Get message events

读取消息事件 / Get message events 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@lingya-ai/agents-sdk';
import type { GetChatEventsRequest } from '@lingya-ai/agents-sdk';

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
  const api = new EventsApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | 用户消息 ID；必须属于指定会话。 / User-message ID owned by the specified conversation.
    messageId: messageId_example,
  } satisfies GetChatEventsRequest;

  try {
    const data = await api.getChatEvents(body);
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
| **messageId** | `string` | 用户消息 ID；必须属于指定会话。 / User-message ID owned by the specified conversation. | [Defaults to `undefined`] |

### Return type

[**AiChatBriefEventList**](AiChatBriefEventList.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 读取消息事件 / Get message events 的成功响应。 / Successful response for getChatEvents. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getChatEventsBatch

> AiChatEventsBatch getChatEventsBatch(channelId, aiChatEventsBatchInput)

批量读取消息事件 / Get message events in batch

批量读取消息事件 / Get message events in batch 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  EventsApi,
} from '@lingya-ai/agents-sdk';
import type { GetChatEventsBatchRequest } from '@lingya-ai/agents-sdk';

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
  const api = new EventsApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // AiChatEventsBatchInput | 批量读取消息事件 / Get message events in batch 的 JSON 请求参数。 / JSON request parameters for getChatEventsBatch.
    aiChatEventsBatchInput: ...,
  } satisfies GetChatEventsBatchRequest;

  try {
    const data = await api.getChatEventsBatch(body);
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
| **aiChatEventsBatchInput** | [AiChatEventsBatchInput](AiChatEventsBatchInput.md) | 批量读取消息事件 / Get message events in batch 的 JSON 请求参数。 / JSON request parameters for getChatEventsBatch. | |

### Return type

[**AiChatEventsBatch**](AiChatEventsBatch.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 批量读取消息事件 / Get message events in batch 的成功响应。 / Successful response for getChatEventsBatch. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

