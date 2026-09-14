/* tslint:disable */
/* eslint-disable */
/**
 * AgentFile 的公开协议结构。 / Public contract for agent file.
 * @export
 * @interface AgentFile
 */
export interface AgentFile {
    /**
     * 字段 id / id field。
     */
    id: number;
    /**
     * 文件名 / file name。
     */
    fileName: string;
    /**
     * 字段 contentMd5 / content md5 field。
     */
    contentMd5: string;
    /**
     * 大小（字节）或分页容量 / byte size or page size。
     */
    size: number;
    /**
     * 创建时间 / creation time。
     */
    createdTime: string;
    /**
     * 最后更新时间 / last update time。
     */
    lastUpdateTime: string;
}
/**
 * AgentsConfig 的公开协议结构。 / Public contract for agents config.
 * @export
 * @interface AgentsConfig
 */
export interface AgentsConfig {
    /**
     * 字段 modelConfig / model config field。
     */
    modelConfig: ModelConfig;
    /**
     * 字段 supportAttachmentExt / support attachment ext field。
     */
    supportAttachmentExt: Array<AttachmentExtension>;
    /**
     * 字段 maxAttachmentCount / max attachment count field。
     */
    maxAttachmentCount: number;
}
/**
 * AiChatAwaitingInputBriefEvent 的公开协议结构。 / Public contract for ai chat awaiting input brief event.
 * @export
 * @interface AiChatAwaitingInputBriefEvent
 */
export interface AiChatAwaitingInputBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatAwaitingInputBriefEventTypeEnum;
    /**
     * 字段 toolCallId / tool call id field。
     */
    toolCallId: string;
    /**
     * 字段 toolName / tool name field。
     */
    toolName: string;
    /**
     * 字段 questionId / question id field。
     */
    questionId: string;
    /**
     * 字段 question / question field。
     */
    question: string;
    /**
     * 字段 options / options field。
     */
    options: Array<AskUserQuestionOption>;
    /**
     * 字段 multiple / multiple field。
     */
    multiple: boolean;
    /**
     * 字段 serverNow / server now field。
     */
    serverNow: string;
    /**
     * 字段 timeoutSeconds / timeout seconds field。
     */
    timeoutSeconds: number;
    /**
     * 字段 questionDetails / question details field。
     */
    questionDetails?: string | null;
}


/**
 * @export
 */
export const AiChatAwaitingInputBriefEventTypeEnum = {
    ToolExecutionAwaitingUserInput: 'tool-execution-awaiting-user-input',
} as const;
export type AiChatAwaitingInputBriefEventTypeEnum = typeof AiChatAwaitingInputBriefEventTypeEnum[keyof typeof AiChatAwaitingInputBriefEventTypeEnum];

/**
 * @type AiChatBriefEvent
 * AiChatBriefEvent 的公开协议结构。 / Public contract for ai chat brief event.
 * @export
 */
export type AiChatBriefEvent = { type: 'chat-client-request' } & AiChatRequestBriefEvent | { type: 'chat-client-response' } & AiChatResponseBriefEvent | { type: 'compactor-warning' } & AiChatCompactorWarningBriefEvent | { type: 'compressor-context-end' } & AiChatCompressorContextEndBriefEvent | { type: 'compressor-context-start' } & AiChatCompressorContextStartBriefEvent | { type: 'end' } & AiChatEndBriefEvent | { type: 'error' } & AiChatErrorBriefEvent | { type: 'manual-interrupt' } & AiChatManualInterruptBriefEvent | { type: 'message' } & AiChatMessageBriefEvent | { type: 'start' } & AiChatStartBriefEvent | { type: 'think' } & AiChatThinkBriefEvent | { type: 'tool-execution' } & AiChatToolExecutionBriefEvent | { type: 'tool-execution-awaiting-user-input' } & AiChatAwaitingInputBriefEvent | { type: 'tool-execution-sub-agent-call' } & AiChatSubAgentCallBriefEvent | { type: 'user-query' } & AiChatUserQueryBriefEvent;
/**
 * AiChatBriefEventList 的公开协议结构。 / Public contract for ai chat brief event list.
 * @export
 * @interface AiChatBriefEventList
 */
export interface AiChatBriefEventList {
    /**
     * 记录列表 / records。
     */
    records: Array<AiChatBriefEvent>;
}
/**
 * AiChatCompactorWarningBriefEvent 的公开协议结构。 / Public contract for ai chat compactor warning brief event.
 * @export
 * @interface AiChatCompactorWarningBriefEvent
 */
export interface AiChatCompactorWarningBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatCompactorWarningBriefEventTypeEnum;
    /**
     * 字段 level / level field。
     */
    level: string;
    /**
     * 字段 warning / warning field。
     */
    warning: string;
}


/**
 * @export
 */
export const AiChatCompactorWarningBriefEventTypeEnum = {
    CompactorWarning: 'compactor-warning',
} as const;
export type AiChatCompactorWarningBriefEventTypeEnum = typeof AiChatCompactorWarningBriefEventTypeEnum[keyof typeof AiChatCompactorWarningBriefEventTypeEnum];

/**
 * AiChatCompressorContextEndBriefEvent 的公开协议结构。 / Public contract for ai chat compressor context end brief event.
 * @export
 * @interface AiChatCompressorContextEndBriefEvent
 */
export interface AiChatCompressorContextEndBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatCompressorContextEndBriefEventTypeEnum;
}


/**
 * @export
 */
export const AiChatCompressorContextEndBriefEventTypeEnum = {
    CompressorContextEnd: 'compressor-context-end',
} as const;
export type AiChatCompressorContextEndBriefEventTypeEnum = typeof AiChatCompressorContextEndBriefEventTypeEnum[keyof typeof AiChatCompressorContextEndBriefEventTypeEnum];

/**
 * AiChatCompressorContextStartBriefEvent 的公开协议结构。 / Public contract for ai chat compressor context start brief event.
 * @export
 * @interface AiChatCompressorContextStartBriefEvent
 */
export interface AiChatCompressorContextStartBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatCompressorContextStartBriefEventTypeEnum;
}


/**
 * @export
 */
export const AiChatCompressorContextStartBriefEventTypeEnum = {
    CompressorContextStart: 'compressor-context-start',
} as const;
export type AiChatCompressorContextStartBriefEventTypeEnum = typeof AiChatCompressorContextStartBriefEventTypeEnum[keyof typeof AiChatCompressorContextStartBriefEventTypeEnum];

/**
 * AiChatEndBriefEvent 的公开协议结构。 / Public contract for ai chat end brief event.
 * @export
 * @interface AiChatEndBriefEvent
 */
export interface AiChatEndBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatEndBriefEventTypeEnum;
    /**
     * 字段 executionTimeMillis / execution time millis field。
     */
    executionTimeMillis: number;
    /**
     * 字段 totalUsage / total usage field。
     */
    totalUsage: Usage;
    /**
     * 字段 messageContextUsageRatio / message context usage ratio field。
     */
    messageContextUsageRatio?: number | null;
    /**
     * 字段 contextWindowUsage / context window usage field。
     */
    contextWindowUsage?: ConversationContextUsage | null;
    /**
     * 字段 artifacts / artifacts field。
     */
    artifacts: Array<ArtifactInfo>;
    /**
     * 字段 nonFileArtifacts / non file artifacts field。
     */
    nonFileArtifacts: Array<WorkspaceNonFileArtifact>;
}


/**
 * @export
 */
export const AiChatEndBriefEventTypeEnum = {
    End: 'end',
} as const;
export type AiChatEndBriefEventTypeEnum = typeof AiChatEndBriefEventTypeEnum[keyof typeof AiChatEndBriefEventTypeEnum];

/**
 * AiChatErrorBriefEvent 的公开协议结构。 / Public contract for ai chat error brief event.
 * @export
 * @interface AiChatErrorBriefEvent
 */
export interface AiChatErrorBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatErrorBriefEventTypeEnum;
    /**
     * 消息正文 / message text。
     */
    message: string;
}


/**
 * @export
 */
export const AiChatErrorBriefEventTypeEnum = {
    Error: 'error',
} as const;
export type AiChatErrorBriefEventTypeEnum = typeof AiChatErrorBriefEventTypeEnum[keyof typeof AiChatErrorBriefEventTypeEnum];

/**
 * AiChatEventsBatch 的公开协议结构。 / Public contract for ai chat events batch.
 * @export
 * @interface AiChatEventsBatch
 */
export interface AiChatEventsBatch {
    /**
     * 记录列表 / records。
     */
    records: Array<AiChatMessageEvent>;
    /**
     * 字段 skipped / skipped field。
     */
    skipped: Array<AiChatEventsBatchSkipped>;
}
/**
 * AiChatEventsBatchInput 的公开协议结构。 / Public contract for ai chat events batch input.
 * @export
 * @interface AiChatEventsBatchInput
 */
export interface AiChatEventsBatchInput {
    /**
     * 会话 ID / conversation ID。
     */
    conversationId: string;
    /**
     * 字段 messageIds / message ids field。
     */
    messageIds: Array<string>;
}
/**
 * AiChatEventsBatchSkipped 的公开协议结构。 / Public contract for ai chat events batch skipped.
 * @export
 * @interface AiChatEventsBatchSkipped
 */
export interface AiChatEventsBatchSkipped {
    /**
     * 消息 ID / message ID。
     */
    messageId: string;
    /**
     * 字段 reason / reason field。
     */
    reason: string;
}
/**
 * AiChatFileRef 的公开协议结构。 / Public contract for ai chat file ref.
 * @export
 * @interface AiChatFileRef
 */
export interface AiChatFileRef {
    /**
     * 字段 id / id field。
     */
    id: number;
    /**
     * 文件名 / file name。
     */
    fileName?: string | null;
}
/**
 * AiChatInput 的公开协议结构。 / Public contract for ai chat input.
 * @export
 * @interface AiChatInput
 */
export interface AiChatInput {
    /**
     * 用户问题 / user query。
     */
    query: string;
    /**
     * 会话 ID / conversation ID。
     */
    conversationId?: string | null;
    /**
     * 字段 chatModelSpec / chat model spec field。
     */
    chatModelSpec?: ChatModelSpec | null;
    /**
     * 字段 files / files field。
     */
    files?: Array<AiChatFileRef> | null;
}
/**
 * AiChatManualInterruptBriefEvent 的公开协议结构。 / Public contract for ai chat manual interrupt brief event.
 * @export
 * @interface AiChatManualInterruptBriefEvent
 */
export interface AiChatManualInterruptBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatManualInterruptBriefEventTypeEnum;
}


/**
 * @export
 */
export const AiChatManualInterruptBriefEventTypeEnum = {
    ManualInterrupt: 'manual-interrupt',
} as const;
export type AiChatManualInterruptBriefEventTypeEnum = typeof AiChatManualInterruptBriefEventTypeEnum[keyof typeof AiChatManualInterruptBriefEventTypeEnum];

