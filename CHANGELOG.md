# Changelog

## 0.7.1 - 2026-10-23

- Add `sizeBytes` to `GeneratePreSignedUrlInput` and its JSON serializers. The backend requires the declared attachment size when storage accounting is enforced; omitting it returns `400 file.size-required`.
- Add `uploadMethod`, `formFields`, and `maximumBytes` to `GeneratePreSignedUrlOutput` so clients can follow the issued `PUT` or `POST_FORM` upload protocol.
- Keep the contract version at 0.1.7; this is an additive schema correction for the presign endpoints.

## 0.7.0 - 2026-10-20

- Add injected Fetch/WebSocket factories, cancellation and full-response deadlines, unified ApiError classifications, owned SSE/WebSocket subscriptions, diagnostics and download metadata.
- Keep browser bundles free of Node HMAC dependencies; add isolated Chromium 102 verification tooling and current-browser integration tests.
- Add identity-bound HMAC/token construction and independent fresh-token callbacks per request; reject token presign, redact provider errors, and disable token retries/redirects.
- Add a browser-only TypeScript entry, browser conditional exports, and bundled HTTP/SSE smoke checks.
- Align with contract v0.1.7: add token issuance, goals, groups, conversation summary, message sync and message plan status.
- Correct chat modes, pagination, title metadata responses and dynamic message metadata; remove unavailable sharing and internal model events.

## 0.5.0 - 2026-09-27

- Sync contract v0.1.5 and expose asynchronous-task sync plus subagent list, sync, detail, result, and cancellation methods.
- Regenerate public API clients and models against the current contract schemas.

## 0.4.0

- Rename the primary API to `AgentsClient`, `AgentsUserClient`, `ApiError`, and unprefixed group facades.
- Keep the 0.3.x `Lingya*` names as compatibility aliases.
- Rewrite the README as a usage-only bilingual guide.

## 0.3.0

- Bind `channelId` once when constructing `LingyaAgentsClient`.
- Add typed, grouped facades for all 46 operations and move generated clients under `lowLevel`.
- Keep raw request helpers as deprecated compatibility APIs until 1.0.

## 0.1.2

- Generate all 46 public operations from the Lingya Agents OpenAPI 0.1.2 contract.
- Add server-side HMAC signing, SSE decoding, strong discriminated unions, and unknown-value raw JSON fallbacks.
