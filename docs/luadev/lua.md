# 官方的 LuaAPI 手册
参考了官方仓库的 LuaAPI 手册，随时更新

## 提示
- 开发 Lua 模组时，运行游戏内的控制台。Lua 的报错通常在这里可见，但必须在游戏启动时带 `--console` 参数
- 当一个函数请求一个时间参数时，它几乎总是在帧中
- 你可以使用 `print()` 命令用于调试。输出的日志可以在控制台中看到（不是游戏内控制台）
- 你可以创建一个新的文件夹用于存放多个 Lua 文件，主文件命名需要命名为 `main.lua`。 Dynos 模型可以放在 `<your mod folder>/actors/` 里
<br />

## 函数分类
[DJUI Hud](fun/djui.md)

## 向导
- [VSCode 配置](guides/vs-code-setup.md)
- [Hooks](guides/hooks.md)
- [gMarioStates](guides/mario-state.md)
- [Behavior Object Lists](guides/object-lists.md)
- [Lighting Engine](guides/lighting-engine.md)
- [ModFS](guides/modfs.md)

## 关于 PlayerInxex 的重要说明

重要的是要意识到每个玩家的 `localIndex` 是不同的（不幸的是）

所以无论是同一个玩家，`gMarioStates[]`, `gNetworkPlayers[]` 以及 `gPlayerSyncTable[]` 都是不同的

幸运的是 `gPlayerSyncTable[]` 可以自动转换 playerIndex，所以 `gPlayerSyncTable[0].example = 1` 会为所有玩家设置

每个玩家的 `globalIndex` 在所有人连接任何房间时都是一致的。所以你想要排序一些什么鬼则你需要获取 `gNetworkPlayers[<LOCAL INDEX HERE>].globalIndex` 变量

这一切都是从当时只有两名玩家时遗留下来的石山，那会还是个合理的特性罢了
