# TypeScript SDK 发布指南

## 契约同步

先确认 `lingya-agents-openapi` 已发布所需的 `vX.Y.Z`，再同步 `openapi/lingya-agents-v1.yaml`、`openapi/endpoints.json` 和 `CONTRACT_VERSION`。将 `.github/workflows/ci.yml` 与 `release.yml` 中的契约引用更新到同一 tag。API 和模型是生成文件；根据契约重新生成，勿手改生成结果。

## 版本与检查

使用 `npm version X.Y.Z --no-git-tag-version` 更新包版本和 lockfile；同步 `openapi-generator/config.yaml` 的 `npmVersion`、README 安装示例及 CHANGELOG。运行 `npm ci && npm run check`。该检查包含 bound API 生成、构建、类型检查、单元测试、模型审计和打包冒烟检查。

## 发布

提交并推送到 `main`，确认 CI 通过后创建并推送 `vX.Y.Z` tag。tag 会触发 GitHub Actions，用 npm trusted publishing 发布到 npm，并创建 GitHub Release；若 `release` 环境要求审批，批准该发布。最后用 `npm view @lingya-ai/agents-sdk@X.Y.Z version` 确认可安装。
