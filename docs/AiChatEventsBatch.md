
# AiChatEventsBatch

AiChatEventsBatch 的公开协议结构。 / Public contract for ai chat events batch.

## Properties

Name | Type
------------ | -------------
`records` | [Array&lt;AiChatMessageEvent&gt;](AiChatMessageEvent.md)
`skipped` | [Array&lt;AiChatEventsBatchSkipped&gt;](AiChatEventsBatchSkipped.md)

## Example

```typescript
import type { AiChatEventsBatch } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "records": null,
  "skipped": null,
} satisfies AiChatEventsBatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatEventsBatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


