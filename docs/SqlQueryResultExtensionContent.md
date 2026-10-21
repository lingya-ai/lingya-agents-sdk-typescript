
# SqlQueryResultExtensionContent

SqlQueryResultExtensionContent 的公开协议结构。 / Public contract for sql query result extension content.

## Properties

Name | Type
------------ | -------------
`resultId` | string
`rowCount` | number
`totalRowCount` | number
`columnCount` | number
`columns` | Array&lt;string&gt;
`schema` | [Array&lt;SqlResultColumnSchema&gt;](SqlResultColumnSchema.md)
`truncated` | boolean
`limit` | number

## Example

```typescript
import type { SqlQueryResultExtensionContent } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "resultId": null,
  "rowCount": null,
  "totalRowCount": null,
  "columnCount": null,
  "columns": null,
  "schema": null,
  "truncated": null,
  "limit": null,
} satisfies SqlQueryResultExtensionContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SqlQueryResultExtensionContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


