// components/mods.data.js
import { createContentLoader } from 'vitepress'

// 告诉 VitePress 扫描 mod/ 目录下所有的 .md 文件
export default createContentLoader('*/mod/**/*.md', {
  transform(raw) {
    return raw
      // 过滤掉列表主页（比如 index.md），只保留具体的 mod 页面
      // .filter(page => !page.url.endsWith('/') && !page.url.endsWith('/index.html'))
      .filter(page => page.frontmatter && (page.frontmatter.modpage))
      .map(page => ({
        name: page.frontmatter.title || '未命名 Mod',
        category: page.frontmatter.category || '其它',
        author: page.frontmatter.author || '未知作者',
        desc: page.frontmatter.description || '暂无介绍',
        imgsrc: page.frontmatter.image.imgsrc || "",
        link: "/zh-cn/latest" + page.url // 自动生成点击跳转的链接！
      }))
  }
})