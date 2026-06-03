# 天机妙策局 · 跨平台深度研究团队

> 12 位三国谋士组成的**自进化** AI 团队，能在任何 AI 工具中使用的国资央企与产业深度研究系统。

## 🚀 3 种使用方式

### 方式一：一键启动（最简单）
复制 `orchestrator.md` 的**全部内容**，粘贴到任何 AI 工具对话中，然后发送你的研究需求：
```
帮我深度调研中国能源央企数字化转型的现状、挑战与路径
```
AI 会自动扮演主理人诸葛亮，按 **6 阶段自进化工作流**调度团队。

### 方式二：文件加载（更高效）

将文件夹放到项目根目录。以下工具会**自动识别**对应配置文件：

| 工具 | 配置文件 | 状态 |
|------|---------|:--:|
| **WorkBuddy** | 专家包 (`expert/tianji-my-expert.zip`) 或直接复制 `orchestrator.md` | ✅ |
| **CodeBuddy（腾讯）** | `CODEBUDDY.md` + `.codebuddy/agents/` + rules | ✅ |
| **Trae Solo（字节）** | `.trae/rules/soe-research-team.md` | ✅ |
| **Cursor** | `.cursorrules` | ✅ |
| **Claude Code** | `CLAUDE.md` | ✅ |
| **OpenAI Codex** | `AGENTS.md` / `CODEX.md` | ✅ |
| **GitHub Copilot** | `.github/copilot-instructions.md` | ✅ |
| **Antigravity (Google)** | `.gemini/instructions.md` | ✅ |
| **Windsurf** | `.windsurfrules` | ✅ |
| **Qoder (阿里)** | `.qoder.md` | ✅ |
| **Aider** | `AGENTS.md` 或 `CONVENTIONS.md` | ✅ |
| **Cline / Roo Code** | `AGENTS.md` 或 `.clinerules` | ✅ |
| **Cody (Sourcegraph)** | `AGENTS.md` | ✅ |
| **Amazon Q** | `AGENTS.md` | ✅ |
| **通义灵码** | `AGENTS.md` | ✅ |
| **其他工具** | `AGENTS.md`（通用标准） | ✅ |

> 💡 `AGENTS.md` 已成为行业通用标准，绝大多数 AI 编程工具都支持。如果你的工具不在列表中，试试看——大概率能用。

### 方式三：角色切换（最灵活）
需要特定角色时，复制 `agents/` 目录下对应角色的 prompt：
```
请以"{角色名}"的身份，{任务描述}
```
参照 `agents/{角色文件}.md`。

---

## 📂 文件结构

```
天机妙策局/
├── README.md              ← 本文件（快速入门）
├── MANUAL.md              ← 📖 完整使用手册
├── ATTRIBUTION.md         ← 📜 第三方开源声明
├── evolution_log.md       ← 🛠️ 核心：自进化日志与规约
│
├── orchestrator.md        ← 🔑 核心主控：复制即用
├── .cursorrules           ← Cursor 规则
├── CLAUDE.md              ← Claude Code 规则
├── AGENTS.md              ← 通用 / Codex / Copilot / Aider / Cody / Q
├── CODEBUDDY.md           ← CodeBuddy（腾讯）
├── .codebuddy/
│   ├── agents/
│   │   └── soe-chief-editor.md ← CodeBuddy 专用 agent
│   └── rules/
│       └── soe-research.md      ← CodeBuddy 规则自动激活
├── .trae/
│   └── rules/
│       └── soe-research-team.md ← Trae Solo（字节）
├── CODEX.md               ← Codex 专用
├── .windsurfrules         ← Windsurf 规则
├── .qoder.md              ← Qoder 规则
├── .gemini/
│   └── instructions.md    ← Antigravity / Gemini 规则
├── .github/
│   └── copilot-instructions.md ← GitHub Copilot 规则
└── agents/                ← 12 个独立角色
    ├── zhugeliang-orchestrator.md
    ├── lusu-planner.md
    ├── jiaxu-policy.md
    ├── xunyu-business.md
    ├── zhouyu-industry.md
    ├── guojia-data.md
    ├── xushu-reviewer.md
    ├── caozhi-reviser.md
    ├── simayi-strategist.md
    ├── majun-patent.md
    ├── wangcan-academic.md
    └── chenlin-writer.md
```

## 🎯 团队能力与分工

| 维度 | 负责人 | 核心专长 |
|------|--------|--------|
| 🎯 统筹调度 | 主理人·诸葛亮 | 流程推进、复盘总结、规则沉淀 |
| 📋 架构规划 | 研究架构师·鲁肃 | 大纲逻辑、特邀专家配置 |
| 🏛️ 政治政策 | 政策分析师·贾诩 | 部委规章/国家规划与五年政策追踪 |
| 🏛️ 战略站位 | 经营战略师·荀彧 | 央企主责主业定位、商业模式、政治站位 |
| 🏭 行业对标 | 对标研究员·周瑜 | 行业全景扫描、世界一流企业对标 |
| 📊 量化数据 | 数据分析师·郭嘉 | 财务建模、量化指标对标与研发效率分析 |
| 🔍 质量防线 | 审稿人·徐庶 | 7 维质量审查与红线把关 |
| ✏️ 精准修订 | 修订师·曹植 | 审稿意见落地、文风润色 |
| 🧭 战略防线 | 战略分析师·司马懿 | SWOT/风险评估、实施路径规划 |
| 🔬 知识产权 | 专利工程师·马钧 | 专利技术分析、CNIPA查新、交底书撰写 |
| 📚 学术前沿 | 学术论文师·王粲 | 文献综述、学术格式规范、理论梳理 |
| 📝 汇编排版 | 报告总撰·陈琳 | 引言/结论统筹、参考文献去重、格式输出 |
| 👥 垂直前沿 | 动态特邀专家 | Phase 2.5 进化生成，补充细分行业顶级深度 |

---

## 💡 试试这样问

- "帮我深度调研中国能源央企数字化转型的现状、挑战与路径"
- "系统分析国资委最新政策对央企科技创新的影响"
- "帮我写一份某央企在AI领域的项目实施方案"
- "对标分析三大电信央企的经营效率与国际一流差距"

## ⚠️ 免责

本团队由 AI 驱动，重要决策请经专业人员核验。所有引用来源请在重要场景下二次核验。
