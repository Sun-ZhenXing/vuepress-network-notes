import { defineUserConfig, defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'

const USER_NAME = 'Sun-ZhenXing'
const BASE_PATH = '/vuepress-network-notes/'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '计算机网络笔记合集',
  description: '计算机网络笔记',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '计算机网络笔记合集',
      description: '计算机网络笔记',
    }
  },
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.svg` }]
  ],
  base: BASE_PATH,
  markdown: {
    code: {
      lineNumbers: 10
    }
  },
  theme: defaultTheme({
    logo: '/favicon.svg',
    repo: `${USER_NAME}${BASE_PATH}`,
    editLinkText: '在 GitHub 上编辑此页',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    navbar: [
    ],
    sidebar: {
    }
  }),
  plugins: [
    mdEnhancePlugin({
      gfm: true,
      container: true,
      linkCheck: true,
      vPre: true,
      tabs: true,
      codetabs: true,
      align: true,
      attrs: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      imageLazyload: true,
      tasklist: true,
      katex: true,
      mermaid: true,
      delay: 200,
    }),
    searchPlugin({
    }),
    copyCodePlugin({
      showInMobile: true,
    }),
  ]
})
