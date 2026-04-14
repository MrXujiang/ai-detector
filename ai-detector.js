// ===== 模型数据库 =====
const MODELS = [
  {id:1,  name:'TinyLlama 1.1B',    params:'1.1B', series:'Llama',    cat:'general',    minRam:4,  icon:'solar:fire-bold-duotone',          color:'#FF6B6B', tool:'Ollama',    url:'https://ollama.com/library/tinyllama',   desc:'超轻量 Llama 变体，内存要求最低，极速响应，适合低配设备入门体验',      quant:'FP16'},
  {id:2,  name:'Phi-3 Mini 3.8B',   params:'3.8B', series:'Phi',      cat:'general',    minRam:4,  icon:'solar:cpu-bold-duotone',           color:'#165DFF', tool:'Ollama',    url:'https://ollama.com/library/phi3',        desc:'微软出品，3B 级别综合能力最强，代码和推理能力远超同参数模型',          quant:'Q4'},
  {id:3,  name:'Gemma 2 2B',        params:'2B',   series:'Gemma',    cat:'general',    minRam:4,  icon:'solar:stars-bold-duotone',         color:'#10B981', tool:'Ollama',    url:'https://ollama.com/library/gemma2',      desc:'Google 最新轻量模型，英文理解出色，指令跟随能力强',                    quant:'Q4'},
  {id:4,  name:'Qwen2.5 3B',        params:'3B',   series:'Qwen',     cat:'general',    minRam:4,  icon:'solar:planet-bold-duotone',        color:'#8B5CF6', tool:'Ollama',    url:'https://ollama.com/library/qwen2.5',     desc:'阿里出品，同级别中文支持最佳，中文写作和问答能力远超同量模型',          quant:'Q4'},
  {id:5,  name:'Llama 3.2 3B',      params:'3B',   series:'Llama',    cat:'general',    minRam:4,  icon:'solar:fire-bold-duotone',          color:'#FF6B6B', tool:'Ollama',    url:'https://ollama.com/library/llama3.2',    desc:'Meta 最新 3B 精调版，综合能力均衡，英文对话流畅自然',                  quant:'Q4'},
  {id:6,  name:'Mistral 7B',        params:'7B',   series:'Mistral',  cat:'general',    minRam:8,  icon:'solar:wind-bold-duotone',          color:'#165DFF', tool:'Ollama',    url:'https://ollama.com/library/mistral',     desc:'欧洲出品，代码和指令跟随均衡，7B 级别标杆模型，生态成熟',              quant:'Q4'},
  {id:7,  name:'Llama 3.1 8B',      params:'8B',   series:'Llama',    cat:'general',    minRam:8,  icon:'solar:fire-bold-duotone',          color:'#FF6B6B', tool:'Ollama',    url:'https://ollama.com/library/llama3.1',    desc:'Meta 旗舰开源 8B，综合能力强，社区生态最完善，支持工具调用',          quant:'Q4'},
  {id:8,  name:'Qwen2.5 7B',        params:'7B',   series:'Qwen',     cat:'general',    minRam:8,  icon:'solar:planet-bold-duotone',        color:'#8B5CF6', tool:'Ollama',    url:'https://ollama.com/library/qwen2.5',     desc:'国产最强 7B，中英文理解深入，知识丰富，国内场景首选',                  quant:'Q4'},
  {id:9,  name:'DeepSeek-R1 7B',    params:'7B',   series:'DeepSeek', cat:'general',    minRam:8,  icon:'solar:brain-bold-duotone',         color:'#00C9A7', tool:'Ollama',    url:'https://ollama.com/library/deepseek-r1', desc:'推理增强蒸馏版，擅长数学逻辑，思维链显式输出，复杂问题推理首选',      quant:'Q4'},
  {id:10, name:'DeepSeek Coder 7B', params:'7B',   series:'DeepSeek', cat:'code',       minRam:8,  icon:'solar:code-bold-duotone',          color:'#00C9A7', tool:'Ollama',    url:'https://ollama.com/library/deepseek-coder', desc:'代码专项，支持 40+ 语言，补全、解释、重构能力一流，开发者首选',    quant:'Q4'},
  {id:11, name:'CodeLlama 7B',      params:'7B',   series:'Llama',    cat:'code',       minRam:8,  icon:'solar:programming-bold-duotone',   color:'#F59E0B', tool:'Ollama',    url:'https://ollama.com/library/codellama',   desc:'Meta 代码模型，支持 100K 超长上下文，适合大型代码库分析',              quant:'Q4'},
  {id:12, name:'LLaVA 7B',          params:'7B',   series:'LLaVA',    cat:'multimodal', minRam:10, icon:'solar:eye-bold-duotone',           color:'#EC4899', tool:'Ollama',    url:'https://ollama.com/library/llava',       desc:'图文多模态，支持图像理解与描述、OCR 识别、视觉问答，开源视觉先驱',    quant:'Q4'},
  {id:13, name:'MiniCPM-V 8B',      params:'8B',   series:'MiniCPM',  cat:'multimodal', minRam:10, icon:'solar:gallery-bold-duotone',       color:'#8B5CF6', tool:'Ollama',    url:'https://ollama.com/library/minicpm-v',   desc:'面壁智能出品，轻量多模态，OCR 效果出色，支持实时视频流分析',          quant:'Q4'},
  {id:14, name:'Phi-3 Medium 14B',  params:'14B',  series:'Phi',      cat:'general',    minRam:16, icon:'solar:cpu-bold-duotone',           color:'#165DFF', tool:'LM Studio', url:'https://huggingface.co/microsoft/Phi-3-medium-128k-instruct', desc:'微软 Phi 旗舰版，128K 超长上下文，推理能力接近 70B 量化模型', quant:'Q4'},
  {id:15, name:'Qwen2.5 14B',       params:'14B',  series:'Qwen',     cat:'general',    minRam:16, icon:'solar:planet-bold-duotone',        color:'#8B5CF6', tool:'Ollama',    url:'https://ollama.com/library/qwen2.5:14b', desc:'中文旗舰 14B，知识覆盖广泛，中文写作、翻译、分析能力最强',            quant:'Q4'},
  {id:16, name:'Llama 2 13B',       params:'13B',  series:'Llama',    cat:'general',    minRam:16, icon:'solar:fire-bold-duotone',          color:'#FF6B6B', tool:'Ollama',    url:'https://ollama.com/library/llama2:13b',  desc:'Llama 2 稳定可靠版本，通用性强，量化支持完善，适合生产部署',          quant:'Q4'},
  {id:17, name:'Qwen2.5 32B',       params:'32B',  series:'Qwen',     cat:'general',    minRam:24, icon:'solar:planet-bold-duotone',        color:'#8B5CF6', tool:'LM Studio', url:'https://huggingface.co/Qwen/Qwen2.5-32B-Instruct-GGUF', desc:'旗舰性能，综合能力媲美 GPT-4，中文天花板，高质量长文写作', quant:'Q4'},
  {id:18, name:'DeepSeek-R1 32B',   params:'32B',  series:'DeepSeek', cat:'general',    minRam:24, icon:'solar:brain-bold-duotone',         color:'#00C9A7', tool:'LM Studio', url:'https://huggingface.co/deepseek-ai/DeepSeek-R1', desc:'超强推理能力，数学竞赛和复杂逻辑推理顶尖，AIME 2024 全满分', quant:'Q4'},
  {id:19, name:'Llama 3.1 70B',     params:'70B',  series:'Llama',    cat:'general',    minRam:48, icon:'solar:fire-bold-duotone',          color:'#FF6B6B', tool:'llama.cpp', url:'https://ollama.com/library/llama3.1:70b', desc:'Meta 顶级开源模型，Q4 量化可运行，综合能力全面对标 GPT-4',          quant:'Q4'},
  {id:20, name:'Qwen2.5 72B',       params:'72B',  series:'Qwen',     cat:'general',    minRam:48, icon:'solar:planet-bold-duotone',        color:'#8B5CF6', tool:'llama.cpp', url:'https://huggingface.co/Qwen/Qwen2.5-72B-Instruct-GGUF', desc:'国产最强开源大模型，中文理解登顶，知识广度无与伦比', quant:'Q4'},
  {id:21, name:'DeepSeek-R1 70B',   params:'70B',  series:'DeepSeek', cat:'general',    minRam:48, icon:'solar:brain-bold-duotone',         color:'#00C9A7', tool:'llama.cpp', url:'https://huggingface.co/deepseek-ai/DeepSeek-R1', desc:'推理能力全球领先，数学和编程能力超越 OpenAI o1，开源最强', quant:'Q4'},
];

