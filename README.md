# 天机妙策局 (deep-research)

> **自进化 AI 深度研究团队**：从研究课题到高水准政企汇报材料与符合 UI 规范的演示文稿。通过 12 位三国谋士的多角色智能协同、多文体大纲自适应、严密的数据量化换算规约与闭环自进化机制，为政企及科研用户提供一站式深度调研与三模 PPT 生成能力。

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License MIT">
  <img src="https://img.shields.io/badge/Type-Multi--Agent-blue.svg" alt="Type Multi-Agent">
  <img src="https://img.shields.io/badge/Format-Marp%20%7C%20VBA%20%7C%20PptxGenJS-green.svg" alt="Format Marp/VBA/PptxGenJS">
  <img src="https://img.shields.io/badge/AgentSkills-Standard-orange.svg" alt="AgentSkills Standard">
</p>

---

## 🌟 核心特性

- 👥 **12+1 多角色协同工作流**：内置由主理人**诸葛亮**、研究架构师**鲁肃**领衔的 12 人专业研究团队。同时在 Phase 2.5 可根据极度前沿或垂直课题，动态进化出第 13 位**特邀专家**挂载专属视角。
- 🎨 **默认品牌绿 UI 规范 PPT**：以 [核心 UI 设计规范 (ui-design-spec.md)](file:///Users/lan/Rules_沉淀/deep-research/cross-platform/references/ui-design-spec.md)（品牌绿主题体系）为最高优先级 UI 规范。在未指定配色时默认以品牌绿（主色 `#027C76`、主品牌绿 `#07978D`、高亮 `#0FB886` 等）作为输出配色。
- 📐 **可视化与数据换算规约**：郭嘉和徐庶会严格核验所有量化数据，自动执行万/亿级单位换算，所有数字强制保留千分位并保留两位小数（例如 `1,000.00元` / `15.50万元` / `2.06亿元`）。
- 🖥️ **三模 PPT 演示文稿生成**：报告总撰**陈琳**在 Phase 5 自动整合并发布：
  1. **Marp Markdown 格式**（包含 Flex 双栏、指标卡 HTML 容器等，可直接导入 AI PPT 工具渲染）。
  2. **PowerPoint VBA 代码**（可在 PowerPoint 中运行自动排版绘制）。
  3. **PptxGenJS 模块代码**（支持在本地 Node.js 环境一键编译组装成实体 PPTX 文件）。
- 🔄 **闭环自进化机制 (Self-Evolution)**：特设 `Phase 6：复盘与自我进化` 闭环。系统在复盘中提炼规约自动写入 [evolution_log.md](file:///Users/lan/Rules_沉淀/deep-research/cross-platform/evolution_log.md)，在下一次运行前自动载入合并，实现永久自迭代。
- 💼 **多文体大纲自适应**：自动规划**深度研究报告**、**定期工作总结 (月/季/年报)**、**工作专项汇报**、**项目实施方案**、**专利交底书**和**学术论文**。

---

## 📂 项目结构

```text
deep-research/
├── cross-platform/          # 🔑 跨平台通用配置及 Prompt
│   ├── orchestrator.md      # 核心主控 Prompt (复制即用，已集成默认品牌绿与多配色支持)
│   ├── SKILL.md             # YAML Frontmatter 技能入口描述
│   ├── evolution_log.md     # 🛠️ 自进化规约日志
│   ├── MANUAL.md            # 📖 详细使用与提问手册
│   ├── references/          # 📚 核心设计与 API 指南
│   │   ├── ui-design-spec.md  # 🎨 核心 UI 设计规范 (品牌绿默认首推)
│   │   ├── design-system.md   # 设计系统规约 (间距、圆角与 5 大配色方案)
│   │   ├── slide-types.md     # 5类幻灯片排版模板与子类型
│   │   ├── pptxgenjs-api.md   # PptxGenJS API 编写教程
│   │   └── pitfalls.md        # 避坑与 QA 校验流程 (markitdown)
│   └── agents/              # 12 个三国谋士独立角色 Prompt
│
├── expert/                  # 插件包目录
│   └── tianji-my-expert.zip # WorkBuddy 专属专家面板插件包
│
├── skill/                   # 技能包目录
│   └── tianji-my-skill.zip  # 一键导入激活团队技能
│
├── README.md                # 本说明文件
└── package.json             # 依赖声明文件
```

---

## 🚀 快速启动

### 方式一：Web AI 对话（最快捷）
1. 打开 [cross-platform/orchestrator.md](file:///Users/lan/Rules_沉淀/deep-research/cross-platform/orchestrator.md)，全选并复制其内容。
2. 粘贴到任意主流 AI 聊天框（如 Claude, DeepSeek, ChatGPT, Kimi 等）中发送。
3. 输入您的课题需求，例如：
   ```text
   帮我深度调研中国新能源汽车产业的科技创新路径，重点对标特斯拉，产出二季度工作总结汇报 PPT。
   ```

### 方式二：IDE 规则挂载（开发效率最高）
将 `cross-platform` 中的配置文件放置在项目根目录下：
- Cursor 工具会自动读取 `.cursorrules`
- Claude Code 会自动读取 `CLAUDE.md`
- Gemini / Antigravity 会自动读取 `.gemini/instructions.md`

### 方式三：WorkBuddy 插件导入
1. 将 [tianji-my-expert.zip](file:///Users/lan/Rules_沉淀/deep-research/expert/tianji-my-expert.zip) 导入 WorkBuddy 专家中心。
2. 激活后，在侧边栏即可直接调度“天机妙策局”专家团队开始 6 阶段协作流程。

---

## 📅 六阶段自进化工作流

1. **Phase 1：多维扫描调研**：贾诩（政策）、荀彧（成效）、周瑜（对标）、郭嘉（数据）、马钧（专利）五线并行调研，输出统一摘要。
2. **Phase 2：大纲/PPT 分页规划**：鲁肃基于扫描摘要规划章节或 10-15 页 PPT 分页演示大纲（预设排版结构）。
3. **Phase 2.5：特邀专家进化**：评估课题深度，动态进化出第 13 位专家。
4. **Phase 3：单页 Slide 撰写与循环审稿**：对应角色撰写 -> 徐庶进行 8 维质量与 UI 规范审稿 -> 曹植精准修订（最多 3 轮）。
5. **Phase 4-5：对策部署与最终交付**：司马懿输出路线图 -> 陈琳总撰并发布普通文本或三模 PPT 演示文稿（默认使用品牌绿规范配色）。
6. **Phase 6：复盘与自我进化**：诸葛亮复盘总结，提炼新规约并自动追加至 `evolution_log.md` 中。

---

## 🎨 PPT 配色方案

在进行 PPT 渲染时，默认首推符合 UI 规范的**品牌绿**。为了满足多样化需求，您也可以在指令中指定使用其他优秀配色方案：

| 配色名称 | 触发词 | 风格 / 特点 | 适用场景 |
|---------|-------|------------|---------|
| **品牌绿 (默认)** | 品牌绿 / 绿色主题 | 专业、稳健、双碳科技 | 大型央企相关汇报、绿色发展、政企合作 |
| **商务权威** | 商务 / 经典 / 深蓝 | 正式、经典、深蓝背景 | 年度报告、财务分析、企业介绍 |
| **科技之夜** | 科技 / 暗黑 / 数字化 | 深邃、极客、高对比度黄蓝 | 数字化转型、前沿技术发布、新能源 |
| **生态自然** | 生态 / 环保 / 乡村振兴 | 大地暖色、生态绿、护眼 | 农业科技、绿色生态保护、历史文化 |
| **白金奢华** | 高端 / 咨询 / 金融 | 极简白金底、科技蓝点缀 | 高端咨询报告、智囊团研究、金融科技 |

---

## ⚖️ 许可与致谢

- 本团队生成的所有结论与代码均由 AI 自动生成，重要决策请经过专业人员核验确认。
- 本项目部分能力参考了以下开源项目，详见 [`cross-platform/ATTRIBUTION.md`](cross-platform/ATTRIBUTION.md)：
  - [skills-minimax (pptx-generator)](https://github.com/MiniMax-AI/skills) (MIT 许可) — 提供了 PptxGenJS 模块化与 Slide 分类设计灵感。
  - [patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) (MIT 许可) — 提供了专利工程师交底书的格式框架。
