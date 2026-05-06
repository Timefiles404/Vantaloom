# GitHub CI 与发行

Vantaloom 的正式发行应始终由 GitHub Actions 完成。

## CI

当前 CI 执行：

- 安装 Go 和 Node
- 安装前端依赖
- 前端 lint
- 前端 build
- Go test

## Release

Release workflow 预留：

- Windows 构建
- macOS 构建
- Linux 构建
- GitHub Release 发布
- 自更新清单上传

后续需要补充代码签名、公证、产物摘要、清单签名和发布审批。
