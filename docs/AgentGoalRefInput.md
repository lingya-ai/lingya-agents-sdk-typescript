
# AgentGoalRefInput

AgentGoalRefInput 的公开协议结构。 / Public contract for agent goal ref input.

## Properties

Name | Type
------------ | -------------
`goalId` | string
`goalRevision` | number

## Example

```typescript
import type { AgentGoalRefInput } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "goalId": null,
  "goalRevision": null,
} satisfies AgentGoalRefInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentGoalRefInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


