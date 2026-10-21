
# InstantChartColumn

InstantChartColumn 的公开协议结构。 / Public contract for instant chart column.

## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`values` | Array&lt;Date | null&gt;

## Example

```typescript
import type { InstantChartColumn } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "values": null,
} satisfies InstantChartColumn

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InstantChartColumn
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


