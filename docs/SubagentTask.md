
# SubagentTask

SubagentTask 的公开协议结构。 / Public contract for subagent task.

## Properties

Name | Type
------------ | -------------
`taskId` | string
`description` | string
`subagentType` | string
`status` | string
`phase` | string
`parentConversationId` | string
`parentMessageId` | string
`childConversationId` | string
`childMessageId` | string
`resultAvailable` | boolean
`artifactCount` | number
`notificationStatus` | string
`failureCode` | string
`failureMessage` | string
`createdTime` | Date
`startedTime` | Date
`completedTime` | Date
`lastUpdateTime` | Date
`cancellable` | boolean

## Example

```typescript
import type { SubagentTask } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "taskId": null,
  "description": null,
  "subagentType": null,
  "status": null,
  "phase": null,
  "parentConversationId": null,
  "parentMessageId": null,
  "childConversationId": null,
  "childMessageId": null,
  "resultAvailable": null,
  "artifactCount": null,
  "notificationStatus": null,
  "failureCode": null,
  "failureMessage": null,
  "createdTime": null,
  "startedTime": null,
  "completedTime": null,
  "lastUpdateTime": null,
  "cancellable": null,
} satisfies SubagentTask

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubagentTask
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


