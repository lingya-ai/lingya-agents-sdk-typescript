
# ConversationTitle

ConversationTitle 的公开协议结构。 / Public contract for conversation title.

## Properties

Name | Type
------------ | -------------
`conversationId` | string
`title` | string
`titleState` | string

## Example

```typescript
import type { ConversationTitle } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "conversationId": null,
  "title": null,
  "titleState": null,
} satisfies ConversationTitle

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationTitle
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


