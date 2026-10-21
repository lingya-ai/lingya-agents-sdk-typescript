
# PlanApprovalExtensionContent

PlanApprovalExtensionContent 的公开协议结构。 / Public contract for plan approval extension content.

## Properties

Name | Type
------------ | -------------
`previewFileId` | number
`serverNow` | Date
`approvalTimeoutAt` | Date

## Example

```typescript
import type { PlanApprovalExtensionContent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "previewFileId": null,
  "serverNow": null,
  "approvalTimeoutAt": null,
} satisfies PlanApprovalExtensionContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PlanApprovalExtensionContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


