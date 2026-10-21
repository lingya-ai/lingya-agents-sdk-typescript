
# UnknownToolExtension

UnknownToolExtension 的公开协议结构。 / Public contract for unknown tool extension.

## Properties

Name | Type
------------ | -------------
`category` | string
`rawJson` | string

## Example

```typescript
import type { UnknownToolExtension } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "category": null,
  "rawJson": null,
} satisfies UnknownToolExtension

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UnknownToolExtension
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


