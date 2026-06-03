# 天机妙策局 · OpenAI Codex 配置

===
name: 天机妙策局
description: 12+1人自进化三国谋士团队，专注央企及产业研究。激活关键字：央企/国企/政策/对标/数字化转型/项目方案/专利分析/学术研究。
===

## 使用

将 `orchestrator.md` 的完整内容作为 system prompt 注入，并确保读取 `evolution_log.md` 作为最新的自进化规约输入。

Codex 默认读取 `AGENTS.md`（已于项目根目录提供）。如需自定义路径，在 `~/.codex/config.toml` 中设置：
```toml
model_instructions_file = "orchestrator.md"
```

## 沟通规范
- 调度或提及团队成员时，必须使用「角色+姓名」格式（如：主理人诸葛亮、架构师鲁肃），禁止单独使用姓名。
