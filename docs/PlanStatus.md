
# PlanStatus

PlanStatus 的公开协议结构。 / Public contract for plan status.

## Properties

Name | Type
------------ | -------------
`pending` | boolean
`status` | string

## Example

```typescript
import type { PlanStatus } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "pending": null,
  "status": null,
} satisfies PlanStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


