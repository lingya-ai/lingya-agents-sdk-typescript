
# AgentGoal

AgentGoal 的公开协议结构。 / Public contract for agent goal.

## Properties

Name | Type
------------ | -------------
`goalId` | string
`goalRevision` | number
`objective` | string
`phase` | string
`recordState` | string
`activationState` | string
`effectivelyArmed` | boolean
`blockedCode` | string
`blockedMessage` | string
`completionMessage` | string
`statusVersion` | number
`nextExecutionDueTime` | Date

## Example

```typescript
import type { AgentGoal } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "goalId": null,
  "goalRevision": null,
  "objective": null,
  "phase": null,
  "recordState": null,
  "activationState": null,
  "effectivelyArmed": null,
  "blockedCode": null,
  "blockedMessage": null,
  "completionMessage": null,
  "statusVersion": null,
  "nextExecutionDueTime": null,
} satisfies AgentGoal

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentGoal
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


