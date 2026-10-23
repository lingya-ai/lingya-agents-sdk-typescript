
# WorkspaceNonFileArtifact

WorkspaceNonFileArtifact 的公开协议结构。 / Public contract for workspace non file artifact.

## Properties

Name | Type
------------ | -------------
`artifactId` | number
`kind` | string
`title` | string
`description` | string
`lastUpdateTime` | Date
`previewUrl` | string
`htmlPageAuthoringMode` | string

## Example

```typescript
import type { WorkspaceNonFileArtifact } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "artifactId": null,
  "kind": null,
  "title": null,
  "description": null,
  "lastUpdateTime": null,
  "previewUrl": null,
  "htmlPageAuthoringMode": null,
} satisfies WorkspaceNonFileArtifact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceNonFileArtifact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


