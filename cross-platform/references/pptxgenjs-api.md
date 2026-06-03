# PptxGenJS API 开发指南 (PptxGenJS Tutorial)

本指南针对天机妙策局（deep-research）幻灯片生成器进行了适配，精简保留了最常用、最稳定的 API 调用方式，并附带防坑指南。

---

## 1. 基础初始化与保存 (Setup & Basic Structure)

```javascript
const pptxgen = require("pptxgenjs");

// 每次生成必须创建全新的实例，禁止复用实例
let pres = new pptxgen();

// 设置为标准 16:9 画布布局 (10" x 5.625")
pres.layout = 'LAYOUT_16x9'; 

// 新增幻灯片页
let slide = pres.addSlide();

// 保存为文件
pres.writeFile({ fileName: "output.pptx" });
```

---

## 2. 文本与排版 (Text & Formatting)

### 常用属性定义
- `x`, `y`, `w`, `h`：尺寸及位置，单位为**英寸**。
- `fontSize`：字号大小，单位为 `pt`。
- `fontFace`：字体名称，中文必用 `"Microsoft YaHei"`。
- `color`：6 位 Hex 颜色值（**绝对不能带 `#`**），如 `"027C76"`。
- `bold`：是否加粗（`true`/`false`）。
- `align`：水平对齐（`"left"`, `"center"`, `"right"`）。
- `valign`：垂直对齐（`"top"`, `"middle"`, `"bottom"`）。
- `margin`：内边距，当需要文字边缘与其他 Shape 精准贴合时，请显式设为 `margin: 0`。

### 示例代码

```javascript
// 1. 添加普通单行文本
slide.addText("核心成效展示", {
  x: 0.5, y: 0.3, w: 9, h: 0.5,
  fontSize: 28, fontFace: "Microsoft YaHei",
  color: theme.primary, bold: true,
  margin: 0
});

// 2. 添加多行富文本 (使用数组，多行之间使用 breakLine: true)
slide.addText([
  { text: "第一要点：推进数字化转型\n", options: { bold: true, color: theme.secondary, breakLine: true } },
  { text: "第二要点：落实双碳新能源布局", options: { color: theme.accent } }
], {
  x: 0.5, y: 1.2, w: 4.5, h: 2.0,
  fontSize: 14, fontFace: "Microsoft YaHei"
});
```

---

## 3. 图形绘制 (Shapes)

在进行图形绘制时，使用 `pres.shapes` 获取内置枚举。

```javascript
// 绘制矩形 (RECTANGLE)
slide.addShape(pres.shapes.RECTANGLE, {
  x: 1.0, y: 2.0, w: 3.0, h: 1.5,
  fill: { color: "FFFFFF" },
  line: { color: "E8E8E8", width: 1 }
});

// 绘制圆角矩形 (ROUNDED_RECTANGLE，可设置圆角比例 0.0 ~ 1.0)
slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
  x: 4.5, y: 2.0, w: 3.0, h: 1.5,
  fill: { color: "EBF7FA" },
  rectRadius: 0.1  // 圆角半径
});

// 绘制线条 (LINE)
slide.addShape(pres.shapes.LINE, {
  x: 1.0, y: 4.0, w: 6.0, h: 0,
  line: { color: "027C76", width: 2, dashType: "dash" }
});

// 带有阴影的卡片容器
slide.addShape(pres.shapes.RECTANGLE, {
  x: 1.0, y: 1.0, w: 8.0, h: 3.0,
  fill: { color: "FFFFFF" },
  shadow: {
    type: "outer",
    color: "000000",
    blur: 6,
    offset: 2,      // 必须为非负数
    angle: 135,     // 投射方向
    opacity: 0.15   // 透明度
  }
});
```

---

## 4. 表格 (Tables)

```javascript
const tableData = [
  [
    { text: "指标项", options: { fill: { color: "027C76" }, color: "FFFFFF", bold: true } },
    { text: "目标值", options: { fill: { color: "027C76" }, color: "FFFFFF", bold: true } },
    { text: "当前进度", options: { fill: { color: "027C76" }, color: "FFFFFF", bold: true } }
  ],
  [ "电网网架建设", "98.5%", { text: "已完成 99.1%", options: { color: "0FB886" } } ],
  [ "清洁能源消纳率", "100%", "进行中" ]
];

slide.addTable(tableData, {
  x: 0.5, y: 1.5, w: 9.0,
  colW: [4.0, 2.5, 2.5],
  border: { pt: 0.5, color: "E8E8E8" },
  fontSize: 12, fontFace: "Microsoft YaHei",
  align: "center", valign: "middle"
});
```

---

## 5. 内置图表 (Charts)

内置图表能够生成交互式 PPT 矢量图表，比静态截图更专业。

```javascript
const chartData = [{
  name: "完成度",
  labels: ["一季度", "二季度", "三季度", "四季度"],
  values: [75, 82, 91, 98]
}];

slide.addChart(pres.charts.BAR, chartData, {
  x: 0.5, y: 1.5, w: 9.0, h: 3.5,
  barDir: "col",  // 柱状图 ("col" 代表纵向，"bar" 代表横向)
  chartColors: ["07978D"], // 柱状图填充色
  valAxisLabelColor: "666666",
  catAxisLabelColor: "666666",
  showValue: true, // 柱子顶部显示数值
  dataLabelColor: "027C76",
  showLegend: false
});
```
