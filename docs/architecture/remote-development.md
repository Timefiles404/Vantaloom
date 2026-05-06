# 远程开发架构

Vantaloom 后续可以扩展为远程开发系统，但远程能力不应通过复制桌面端实现，而应通过稳定协议连接同一套核心能力。

## 推荐形态

```text
apps/server
  HTTP API
  WebSocket Event Stream
  Agent Worker
  Workspace Manager

apps/web
  React Web Client

apps/mobile
  Android / iOS Client

packages/agent-core
  Plan
  Task Graph
  Tool Execution
  Recovery
  CI Feedback

packages/protocol
  Project State
  Run Event
  Tool Call
  Task Status
  Release Manifest
```

## 连接方式

- HTTP API 用于项目列表、配置、登录、权限和普通命令
- WebSocket 用于 agent 运行事件、日志流、任务状态和 CI 状态
- SSE 可用于只需要服务端单向推送的轻量场景

## 主要难点

- 用户鉴权
- 多租户隔离
- Workspace 沙箱
- Agent 命令执行权限
- GitHub token 和 GitHub App 凭据管理
- 长任务恢复
- 日志和事件存储
- 计费、额度和审计
- 防止自然语言触发危险操作

远程开发的 UI 迁移难度不高，真正的难点在执行安全、租户隔离和长期任务可靠性。
