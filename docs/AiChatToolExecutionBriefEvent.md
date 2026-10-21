
# AiChatToolExecutionBriefEvent

AiChatToolExecutionBriefEvent 的公开协议结构。 / Public contract for ai chat tool execution brief event.

## Properties

Name | Type
------------ | -------------
`type` | string
`toolId` | string
`toolName` | string
`status` | string
`action` | string
`summary` | string
`extension` | [ToolExtension](ToolExtension.md)

## Example

```typescript
import type { AiChatToolExecutionBriefEvent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "toolId": null,
  "toolName": null,
  "status": null,
  "action": null,
  "summary": null,
  "extension": null,
} satisfies AiChatToolExecutionBriefEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatToolExecutionBriefEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


