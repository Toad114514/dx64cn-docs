# DJUI 系统 / 函数
这是一个在 excoop 就出现的系统，也许全称叫 `Djoslin0's User Interface`。与原版sm64的内容不同，此系统提供了一整套界面叠加层，允许在上面显示任意内容。coopdx的菜单以及Lua模组制作界面都需要使用djui系统。

## djui_chat_message.h

### djui_chat_message_create
向游戏的聊天框输出一段 `message`
```lua
djui_chat_message_create("Hello World")
```

| 参数 | 类型 |
| ----- | ---- |
| message | `string` |

返回 无

## djui_console.h
### djui_console_toggle

切换游戏内控制台的显示
```lua
djui_console_toggle()
```
返回 无

### djui_console_is_open

检测游戏内的控制台是否已打开
```lua
local resu = djui_console_is_open()
```

返回 `boolean` - 控制台打开时为 `true`

## djui_gfx.h
### djui_gfx_get_scale
获得当前 DJUI 的视觉比例

```lua
local numberValue = djui_gfx_get_scale()
```

返回 `number`

## djui_hud_utils.h (主要最多使用)
### djui_hud_get_resolution

获取当前 Hud 的分辨率类型
```lua
local resu = djui_hud_get_resolution
```
返回 `integer`

### djui_hud_set_resolution

设置 Hud 分辨率类型
```lua
djui_hud_set_resolution(RESOLUTION_HUD)
```

| 参数 | 类型 |
| ----- | ---- |
| resolutionType | [enum HudUtilsResolution](constants.md#enum-HudUtilsResolution) |

返回 无

### djui_hud_get_filter
获取 Hud 的纹理过滤
```lua
local integer = djui_hud_get_filter()
```
返回 `integer`

### djui_hud_set_filter
设置 Hud 纹理过滤

```lua
djui_hud_set_filter(filterType)
```

| 参数 | 类型 |
| ----- | ---- |
| filterType | [enum HudUtilsFilter](constants.md#enum-HudUtilsFilter) |

返回 无

### djui_hud_get_font
获取当前设置的字体
```lua
local font = djui_hud_get_font()
```
返回 `integer`

### djui_hud_set_font
设置当前 Hud 字体
```lua
djui_hud_set_font(FONT_HUD)
```

| 参数 | 类型 |
| ----- | ---- |
| fontType | `integer` |

返回 无

### djui_hud_get_color
获取目前设置的全局颜色
```lua
local djuicolors = djui_hud_get_color()
```

返回 `djuiColor`