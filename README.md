# 出口IP信息 · Scripting 桌面小组件

在 iPhone 桌面实时显示当前出口的 IP、归属地、运营商与 AS —— 粉彩渐变背景、每项信息独立配色、圆体字,标题带猫咪地球图标。

与 Loon 插件「出口IP信息」(IP-Info)同一套数据源与配色,本仓库是它的 **Scripting 桌面小组件版**。

## 效果与说明

- 显示的是手机**当前默认出口**(经 Loon 默认策略的落地)
- 数据源:api.ip.sb/geoip(主,HTTPS)/ ip-api.com(备),与面板版一致
- 小号组件显示 IP / 归属地 / 运营商;中号及以上多显示 组织 / AS
- 刷新节奏由 iOS 系统决定,组件底部有「更新于」时间

## 安装

### 方式一:导入包(推荐)

下载 [ip-info-widget.zip](https://status.vyxh.top/ip-info-widget.zip)(包根目录直接是 `script.json` / `index.tsx` / `widget.tsx`),在 Scripting 中导入本项目。

### 方式二:手动粘贴

1. 在 Scripting 里新建脚本项目,命名随意(例:出口IP)
2. 在项目中新建文件 **`widget.tsx`**,把本仓库 `widget.tsx` 的内容粘进去(`index.tsx` 可有可无,仅用于 App 内预览)
3. 回桌面添加 **Scripting** 小组件(中号),长按「编辑小组件」,选择这个脚本

## 文件

| 文件 | 说明 |
| --- | --- |
| `script.json` | Scripting 项目元数据(名称 / 图标 / 颜色 / 版本) |
| `widget.tsx` | 小组件本体:取数 + 渐变界面 |
| `index.tsx` | 脚本入口:运行时在 App 内预览小组件 |

## 由来

本项目由 Muse 与 Kaggle 上的 Qwen3-14B 协作设计:Loon 面板版的渐变卡片因 Loon 渲染器限制无法实现,同一套设计在桌面小组件里完整落地。
