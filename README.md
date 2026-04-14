<div align="center">

# 🖥️ AI Detector — Can My PC Run This AI Model?

**Instantly check which local AI large language models your computer can run**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Stars](https://img.shields.io/github/stars/MrXujiang/ai-detector?style=social)](https://github.com/MrXujiang/ai-detector)
[![Stack](https://img.shields.io/badge/Stack-HTML%20%2F%20CSS%20%2F%20JS-orange)](https://github.com/MrXujiang/ai-detector)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Local-green)](#)
[![Free](https://img.shields.io/badge/Free-No%20Login-brightgreen)](#)

[🚀 Live Demo](https://jitword.com/ai-detector) · [📖 Usage Guide](#usage-guide) · [🤝 Contributing](#contributing) · [💬 Issues](https://github.com/MrXujiang/ai-detector/issues) · [中文文档](./README_CN.md)

</div>

---

## ✨ Overview

**AI Detector** is a free, browser-based hardware detection tool. It automatically reads your device's RAM, CPU, and GPU information, intelligently matches compatibility with **21+ mainstream open-source AI models**, and estimates local inference speed — helping you find the best AI model for your machine **in under 5 seconds**.

> No installation. No login. No data upload. 100% runs locally in your browser.

---

## 🎯 Key Features

### 🔍 Automatic Hardware Detection
- **System RAM** — reads via `navigator.deviceMemory`
- **CPU Cores** — reads logical core count via `navigator.hardwareConcurrency`
- **GPU Model** — detects via WebGL `WEBGL_debug_renderer_info` extension
- **AI Score** — calculates a 0–100 composite score to rank your device's AI capability level

### 🤖 Compatibility Analysis for 21+ LLMs

Covers today's most popular open-source model families:

| Family | Representative Models | Parameter Range |
|--------|-----------------------|-----------------|
| 🦙 Llama | TinyLlama, Llama 3.2, Llama 3.1 | 1.1B ~ 70B |
| 🌐 Qwen | Qwen2.5 3B/7B/14B/32B/72B | 3B ~ 72B |
| 💎 Phi | Phi-3 Mini, Phi-3 Medium | 3.8B ~ 14B |
| 🌬️ Mistral | Mistral 7B | 7B |
| 🧠 DeepSeek | DeepSeek-R1, DeepSeek Coder | 7B ~ 70B |
| 👁️ Multimodal | LLaVA 7B, MiniCPM-V 8B | 7B ~ 8B |
| 💫 Gemma | Gemma 2 2B | 2B |

### ⚡ Three-Tier Compatibility Labels
- ✅ **Runs Smoothly** — sufficient RAM for stable, fast inference
- ⚠️ **Barely Runs** — just meets the minimum, expect slower speeds
- ❌ **Not Supported** — insufficient memory to load this model

### 📊 Speed Ranking (tokens/s Estimate)
After detection, a performance leaderboard is auto-generated, ranking all runnable models by estimated tokens per second.

### 🔧 Quantization Mode Toggle
- **Q4** — lower memory footprint, recommended for most devices
- **Q8** — higher precision, requires ~2× the RAM of Q4
- Switch in one click; all compatibility statuses update in real time

### 🎁 Personalized Model Recommendations
Based on your hardware profile, the tool automatically selects the **most balanced**, **fastest**, and **most capable** models for you.

### 📋 One-Click Report Copy
Generates a shareable text report with your hardware specs, score, and runnable model list.

---

## 🚀 Quick Start

### Option 1 — Use the Online Version

Visit [https://jitword.com/ai-detector](https://jitword.com/ai-detector). No setup required.

### Option 2 — Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/MrXujiang/ai-detector.git

# 2. Enter the directory
cd ai-detector

# 3. Start with any static server (e.g. npx)
npx serve .
# Or simply open ai-detector.html directly in your browser
```

> The project consists of just 3 files (HTML / CSS / JS). Zero dependencies, zero build steps.

---

## 📖 Usage Guide

1. **Open the page** → click **"Start Detection"**
2. **Wait ~3–5 seconds** → RAM, CPU, and GPU are scanned automatically
3. **View results** → see your AI score and device tier
4. **Browse recommendations** → the "Recommended for You" section shows your top 3 models
5. **Filter models** → filter by compatibility status or category; search by keyword
6. **Switch quantization** → toggle Q4 / Q8 to see how memory requirements change
7. **Copy report** → one-click copy of your full detection result

---

## 💡 Why AI Detector?

| Feature | AI Detector | Other Tools |
|---------|-------------|-------------|
| Installation required | ❌ None | ✅ Usually |
| Login required | ❌ None | ✅ Usually |
| Data upload | ❌ Never | ⚠️ Sometimes |
| Model coverage | ✅ 21+ mainstream models | ⚠️ Limited |
| Speed estimation | ✅ tokens/s quantified | ⚠️ Rarely available |
| Upgrade suggestions | ✅ Smart RAM advice | ❌ No |
| Quantization toggle | ✅ Q4 / Q8 live switch | ❌ No |
| Open source & free | ✅ MIT License | ⚠️ Mostly paid |

---

## 🛠️ Recommended Local Inference Tools

Once you know which models your device supports, use these tools to run them locally:

### 🖥️ [Ollama](https://ollama.com) — Best for Beginners
One command to download and run any model. Supports macOS / Linux / Windows. 300+ models available:
```bash
ollama run qwen2.5
```

### 🖱️ [LM Studio](https://lmstudio.ai) — Zero-Code Friendly
Desktop GUI app with a built-in chat interface. No command line needed. Search and download models from HuggingFace directly.

### ⚙️ [llama.cpp](https://github.com/ggerganov/llama.cpp) — Developer's Choice
Pure C++ implementation with the lowest memory footprint. Supports CPU/GPU hybrid inference. Powers Ollama under the hood:
```bash
./llama-cli -m model.gguf -p "Hello!"
```

---

## 📁 Project Structure

```
ai-detector/
├── ai-detector.html   # Main page (HTML structure + SEO metadata)
├── ai-detector.css    # Styles (animations, cards, nav, responsive layout)
├── ai-detector.js     # Core logic (hardware detection, model DB, rendering)
├── README.md          # English documentation (this file)
└── README_CN.md       # Chinese documentation
```

---

## 🔒 Privacy

This tool takes privacy seriously:

- All detection runs entirely **in-browser** using native JavaScript APIs
- **No data is ever sent** to any server
- **No cookies**, no user tracking
- RAM values are intentionally approximate due to browser privacy protections (e.g. 2, 4, 8, 16, 32 GB)

---

## 🤝 Contributing

Contributions are welcome! Feel free to open Issues and Pull Requests.

- 🐛 Found a bug? [Open an Issue](https://github.com/MrXujiang/ai-detector/issues)
- 💡 Have an idea? [Start a Discussion](https://github.com/MrXujiang/ai-detector/discussions)
- 🆕 Want to add a model? Edit the `MODELS` array in `ai-detector.js` and submit a PR

```bash
# Fork and clone your copy
git clone https://github.com/your-username/ai-detector.git

# Create a feature branch
git checkout -b feature/add-new-model

# Commit your changes
git commit -m "feat: add support for xxx model"

# Push and open a PR
git push origin feature/add-new-model
```

---

## 🌟 Related Products

More AI tools built and maintained by the author:

| Product | Description | Link |
|---------|-------------|------|
| **JitWord** | Collaborative AI document editor · Real-time co-editing · Knowledge base | [jitword.com](https://jitword.com) |
| **JitKnow** | RAG-powered AI knowledge base · Private deployment · Smart Q&A | [know.jitword.com](https://know.jitword.com) |
| **Pxcharts** | AI-powered spreadsheets · Data visualization · Online collaboration | [pxcharts.turntip.cn](https://pxcharts.turntip.cn) |

---

## 📬 Contact

- **GitHub**: [@MrXujiang](https://github.com/MrXujiang)
- **WeChat Official Account**: Scan the QR code in the bottom-right corner of the page for more AI tools and open-source resources
- **Issues**: [github.com/MrXujiang/ai-detector/issues](https://github.com/MrXujiang/ai-detector/issues)

If this project helps you, a ⭐ Star is the best encouragement!

---

<div align="center">

**Made with ❤️ by [MrXujiang](https://github.com/MrXujiang)**

*Help every computer find the AI model that fits it best.*

</div>
