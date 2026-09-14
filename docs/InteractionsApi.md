# InteractionsApi

All URIs are relative to *https://tenant.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**answerUserInput**](InteractionsApi.md#answeruserinput) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/user-input/answer | 提交用户回答 / Submit a user answer |
| [**approvePlan**](InteractionsApi.md#approveplan) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/plan/approve | 提交计划审批 / Submit plan approval |
| [**getPlanStatus**](InteractionsApi.md#getplanstatus) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/plan/{planId}/status | 查询计划审批状态 / Get plan approval status |
| [**getUserInputStatus**](InteractionsApi.md#getuserinputstatus) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/user-input/{questionId}/status | 查询用户问答状态 / Get user-input status |



## answerUserInput

> OperationResult answerUserInput(channelId, userInputAnswerInput)

提交用户回答 / Submit a user answer

提交用户回答 / Submit a user answer 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  InteractionsApi,
} from '@lingya-ai/agents-sdk';
import type { AnswerUserInputRequest } from '@lingya-ai/agents-sdk';

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
  const api = new InteractionsApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // UserInputAnswerInput | 提交用户回答 / Submit a user answer 的 JSON 请求参数。 / JSON request parameters for answerUserInput.
    userInputAnswerInput: ...,
  } satisfies AnswerUserInputRequest;

  try {
    const data = await api.answerUserInput(body);
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
| **userInputAnswerInput** | [UserInputAnswerInput](UserInputAnswerInput.md) | 提交用户回答 / Submit a user answer 的 JSON 请求参数。 / JSON request parameters for answerUserInput. | |

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 提交用户回答 / Submit a user answer 的成功响应。 / Successful response for answerUserInput. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## approvePlan

> OperationResult approvePlan(channelId, planApprovalInput)

提交计划审批 / Submit plan approval

提交计划审批 / Submit plan approval 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  InteractionsApi,
} from '@lingya-ai/agents-sdk';
import type { ApprovePlanRequest } from '@lingya-ai/agents-sdk';

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
  const api = new InteractionsApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // PlanApprovalInput | 提交计划审批 / Submit plan approval 的 JSON 请求参数。 / JSON request parameters for approvePlan.
    planApprovalInput: ...,
  } satisfies ApprovePlanRequest;

  try {
    const data = await api.approvePlan(body);
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
| **planApprovalInput** | [PlanApprovalInput](PlanApprovalInput.md) | 提交计划审批 / Submit plan approval 的 JSON 请求参数。 / JSON request parameters for approvePlan. | |

### Return type

[**OperationResult**](OperationResult.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 提交计划审批 / Submit plan approval 的成功响应。 / Successful response for approvePlan. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanStatus

> PlanStatus getPlanStatus(channelId, planId)

查询计划审批状态 / Get plan approval status

查询计划审批状态 / Get plan approval status 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  InteractionsApi,
} from '@lingya-ai/agents-sdk';
import type { GetPlanStatusRequest } from '@lingya-ai/agents-sdk';

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
  const api = new InteractionsApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 等待审批的计划 ID。 / Pending plan-approval ID.
    planId: planId_example,
  } satisfies GetPlanStatusRequest;

  try {
    const data = await api.getPlanStatus(body);
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
| **planId** | `string` | 等待审批的计划 ID。 / Pending plan-approval ID. | [Defaults to `undefined`] |

### Return type

[**PlanStatus**](PlanStatus.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 查询计划审批状态 / Get plan approval status 的成功响应。 / Successful response for getPlanStatus. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getUserInputStatus

> UserInputStatus getUserInputStatus(channelId, questionId, conversationId, messageId)

查询用户问答状态 / Get user-input status

查询用户问答状态 / Get user-input status 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  InteractionsApi,
} from '@lingya-ai/agents-sdk';
import type { GetUserInputStatusRequest } from '@lingya-ai/agents-sdk';

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
  const api = new InteractionsApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 等待回答的问题 ID。 / Pending question ID.
    questionId: questionId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | 用户消息 ID；必须属于指定会话。 / User-message ID owned by the specified conversation.
    messageId: messageId_example,
  } satisfies GetUserInputStatusRequest;

  try {
    const data = await api.getUserInputStatus(body);
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
| **questionId** | `string` | 等待回答的问题 ID。 / Pending question ID. | [Defaults to `undefined`] |
| **conversationId** | `string` | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user. | [Defaults to `undefined`] |
| **messageId** | `string` | 用户消息 ID；必须属于指定会话。 / User-message ID owned by the specified conversation. | [Defaults to `undefined`] |

### Return type

[**UserInputStatus**](UserInputStatus.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 查询用户问答状态 / Get user-input status 的成功响应。 / Successful response for getUserInputStatus. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

