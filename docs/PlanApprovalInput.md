
# PlanApprovalInput

PlanApprovalInput 的公开协议结构。 / Public contract for plan approval input.

## Properties

Name | Type
------------ | -------------
`conversationId` | string
`messageId` | string
`approved` | boolean
`feedback` | string

## Example

```typescript
import type { PlanApprovalInput } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "conversationId": null,
  "messageId": null,
  "approved": null,
  "feedback": null,
} satisfies PlanApprovalInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanApprovalInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


