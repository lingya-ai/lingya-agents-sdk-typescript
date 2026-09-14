# FilesApi

All URIs are relative to *https://tenant.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**confirmPreSignedUpload**](FilesApi.md#confirmpresignedupload) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/files/pre-signed-url/confirm | 确认预签名上传 / Confirm a presigned upload |
| [**createFileByContentMd5**](FilesApi.md#createfilebycontentmd5) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/files/contentMd5 | 按 MD5 复用文件 / Reuse a file by MD5 |
| [**createPreSignedUpload**](FilesApi.md#createpresignedupload) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/files/pre-signed-url/write | 创建预签名上传地址 / Create a presigned upload URL |
| [**fileExistsByContentMd5**](FilesApi.md#fileexistsbycontentmd5) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/files/meta/contentMd5 | 检查 MD5 文件是否存在 / Check file existence by MD5 |
| [**getConversationFilePreview**](FilesApi.md#getconversationfilepreview) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/files/{fileId}/preview | 创建会话文件预览地址 / Create a conversation file preview URL |
| [**getPlanIntermediateFilePreview**](FilesApi.md#getplanintermediatefilepreview) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/messages/{messageId}/plan-intermediate-files/{fileId}/preview | 创建计划快照预览地址 / Create a plan snapshot preview URL |



## confirmPreSignedUpload

> AgentFile confirmPreSignedUpload(channelId, confirmUploadInput)

确认预签名上传 / Confirm a presigned upload

确认预签名上传 / Confirm a presigned upload 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@lingya-ai/agents-sdk';
import type { ConfirmPreSignedUploadRequest } from '@lingya-ai/agents-sdk';

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
  const api = new FilesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // ConfirmUploadInput | 确认预签名上传 / Confirm a presigned upload 的 JSON 请求参数。 / JSON request parameters for confirmPreSignedUpload.
    confirmUploadInput: ...,
  } satisfies ConfirmPreSignedUploadRequest;

  try {
    const data = await api.confirmPreSignedUpload(body);
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
| **confirmUploadInput** | [ConfirmUploadInput](ConfirmUploadInput.md) | 确认预签名上传 / Confirm a presigned upload 的 JSON 请求参数。 / JSON request parameters for confirmPreSignedUpload. | |

### Return type

[**AgentFile**](AgentFile.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 确认预签名上传 / Confirm a presigned upload 的成功响应。 / Successful response for confirmPreSignedUpload. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createFileByContentMd5

> AgentFile createFileByContentMd5(channelId, createFileInput)

按 MD5 复用文件 / Reuse a file by MD5

按 MD5 复用文件 / Reuse a file by MD5 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@lingya-ai/agents-sdk';
import type { CreateFileByContentMd5Request } from '@lingya-ai/agents-sdk';

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
  const api = new FilesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // CreateFileInput | 按 MD5 复用文件 / Reuse a file by MD5 的 JSON 请求参数。 / JSON request parameters for createFileByContentMd5.
    createFileInput: ...,
  } satisfies CreateFileByContentMd5Request;

  try {
    const data = await api.createFileByContentMd5(body);
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
| **createFileInput** | [CreateFileInput](CreateFileInput.md) | 按 MD5 复用文件 / Reuse a file by MD5 的 JSON 请求参数。 / JSON request parameters for createFileByContentMd5. | |

### Return type

[**AgentFile**](AgentFile.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 按 MD5 复用文件 / Reuse a file by MD5 的成功响应。 / Successful response for createFileByContentMd5. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createPreSignedUpload

> GeneratePreSignedUrlOutput createPreSignedUpload(channelId, generatePreSignedUrlInput)

创建预签名上传地址 / Create a presigned upload URL

创建预签名上传地址 / Create a presigned upload URL 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@lingya-ai/agents-sdk';
import type { CreatePreSignedUploadRequest } from '@lingya-ai/agents-sdk';

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
  const api = new FilesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // GeneratePreSignedUrlInput | 创建预签名上传地址 / Create a presigned upload URL 的 JSON 请求参数。 / JSON request parameters for createPreSignedUpload.
    generatePreSignedUrlInput: ...,
  } satisfies CreatePreSignedUploadRequest;

  try {
    const data = await api.createPreSignedUpload(body);
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
| **generatePreSignedUrlInput** | [GeneratePreSignedUrlInput](GeneratePreSignedUrlInput.md) | 创建预签名上传地址 / Create a presigned upload URL 的 JSON 请求参数。 / JSON request parameters for createPreSignedUpload. | |

### Return type

[**GeneratePreSignedUrlOutput**](GeneratePreSignedUrlOutput.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 创建预签名上传地址 / Create a presigned upload URL 的成功响应。 / Successful response for createPreSignedUpload. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## fileExistsByContentMd5

> FileExists fileExistsByContentMd5(channelId, contentMd5)

检查 MD5 文件是否存在 / Check file existence by MD5

检查 MD5 文件是否存在 / Check file existence by MD5 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@lingya-ai/agents-sdk';
import type { FileExistsByContentMd5Request } from '@lingya-ai/agents-sdk';

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
  const api = new FilesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 文件内容 MD5。 / MD5 digest of the file content.
    contentMd5: contentMd5_example,
  } satisfies FileExistsByContentMd5Request;

  try {
    const data = await api.fileExistsByContentMd5(body);
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
| **contentMd5** | `string` | 文件内容 MD5。 / MD5 digest of the file content. | [Defaults to `undefined`] |

### Return type

[**FileExists**](FileExists.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 检查 MD5 文件是否存在 / Check file existence by MD5 的成功响应。 / Successful response for fileExistsByContentMd5. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getConversationFilePreview

> PreSignedReadUrl getConversationFilePreview(channelId, conversationId, fileId)

创建会话文件预览地址 / Create a conversation file preview URL

创建会话文件预览地址 / Create a conversation file preview URL 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@lingya-ai/agents-sdk';
import type { GetConversationFilePreviewRequest } from '@lingya-ai/agents-sdk';

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
  const api = new FilesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // number | 文件记录 ID。 / File record ID.
    fileId: 789,
  } satisfies GetConversationFilePreviewRequest;

  try {
    const data = await api.getConversationFilePreview(body);
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
| **fileId** | `number` | 文件记录 ID。 / File record ID. | [Defaults to `undefined`] |

### Return type

[**PreSignedReadUrl**](PreSignedReadUrl.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 创建会话文件预览地址 / Create a conversation file preview URL 的成功响应。 / Successful response for getConversationFilePreview. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getPlanIntermediateFilePreview

> PreSignedReadUrl getPlanIntermediateFilePreview(channelId, conversationId, messageId, fileId)

创建计划快照预览地址 / Create a plan snapshot preview URL

创建计划快照预览地址 / Create a plan snapshot preview URL 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@lingya-ai/agents-sdk';
import type { GetPlanIntermediateFilePreviewRequest } from '@lingya-ai/agents-sdk';

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
  const api = new FilesApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | 用户消息 ID；必须属于指定会话。 / User-message ID owned by the specified conversation.
    messageId: messageId_example,
    // number | 文件记录 ID。 / File record ID.
    fileId: 789,
  } satisfies GetPlanIntermediateFilePreviewRequest;

  try {
    const data = await api.getPlanIntermediateFilePreview(body);
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
| **fileId** | `number` | 文件记录 ID。 / File record ID. | [Defaults to `undefined`] |

### Return type

[**PreSignedReadUrl**](PreSignedReadUrl.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 创建计划快照预览地址 / Create a plan snapshot preview URL 的成功响应。 / Successful response for getPlanIntermediateFilePreview. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

