
# SubagentTaskArtifact

SubagentTaskArtifact 的公开协议结构。 / Public contract for subagent task artifact.

## Properties

Name | Type
------------ | -------------
`artifactId` | string
`name` | string
`mimeType` | string
`size` | number
`relativePath` | string
`deliveryStatus` | string
`issueCodes` | Array&lt;string&gt;
`recoverable` | boolean

## Example

```typescript
import type { SubagentTaskArtifact } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "artifactId": null,
  "name": null,
  "mimeType": null,
  "size": null,
  "relativePath": null,
  "deliveryStatus": null,
  "issueCodes": null,
  "recoverable": null,
} satisfies SubagentTaskArtifact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubagentTaskArtifact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


