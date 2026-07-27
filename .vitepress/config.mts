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
        text: '主页',
        items: [
          { text: '导航', link: '/docs/index' },
          { text: "向导", link: "/docs/guide" }
        ]
      },
      {
        text: "了解版本",
        items: [
          { text: "索引", link: "/docs/version" },
          { text: "Coopdx", link: "/docs/version/dx" },
          { text: "Coopdx 汉化版", link: "/docs/version/cndx" },
        ]
      },
      {
        text: "特性",
        items: [
          { text: "模组玩法", link: "/docs/feature/mod" }
        ]
      },
      {
        text: "模组",
        items: [
          { text: "dxModDB 数据库", link: "/docs/mod" },
          { text: "开发文档", link: "/docs/luadev" }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/toad114514/dx64cn-docs' }
    ]
  }
})
