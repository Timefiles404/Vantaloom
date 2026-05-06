# 0001 选择 Wails v2、Go、React 和 Vite

## 状态

已接受

## 背景

Vantaloom 需要桌面能力、较低内存占用、较快迭代速度、稳定后端和成熟前端生态。

## 决策

初始桌面技术栈采用 Wails v2、Go、React、TypeScript 和 Vite。

## 影响

- 后端获得 Go 的稳定性和单二进制分发体验
- 前端获得 React 与 Vite 的快速开发体验
- 桌面壳避免 Electron 自带 Chromium 的额外体积
- 自更新能力需要项目侧补齐签名清单和替换流程
