
# AiChatInput

AiChatInput 的公开协议结构。 / Public contract for ai chat input.

## Properties

Name | Type
------------ | -------------
`query` | string
`conversationId` | string
`chatModelSpec` | [ChatModelSpec](ChatModelSpec.md)
`files` | [Array&lt;AiChatFileRef&gt;](AiChatFileRef.md)
`planMode` | boolean
`goalMode` | boolean

## Example

```typescript
import type { AiChatInput } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "query": null,
  "conversationId": null,
  "chatModelSpec": null,
  "files": null,
  "planMode": null,
  "goalMode": null,
} satisfies AiChatInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


