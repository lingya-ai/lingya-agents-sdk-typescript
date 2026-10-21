
# ConversationSummary

ConversationSummary 的公开协议结构。 / Public contract for conversation summary.

## Properties

Name | Type
------------ | -------------
`conversationId` | string
`conversationType` | string
`title` | string
`titleState` | string
`status` | string
`messageCount` | number
`totalTokens` | number
`totalInputTokens` | number
`totalOutputTokens` | number
`usage` | [Usage](Usage.md)
`createdTime` | Date
`lastUpdateTime` | Date
`groupId` | number
`groupName` | string

## Example

```typescript
import type { ConversationSummary } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "conversationId": null,
  "conversationType": null,
  "title": null,
  "titleState": null,
  "status": null,
  "messageCount": null,
  "totalTokens": null,
  "totalInputTokens": null,
  "totalOutputTokens": null,
  "usage": null,
  "createdTime": null,
  "lastUpdateTime": null,
  "groupId": null,
  "groupName": null,
} satisfies ConversationSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


