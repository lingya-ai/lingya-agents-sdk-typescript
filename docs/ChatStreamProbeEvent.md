
# ChatStreamProbeEvent

ChatStreamProbeEvent 的公开协议结构。 / Public contract for chat stream probe event.

## Properties

Name | Type
------------ | -------------
`probeId` | string
`sequence` | number
`serverElapsedMs` | number

## Example

```typescript
import type { ChatStreamProbeEvent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "probeId": null,
  "sequence": null,
  "serverElapsedMs": null,
} satisfies ChatStreamProbeEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChatStreamProbeEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


