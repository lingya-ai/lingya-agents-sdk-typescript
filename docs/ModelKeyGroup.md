
# ModelKeyGroup

ModelKeyGroup 的公开协议结构。 / Public contract for model key group.

## Properties

Name | Type
------------ | -------------
`keyGroupId` | number
`keyGroupName` | string
`models` | [Array&lt;ChatModelConfig&gt;](ChatModelConfig.md)

## Example

```typescript
import type { ModelKeyGroup } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "keyGroupId": null,
  "keyGroupName": null,
  "models": null,
} satisfies ModelKeyGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelKeyGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


