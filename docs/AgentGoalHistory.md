
# AgentGoalHistory

AgentGoalHistory 的公开协议结构。 / Public contract for agent goal history.

## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;AgentGoal&gt;](AgentGoal.md)
`page` | number
`size` | number
`hasNext` | boolean

## Example

```typescript
import type { AgentGoalHistory } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "page": null,
  "size": null,
  "hasNext": null,
} satisfies AgentGoalHistory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentGoalHistory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