/**
 * AiChatMessageBriefEvent 的公开协议结构。 / Public contract for ai chat message brief event.
 * @export
 * @interface AiChatMessageBriefEvent
 */
export interface AiChatMessageBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatMessageBriefEventTypeEnum;
    /**
     * 消息正文 / message text。
     */
    message: string;
}


/**
 * @export
 */
export const AiChatMessageBriefEventTypeEnum = {
    Message: 'message',
} as const;
export type AiChatMessageBriefEventTypeEnum = typeof AiChatMessageBriefEventTypeEnum[keyof typeof AiChatMessageBriefEventTypeEnum];

/**
 * AiChatMessageEvent 的公开协议结构。 / Public contract for ai chat message event.
 * @export
 * @interface AiChatMessageEvent
 */
export interface AiChatMessageEvent {
    /**
     * 消息 ID / message ID。
     */
    messageId: string;
    /**
     * 字段 events / events field。
     */
    events: Array<AiChatBriefEvent>;
}
/**
 * AiChatRequestBriefEvent 的公开协议结构。 / Public contract for ai chat request brief event.
 * @export
 * @interface AiChatRequestBriefEvent
 */
export interface AiChatRequestBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatRequestBriefEventTypeEnum;
    /**
     * 字段 messages / messages field。
     */
    messages: Array<ChatMessage>;
    /**
     * 字段 chatOptions / chat options field。
     */
    chatOptions?: ChatOptions | null;
}


/**
 * @export
 */
export const AiChatRequestBriefEventTypeEnum = {
    ChatClientRequest: 'chat-client-request',
} as const;
export type AiChatRequestBriefEventTypeEnum = typeof AiChatRequestBriefEventTypeEnum[keyof typeof AiChatRequestBriefEventTypeEnum];

/**
 * AiChatResponseBriefEvent 的公开协议结构。 / Public contract for ai chat response brief event.
 * @export
 * @interface AiChatResponseBriefEvent
 */
export interface AiChatResponseBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatResponseBriefEventTypeEnum;
    /**
     * 字段 assistantMessages / assistant messages field。
     */
    assistantMessages: Array<AssistantChatMessage>;
    /**
     * 字段 usage / usage field。
     */
    usage: Usage;
}


/**
 * @export
 */
export const AiChatResponseBriefEventTypeEnum = {
    ChatClientResponse: 'chat-client-response',
} as const;
export type AiChatResponseBriefEventTypeEnum = typeof AiChatResponseBriefEventTypeEnum[keyof typeof AiChatResponseBriefEventTypeEnum];

/**
 * AiChatStartBriefEvent 的公开协议结构。 / Public contract for ai chat start brief event.
 * @export
 * @interface AiChatStartBriefEvent
 */
export interface AiChatStartBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatStartBriefEventTypeEnum;
}


/**
 * @export
 */
export const AiChatStartBriefEventTypeEnum = {
    Start: 'start',
} as const;
export type AiChatStartBriefEventTypeEnum = typeof AiChatStartBriefEventTypeEnum[keyof typeof AiChatStartBriefEventTypeEnum];

/**
 * AiChatStreamInput 的公开协议结构。 / Public contract for ai chat stream input.
 * @export
 * @interface AiChatStreamInput
 */
export interface AiChatStreamInput {
    /**
     * 消息 ID / message ID。
     */
    messageId: string;
}
/**
 * AiChatSubAgentCallBriefEvent 的公开协议结构。 / Public contract for ai chat sub agent call brief event.
 * @export
 * @interface AiChatSubAgentCallBriefEvent
 */
export interface AiChatSubAgentCallBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatSubAgentCallBriefEventTypeEnum;
    /**
     * 字段 toolCallId / tool call id field。
     */
    toolCallId: string;
    /**
     * 字段 toolName / tool name field。
     */
    toolName: string;
    /**
     * 字段 subAgentConversationId / sub agent conversation id field。
     */
    subAgentConversationId: string;
    /**
     * 字段 subAgentMessageId / sub agent message id field。
     */
    subAgentMessageId: string;
}


/**
 * @export
 */
export const AiChatSubAgentCallBriefEventTypeEnum = {
    ToolExecutionSubAgentCall: 'tool-execution-sub-agent-call',
} as const;
export type AiChatSubAgentCallBriefEventTypeEnum = typeof AiChatSubAgentCallBriefEventTypeEnum[keyof typeof AiChatSubAgentCallBriefEventTypeEnum];

/**
 * AiChatSubmission 的公开协议结构。 / Public contract for ai chat submission.
 * @export
 * @interface AiChatSubmission
 */
export interface AiChatSubmission {
    /**
     * 会话 ID / conversation ID。
     */
    conversationId: string;
    /**
     * 消息 ID / message ID。
     */
    messageId: string;
    /**
     * 字段 disposition / disposition field。 Dispatch disposition. Unknown future values must be preserved.
     */
    disposition: string;
    /**
     * 当前状态 / current status。 Persisted message status. Unknown future values must be preserved.
     */
    status: string;
}
/**
 * AiChatThinkBriefEvent 的公开协议结构。 / Public contract for ai chat think brief event.
 * @export
 * @interface AiChatThinkBriefEvent
 */
export interface AiChatThinkBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatThinkBriefEventTypeEnum;
    /**
     * 消息正文 / message text。
     */
    message: string;
}


/**
 * @export
 */
export const AiChatThinkBriefEventTypeEnum = {
    Think: 'think',
} as const;
export type AiChatThinkBriefEventTypeEnum = typeof AiChatThinkBriefEventTypeEnum[keyof typeof AiChatThinkBriefEventTypeEnum];

/**
 * AiChatToolExecutionBriefEvent 的公开协议结构。 / Public contract for ai chat tool execution brief event.
 * @export
 * @interface AiChatToolExecutionBriefEvent
 */
export interface AiChatToolExecutionBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatToolExecutionBriefEventTypeEnum;
    /**
     * 字段 toolId / tool id field。
     */
    toolId: string;
    /**
     * 字段 toolName / tool name field。
     */
    toolName: string;
    /**
     * 当前状态 / current status。
     */
    status: string;
    /**
     * 字段 action / action field。
     */
    action: string;
    /**
     * 字段 summary / summary field。
     */
    summary?: string | null;
    /**
     * 字段 extension / extension field。
     */
    extension?: ToolExtension | null;
}


/**
 * @export
 */
export const AiChatToolExecutionBriefEventTypeEnum = {
    ToolExecution: 'tool-execution',
} as const;
export type AiChatToolExecutionBriefEventTypeEnum = typeof AiChatToolExecutionBriefEventTypeEnum[keyof typeof AiChatToolExecutionBriefEventTypeEnum];

/**
 * AiChatUserQueryBriefEvent 的公开协议结构。 / Public contract for ai chat user query brief event.
 * @export
 * @interface AiChatUserQueryBriefEvent
 */
export interface AiChatUserQueryBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AiChatUserQueryBriefEventTypeEnum;
    /**
     * 用户问题 / user query。
     */
    query: string;
    /**
     * 字段 attachments / attachments field。
     */
    attachments?: Array<MediaAttachment> | null;
}


/**
 * @export
 */
export const AiChatUserQueryBriefEventTypeEnum = {
    UserQuery: 'user-query',
} as const;
export type AiChatUserQueryBriefEventTypeEnum = typeof AiChatUserQueryBriefEventTypeEnum[keyof typeof AiChatUserQueryBriefEventTypeEnum];

/**
 * ArtifactInfo 的公开协议结构。 / Public contract for artifact info.
 * @export
 * @interface ArtifactInfo
 */
export interface ArtifactInfo {
    /**
     * 文件 ID / file ID。
     */
    fileId: number;
    /**
     * 字段 fileSize / file size field。
     */
    fileSize: number;
    /**
     * 文件名 / file name。
     */
    fileName: string;
    /**
     * MIME 类型 / MIME type。
     */
    mimeType: string;
    /**
     * 字段 relativePath / relative path field。
     */
    relativePath?: string | null;
    /**
     * 字段 deliveryStatus / delivery status field。
     */
    deliveryStatus: string;
    /**
     * 字段 issueCodes / issue codes field。
     */
    issueCodes: Array<string>;
    /**
     * 字段 recoverable / recoverable field。
     */
    recoverable: boolean;
}
/**
 * AskUserQuestionExtensionContent 的公开协议结构。 / Public contract for ask user question extension content.
 * @export
 * @interface AskUserQuestionExtensionContent
 */
export interface AskUserQuestionExtensionContent {
    /**
     * 字段 selectedOptions / selected options field。
     */
    selectedOptions: Array<string>;
    /**
     * 字段 customInput / custom input field。
     */
    customInput?: string | null;
}
/**
 * AskUserQuestionExtensionToolExtension 的公开协议结构。 / Public contract for ask user question extension tool extension.
 * @export
 * @interface AskUserQuestionExtensionToolExtension
 */
export interface AskUserQuestionExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: AskUserQuestionExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: AskUserQuestionExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const AskUserQuestionExtensionToolExtensionCategoryEnum = {
    AskUserQuestion: 'askUserQuestion',
} as const;
export type AskUserQuestionExtensionToolExtensionCategoryEnum = typeof AskUserQuestionExtensionToolExtensionCategoryEnum[keyof typeof AskUserQuestionExtensionToolExtensionCategoryEnum];

/**
 * AskUserQuestionOption 的公开协议结构。 / Public contract for ask user question option.
 * @export
 * @interface AskUserQuestionOption
 */
export interface AskUserQuestionOption {
    /**
     * 字段 text / text field。
     */
    text: string;
    /**
     * 字段 recommended / recommended field。
     */
    recommended: boolean;
}
/**
 * AssistantChatMessage 的公开协议结构。 / Public contract for assistant chat message.
 * @export
 * @interface AssistantChatMessage
 */
export interface AssistantChatMessage {
    /**
     * 类型判别值 / type discriminator。
     */
    type: AssistantChatMessageTypeEnum;
    /**
     * 字段 text / text field。
     */
    text?: string | null;
    /**
     * 字段 reasoningText / reasoning text field。
     */
    reasoningText?: string | null;
    /**
     * 字段 toolCalls / tool calls field。
     */
    toolCalls: Array<ToolCall>;
    /**
     * 字段 metadataRawJson / metadata raw json field。
     */
    metadataRawJson?: string | null;
}


/**
 * @export
 */
export const AssistantChatMessageTypeEnum = {
    Assistant: 'ASSISTANT',
} as const;
export type AssistantChatMessageTypeEnum = typeof AssistantChatMessageTypeEnum[keyof typeof AssistantChatMessageTypeEnum];

/**
 * AsyncTask 的公开协议结构。 / Public contract for async task.
 * @export
 * @interface AsyncTask
 */
