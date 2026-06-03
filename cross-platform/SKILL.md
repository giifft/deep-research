---
name: pptx-generator
description: "基于 PptxGenJS 底层引擎和天机妙策局设计规范的幻灯片生成器。支持从零开始模块化构建 PPTX 文档（包括封面、目录、过渡页、内容页、封底），并集成了以“品牌绿”为核心的多套配色模板与视觉风格。触发词：PPT, PPTX, PowerPoint, 演示文稿, 幻灯片, 品牌绿, 品牌绿相关。"
license: MIT
metadata:
  version: "1.1"
  category: productivity
  sources:
    - https://gitbrent.github.io/PptxGenJS/
    - https://github.com/microsoft/markitdown
---

# PPTX 生成器 (PPTX Generator)

## 概述 (Overview)

本技能模块用于执行天机妙策局所有 PowerPoint 幻灯片的生成任务。它包含了从零开始构建演示文稿的标准设计系统、多种页面类型的排版范式以及质量保障（QA）流程。

## 快速参考 (Quick Reference)

| 任务 | 实现方案 |
|------|----------|
| 文本提取与大纲分析 | `python -m markitdown presentation.pptx` |
| 模块化零基础生成 | 使用 PptxGenJS 引擎与 5 种页面类型模板进行编写 |

| 规范要素 | 约定值 |
|------|-------|
| **画布标准尺寸** | 10" x 5.625" (LAYOUT_16x9 宽屏) |
| **色值要求** | 6位 Hex 字符（绝对禁止带 `#` 前缀） |
| **中文字体** | 微软雅黑 (Microsoft YaHei) |
| **英文字体** | Arial / Calibri |
| **页码徽章坐标** | x: 9.3", y: 5.1" (位于右下角) |
| **主题键值合约** | 严格包含 `primary`, `secondary`, `accent`, `light`, `bg` |

## 参考规章 (References)

- [设计系统规范 (design-system.md)](references/design-system.md) — 包含品牌绿配色色值、字体使用规矩与4类排版风格（Sharp/Soft/Rounded/Pill）的具体间距和圆角设定。
- [页面类型规范 (slide-types.md)](references/slide-types.md) — 定义了封面页、目录页、过渡页、内容页（6种子类型）与封底页的视觉布局框架。
- [PptxGenJS API 开发指南 (pptxgenjs-api.md)](references/pptxgenjs-api.md) — 介绍文本、图形、表格和内置图表的核心 API 使用样例。
- [避坑与 QA 指南 (pitfalls.md)](references/pitfalls.md) — 描述防损坏编译技巧以及通过 markitdown 进行占位符提取的 QA 闭环校验步骤。

---

## 主题色合约约束 (Theme Object Contract)

底层编译脚本必须向每一页的 `createSlide(pres, theme)` 注入一个结构完全相同的 `theme` 对象。其键值含义约定如下：

```javascript
const theme = {
  primary: "027C76",    // 主题深色，用于页面标题、大色块背景等
  secondary: "07978D",  // 主品牌色，用于段落正文中需要醒目强调的文字等
  accent: "0FB886",     // 高亮翠绿，用于流程步骤序号、特殊点缀等
  light: "ebf7fa",      // 浅色点缀，用于内容卡片的背景色等
  bg: "F6FBFC"          // 页面底色，用于整页幻灯片的背景底色
};
```
当检测到用户要求使用“**品牌绿**”或相关主题时，必须传入上述色值。

---

## 依赖声明 (Dependencies)

- `pip install "markitdown[pptx]"` — 提取与 QA 校验
- `npm install pptxgenjs` — 核心 PPT 生成引擎
- `npm install sharp react react-dom react-icons` — 矢量图标转 PNG（可选）
