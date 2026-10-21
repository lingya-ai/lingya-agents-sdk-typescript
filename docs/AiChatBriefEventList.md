
# AiChatBriefEventList

AiChatBriefEventList 的公开协议结构。 / Public contract for ai chat brief event list.

## Properties

Name | Type
------------ | -------------
`records` | [Array&lt;AiChatBriefEvent&gt;](AiChatBriefEvent.md)

## Example

```typescript
import type { AiChatBriefEventList } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "records": null,
} satisfies AiChatBriefEventList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatBriefEventList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


