
# WorkspaceFile

WorkspaceFile 的公开协议结构。 / Public contract for workspace file.

## Properties

Name | Type
------------ | -------------
`relativePath` | string
`size` | number
`fileName` | string
`mimeType` | string
`lastUpdateTime` | Date

## Example

```typescript
import type { WorkspaceFile } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "relativePath": null,
  "size": null,
  "fileName": null,
  "mimeType": null,
  "lastUpdateTime": null,
} satisfies WorkspaceFile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceFile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


