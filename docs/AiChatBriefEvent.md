
# AiChatBriefEvent

AiChatBriefEvent 的公开协议结构。 / Public contract for ai chat brief event.

## Properties

Name | Type
------------ | -------------
`type` | string
`query` | string
`attachments` | [Array&lt;MediaAttachment&gt;](MediaAttachment.md)
`level` | string
`warning` | string
`message` | string
`messages` | [Array&lt;ChatMessage&gt;](ChatMessage.md)
`chatOptions` | [ChatOptions](ChatOptions.md)
`assistantMessages` | [Array&lt;AssistantChatMessage&gt;](AssistantChatMessage.md)
`usage` | [Usage](Usage.md)
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
`serverNow` | string
`timeoutSeconds` | number
`questionDetails` | string
`executionTimeMillis` | number
`totalUsage` | [Usage](Usage.md)
`messageContextUsageRatio` | number
`contextWindowUsage` | [ConversationContextUsage](ConversationContextUsage.md)
`artifacts` | [Array&lt;ArtifactInfo&gt;](ArtifactInfo.md)
`nonFileArtifacts` | [Array&lt;WorkspaceNonFileArtifact&gt;](WorkspaceNonFileArtifact.md)
`rawJson` | string


[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


