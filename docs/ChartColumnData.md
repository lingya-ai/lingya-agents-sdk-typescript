
# ChartColumnData

ChartColumnData 的公开协议结构。 / Public contract for chart column data.

## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`values` | Array&lt;Date&gt;

## Example

```typescript
import type { ChartColumnData } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "values": null,
} satisfies ChartColumnData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChartColumnData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