export interface AsyncTask {
    /**
     * 异步任务 ID / asynchronous task ID。
     */
    taskId: string;
    /**
     * 字段 taskType / task type field。
     */
    taskType: string;
    /**
     * 标题 / title。
     */
    title: string;
    /**
     * 当前状态 / current status。
     */
    status: string;
    /**
     * 字段 progressPercent / progress percent field。
     */
    progressPercent?: number | null;
    /**
     * 字段 phase / phase field。
     */
    phase?: string | null;
    /**
     * 字段 statusMessage / status message field。
     */
    statusMessage?: string | null;
    /**
     * 字段 resultAvailable / result available field。
     */
    resultAvailable: boolean;
    /**
     * 字段 cancellable / cancellable field。
     */
    cancellable: boolean;
    /**
     * 字段 failureCode / failure code field。
     */
    failureCode?: string | null;
    /**
     * 字段 failureMessage / failure message field。
     */
    failureMessage?: string | null;
    /**
     * 字段 originConversationId / origin conversation id field。
     */
    originConversationId: string;
    /**
     * 字段 originMessageId / origin message id field。
     */
    originMessageId: string;
    /**
     * 字段 originToolId / origin tool id field。
     */
    originToolId: string;
    /**
     * 字段 originToolName / origin tool name field。
     */
    originToolName: string;
    /**
     * 字段 targetMessageId / target message id field。
     */
    targetMessageId: string;
    /**
     * 字段 notificationStatus / notification status field。
     */
    notificationStatus: string;
    /**
     * 字段 notificationMessageId / notification message id field。
     */
    notificationMessageId?: string | null;
    /**
     * 创建时间 / creation time。
     */
    createdTime: string;
    /**
     * 字段 startedTime / started time field。
     */
    startedTime?: string | null;
    /**
     * 字段 completedTime / completed time field。
     */
    completedTime?: string | null;
    /**
     * 最后更新时间 / last update time。
     */
    lastUpdateTime: string;
    /**
     * 字段 trackingStatus / tracking status field。
     */
    trackingStatus: string;
    /**
     * 字段 trackingFailureCode / tracking failure code field。
     */
    trackingFailureCode?: string | null;
    /**
     * 字段 lastPollError / last poll error field。
     */
    lastPollError?: string | null;
}
/**
 * AsyncTaskPage 的公开协议结构。 / Public contract for async task page.
 * @export
 * @interface AsyncTaskPage
 */
export interface AsyncTaskPage {
    /**
     * 记录列表 / records。
     */
    records: Array<AsyncTask>;
    /**
     * 分页信息 / page metadata。
     */
    page: PageInfo;
}
/**
 * AttachmentExtension 的公开协议结构。 / Public contract for attachment extension.
 * @export
 * @interface AttachmentExtension
 */
export interface AttachmentExtension {
    /**
     * 字段 ext / ext field。
     */
    ext: string;
    /**
     * 字段 media / media field。
     */
    media: string;
}
/**
 * BooleanChartColumn 的公开协议结构。 / Public contract for boolean chart column.
 * @export
 * @interface BooleanChartColumn
 */
export interface BooleanChartColumn {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: BooleanChartColumnTypeEnum;
    /**
     * 字段 values / values field。
     */
    values: Array<boolean | null>;
}


/**
 * @export
 */
export const BooleanChartColumnTypeEnum = {
    Boolean: 'BOOLEAN',
} as const;
export type BooleanChartColumnTypeEnum = typeof BooleanChartColumnTypeEnum[keyof typeof BooleanChartColumnTypeEnum];

/**
 * @type ChartColumnData
 * ChartColumnData 的公开协议结构。 / Public contract for chart column data.
 * @export
 */
export type ChartColumnData = { type: 'BOOLEAN' } & BooleanChartColumn | { type: 'DECIMAL' } & DecimalChartColumn | { type: 'DOUBLE' } & DoubleChartColumn | { type: 'INSTANT' } & InstantChartColumn | { type: 'INTEGER' } & IntegerChartColumn | { type: 'LOCAL_DATE' } & LocalDateChartColumn | { type: 'LOCAL_DATE_TIME' } & LocalDateTimeChartColumn | { type: 'LOCAL_TIME' } & LocalTimeChartColumn | { type: 'LONG' } & IntegerChartColumn | { type: 'STRING' } & StringChartColumn;
/**
 * ChartNumberFormat 的公开协议结构。 / Public contract for chart number format.
 * @export
 * @interface ChartNumberFormat
 */
export interface ChartNumberFormat {
    /**
     * 类型判别值 / type discriminator。
     */
    type: string;
    /**
     * 字段 currency / currency field。
     */
    currency?: string | null;
    /**
     * 字段 decimalPlaces / decimal places field。
     */
    decimalPlaces: number;
    /**
     * 字段 valueScale / value scale field。
     */
    valueScale?: string | null;
}
/**
 * ChartQualitySummary 的公开协议结构。 / Public contract for chart quality summary.
 * @export
 * @interface ChartQualitySummary
 */
export interface ChartQualitySummary {
    /**
     * 字段 nullValueCount / null value count field。
     */
    nullValueCount: number;
    /**
     * 字段 nullValueColumns / null value columns field。
     */
    nullValueColumns: Array<string>;
    /**
     * 字段 zeroFilledValueCount / zero filled value count field。
     */
    zeroFilledValueCount: number;
}
/**
 * ChartSeries 的公开协议结构。 / Public contract for chart series.
 * @export
 * @interface ChartSeries
 */
export interface ChartSeries {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 字段 valueColumn / value column field。
     */
    valueColumn: string;
    /**
     * 字段 renderType / render type field。
     */
    renderType: ChartSeriesRenderTypeEnum;
    /**
     * 字段 axis / axis field。
     */
    axis: ChartSeriesAxisEnum;
    /**
     * 字段 numberFormat / number format field。
     */
    numberFormat: ChartNumberFormat;
    /**
     * 字段 stack / stack field。
     */
    stack?: string | null;
}


/**
 * @export
 */
export const ChartSeriesRenderTypeEnum = {
    Bar: 'BAR',
    Line: 'LINE',
    Pie: 'PIE',
} as const;
export type ChartSeriesRenderTypeEnum = typeof ChartSeriesRenderTypeEnum[keyof typeof ChartSeriesRenderTypeEnum];

/**
 * @export
 */
export const ChartSeriesAxisEnum = {
    Primary: 'PRIMARY',
    Secondary: 'SECONDARY',
} as const;
export type ChartSeriesAxisEnum = typeof ChartSeriesAxisEnum[keyof typeof ChartSeriesAxisEnum];

/**
 * ChartSpec 的公开协议结构。 / Public contract for chart spec.
 * @export
 * @interface ChartSpec
 */
export interface ChartSpec {
    /**
     * 字段 version / version field。
     */
    version: number;
    /**
     * 类型判别值 / type discriminator。
     */
    type: ChartSpecTypeEnum;
    /**
     * 标题 / title。
     */
    title: string;
    /**
     * 字段 subtitle / subtitle field。
     */
    subtitle?: string | null;
    /**
     * 字段 categoryColumn / category column field。
     */
    categoryColumn: string;
    /**
     * 字段 categoryType / category type field。
     */
    categoryType: ChartSpecCategoryTypeEnum;
    /**
     * 字段 orientation / orientation field。
     */
    orientation: ChartSpecOrientationEnum;
    /**
     * 字段 series / series field。
     */
    series: Array<ChartSeries>;
    /**
     * 字段 legend / legend field。
     */
    legend: boolean;
    /**
     * 字段 dataZoom / data zoom field。
     */
    dataZoom: ChartSpecDataZoomEnum;
    /**
     * 字段 nullPolicy / null policy field。
     */
    nullPolicy: ChartSpecNullPolicyEnum;
}


/**
 * @export
 */
export const ChartSpecTypeEnum = {
    Bar: 'BAR',
    Line: 'LINE',
    BarLine: 'BAR_LINE',
    StackedBar: 'STACKED_BAR',
    Pie: 'PIE',
} as const;
export type ChartSpecTypeEnum = typeof ChartSpecTypeEnum[keyof typeof ChartSpecTypeEnum];

/**
 * @export
 */
export const ChartSpecCategoryTypeEnum = {
    Category: 'CATEGORY',
    Time: 'TIME',
} as const;
export type ChartSpecCategoryTypeEnum = typeof ChartSpecCategoryTypeEnum[keyof typeof ChartSpecCategoryTypeEnum];

/**
 * @export
 */
export const ChartSpecOrientationEnum = {
    Vertical: 'VERTICAL',
    Horizontal: 'HORIZONTAL',
} as const;
export type ChartSpecOrientationEnum = typeof ChartSpecOrientationEnum[keyof typeof ChartSpecOrientationEnum];

/**
 * @export
 */
export const ChartSpecDataZoomEnum = {
    None: 'NONE',
    Auto: 'AUTO',
} as const;
export type ChartSpecDataZoomEnum = typeof ChartSpecDataZoomEnum[keyof typeof ChartSpecDataZoomEnum];

/**
 * @export
 */
export const ChartSpecNullPolicyEnum = {
    Gap: 'GAP',
    Zero: 'ZERO',
    Reject: 'REJECT',
} as const;
export type ChartSpecNullPolicyEnum = typeof ChartSpecNullPolicyEnum[keyof typeof ChartSpecNullPolicyEnum];

/**
 * ChartTimeContext 的公开协议结构。 / Public contract for chart time context.
 * @export
 * @interface ChartTimeContext
 */
export interface ChartTimeContext {
    /**
     * 字段 asOfInstant / as of instant field。
     */
    asOfInstant: string;
    /**
     * 字段 tenantZoneId / tenant zone id field。
     */
    tenantZoneId: string;
}
/**
 * @type ChatMessage
 * ChatMessage 的公开协议结构。 / Public contract for chat message.
 * @export
 */
export type ChatMessage = { type: 'ASSISTANT' } & AssistantChatMessage | { type: 'SYSTEM' } & SystemChatMessage | { type: 'TOOL' } & ToolResponseChatMessage | { type: 'USER' } & UserChatMessage;
/**
 * ChatModelConfig 的公开协议结构。 / Public contract for chat model config.
 * @export
 * @interface ChatModelConfig
 */
export interface ChatModelConfig {
    /**
     * 字段 maker / maker field。
     */
    maker: string;
    /**
     * 字段 modelName / model name field。
     */
    modelName: string;
    /**
     * 字段 modelLabel / model label field。
     */
    modelLabel: string;
    /**
     * 字段 modelDescription / model description field。
     */
    modelDescription: string;
    /**
     * 字段 maxContextTokens / max context tokens field。
     */
    maxContextTokens: number;
    /**
     * 字段 maxOutputTokens / max output tokens field。
     */
    maxOutputTokens: number;
    /**
     * 字段 supportImage / support image field。
     */
    supportImage: boolean;
    /**
     * 字段 supportVideo / support video field。
     */
    supportVideo: boolean;
    /**
     * 字段 thinkingMode / thinking mode field。
     */
    thinkingMode: boolean;
}
/**
 * ChatModelSpec 的公开协议结构。 / Public contract for chat model spec.
 * @export
 * @interface ChatModelSpec
 */
