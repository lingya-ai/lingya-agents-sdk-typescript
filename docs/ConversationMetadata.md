
# ConversationMetadata

ConversationMetadata 的公开协议结构。 / Public contract for conversation metadata.

## Properties

Name | Type
------------ | -------------
`conversationId` | string
`status` | string
`title` | string
`titleState` | string
`groupId` | number
`groupName` | string
`lastUpdateTime` | Date

## Example

```typescript
import type { ConversationMetadata } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "conversationId": null,
  "status": null,
  "title": null,
  "titleState": null,
  "groupId": null,
  "groupName": null,
  "lastUpdateTime": null,
} satisfies ConversationMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


