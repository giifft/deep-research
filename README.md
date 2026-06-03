# 天机妙策局.skill

> 从研究课题到高水准的政企汇报材料与双模 PPT：12位三国谋士、多文体大纲自适应、数据千分位规范、自进化闭环。

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License MIT">
  <img src="https://img.shields.io/badge/Type-Multi--Agent-blue.svg" alt="Type Multi-Agent">
  <img src="https://img.shields.io/badge/Format-Marp%20%7C%20VBA%20%7C%20Markdown-green.svg" alt="Format Marp/VBA/MD">
  <img src="https://img.shields.io/badge/AgentSkills-Standard-orange.svg" alt="AgentSkills Standard">
</p>

---

<p align="center">
  课题定位很高，但不知道怎么快速契合政策站位？<br>
  写汇报材料需要亮点成效和数据瓶颈，但找不到经典的公文框架？<br>
  对标世界一流，却缺乏清晰的数据对比维度和千分位规范？<br>
  写完了报告，还要为手动拷字排版 PPT 幻灯片感到痛苦？<br>
  <b>本 Skill 按 AgentSkills 约定编排全流程，支持自进化日志，分步可读可迭代。</b>
</p>

---

<p align="center">
  <a href="#功能特性">功能特性</a> · 
  <a href="#快速启动">快速启动</a> · 
  <a href="#项目结构">项目结构</a> · 
  <a href="#支持的工具">支持的工具</a> · 
  <a href="#六阶段自进化工作流">自进化工作流</a> · 
  <a href="#经典材料与可视化规范">可视化规范</a> · 
  <a href="#许可">许可</a>
</p>

---

## 功能特性

- 🏛️ **多文体大纲自适应**：内置鲁肃的大纲规划模型，支持自动生成**深度研究报告**、**定期工作总结（月/季/年报）**、**工作专项汇报**、**项目实施方案**、**专利交底书**和**学术论文**。
- 🎨 **三模 PPT 演示文稿生成**：自动将文字内容转化为符合 UI 规范的 **Marp Markdown 演示文稿**、一键自动排版的 **VBA 宏代码**，以及可由编译引擎直接组装生成的 **PptxGenJS 模块化代码**。
- 📐 **可视化与数据换算规约**：自动对大额数值执行万/亿级单位换算，所有数字强制使用千分位并保留两位小数（如 `1,000.00元` / `15.50万元` / `2.06亿元`）。
- 🔄 **第一优先级 UI 规范自适应**：以项目根目录下的 `UI_DESIGN_SPEC.md` 以及 `UI_DESIGN_SPEC_yth.md`（国网绿主题体系）为**第一优先级 UI 规范**。支持“**国网绿**”/“**国家电网**”触发词自动切换对应绿色风格底色和组件规范。
- 🔄 **闭环自进化机制**：特设 `Phase 6：复盘与自我进化` 闭环。诸葛亮会组织徐庶和曹植回顾审稿驳回点，总结并生成进化规约写入 `evolution_log.md` 中，供下次前置合并，实现系统永久性迭代。
- 👥 **动态特邀专家 (第13人)**：针对极度垂直前沿的交叉学科课题，在 Phase 2.5 自动进化出专属特邀专家参与撰写。

---

## 快速启动

