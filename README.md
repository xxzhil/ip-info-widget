# 出口IP信息 · Scripting 桌面小组件

在 iPhone 桌面实时显示当前出口的 IP、归属地、运营商、AS 与 IP 质量（类型、风险评分） —— 不自绘背景，直接使用 iOS 26 系统小组件的透明玻璃外观、每项信息独立配色，标题带系统地球图标。

与 Loon 插件「出口IP信息」(IP-Info)同一套数据源与配色,本仓库是它的 **Scripting 桌面小组件版**。

## 效果与说明

- 显示的是手机**当前默认出口**(经 Loon 默认策略的落地)
- 数据源:api.ip.sb/geoip(主,HTTPS)/ ip-api.com(备),与面板版一致;类型与风险来自 proxycheck.io + ip-api 扩展字段(与 Loon 面板「质量版」同款)
- 小号组件显示 IP / 归属地 / 类型 / 风险;中号显示单栏全套(组织行略去,面板版保留)
- **大号 / 特大号为双栏**:左栏基础信息 + 组织 + 时区 + 延迟(Cloudflare / Google 204 端点计时),右栏「流媒体与 AI 解锁」(Netflix / YouTube / TikTok / ChatGPT 的可用状态与地区)+「服务状态」(通过 Uptime Kuma 公开 API 读取 status.vyxh.top 的 7 项服务实时状态与延迟,免登录);这些探测仅在双栏尺寸时执行,全部带超时,失败只显示「未知 / 不可达」
- 全部请求带超时保护,某个数据源慢或失败时只少显示对应行,不会整块空白
- 刷新:组件会向系统申请约 15 分钟自动刷新一次(系统按预算批准);标题行的「刷新」按钮可手动立即刷新全部数据
- 刷新节奏其余部分仍由 iOS 系统决定,标题行右侧有「更新于」时间
- 刷新节奏由 iOS 系统决定,组件底部有「更新于」时间

## 安装

### 方式一:导入包(推荐)

下载 [ip-info-widget.zip](https://status.vyxh.top/ip-info-widget.zip)(包根目录直接是 `script.json` / `index.tsx` / `widget.tsx` / `app_intents.tsx`),在 Scripting 中导入本项目。

### 方式二:手动粘贴

1. 在 Scripting 里新建脚本项目,命名随意(例:出口IP)
2. 在项目中新建文件 **`widget.tsx`**,把本仓库 `widget.tsx` 的内容粘进去;再新建 **`app_intents.tsx`**,粘入同名文件内容(**缺了它刷新按钮会让整个组件报错**);`index.tsx` 可有可无,仅用于 App 内预览
3. 回桌面添加 **Scripting** 小组件,长按「编辑小组件」,选择这个脚本

## 文件

| 文件 | 说明 |
| --- | --- |
| `script.json` | Scripting 项目元数据(名称 / 图标 / 颜色 / 版本) |
| `widget.tsx` | 小组件本体：取数 + 玻璃质感界面 |
| `app_intents.tsx` | 交互意图:标题行「刷新」按钮的动作(重新加载全部小组件) |
| `index.tsx` | 脚本入口:运行时在 App 内预览小组件 |

## 由来

本项目由 Muse 与 Kaggle 上的 Qwen3-14B 协作设计:Loon 面板版的渐变卡片因 Loon 渲染器限制无法实现,同一套设计在桌面小组件里完整落地。