const FAQ_DATA = [
  { q:'这个工具会上传我的硬件信息吗？', a:'完全不会。所有检测通过浏览器 JavaScript API 在本地完成，读取 navigator.deviceMemory、navigator.hardwareConcurrency 和 WebGL 信息，全程不发送任何数据到服务器，100% 本地运行。' },
  { q:'内存数值为什么显示不准确？', a:'浏览器出于隐私保护，navigator.deviceMemory 只返回近似值（如 2、4、8、16、32 GB），并非精确值。实际内存请通过系统设置（macOS：关于本机，Windows：任务管理器）查看。' },
  { q:'没有独立 GPU 也能运行本地大模型吗？', a:'可以！本地大模型可以纯 CPU 运行，只是速度较慢。一般 CPU 运行 7B 量化模型约 2~8 tokens/秒。Apple Silicon Mac 因统一内存架构，CPU+GPU 共享内存，推理速度远超普通 Intel/AMD 方案。' },
  { q:'「勉强运行」是什么意思？', a:'表示设备内存刚好满足模型最低要求，模型可以加载并运行，但速度可能较慢（1~3 tokens/秒），且运行时内存占用极高。建议关闭其他大型程序，或选择更小的量化版本（如 Q2_K）。' },
  { q:'模型文件有多大，需要下载多少？', a:'以 Q4 量化格式为例：3B 模型约 2GB，7B 约 4~5GB，14B 约 8~9GB，32B 约 18~20GB，70B 约 40~45GB。首次下载较慢，之后本地运行无需网络。' },
  { q:'如何选择第一个本地大模型？', a:'推荐新手从 Qwen2.5 7B（中文场景）或 Llama 3.1 8B（英文/通用）入手，配合 Ollama（一条命令即可运行）。内存低于 8GB 建议选 Phi-3 Mini 3.8B 或 Gemma 2 2B。' },
];

