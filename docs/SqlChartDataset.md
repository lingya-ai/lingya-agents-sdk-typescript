
# SqlChartDataset

SqlChartDataset 的公开协议结构。 / Public contract for sql chart dataset.

## Properties

Name | Type
------------ | -------------
`resultId` | string
`schema` | [Array&lt;SqlResultColumnSchema&gt;](SqlResultColumnSchema.md)
`rowCount` | number
`columns` | [Array&lt;ChartColumnData&gt;](ChartColumnData.md)

## Example

```typescript
import type { SqlChartDataset } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "resultId": null,
  "schema": null,
  "rowCount": null,
  "columns": null,
} satisfies SqlChartDataset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SqlChartDataset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


