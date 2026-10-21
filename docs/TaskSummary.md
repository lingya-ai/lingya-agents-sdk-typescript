
# TaskSummary

TaskSummary 的公开协议结构。 / Public contract for task summary.

## Properties

Name | Type
------------ | -------------
`id` | string
`subject` | string
`activeForm` | string
`status` | string
`blocks` | Array&lt;string&gt;
`blockedBy` | Array&lt;string&gt;

## Example

```typescript
import type { TaskSummary } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "subject": null,
  "activeForm": null,
  "status": null,
  "blocks": null,
  "blockedBy": null,
} satisfies TaskSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TaskSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


