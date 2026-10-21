
# SqlResultColumnSchema

SqlResultColumnSchema 的公开协议结构。 / Public contract for sql result column schema.

## Properties

Name | Type
------------ | -------------
`name` | string
`type` | string
`nullable` | boolean
`precision` | number
`scale` | number

## Example

```typescript
import type { SqlResultColumnSchema } from '@lingya-ai/agents-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "type": null,
  "nullable": null,
  "precision": null,
  "scale": null,
} satisfies SqlResultColumnSchema

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SqlResultColumnSchema
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


