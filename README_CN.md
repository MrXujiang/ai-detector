<div align="center">

# 🖥️ AI 跑分助手

**一键检测你的电脑能跑哪些 AI 大模型**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/MrXujiang/ai-detector?style=social)](https://github.com/MrXujiang/ai-detector)
[![HTML](https://img.shields.io/badge/技术栈-HTML%20%2F%20CSS%20%2F%20JS-orange)](https://github.com/MrXujiang/ai-detector)
[![隐私安全](https://img.shields.io/badge/隐私-100%25本地运行-green)](#)
[![无需登录](https://img.shields.io/badge/免费-无需注册-brightgreen)](#)

[🚀 在线体验](https://jitword.com/ai-detector) · [📖 使用指南](#使用指南) · [🤝 贡献代码](#贡献) · [💬 问题反馈](https://github.com/MrXujiang/ai-detector/issues) · [English](./README.md)

</div>

---

## ✨ 项目简介

**AI 跑分助手** 是一款完全运行在浏览器端的免费硬件检测工具。它能自动读取你电脑的内存、CPU、GPU 信息，智能匹配 **21+ 主流开源 AI 大模型**的兼容性，并给出本地运行速度预估，帮你在 **5 秒内**找到最适合自己电脑的 AI 模型。

> 无需安装、无需登录、无需上传任何数据，全程 100% 本地运行。

---

## 🎯 核心功能

### 🔍 硬件自动检测
- **系统内存**：通过 `navigator.deviceMemory` 读取 RAM 大小
- **CPU 核心数**：通过 `navigator.hardwareConcurrency` 读取逻辑核数
- **GPU 型号**：通过 WebGL `WEBGL_debug_renderer_info` 扩展识别显卡
- **综合跑分**：基于内存与 CPU 计算 0-100 综合评分，直观了解你的 AI 能力等级

### 🤖 21+ 大模型兼容性分析

覆盖当前最主流的开源大模型系列，一键知晓哪些能跑、哪些跑不动：

| 系列 | 代表模型 | 参数规模 |
|------|---------|---------|
| 🦙 Llama | TinyLlama、Llama 3.2、Llama 3.1 | 1.1B ~ 70B |
| 🌐 Qwen | Qwen2.5 3B/7B/14B/32B/72B | 3B ~ 72B |
| 💎 Phi | Phi-3 Mini、Phi-3 Medium | 3.8B ~ 14B |
| 🌬️ Mistral | Mistral 7B | 7B |
| 🧠 DeepSeek | DeepSeek-R1、DeepSeek Coder | 7B ~ 70B |
| 👁️ 多模态 | LLaVA 7B、MiniCPM-V 8B | 7B ~ 8B |
| 💫 Gemma | Gemma 2 2B | 2B |

### ⚡ 兼容性三级分类
- ✅ **流畅运行**：内存充裕，可稳定高速推理
- ⚠️ **勉强运行**：内存刚好满足，速度偏慢
- ❌ **内存不足**：当前配置无法加载该模型

### 📊 运行速度排行（tokens/s 预估）
检测完成后自动生成可运行模型的速度排行榜，按 tokens/秒从高到低排列，帮你优先选出响应最快的模型。

### 🔧 量化模式切换
- **Q4 量化**：内存占用更低，普通设备首选
- **Q8 量化**：精度更高，内存需求约为 Q4 的 2 倍
- 一键切换，实时刷新所有模型兼容状态

### 🎁 个性化模型推荐
基于你的硬件配置，自动从模型库中精选 **最均衡**、**速度最快**、**能力最强** 三款推荐，省去选择烦恼。

### 📋 一键复制检测报告
生成包含硬件配置、综合评分、可运行模型的文本报告，方便分享或咨询。

---

## 🚀 快速上手

### 方式一：直接使用在线版

访问 [https://jitword.com/ai-detector](https://jitword.com/ai-detector)，无需任何配置，即开即用。

### 方式二：本地部署

```bash
# 1. 克隆项目
git clone https://github.com/MrXujiang/ai-detector.git

# 2. 进入目录
cd ai-detector

# 3. 用任意 HTTP 服务器启动（以 npx 为例）
npx serve .
# 或者直接用浏览器打开 ai-detector.html
```

> 项目仅含 3 个文件（HTML / CSS / JS），零依赖、零构建，双击 `ai-detector.html` 即可运行。

---

## 📖 使用指南

1. **打开页面** → 点击「**开始硬件检测**」按钮
2. **等待扫描**（约 3~5 秒）→ 自动完成内存、CPU、GPU 检测
3. **查看结果** → 获得综合跑分与设备等级评价
4. **浏览推荐** → 查看「为你推荐」区块，获取最适合你的 3 款模型
5. **筛选模型** → 在「模型列表」中按兼容状态、类型筛选，支持关键词搜索
6. **切换量化** → 尝试切换 Q4 / Q8 量化，查看内存需求变化
7. **复制报告** → 一键复制检测结果，方便保存或分享

---

## 💡 为什么选择 AI 跑分助手？

| 特性 | AI 跑分助手 | 其他工具 |
|------|------------|---------|
| 需要安装 | ❌ 无需安装 | ✅ 通常需要 |
| 需要登录 | ❌ 无需注册 | ✅ 通常需要 |
| 数据上传 | ❌ 完全不上传 | ⚠️ 部分上传 |
| 模型覆盖 | ✅ 21+ 主流模型 | ⚠️ 覆盖有限 |
| 速度预估 | ✅ tokens/s 量化估算 | ⚠️ 通常无此功能 |
| 升级建议 | ✅ 智能提示内存升级方案 | ❌ 无 |
| 量化切换 | ✅ Q4 / Q8 实时切换 | ❌ 无 |
| 开源免费 | ✅ MIT 协议 | ⚠️ 多数收费 |

---

## 🛠️ 本地运行工具推荐

检测完成后，可以用以下工具在本地跑起 AI 大模型：

### 🖥️ [Ollama](https://ollama.com) — 推荐新手
一行命令即可下载并运行大模型，支持 macOS / Linux / Windows，模型库 300+：
```bash
ollama run qwen2.5
```

### 🖱️ [LM Studio](https://lmstudio.ai) — 零基础友好
桌面图形界面，可视化管理模型，内置聊天窗口，无需命令行。

### ⚙️ [llama.cpp](https://github.com/ggerganov/llama.cpp) — 开发者首选
纯 C++ 实现，性能极致，CPU/GPU 混合推理，Ollama 的底层引擎：
```bash
./llama-cli -m model.gguf -p "你好"
```

---

## 📁 项目结构

```
ai-detector/
├── ai-detector.html   # 主页面（含完整 HTML 结构与 SEO 配置）
├── ai-detector.css    # 样式文件（动画、卡片、导航、响应式）
├── ai-detector.js     # 核心逻辑（硬件检测、模型数据库、渲染逻辑）
└── README.md
```

---

## 🔒 隐私说明

本工具对隐私保护极为严格：

- 所有检测通过浏览器原生 JavaScript API 在**本地**完成
- **不发送任何数据**到服务器
- **不使用 Cookie**，不追踪用户行为
- 内存数值由浏览器隐私保护机制进行近似处理（返回 2/4/8/16/32 GB 等近似值）

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

- 🐛 发现 Bug？[提交 Issue](https://github.com/MrXujiang/ai-detector/issues)
- 💡 有新想法？[发起讨论](https://github.com/MrXujiang/ai-detector/discussions)
- 🆕 想新增模型？直接修改 `ai-detector.js` 中的 `MODELS` 数组并提 PR

```bash
# Fork 后克隆你的仓库
git clone https://github.com/your-username/ai-detector.git

# 新建功能分支
git checkout -b feature/add-new-model

# 提交改动
git commit -m "feat: 新增 xxx 模型支持"

# 推送并提 PR
git push origin feature/add-new-model
```

---

## 🌟 相关产品推荐

作者同步维护的其他 AI 工具，欢迎体验：

| 产品 | 简介 | 链接 |
|------|------|------|
| **JitWord 协同 AI 文档** | AI 写作 · 多人协同 · 知识沉淀 | [jitword.com](https://jitword.com) |
| **JitKnow AI 知识库** | RAG 检索 · 私有化部署 · 智能问答 | [know.jitword.com](https://know.jitword.com) |
| **Pxcharts 超级表格** | 数据可视化 · AI 报表 · 在线协作 | [pxcharts.turntip.cn](https://pxcharts.turntip.cn) |

---

## 📬 联系作者

- **GitHub**：[@MrXujiang](https://github.com/MrXujiang)
- **公众号**：扫描页面右下角二维码，获取更多 AI 工具与开源资源
- **Issue**：[github.com/MrXujiang/ai-detector/issues](https://github.com/MrXujiang/ai-detector/issues)

如果这个项目对你有帮助，欢迎点一个 ⭐ Star，这是对作者最大的鼓励！

---

<div align="center">

**Made with ❤️ by [MrXujiang](https://github.com/MrXujiang)**

*让每一台电脑都能找到属于自己的 AI 大模型*

</div>
