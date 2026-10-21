
# ChatModelConfig

ChatModelConfig 的公开协议结构。 / Public contract for chat model config.

## Properties

Name | Type
------------ | -------------
`maker` | string
`modelName` | string
`modelLabel` | string
`modelDescription` | string
`maxContextTokens` | number
`maxOutputTokens` | number
`supportImage` | boolean
`supportVideo` | boolean
`thinkingMode` | boolean

## Example

```typescript
import type { ChatModelConfig } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "maker": null,
  "modelName": null,
  "modelLabel": null,
  "modelDescription": null,
  "maxContextTokens": null,
  "maxOutputTokens": null,
  "supportImage": null,
  "supportVideo": null,
  "thinkingMode": null,
} satisfies ChatModelConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatModelConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