export interface ChatModelSpec {
    /**
     * 字段 keyGroupId / key group id field。
     */
    keyGroupId: number;
    /**
     * 字段 model / model field。
     */
    model: string;
    /**
     * 字段 thinking / thinking field。
     */
    thinking?: boolean | null;
    /**
     * 字段 stopSequences / stop sequences field。
     */
    stopSequences?: Array<string> | null;
    /**
     * 字段 temperature / temperature field。
     */
    temperature?: number | null;
    /**
     * 字段 maxTokens / max tokens field。
     */
    maxTokens?: number | null;
    /**
     * 字段 topP / top p field。
     */
    topP?: number | null;
    /**
     * 字段 topK / top k field。
     */
    topK?: number | null;
    /**
     * 字段 frequencyPenalty / frequency penalty field。
     */
    frequencyPenalty?: number | null;
    /**
     * 字段 presencePenalty / presence penalty field。
     */
    presencePenalty?: number | null;
}
/**
 * ChatOptions 的公开协议结构。 / Public contract for chat options.
 * @export
 * @interface ChatOptions
 */
export interface ChatOptions {
    /**
     * 字段 model / model field。
     */
    model?: string | null;
    /**
     * 字段 frequencyPenalty / frequency penalty field。
     */
    frequencyPenalty?: number | null;
    /**
     * 字段 maxTokens / max tokens field。
     */
    maxTokens?: number | null;
    /**
     * 字段 presencePenalty / presence penalty field。
     */
    presencePenalty?: number | null;
    /**
     * 字段 stopSequences / stop sequences field。
     */
    stopSequences?: Array<string> | null;
    /**
     * 字段 temperature / temperature field。
     */
    temperature?: number | null;
    /**
     * 字段 topP / top p field。
     */
    topP?: number | null;
}
/**
 * ChatStreamProbeEvent 的公开协议结构。 / Public contract for chat stream probe event.
 * @export
 * @interface ChatStreamProbeEvent
 */
export interface ChatStreamProbeEvent {
    /**
     * 字段 probeId / probe id field。
     */
    probeId: string;
    /**
     * 字段 sequence / sequence field。
     */
    sequence: number;
    /**
     * 字段 serverElapsedMs / server elapsed ms field。
     */
    serverElapsedMs: number;
}
/**
 * ChatStreamProbeInput 的公开协议结构。 / Public contract for chat stream probe input.
 * @export
 * @interface ChatStreamProbeInput
 */
export interface ChatStreamProbeInput {
    /**
     * 字段 probeId / probe id field。
     */
    probeId: string;
}
/**
 * CitationMetadata 的公开协议结构。 / Public contract for citation metadata.
 * @export
 * @interface CitationMetadata
 */
export interface CitationMetadata {
    /**
     * 类型判别值 / type discriminator。
     */
    type: string;
    /**
     * 字段 referenceId / reference id field。
     */
    referenceId: number;
    /**
     * 标题 / title。
     */
    title?: string | null;
    /**
     * 可读说明 / human-readable description。
     */
    description?: string | null;
}
/**
 * CitationMetadataList 的公开协议结构。 / Public contract for citation metadata list.
 * @export
 * @interface CitationMetadataList
 */
export interface CitationMetadataList {
    /**
     * 记录列表 / records。
     */
    records: Array<CitationMetadata>;
}
/**
 * CodeMessage 的公开协议结构。 / Public contract for code message.
 * @export
 * @interface CodeMessage
 */
export interface CodeMessage {
    /**
     * 字段 code / code field。
     */
    code: string;
    /**
     * 消息正文 / message text。
     */
    message: string;
}
/**
 * ConfirmUploadInput 的公开协议结构。 / Public contract for confirm upload input.
 * @export
 * @interface ConfirmUploadInput
 */
export interface ConfirmUploadInput {
    /**
     * 字段 fileUk / file uk field。
     */
    fileUk: string;
    /**
     * 字段 contentMd5 / content md5 field。
     */
    contentMd5: string;
}
/**
 * ConversationActivity 的公开协议结构。 / Public contract for conversation activity.
 * @export
 * @interface ConversationActivity
 */
export interface ConversationActivity {
    /**
     * 会话 ID / conversation ID。
     */
    conversationId: string;
    /**
     * 字段 executionStatus / execution status field。
     */
    executionStatus: string;
    /**
     * 字段 activeMessageId / active message id field。
     */
    activeMessageId?: string | null;
    /**
     * 字段 executionEpoch / execution epoch field。
     */
    executionEpoch?: string | null;
    /**
     * 字段 executionStartedTime / execution started time field。
     */
    executionStartedTime?: string | null;
    /**
     * 字段 latestTerminalMessageId / latest terminal message id field。
     */
    latestTerminalMessageId?: string | null;
    /**
     * 字段 latestTerminalTime / latest terminal time field。
     */
    latestTerminalTime?: string | null;
    /**
     * 字段 hasUnreadCompletion / has unread completion field。
     */
    hasUnreadCompletion: boolean;
    /**
     * 字段 requiresUserConfirmation / requires user confirmation field。
     */
    requiresUserConfirmation: boolean;
}
/**
 * ConversationActivityBatchInput 的公开协议结构。 / Public contract for conversation activity batch input.
 * @export
 * @interface ConversationActivityBatchInput
 */
export interface ConversationActivityBatchInput {
    /**
     * 字段 conversationIds / conversation ids field。
     */
    conversationIds: Array<string>;
}
/**
 * ConversationActivityList 的公开协议结构。 / Public contract for conversation activity list.
 * @export
 * @interface ConversationActivityList
 */
export interface ConversationActivityList {
    /**
     * 记录列表 / records。
     */
    records: Array<ConversationActivity>;
}
/**
 * ConversationConfig 的公开协议结构。 / Public contract for conversation config.
 * @export
 * @interface ConversationConfig
 */
export interface ConversationConfig {
    /**
     * 字段 lastChatModelSpec / last chat model spec field。
     */
    lastChatModelSpec?: ChatModelSpec | null;
}
/**
 * ConversationContextUsage 的公开协议结构。 / Public contract for conversation context usage.
 * @export
 * @interface ConversationContextUsage
 */
export interface ConversationContextUsage {
    /**
     * 字段 systemPromptTokens / system prompt tokens field。
     */
    systemPromptTokens: number;
    /**
     * 字段 sessionMessageTokens / session message tokens field。
     */
    sessionMessageTokens: number;
    /**
     * 字段 maxContextTokens / max context tokens field。
     */
    maxContextTokens: number;
    /**
     * 字段 toolDefinitionTokens / tool definition tokens field。
     */
    toolDefinitionTokens: number;
    /**
     * 字段 protocolReserveTokens / protocol reserve tokens field。
     */
    protocolReserveTokens: number;
    /**
     * 字段 activeContextTokens / active context tokens field。
     */
    activeContextTokens: number;
    /**
     * 字段 requestedOutputTokens / requested output tokens field。
     */
    requestedOutputTokens: number;
    /**
     * 字段 messageAssemblyReserveTokens / message assembly reserve tokens field。
     */
    messageAssemblyReserveTokens: number;
    /**
     * 字段 requiredContextTokens / required context tokens field。
     */
    requiredContextTokens: number;
    /**
     * 字段 activeUsageRatio / active usage ratio field。
     */
    activeUsageRatio?: number | null;
    /**
     * 字段 requiredUsageRatio / required usage ratio field。
     */
    requiredUsageRatio?: number | null;
    /**
     * 字段 calculationSource / calculation source field。
     */
    calculationSource: string;
}
/**
 * ConversationIds 的公开协议结构。 / Public contract for conversation ids.
 * @export
 * @interface ConversationIds
 */
export interface ConversationIds {
    /**
     * 字段 conversationIds / conversation ids field。
     */
    conversationIds: Array<string>;
}
/**
 * ConversationMessage 的公开协议结构。 / Public contract for conversation message.
 * @export
 * @interface ConversationMessage
 */
export interface ConversationMessage {
    /**
     * 消息 ID / message ID。
     */
    messageId: string;
    /**
     * 字段 userMessage / user message field。
     */
    userMessage: ConversationUserMessage;
    /**
     * 输入 Token 数 / input token count。
     */
    inputTokens: number;
    /**
     * 输出 Token 数 / output token count。
     */
    outputTokens: number;
    /**
     * 总 Token 数 / total token count。
     */
    totalTokens: number;
    /**
     * 字段 usage / usage field。
     */
    usage: Usage;
    /**
     * 字段 executionTimeMillis / execution time millis field。
     */
    executionTimeMillis: number;
    /**
     * 字段 processingSteps / processing steps field。
     */
    processingSteps: number;
    /**
     * 字段 totalToolCalls / total tool calls field。
     */
    totalToolCalls: number;
    /**
     * 当前状态 / current status。
     */
    status: string;
    /**
     * 创建时间 / creation time。
     */
    createdTime: string;
    /**
     * 最后更新时间 / last update time。
     */
    lastUpdateTime: string;
    /**
     * 字段 executionType / execution type field。
     */
    executionType: string;
    /**
     * 字段 parentMessageId / parent message id field。
     */
    parentMessageId?: string | null;
}
/**
 * ConversationMessagePage 的公开协议结构。 / Public contract for conversation message page.
 * @export
 * @interface ConversationMessagePage
 */
export interface ConversationMessagePage {
    /**
     * 记录列表 / records。
     */
    records: Array<ConversationMessage>;
    /**
     * 分页信息 / page metadata。
     */
    page: PageInfo;
}
/**
 * ConversationReadReceipt 的公开协议结构。 / Public contract for conversation read receipt.
 * @export
 * @interface ConversationReadReceipt
 */
export interface ConversationReadReceipt {
    /**
     * 会话 ID / conversation ID。
     */
    conversationId: string;
    /**
     * 字段 executionStatus / execution status field。
     */
    executionStatus: string;
    /**
     * 字段 activeMessageId / active message id field。
     */
    activeMessageId?: string | null;
    /**
     * 字段 executionEpoch / execution epoch field。
     */
    executionEpoch?: string | null;
    /**
     * 字段 executionStartedTime / execution started time field。
     */
    executionStartedTime?: string | null;
    /**
     * 字段 latestTerminalMessageId / latest terminal message id field。
     */
    latestTerminalMessageId?: string | null;
    /**
     * 字段 latestTerminalTime / latest terminal time field。
     */
    latestTerminalTime?: string | null;
    /**
     * 字段 hasUnreadCompletion / has unread completion field。
     */
    hasUnreadCompletion: boolean;
}
/**
 * ConversationReadReceiptInput 的公开协议结构。 / Public contract for conversation read receipt input.
 * @export
 * @interface ConversationReadReceiptInput
 */
