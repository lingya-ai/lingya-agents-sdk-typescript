
# ConversationSummaryList

ConversationSummaryList 的公开协议结构。 / Public contract for conversation summary list.

## Properties

Name | Type
------------ | -------------
`records` | [Array&lt;ConversationSummary&gt;](ConversationSummary.md)
`page` | [PageInfo](PageInfo.md)

## Example

```typescript
import type { ConversationSummaryList } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "records": null,
  "page": null,
} satisfies ConversationSummaryList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationSummaryList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


