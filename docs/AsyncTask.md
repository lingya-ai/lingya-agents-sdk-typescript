
# AsyncTask

AsyncTask 的公开协议结构。 / Public contract for async task.

## Properties

Name | Type
------------ | -------------
`taskId` | string
`taskType` | string
`title` | string
`status` | string
`progressPercent` | number
`phase` | string
`statusMessage` | string
`resultAvailable` | boolean
`cancellable` | boolean
`failureCode` | string
`failureMessage` | string
`originConversationId` | string
`originMessageId` | string
`originToolId` | string
`originToolName` | string
`targetMessageId` | string
`notificationStatus` | string
`notificationMessageId` | string
`createdTime` | Date
`startedTime` | Date
`completedTime` | Date
`lastUpdateTime` | Date
`trackingStatus` | string
`trackingFailureCode` | string
`lastPollError` | string

## Example

```typescript
import type { AsyncTask } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "taskId": null,
  "taskType": null,
  "title": null,
  "status": null,
  "progressPercent": null,
  "phase": null,
  "statusMessage": null,
  "resultAvailable": null,
  "cancellable": null,
  "failureCode": null,
  "failureMessage": null,
  "originConversationId": null,
  "originMessageId": null,
  "originToolId": null,
  "originToolName": null,
  "targetMessageId": null,
  "notificationStatus": null,
  "notificationMessageId": null,
  "createdTime": null,
  "startedTime": null,
  "completedTime": null,
  "lastUpdateTime": null,
  "trackingStatus": null,
  "trackingFailureCode": null,
  "lastPollError": null,
} satisfies AsyncTask

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AsyncTask
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


