
# ConfirmUploadInput

ConfirmUploadInput 的公开协议结构。 / Public contract for confirm upload input.

## Properties

Name | Type
------------ | -------------
`fileUk` | string
`contentMd5` | string

## Example

```typescript
import type { ConfirmUploadInput } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "fileUk": null,
  "contentMd5": null,
} satisfies ConfirmUploadInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConfirmUploadInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


