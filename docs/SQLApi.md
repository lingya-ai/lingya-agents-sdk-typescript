# SQLApi

All URIs are relative to *https://tenant.example.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportSqlQueryResult**](SQLApi.md#exportsqlqueryresult) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/sql-query-results/{resultId}/export | 导出 SQL 结果 / Export SQL results |
| [**getSqlQueryChartData**](SQLApi.md#getsqlquerychartdata) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/sql-query-results/{resultId}/chart-data | 读取 SQL 图表数据 / Get SQL chart data |
| [**getSqlQueryResult**](SQLApi.md#getsqlqueryresult) | **GET** /api/agents/channel/openapi/v1/{channelId}/chat/conversations/{conversationId}/sql-query-results/{resultId} | 分页读取 SQL 结果 / Get paged SQL results |



## exportSqlQueryResult

> Blob exportSqlQueryResult(channelId, conversationId, resultId, format, accept)

导出 SQL 结果 / Export SQL results

导出 SQL 结果 / Export SQL results 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  SQLApi,
} from '@lingya-ai/agents-sdk';
import type { ExportSqlQueryResultRequest } from '@lingya-ai/agents-sdk';

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
  const api = new SQLApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | SQL 查询结果 ID。 / SQL query-result ID.
    resultId: resultId_example,
    // 'CSV' | 'XLSX' | 导出格式。 / Export format.
    format: format_example,
    // string | 期望的导出媒体类型。 / Requested export media type. (optional)
    accept: accept_example,
  } satisfies ExportSqlQueryResultRequest;

  try {
    const data = await api.exportSqlQueryResult(body);
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
| **resultId** | `string` | SQL 查询结果 ID。 / SQL query-result ID. | [Defaults to `undefined`] |
| **format** | `CSV`, `XLSX` | 导出格式。 / Export format. | [Defaults to `undefined`] [Enum: CSV, XLSX] |
| **accept** | `string` | 期望的导出媒体类型。 / Requested export media type. | [Optional] [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/csv`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Streaming export |  * Content-Disposition -  <br>  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSqlQueryChartData

> SqlChartDataset getSqlQueryChartData(channelId, conversationId, resultId)

读取 SQL 图表数据 / Get SQL chart data

读取 SQL 图表数据 / Get SQL chart data 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  SQLApi,
} from '@lingya-ai/agents-sdk';
import type { GetSqlQueryChartDataRequest } from '@lingya-ai/agents-sdk';

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
  const api = new SQLApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | SQL 查询结果 ID。 / SQL query-result ID.
    resultId: resultId_example,
  } satisfies GetSqlQueryChartDataRequest;

  try {
    const data = await api.getSqlQueryChartData(body);
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
| **resultId** | `string` | SQL 查询结果 ID。 / SQL query-result ID. | [Defaults to `undefined`] |

### Return type

[**SqlChartDataset**](SqlChartDataset.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 读取 SQL 图表数据 / Get SQL chart data 的成功响应。 / Successful response for getSqlQueryChartData. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getSqlQueryResult

> SqlQueryResultPage getSqlQueryResult(channelId, conversationId, resultId, current, size)

分页读取 SQL 结果 / Get paged SQL results

分页读取 SQL 结果 / Get paged SQL results 请求会在身份验签和资源归属校验后执行；响应字段以本契约为准。 / The request runs after signature and resource-ownership validation; this contract defines the response fields.

### Example

```ts
import {
  Configuration,
  SQLApi,
} from '@lingya-ai/agents-sdk';
import type { GetSqlQueryResultRequest } from '@lingya-ai/agents-sdk';

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
  const api = new SQLApi(config);

  const body = {
    // string | Agent OpenAPI 渠道 UUID。 / Agent OpenAPI channel UUID.
    channelId: channelId_example,
    // string | 会话 ID；必须属于当前外部用户。 / Conversation ID owned by the current external user.
    conversationId: conversationId_example,
    // string | SQL 查询结果 ID。 / SQL query-result ID.
    resultId: resultId_example,
    // number | 从 0 开始的页码。 / Zero-based page index. (optional)
    current: 56,
    // number | 单页记录数。 / Number of records per page. (optional)
    size: 56,
  } satisfies GetSqlQueryResultRequest;

  try {
    const data = await api.getSqlQueryResult(body);
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
| **resultId** | `string` | SQL 查询结果 ID。 / SQL query-result ID. | [Defaults to `undefined`] |
| **current** | `number` | 从 0 开始的页码。 / Zero-based page index. | [Optional] [Defaults to `0`] |
| **size** | `number` | 单页记录数。 / Number of records per page. | [Optional] [Defaults to `100`] |

### Return type

[**SqlQueryResultPage**](SqlQueryResultPage.md)

### Authorization

[OpenApiUser](../README.md#OpenApiUser), [OpenApiAccessKey](../README.md#OpenApiAccessKey), [OpenApiTimestamp](../README.md#OpenApiTimestamp), [OpenApiNonce](../README.md#OpenApiNonce), [OpenApiSignature](../README.md#OpenApiSignature)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | 分页读取 SQL 结果 / Get paged SQL results 的成功响应。 / Successful response for getSqlQueryResult. |  -  |
| **401** | API error |  -  |
| **403** | API error |  -  |
| **413** | API error |  -  |
| **422** | Validation error |  -  |
| **429** | API error |  -  |
| **500** | API error |  -  |
| **503** | API error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

