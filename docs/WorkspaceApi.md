# WorkspaceApi

All URIs are relative to *https://tenant.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getWorkspaceFilePreview**](WorkspaceApi.md#getworkspacefilepreview) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/workspace/files/preview | 创建工作区文件预览地址 / Create a workspace file preview URL |
| [**listWorkspaceArtifacts**](WorkspaceApi.md#listworkspaceartifacts) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/workspace/files | 分页查询工作区制品 / List workspace artifacts |



## getWorkspaceFilePreview

> PreSignedReadUrl getWorkspaceFilePreview(channelId, conversationId, path)

创建工作区文件预览地址 / Create a workspace file preview URL

创建工作区文件预览地址 / Create a workspace file preview URL 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  WorkspaceApi,
} from '@lingya-ai/agents-sdk';
import type { GetWorkspaceFilePreviewRequest } from '@lingya-ai/agents-sdk';

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
  const api = new WorkspaceApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | 工作区相对文件路径。 / Workspace-relative file path.
    path: path_example,
  } satisfies GetWorkspaceFilePreviewRequest;

  try {
    const data = await api.getWorkspaceFilePreview(body);
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
| **path** | `string` | 工作区相对文件路径。 / Workspace-relative file path. | [Defaults to `undefined`] |

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
| **200** | 创建工作区文件预览地址 / Create a workspace file preview URL 的成功响应。 / Successful response for getWorkspaceFilePreview. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWorkspaceArtifacts

> WorkspaceArtifactList listWorkspaceArtifacts(channelId, conversationId, current, size, orderBy, orderDirection, orderNullHandling, keyword, prefix)

分页查询工作区制品 / List workspace artifacts

分页查询工作区制品 / List workspace artifacts 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  WorkspaceApi,
} from '@lingya-ai/agents-sdk';
import type { ListWorkspaceArtifactsRequest } from '@lingya-ai/agents-sdk';

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
  const api = new WorkspaceApi(config);

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
    // string | 工作区相对路径前缀。 / Workspace-relative path prefix. (optional)
    prefix: prefix_example,
  } satisfies ListWorkspaceArtifactsRequest;

  try {
    const data = await api.listWorkspaceArtifacts(body);
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
| **prefix** | `string` | 工作区相对路径前缀。 / Workspace-relative path prefix. | [Optional] [Defaults to `undefined`] |

### Return type

[**WorkspaceArtifactList**](WorkspaceArtifactList.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 分页查询工作区制品 / List workspace artifacts 的成功响应。 / Successful response for listWorkspaceArtifacts. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

