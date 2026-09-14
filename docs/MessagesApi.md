# MessagesApi

All URIs are relative to *https://tenant.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelQueuedMessage**](MessagesApi.md#cancelqueuedmessage) | **DELETE** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/messages/{messageId}/queue | 取消排队消息 / Cancel a queued message |
| [**getConversationAsyncTask**](MessagesApi.md#getconversationasynctask) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/async-tasks/{asyncTaskId} | 读取异步任务 / Get an asynchronous task |
| [**getConversationMessage**](MessagesApi.md#getconversationmessage) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/messages/{messageId} | 读取单条会话消息 / Get a conversation message |
| [**listConversationAsyncTasks**](MessagesApi.md#listconversationasynctasks) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/async-tasks | 分页查询异步任务 / List asynchronous tasks |
| [**listConversationMessages**](MessagesApi.md#listconversationmessages) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/messages | 分页查询会话消息 / List conversation messages |



## cancelQueuedMessage

> ConversationMessage cancelQueuedMessage(channelId, conversationId, messageId)

取消排队消息 / Cancel a queued message

取消排队消息 / Cancel a queued message 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@lingya-ai/agents-sdk';
import type { CancelQueuedMessageRequest } from '@lingya-ai/agents-sdk';

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
  const api = new MessagesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | 用户消息 ID；必须属于指定会话。 / User-message ID owned by the specified conversation.
    messageId: messageId_example,
  } satisfies CancelQueuedMessageRequest;

  try {
    const data = await api.cancelQueuedMessage(body);
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

[**ConversationMessage**](ConversationMessage.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 取消排队消息 / Cancel a queued message 的成功响应。 / Successful response for cancelQueuedMessage. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConversationAsyncTask

> AsyncTask getConversationAsyncTask(channelId, conversationId, asyncTaskId)

读取异步任务 / Get an asynchronous task

读取异步任务 / Get an asynchronous task 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@lingya-ai/agents-sdk';
import type { GetConversationAsyncTaskRequest } from '@lingya-ai/agents-sdk';

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
  const api = new MessagesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | 异步任务 ID。 / Asynchronous task ID.
    asyncTaskId: asyncTaskId_example,
  } satisfies GetConversationAsyncTaskRequest;

  try {
    const data = await api.getConversationAsyncTask(body);
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
| **asyncTaskId** | `string` | 异步任务 ID。 / Asynchronous task ID. | [Defaults to `undefined`] |

### Return type

[**AsyncTask**](AsyncTask.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 读取异步任务 / Get an asynchronous task 的成功响应。 / Successful response for getConversationAsyncTask. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConversationMessage

> ConversationMessage getConversationMessage(channelId, conversationId, messageId)

读取单条会话消息 / Get a conversation message

读取单条会话消息 / Get a conversation message 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@lingya-ai/agents-sdk';
import type { GetConversationMessageRequest } from '@lingya-ai/agents-sdk';

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
  const api = new MessagesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | 用户消息 ID；必须属于指定会话。 / User-message ID owned by the specified conversation.
    messageId: messageId_example,
  } satisfies GetConversationMessageRequest;

  try {
    const data = await api.getConversationMessage(body);
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

[**ConversationMessage**](ConversationMessage.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 读取单条会话消息 / Get a conversation message 的成功响应。 / Successful response for getConversationMessage. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConversationAsyncTasks

> AsyncTaskPage listConversationAsyncTasks(channelId, conversationId, current, size, orderBy, orderDirection, orderNullHandling, keyword, status)

分页查询异步任务 / List asynchronous tasks

分页查询异步任务 / List asynchronous tasks 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@lingya-ai/agents-sdk';
import type { ListConversationAsyncTasksRequest } from '@lingya-ai/agents-sdk';

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
  const api = new MessagesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // number | 从 0 开始的页码。 / Zero-based page index. (optional)
    current: 56,
    // number | 单页记录数。 / Number of records per page. (optional)
    size: 56,
    // Array<string> | 排序字段列表。 / Ordered list of sort fields. (optional)
    orderBy: ...,
    // 'ASC' | 'DESC' | 排序方向。 / Sort direction. (optional)
    orderDirection: orderDirection_example,
    // 'NATIVE' | 'NULLS_FIRST' | 'NULLS_LAST' | 空值排序策略。 / Null ordering strategy. (optional)
    orderNullHandling: orderNullHandling_example,
    // string | 标题或正文检索关键字。 / Title or content search keyword. (optional)
    keyword: keyword_example,
    // Array<string> | 状态过滤条件。 / Status filter. (optional)
    status: ...,
  } satisfies ListConversationAsyncTasksRequest;

  try {
    const data = await api.listConversationAsyncTasks(body);
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
| **current** | `number` | 从 0 开始的页码。 / Zero-based page index. | [Optional] [Defaults to `undefined`] |
| **size** | `number` | 单页记录数。 / Number of records per page. | [Optional] [Defaults to `30`] |
| **orderBy** | `Array<string>` | 排序字段列表。 / Ordered list of sort fields. | [Optional] |
| **orderDirection** | `ASC`, `DESC` | 排序方向。 / Sort direction. | [Optional] [Defaults to `&#39;ASC&#39;`] [Enum: ASC, DESC] |
| **orderNullHandling** | `NATIVE`, `NULLS_FIRST`, `NULLS_LAST` | 空值排序策略。 / Null ordering strategy. | [Optional] [Defaults to `&#39;NATIVE&#39;`] [Enum: NATIVE, NULLS_FIRST, NULLS_LAST] |
| **keyword** | `string` | 标题或正文检索关键字。 / Title or content search keyword. | [Optional] [Defaults to `undefined`] |
| **status** | `Array<string>` | 状态过滤条件。 / Status filter. | [Optional] |

### Return type

[**AsyncTaskPage**](AsyncTaskPage.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 分页查询异步任务 / List asynchronous tasks 的成功响应。 / Successful response for listConversationAsyncTasks. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listConversationMessages

> ConversationMessagePage listConversationMessages(channelId, conversationId, current, size, orderBy, orderDirection, orderNullHandling, keyword)

分页查询会话消息 / List conversation messages

分页查询会话消息 / List conversation messages 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  MessagesApi,
} from '@lingya-ai/agents-sdk';
import type { ListConversationMessagesRequest } from '@lingya-ai/agents-sdk';

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
  const api = new MessagesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // number | 从 0 开始的页码。 / Zero-based page index. (optional)
    current: 56,
    // number | 单页记录数。 / Number of records per page. (optional)
    size: 56,
    // Array<string> | 排序字段列表。 / Ordered list of sort fields. (optional)
    orderBy: ...,
    // 'ASC' | 'DESC' | 排序方向。 / Sort direction. (optional)
    orderDirection: orderDirection_example,
    // 'NATIVE' | 'NULLS_FIRST' | 'NULLS_LAST' | 空值排序策略。 / Null ordering strategy. (optional)
    orderNullHandling: orderNullHandling_example,
    // string | 标题或正文检索关键字。 / Title or content search keyword. (optional)
    keyword: keyword_example,
  } satisfies ListConversationMessagesRequest;

  try {
    const data = await api.listConversationMessages(body);
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
| **current** | `number` | 从 0 开始的页码。 / Zero-based page index. | [Optional] [Defaults to `undefined`] |
| **size** | `number` | 单页记录数。 / Number of records per page. | [Optional] [Defaults to `30`] |
| **orderBy** | `Array<string>` | 排序字段列表。 / Ordered list of sort fields. | [Optional] |
| **orderDirection** | `ASC`, `DESC` | 排序方向。 / Sort direction. | [Optional] [Defaults to `&#39;ASC&#39;`] [Enum: ASC, DESC] |
| **orderNullHandling** | `NATIVE`, `NULLS_FIRST`, `NULLS_LAST` | 空值排序策略。 / Null ordering strategy. | [Optional] [Defaults to `&#39;NATIVE&#39;`] [Enum: NATIVE, NULLS_FIRST, NULLS_LAST] |
| **keyword** | `string` | 标题或正文检索关键字。 / Title or content search keyword. | [Optional] [Defaults to `undefined`] |

### Return type

[**ConversationMessagePage**](ConversationMessagePage.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 分页查询会话消息 / List conversation messages 的成功响应。 / Successful response for listConversationMessages. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

