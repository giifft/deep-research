# 信用平台 UI 规范

> **版本**：v2.1 | **日期**：2026-04-11 | **适用范围**：`gjgx_sk` 全体模块

---

## 目录

1. [设计令牌 (Design Tokens)](#1-设计令牌-design-tokens)
2. [字体规范](#2-字体规范)
3. [间距与布局](#3-间距与布局)
4. [颜色系统](#4-颜色系统)
5. [主题换肤机制](#5-主题换肤机制)
6. [核心组件规范](#6-核心组件规范)
7. [图表规范](#7-图表规范)
8. [EasyUI/ElementUI 覆写规则](#8-easyuielementui-覆写规则)
9. [图标库](#9-图标库)
10. [企业角色标签系统](#10-企业角色标签系统)
11. [交互状态规范](#11-交互状态规范)
12. [可复用开发规则（DSL）](#12-可复用开发规则dsl)

---

## 1. 设计令牌 (Design Tokens)

所有颜色通过 CSS 变量统一管理，**禁止**在组件内 hardcode 主色。

### 绿色主题（默认）

```css
:root {
  /* ===== 主色系 ===== */
  --main-color:         #07978D;   /* 主品牌色，按钮/激活/图标 */
  --main-dark-color:    #027C76;   /* 深色版，渐变/按下态 */
  --main-light-color:   #14aaa1;   /* 浅色版，hover 态 */

  /* ===== 字体 ===== */
  --font-main-family:   'SourceHanSansCN-Regular', 'Source Han Sans CN', sans-serif;

  /* ===== 文字色 ===== */
  --text-color:         #162B41;   /* 主文字，标题 */
  --text-theme-color:   #07978D;   /* 主题文字（链接、金额数值） */
  --text-color1:        #262626;   /* 正文、表格内容 */
  --text-color2:        #333333;   /* 次要正文 */
  --text-color3:        #7B8EA2;   /* 提示文字、次要标签 */
  --text-color4:        #00706B;   /* 章节标题（深主题色） */
  --iconfont-color:     #7B8EA2;   /* 图标默认色 */

  /* ===== 背景色 ===== */
  --bg-color:           #F6FBFC;   /* 页面底色 */
  --bg-color1:          #F5F5F9;   /* 输入框底色、下拉底色 */
  --bg-color2:          #F1F6F7;   /* 表格表头、二级容器 */
  --bg-color3:          #eFF2F6;   /* 卡片背景、轻量底色 */
  --bg-color4:          #ebf7fa;   /* 高亮区域背景 */
  --bg-color5:          #e0f7ec;   /* 树节点选中背景 */
  --gradient-color1:    #027c76;   /* 渐变终止色 */

  /* ===== 边框色 ===== */
  --border-color:       #A3D4D1;   /* 输入框、搜索框边框 */

  /* ===== 语义线条色（图表可用） ===== */
  --line-color1:        #FD824C;   /* 橙，预警/趋势1 */
  --line-color2:        #0FB886;   /* 翠绿，正向指标 */
  --line-color3:        #1875F0;   /* 蓝，对比色/链接 */
  --line-color4:        #FD824C;   /* 同 line-color1 */
  --line-color5:        #00BBC1;   /* 青，图表第5序列 */

  /* ===== 图片变量 ===== */
  --empty-data:         url('../../img/emptyDataGreen.png') no-repeat;  /* 空状态图 */
  --nbdw-img:           url('../img/nbdw_green.png') no-repeat;         /* 内部单位图标 */
  --myqy-img:           url('../img/myqy_green.png') no-repeat;         /* 内部企业图标 */
  --zxwqy-img:          url('../img/zxwqy_green.png') no-repeat;        /* 中小微企业图标 */
  --qy-logo:            url('../img/logo_green.png') no-repeat;         /* 企业 Logo */
  --gq-empty-img:       url('../../../../img/emptyDataGreen.png') no-repeat; /* 股权空状态图 */
  --table-empty-img:    url('./module/app_zhcw/gjgx_sk/common/img/emptyDataGreen.png') no-repeat; /* 表格空状态图 */
}
```

### 蓝色主题（备选）

蓝色主题采用完整覆写方式（非增量继承），与绿色主题的差异主要在以下变量：

```css
:root {
  /* 蓝色主色 */
  --main-color:         #036DC7;
  --main-dark-color:    #1875F0;
  --main-light-color:   #036DC7;
  --text-theme-color:   #036DC7;
  /* 蓝主题未定义 --text-color4，无章节标题深主题色 */
  --bg-color4:          #E9F3FB;
  --bg-color5:          #e0ecf7;
  --border-color:       #95BFE5;
  --gradient-color1:    #036DC7;

  /* 蓝色主题图片变量 */
  --empty-data:         url(../../img/emptyData.png) no-repeat;
  --nbdw-img:           url(../../img/nbdw.png) no-repeat;
  --myqy-img:           url(../../img/myqy.png) no-repeat;
  --zxwqy-img:          url(../../img/zxwqy.png) no-repeat;
  --qy-logo:            url(../../img/logo.png) no-repeat;
  --gq-empty-img:       url(../../../../img/emptyData.png) no-repeat;
  /* 注意：蓝色主题未定义 --table-empty-img */
}
```

> **重要说明**：两套主题都用 `:root` 选择器（非 `data-theme` 属性），通过引入不同 CSS 文件切换，后加载的会覆盖先加载的变量。两套主题的 `--line-color*` 系列完全相同。

> **换肤方式**：在 `index.html` 中引入 `theme.green.css` 或 `theme.blue.css`，整个应用自动切换。

---

## 2. 字体规范

### 字体族

```css
--font-main-family: 'SourceHanSansCN-Regular', 'Source Han Sans CN', sans-serif;
/* 统一使用思源黑体，回退到系统 sans-serif */
```

### 字号层级

| 级别 | 尺寸 | 使用场景 |
|------|------|----------|
| 超大标题 | 24px + **700** | 统计卡片核心数值 |
| 模块标题 | 20px + **700** | 看板入口卡片标题 |
| 区块标题 | 18px + **400** | `layer_box` 标题、页面 title |
| 次级标题 | 16px + **500** | section 内标题、菜单项 |
| 正文 | 14px | 表格内容、筛选条文字、标签 |
| 辅助说明 | 13px | tab 文字、checkbox 标签 |
| 注释/单位 | 12px | 副标题、图例、空状态文字 |

### 行高约定

- 单行内容区：`line-height = height`（如 48px 行等高 48px）
- 多行正文：`line-height: 1.6`
- 列表行：`padding: 15px 0`（上下 padding 替代 line-height）

---

## 3. 间距与布局

### 间距令牌（`common_kb.css`）

5px 为步进，统一使用工具类：

```
mt5 / mt10 / mt15 / mt20 / mt25   → margin-top
mb5 / mb10 / mb15 / mb20 / mb25   → margin-bottom
ml5 / ml10 / ml15 / ml20 / ml25   → margin-left
mr5 / mr10 / mr15 / mr20 / mr25   → margin-right
pt5 → pb5 → pl5 → pr5（同上，padding 系列）
```

**约定**：
- 卡片内边距：`padding: 10px 15px`（layer_box 默认）
- 组件间距：`margin-bottom: 15px`（section 组之间）
- 筛选条高度：固定 **48px**
- 标题区高度：固定 **50px**

### 页面布局约定

```
页面最小宽度：min-width: 1900px（看板）/ 1915px（经营指标）
专为 1920px 宽屏设计，不支持响应式
主内容区：height: calc(100% - {筛选条高度}px)
```

### Flex 工具类

`common_kb.css` 提供完整的 Flex 工具类体系：

```css
/* 容器 */
.flex-box                   /* display: flex */

/* 方向 */
.flex-row                   /* flex-direction: row */
.flex-row-reverse           /* flex-direction: row-reverse */
.flex-column                /* flex-direction: column */
.flex-column-reverse        /* flex-direction: column-reverse */

/* 换行 */
.flex-wrap                  /* flex-wrap: wrap */
.flex-nowrap                /* flex-wrap: nowrap */
.flex-wrap-reverse          /* flex-wrap: wrap-reverse */

/* 主轴对齐 */
.flex-justify-start         /* justify-content: flex-start */
.flex-justify-end           /* justify-content: flex-end */
.flex-justify-center        /* justify-content: center */
.flex-justify-between       /* justify-content: space-between */
.flex-justify-around        /* justify-content: space-around */

/* 交叉轴对齐 */
.flex-items-start           /* align-items: flex-start */
.flex-items-end             /* align-items: flex-end */
.flex-items-center          /* align-items: center */
.flex-items-baseline        /* align-items: baseline */
.flex-items-stretch         /* align-items: stretch */

/* 多轴线对齐 */
.flex-content-start         /* align-content: flex-start */
.flex-content-end           /* align-content: flex-end */
.flex-content-center        /* align-content: center */
.flex-content-between       /* align-content: space-between */
.flex-content-around        /* align-content: space-around */
.flex-content-stretch       /* align-content: stretch */

/* 弹性 */
.flex-1                     /* flex: 1 */
.flex-auto                  /* flex: auto */
```

### 辅助工具类

```css
.floatl                     /* float: left */
.floatr                     /* float: right */
.inlineb                    /* display: inline-block */
.cursor                     /* cursor: pointer */
```

---

## 4. 颜色系统

### 功能色（语义色）

| 功能 | 颜色 | 说明 |
|------|------|------|
| 主操作色 | `var(--main-color)` | 按钮、激活态、选中态 |
| 危险/风险 | `#e5524c` | 风险点标签、错误提示 |
| 警告/预警 | `#FFA200` | 产业客户标签、告警 |
| 成功/正向 | `#0FB886` | 正向指标折线 |
| 链接/信息 | `#1875F0` | 跳转链接、信息标注 |
| 次要文字 | `#7B8EA2` | 占位符、图例、辅助说明 |

### 阴影系统

```css
/* 卡片默认阴影 */
box-shadow: 8px 8px 20px 0px rgba(55, 99, 170, 0.10);

/* 悬浮卡片激活阴影（地图列表选中） */
box-shadow: 0px 6px 10px 0px rgba(2, 96, 78, 0.36);

/* 筛选条向下阴影 */
box-shadow: 0 10px 10px rgba(55, 99, 170, 0.1);

/* 详情页标题阴影 */
box-shadow: 0px 5px 7px 0px rgba(0, 112, 107, 0.10);

/* 地图浮窗毛玻璃 */
backdrop-filter: blur(6px);
background: rgba(255, 255, 255, 0.75);
```

### 渐变规则

```css
/* 主操作按钮渐变 */
background: linear-gradient(to bottom, var(--main-color), var(--gradient-color1));

/* 激活卡片渐变（地图列表） */
background: linear-gradient(135deg, #149d9c, #0e665d);

/* 通用卡片底色渐变 */
background: linear-gradient(to bottom, #ffffff, #f3f5f8);

/* 筛选浮层背景 */
background: linear-gradient(180deg, #f3f5f8, #ffffff 100%);
```

---

## 5. 主题换肤机制

### 规则

1. 每个模块的 `index.html` 引入对应主题 CSS：
   ```html
   <link rel="stylesheet" href="../../common/css/theme.green.css">
   <!-- 或 -->
   <link rel="stylesheet" href="../../common/css/theme.blue.css">
   ```

2. 全局生效范围：`[id^="appController"]`（门户框架）

3. 主题图片也通过变量切换：
   ```css
   background: var(--empty-data);   /* 空状态图 */
   background: var(--nbdw-img);     /* 内部单位图标 */
   ```

4. **开发约定**：凡涉及主色，一律使用 `var(--main-color)`，禁止写死颜色值。

---

## 6. 核心组件规范

### 6.1 `layer-box`（卡片容器）

全系统最核心布局组件，白底 + 左侧竖条标识 + 阴影。

```html
<layer-box width="450px" class="mt15" :tabs="['Tab1','Tab2']" @tab-change="onTabChange">
  <template slot="title">
    <div class="left">
      <span>标题</span>
      <span class="subtitle">（万元）</span>
    </div>
    <div class="right">
      <!-- 右侧操作区 -->
    </div>
  </template>
  <template slot="content">
    <!-- 内容区 -->
  </template>
</layer-box>
```

**关键样式规则**：

```css
.layer_box {
  background: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  box-shadow: 8px 8px 20px 0px rgba(55, 99, 170, 0.10);
}

/* 左侧竖条：4px 宽，高 18px，主题色，圆角 */
.layer_box::before {
  border-left: 4px solid var(--main-color);
  height: 18px;
  border-radius: 4px;
  left: 15px;
  top: 13px;
}

/* 标题区：18px、深色 */
.layer_box .title {
  font-size: 18px;
  color: #162b41;
  padding-bottom: 10px;
  padding-left: 10px; /* 为竖条留位 */
}

/* 副标题 */
.layer_box .title .left .subtitle {
  font-size: 12px;
  color: #7B8EA2;
}
```

**Props**：

| 属性 | 类型 | 默认 | 说明 |
|------|------|------|------|
| `width` | String | `'408px'` | 卡片宽度 |
| `height` | String | `'auto'` | 卡片高度 |
| `bg` | String | `'#fff'` | 背景色 |
| `tabs` | Array | `[]` | Tab 数组 |
| `tabtype` | Number | `2` | 1=竖排 Tab，2=横排 Tab |
| `showmorebtn` | Boolean | `false` | 显示"更多"按钮 |
| `boxShadow` | String | 默认阴影 | 自定义阴影 |

**事件**：`@tab-change({label, value})`、`@more-click`

---

### 6.2 `comp-page-query`（全局顶部筛选条）

每个看板页面**顶部固定**，高度 48px，包含主体类型筛选 + 基准日期 + 登录单位 + 金额单位。

```html
<comp-page-query
  page-type="yskb"
  :show-user-info="true"
  @unit-change="onUnitChange">
</comp-page-query>
```

**返回事件结构**：
```js
{
  isTypeChange: true,
  type: '2,3',          // 主体类型（逗号分隔，全选时为空）
  typeName: '主营业单位',
  dw: '万元',            // 金额单位
  date: '202503',       // 基准日期 yyyyMM
}
```

**样式约定**：
```css
.page_query_box {
  height: 48px;
  min-width: 1920px;
  background: #fff;
  box-shadow: 0 10px 10px rgba(55, 99, 170, 0.1);
  padding-left: 40px;
}
```

---

### 6.3 `comp-page-title`（详情页标题）

```html
<comp-page-title title="企业信用详情"></comp-page-title>
```

```css
.page_top_title {
  height: 50px;
  font-size: 18px;
  color: #00706B;
  font-weight: 700;
  box-shadow: 0px 5px 7px 0px rgba(0, 112, 107, 0.10);
}
```

---

### 6.4 `comp-search`（企业搜索框）

支持三种检索模式切换（企业名称 / 信用代码 / 核心企业）。

```html
<comp-search
  width="450px"
  :propitem="{button: '查询'}"
  @search-click="onSearchClick"
  class="mb15">
</comp-search>
```

**返回值**：`{key: 'ORG_NAME', value: '某某公司'}`

**样式规则**：
- 搜索框边框：`border: 1px solid var(--border-color)`
- 查询按钮：背景 `var(--main-color)`，白色文字
- 左侧检索类型：14px 深色加粗 dropdown

---

### 6.5 空状态体系

项目包含 **4 种空状态组件**，根据场景选用对应类型。

#### 6.5.1 基础空状态 · `comp-empty`

适用于一般性无数据展示，最常用的空状态组件。

```html
<!-- 1. 注册组件 -->
"comp-empty": httpVueLoader(
  "../../../common/components/common/comp.empty.vue"
)

<!-- 2. 模板中使用 -->
<comp-empty
  description="暂无数据"
  :styleobj="{imgw: 166, imgh: 122, textsize: 12}">
</comp-empty>
```

| Prop | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| imgUrl | String | empty_green.png | 图片路径 |
| description | String | 暂无数据 | 描述文字 |
| styleobj | Object | {imgw:166, imgh:122, textsize:12} | 尺寸配置 |

---

#### 6.5.2 增强空状态 · `empty-table-text`（带操作建议）

用于查询结果为空时，提供操作引导。样式定义在 `jyzt/common/css/common.css`。

```html
<!-- el-table 隐藏默认空文本 -->
<el-table :data="tableData" empty-text=".">

<!-- 增强空状态：图片 + 主提示 + 操作建议 -->
<div class="empty-table-text" v-if="isShowEmptyText">
  <div class="empty-img"></div>
  <div class="empty-r">
    <p class="empty-text">抱歉，没有找到相关企业！</p>
    <p class="message-info">
      <span class="point"></span>输入更准确的关键词，重新搜索
    </p>
    <p class="message-info">
      <span class="point"></span>更换筛选条件，重新搜索
    </p>
  </div>
</div>
```

| CSS 类名 | 说明 | 关键样式 |
|----------|------|----------|
| .empty-table-text | 外层容器 | position:absolute; flex 居中 |
| .empty-img | 空状态图片 | 240×180px, var(--empty-data) |
| .empty-text | 主提示 | font-size:20px; font-weight:700; color:#262626 |
| .message-info | 操作建议 | font-size:15px; margin-top:10px; color:#666 |
| .point | 圆点 bullet | 8×8px; background:#ccc; border-radius:50% |

---

#### 6.5.3 首页模块占位 · `empty_tip_box`（hover 显示）

用于首页模块卡片尚未开放时，hover 显示"建设中"提示。样式定义在 `jyzt/home/css/index.css`。

```html
<div class="empty_tip_box" v-if="item.index!=0 && item.index!=1">
  建设中
</div>
```

| CSS 类名 | 说明 | 关键样式 |
|----------|------|----------|
| .empty_tip_box | 占位提示 | position:absolute; width:70px; height:40px; top:165px; left:50px; background:#fff; box-shadow:0 3px 10px #ccc; border-radius:4px; font-size:14px; color:#262626 |

---

#### 6.5.4 功能建设占位 · `wljy_empty_wrap`

用于财务数据等整块功能尚未开发时，替代整个内容区。

```html
<div class="wljy_empty_wrap">
  <span class="empty_img"></span>
  <p style="font-size:17px;margin-top:20px">功能建设中</p>
</div>
```

| CSS 类名 | 说明 | 关键样式 |
|----------|------|----------|
| .wljy_empty_wrap | 外层容器 | display:flex; flex-direction:column; align-items:center |
| .empty_img | 空状态大图 | 365×290px; var(--empty-data) |

---

#### 6.5.5 选型指南

| 场景 | 组件/样式 | 说明 |
|------|-----------|------|
| 通用无数据 | comp-empty | 基础组件，支持图片+文字+插槽 |
| 查询结果为空 | empty-table-text | 带主提示+操作建议，引导用户调整查询 |
| 首页模块占位 | empty_tip_box | hover 显示"建设中" |
| 功能整块建设中 | wljy_empty_wrap | 替代整块内容区 |
| 无权限 | no-permission / dialogNoPermission | 弹窗或内嵌形式展示 |
| el-table 内置 | empty-text="." | 隐藏默认文字，配合 empty-table-text 使用 |

---

### 6.6 `comp-section`（数据分组展示）

适用于右侧详情面板，展示"标题 + 数值"分组列表：

```html
<comp-section :item="{
  title: '应收账款',
  value: '1,234',
  unit: '万元',
  groupList: [{
    title: '账期明细',
    list: [{label: '30天内', value: '500', unit: '万元'}]
  }]
}"></comp-section>
```

---

### 6.7 Tab 组件规范

**横向下划线 Tab**（看板内嵌）：

```css
.kb-ys-tabs span {
  height: 38px;
  line-height: 38px;
  padding: 0 6px;
  margin-right: 18px;
  font-size: 14px;
  color: #262626;
}
.kb-ys-tabs span.active {
  font-weight: 700;
  border-bottom: 2px solid var(--main-color);
}
```

**胶囊 Tab**（`layer_box` 内嵌）：
```css
/* 横排胶囊 */
.tab-wrap { background: #f5f5f9; border-radius: 4px; padding: 2px; }
.tab { background: #EDF2F8; font-size: 13px; }
.active-tab { background: #ffffff; }
```

---

### 6.8 按钮规范（`.xy-button`）

```css
/* 主操作按钮 */
.xy-button.el-button--primary {
  background: #07978D;
  border-color: #07978D;
  color: #fff;
}

/* 主操作按钮 hover/active 状态 */
.xy-button.el-button--primary:hover,
.xy-button.el-button--primary:active {
  background: #07978D;
  border-color: #07978D;
  color: #fff;
}

/* 次要按钮 */
.xy-button.el-button--default {
  border: 1px solid #DFECEC;
  box-shadow: 2px 2px 3px rgb(223 235 232 / 50%);
  background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F8 100%);
  color: #07978D;
}

/* 次要按钮 hover/focus/active 状态 */
.xy-button.el-button--default:hover,
.xy-button.el-button--default:focus,
.xy-button.el-button--default:active {
  border: 1px solid #DFECEC;
  box-shadow: 2px 2px 3px rgb(223 235 232 / 50%);
  background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F8 100%);
  color: #07978D !important;
}

/* 小尺寸（常用）*/
.xy-button.el-button--small {
  font-size: 14px;
  padding: 6px 15px;
}
```

---

### 6.9 表单输入规范（`.xy-elform`）

```css
/* 下拉框 */
.xy .el-select {
  height: 28px;
  background: #F5F5F9;
  border-radius: 4px;
  font-size: 13px;
}

/* 日期选择器 */
.xy-datepicker.el-input {
  width: 310px;
  height: 28px;
  border: 1px solid #dce1ea;
}

/* 边框输入框 */
.xy.xy-select {
  height: 28px;
  border: 1px solid #dce1ea;
  border-radius: 4px;
  width: 310px;
}
```

---

### 6.10 表格规范（`.myTable` / `.xyTable`）

```css
/* 表头 */
.myTable .el-table__header-wrapper th {
  background: #ffffffb3 !important;
  font-size: 14px;
  color: #0D1926;
  font-weight: 500;
}

/* 行内边距 */
.el-table td { padding: 8px 0 !important; }

/* 去掉底部伪元素线 */
.myTable::before { display: none; }
```

---

### 6.11 分页规范（`.xy-elpagenation`）

```css
/* 分页选择器 */
.xy-elpagenation .el-select .el-input { width: 90px; }
/* 跳页输入 */
.xy-elpagenation .el-pagination__jump { margin-left: 5px; }
/* 总计文字 */
.xy-elpagenation .el-pagination__total { margin-right: 5px; }
/* 尺寸选择器 */
.xy-elpagenation .el-pagination__sizes { margin: 0; }
/* 输入框 */
.xy-elpagenation .el-input .el-input__inner {
  box-shadow: none;
  border: 1px solid #dce1ea;
  margin: 0 !important;
  padding: 0 !important;
}
```

---

## 7. 图表规范

### 通用规则

- 图表库：**ECharts 5.3.1**
- 工具提示背景：`rgba(255, 255, 255, 0.75)` + `backdrop-filter: blur(6px)`
- 提示框圆角：`6.6px`，阴影：`2px 6px 8px 0px rgba(0,0,0,0.10)`

### 推荐图表调色盘（与语义线条色对应）

```js
color: ['#07978D', '#1875F0', '#FD824C', '#0FB886', '#00BBC1', '#7B8EA2']
```

### 地图组件规范

```css
/* 地图容器 */
.kb-map-wrap { height: 628px; width: 1391px; position: relative; }
.kb-map { width: 945px; height: 628px; margin-left: 400px; }
.kb-map .kb-map-echart { height: 628px; width: 987px; animation: towidth .75s ease-in-out; }

/* 地图列表卡片 */
.kb-map-list { width: 280px; position: absolute; top: 32px; }
.kb-map-list .map-list-item {
  height: 94px;
  padding: 0 16px 0 27px;
  background: #fff;
  box-shadow: 8px 8px 20px 0px rgba(55, 99, 170, 0.10);
  border-radius: 4px;
  cursor: pointer;
}

/* 激活态 */
.kb-map-list .map-list-active {
  background: linear-gradient(135deg, #149d9c, #0e665d);
  box-shadow: 0px 6px 10px 0px rgba(2, 96, 78, 0.36);
  color: #fff;
}

/* 地图列表图标、名称、数值 */
.kb-map-list .map-list-item-icon { width: 32px; height: 32px; font-size: 24px; }
.kb-map-list .map-list-item-name { font-size: 16px; font-weight: 500; color: #7B8EA2; }
.kb-map-list .map-list-item-value { font-size: 24px; color: #262626; font-weight: 700; }
.kb-map-list .map-list-item-unit { font-size: 14px; color: #262626; font-weight: 500; }

/* 地图 Tooltip 细化样式 */
.kb-map-tooltip-title { font-weight: 700; font-size: 14px; color: #262626; margin-bottom: 6px; }
.kb-map-tooltip-label { width: 118px; font-size: 12px; color: #262626; display: inline-block; }
.kb-map-tooltip-value { line-height: 2; margin-left: 12px; font-size: 12px; color: #07978D; }
```

---

## 8. EasyUI/ElementUI 覆写规则

### EasyUI 表格（经营指标模块）

```css
/* 表头背景跟随主题色 */
#pageView .datagrid-header-inner { background-color: var(--bg-color2) !important; }
/* 行选中色 */
#pageView .datagrid-row-selected { color: var(--main-color); }
#pageView .datagrid-row-over { color: var(--main-color); background-color: var(--bg-color2) !important; }
```

### ElementUI 日期控件

```css
.el-date-table td.today span { color: var(--main-color) !important; }
.el-date-table td.start-date span,
.el-date-table td.end-date span { background-color: var(--main-color) !important; }
```

### ElementUI 树组件

```css
.xy .el-tree-node__content:hover { background-color: #ebf9fA; }
.xy .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
  background-color: #e0F7ec;
}
.xy .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content .el-tree-node__label {
  color: #07978D;
}
```

### 命名空间约定

| 前缀 | 用途 |
|------|------|
| `.xy` | ElementUI 组件 scoped 覆写命名空间 |
| `.xy-button` | 按钮特定覆写 |
| `.xy-datepicker` | 日期选择器 |
| `.xy-elform` | 表单输入组 |
| `.xy-elpagenation` | 分页组件 |
| `#pageView` | EasyUI 全局覆写 |

---

## 9. 图标库

使用自定义 `iconfont`，类名格式：`.iconfont.icon-{name}`

### 常用图标索引

| 图标名 | 业务场景 |
|--------|----------|
| `icon-jinru` | 跳转/进入（"更多"按钮箭头） |
| `icon-gys` | 供应商 |
| `icon-kehu` | 客户 |
| `icon-xinyong` | 信用评价 |
| `icon-fengxian` | 风险 |
| `icon-yingshou` | 应收 |
| `icon-yingfu` | 应付 |
| `icon-qiye` | 企业 |
| `icon-nbdw` | 内部单位 |
| `icon-zhuangtai` | 状态 |

**图标尺寸规范**：
- 导航/卡片图标：32px（`.map-list-item-icon`）
- 首页统计图标：50px（`.enterprise_info .iconfont`）
- 操作按钮图标：14px–16px

---

## 10. 企业角色标签系统

```css
/* 通用结构 */
.role_span {
  border-radius: 2px;
  padding: 2px 6px;
  display: inline-block;
  margin-right: 6px;
  font-size: inherit;
}

/* 交易客户 */
.IS_TRANSCONS { color: #1687e8; background: #e4f0fa; }

/* 供应商 */
.IS_SUPPCONS  { color: #5b8f1a; background: #e5efc9; }

/* 用电客户 */
.IS_ELECCONS  { color: #4aad8f; background: #dfede7; }

/* 发电客户 */
.IS_GPC       { color: #f0760c; background: #fff6e6; }

/* 产业客户 */
.IS_INDUSCONS { color: #FFA200; background: #FFF9D9; }

/* 内部组织 */
.ISINNER_SUPPLIER { color: #00bbc1; background: #e6feff; }

/* 风险点标签（特殊） */
.fxd_span {
  color: #e5524c;
  background: #FCEEED;
  border: 1px solid #f7a8a4;
  border-radius: 2px;
  padding: 2px 6px;
}
```

---

## 11. 交互状态规范

### 悬停（hover）

```css
/* 可交互文字 */
:hover { color: var(--main-color); }

/* 看板卡片 */
.kb_view:hover .kb_title { color: var(--main-color); }
.kb_view:hover .examine_btn { opacity: 1; } /* 进入按钮淡入 */

/* 地图列表项（不激活时不改变背景，避免误操作） */
.map-list-item:hover { /* 仅通过激活类改变 */ }
```

### 激活/选中

```css
/* Tab 激活 */
.kb-ys-tabs span.active { font-weight: 700; border-bottom: 2px solid var(--main-color); }

/* 列表激活 */
.map-list-active { background: linear-gradient(135deg, #149d9c, #0e665d); color: #fff; }

/* 胶囊 Tab 激活 */
.active-tab { background: #ffffff; }

/* 下拉选项激活 */
.dropdown-item.active { color: var(--main-color); }
```

### 禁用

```css
/* ElementUI 按钮禁用 */
.el-button.is-disabled { color: #aba6a6 !important; border-color: #eae4e4; cursor: not-allowed; }
```

---

## 12. 可复用开发规则（DSL）

以下是面向**新页面/组件开发**的提炼规则，直接可落地：

### ✅ 必须遵守

1. **主色永远用变量**：所有涉及品牌色的地方，必须 `var(--main-color)`，禁止写死 `#07978D`。

2. **卡片统一用 `layer-box`**：需要白色背景 + 标题 + 内容的区块，必须使用 `<layer-box>` 而非自己写 div。

3. **间距只用工具类**：上下间距用 `.mt*` / `.mb*`，避免 scoped 内写零散 margin。

4. **元素高度固定值**：
   - 顶部筛选条：`48px`
   - 标题行：`50px`
   - 小尺寸按钮/下拉：`28px`
   - 搜索框高度：`50px`（首页）

5. **表格必须加 `.myTable`**：统一表头背景和文字样式，不自己覆写。

6. **空状态根据场景选用**：
   - 通用无数据 → `comp-empty`
   - 查询结果为空 → `empty-table-text`（带操作建议）
   - 首页模块占位 → `empty_tip_box`（hover 显示"建设中"）
   - 功能整块建设中 → `wljy_empty_wrap`

7. **企业角色标签必须用类名**：直接用 `.IS_TRANSCONS` / `.IS_SUPPCONS` 等，不自定义颜色。

8. **阴影只用以下三个**：
   ```css
   /* 卡片 */ box-shadow: 8px 8px 20px 0px rgba(55, 99, 170, 0.10);
   /* 筛选条 */ box-shadow: 0 10px 10px rgba(55, 99, 170, 0.1);
   /* 详情标题 */ box-shadow: 0px 5px 7px 0px rgba(0, 112, 107, 0.10);
   ```

### ❌ 禁止行为

1. 禁止写死颜色 `#07978D`、`#036DC7` 等主色值。
2. 禁止在 scoped 内重写全局 ElementUI 样式（应在 `elementui_reset.css` 集中维护）。
3. 禁止用 `position: fixed` 粘顶（框架已处理，用 `position: sticky` 或由父容器 overflow 管控）。
4. 禁止随意新增图标，先查 `iconfont.json` 中已有的 50+ 图标。
5. 禁止不经 `xy-button` 类直接用 `el-button--primary`（否则换肤失效）。

### 📋 新看板页面检查清单

- [ ] 引入对应主题 CSS（green/blue）
- [ ] 顶部有 `comp-page-query` 并正确绑定 `page-type`
- [ ] 所有卡片使用 `layer-box`
- [ ] 主色全部使用 CSS 变量
- [ ] 空状态根据场景使用对应组件（comp-empty / empty-table-text / empty_tip_box / wljy_empty_wrap）
- [ ] 企业角色标签使用预定义类名
- [ ] 间距使用工具类（mt/mb/ml/mr）
- [ ] 表格使用 `.myTable` 类
- [ ] 图表调色盘包含主色 `#07978D`

---

*文档由 UI 规范分析工具自动生成并归纳，如有变更请同步更新此文件。*

*v2.1 更新（2026-04-11）：补充绿色主题中的 --font-main-family 及 7 个图片变量；修正蓝色主题描述为完整覆写方式（非增量继承）并补充图片变量；补全 common_kb.css 中的 20+ 个 Flex 工具类和辅助工具类；补充按钮 hover/active 状态和 box-shadow；修正分页规范与实际 CSS 一致；补充地图 Tooltip 细化样式。*
