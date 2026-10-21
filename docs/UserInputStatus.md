
# UserInputStatus

UserInputStatus 的公开协议结构。 / Public contract for user input status.

## Properties

Name | Type
------------ | -------------
`pending` | boolean
`question` | string
`questionDetails` | string
`options` | Array&lt;string&gt;
`multiple` | boolean

## Example

```typescript
import type { UserInputStatus } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "pending": null,
  "question": null,
  "questionDetails": null,
  "options": null,
  "multiple": null,
} satisfies UserInputStatus

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserInputStatus
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


