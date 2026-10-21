
# ConversationStats

ConversationStats 的公开协议结构。 / Public contract for conversation stats.

## Properties

Name | Type
------------ | -------------
`publishId` | string
`totalConversations` | number
`activeConversations` | number
`totalMessages` | number
`totalTokens` | number
`avgMessagesPerConversation` | number

## Example

```typescript
import type { ConversationStats } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "publishId": null,
  "totalConversations": null,
  "activeConversations": null,
  "totalMessages": null,
  "totalTokens": null,
  "avgMessagesPerConversation": null,
} satisfies ConversationStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


