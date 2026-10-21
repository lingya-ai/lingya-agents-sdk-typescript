
# CitationMetadata

CitationMetadata 的公开协议结构。 / Public contract for citation metadata.

## Properties

Name | Type
------------ | -------------
`type` | string
`referenceId` | number
`title` | string
`description` | string

## Example

```typescript
import type { CitationMetadata } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "referenceId": null,
  "title": null,
  "description": null,
} satisfies CitationMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CitationMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