export interface ConversationReadReceiptInput {
    /**
     * 消息 ID / message ID。
     */
    messageId: string;
}
/**
 * ConversationShareCreated 的公开协议结构。 / Public contract for conversation share created.
 * @export
 * @interface ConversationShareCreated
 */
export interface ConversationShareCreated {
    /**
     * 字段 shareId / share id field。
     */
    shareId: number;
    /**
     * 字段 shareCode / share code field。
     */
    shareCode: string;
    /**
     * 字段 serverName / server name field。
     */
    serverName: string;
    /**
     * 字段 passwordRequired / password required field。
     */
    passwordRequired: boolean;
    /**
     * 字段 expiresAt / expires at field。
     */
    expiresAt?: string | null;
}
/**
 * ConversationShareInput 的公开协议结构。 / Public contract for conversation share input.
 * @export
 * @interface ConversationShareInput
 */
export interface ConversationShareInput {
    /**
     * 字段 password / password field。
     */
    password?: string | null;
    /**
     * 字段 expiresAt / expires at field。
     */
    expiresAt?: string | null;
}
/**
 * ConversationShareList 的公开协议结构。 / Public contract for conversation share list.
 * @export
 * @interface ConversationShareList
 */
export interface ConversationShareList {
    /**
     * 记录列表 / records。
     */
    records: Array<ConversationShareRecord>;
}
/**
 * ConversationShareRecord 的公开协议结构。 / Public contract for conversation share record.
 * @export
 * @interface ConversationShareRecord
 */
export interface ConversationShareRecord {
    /**
     * 字段 shareId / share id field。
     */
    shareId: number;
    /**
     * 字段 shareCode / share code field。
     */
    shareCode: string;
    /**
     * 字段 serverName / server name field。
     */
    serverName: string;
    /**
     * 字段 accessMode / access mode field。
     */
    accessMode: string;
    /**
     * 当前状态 / current status。
     */
    status: string;
    /**
     * 字段 expiresAt / expires at field。
     */
    expiresAt?: string | null;
    /**
     * 创建时间 / creation time。
     */
    createdTime: string;
    /**
     * 最后更新时间 / last update time。
     */
    lastUpdateTime: string;
}
/**
 * ConversationShareRevoked 的公开协议结构。 / Public contract for conversation share revoked.
 * @export
 * @interface ConversationShareRevoked
 */
export interface ConversationShareRevoked {
    /**
     * 字段 shareId / share id field。
     */
    shareId: number;
}
/**
 * ConversationStats 的公开协议结构。 / Public contract for conversation stats.
 * @export
 * @interface ConversationStats
 */
export interface ConversationStats {
    /**
     * 字段 publishId / publish id field。
     */
    publishId: string;
    /**
     * 字段 totalConversations / total conversations field。
     */
    totalConversations: number;
    /**
     * 字段 activeConversations / active conversations field。
     */
    activeConversations: number;
    /**
     * 字段 totalMessages / total messages field。
     */
    totalMessages: number;
    /**
     * 总 Token 数 / total token count。
     */
    totalTokens: number;
    /**
     * 字段 avgMessagesPerConversation / avg messages per conversation field。
     */
    avgMessagesPerConversation: number;
}
/**
 * ConversationStatusInput 的公开协议结构。 / Public contract for conversation status input.
 * @export
 * @interface ConversationStatusInput
 */
export interface ConversationStatusInput {
    /**
     * 当前状态 / current status。
     */
    status: string;
}
/**
 * ConversationSummary 的公开协议结构。 / Public contract for conversation summary.
 * @export
 * @interface ConversationSummary
 */
export interface ConversationSummary {
    /**
     * 会话 ID / conversation ID。
     */
    conversationId: string;
    /**
     * 字段 conversationType / conversation type field。
     */
    conversationType: string;
    /**
     * 标题 / title。
     */
    title?: string | null;
    /**
     * 字段 titleState / title state field。
     */
    titleState: string;
    /**
     * 当前状态 / current status。
     */
    status: string;
    /**
     * 字段 messageCount / message count field。
     */
    messageCount: number;
    /**
     * 总 Token 数 / total token count。
     */
    totalTokens: number;
    /**
     * 字段 totalInputTokens / total input tokens field。
     */
    totalInputTokens: number;
    /**
     * 字段 totalOutputTokens / total output tokens field。
     */
    totalOutputTokens: number;
    /**
     * 字段 usage / usage field。
     */
    usage: Usage;
    /**
     * 创建时间 / creation time。
     */
    createdTime: string;
    /**
     * 最后更新时间 / last update time。
     */
    lastUpdateTime: string;
}
/**
 * ConversationSummaryList 的公开协议结构。 / Public contract for conversation summary list.
 * @export
 * @interface ConversationSummaryList
 */
export interface ConversationSummaryList {
    /**
     * 记录列表 / records。
     */
    records: Array<ConversationSummary>;
}
/**
 * ConversationTitle 的公开协议结构。 / Public contract for conversation title.
 * @export
 * @interface ConversationTitle
 */
export interface ConversationTitle {
    /**
     * 会话 ID / conversation ID。
     */
    conversationId: string;
    /**
     * 标题 / title。
     */
    title?: string | null;
    /**
     * 字段 titleState / title state field。
     */
    titleState: string;
}
/**
 * ConversationTitleInput 的公开协议结构。 / Public contract for conversation title input.
 * @export
 * @interface ConversationTitleInput
 */
export interface ConversationTitleInput {
    /**
     * 标题 / title。
     */
    title: string;
}
/**
 * ConversationUserMessage 的公开协议结构。 / Public contract for conversation user message.
 * @export
 * @interface ConversationUserMessage
 */
export interface ConversationUserMessage {
    /**
     * 字段 text / text field。
     */
    text: string;
    /**
     * 字段 multimodalAttachments / multimodal attachments field。
     */
    multimodalAttachments?: Array<MultimodalMediaAttachment> | null;
    /**
     * 字段 attachments / attachments field。
     */
    attachments?: Array<MediaAttachment> | null;
    /**
     * 字段 metadataRawJson / metadata raw json field。
     */
    metadataRawJson?: string | null;
    /**
     * 字段 executionType / execution type field。
     */
    executionType: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: ConversationUserMessageTypeEnum;
}


/**
 * @export
 */
export const ConversationUserMessageTypeEnum = {
    User: 'USER',
} as const;
export type ConversationUserMessageTypeEnum = typeof ConversationUserMessageTypeEnum[keyof typeof ConversationUserMessageTypeEnum];

/**
 * CreateFileInput 的公开协议结构。 / Public contract for create file input.
 * @export
 * @interface CreateFileInput
 */
export interface CreateFileInput {
    /**
     * 文件名 / file name。
     */
    fileName: string;
    /**
     * 字段 contentMd5 / content md5 field。
     */
    contentMd5: string;
}
/**
 * DecimalChartColumn 的公开协议结构。 / Public contract for decimal chart column.
 * @export
 * @interface DecimalChartColumn
 */
export interface DecimalChartColumn {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: DecimalChartColumnTypeEnum;
    /**
     * 字段 values / values field。
     */
    values: Array<string | null>;
}


/**
 * @export
 */
export const DecimalChartColumnTypeEnum = {
    Decimal: 'DECIMAL',
} as const;
export type DecimalChartColumnTypeEnum = typeof DecimalChartColumnTypeEnum[keyof typeof DecimalChartColumnTypeEnum];

/**
 * DefaultModel 的公开协议结构。 / Public contract for default model.
 * @export
 * @interface DefaultModel
 */
export interface DefaultModel {
    /**
     * 字段 keyGroupId / key group id field。
     */
    keyGroupId: number;
    /**
     * 字段 model / model field。
     */
    model: string;
}
/**
 * DoubleChartColumn 的公开协议结构。 / Public contract for double chart column.
 * @export
 * @interface DoubleChartColumn
 */
export interface DoubleChartColumn {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: DoubleChartColumnTypeEnum;
    /**
     * 字段 values / values field。
     */
    values: Array<number | null>;
}


/**
 * @export
 */
export const DoubleChartColumnTypeEnum = {
    Double: 'DOUBLE',
} as const;
export type DoubleChartColumnTypeEnum = typeof DoubleChartColumnTypeEnum[keyof typeof DoubleChartColumnTypeEnum];

/**
 * FieldError 的公开协议结构。 / Public contract for field error.
 * @export
 * @interface FieldError
 */
export interface FieldError {
    /**
     * 字段 field / field field。
     */
    field: string;
    /**
     * 消息正文 / message text。
     */
    message: string;
}
/**
 * FileExists 的公开协议结构。 / Public contract for file exists.
 * @export
 * @interface FileExists
 */
export interface FileExists {
    /**
     * 字段 exists / exists field。
     */
    _exists: boolean;
}
/**
 * GeneratePreSignedUrlInput 的公开协议结构。 / Public contract for generate pre signed url input.
 * @export
 * @interface GeneratePreSignedUrlInput
 */
export interface GeneratePreSignedUrlInput {
    /**
     * 文件名 / file name。
     */
    fileName: string;
    /**
     * 字段 module / module field。
     */
    module: GeneratePreSignedUrlInputModuleEnum;
    /**
     * 字段 contentMd5 / content md5 field。
     */
    contentMd5: string;
    /**
     * 文件 ID / file ID。
     */
    fileId?: number | null;
}


/**
 * @export
 */
export const GeneratePreSignedUrlInputModuleEnum = {
    AiChatAttachments: 'ai-chat-attachments',
} as const;
export type GeneratePreSignedUrlInputModuleEnum = typeof GeneratePreSignedUrlInputModuleEnum[keyof typeof GeneratePreSignedUrlInputModuleEnum];

/**
 * GeneratePreSignedUrlOutput 的公开协议结构。 / Public contract for generate pre signed url output.
 * @export
 * @interface GeneratePreSignedUrlOutput
 */
export interface GeneratePreSignedUrlOutput {
    /**
     * 当前存储是否支持该操作 / whether the storage supports this operation。
     */
    support: boolean;
    /**
     * 字段 fileUk / file uk field。
     */
    fileUk?: string | null;
    /**
     * 预签名 URL / presigned URL。
     */
    url?: string | null;
}
/**
 * ImageGenerationExtensionContent 的公开协议结构。 / Public contract for image generation extension content.
 * @export
 * @interface ImageGenerationExtensionContent
 */
export interface ImageGenerationExtensionContent {
    /**
     * 文件 ID / file ID。
     */
    fileId: number;
}
/**
 * ImageGenerationExtensionToolExtension 的公开协议结构。 / Public contract for image generation extension tool extension.
 * @export
 * @interface ImageGenerationExtensionToolExtension
 */
export interface ImageGenerationExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: ImageGenerationExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: ImageGenerationExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const ImageGenerationExtensionToolExtensionCategoryEnum = {
    ImageGeneration: 'imageGeneration',
} as const;
export type ImageGenerationExtensionToolExtensionCategoryEnum = typeof ImageGenerationExtensionToolExtensionCategoryEnum[keyof typeof ImageGenerationExtensionToolExtensionCategoryEnum];

