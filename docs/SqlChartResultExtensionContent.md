
# SqlChartResultExtensionContent

SqlChartResultExtensionContent 的公开协议结构。 / Public contract for sql chart result extension content.

## Properties

Name | Type
------------ | -------------
`resultId` | string
`rowCount` | number
`columnCount` | number
`columns` | Array&lt;string&gt;
`schema` | [Array&lt;SqlResultColumnSchema&gt;](SqlResultColumnSchema.md)
`chart` | [ChartSpec](ChartSpec.md)
`qualitySummary` | [ChartQualitySummary](ChartQualitySummary.md)
`timeContext` | [ChartTimeContext](ChartTimeContext.md)

## Example

```typescript
import type { SqlChartResultExtensionContent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "resultId": null,
  "rowCount": null,
  "columnCount": null,
  "columns": null,
  "schema": null,
  "chart": null,
  "qualitySummary": null,
  "timeContext": null,
} satisfies SqlChartResultExtensionContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SqlChartResultExtensionContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


