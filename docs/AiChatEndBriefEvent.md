
# AiChatEndBriefEvent

AiChatEndBriefEvent 的公开协议结构。 / Public contract for ai chat end brief event.

## Properties

Name | Type
------------ | -------------
`type` | string
`executionTimeMillis` | number
`totalUsage` | [Usage](Usage.md)
`messageContextUsageRatio` | number
`contextWindowUsage` | [ConversationContextUsage](ConversationContextUsage.md)
`artifacts` | [Array&lt;ArtifactInfo&gt;](ArtifactInfo.md)
`nonFileArtifacts` | [Array&lt;WorkspaceNonFileArtifact&gt;](WorkspaceNonFileArtifact.md)

## Example

```typescript
import type { AiChatEndBriefEvent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "executionTimeMillis": null,
  "totalUsage": null,
  "messageContextUsageRatio": null,
  "contextWindowUsage": null,
  "artifacts": null,
  "nonFileArtifacts": null,
} satisfies AiChatEndBriefEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatEndBriefEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


