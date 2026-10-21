
# AiChatSubAgentCallBriefEvent

AiChatSubAgentCallBriefEvent 的公开协议结构。 / Public contract for ai chat sub agent call brief event.

## Properties

Name | Type
------------ | -------------
`type` | string
`toolCallId` | string
`toolName` | string
`subAgentConversationId` | string
`subAgentMessageId` | string

## Example

```typescript
import type { AiChatSubAgentCallBriefEvent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "toolCallId": null,
  "toolName": null,
  "subAgentConversationId": null,
  "subAgentMessageId": null,
} satisfies AiChatSubAgentCallBriefEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatSubAgentCallBriefEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


