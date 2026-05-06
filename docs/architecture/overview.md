# 架构概览

Vantaloom 的基础形态是本地桌面编排器，而不是纯聊天应用。

长期架构应保持为 `Vantaloom Core + 多种外壳`。桌面端是第一个产品入口，但不是唯一形态；后续可以在同一核心之上扩展服务端、网页端和移动端。

核心边界分为四层：

- 桌面应用：承载交互、窗口、长文本视图和本地状态入口
- Agent Runtime：负责任务规划、执行编排、恢复点和结果解释
- Workspace Layer：负责 Git 仓库、文件系统、提交和分支
- Remote Verification：以 GitHub Actions 作为权威验证和发行环境

## 设计取向

- 本地应用负责响应速度和项目上下文
- GitHub CI 负责可重复验证
- GitHub Releases 负责发行产物
- 自更新机制只信任签名清单和可校验产物
- Agent 核心能力不绑定单一 UI 外壳
- 远程开发能力优先通过稳定协议暴露
- 桌面、网页和移动端应共享协议，而不是复制业务逻辑

## 初始模块

```text
apps/desktop
packages/agent-core
packages/protocol
docs
tools
```

## 未来扩展形态

```text
apps/desktop   本地桌面入口
apps/server    远程 agent 服务入口
apps/web       浏览器入口
apps/mobile    移动端入口
```

推荐连接方式：

```text
Desktop UI -> Local Core -> Local Workspace -> GitHub CI
Web UI -> Server API -> Agent Core -> Remote Workspace -> GitHub CI
Mobile UI -> Server API -> Agent Core -> Remote Workspace -> GitHub CI
```
