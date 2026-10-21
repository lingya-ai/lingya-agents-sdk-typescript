
# TaskProgressExtensionContent

TaskProgressExtensionContent 的公开协议结构。 / Public contract for task progress extension content.

## Properties

Name | Type
------------ | -------------
`action` | string
`currentTaskId` | string
`currentTaskStatus` | string
`archived` | boolean
`total` | number
`pending` | number
`inProgress` | number
`completed` | number
`progressPercent` | number
`tasks` | [Array&lt;TaskSummary&gt;](TaskSummary.md)

## Example

```typescript
import type { TaskProgressExtensionContent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "action": null,
  "currentTaskId": null,
  "currentTaskStatus": null,
  "archived": null,
  "total": null,
  "pending": null,
  "inProgress": null,
  "completed": null,
  "progressPercent": null,
  "tasks": null,
} satisfies TaskProgressExtensionContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TaskProgressExtensionContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


