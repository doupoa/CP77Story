import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CP77 Text Database",
  description: "《赛博朋克2077》的中文资料库",
  lang: "zh-CN",
  cleanUrls: true,
  srcExclude: ["**/README.md", "**/TODO.md"],
  metaChunk: true,
  appearance: "dark",
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
    editLink: {
      pattern:
        "https://github.com/doupoa/CP77-Text-Database/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
      search: {
        provider: "local",
      },
    },

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
