
# SqlQueryResultRow

SqlQueryResultRow 的公开协议结构。 / Public contract for sql query result row.

## Properties

Name | Type
------------ | -------------
`values` | Array&lt;string | null&gt;

## Example

```typescript
import type { SqlQueryResultRow } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "values": null,
} satisfies SqlQueryResultRow

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SqlQueryResultRow
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


