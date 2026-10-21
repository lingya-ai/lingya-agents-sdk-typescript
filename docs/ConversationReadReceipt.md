
# ConversationReadReceipt

ConversationReadReceipt 的公开协议结构。 / Public contract for conversation read receipt.

## Properties

Name | Type
------------ | -------------
`conversationId` | string
`executionStatus` | string
`activeMessageId` | string
`executionEpoch` | string
`executionStartedTime` | Date
`latestTerminalMessageId` | string
`latestTerminalTime` | Date
`hasUnreadCompletion` | boolean

## Example

```typescript
import type { ConversationReadReceipt } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "conversationId": null,
  "executionStatus": null,
  "activeMessageId": null,
  "executionEpoch": null,
  "executionStartedTime": null,
  "latestTerminalMessageId": null,
  "latestTerminalTime": null,
  "hasUnreadCompletion": null,
} satisfies ConversationReadReceipt

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationReadReceipt
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