// ===== 状态 =====
let hwInfo = { ram: null, cpu: null, gpu: null, score: null };
let currentFilter = 'all';
let currentQuant = 'q4';   // 'q4' | 'q8'
let searchQuery = '';

// ===== 兼容标签配置 =====
const COMPAT_CFG = {
  full:        { label: '流畅运行', badge: 'bg-[#10B981]/10 text-[#10B981]', icon: 'solar:check-circle-bold-duotone', barColor: 'from-[#10B981] to-[#34D399]', speedLabel: '流畅' },
  marginal:    { label: '勉强运行', badge: 'bg-[#F59E0B]/10 text-[#F59E0B]', icon: 'solar:danger-bold-duotone',       barColor: 'from-[#F59E0B] to-[#FBBF24]', speedLabel: '可用' },
  unsupported: { label: '内存不足', badge: 'bg-[#FF6B6B]/10 text-[#FF6B6B]', icon: 'solar:close-circle-bold-duotone', barColor: '', speedLabel: '' },
  unknown:     { label: '待检测',   badge: 'bg-gray-100 text-gray-400',       icon: 'solar:question-circle-bold-duotone', barColor: '', speedLabel: '' },
};
const CAT_LABEL = { general: '通用对话', code: '代码编程', multimodal: '图文多模态' };

// Q8 量化约需 2× 内存；Q4 使用原始 minRam
function getEffectiveMinRam(model) {
  return currentQuant === 'q8' ? model.minRam * 2 : model.minRam;
}

// ===== 硬件检测函数 =====
function getGPU() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
    if (!gl) return '未能获取（请使用支持 WebGL 的浏览器）';
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    if (ext) {
      const r = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL);
      return r.replace(/\(.*?\)/g, '').trim().substring(0, 40) || '已检测到 GPU';
    }
    return '集成显卡 / 型号受隐私限制';
  } catch (e) { return '未能获取'; }
}

function calcScore(ram, cpu) {
  const r = Math.min((ram / 64) * 60, 60);
  const c = Math.min((cpu / 16) * 40, 40);
  return Math.round(r + c);
}

function getLevel(score) {
  if (score >= 75) return { label: '旗舰配置', desc: '可运行 32B~70B 大模型，AI 体验极致' };
  if (score >= 50) return { label: '中高配置', desc: '可流畅运行 7B~14B 模型，体验优质' };
  if (score >= 28) return { label: '中等配置', desc: '可运行 3B~7B 量化模型，入门够用' };
  return { label: '入门配置', desc: '建议 1B~3B 超小模型，或考虑升级内存' };
}

