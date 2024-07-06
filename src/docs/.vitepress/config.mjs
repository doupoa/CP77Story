import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CP77 Text Database",
  description: "《赛博朋克2077》的中文资料库",
  lang: "zh-Hans",
  cleanUrls: true,
  srcExclude: ["**/README.md", "**/TODO.md"],
  metaChunk: true,
  appearance: "dark",

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
    // ['link', { rel: 'icon', type: 'image/png', href: '/vitepress-logo-mini.png' }],
    ["meta", { name: "theme-color", content: "#5f67ee" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-Hans" }],
    [
      "meta",
      {
        property: "og:title",
        content: "CP77 Text Database | 赛博朋克2077资料库",
      },
    ],
    ["meta", { property: "og:site_name", content: "CP77 Text Database" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://vitepress.dev/vitepress-og.jpg",
      },
    ],
    ["meta", { property: "og:url", content: "https://vitepress.dev/" }],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    nav: [
      { text: "主页", link: "/" },
      { text: "关于", link: "/markdown-examples" },
    ],
    footer: {
      message:
        "本站所有内容（除 <a href='https://cdprojektred.com/'>CD PROJEKT</a> 拥有的及另外声明的）均以遵循<a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'> CC BY-NC-SA 4.0 </a>协议授权",
      copyright: "Copyright © 2024 CP77 Text Database",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    outline: {
      label: "页面导航",
    },
    editLink: {
      pattern:
        "https://github.com/doupoa/CP77-Text-Database/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    search: {
      provider: "local",
      placeholder: "搜索文档",
      translations: {
        button: {
          buttonText: "搜索文档",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          searchBox: {
            resetButtonTitle: "清除查询条件",
            resetButtonAriaLabel: "清除查询条件",
            cancelButtonText: "取消",
            cancelButtonAriaLabel: "取消",
          },
          startScreen: {
            recentSearchesTitle: "搜索历史",
            noRecentSearchesText: "没有搜索历史",
            saveRecentSearchButtonTitle: "保存至搜索历史",
            removeRecentSearchButtonTitle: "从搜索历史中移除",
            favoriteSearchesTitle: "收藏",
            removeFavoriteSearchButtonTitle: "从收藏中移除",
          },
          errorScreen: {
            titleText: "无法获取结果",
            helpText: "你可能需要检查你的网络连接",
          },
          footer: {
            selectText: "选择",
            navigateText: "切换",
            closeText: "关闭",
            searchByText: "搜索提供者",
          },
          noResultsScreen: {
            noResultsText: "无法找到相关结果",
            suggestedQueryText: "你可以尝试查询",
            reportMissingResultsText: "你认为该查询应该有结果？",
            reportMissingResultsLinkText: "点击反馈",
          },
        },
      },
    },
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "术语",
        link: "/term",
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/doupoa/CP77-Text-Database" },
    ],
  },
});

// function nav(): DefaultTheme.NavItem[] {
//   return [
//     {
//       text: '指南',
//       link: '/zh/guide/what-is-vitepress',
//       activeMatch: '/zh/guide/'
//     },
//     {
//       text: '参考',
//       link: '/zh/reference/site-config',
//       activeMatch: '/zh/reference/'
//     },
//     {
//       text: pkg.version,
//       items: [
//         {
//           text: '更新日志',
//           link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
//         },
//         {
//           text: '参与贡献',
//           link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
//         }
//       ]
//     }
//   ]
// }

// function sidebarGuide(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: '简介',
//       collapsed: false,
//       items: [
//         { text: '什么是 VitePress？', link: 'what-is-vitepress' },
//         { text: '快速开始', link: 'getting-started' },
//         { text: '路由', link: 'routing' },
//         { text: '部署', link: 'deploy' }
//       ]
//     },
//     {
//       text: '写作',
//       collapsed: false,
//       items: [
//         { text: 'Markdown 扩展', link: 'markdown' },
//         { text: '资源处理', link: 'asset-handling' },
//         { text: 'frontmatter', link: 'frontmatter' },
//         { text: '在 Markdown 使用 Vue', link: 'using-vue' },
//         { text: '国际化', link: 'i18n' }
//       ]
//     },
//     {
//       text: '自定义',
//       collapsed: false,
//       items: [
//         { text: '自定义主题', link: 'custom-theme' },
//         { text: '扩展默认主题', link: 'extending-default-theme' },
//         { text: '构建时数据加载', link: 'data-loading' },
//         { text: 'SSR 兼容性', link: 'ssr-compat' },
//         { text: '连接 CMS', link: 'cms' }
//       ]
//     },
//     {
//       text: '实验性功能',
//       collapsed: false,
//       items: [
//         { text: 'MPA 模式', link: 'mpa-mode' },
//         { text: 'sitemap 生成', link: 'sitemap-generation' }
//       ]
//     },
//     { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
//   ]
// }

// function sidebarReference(): DefaultTheme.SidebarItem[] {
//   return [
//     {
//       text: '参考',
//       items: [
//         { text: '站点配置', link: 'site-config' },
//         { text: 'frontmatter 配置', link: 'frontmatter-config' },
//         { text: '运行时 API', link: 'runtime-api' },
//         { text: 'CLI', link: 'cli' },
//         {
//           text: '默认主题',
//           base: '/zh/reference/default-theme-',
//           items: [
//             { text: '概览', link: 'config' },
//             { text: '导航栏', link: 'nav' },
//             { text: '侧边栏', link: 'sidebar' },
//             { text: '主页', link: 'home-page' },
//             { text: '页脚', link: 'footer' },
//             { text: '布局', link: 'layout' },
//             { text: '徽章', link: 'badge' },
//             { text: '团队页', link: 'team-page' },
//             { text: '上下页链接', link: 'prev-next-links' },
//             { text: '编辑链接', link: 'edit-link' },
//             { text: '最后更新时间戳', link: 'last-updated' },
//             { text: '搜索', link: 'search' },
//             { text: 'Carbon Ads', link: 'carbon-ads' }
//           ]
//         }
//       ]
//     }
//   ]
// }

// export const search: DefaultTheme.AlgoliaSearchOptions['locales'] = {
//   zh: {
//     placeholder: '搜索文档',
//     translations: {
//       button: {
//         buttonText: '搜索文档',
//         buttonAriaLabel: '搜索文档'
//       },
//       modal: {
//         searchBox: {
//           resetButtonTitle: '清除查询条件',
//           resetButtonAriaLabel: '清除查询条件',
//           cancelButtonText: '取消',
//           cancelButtonAriaLabel: '取消'
//         },
//         startScreen: {
//           recentSearchesTitle: '搜索历史',
//           noRecentSearchesText: '没有搜索历史',
//           saveRecentSearchButtonTitle: '保存至搜索历史',
//           removeRecentSearchButtonTitle: '从搜索历史中移除',
//           favoriteSearchesTitle: '收藏',
//           removeFavoriteSearchButtonTitle: '从收藏中移除'
//         },
//         errorScreen: {
//           titleText: '无法获取结果',
//           helpText: '你可能需要检查你的网络连接'
//         },
//         footer: {
//           selectText: '选择',
//           navigateText: '切换',
//           closeText: '关闭',
//           searchByText: '搜索提供者'
//         },
//         noResultsScreen: {
//           noResultsText: '无法找到相关结果',
//           suggestedQueryText: '你可以尝试查询',
//           reportMissingResultsText: '你认为该查询应该有结果？',
//           reportMissingResultsLinkText: '点击反馈'
//         }
//       }
//     }
