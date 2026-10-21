
# CreateFileInput

CreateFileInput 的公开协议结构。 / Public contract for create file input.

## Properties

Name | Type
------------ | -------------
`fileName` | string
`contentMd5` | string

## Example

```typescript
import type { CreateFileInput } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "fileName": null,
  "contentMd5": null,
} satisfies CreateFileInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFileInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


