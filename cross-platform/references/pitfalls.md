# 质量保障 (QA) 流程与防坑指南

生成的 PPT 质量是深蓝汇报体验的生命线。本指南包含标准 QA 验证流程及 PptxGenJS 底层防坑铁律。

---

## 1. 自动化质量验证流程 (QA Process)

即使是 AI 编写的代码，第一遍编译出的幻灯片也经常存在文字重叠、漏项或格式硬伤。我们采用以下机制确保质量：

### 文字提取验证
生成完毕后，必须使用 `markitdown` 提取幻灯片正文并审查：

```bash
# 提取幻灯片全部正文
python -m markitdown output.pptx > output_extracted.txt
```

### 占位符与脏数据排查
检查提取的文本中是否存在无意义的占位文本：

```bash
grep -iE "xxxx|lorem|ipsum|placeholder|模板|这页|此处填写" output_extracted.txt
```
*如果上述 grep 命令有任何输出，代表生成的 PPT 包含未替换的草稿占位符，质量不达标，必须立即重新修复。*

### 验证闭环 (Fix-and-Verify Loop)
1. 生成幻灯片 -> 提取正文 -> 校验关键指标和排版顺序。
2. 记录发现的问题（如字号太大导致折行、页码丢失等）。
3. 调整 JS 绘制代码并重新生成。
4. **重新执行提取验证**，直至没有发现任何格式与内容瑕疵。

---

## 2. PptxGenJS 四大核心避坑红线 (Critical Pitfalls)

### 红线一：绝对禁止在 createSlide() 中使用 async/await
PptxGenJS 创建页面的操作在 JS 层面是同步的。负责汇编的脚本在合并模块时不会 `await` 你的异步函数，这会导致异步获取的数据错漏、甚至生成空幻灯片。

```javascript
// 错误示例
async function createSlide(pres, theme) {
  const data = await fetchData(); // 绝对禁止！
}

// 正确示例
function createSlide(pres, theme) {
  // 数据已经在汇编阶段准备好，通过参数或同步方式使用
}
```

### 红线二：颜色 Hex 码绝对禁止带 `#`
PptxGenJS 对带 `#` 的 Hex 值极其敏感，甚至会导致 PPTX 文件损坏无法打开。

```javascript
// 错误
color: "#027C76"

// 正确
color: "027C76"
```

### 红线三：严禁复用 Option 配置对象
PptxGenJS 在执行诸如 `.addShape` 等渲染操作时，会**在底层就地修改 (Mutate)** 传入的配置对象（例如将其中的阴影偏移转化为 EMU 单位）。如果对多个图形调用同一个 Option 对象，第二次调用时数据已被污染，会导致生成的 PPT 文件损坏。

```javascript
// 错误示例
const cardStyle = { fill: { color: "FFFFFF" }, shadow: { type: "outer", offset: 2 } };
slide.addShape(pres.shapes.RECTANGLE, cardStyle);
slide.addShape(pres.shapes.RECTANGLE, cardStyle); // 此时 cardStyle 已被底层污染

// 正确示例（每次都返回一个新对象）
const getCardStyle = () => ({ fill: { color: "FFFFFF" }, shadow: { type: "outer", offset: 2 } });
slide.addShape(pres.shapes.RECTANGLE, getCardStyle());
slide.addShape(pres.shapes.RECTANGLE, getCardStyle());
```

### 红线四：阴影偏移值 (shadow.offset) 绝对禁止为负数
若要实现上投影或左投影，请使用正数偏置并调整投影角度（`angle`，如 `270` 代表向上投影），传入负数的 `offset` 会导致幻灯片损坏。
