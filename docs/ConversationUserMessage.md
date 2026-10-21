
# ConversationUserMessage

ConversationUserMessage 的公开协议结构。 / Public contract for conversation user message.

## Properties

Name | Type
------------ | -------------
`text` | string
`multimodalAttachments` | [Array&lt;MultimodalMediaAttachment&gt;](MultimodalMediaAttachment.md)
`attachments` | [Array&lt;MediaAttachment&gt;](MediaAttachment.md)
`executionType` | string
`type` | string
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { ConversationUserMessage } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "text": null,
  "multimodalAttachments": null,
  "attachments": null,
  "executionType": null,
  "type": null,
  "metadata": null,
} satisfies ConversationUserMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationUserMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


