
# AiChatEventsBatchInput

AiChatEventsBatchInput 的公开协议结构。 / Public contract for ai chat events batch input.

## Properties

Name | Type
------------ | -------------
`conversationId` | string
`messageIds` | Array&lt;string&gt;

## Example

```typescript
import type { AiChatEventsBatchInput } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "conversationId": null,
  "messageIds": null,
} satisfies AiChatEventsBatchInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatEventsBatchInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


