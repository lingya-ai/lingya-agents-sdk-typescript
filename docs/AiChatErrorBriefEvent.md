
# AiChatErrorBriefEvent

AiChatErrorBriefEvent 的公开协议结构。 / Public contract for ai chat error brief event.

## Properties

Name | Type
------------ | -------------
`type` | string
`message` | string
`terminalReason` | string

## Example

```typescript
import type { AiChatErrorBriefEvent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "message": null,
  "terminalReason": null,
} satisfies AiChatErrorBriefEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiChatErrorBriefEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


