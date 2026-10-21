
# WorkspaceArtifactList

WorkspaceArtifactList 的公开协议结构。 / Public contract for workspace artifact list.

## Properties

Name | Type
------------ | -------------
`fileArtifacts` | [WorkspaceFilePage](WorkspaceFilePage.md)
`nonFileArtifacts` | [Array&lt;WorkspaceNonFileArtifact&gt;](WorkspaceNonFileArtifact.md)

## Example

```typescript
import type { WorkspaceArtifactList } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "fileArtifacts": null,
  "nonFileArtifacts": null,
} satisfies WorkspaceArtifactList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceArtifactList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


