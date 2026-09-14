# KnowledgeApi

All URIs are relative to *https://tenant.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCitationMetadata**](KnowledgeApi.md#getcitationmetadata) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/knowledge-bases/citations/{citationType}/{referenceId}/metadata | 读取引用元数据 / Get citation metadata |
| [**getCitationMetadataBatch**](KnowledgeApi.md#getcitationmetadatabatch) | **POST** /api/agents/channel/openapi/v1/{channelId}/chat/knowledge-bases/citations/metadata | 批量读取引用元数据 / Get citation metadata in batch |



## getCitationMetadata

> CitationMetadata getCitationMetadata(channelId, citationType, referenceId)

读取引用元数据 / Get citation metadata

读取引用元数据 / Get citation metadata 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '@lingya-ai/agents-sdk';
import type { GetCitationMetadataRequest } from '@lingya-ai/agents-sdk';

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
  const api = new KnowledgeApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 知识引用类型。 / Knowledge citation type.
    citationType: citationType_example,
    // number | 知识引用记录 ID。 / Knowledge-reference record ID.
    referenceId: 789,
  } satisfies GetCitationMetadataRequest;

  try {
    const data = await api.getCitationMetadata(body);
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
| **citationType** | `string` | 知识引用类型。 / Knowledge citation type. | [Defaults to `undefined`] |
| **referenceId** | `number` | 知识引用记录 ID。 / Knowledge-reference record ID. | [Defaults to `undefined`] |

### Return type

[**CitationMetadata**](CitationMetadata.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 读取引用元数据 / Get citation metadata 的成功响应。 / Successful response for getCitationMetadata. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCitationMetadataBatch

> CitationMetadataList getCitationMetadataBatch(channelId, returnedReference)

批量读取引用元数据 / Get citation metadata in batch

批量读取引用元数据 / Get citation metadata in batch 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  KnowledgeApi,
} from '@lingya-ai/agents-sdk';
import type { GetCitationMetadataBatchRequest } from '@lingya-ai/agents-sdk';

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
  const api = new KnowledgeApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // Array<ReturnedReference> | 批量读取引用元数据 / Get citation metadata in batch 的 JSON 请求参数。 / JSON request parameters for getCitationMetadataBatch.
    returnedReference: ...,
  } satisfies GetCitationMetadataBatchRequest;

  try {
    const data = await api.getCitationMetadataBatch(body);
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
| **returnedReference** | `Array<ReturnedReference>` | 批量读取引用元数据 / Get citation metadata in batch 的 JSON 请求参数。 / JSON request parameters for getCitationMetadataBatch. | |

### Return type

[**CitationMetadataList**](CitationMetadataList.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | 批量读取引用元数据 / Get citation metadata in batch 的成功响应。 / Successful response for getCitationMetadataBatch. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

