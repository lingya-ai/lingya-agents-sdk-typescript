
# ConversationContextUsage

ConversationContextUsage 的公开协议结构。 / Public contract for conversation context usage.

## Properties

Name | Type
------------ | -------------
`systemPromptTokens` | number
`sessionMessageTokens` | number
`maxContextTokens` | number
`toolDefinitionTokens` | number
`protocolReserveTokens` | number
`activeContextTokens` | number
`requestedOutputTokens` | number
`messageAssemblyReserveTokens` | number
`requiredContextTokens` | number
`activeUsageRatio` | number
`requiredUsageRatio` | number
`calculationSource` | string

## Example

```typescript
import type { ConversationContextUsage } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "systemPromptTokens": null,
  "sessionMessageTokens": null,
  "maxContextTokens": null,
  "toolDefinitionTokens": null,
  "protocolReserveTokens": null,
  "activeContextTokens": null,
  "requestedOutputTokens": null,
  "messageAssemblyReserveTokens": null,
  "requiredContextTokens": null,
  "activeUsageRatio": null,
  "requiredUsageRatio": null,
  "calculationSource": null,
} satisfies ConversationContextUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationContextUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


