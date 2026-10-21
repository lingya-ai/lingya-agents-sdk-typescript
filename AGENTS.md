# TypeScript SDK 发布指南

## 契约同步

契约、运行时和生成输入的唯一源是 `lingya-agents-openapi`。先在契约仓库修改 `openapi/`、`sdk/typescript/` 中对应的源文件、模板或配置，再运行 `npm ci && npm run generate:sdks`；`npm run sync:sdks` 是兼容入口。该流程统一生成契约快照、传输清单、模型/API、运行时和业务门面，并更新 `SDK_GENERATION.json`，无需在 SDK 仓库单独执行旧生成命令。

生成管理的文件不要直接修改。普通构建使用已提交源码，不触发重新生成。生成检查使用固定契约 tag，验证全部受管理文件及连续生成的一致性；升级时同步生成工作流中的契约引用。详见 `docs/request-lifecycle.md`。

## 版本与检查

在契约仓库 `sdk/typescript/` 更新 `package.json`、lockfile 和 `openapi-generator/config.yaml` 的 `npmVersion`，统一重新生成；同步 SDK README 安装示例及 CHANGELOG。运行 `npm ci && npm run check`。该检查使用已提交源码执行构建、类型检查、单元测试、模型审计、打包和浏览器冒烟检查。Chromium 102 独立验收工具不自动下载浏览器，缺少目标浏览器时失败。

## 发布

提交并推送到 `main`，确认 CI 通过后创建并推送 `vX.Y.Z` tag。tag 会触发 GitHub Actions，用 npm trusted publishing 发布到 npm，并创建 GitHub Release；若 `release` 环境要求审批，批准该发布。最后用 `npm view @lingya-ai/agents-sdk@X.Y.Z version` 确认可安装。
