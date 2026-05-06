# UI 素材整理

本文件用于记录 Vantaloom UI 库的外部选材来源、可借鉴方向和注意事项。

## Nucleo

来源：https://nucleoapp.com/app

本地素材：

- `assets/icons/nucleo-glass`
- 当前拉取的是公开 npm 包 `nucleo-glass-icons@0.1.11`
- 包内许可证为 MIT
- React 组件清单见 `assets/icons/nucleo-glass/manifest.json`

可借鉴内容：

- 图标集按 UI、Core、Sharp、Pixel、Micro Bold 等体系组织
- 分类覆盖 Accessibility、Arrows、Charts、Communication、Design/Development、Files、Filtering/Sorting、Security、Technology/Devices、UI/Layout、Users 等工程工具常用区域
- 支持 Outline、Fill、Colored 等样式
- 支持 12px、18px、20px、24px、30px、32px、48px 等尺寸
- 支持 stroke、cap/join、rotate、flip、background、currentColor 等导出调整
- 支持 SVG、TSX、React、PNG 等导出形式

Vantaloom 取向：

- 默认仍使用 `lucide-react`
- 如果引入 Nucleo，优先评估 UI、Core、Sharp、Micro Bold
- 工程类界面优先使用 outline/currentColor
- 图标尺寸优先收敛到 16px、18px、20px、24px
- 不把图标资产直接混进业务代码，应走 `packages/ui` 或独立 assets 目录

注意事项：

- Nucleo 授权需要单独确认
- 商业发行前必须记录图标来源和许可证

## Uiverse 黑色毛玻璃卡片

来源：https://uiverse.io/codebykay101/ugly-lion-23

页面信息：

- 作者：codebykay101
- 类型：Card
- 日期：2023-11-08
- 颜色线索：`#212121`
- 技术：HTML、CSS
- 授权：MIT License

可借鉴内容：

- 黑色卡片底色
- 半透明边框
- 毛玻璃层次
- 简洁但有触感的 surface 处理
- 更适合作为 panel、modal、agent card、status card 的材质参考

Vantaloom 取向：

- 不直接复制为页面
- 抽象为 `solid` 和 `glass` 两种材质 token
- 黑色主题中玻璃背景不要过亮，避免长文本阅读疲劳
- 白色主题中玻璃层应更接近轻雾感，而不是高亮塑料感

## React Bits

来源：https://www.reactbits.dev/

本地素材：

- `assets/motion/reactbits`
- 已拉取 registry JSON 快照
- 已保留上游 README 和 MIT 许可证
- 未复制大体积视频、gif 和完整站点资源

可借鉴内容：

- 动效组件、文字动效、交互组件和背景动效
- 适合为欢迎区、空状态、状态切换、任务完成反馈提供动效参考
- 资料显示其组件通常以复制代码、可定制 props、多框架变体的方式使用

Vantaloom 取向：

- 只收集动效模式，不把动效作为主视觉
- 优先选择短、轻、可关闭的微交互
- 文字多的区域不使用持续动画
- agent 运行状态可以使用轻量 pulse、progress、timeline transition
- 背景动效只用于少量品牌区域或空状态

候选动效类别：

- text reveal
- blur text
- count up
- dock hover
- magnetic interaction
- subtle background grid
- noise texture
- task timeline transition
- command palette entrance

注意事项：

- 引入具体组件前要确认源码许可证、依赖和性能
- 需要统一 `prefers-reduced-motion`

## shadcn/ui

来源：https://ui.shadcn.com/docs

本地素材：

- `assets/ux/shadcn`
- 已拉取 New York 风格候选组件 registry JSON
- 组件和依赖清单见 `assets/ux/shadcn/manifest.json`

可借鉴内容：

- 它不是传统黑盒组件库，而是用于构建自己组件库的开放代码体系
- 组件强调 Open Code、Composition、Distribution、Beautiful Defaults、AI-Ready
- 推荐 CSS variables 和语义 token
- 支持 `background`、`foreground`、`card`、`popover`、`primary`、`secondary`、`muted`、`accent`、`border`、`input`、`ring`、`sidebar` 等 token
- 暗色模式通过 `.dark` 覆盖同一套 token
- 组件覆盖 Button、Card、Dialog、Dropdown Menu、Input、Popover、Resizable、Scroll Area、Sidebar、Tabs、Textarea、Tooltip、Typography 等

Vantaloom 取向：

- 采用 shadcn/ui 的开放代码和组合式原则
- token 命名保持语义化，不直接暴露具体颜色
- 组件放进 `packages/ui`，由应用按需组合
- 后续如果引入 Tailwind，应优先使用 CSS variables 映射语义 token

优先组件池：

- Button
- Input
- Textarea
- Tooltip
- Dialog
- Popover
- Tabs
- Scroll Area
- Resizable
- Sidebar
- Card
- Badge
- Progress
- Skeleton
- Command
- Data Table