**最快 1 分钟上手**：
1. 打开 [cross-platform/orchestrator.md](file:///Users/lan/Rules_沉淀/deep-research/cross-platform/orchestrator.md)，全选复制。
2. 粘贴到任何 AI 工具（如 ChatGPT, Claude, DeepSeek）的对话窗口中。
3. 输入您的研究或材料撰写需求：
   ```text
   帮我深度调研中国新能源汽车产业的科技创新路径，重点对标特斯拉，用国网绿配色产出二季度工作总结汇报 PPT。
   ```

---

## 项目结构

```text
├── cross-platform/      ← 🔑 跨平台通用（从这里开始）
│   ├── orchestrator.md  ← 核心主控 Prompt（复制即用，已集成国网绿触发与三模 PPT）
│   ├── SKILL.md         ← YAML Frontmatter 技能入口描述
│   ├── references/      ← 📚 核心设计与 API 指南
│   │   ├── design-system.md  ← 设计系统规约（国网绿默认首推）
│   │   ├── slide-types.md    ← 5类幻灯片排版模板与子类型
│   │   ├── pptxgenjs-api.md  ← PptxGenJS API 编写教程
│   │   └── pitfalls.md       ← 避坑与 QA 校验流程（markitdown）
│   ├── agents/          ← 12 个三国谋士独立角色 Prompt
│   ├── MANUAL.md        ← 📖 详细使用与提问手册
│   ├── evolution_log.md ← 🛠️ 自进化规约日志
│   ├── README.md        ← 跨平台快速入门说明
│   └── (各种 AI IDE 规则文件，如 .cursorrules, CLAUDE.md 等)
│
├── expert/              ← 插件包目录
│   └── tianji-my-expert.zip  ← WorkBuddy 专属自进化专家面板（含中国风圆形头像）
│
├── skill/               ← 技能包目录
│   └── tianji-my-skill.zip   ← 一键导入激活团队技能
│
└── third-party/         ← 第三方引用声明
```

---

## 六阶段自进化工作流

1. **Phase 1：多维扫描调研**：贾诩（政策大局）、荀彧（成效亮点）、周瑜（行业对标）、郭嘉（数据指标）、马钧（专利格局）五线并行扫描。
2. **Phase 2：大纲/PPT大纲规划**：鲁肃基于调研摘要规划 3-5 章大纲或 10-15 页 PPT 分页演示大纲。
3. **Phase 2.5：特邀专家进化**：诸葛亮与鲁肃评估课题深度，动态进化出第 13 位专家。
4. **Phase 3：逐章研究与单页 Slide 撰写**：对应研究员/专家撰写 -> 徐庶进行 8 维质量与 UI 规范审稿 -> 曹植精准修订（上限 3 轮）。
5. **Phase 4-5：战略部署与最终交付**：司马懿输出对策与实施路线图 -> 陈琳总撰发布普通文本，或者包含 Marp、VBA、PptxGenJS 的三模演示文稿（以国网绿 UI 规范为第一优先级）。
6. **Phase 6：复盘与自我进化**：主编诸葛亮总结审稿日志，导出进化规约写入 `evolution_log.md`。

---

## 经典材料与可视化规范

天机妙策局行文严格遵循 **“高度、深度、力度”三度标准**：
- **政治高度**：词汇规范，聚焦主责主业，段落整饬对仗。
- **理论深度**：段落首句**“结论先行”**，随后用“数据/案例支撑”。
- **落地力度**：对策建议必须是**“动词 + 具体对象 + 预期结果”**的实效结构。

PPT 可视化配色（第一优先级为 [UI_DESIGN_SPEC_yth.md](file:///Users/lan/Rules_沉淀/deep-research/cross-platform/UI_DESIGN_SPEC_yth.md)）：
- **国网绿/国家电网（默认首推）**：
  - `primary`: `027C76` (深色/标题)
  - `secondary`: `07978D` (主品牌色/正文)
  - `accent`: `0FB886` (高亮/翠绿装饰)
  - `light`: `ebf7fa` (高亮卡片背景)
  - `bg`: `F6FBFC` (幻灯片大背景)

---

## 许可与致谢

本团队由 AI 驱动，重要决策请经专业人员核验。

本项目部分能力参考了以下开源项目（均为 MIT 许可证），详见 [`cross-platform/ATTRIBUTION.md`](cross-platform/ATTRIBUTION.md)：

| 引用项目 | 作者 | 许可证 | 引用范围 |
|---------|------|-------|---------|
| [skills-minimax (pptx-generator)](https://github.com/MiniMax-AI/skills) | MiniMax | MIT © 2026 MiniMax | PPT 生成能力（PptxGenJS 模块化架构、Slide 类型体系、设计系统、QA 流程） |
| [patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) | handsomestWei | MIT © 2026 handsomestWei | 马钧（专利工程师）交底书结构、CNIPA 查新方法论 |
