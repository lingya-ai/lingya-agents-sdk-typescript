
# ConversationMessage

ConversationMessage 的公开协议结构。 / Public contract for conversation message.

## Properties

Name | Type
------------ | -------------
`messageId` | string
`userMessage` | [ConversationUserMessage](ConversationUserMessage.md)
`inputTokens` | number
`outputTokens` | number
`totalTokens` | number
`usage` | [Usage](Usage.md)
`executionTimeMillis` | number
`processingSteps` | number
`totalToolCalls` | number
`status` | string
`createdTime` | Date
`lastUpdateTime` | Date
`executionType` | string
`parentMessageId` | string

## Example

```typescript
import type { ConversationMessage } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "messageId": null,
  "userMessage": null,
  "inputTokens": null,
  "outputTokens": null,
  "totalTokens": null,
  "usage": null,
  "executionTimeMillis": null,
  "processingSteps": null,
  "totalToolCalls": null,
  "status": null,
  "createdTime": null,
  "lastUpdateTime": null,
  "executionType": null,
  "parentMessageId": null,
} satisfies ConversationMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


