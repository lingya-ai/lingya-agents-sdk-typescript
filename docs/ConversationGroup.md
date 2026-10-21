
# ConversationGroup

ConversationGroup 的公开协议结构。 / Public contract for conversation group.

## Properties

Name | Type
------------ | -------------
`id` | number
`name` | string
`createdTime` | Date
`lastUpdateTime` | Date

## Example

```typescript
import type { ConversationGroup } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "createdTime": null,
  "lastUpdateTime": null,
} satisfies ConversationGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConversationGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


