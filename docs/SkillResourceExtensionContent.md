
# SkillResourceExtensionContent

SkillResourceExtensionContent 的公开协议结构。 / Public contract for skill resource extension content.

## Properties

Name | Type
------------ | -------------
`operationType` | string
`filepath` | string

## Example

```typescript
import type { SkillResourceExtensionContent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "operationType": null,
  "filepath": null,
} satisfies SkillResourceExtensionContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SkillResourceExtensionContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


