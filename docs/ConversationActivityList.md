
# ConversationActivityList

ConversationActivityList 的公开协议结构。 / Public contract for conversation activity list.

## Properties

Name | Type
------------ | -------------
`records` | [Array&lt;ConversationActivity&gt;](ConversationActivity.md)

## Example

```typescript
import type { ConversationActivityList } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "records": null,
} satisfies ConversationActivityList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationActivityList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


