
# UserInputAnswerInput

UserInputAnswerInput 的公开协议结构。 / Public contract for user input answer input.

## Properties

Name | Type
------------ | -------------
`conversationId` | string
`messageId` | string
`questionId` | string
`selectedOptions` | Array&lt;string&gt;
`customInput` | string

## Example

```typescript
import type { UserInputAnswerInput } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "conversationId": null,
  "messageId": null,
  "questionId": null,
  "selectedOptions": null,
  "customInput": null,
} satisfies UserInputAnswerInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserInputAnswerInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


