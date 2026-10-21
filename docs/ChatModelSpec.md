
# ChatModelSpec

ChatModelSpec 的公开协议结构。 / Public contract for chat model spec.

## Properties

Name | Type
------------ | -------------
`keyGroupId` | number
`model` | string
`thinking` | boolean
`stopSequences` | Array&lt;string&gt;
`temperature` | number
`maxTokens` | number
`topP` | number
`topK` | number
`frequencyPenalty` | number
`presencePenalty` | number

## Example

```typescript
import type { ChatModelSpec } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "keyGroupId": null,
  "model": null,
  "thinking": null,
  "stopSequences": null,
  "temperature": null,
  "maxTokens": null,
  "topP": null,
  "topK": null,
  "frequencyPenalty": null,
  "presencePenalty": null,
} satisfies ChatModelSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatModelSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


