const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
pres.author = "PPT Generator";
pres.title = "提示词工程：与AI高效对话的艺术";

// === Theme: Green UI Design Spec ===
const theme = {
  primary: "027C76",
  secondary: "07978D",
  accent: "0FB886",
  light: "ebf7fa",
  bg: "ffffff",
  muted: "7B8EA2"
};

// === Helpers ===
function addPageBadge(slide, pres, num) {
  slide.addShape(pres.shapes.OVAL, {
    x: 9.35, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: theme.secondary }
  });
  slide.addText(String(num), {
    x: 9.35, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

function addSectionBadge(slide, pres, num, color) {
  slide.addShape(pres.shapes.OVAL, {
    x: 9.35, y: 5.1, w: 0.35, h: 0.35,
    fill: { color: color }
  });
  slide.addText(String(num), {
    x: 9.35, y: 5.1, w: 0.35, h: 0.35,
    fontSize: 11, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
}

// ========== Slide 01: Cover ==========
function createSlide_01() {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Gold accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 2.2, w: 0.08, h: 1.5,
    fill: { color: theme.accent }
  });

  // Main title
  slide.addText("提示词工程", {
    x: 1.2, y: 2.0, w: 8, h: 0.8,
    fontSize: 56, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  // Subtitle
  slide.addText("与AI高效对话的艺术", {
    x: 1.2, y: 2.8, w: 8, h: 0.5,
    fontSize: 28, fontFace: "Microsoft YaHei",
    color: theme.accent,
    valign: "middle"
  });

  // English subtitle
  slide.addText("Prompt Engineering for Everyone", {
    x: 1.2, y: 3.4, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Georgia",
    color: "7B8EA2", italic: true,
    valign: "middle"
  });

  // Attribution
  slide.addText("基于 吴恩达 (Andrew Ng) 2026 新课《AI Prompting for Everyone》", {
    x: 1.2, y: 4.5, w: 8, h: 0.3,
    fontSize: 12, fontFace: "Microsoft YaHei",
    color: "7B8EA2",
    valign: "middle"
  });

  // Date
  slide.addText("2026年6月", {
    x: 1.2, y: 4.8, w: 8, h: 0.3,
    fontSize: 12, fontFace: "Calibri",
    color: "7B8EA2",
    valign: "middle"
  });
}

// ========== Slide 02: TOC ==========
function createSlide_02() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("目录", {
    x: 0.6, y: 0.4, w: 8, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("CONTENTS", {
    x: 0.6, y: 0.9, w: 3, h: 0.3,
    fontSize: 12, fontFace: "Arial",
    color: theme.muted, charSpacing: 3
  });

  // Accent line under title
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.15, w: 0.6, h: 0.03,
    fill: { color: theme.secondary }
  });

  const toc = [
    { num: "01", title: "认识AI与提示词", desc: "大语言模型分类 \u00B7 AI使用方式对比" },
    { num: "02", title: "两大核心原则", desc: "清晰指令 \u00B7 给模型思考时间" },
    { num: "03", title: "迭代与实战", desc: "迭代循环 \u00B7 推断/转换/扩展/对话" },
    { num: "04", title: "高阶技巧与避坑", desc: "AI谄媚 \u00B7 深度研究 \u00B7 渐进写作" }
  ];

  toc.forEach((item, i) => {
    const y = 1.5 + i * 1.0;

    // Number circle
    slide.addShape(pres.shapes.OVAL, {
      x: 0.6, y: y, w: 0.5, h: 0.5,
      fill: { color: theme.secondary }
    });
    slide.addText(item.num, {
      x: 0.6, y: y, w: 0.5, h: 0.5,
      fontSize: 16, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(item.title, {
      x: 1.3, y: y, w: 7, h: 0.3,
      fontSize: 22, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Description
    slide.addText(item.desc, {
      x: 1.3, y: y + 0.28, w: 7, h: 0.22,
      fontSize: 13, fontFace: "Calibri",
      color: theme.muted,
      valign: "middle"
    });

    // Divider line
    if (i < toc.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: 0.6, y: y + 0.7, w: 8.8, h: 0,
        line: { color: "EFF2F6", width: 1 }
      });
    }
  });

  addPageBadge(slide, pres, 2);
}

// ========== Slide 03: Section Divider 01 ==========
function createSlide_03() {
  const slide = pres.addSlide();
  slide.background = { color: theme.secondary };

  // Large section number
  slide.addText("01", {
    x: 0.6, y: 1.5, w: 3, h: 1.2,
    fontSize: 90, fontFace: "Arial",
    color: "FFFFFF",
    bold: true,
    valign: "middle"
  });

  // Section title
  slide.addText("认识AI与提示词", {
    x: 0.6, y: 2.7, w: 8, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  // English subtitle
  slide.addText("Understanding AI & Prompts", {
    x: 0.6, y: 3.3, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Georgia",
    color: "FFFFFF",
    italic: true
  });

  // Gold accent bar
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.8, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  addSectionBadge(slide, pres, 3, "FFFFFF");
}

// ========== Slide 04: LLM Types Comparison ==========
function createSlide_04() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("大语言模型的两类形态", {
    x: 0.6, y: 0.4, w: 8, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Left card: Base LLM
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.1, w: 4.2, h: 3.8,
    fill: { color: theme.light }, rectRadius: 0.08
  });

  slide.addText("基础模型", {
    x: 0.8, y: 1.3, w: 3.8, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("Base LLM", {
    x: 0.8, y: 1.65, w: 3.8, h: 0.25,
    fontSize: 14, fontFace: "Georgia",
    color: theme.muted, italic: true
  });

  const baseItems = [
    "根据已有文本，预测下一个词",
    "不一定遵循人类指令",
    "回答方式取决于训练数据的分布",
    "示例：问\"中国领导人是谁\"\n→ 可能返回一长串名单"
  ];

  baseItems.forEach((item, i) => {
    slide.addText([
      { text: "\u2022  ", options: { fontSize: 13, color: theme.secondary } },
      { text: item, options: { fontSize: 13, color: "262626" } }
    ], {
      x: 0.8, y: 2.1 + i * 0.45, w: 3.8, h: 0.4,
      fontFace: "Microsoft YaHei",
      valign: "top"
    });
  });

  // Right card: Instruction Tuned
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.1, w: 4.2, h: 3.8,
    fill: { color: "ebf7fa" }, rectRadius: 0.08
  });

  slide.addText("指令微调模型", {
    x: 5.4, y: 1.3, w: 3.8, h: 0.4,
    fontSize: 22, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("Instruction Tuned LLM", {
    x: 5.4, y: 1.65, w: 3.8, h: 0.25,
    fontSize: 14, fontFace: "Georgia",
    color: theme.muted, italic: true
  });

  const instItems = [
    "经过 RLHF 等指令微调训练",
    "按照人类指令给出期望回答",
    "更有帮助、更真诚、更安全",
    "当前主流AI产品的核心引擎"
  ];

  instItems.forEach((item, i) => {
    slide.addText([
      { text: "\u2713  ", options: { fontSize: 13, color: theme.secondary } },
      { text: item, options: { fontSize: 13, color: "262626" } }
    ], {
      x: 5.4, y: 2.1 + i * 0.45, w: 3.8, h: 0.4,
      fontFace: "Microsoft YaHei",
      valign: "top"
    });
  });

  addPageBadge(slide, pres, 4);
}

// ========== Slide 05: Novice vs Power User ==========
function createSlide_05() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("AI新手 vs AI高阶用户", {
    x: 0.6, y: 0.4, w: 8, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Comparison table headers
  const colX = [0.6, 3.5, 7.2];
  const colW = [2.6, 3.4, 2.4];

  // Header row background
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 1.0, w: 9.0, h: 0.5,
    fill: { color: theme.primary }
  });

  slide.addText("对比维度", {
    x: colX[0], y: 1.0, w: colW[0], h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("AI新手", {
    x: colX[1], y: 1.0, w: colW[1], h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true,
    align: "center", valign: "middle"
  });
  slide.addText("AI高阶用户", {
    x: colX[2], y: 1.0, w: colW[2], h: 0.5,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.accent, bold: true,
    align: "center", valign: "middle"
  });

  const rows = [
    ["提问难度", "问简单问题（如\"塔可饼还有吗？\"）", "布置挑战性任务，引导深度思考"],
    ["上下文", "简短提示，期望AI自行填补", "上传大量信息，让AI基于充分上下文回答"],
    ["反馈真实", "带偏见提问，得到迎合性回答", "中立提问，设定评分标准，要求客观"],
    ["AI写作", "直接让AI写，产出平庸内容", "先拟大纲\u2192评审\u2192迭代\u2192展开"],
    ["对待错误", "关注低智错误（如数r）", "关注AI真正价值：深度调研、数据分析"]
  ];

  rows.forEach((row, i) => {
    const y = 1.55 + i * 0.72;
    const bgColor = i % 2 === 0 ? theme.light : "ffffff";

    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: y, w: 9.0, h: 0.7,
      fill: { color: bgColor }
    });

    slide.addText(row[0], {
      x: colX[0], y: y, w: colW[0], h: 0.7,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center", valign: "middle"
    });

    slide.addText(row[1], {
      x: colX[1] + 0.1, y: y, w: colW[1] - 0.2, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "262626",
      align: "left", valign: "middle"
    });

    slide.addText(row[2], {
      x: colX[2] + 0.1, y: y, w: colW[2] - 0.2, h: 0.7,
      fontSize: 12, fontFace: "Microsoft YaHei",
      color: "262626",
      align: "left", valign: "middle"
    });
  });

  addPageBadge(slide, pres, 5);
}

// ========== Slide 06: Section Divider 02 ==========
function createSlide_06() {
  const slide = pres.addSlide();
  slide.background = { color: theme.secondary };

  slide.addText("02", {
    x: 0.6, y: 1.5, w: 3, h: 1.2,
    fontSize: 90, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  slide.addText("提示词两大核心原则", {
    x: 0.6, y: 2.7, w: 8, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("Two Core Principles of Prompting", {
    x: 0.6, y: 3.3, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Georgia",
    color: "FFFFFF", italic: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.8, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  addSectionBadge(slide, pres, 6, "FFFFFF");
}

// ========== Slide 07: Principle 1 - Clear Instructions ==========
function createSlide_07() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("原则一：编写清晰、具体的指令", {
    x: 0.6, y: 0.4, w: 8, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("清晰 \u2260 简短。包含更多上下文的长提示词往往效果更好", {
    x: 0.6, y: 0.9, w: 8, h: 0.3,
    fontSize: 14, fontFace: "Calibri",
    color: theme.muted
  });

  const tactics = [
    {
      num: "01",
      title: "使用分隔符",
      desc: "用 ```、\"\"\"、<> 等将指令与待处理内容分开，防止 Prompt 注入攻击"
    },
    {
      num: "02",
      title: "要求结构化输出",
      desc: "明确要求返回 JSON、HTML 等格式，方便后端程序直接解析"
    },
    {
      num: "03",
      title: "检查条件是否满足",
      desc: "设定条件分支：\"如果包含步骤则重写，不包含则回复'未提供步骤'\""
    },
    {
      num: "04",
      title: "少样本提示 (Few-shot)",
      desc: "提供一个示例（用户问XX，助手答YY），让模型模仿特定语境回答"
    }
  ];

  tactics.forEach((t, i) => {
    const y = 1.35 + i * 1.05;
    const x = i < 2 ? 0.6 : 5.2;
    const row = i % 2;
    const baseY = 1.35 + row * 1.05;

    // Blue number badge
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: baseY, w: 0.4, h: 0.4,
      fill: { color: theme.secondary }, rectRadius: 0.05
    });
    slide.addText(t.num, {
      x: x, y: baseY, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Arial",
      color: "FFFFFF", bold: true,
      align: "center", valign: "middle"
    });

    // Title
    slide.addText(t.title, {
      x: x + 0.5, y: baseY, w: 3.9, h: 0.35,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      valign: "middle"
    });

    // Description
    slide.addText(t.desc, {
      x: x + 0.5, y: baseY + 0.35, w: 3.9, h: 0.55,
      fontSize: 12, fontFace: "Calibri",
      color: "262626",
      valign: "top"
    });
  });

  addPageBadge(slide, pres, 7);
}

// ========== Slide 08: Principle 2 - Let AI Think ==========
function createSlide_08() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("原则二：给模型\"思考\"的时间", {
    x: 0.6, y: 0.4, w: 8, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("针对逻辑推理任务，防止模型急于输出而产生幻觉", {
    x: 0.6, y: 0.9, w: 8, h: 0.3,
    fontSize: 14, fontFace: "Calibri",
    color: theme.muted
  });

  // Strategy 1 card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.6, y: 1.4, w: 4.2, h: 3.5,
    fill: { color: theme.light }, rectRadius: 0.08
  });

  slide.addText("01", {
    x: 0.8, y: 1.6, w: 0.5, h: 0.4,
    fontSize: 24, fontFace: "Arial",
    color: theme.secondary, bold: true
  });

  slide.addText("指定完成任务的步骤", {
    x: 0.8, y: 2.0, w: 3.8, h: 0.35,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const s1Steps = [
    "将复杂任务拆解为明确步骤",
    "例如：1.总结文本 2.翻译 3.提取人名 4.输出JSON",
    "降低单步推理的复杂度",
    "让模型按部就班处理"
  ];
  s1Steps.forEach((step, i) => {
    slide.addText([
      { text: "\u2022  ", options: { fontSize: 13, color: theme.secondary } },
      { text: step, options: { fontSize: 13, color: "262626" } }
    ], {
      x: 0.8, y: 2.45 + i * 0.4, w: 3.8, h: 0.35,
      fontFace: "Microsoft YaHei",
      valign: "top"
    });
  });

  // Strategy 2 card
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 5.2, y: 1.4, w: 4.2, h: 3.5,
    fill: { color: "ebf7fa" }, rectRadius: 0.08
  });

  slide.addText("02", {
    x: 5.4, y: 1.6, w: 0.5, h: 0.4,
    fontSize: 24, fontFace: "Arial",
    color: theme.secondary, bold: true
  });

  slide.addText("先推导逻辑，再下结论", {
    x: 5.4, y: 2.0, w: 3.8, h: 0.35,
    fontSize: 20, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const s2Steps = [
    "要求模型先自己计算或推导",
    "再与给定答案对比判断",
    "避免模型直接看答案顺眼就判对",
    "极大降低\"强行解释\"的概率"
  ];
  s2Steps.forEach((step, i) => {
    slide.addText([
      { text: "\u2713  ", options: { fontSize: 13, color: theme.secondary } },
      { text: step, options: { fontSize: 13, color: "262626" } }
    ], {
      x: 5.4, y: 2.45 + i * 0.4, w: 3.8, h: 0.35,
      fontFace: "Microsoft YaHei",
      valign: "top"
    });
  });

  addPageBadge(slide, pres, 8);
}

// ========== Slide 09: Section Divider 03 ==========
function createSlide_09() {
  const slide = pres.addSlide();
  slide.background = { color: theme.secondary };

  slide.addText("03", {
    x: 0.6, y: 1.5, w: 3, h: 1.2,
    fontSize: 90, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  slide.addText("迭代开发与实战应用", {
    x: 0.6, y: 2.7, w: 8, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("Iterative Development & Practical Applications", {
    x: 0.6, y: 3.3, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Georgia",
    color: "FFFFFF", italic: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.8, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  addSectionBadge(slide, pres, 9, "FFFFFF");
}

// ========== Slide 10: Iteration Loop ==========
function createSlide_10() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("提示词迭代开发循环", {
    x: 0.6, y: 0.4, w: 8, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  slide.addText("没人能一次写出完美的 Prompt。提示词是改出来的。", {
    x: 0.6, y: 0.9, w: 8, h: 0.3,
    fontSize: 14, fontFace: "Calibri",
    color: theme.muted
  });

  const steps = [
    { num: "1", title: "产生想法", desc: "确定任务目标和预期输出" },
    { num: "2", title: "编写初版", desc: "写出第一版 Prompt 并运行" },
    { num: "3", title: "查看结果", desc: "评估输出是否符合预期" },
    { num: "4", title: "错误分析", desc: "分析问题所在：太长？格式不对？重点偏差？" },
    { num: "5", title: "迭代改进", desc: "修改指令，再次测试，循环往复" }
  ];

  const startX = 0.8;
  const stepW = 1.6;
  const gap = 0.15;

  steps.forEach((step, i) => {
    const x = startX + i * (stepW + gap);
    const y = 1.6;

    // Circle with number
    slide.addShape(pres.shapes.OVAL, {
      x: x + stepW/2 - 0.35, y: y, w: 0.7, h: 0.7,
      fill: { color: i === 0 ? theme.secondary : (i === 4 ? theme.accent : "EFF2F6") }
    });
    slide.addText(step.num, {
      x: x + stepW/2 - 0.35, y: y, w: 0.7, h: 0.7,
      fontSize: 20, fontFace: "Arial",
      color: i === 0 || i === 4 ? "FFFFFF" : theme.primary,
      bold: true, align: "center", valign: "middle"
    });

    // Arrow between steps
    if (i < steps.length - 1) {
      slide.addShape(pres.shapes.LINE, {
        x: x + stepW/2 + 0.4, y: y + 0.35,
        w: gap + 0.2, h: 0,
        line: { color: theme.secondary, width: 2, beginArrowType: "none", endArrowType: "triangle" }
      });
    }

    // Title
    slide.addText(step.title, {
      x: x, y: y + 0.85, w: stepW, h: 0.3,
      fontSize: 14, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true,
      align: "center"
    });

    // Description
    slide.addText(step.desc, {
      x: x, y: y + 1.15, w: stepW, h: 0.6,
      fontSize: 10, fontFace: "Calibri",
      color: theme.muted,
      align: "center"
    });
  });

  // Bottom example box
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.8, y: 3.6, w: 8.4, h: 1.5,
    fill: { color: theme.light }, rectRadius: 0.08
  });

  slide.addText("\u2699\uFE0F 实战案例：编写产品营销文案", {
    x: 1.0, y: 3.7, w: 8, h: 0.3,
    fontSize: 13, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const iterations = [
    "V1 \u2192 文案太长 \u2192 限制字数（50词内）",
    "V2 \u2192 侧重点不对 \u2192 强调特定技术细节或受众",
    "V3 \u2192 需要表格呈现 \u2192 要求输出 HTML 格式"
  ];

  iterations.forEach((text, i) => {
    slide.addText(text, {
      x: 1.0, y: 4.05 + i * 0.32, w: 8, h: 0.28,
      fontSize: 11, fontFace: "Calibri",
      color: "262626"
    });
  });

  addPageBadge(slide, pres, 10);
}

// ========== Slide 11: Four Practical Capabilities ==========
function createSlide_11() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("四大实战能力", {
    x: 0.6, y: 0.4, w: 8, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  const cards = [
    {
      title: "推断 Inferring",
      desc: "情感分析 \u00B7 实体提取 \u00B7 主题识别",
      detail: "无需训练多个模型，一个 Prompt 搞定所有分类和分析任务",
      color: "ebf7fa"
    },
    {
      title: "转换 Transforming",
      desc: "翻译 \u00B7 语气转换 \u00B7 格式转换",
      detail: "万能\"语义胶水\"，消弭语言、格式与风格的鸿沟",
      color: "ebf7fa"
    },
    {
      title: "扩展 Expanding",
      desc: "创意生成 \u00B7 自动化回复",
      detail: "平衡\"创意\"与\"逻辑\"，在温度控制下生成精准表达",
      color: "e0f7ec"
    },
    {
      title: "对话 Chatting",
      desc: "上下文管理 \u00B7 系统角色设定",
      detail: "通过System/User/Assistant角色构建记忆交互",
      color: "F6FBFC"
    }
  ];

  cards.forEach((card, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 0.6 + col * 4.6;
    const y = 1.1 + row * 2.1;

    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: x, y: y, w: 4.4, h: 1.9,
      fill: { color: card.color }, rectRadius: 0.08
    });

    slide.addText(card.title, {
      x: x + 0.15, y: y + 0.1, w: 4.1, h: 0.35,
      fontSize: 18, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });

    slide.addText(card.desc, {
      x: x + 0.15, y: y + 0.45, w: 4.1, h: 0.25,
      fontSize: 12, fontFace: "Calibri",
      color: theme.muted
    });

    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.15, y: y + 0.75, w: 0.5, h: 0.03,
      fill: { color: theme.secondary }
    });

    slide.addText(card.detail, {
      x: x + 0.15, y: y + 0.85, w: 4.1, h: 0.6,
      fontSize: 11, fontFace: "Calibri",
      color: "262626",
      valign: "top"
    });
  });

  addPageBadge(slide, pres, 11);
}

// ========== Slide 12: Section Divider 04 ==========
function createSlide_12() {
  const slide = pres.addSlide();
  slide.background = { color: theme.secondary };

  slide.addText("04", {
    x: 0.6, y: 1.5, w: 3, h: 1.2,
    fontSize: 90, fontFace: "Arial",
    color: "FFFFFF", bold: true,
    valign: "middle"
  });

  slide.addText("高阶技巧与避坑指南", {
    x: 0.6, y: 2.7, w: 8, h: 0.6,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("Advanced Techniques & Pitfalls", {
    x: 0.6, y: 3.3, w: 8, h: 0.4,
    fontSize: 16, fontFace: "Georgia",
    color: "FFFFFF", italic: true
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.8, w: 2, h: 0.04,
    fill: { color: theme.accent }
  });

  addSectionBadge(slide, pres, 12, "FFFFFF");
}

// ========== Slide 13: Advanced Tips & Pitfalls ==========
function createSlide_13() {
  const slide = pres.addSlide();
  slide.background = { color: theme.bg };

  slide.addText("高阶心法与避坑指南", {
    x: 0.6, y: 0.4, w: 8, h: 0.5,
    fontSize: 32, fontFace: "Microsoft YaHei",
    color: theme.primary, bold: true
  });

  // Left column: Advanced Techniques
  slide.addText("\u2705 高阶心法", {
    x: 0.6, y: 1.0, w: 4.2, h: 0.35,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: theme.secondary, bold: true
  });

  const techniques = [
    { title: "对抗AI谄媚", desc: "中立提问 + 客观评分标准 + 开启新对话获取不同视角" },
    { title: "深度研究 (Deep Research)", desc: "AI自主制定计划、多源并行搜索、评估来源、多轮循环" },
    { title: "渐进式大纲法", desc: "找证据\u2192 头脑风暴大纲\u2192 评审迭代\u2192 扩展要点\u2192 生成正文" },
    { title: "跨模型审查", desc: "用一个AI审查另一个AI的输出，定期尝试不同模型" },
    { title: "分块编辑", desc: "一次只编辑一段，逐段与AI迭代，而非一次性编辑全文" }
  ];

  techniques.forEach((item, i) => {
    const y = 1.4 + i * 0.82;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.65, y: y, w: 0.18, h: 0.18,
      fill: { color: theme.secondary }
    });
    slide.addText(item.title, {
      x: 0.95, y: y - 0.02, w: 3.8, h: 0.25,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(item.desc, {
      x: 0.95, y: y + 0.2, w: 3.8, h: 0.3,
      fontSize: 11, fontFace: "Calibri",
      color: "262626"
    });
  });

  // Right column: Pitfalls
  slide.addText("\u26A0\uFE0F 五大陷阱", {
    x: 5.2, y: 1.0, w: 4.2, h: 0.35,
    fontSize: 18, fontFace: "Microsoft YaHei",
    color: "FFA200", bold: true
  });

  const pitfalls = [
    { title: "AI 谄媚（迎合用户）", desc: "用中立提问替代偏见提问，要求\"客观公平地评论\"" },
    { title: "AI 垃圾内容（Slop）", desc: "使用渐进式大纲法，避免空洞排比和模糊表达" },
    { title: "过时/不可靠来源", desc: "明确指定权威来源（如WHO、FDA），避免 Reddit 依赖" },
    { title: "无关上下文干扰", desc: "切换主题时开启新对话，保持上下文切题" },
    { title: "低效的一次性编辑", desc: "分块编辑 + 跨模型审查，添加\"如不确定请说明\"" }
  ];

  pitfalls.forEach((item, i) => {
    const y = 1.4 + i * 0.82;
    slide.addShape(pres.shapes.OVAL, {
      x: 5.25, y: y, w: 0.18, h: 0.18,
      fill: { color: "FFA200" }
    });
    slide.addText(item.title, {
      x: 5.55, y: y - 0.02, w: 3.8, h: 0.25,
      fontSize: 13, fontFace: "Microsoft YaHei",
      color: theme.primary, bold: true
    });
    slide.addText(item.desc, {
      x: 5.55, y: y + 0.2, w: 3.8, h: 0.3,
      fontSize: 11, fontFace: "Calibri",
      color: "262626"
    });
  });

  addPageBadge(slide, pres, 13);
}

// ========== Slide 14: Summary ==========
function createSlide_14() {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };

  // Gold accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8, y: 0.8, w: 0.08, h: 0.6,
    fill: { color: theme.accent }
  });

  slide.addText("核心要点总结", {
    x: 1.2, y: 0.8, w: 8, h: 0.5,
    fontSize: 36, fontFace: "Microsoft YaHei",
    color: "FFFFFF", bold: true
  });

  slide.addText("Key Takeaways", {
    x: 1.2, y: 1.3, w: 8, h: 0.3,
    fontSize: 16, fontFace: "Georgia",
    color: theme.accent, italic: true
  });

  const takeaways = [
    "清晰 \u2260 简短 \u2014\u2014 消除歧义、提供充分上下文",
    "给模型思考时间 \u2014\u2014 指定步骤，先推导再结论",
    "提示词是改出来的 \u2014\u2014 Idea \u2192 编写 \u2192 测试 \u2192 分析 \u2192 改进",
    "AI 是副驾驶，你才是机长 \u2014\u2014 主动设置护栏，对抗谄媚",
    "善用分层工具 \u2014\u2014 预训练知识 / 联网搜索 / 深度研究 / 代码执行"
  ];

  takeaways.forEach((item, i) => {
    slide.addShape(pres.shapes.OVAL, {
      x: 1.0, y: 1.9 + i * 0.6, w: 0.18, h: 0.18,
      fill: { color: theme.accent }
    });
    slide.addText(item, {
      x: 1.35, y: 1.85 + i * 0.6, w: 8, h: 0.3,
      fontSize: 15, fontFace: "Microsoft YaHei",
      color: "FFFFFF",
      valign: "middle"
    });
  });

  // Closing quote
  slide.addText("\u201cAI 的输出质量，取决于你的输入维度\u201d", {
    x: 1.2, y: 4.6, w: 8, h: 0.3,
    fontSize: 13, fontFace: "Georgia",
    color: theme.accent, italic: true
  });

  slide.addText("\u2014 Andrew Ng, DeepLearning.AI", {
    x: 1.2, y: 4.9, w: 8, h: 0.25,
    fontSize: 11, fontFace: "Calibri",
    color: "7B8EA2"
  });

  addSectionBadge(slide, pres, 14, theme.accent);
}

// ========== Generate ==========
createSlide_01();
createSlide_02();
createSlide_03();
createSlide_04();
createSlide_05();
createSlide_06();
createSlide_07();
createSlide_08();
createSlide_09();
createSlide_10();
createSlide_11();
createSlide_12();
createSlide_13();
createSlide_14();

pres.writeFile({ fileName: "./output/提示词工程_与AI高效对话的艺术.pptx" });
console.log("PPT generated successfully!");