function checkCompat(model, ram) {
  if (ram === null) return 'unknown';
  const minRam = getEffectiveMinRam(model);
  if (ram >= minRam * 1.5) return 'full';
  if (ram >= minRam) return 'marginal';
  return 'unsupported';
}

function estSpeed(model, ram, cpu) {
  if (!ram || !cpu) return null;
  const sizeB = parseFloat(model.params);
  const base = (cpu * 1.8) / (sizeB * 0.75);
  const ramFactor = Math.min(ram / getEffectiveMinRam(model), 2.2);
  const speed = base * ramFactor * 0.65;
  return Math.max(0.3, +speed.toFixed(1));
}

function getSummary(ram, score) {
  if (ram >= 48) return { title: '你的设备是 AI 旗舰选手！', text: '内存充裕，可运行 70B 量化大模型，推荐 Qwen2.5 72B 或 Llama 3.1 70B，媲美 GPT-4 的本地 AI 体验。' };
  if (ram >= 24) return { title: '高配设备，大模型自由！', text: '可流畅运行 32B 量化模型，推荐 Qwen2.5 32B 或 DeepSeek-R1 32B，性价比极高的本地 AI 体验。' };
  if (ram >= 16) return { title: '中高配设备，体验优质！', text: '可流畅运行 14B 量化模型，推荐 Qwen2.5 14B 或 Phi-3 Medium，日常工作完全够用。' };
  if (ram >= 8)  return { title: '标准配置，轻松入门！', text: '可流畅运行 7B 量化模型，推荐 Qwen2.5 7B（中文）或 Llama 3.1 8B（英文）。' };
  return { title: '入门配置，建议小模型起步！', text: '推荐 Phi-3 Mini 3.8B 或 Gemma 2 2B，或升级内存到 8GB 以上再体验 7B 模型。' };
}

// ===== 检测主流程 =====
function startDetect() {
  const section = document.getElementById('detect');
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.getElementById('detect-idle').classList.add('hidden');
  document.getElementById('detect-result').classList.add('hidden');
  document.getElementById('detect-scanning').classList.remove('hidden');

  // 逐步亮起扫描步骤
  const steps = ['ram', 'cpu', 'gpu', 'score'];
  const delays = [600, 1300, 2100, 2900];
  const progress = document.getElementById('scan-progress');

  steps.forEach((s, i) => {
    setTimeout(() => {
      document.getElementById('step-' + s).classList.add('active');
      progress.style.width = ((i + 0.5) * 25) + '%';
    }, delays[i] - 500);

    setTimeout(() => {
      const step = document.getElementById('step-' + s);
      step.classList.remove('active');
      step.classList.add('done');
      const statusIcon = document.getElementById('step-' + s + '-status');
      statusIcon.setAttribute('data-icon', 'solar:check-circle-bold-duotone');
      statusIcon.classList.remove('text-gray-300');
      statusIcon.classList.add('text-[#10B981]');
      // Force iconify re-render
      if (window.Iconify) Iconify.scan(statusIcon.parentElement);
      progress.style.width = ((i + 1) * 25) + '%';
    }, delays[i]);
  });

  setTimeout(() => {
    const ram = navigator.deviceMemory || null;
    const cpu = navigator.hardwareConcurrency || null;
    const gpu = getGPU();
    const score = (ram && cpu) ? calcScore(ram, cpu) : null;
    hwInfo = { ram, cpu, gpu, score };

    document.getElementById('detect-scanning').classList.add('hidden');
    showResult(hwInfo);
    showUpgradeBanner(hwInfo.ram || 4);
    renderRecommended(hwInfo);
    renderModels();
    renderPerf();
  }, 3600);
}

// ===== 展示检测结果 =====
function showResult(hw) {
  const el = document.getElementById('detect-result');
  el.classList.remove('hidden');

  // 数据填充
  document.getElementById('res-ram').textContent = hw.ram ? hw.ram : '≈4';
  document.getElementById('res-cpu').textContent = hw.cpu ? hw.cpu : '4';
  document.getElementById('res-gpu').textContent = hw.gpu || '未能获取';

  const score = hw.score || calcScore(hw.ram || 4, hw.cpu || 4);
  const scoreEl = document.getElementById('res-score');
  scoreEl.textContent = score;

  // 圆环动画
  const circum = 188.5;
  const circle = document.getElementById('score-circle');
  circle.style.strokeDashoffset = circum;
  setTimeout(() => {
    circle.style.strokeDashoffset = circum - (score / 100) * circum;
  }, 200);

  // 等级
  const lv = getLevel(score);
  document.getElementById('res-level').textContent = lv.label;

  // 摘要
  const summary = getSummary(hw.ram || 4, score);
  document.getElementById('res-summary-title').textContent = summary.title;
  document.getElementById('res-summary-text').textContent = summary.text;
}

