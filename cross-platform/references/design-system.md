# 设计系统 (Design System)

> [!IMPORTANT]
> **第一优先级规范**：本设计系统与所有幻灯片生成代码中的色彩、组件与排版逻辑，必须以 [核心 UI 设计规范 (ui-design-spec.md)](file:///Users/lan/Rules_沉淀/deep-research/cross-platform/references/ui-design-spec.md) 规定的规范为**第一优先级**。任何其它备选方案及细节均不得违背该规范。

## 配色方案参考 (Color Palette Reference)

在进行幻灯片输出时，必须根据汇报场景、受众和主题选择合适的配色体系。天机妙策局（deep-research）默认首推符合 UI 规范的**品牌绿**配色方案。

| # | 配色名称 | 色值 (hex 无 #) | 风格 | 适用场景 | 说明 |
|---|---|---|---|---|---|
| 1 | **品牌绿 (State Grid Green)** | `primary`: `"027C76"`<br>`secondary`: `"07978D"`<br>`accent`: `"0FB886"`<br>`light`: `"ebf7fa"`<br>`bg`: `"F6FBFC"` | 专业、稳健、双碳科技 | 大型央企相关汇报、能源电力行业、绿色发展、政企合作 | **核心品牌第一优先级配色**（源自 [ui-design-spec.md](file:///Users/lan/Rules_沉淀/deep-research/cross-platform/references/ui-design-spec.md) 规范）。用户提“品牌绿”、品牌绿相关或默认 PPT 渲染时，均自动激活此配色方案。 |
| 2 | 商务权威 (Business & Authority) | `primary`: `"2b2d42"`<br>`secondary`: `"8d99ae"`<br>`accent`: `"ef233c"`<br>`light`: `"edf2f4"`<br>`bg`: `"edf2f4"` | 正式、经典 | 年度报告、财务分析、企业介绍、政务汇报 | 深蓝体现稳重与专业度，明艳红色用于强调关键指标数据。 |
| 3 | 科技之夜 (Tech & Night) | `primary`: `"000814"`<br>`secondary`: `"001d3d"`<br>`accent`: `"ffc300"`<br>`light`: `"003566"`<br>`bg`: `"000814"` | 深邃、极客 | 数字化转型、前沿技术发布、星空夜空、新能源汽车 | 采用深色背景模式，亮黄与亮蓝带来未来感与高对比度。 |
| 4 | 生态自然 (Nature & Outdoors) | `primary`: `"283618"`<br>`secondary`: `"606c38"`<br>`accent`: `"dda15e"`<br>`light`: `"fefae0"`<br>`bg`: `"fefae0"` | 大地、环保 | 农业科技、绿色生态保护、历史文化、乡村振兴 | 绿色基调与温暖浅色调搭配，平实可靠。 |
| 5 | 白金奢华 (Platinum White Gold) | `primary`: `"0a0a0a"`<br>`secondary`: `"0070F3"`<br>`accent`: `"D4AF37"`<br>`light`: `"f5f5f5"`<br>`bg`: `"ffffff"` | 尊贵、现代 | 智囊团研究、高端咨询报告、金融科技、发布会 | 白金底色，蓝色代表智慧与行动力，金色用于高端强调。 |

---

## 颜色规范约束 (Color Rules)

1. **色值中绝对禁止带 `#` 前缀**：
   - PptxGenJS 底层并不支持带 `#` 的 hex 色值（例如 `#00A896` 会导致生成的 PPT 文件损坏）。
   - 必须使用纯 6 位字符（例如 `"00A896"`）。
2. **绝对禁止将透明度编码在 Hex 字符串中**：
   - 严禁使用 8 位 Hex 字符（如 `"00000020"`），这会导致文件无法读取。
   - 如需使用透明度，必须显式调用 API 的 `transparency` 属性。
3. **禁止使用渐变色 (No Gradients)**：
   - 所有填充必须使用单色填充，以确保排版清晰和全平台兼容。
4. **禁止使用动画效果 (No Animations)**。

---

## 字体使用规范 (Font Reference)

在中文汇报环境下，为避免跨平台（如 macOS 与 Windows）字体丢失，建议采用以下规范：

| 语言 | 默认字体 (Default) | 备选字体 (Alternatives) |
|---|---|---|
| **中文 (Chinese)** | **微软雅黑 (Microsoft YaHei)** | 黑体 (SimHei) |
| **英文 (English)** | **Arial** | Calibri, Georgia |

### 正文严禁加粗
- 所有段落、注释、脚注、指标标签等**普通文本一律不得加粗**。
- **加粗仅允许用于标题、副标题以及特大号的数据指标值本身**。

---

## 排版风格配方 (Style Recipes)

通过控制圆角半径 (`rectRadius`) 和间距，可以创造出 4 种不同视觉感受的 PPT 风格：

| 风格名称 | 圆角半径 (`rectRadius`) | 页面边距与间距 | 适合类型 |
|---|---|---|---|
| **刚直凝练 (Sharp & Compact)** | `0 ~ 0.05"` | 紧凑 | 数据密集型、表格、专业技术分析、严肃学术报告 |
| **圆润均衡 (Soft & Balanced)** | `0.08" ~ 0.12"` | 适中 | **(默认)** 企业介绍、政企合作、战略规划汇报 |
| **宽松开阔 (Rounded & Spacious)** | `0.15" ~ 0.25"` | 宽松 | 产品推介、创意汇报、品牌理念宣讲 |
| **气囊圆滑 (Pill & Airy)** | `0.3" ~ 0.5"` | 开阔 | 形象宣传、产品发布会、高端视觉演示 |

> **PptxGenJS 圆角应用技巧**：
> - 若想制作完美的圆角按钮（Pill），可将 `rectRadius` 设为 `元素高度 / 2`。
> - `rectRadius` 仅在 `pres.shapes.ROUNDED_RECTANGLE` 上生效，普通 `RECTANGLE` 忽略此参数。
> - 在有背景色的容器边缘使用装饰线时，不要对容器使用 `ROUNDED_RECTANGLE`，否则直角装饰线无法覆盖容器的圆角。

---

## 文字与间距度量衡 (Typography & Spacing Scale)

幻灯片画布固定为 16:9 (`LAYOUT_16x9` 即宽 10 英寸，高 5.625 英寸)：

### 字号层级 (Typography)
- **极小注释 / 数据来源**：10 ~ 12 pt
- **正文 / 说明段落**：14 ~ 16 pt
- **小标题 / 列表卡片标题**：18 ~ 22 pt
- **页面主标题**：28 ~ 36 pt
- **大封面主标题**：44 ~ 60 pt
- **巨型数据特写 (Data Callout)**：60 ~ 96 pt

### 间距参考 (Spacing)
- **图标与文字间距**：0.08" ~ 0.15"
- **正文列表项行间距**：0.15" ~ 0.25"
- **卡片内边距 (Padding)**：0.2" ~ 0.4"
- **同组元素间距 (Group Gap)**：0.3" ~ 0.5"
- **页面安全边距 (Page Margin)**：0.4" ~ 0.6"
- **主板块间距 (Major Block Gap)**：0.5" ~ 0.8"
