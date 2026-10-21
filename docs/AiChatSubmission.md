
# AiChatSubmission

AiChatSubmission 的公开协议结构。 / Public contract for ai chat submission.

## Properties

Name | Type
------------ | -------------
`conversationId` | string
`messageId` | string
`disposition` | string
`status` | string

## Example

```typescript
import type { AiChatSubmission } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "conversationId": null,
  "messageId": null,
  "disposition": null,
  "status": null,
} satisfies AiChatSubmission

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatSubmission
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


