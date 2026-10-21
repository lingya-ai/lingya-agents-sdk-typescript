
# SqlQueryResultPage

SqlQueryResultPage 的公开协议结构。 / Public contract for sql query result page.

## Properties

Name | Type
------------ | -------------
`resultId` | string
`sql` | string
`columns` | Array&lt;string&gt;
`rowCount` | number
`columnCount` | number
`current` | number
`size` | number
`total` | number
`records` | [Array&lt;SqlQueryResultRow&gt;](SqlQueryResultRow.md)

## Example

```typescript
import type { SqlQueryResultPage } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "resultId": null,
  "sql": null,
  "columns": null,
  "rowCount": null,
  "columnCount": null,
  "current": null,
  "size": null,
  "total": null,
  "records": null,
} satisfies SqlQueryResultPage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SqlQueryResultPage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


