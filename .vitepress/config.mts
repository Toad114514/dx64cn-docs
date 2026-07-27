import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dx64cn-Docs",
  base: '/zh-cn/latest/',
  description: "非官方中文 sm64coopdx 文档",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '入门指南', link: '/docs/guide' },
      { text: 'dxModDB', link: '/docs/mod' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/toad114514/dx64cn-docs' }
    ]
  }
})