// ===== 渲染模型卡片 =====
// 关键修复：不使用 scroll-reveal，改用 .model-card.visible 的 CSS 动画
function renderModels() {
  const grid = document.getElementById('model-grid');
  grid.innerHTML = '';
  const ram = hwInfo.ram;

  MODELS.forEach((m, idx) => {
    const compat = checkCompat(m, ram);
    const speed = estSpeed(m, ram, hwInfo.cpu);
    const cfg = COMPAT_CFG[compat];

    const card = document.createElement('div');
    // 不添加 scroll-reveal，动画由 CSS .model-card.visible 驱动
    card.className = 'model-card card-hover bg-white rounded-2xl p-6 border border-[#E8ECFF] shadow-sm';
    card.dataset.compat = compat;
    card.dataset.cat = m.cat;
    card.dataset.filter = compat;
    card.dataset.name = m.name.toLowerCase();
    card.dataset.series = m.series.toLowerCase();
    // 错开动画时间
    card.style.animationDelay = Math.min(idx * 55, 600) + 'ms';

    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${m.color}1a">
            <span class="iconify text-xl" data-icon="${m.icon}" style="color:${m.color}"></span>
          </div>
          <div>
            <div class="font-bold text-[#151515] text-sm leading-tight">${m.name}</div>
            <div class="text-xs text-[#6C6F7D] mt-0.5">${m.series} &middot; ${m.params} &middot; ${CAT_LABEL[m.cat]}</div>
          </div>
        </div>
        <span class="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold flex-shrink-0 ml-2 ${cfg.badge}">
          <span class="iconify text-sm" data-icon="${cfg.icon}"></span>
          <span>${cfg.label}</span>
        </span>
      </div>
      <p class="text-sm text-[#6C6F7D] mb-4 leading-relaxed">${m.desc}</p>
      <div class="grid grid-cols-3 gap-2 mb-4">
        <div class="bg-[#F8FAFF] rounded-lg p-2.5 text-center">
          <div class="text-[10px] text-[#6C6F7D] mb-0.5">最低内存</div>
          <div class="text-sm font-bold text-[#151515]">${getEffectiveMinRam(m)} GB</div>
        </div>
        <div class="bg-[#F8FAFF] rounded-lg p-2.5 text-center">
          <div class="text-[10px] text-[#6C6F7D] mb-0.5">量化格式</div>
          <div class="text-sm font-bold text-[#151515]">${m.quant}</div>
        </div>
        <div class="bg-[#F8FAFF] rounded-lg p-2.5 text-center">
          <div class="text-[10px] text-[#6C6F7D] mb-0.5">预估速度</div>
          <div class="text-sm font-bold ${speed ? 'text-[#151515]' : 'text-gray-300'}">${speed ? speed + ' t/s' : '待检测'}</div>
        </div>
      </div>
      <div class="flex items-center justify-between pt-3 border-t border-[#E8ECFF]">
        <span class="text-xs text-[#6C6F7D] flex items-center gap-1">
          <span class="iconify text-sm" data-icon="solar:settings-bold-duotone"></span>
          推荐工具: <strong>${m.tool}</strong>
        </span>
        <a href="${m.url}" target="_blank" rel="noopener" class="text-xs text-[#165DFF] font-semibold hover:underline flex items-center gap-0.5">
          了解更多 <span class="iconify" data-icon="solar:arrow-right-up-bold-duotone"></span>
        </a>
      </div>`;

    grid.appendChild(card);
  });

  // 应用当前过滤
  applyFilter(currentFilter);
}

// ===== 过滤模型 =====
function filterModels(type, btn) {
  currentFilter = type;

  // 更新 Tab 状态（通过 data-filter 精确匹配）
  document.querySelectorAll('.tab-btn').forEach(b => {
    const isActive = b.dataset.filter === type;
    b.classList.toggle('active', isActive);
  });

  applyFilter(type);
}

function applyFilter(type) {
  const cards = document.querySelectorAll('.model-card');
  let visible = 0;
  const q = searchQuery;

  cards.forEach(c => {
    let matchFilter = false;
    if (type === 'all') {
      matchFilter = true;
    } else if (type === 'code' || type === 'multimodal') {
      matchFilter = c.dataset.cat === type;
    } else {
      matchFilter = c.dataset.compat === type;
    }
    const matchSearch = !q ||
      (c.dataset.name || '').includes(q) ||
      (c.dataset.series || '').includes(q);
    const show = matchFilter && matchSearch;
    c.classList.toggle('visible', show);
    if (show) visible++;
  });

  document.getElementById('model-empty').classList.toggle('hidden', visible > 0);
}

// ===== 渲染性能排行 =====
// 关键修复：不使用 scroll-reveal，使用 .perf-row CSS 动画
function renderPerf() {
  const list = document.getElementById('perf-list');
  list.innerHTML = '';
  const ram = hwInfo.ram;
  const cpu = hwInfo.cpu;

  if (!ram || !cpu) {
    // 尚未检测，显示示例占位行
    renderPerfPlaceholder(list);
    return;
  }

  document.getElementById('perf-tip').classList.add('hidden');

  const runnable = MODELS
    .filter(m => checkCompat(m, ram) !== 'unsupported')
    .map(m => ({ ...m, speed: estSpeed(m, ram, cpu), compat: checkCompat(m, ram) }))
    .sort((a, b) => b.speed - a.speed);

  if (runnable.length === 0) {
    list.innerHTML = '<p class="text-center text-[#6C6F7D] py-8">当前内存配置不满足任何模型的最低要求，建议升级内存或查看云端 AI 服务。</p>';
    return;
  }

  const maxSpeed = runnable[0].speed || 1;

  runnable.forEach((m, i) => {
    const pct = Math.round((m.speed / maxSpeed) * 100);
    const cfg = COMPAT_CFG[m.compat];
    const { barColor, speedLabel } = cfg;

    const row = document.createElement('div');
    // 直接用 CSS class + 内联 animation-delay，无需 IntersectionObserver
    row.className = 'perf-row bg-white rounded-xl p-4 border border-[#E8ECFF]';
    row.style.animationDelay = Math.min(i * 55, 800) + 'ms';

    row.innerHTML = `
      <div class="flex items-center justify-between mb-2.5">
        <div class="flex items-center gap-3 min-w-0">
          <span class="text-base font-bold text-[#6C6F7D] w-5 text-center flex-shrink-0">${i + 1}</span>
          <span class="iconify text-lg flex-shrink-0" data-icon="${m.icon}" style="color:${m.color}"></span>
          <div class="min-w-0">
            <span class="font-semibold text-[#151515] text-sm">${m.name}</span>
            <span class="text-xs text-[#6C6F7D] ml-1.5">${m.params}</span>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0 ml-2">
          <span class="px-2 py-0.5 rounded-full text-xs font-semibold ${cfg.badge}">${speedLabel}</span>
          <span class="font-bold text-[#151515] text-sm whitespace-nowrap">${m.speed} <span class="text-xs font-normal text-[#6C6F7D]">t/s</span></span>
        </div>
      </div>
      <div class="bg-[#F0F5FF] rounded-full h-2 overflow-hidden">
        <div class="h-2 bg-gradient-to-r ${barColor} rounded-full progress-fill" style="width:${pct}%"></div>
      </div>`;

    list.appendChild(row);
  });
}

function renderPerfPlaceholder(list) {
  // 未检测时展示占位提示
  const placeholder = document.createElement('div');
  placeholder.className = 'text-center py-12';
  placeholder.innerHTML = `
    <div class="w-16 h-16 bg-[#F0F5FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
      <span class="iconify text-[#165DFF] text-3xl" data-icon="solar:chart-2-bold-duotone"></span>
    </div>
    <p class="text-[#6C6F7D] mb-4">完成硬件检测后，将自动显示可运行模型的速度排行</p>
    <button onclick="startDetect()" class="px-6 py-3 bg-gradient-to-r from-[#165DFF] to-[#044AE9] text-white rounded-xl text-sm font-semibold btn-glow hover:shadow-lg hover:shadow-blue-200 transition-all inline-flex items-center gap-2">
      <span class="iconify" data-icon="solar:play-bold-duotone"></span> 立即检测
    </button>`;
  list.appendChild(placeholder);
}

// ===== 渲染 FAQ =====
function renderFAQ() {
  const list = document.getElementById('faq-list');
  list.innerHTML = '';
  FAQ_DATA.forEach((item) => {
    const el = document.createElement('div');
    el.className = 'bg-white rounded-2xl border border-[#E8ECFF] overflow-hidden';
    el.innerHTML = `
      <button class="w-full flex items-center justify-between p-5 text-left font-semibold text-[#151515] hover:text-[#165DFF] transition-colors gap-3" onclick="toggleFaq(this)">
        <span>${item.q}</span>
        <span class="iconify text-xl text-[#6C6F7D] flex-shrink-0 transition-transform duration-300" data-icon="solar:alt-arrow-down-bold-duotone"></span>
      </button>
      <div class="accordion-content">
        <div class="px-5 pb-5 text-sm text-[#6C6F7D] leading-relaxed">${item.a}</div>
      </div>`;
    list.appendChild(el);
  });
}

function toggleFaq(btn) {
  const content = btn.nextElementSibling;
  const icon = btn.querySelector('.iconify');
  const isOpen = content.classList.contains('open');
  // 关闭其他
  document.querySelectorAll('.accordion-content.open').forEach(c => c.classList.remove('open'));
  document.querySelectorAll('#faq-list .iconify[data-icon="solar:alt-arrow-down-bold-duotone"]').forEach(i => i.style.transform = '');
  if (!isOpen) {
    content.classList.add('open');
    icon.style.transform = 'rotate(180deg)';
  }
}

// ===== 量化切换 =====
function setQuant(mode) {
  currentQuant = mode;
  document.querySelectorAll('.quant-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.quant === mode);
  });
  renderModels();
  renderPerf();
  if (hwInfo.ram) {
    renderRecommended(hwInfo);
    showUpgradeBanner(hwInfo.ram);
  }
}

// ===== 模型搜索 =====
function handleSearch(val) {
  searchQuery = val.toLowerCase().trim();
  applyFilter(currentFilter);
}

// ===== 升级建议横幅 =====
function showUpgradeBanner(ram) {
  const banner = document.getElementById('upgrade-banner');
  if (!banner) return;
  const tiers = [8, 16, 24, 48];
  const nextTier = tiers.find(t => t > ram);
  if (!nextTier) { banner.classList.add('hidden'); return; }
  const unlockCount = MODELS.filter(m => {
    const minR = getEffectiveMinRam(m);
    return ram < minR && nextTier >= minR;
  }).length;
  if (unlockCount > 0) {
    document.getElementById('banner-text').textContent =
      `当前内存 ${ram}GB，升级至 ${nextTier}GB 可额外解锁 ${unlockCount} 款大模型`;
    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }
}

// ===== 为你推荐 =====
function renderRecommended(hw) {
  const section = document.getElementById('recommended');
  if (!section) return;
  const ram = hw.ram;
  if (!ram) { section.classList.add('hidden'); return; }
  const compatible = MODELS.filter(m => checkCompat(m, ram) !== 'unsupported');
  if (compatible.length === 0) { section.classList.add('hidden'); return; }
  const fullPool = compatible.filter(m => checkCompat(m, ram) === 'full');
  const pool = fullPool.length >= 2 ? fullPool : compatible;
  const genPool = pool.filter(m => m.cat === 'general');
  const balanced = genPool.find(m => { const p = parseFloat(m.params); return p >= 7 && p <= 9; })
    || genPool.find(m => parseFloat(m.params) >= 3)
    || pool[0];
  const fastest  = [...genPool].sort((a, b) => parseFloat(a.params) - parseFloat(b.params))[0] || pool[0];
  const powerful = [...genPool].sort((a, b) => parseFloat(b.params) - parseFloat(a.params))[0] || pool[pool.length - 1];
  const PICKS_CFG = [
    { model: balanced, badge: '最均衡推荐', badgeColor: '#165DFF', reason: '性能与速度最佳平衡，日常使用首选' },
    { model: fastest,  badge: '速度最快',   badgeColor: '#10B981', reason: '响应最快、资源最省，适合配置较低的设备' },
    { model: powerful, badge: '能力最强',   badgeColor: '#8B5CF6', reason: '参数规模最大，回答质量最高，适合复杂任务' },
  ];
  const seen = new Set();
  const picks = PICKS_CFG.filter(p => {
    if (!p.model || seen.has(p.model.id)) return false;
    seen.add(p.model.id);
    return true;
  });
  const grid = section.querySelector('#rec-grid');
  grid.innerHTML = '';
  picks.forEach(({ model: m, badge, badgeColor, reason }, i) => {
    const speed = estSpeed(m, ram, hw.cpu);
    const compat = checkCompat(m, ram);
    const cfg = COMPAT_CFG[compat] || COMPAT_CFG.unknown;
    const div = document.createElement('div');
    div.className = 'recommend-card';
    div.style.animationDelay = (i * 80) + 'ms';
    div.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <span class="px-3 py-1 rounded-full text-xs font-bold" style="background:${badgeColor}18;color:${badgeColor}">${badge}</span>
        <span class="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${cfg.badge}">
          <span class="iconify text-xs" data-icon="${cfg.icon}"></span>${cfg.label}
        </span>
      </div>
      <div class="flex items-center gap-3 mb-3">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${m.color}1a">
          <span class="iconify text-xl" data-icon="${m.icon}" style="color:${m.color}"></span>
        </div>
        <div>
          <div class="font-bold text-[#151515]">${m.name}</div>
          <div class="text-xs text-[#6C6F7D] mt-0.5">${m.series} · ${m.params}</div>
        </div>
      </div>
      <p class="text-xs text-[#6C6F7D] mb-4 leading-relaxed">${reason}</p>
      <div class="flex items-center justify-between pt-3 border-t border-[#E8ECFF]">
        <div>
          <div class="text-xs text-[#9CA3AF]">预估速度</div>
          <div class="text-sm font-bold text-[#165DFF]">${speed ? speed + ' tokens/s' : '—'}</div>
        </div>
        <a href="${m.url}" target="_blank" rel="noopener"
           class="px-4 py-2 bg-gradient-to-r from-[#165DFF] to-[#044AE9] text-white text-xs rounded-xl font-semibold btn-glow hover:shadow-md transition-all">查看详情
        </a>
      </div>`;
    grid.appendChild(div);
  });
  if (window.Iconify) setTimeout(() => Iconify.scan(grid), 50);
  section.classList.remove('hidden');
}

