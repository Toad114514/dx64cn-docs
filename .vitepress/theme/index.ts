import DefaultTheme from 'vitepress/theme'
import './custom.css' // 引入你的自定义高级样式
import { h } from 'vue'
import ModInfoTable from '/docs/mod/mod_table.vue'

export default {
  extends: DefaultTheme,
  
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(ModInfoTable) // 在任何文档的正文前自动插入该组件
    })
  }
}