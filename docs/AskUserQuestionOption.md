
# AskUserQuestionOption

AskUserQuestionOption 的公开协议结构。 / Public contract for ask user question option.

## Properties

Name | Type
------------ | -------------
`text` | string
`recommended` | boolean

## Example

```typescript
import type { AskUserQuestionOption } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "text": null,
  "recommended": null,
} satisfies AskUserQuestionOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AskUserQuestionOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