// ===== 复制检测报告 =====
function copyReport() {
  if (!hwInfo.ram) { alert('请先完成硬件检测'); return; }
  const lv = getLevel(hwInfo.score || 0);
  const full = MODELS.filter(m => checkCompat(m, hwInfo.ram) === 'full').map(m => m.name).slice(0, 5).join('、');
  const text = [
    '🖥️ AI 跑分助手 · 硬件检测报告',
    '━━━━━━━━━━━━━━━━',
    `💾 内存：${hwInfo.ram} GB`,
    `🖥️ CPU 核心：${hwInfo.cpu} 核`,
    `🎮 GPU：${hwInfo.gpu}`,
    `📊 综合评分：${hwInfo.score} / 100（${lv.label}）`,
    '━━━━━━━━━━━━━━━━',
    `✅ 可流畅运行：${full || '内存不足，建议升级'}`,
    '━━━━━━━━━━━━━━━━',
    '由 AI 跑分助手 生成',
  ].join('\n');
  const btn = document.getElementById('copy-btn');
  navigator.clipboard.writeText(text).then(() => {
    if (btn) { btn.innerHTML = '<span class="iconify" data-icon="solar:check-circle-bold-duotone"></span><span>已复制</span>'; }
    setTimeout(() => {
      if (btn) { btn.innerHTML = '<span class="iconify" data-icon="solar:copy-bold-duotone"></span><span>复制报告</span>'; }
    }, 2500);
  }).catch(() => prompt('复制以下内容：', text));
}

// ===== 导航下拉交互 =====
function toggleNavDropdown(btn) {
  const dropdown = btn.closest('.nav-dropdown');
  const isOpen = dropdown.classList.contains('open');
  document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
  if (!isOpen) dropdown.classList.add('open');
}

// ===== 悬浮二维码卡片切换 =====
function toggleFloatQR() {
  const wrap = document.getElementById('float-qr');
  wrap.classList.toggle('float-qr-collapsed');
}

// ===== 滚动显示（仅用于页面静态元素）=====
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach((e, idx) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('revealed'), idx * 80);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

// ===== 导航栏滚动效果 =====
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('nav-scrolled', window.scrollY > 50);
});

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  renderModels();
  renderPerf();
  renderFAQ();
  // 只监听页面结构中的静态 scroll-reveal 元素
  document.querySelectorAll('.scroll-reveal').forEach(el => revealObs.observe(el));
  // 点击页面其他位置关闭下拉菜单
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });
});