/**
 * InputTokenBreakdown 的公开协议结构。 / Public contract for input token breakdown.
 * @export
 * @interface InputTokenBreakdown
 */
export interface InputTokenBreakdown {
    /**
     * 字段 observedInputTokens / observed input tokens field。
     */
    observedInputTokens: number;
    /**
     * 字段 uncachedInputTokens / uncached input tokens field。
     */
    uncachedInputTokens: number;
    /**
     * 字段 cachedInputTokens / cached input tokens field。
     */
    cachedInputTokens: number;
    /**
     * 字段 cacheCreationInputTokens / cache creation input tokens field。
     */
    cacheCreationInputTokens?: number | null;
}
/**
 * InstantChartColumn 的公开协议结构。 / Public contract for instant chart column.
 * @export
 * @interface InstantChartColumn
 */
export interface InstantChartColumn {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: InstantChartColumnTypeEnum;
    /**
     * 字段 values / values field。
     */
    values: Array<string | null>;
}


/**
 * @export
 */
export const InstantChartColumnTypeEnum = {
    Instant: 'INSTANT',
} as const;
export type InstantChartColumnTypeEnum = typeof InstantChartColumnTypeEnum[keyof typeof InstantChartColumnTypeEnum];

/**
 * IntegerChartColumn 的公开协议结构。 / Public contract for integer chart column.
 * @export
 * @interface IntegerChartColumn
 */
export interface IntegerChartColumn {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: IntegerChartColumnTypeEnum;
    /**
     * 字段 values / values field。
     */
    values: Array<number | null>;
}


/**
 * @export
 */
export const IntegerChartColumnTypeEnum = {
    Integer: 'INTEGER',
    Long: 'LONG',
} as const;
export type IntegerChartColumnTypeEnum = typeof IntegerChartColumnTypeEnum[keyof typeof IntegerChartColumnTypeEnum];

/**
 * JsRunScriptExtensionContent 的公开协议结构。 / Public contract for js run script extension content.
 * @export
 * @interface JsRunScriptExtensionContent
 */
export interface JsRunScriptExtensionContent {
    /**
     * 字段 script / script field。
     */
    script: string;
}
/**
 * JsRunScriptExtensionToolExtension 的公开协议结构。 / Public contract for js run script extension tool extension.
 * @export
 * @interface JsRunScriptExtensionToolExtension
 */
export interface JsRunScriptExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: JsRunScriptExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: JsRunScriptExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const JsRunScriptExtensionToolExtensionCategoryEnum = {
    JsRunScript: 'jsRunScript',
} as const;
export type JsRunScriptExtensionToolExtensionCategoryEnum = typeof JsRunScriptExtensionToolExtensionCategoryEnum[keyof typeof JsRunScriptExtensionToolExtensionCategoryEnum];

/**
 * JsRunScriptResultExtensionContent 的公开协议结构。 / Public contract for js run script result extension content.
 * @export
 * @interface JsRunScriptResultExtensionContent
 */
export interface JsRunScriptResultExtensionContent {
    /**
     * 字段 result / result field。
     */
    result?: string | null;
    /**
     * 字段 stdout / stdout field。
     */
    stdout: string;
}
/**
 * JsRunScriptResultExtensionToolExtension 的公开协议结构。 / Public contract for js run script result extension tool extension.
 * @export
 * @interface JsRunScriptResultExtensionToolExtension
 */
export interface JsRunScriptResultExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: JsRunScriptResultExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: JsRunScriptResultExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const JsRunScriptResultExtensionToolExtensionCategoryEnum = {
    JsRunScriptResult: 'jsRunScriptResult',
} as const;
export type JsRunScriptResultExtensionToolExtensionCategoryEnum = typeof JsRunScriptResultExtensionToolExtensionCategoryEnum[keyof typeof JsRunScriptResultExtensionToolExtensionCategoryEnum];

/**
 * LocalDateChartColumn 的公开协议结构。 / Public contract for local date chart column.
 * @export
 * @interface LocalDateChartColumn
 */
export interface LocalDateChartColumn {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: LocalDateChartColumnTypeEnum;
    /**
     * 字段 values / values field。
     */
    values: Array<string | null>;
}


/**
 * @export
 */
export const LocalDateChartColumnTypeEnum = {
    LocalDate: 'LOCAL_DATE',
} as const;
export type LocalDateChartColumnTypeEnum = typeof LocalDateChartColumnTypeEnum[keyof typeof LocalDateChartColumnTypeEnum];

/**
 * LocalDateTimeChartColumn 的公开协议结构。 / Public contract for local date time chart column.
 * @export
 * @interface LocalDateTimeChartColumn
 */
export interface LocalDateTimeChartColumn {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: LocalDateTimeChartColumnTypeEnum;
    /**
     * 字段 values / values field。
     */
    values: Array<string | null>;
}


/**
 * @export
 */
export const LocalDateTimeChartColumnTypeEnum = {
    LocalDateTime: 'LOCAL_DATE_TIME',
} as const;
export type LocalDateTimeChartColumnTypeEnum = typeof LocalDateTimeChartColumnTypeEnum[keyof typeof LocalDateTimeChartColumnTypeEnum];

/**
 * LocalTimeChartColumn 的公开协议结构。 / Public contract for local time chart column.
 * @export
 * @interface LocalTimeChartColumn
 */
export interface LocalTimeChartColumn {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: LocalTimeChartColumnTypeEnum;
    /**
     * 字段 values / values field。
     */
    values: Array<string | null>;
}


/**
 * @export
 */
export const LocalTimeChartColumnTypeEnum = {
    LocalTime: 'LOCAL_TIME',
} as const;
export type LocalTimeChartColumnTypeEnum = typeof LocalTimeChartColumnTypeEnum[keyof typeof LocalTimeChartColumnTypeEnum];

/**
 * MathFormulaExtensionContent 的公开协议结构。 / Public contract for math formula extension content.
 * @export
 * @interface MathFormulaExtensionContent
 */
export interface MathFormulaExtensionContent {
    /**
     * 字段 expression / expression field。
     */
    expression: string;
    /**
     * 字段 variables / variables field。
     */
    variables?: Array<VariableBinding> | null;
}
/**
 * MathFormulaExtensionToolExtension 的公开协议结构。 / Public contract for math formula extension tool extension.
 * @export
 * @interface MathFormulaExtensionToolExtension
 */
export interface MathFormulaExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: MathFormulaExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: MathFormulaExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const MathFormulaExtensionToolExtensionCategoryEnum = {
    MathFormula: 'mathFormula',
} as const;
export type MathFormulaExtensionToolExtensionCategoryEnum = typeof MathFormulaExtensionToolExtensionCategoryEnum[keyof typeof MathFormulaExtensionToolExtensionCategoryEnum];

/**
 * MathResultExtensionContent 的公开协议结构。 / Public contract for math result extension content.
 * @export
 * @interface MathResultExtensionContent
 */
export interface MathResultExtensionContent {
    /**
     * 字段 result / result field。
     */
    result: string;
}
/**
 * MathResultExtensionToolExtension 的公开协议结构。 / Public contract for math result extension tool extension.
 * @export
 * @interface MathResultExtensionToolExtension
 */
export interface MathResultExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: MathResultExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: MathResultExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const MathResultExtensionToolExtensionCategoryEnum = {
    MathResult: 'mathResult',
} as const;
export type MathResultExtensionToolExtensionCategoryEnum = typeof MathResultExtensionToolExtensionCategoryEnum[keyof typeof MathResultExtensionToolExtensionCategoryEnum];

/**
 * MediaAttachment 的公开协议结构。 / Public contract for media attachment.
 * @export
 * @interface MediaAttachment
 */
export interface MediaAttachment {
    /**
     * 文件 ID / file ID。
     */
    fileId: number;
    /**
     * 字段 path / path field。
     */
    path: string;
    /**
     * 字段 fileSize / file size field。
     */
    fileSize: number;
    /**
     * 文件名 / file name。
     */
    fileName: string;
    /**
     * MIME 类型 / MIME type。
     */
    mimeType: string;
}
/**
 * ModelConfig 的公开协议结构。 / Public contract for model config.
 * @export
 * @interface ModelConfig
 */
export interface ModelConfig {
    /**
     * 字段 defaultModel / default model field。
     */
    defaultModel: DefaultModel | null;
    /**
     * 字段 modelKeyGroups / model key groups field。
     */
    modelKeyGroups: Array<ModelKeyGroup>;
}
/**
 * ModelKeyGroup 的公开协议结构。 / Public contract for model key group.
 * @export
 * @interface ModelKeyGroup
 */
export interface ModelKeyGroup {
    /**
     * 字段 keyGroupId / key group id field。
     */
    keyGroupId: number;
    /**
     * 字段 keyGroupName / key group name field。
     */
    keyGroupName: string;
    /**
     * 字段 models / models field。
     */
    models: Array<ChatModelConfig>;
}
/**
 * MultimodalMediaAttachment 的公开协议结构。 / Public contract for multimodal media attachment.
 * @export
 * @interface MultimodalMediaAttachment
 */
export interface MultimodalMediaAttachment {
    /**
     * 文件名 / file name。
     */
    fileName: string;
    /**
     * MIME 类型 / MIME type。
     */
    mimeType: string;
    /**
     * 字段 data / data field。
     */
    data: string;
}
/**
 * OperationResult 的公开协议结构。 / Public contract for operation result.
 * @export
 * @interface OperationResult
 */
export interface OperationResult {
    /**
     * 字段 success / success field。
     */
    success: boolean;
    /**
     * 消息正文 / message text。
     */
    message?: string | null;
}
/**
 * PageInfo 的公开协议结构。 / Public contract for page info.
 * @export
 * @interface PageInfo
 */
export interface PageInfo {
    /**
     * 字段 current / current field。
     */
    current: number;
    /**
     * 大小（字节）或分页容量 / byte size or page size。
     */
    size: number;
    /**
     * 字段 total / total field。
     */
    total: number;
}
/**
 * PlanApprovalExtensionContent 的公开协议结构。 / Public contract for plan approval extension content.
 * @export
 * @interface PlanApprovalExtensionContent
 */
export interface PlanApprovalExtensionContent {
    /**
     * 字段 previewFileId / preview file id field。
     */
    previewFileId: number;
    /**
     * 字段 serverNow / server now field。
     */
    serverNow: string;
    /**
     * 字段 approvalTimeoutAt / approval timeout at field。
     */
    approvalTimeoutAt: string;
}
/**
 * PlanApprovalExtensionToolExtension 的公开协议结构。 / Public contract for plan approval extension tool extension.
 * @export
 * @interface PlanApprovalExtensionToolExtension
 */
