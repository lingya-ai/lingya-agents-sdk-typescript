
# GeneratePreSignedUrlOutput

GeneratePreSignedUrlOutput 的公开协议结构。 / Public contract for generate pre signed url output.

## Properties

Name | Type
------------ | -------------
`support` | boolean
`fileUk` | string
`url` | string

## Example

```typescript
import type { GeneratePreSignedUrlOutput } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "support": null,
  "fileUk": null,
  "url": null,
} satisfies GeneratePreSignedUrlOutput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeneratePreSignedUrlOutput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


