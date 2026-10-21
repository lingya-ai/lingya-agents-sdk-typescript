# Contributing

Run `npm ci`, `npm run check`, and `npm pack --dry-run` before opening a pull request. Generated API and model files must remain aligned with `lingya-ai/lingya-agents-openapi` and must not be edited to redefine the public protocol.

## Canonical SDK generation

Edit runtime sources, facade generators, templates, and generation inputs in `lingya-agents-openapi/sdk/typescript/`; edit the public contract in `lingya-agents-openapi/openapi/lingya-agents-v1.yaml`. Run `npm ci && npm run generate:sdks` from that repository (`sync:sdks` is an alias), then run this SDK's checks. Commit the generated output and `SDK_GENERATION.json` together. Do not edit managed runtime files directly or use standalone generators as the complete regeneration workflow. Ordinary builds use committed sources.

See [request lifecycle and generation](docs/request-lifecycle.md) for cancellation, fresh-token callbacks, streaming, and generation checks. Live-service tests require environment credentials.
