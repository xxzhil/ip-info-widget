// 出口IP信息 — Scripting 脚本入口
// 运行本脚本 = 在 Scripting 内预览桌面小组件(真正的界面在 widget.tsx)
import { Script, Widget } from "scripting"

async function main() {
  await Widget.preview({ family: "systemMedium" })
  Script.exit()
}

main()
