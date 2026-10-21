
# ArtifactInfo

ArtifactInfo 的公开协议结构。 / Public contract for artifact info.

## Properties

Name | Type
------------ | -------------
`fileId` | number
`fileSize` | number
`fileName` | string
`mimeType` | string
`relativePath` | string
`deliveryStatus` | string
`issueCodes` | Array&lt;string&gt;
`recoverable` | boolean

## Example

```typescript
import type { ArtifactInfo } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "fileId": null,
  "fileSize": null,
  "fileName": null,
  "mimeType": null,
  "relativePath": null,
  "deliveryStatus": null,
  "issueCodes": null,
  "recoverable": null,
} satisfies ArtifactInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArtifactInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


