
# ModelConfig

ModelConfig 的公开协议结构。 / Public contract for model config.

## Properties

Name | Type
------------ | -------------
`defaultModel` | [DefaultModel](DefaultModel.md)
`modelKeyGroups` | [Array&lt;ModelKeyGroup&gt;](ModelKeyGroup.md)

## Example

```typescript
import type { ModelConfig } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "defaultModel": null,
  "modelKeyGroups": null,
} satisfies ModelConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


