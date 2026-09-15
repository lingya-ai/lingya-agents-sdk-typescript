# Changelog

## 0.3.0

- Bind `channelId` once when constructing `LingyaAgentsClient`.
- Add typed, grouped facades for all 46 operations and move generated clients under `lowLevel`.
- Keep raw request helpers as deprecated compatibility APIs until 1.0.

## 0.1.2

- Generate all 46 public operations from the Lingya Agents OpenAPI 0.1.2 contract.
- Add server-side HMAC signing, SSE decoding, strong discriminated unions, and unknown-value raw JSON fallbacks.
