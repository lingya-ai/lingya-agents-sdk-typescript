
# AgentsConfig

AgentsConfig 的公开协议结构。 / Public contract for agents config.

## Properties

Name | Type
------------ | -------------
`modelConfig` | [ModelConfig](ModelConfig.md)
`supportAttachmentExt` | [Array&lt;AttachmentExtension&gt;](AttachmentExtension.md)
`maxAttachmentCount` | number
`goal` | [AgentGoalConfig](AgentGoalConfig.md)

## Example

```typescript
import type { AgentsConfig } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "modelConfig": null,
  "supportAttachmentExt": null,
  "maxAttachmentCount": null,
  "goal": null,
} satisfies AgentsConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentsConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


