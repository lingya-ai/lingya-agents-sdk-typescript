
# PlanApprovalExtensionToolExtension

PlanApprovalExtensionToolExtension 的公开协议结构。 / Public contract for plan approval extension tool extension.

## Properties

Name | Type
------------ | -------------
`category` | string
`content` | [PlanApprovalExtensionContent](PlanApprovalExtensionContent.md)
`specialRender` | boolean

## Example

```typescript
import type { PlanApprovalExtensionToolExtension } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "category": null,
  "content": null,
  "specialRender": null,
} satisfies PlanApprovalExtensionToolExtension

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanApprovalExtensionToolExtension
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


