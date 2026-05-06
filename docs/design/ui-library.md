# UI 库框架

Vantaloom UI 库先放在 `packages/ui`，它不是页面集合，而是后续桌面端、网页端和移动端视觉系统的源头。

## 目标

- 支持黑白主题切换
- 支持纯色和毛玻璃两种主要材质
- 保持简洁、克制、工程工具感
- 为长文本、日志、diff、计划面板和 agent trace 留出稳定空间
- 兼容 shadcn/ui 的开放代码式组件组织方式
- 动效只增强理解和反馈，不抢占工程内容

## 包结构

```text
packages/ui/
  src/
    styles/        全局 token 与材质 CSS
    tokens/        设计 token 的 TypeScript 描述
    utils/         组件工具函数
```

## 主题策略

主题使用 CSS variables，而不是把颜色写死在组件里。

基础模式：

- `light`
- `dark`

材质模式：

- `solid`
- `glass`

后续组件应优先消费语义 token：

- `--vl-background`
- `--vl-foreground`
- `--vl-surface`
- `--vl-muted`
- `--vl-border`
- `--vl-ring`
- `--vl-primary`
- `--vl-glass-background`
- `--vl-glass-border`
- `--vl-glass-shadow`

## 组件策略

Vantaloom 可以借鉴 shadcn/ui 的思路：组件代码归项目所有，而不是依赖一个难以改造的黑盒组件库。

后续组件建议分层：

```text
primitives/     Button、Input、Dialog、Tooltip、Tabs
surfaces/       Panel、GlassCard、Sidebar、Toolbar
feedback/       Toast、Progress、Spinner、StatusPill
editor/         CodeView、DiffView、LogView、MarkdownView
agent/          TaskGraph、RunTimeline、ToolCallCard、CiStatus
motion/         微交互与转场封装
```

## 动效准则

- 默认克制，不做持续抢眼动画
- 支持 `prefers-reduced-motion`
- 长文本区域不使用影响阅读的动画
- 状态变化优先使用短时过渡
- 高成本动效必须可关闭
- 背景动效只能用于空状态、欢迎页或品牌区域

## 图标策略

图标优先使用 `lucide-react`。如果需要更完整的图标系统，可评估 Nucleo 的 UI、Core、Sharp、Micro Bold 等图标集，但需单独确认授权和导出流程。
