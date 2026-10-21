
# SubagentTaskResult

SubagentTaskResult 的公开协议结构。 / Public contract for subagent task result.

## Properties

Name | Type
------------ | -------------
`task` | [SubagentTask](SubagentTask.md)
`resultText` | string
`artifacts` | [Array&lt;SubagentTaskArtifact&gt;](SubagentTaskArtifact.md)
`inputTokens` | number
`outputTokens` | number
`nonFileArtifacts` | [Array&lt;WorkspaceNonFileArtifact&gt;](WorkspaceNonFileArtifact.md)

## Example

```typescript
import type { SubagentTaskResult } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "task": null,
  "resultText": null,
  "artifacts": null,
  "inputTokens": null,
  "outputTokens": null,
  "nonFileArtifacts": null,
} satisfies SubagentTaskResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubagentTaskResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


