
# ChartNumberFormat

ChartNumberFormat 的公开协议结构。 / Public contract for chart number format.

## Properties

Name | Type
------------ | -------------
`type` | string
`currency` | string
`decimalPlaces` | number
`valueScale` | string

## Example

```typescript
import type { ChartNumberFormat } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "currency": null,
  "decimalPlaces": null,
  "valueScale": null,
} satisfies ChartNumberFormat

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChartNumberFormat
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


