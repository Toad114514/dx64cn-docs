# VSCode 配置

一个好的 IDE 能帮助你更好的写代码，这里使用 Visual Studio Code（俗称微软大战代码）来为你的 Coopdx 设置开发环境

---

1. 在 VSCode 中安装 `sumneko` 制作的 `Lua` 插件

![extension](https://user-images.githubusercontent.com/12403224/158046548-a8deba76-ca5f-4f35-aa73-62984820d290.png)

---

2. 转到设置 (`ctrl+,`)，在搜索框中输入 `diagnostics disable` :

![diagnostics](https://user-images.githubusercontent.com/12403224/158046741-3bcf513c-5da8-42ee-b3aa-ab2dbab0e3dc.png)

---

3. 添加一个 `lowercase-global` 的选项然后点击 `ok`

![lowercase-global](https://user-images.githubusercontent.com/12403224/158046761-65883e86-fd17-4d90-a566-78fe93b4b51d.png)

---

4. 再次向搜索框中输入 `workspace library` :

![workspace-library](https://user-images.githubusercontent.com/12403224/158046786-12b8a150-65a7-4f23-96c7-1508f8f80713.png)

---

5. 添加一个包含 `<你的仓库>/autogen/lua_definitions` 位置的新项目

![lua-definitions](https://user-images.githubusercontent.com/12403224/158046824-1894318a-7ce9-41ef-bacc-17f95fa05f31.png)

---

6. 打开任意 Lua 模组文件，看我自动补全牛逼不。
![autocompletion](https://user-images.githubusercontent.com/12403224/158046991-77670bae-33a9-467c-a07d-3ce6eba28673.png)

---

注意：对于你的自定义函数，你需要提供类型定义才能获得自动补全

举个例子，这个马里奥函数不支持自动补全
```
function mario_update(m)
    -- 一些78代码
end
```

但这个支持自动补全：
```
--- @param m MarioState
function mario_update(m)
    -- code here
end
```