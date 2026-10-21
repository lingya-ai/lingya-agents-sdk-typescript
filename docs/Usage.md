
# Usage

Usage 的公开协议结构。 / Public contract for usage.

## Properties

Name | Type
------------ | -------------
`inputTokens` | number
`outputTokens` | number
`totalTokens` | number
`inputTokenBreakdown` | [InputTokenBreakdown](InputTokenBreakdown.md)
`reasoningTokens` | number
`cacheHitRate` | number
`inputBreakdownCoverageRate` | number

## Example

```typescript
import type { Usage } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "inputTokens": null,
  "outputTokens": null,
  "totalTokens": null,
  "inputTokenBreakdown": null,
  "reasoningTokens": null,
  "cacheHitRate": null,
  "inputBreakdownCoverageRate": null,
} satisfies Usage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Usage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


