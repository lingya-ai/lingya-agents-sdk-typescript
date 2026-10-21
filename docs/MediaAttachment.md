
# MediaAttachment

MediaAttachment 的公开协议结构。 / Public contract for media attachment.

## Properties

Name | Type
------------ | -------------
`fileId` | number
`path` | string
`fileSize` | number
`fileName` | string
`mimeType` | string

## Example

```typescript
import type { MediaAttachment } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "fileId": null,
  "path": null,
  "fileSize": null,
  "fileName": null,
  "mimeType": null,
} satisfies MediaAttachment

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MediaAttachment
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


