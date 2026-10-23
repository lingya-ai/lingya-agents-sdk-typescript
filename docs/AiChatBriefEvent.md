
# AiChatBriefEvent

AiChatBriefEvent 的公开协议结构。 / Public contract for ai chat brief event.

## Properties

Name | Type
------------ | -------------
`type` | string
`query` | string
`attachments` | [Array&lt;MediaAttachment&gt;](MediaAttachment.md)
`executionType` | string
`level` | string
`warning` | string
`message` | string
`terminalReason` | string
`toolId` | string
`toolName` | string
`status` | string
`action` | string
`summary` | string
`extension` | [ToolExtension](ToolExtension.md)
`toolCallId` | string
`subAgentConversationId` | string
`subAgentMessageId` | string
`questionId` | string
`question` | string
`options` | [Array&lt;AskUserQuestionOption&gt;](AskUserQuestionOption.md)
`multiple` | boolean
`serverNow` | Date
`timeoutSeconds` | number
`questionDetails` | string
`executionTimeMillis` | number
`totalUsage` | [Usage](Usage.md)
`messageContextUsageRatio` | number
`contextWindowUsage` | [ConversationContextUsage](ConversationContextUsage.md)
`artifacts` | [Array&lt;ArtifactInfo&gt;](ArtifactInfo.md)
`nonFileArtifacts` | [Array&lt;WorkspaceNonFileArtifact&gt;](WorkspaceNonFileArtifact.md)
`rawJson` | string

## Example

```typescript
import type { AiChatBriefEvent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "query": null,
  "attachments": null,
  "executionType": null,
  "level": null,
  "warning": null,
  "message": null,
  "terminalReason": null,
  "toolId": null,
  "toolName": null,
  "status": null,
  "action": null,
  "summary": null,
  "extension": null,
  "toolCallId": null,
  "subAgentConversationId": null,
  "subAgentMessageId": null,
  "questionId": null,
  "question": null,
  "options": null,
  "multiple": null,
  "serverNow": null,
  "timeoutSeconds": null,
  "questionDetails": null,
  "executionTimeMillis": null,
  "totalUsage": null,
  "messageContextUsageRatio": null,
  "contextWindowUsage": null,
  "artifacts": null,
  "nonFileArtifacts": null,
  "rawJson": null,
} satisfies AiChatBriefEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatBriefEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


