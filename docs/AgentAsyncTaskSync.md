
# AgentAsyncTaskSync

AgentAsyncTaskSync 的公开协议结构。 / Public contract for agent async task sync.

## Properties

Name | Type
------------ | -------------
`activeTasks` | [Array&lt;AsyncTask&gt;](AsyncTask.md)
`notificationMessages` | [Array&lt;ConversationMessage&gt;](ConversationMessage.md)
`nextMessageId` | string
`hasMore` | boolean
`pollingRequired` | boolean

## Example

```typescript
import type { AgentAsyncTaskSync } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "activeTasks": null,
  "notificationMessages": null,
  "nextMessageId": null,
  "hasMore": null,
  "pollingRequired": null,
} satisfies AgentAsyncTaskSync

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentAsyncTaskSync
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