export interface PlanApprovalExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: PlanApprovalExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: PlanApprovalExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const PlanApprovalExtensionToolExtensionCategoryEnum = {
    PlanApproval: 'planApproval',
} as const;
export type PlanApprovalExtensionToolExtensionCategoryEnum = typeof PlanApprovalExtensionToolExtensionCategoryEnum[keyof typeof PlanApprovalExtensionToolExtensionCategoryEnum];

/**
 * PlanApprovalInput 的公开协议结构。 / Public contract for plan approval input.
 * @export
 * @interface PlanApprovalInput
 */
export interface PlanApprovalInput {
    /**
     * 会话 ID / conversation ID。
     */
    conversationId: string;
    /**
     * 消息 ID / message ID。
     */
    messageId: string;
    /**
     * 字段 approved / approved field。
     */
    approved: boolean;
    /**
     * 字段 feedback / feedback field。
     */
    feedback?: string | null;
}
/**
 * PlanStatus 的公开协议结构。 / Public contract for plan status.
 * @export
 * @interface PlanStatus
 */
export interface PlanStatus {
    /**
     * 字段 pending / pending field。
     */
    pending: boolean;
    /**
     * 当前状态 / current status。
     */
    status: string;
}
/**
 * PreSignedReadUrl 的公开协议结构。 / Public contract for pre signed read url.
 * @export
 * @interface PreSignedReadUrl
 */
export interface PreSignedReadUrl {
    /**
     * 预签名 URL / presigned URL。
     */
    url: string;
}
/**
 * ReturnedReference 的公开协议结构。 / Public contract for returned reference.
 * @export
 * @interface ReturnedReference
 */
export interface ReturnedReference {
    /**
     * 类型判别值 / type discriminator。
     */
    type: string;
    /**
     * 字段 referenceId / reference id field。
     */
    referenceId: number;
}
/**
 * SkillResourceExtensionContent 的公开协议结构。 / Public contract for skill resource extension content.
 * @export
 * @interface SkillResourceExtensionContent
 */
export interface SkillResourceExtensionContent {
    /**
     * 字段 operationType / operation type field。
     */
    operationType: string;
    /**
     * 字段 filepath / filepath field。
     */
    filepath: string;
}
/**
 * SkillResourceExtensionToolExtension 的公开协议结构。 / Public contract for skill resource extension tool extension.
 * @export
 * @interface SkillResourceExtensionToolExtension
 */
export interface SkillResourceExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: SkillResourceExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: SkillResourceExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const SkillResourceExtensionToolExtensionCategoryEnum = {
    SkillResource: 'skillResource',
} as const;
export type SkillResourceExtensionToolExtensionCategoryEnum = typeof SkillResourceExtensionToolExtensionCategoryEnum[keyof typeof SkillResourceExtensionToolExtensionCategoryEnum];

/**
 * SqlChartDataset 的公开协议结构。 / Public contract for sql chart dataset.
 * @export
 * @interface SqlChartDataset
 */
export interface SqlChartDataset {
    /**
     * 字段 resultId / result id field。
     */
    resultId: string;
    /**
     * 字段 schema / schema field。
     */
    schema: Array<SqlResultColumnSchema>;
    /**
     * 字段 rowCount / row count field。
     */
    rowCount: number;
    /**
     * 字段 columns / columns field。
     */
    columns: Array<ChartColumnData>;
}
/**
 * SqlChartResultExtensionContent 的公开协议结构。 / Public contract for sql chart result extension content.
 * @export
 * @interface SqlChartResultExtensionContent
 */
export interface SqlChartResultExtensionContent {
    /**
     * 字段 resultId / result id field。
     */
    resultId: string;
    /**
     * 字段 rowCount / row count field。
     */
    rowCount: number;
    /**
     * 字段 columnCount / column count field。
     */
    columnCount: number;
    /**
     * 字段 columns / columns field。
     */
    columns: Array<string>;
    /**
     * 字段 schema / schema field。
     */
    schema: Array<SqlResultColumnSchema>;
    /**
     * 字段 chart / chart field。
     */
    chart: ChartSpec;
    /**
     * 字段 qualitySummary / quality summary field。
     */
    qualitySummary: ChartQualitySummary;
    /**
     * 字段 timeContext / time context field。
     */
    timeContext: ChartTimeContext;
}
/**
 * SqlChartResultExtensionToolExtension 的公开协议结构。 / Public contract for sql chart result extension tool extension.
 * @export
 * @interface SqlChartResultExtensionToolExtension
 */
export interface SqlChartResultExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: SqlChartResultExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: SqlChartResultExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const SqlChartResultExtensionToolExtensionCategoryEnum = {
    SqlChartResult: 'sqlChartResult',
} as const;
export type SqlChartResultExtensionToolExtensionCategoryEnum = typeof SqlChartResultExtensionToolExtensionCategoryEnum[keyof typeof SqlChartResultExtensionToolExtensionCategoryEnum];

/**
 * SqlQueryExtensionContent 的公开协议结构。 / Public contract for sql query extension content.
 * @export
 * @interface SqlQueryExtensionContent
 */
export interface SqlQueryExtensionContent {
    /**
     * 字段 sql / sql field。
     */
    sql: string;
}
/**
 * SqlQueryExtensionToolExtension 的公开协议结构。 / Public contract for sql query extension tool extension.
 * @export
 * @interface SqlQueryExtensionToolExtension
 */
export interface SqlQueryExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: SqlQueryExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: SqlQueryExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const SqlQueryExtensionToolExtensionCategoryEnum = {
    SqlQuery: 'sqlQuery',
} as const;
export type SqlQueryExtensionToolExtensionCategoryEnum = typeof SqlQueryExtensionToolExtensionCategoryEnum[keyof typeof SqlQueryExtensionToolExtensionCategoryEnum];

/**
 * SqlQueryResultExtensionContent 的公开协议结构。 / Public contract for sql query result extension content.
 * @export
 * @interface SqlQueryResultExtensionContent
 */
export interface SqlQueryResultExtensionContent {
    /**
     * 字段 resultId / result id field。
     */
    resultId: string;
    /**
     * 字段 rowCount / row count field。
     */
    rowCount: number;
    /**
     * 字段 totalRowCount / total row count field。
     */
    totalRowCount: number;
    /**
     * 字段 columnCount / column count field。
     */
    columnCount: number;
    /**
     * 字段 columns / columns field。
     */
    columns: Array<string>;
    /**
     * 字段 schema / schema field。
     */
    schema: Array<SqlResultColumnSchema>;
    /**
     * 字段 truncated / truncated field。
     */
    truncated: boolean;
    /**
     * 字段 limit / limit field。
     */
    limit: number;
}
/**
 * SqlQueryResultExtensionToolExtension 的公开协议结构。 / Public contract for sql query result extension tool extension.
 * @export
 * @interface SqlQueryResultExtensionToolExtension
 */
export interface SqlQueryResultExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: SqlQueryResultExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: SqlQueryResultExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const SqlQueryResultExtensionToolExtensionCategoryEnum = {
    SqlQueryResult: 'sqlQueryResult',
} as const;
export type SqlQueryResultExtensionToolExtensionCategoryEnum = typeof SqlQueryResultExtensionToolExtensionCategoryEnum[keyof typeof SqlQueryResultExtensionToolExtensionCategoryEnum];

/**
 * SqlQueryResultPage 的公开协议结构。 / Public contract for sql query result page.
 * @export
 * @interface SqlQueryResultPage
 */
export interface SqlQueryResultPage {
    /**
     * 字段 resultId / result id field。
     */
    resultId: string;
    /**
     * 字段 sql / sql field。
     */
    sql: string;
    /**
     * 字段 columns / columns field。
     */
    columns: Array<string>;
    /**
     * 字段 rowCount / row count field。
     */
    rowCount: number;
    /**
     * 字段 columnCount / column count field。
     */
    columnCount: number;
    /**
     * 字段 current / current field。
     */
    current: number;
    /**
     * 大小（字节）或分页容量 / byte size or page size。
     */
    size: number;
    /**
     * 字段 total / total field。
     */
    total: number;
    /**
     * 记录列表 / records。
     */
    records: Array<SqlQueryResultRow>;
}
/**
 * SqlQueryResultRow 的公开协议结构。 / Public contract for sql query result row.
 * @export
 * @interface SqlQueryResultRow
 */
export interface SqlQueryResultRow {
    /**
     * 字段 values / values field。
     */
    values: Array<string | null>;
}
/**
 * SqlResultColumnSchema 的公开协议结构。 / Public contract for sql result column schema.
 * @export
 * @interface SqlResultColumnSchema
 */
export interface SqlResultColumnSchema {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: string;
    /**
     * 字段 nullable / nullable field。
     */
    nullable: boolean;
    /**
     * 字段 precision / precision field。
     */
    precision?: number | null;
    /**
     * 字段 scale / scale field。
     */
    scale?: number | null;
}
/**
 * StringChartColumn 的公开协议结构。 / Public contract for string chart column.
 * @export
 * @interface StringChartColumn
 */
export interface StringChartColumn {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: StringChartColumnTypeEnum;
    /**
     * 字段 values / values field。
     */
    values: Array<string | null>;
}


/**
 * @export
 */
export const StringChartColumnTypeEnum = {
    String: 'STRING',
} as const;
export type StringChartColumnTypeEnum = typeof StringChartColumnTypeEnum[keyof typeof StringChartColumnTypeEnum];

/**
 * SystemChatMessage 的公开协议结构。 / Public contract for system chat message.
 * @export
 * @interface SystemChatMessage
 */
export interface SystemChatMessage {
    /**
     * 类型判别值 / type discriminator。
     */
    type: SystemChatMessageTypeEnum;
    /**
     * 字段 text / text field。
     */
    text: string;
    /**
     * 字段 metadataRawJson / metadata raw json field。
     */
    metadataRawJson?: string | null;
}


/**
 * @export
 */
export const SystemChatMessageTypeEnum = {
    System: 'SYSTEM',
} as const;
export type SystemChatMessageTypeEnum = typeof SystemChatMessageTypeEnum[keyof typeof SystemChatMessageTypeEnum];

/**
 * TaskProgressExtensionContent 的公开协议结构。 / Public contract for task progress extension content.
 * @export
 * @interface TaskProgressExtensionContent
 */
export interface TaskProgressExtensionContent {
    /**
     * 字段 action / action field。
     */
    action: string;
    /**
     * 字段 currentTaskId / current task id field。
     */
    currentTaskId?: string | null;
    /**
     * 字段 currentTaskStatus / current task status field。
     */
    currentTaskStatus?: string | null;
    /**
     * 字段 archived / archived field。
     */
    archived: boolean;
    /**
     * 字段 total / total field。
     */
    total: number;
    /**
     * 字段 pending / pending field。
     */
    pending: number;
    /**
     * 字段 inProgress / in progress field。
     */
    inProgress: number;
    /**
     * 字段 completed / completed field。
     */
    completed: number;
    /**
     * 字段 progressPercent / progress percent field。
     */
    progressPercent: number;
    /**
     * 字段 tasks / tasks field。
     */
    tasks: Array<TaskSummary>;
}
/**
 * TaskProgressExtensionToolExtension 的公开协议结构。 / Public contract for task progress extension tool extension.
 * @export
 * @interface TaskProgressExtensionToolExtension
 */
