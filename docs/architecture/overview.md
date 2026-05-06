# 架构概览

Vantaloom 的基础形态是本地桌面编排器，而不是纯聊天应用。

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

## 初始模块

```text
apps/desktop
packages/agent-core
packages/protocol
docs
tools
```
