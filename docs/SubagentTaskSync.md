
# SubagentTaskSync

SubagentTaskSync 的公开协议结构。 / Public contract for subagent task sync.

## Properties

Name | Type
------------ | -------------
`activeTasks` | [Array&lt;SubagentTask&gt;](SubagentTask.md)
`changedTasks` | [Array&lt;SubagentTask&gt;](SubagentTask.md)
`nextCursor` | string
`pollingRequired` | boolean
`hasUnreadTerminalResults` | boolean

## Example

```typescript
import type { SubagentTaskSync } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "activeTasks": null,
  "changedTasks": null,
  "nextCursor": null,
  "pollingRequired": null,
  "hasUnreadTerminalResults": null,
} satisfies SubagentTaskSync

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubagentTaskSync
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