export interface TaskProgressExtensionToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: TaskProgressExtensionToolExtensionCategoryEnum;
    /**
     * 与类别对应的强类型内容 / strongly typed content for the category。
     */
    content: TaskProgressExtensionContent;
    /**
     * 是否使用独立视图渲染 / whether to use a dedicated view。
     */
    specialRender: boolean;
}


/**
 * @export
 */
export const TaskProgressExtensionToolExtensionCategoryEnum = {
    TaskProgress: 'taskProgress',
} as const;
export type TaskProgressExtensionToolExtensionCategoryEnum = typeof TaskProgressExtensionToolExtensionCategoryEnum[keyof typeof TaskProgressExtensionToolExtensionCategoryEnum];

/**
 * TaskSummary 的公开协议结构。 / Public contract for task summary.
 * @export
 * @interface TaskSummary
 */
export interface TaskSummary {
    /**
     * 字段 id / id field。
     */
    id: string;
    /**
     * 字段 subject / subject field。
     */
    subject: string;
    /**
     * 字段 activeForm / active form field。
     */
    activeForm?: string | null;
    /**
     * 当前状态 / current status。
     */
    status: string;
    /**
     * 字段 blocks / blocks field。
     */
    blocks: Array<string>;
    /**
     * 字段 blockedBy / blocked by field。
     */
    blockedBy: Array<string>;
}
/**
 * ToolCall 的公开协议结构。 / Public contract for tool call.
 * @export
 * @interface ToolCall
 */
export interface ToolCall {
    /**
     * 字段 id / id field。
     */
    id: string;
    /**
     * 类型判别值 / type discriminator。
     */
    type: string;
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 字段 arguments / arguments field。
     */
    arguments: string;
}
/**
 * @type ToolExtension
 * ToolExtension 的公开协议结构。 / Public contract for tool extension.
 * @export
 */
export type ToolExtension = { category: 'askUserQuestion' } & AskUserQuestionExtensionToolExtension | { category: 'imageGeneration' } & ImageGenerationExtensionToolExtension | { category: 'jsRunScript' } & JsRunScriptExtensionToolExtension | { category: 'jsRunScriptResult' } & JsRunScriptResultExtensionToolExtension | { category: 'mathFormula' } & MathFormulaExtensionToolExtension | { category: 'mathResult' } & MathResultExtensionToolExtension | { category: 'planApproval' } & PlanApprovalExtensionToolExtension | { category: 'skillResource' } & SkillResourceExtensionToolExtension | { category: 'sqlChartResult' } & SqlChartResultExtensionToolExtension | { category: 'sqlQuery' } & SqlQueryExtensionToolExtension | { category: 'sqlQueryResult' } & SqlQueryResultExtensionToolExtension | { category: 'taskProgress' } & TaskProgressExtensionToolExtension;
/**
 * ToolResponse 的公开协议结构。 / Public contract for tool response.
 * @export
 * @interface ToolResponse
 */
export interface ToolResponse {
    /**
     * 字段 id / id field。
     */
    id: string;
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 当前状态 / current status。
     */
    status: string;
    /**
     * 字段 responseData / response data field。
     */
    responseData: string;
    /**
     * 字段 metadataRawJson / metadata raw json field。
     */
    metadataRawJson: string;
}
/**
 * ToolResponseChatMessage 的公开协议结构。 / Public contract for tool response chat message.
 * @export
 * @interface ToolResponseChatMessage
 */
export interface ToolResponseChatMessage {
    /**
     * 类型判别值 / type discriminator。
     */
    type: ToolResponseChatMessageTypeEnum;
    /**
     * 字段 responses / responses field。
     */
    responses: Array<ToolResponse>;
    /**
     * 字段 metadataRawJson / metadata raw json field。
     */
    metadataRawJson?: string | null;
}


/**
 * @export
 */
export const ToolResponseChatMessageTypeEnum = {
    Tool: 'TOOL',
} as const;
export type ToolResponseChatMessageTypeEnum = typeof ToolResponseChatMessageTypeEnum[keyof typeof ToolResponseChatMessageTypeEnum];

/**
 * UnknownAiChatBriefEvent 的公开协议结构。 / Public contract for unknown ai chat brief event.
 * @export
 * @interface UnknownAiChatBriefEvent
 */
export interface UnknownAiChatBriefEvent {
    /**
     * 类型判别值 / type discriminator。
     */
    type: string;
    /**
     * 未识别对象的原始 JSON / raw JSON for an unrecognized object。
     */
    rawJson: string;
}
/**
 * UnknownToolExtension 的公开协议结构。 / Public contract for unknown tool extension.
 * @export
 * @interface UnknownToolExtension
 */
export interface UnknownToolExtension {
    /**
     * 扩展类别判别值 / extension category discriminator。
     */
    category: string;
    /**
     * 未识别对象的原始 JSON / raw JSON for an unrecognized object。
     */
    rawJson: string;
}
/**
 * Usage 的公开协议结构。 / Public contract for usage.
 * @export
 * @interface Usage
 */
export interface Usage {
    /**
     * 输入 Token 数 / input token count。
     */
    inputTokens: number;
    /**
     * 输出 Token 数 / output token count。
     */
    outputTokens: number;
    /**
     * 总 Token 数 / total token count。
     */
    readonly totalTokens: number;
    /**
     * 字段 inputTokenBreakdown / input token breakdown field。
     */
    inputTokenBreakdown?: InputTokenBreakdown | null;
    /**
     * 字段 reasoningTokens / reasoning tokens field。
     */
    reasoningTokens?: number | null;
    /**
     * 字段 cacheHitRate / cache hit rate field。
     */
    readonly cacheHitRate?: number | null;
    /**
     * 字段 inputBreakdownCoverageRate / input breakdown coverage rate field。
     */
    readonly inputBreakdownCoverageRate?: number | null;
}
/**
 * UserChatMessage 的公开协议结构。 / Public contract for user chat message.
 * @export
 * @interface UserChatMessage
 */
export interface UserChatMessage {
    /**
     * 类型判别值 / type discriminator。
     */
    type: UserChatMessageTypeEnum;
    /**
     * 字段 text / text field。
     */
    text: string;
    /**
     * 字段 multimodalAttachments / multimodal attachments field。
     */
    multimodalAttachments?: Array<MultimodalMediaAttachment> | null;
    /**
     * 字段 attachments / attachments field。
     */
    attachments?: Array<MediaAttachment> | null;
    /**
     * 字段 metadataRawJson / metadata raw json field。
     */
    metadataRawJson?: string | null;
}


/**
 * @export
 */
export const UserChatMessageTypeEnum = {
    User: 'USER',
} as const;
export type UserChatMessageTypeEnum = typeof UserChatMessageTypeEnum[keyof typeof UserChatMessageTypeEnum];

/**
 * UserInputAnswerInput 的公开协议结构。 / Public contract for user input answer input.
 * @export
 * @interface UserInputAnswerInput
 */
export interface UserInputAnswerInput {
    /**
     * 会话 ID / conversation ID。
     */
    conversationId: string;
    /**
     * 消息 ID / message ID。
     */
    messageId: string;
    /**
     * 字段 questionId / question id field。
     */
    questionId: string;
    /**
     * 字段 selectedOptions / selected options field。
     */
    selectedOptions: Array<string>;
    /**
     * 字段 customInput / custom input field。
     */
    customInput?: string | null;
}
/**
 * UserInputStatus 的公开协议结构。 / Public contract for user input status.
 * @export
 * @interface UserInputStatus
 */
export interface UserInputStatus {
    /**
     * 字段 pending / pending field。
     */
    pending: boolean;
    /**
     * 字段 question / question field。
     */
    question?: string | null;
    /**
     * 字段 questionDetails / question details field。
     */
    questionDetails?: string | null;
    /**
     * 字段 options / options field。
     */
    options?: Array<string> | null;
    /**
     * 字段 multiple / multiple field。
     */
    multiple?: boolean | null;
}
/**
 * ValidationError 的公开协议结构。 / Public contract for validation error.
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 字段 code / code field。
     */
    code: string;
    /**
     * 消息正文 / message text。
     */
    message: string;
    /**
     * 字段 fields / fields field。
     */
    fields: Array<FieldError>;
}
/**
 * VariableBinding 的公开协议结构。 / Public contract for variable binding.
 * @export
 * @interface VariableBinding
 */
export interface VariableBinding {
    /**
     * 字段 name / name field。
     */
    name: string;
    /**
     * 字段 value / value field。
     */
    value: string;
}
/**
 * WorkspaceArtifactList 的公开协议结构。 / Public contract for workspace artifact list.
 * @export
 * @interface WorkspaceArtifactList
 */
export interface WorkspaceArtifactList {
    /**
     * 字段 fileArtifacts / file artifacts field。
     */
    fileArtifacts: WorkspaceFilePage;
    /**
     * 字段 nonFileArtifacts / non file artifacts field。
     */
    nonFileArtifacts: Array<WorkspaceNonFileArtifact>;
}
/**
 * WorkspaceFile 的公开协议结构。 / Public contract for workspace file.
 * @export
 * @interface WorkspaceFile
 */
export interface WorkspaceFile {
    /**
     * 字段 relativePath / relative path field。
     */
    relativePath: string;
    /**
     * 大小（字节）或分页容量 / byte size or page size。
     */
    size: number;
    /**
     * 文件名 / file name。
     */
    fileName: string;
    /**
     * MIME 类型 / MIME type。
     */
    mimeType: string;
    /**
     * 最后更新时间 / last update time。
     */
    lastUpdateTime: string;
}
/**
 * WorkspaceFilePage 的公开协议结构。 / Public contract for workspace file page.
 * @export
 * @interface WorkspaceFilePage
 */
export interface WorkspaceFilePage {
    /**
     * 记录列表 / records。
     */
    records: Array<WorkspaceFile>;
    /**
     * 分页信息 / page metadata。
     */
    page: PageInfo;
}
/**
 * WorkspaceNonFileArtifact 的公开协议结构。 / Public contract for workspace non file artifact.
 * @export
 * @interface WorkspaceNonFileArtifact
 */
export interface WorkspaceNonFileArtifact {
    /**
     * 字段 artifactId / artifact id field。
     */
    artifactId: string;
    /**
     * 字段 kind / kind field。
     */
    kind: string;
    /**
     * 标题 / title。
     */
    title: string;
    /**
     * 可读说明 / human-readable description。
     */
    description?: string | null;
    /**
     * 最后更新时间 / last update time。
     */
    lastUpdateTime: string;
    /**
     * 字段 previewUrl / preview url field。
     */
    previewUrl?: string | null;
}
