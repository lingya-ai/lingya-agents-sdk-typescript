
# ChartQualitySummary

ChartQualitySummary 的公开协议结构。 / Public contract for chart quality summary.

## Properties

Name | Type
------------ | -------------
`nullValueCount` | number
`nullValueColumns` | Array&lt;string&gt;
`zeroFilledValueCount` | number

## Example

```typescript
import type { ChartQualitySummary } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "nullValueCount": null,
  "nullValueColumns": null,
  "zeroFilledValueCount": null,
} satisfies ChartQualitySummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChartQualitySummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


