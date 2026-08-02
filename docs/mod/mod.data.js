// components/mods.data.js
import { createContentLoader } from 'vitepress'

// 告诉 VitePress 扫描 mod/ 目录下所有的 .md 文件
export default createContentLoader('*/mod/**/*.md', {
  transform(raw) {
    return raw
      .filter(page => page.frontmatter && (page.frontmatter.modpage))
      .map(page => {
        const rawTags = page.frontmatter.tags || page.frontmatter.keywords || []
        const tags = Array.isArray(rawTags)
          ? rawTags.map(t => String(t).trim())
          : String(rawTags).split(/[,，|]/).map(t => t.trim()).filter(Boolean)
        
        const imgsrc = !!page.frontmatter.image
          ? page.frontmatter.image.imgsrc
          : ""
        
        return {
          name: page.frontmatter.title || '未命名 Mod',
          category: page.frontmatter.category || '其它',
          author: page.frontmatter.author || '未知作者',
          desc: page.frontmatter.description || '暂无介绍',
          imgsrc: imgsrc,
          link: "/zh-cn/latest" + page.url,
          link_raw: page.url || "",
          tags: tags
        }
      })
    }
})