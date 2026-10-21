
# InputTokenBreakdown

InputTokenBreakdown 的公开协议结构。 / Public contract for input token breakdown.

## Properties

Name | Type
------------ | -------------
`observedInputTokens` | number
`uncachedInputTokens` | number
`cachedInputTokens` | number
`cacheCreationInputTokens` | number

## Example

```typescript
import type { InputTokenBreakdown } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "observedInputTokens": null,
  "uncachedInputTokens": null,
  "cachedInputTokens": null,
  "cacheCreationInputTokens": null,
} satisfies InputTokenBreakdown

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InputTokenBreakdown
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


