# 智能家居全景展示 · Smart Home Showcase

一个面向家庭用户的智能家居演示页面集，包含三个递进版本：从静态图鉴、可控演示，到全交互式户型跳转展示。所有页面均为单目录 HTML + 本地资源，**无任何外部依赖**，打开 HTML 即可在浏览器/手机直接运行。

> 这个仓库默认指向第三版（`smart-home-showcase.html`），是给家人/朋友展示时观感最好的版本。前两版作为历史版本一并保留。

## 在线访问

启用 GitHub Pages 后，访问：

```
https://<你的用户名>.github.io/smart-home-showcase/smart-home-showcase.html
```

Pages 启用步骤见下方「部署到 GitHub Pages」一节。

## 三个版本一览

| 版本 | 入口 | 适合场景 | 主要特性 |
| --- | --- | --- | --- |
| **V1 · 设备图鉴** | `smart-home-devices/smart-home-devices.html` | 给长辈/小孩看「家里有哪些智能设备」 | 4 个功能分区、24 台设备卡片、AI 生成的房间插画 |
| **V2 · 演示控制台** | `smart-home-demo/smart-home-demo.html` | 演示「按下开关会发生什么」 | 8 个真实可点击的设备、4 个场景模式（回家/睡眠/观影/离家） |
| **V3 · 全景交互展示** | `smart-home-showcase/smart-home-showcase.html` | 完整介绍智能家居的能力 | 户型图 + 4 个房间快速跳转 + 设备轮播 + 设备详情展开 + 场景动画 |

## 本地预览

仓库根目录里直接双击 `smart-home-showcase/smart-home-showcase.html` 即可，手机上也可直接打开。
若需要局域网分享，启动一个本地服务器：

```bash
cd smart-home-showcase
python3 -m http.server 8000
# 浏览器访问 http://localhost:8000
```

## 文件结构

```
.
├── README.md
├── smart-home-showcase/             # V3 · 推荐主版本
│   ├── smart-home-showcase.html
│   └── assets/
│       ├── app.js
│       └── floorplan_1280x720.jpg
├── smart-home-demo/                 # V2 · 控制台演示
│   ├── smart-home-demo.html
│   └── assets/app.js
├── smart-home-devices/              # V1 · 设备图鉴
│   ├── smart-home-devices.html
│   └── assets/
│       ├── bedroom_1280x720.jpg
│       ├── kitchen_bath_1280x720.jpg
│       ├── living_room_1280x720.jpg
│       └── security_1280x720.jpg
├── smart_home_architecture.html      # 智能家居架构图（SVG 源）
└── smart_home_architecture.png      # 架构图 PNG 导出
```

## 移动端兼容说明

- 三个页面均使用 `viewport: width=device-width, initial-scale=1.0`，在 iOS/Android/微信内置浏览器均可正常浏览。
- 交互按钮均做了：
  - `touch-action: manipulation` —— 消除 300ms 点击延迟
  - `-webkit-tap-highlight-color` —— 自定义点击高亮
  - `addEventListener('click' + 'touchend')` 双重绑定 —— 兼容微信/QQ X5 内核浏览器
- 跳转反馈：V3 点击房间卡片后屏幕底部出现紫色 Toast「→ 已跳转到 XX 设备详情」。

## 部署到 GitHub Pages

1. 进入 GitHub 仓库页面 → **Settings** → **Pages**
2. **Source** 选择 `Deploy from a branch`
3. **Branch** 选择 `main`，目录选择 `/ (root)`
4. 保存后等待 1–2 分钟，GitHub 会给出形如 `https://<user>.github.io/smart-home-showcase/` 的链接
5. 在浏览器打开 `https://<user>.github.io/smart-home-showcase/smart-home-showcase/` 即可访问 V3

V1/V2 入口：
- V1：`https://<user>.github.io/smart-home-showcase/smart-home-devices/smart-home-devices.html`
- V2：`https://<user>.github.io/smart-home-showcase/smart-home-demo/smart-home-demo.html`

## 技术栈

- 纯 HTML + CSS + 原生 JavaScript（无任何框架、无打包步骤）
- 字体：系统默认中文字体（PingFang SC / Noto Sans CJK SC）
- 图片：均由 `GenerateImage` AI 生成

## License

MIT
