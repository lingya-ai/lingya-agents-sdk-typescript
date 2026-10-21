
# ChartSpec

ChartSpec 的公开协议结构。 / Public contract for chart spec.

## Properties

Name | Type
------------ | -------------
`version` | number
`type` | string
`title` | string
`subtitle` | string
`categoryColumn` | string
`categoryType` | string
`orientation` | string
`series` | [Array&lt;ChartSeries&gt;](ChartSeries.md)
`legend` | boolean
`dataZoom` | string
`nullPolicy` | string

## Example

```typescript
import type { ChartSpec } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "version": null,
  "type": null,
  "title": null,
  "subtitle": null,
  "categoryColumn": null,
  "categoryType": null,
  "orientation": null,
  "series": null,
  "legend": null,
  "dataZoom": null,
  "nullPolicy": null,
} satisfies ChartSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChartSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


