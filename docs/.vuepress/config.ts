import { defineUserConfig, defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { searchProPlugin } from 'vuepress-plugin-search-pro'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { autoCatalogPlugin } from 'vuepress-plugin-auto-catalog'

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
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    navbar: [
      {
        text: '合集',
        children: [
          '/application-layer-protocol/',
          '/network-basic/',
          '/browser/',
          '/reference-model/',
          '/other-common-protocols/',
        ]
      }
    ],
    sidebar: {
      '/application-layer-protocol/': [
        {
          text: '应用层协议',
          children: [
            {
              text: 'DNS',
              collapsible: true,
              children: [
                '/application-layer-protocol/dns/',
                '/application-layer-protocol/dns/dns-sd/',
                '/application-layer-protocol/dns/mdns/',
                '/application-layer-protocol/http/',
              ]
            }
          ]
        }
      ],
      '/network-basic/': [
        {
          text: '计算机网络基础',
          children: [
            '/network-basic/chapter01/',
            '/network-basic/chapter02/',
            '/network-basic/chapter03/',
            '/network-basic/chapter04/',
            '/network-basic/chapter05/',
          ]
        }
      ],
      '/other-common-protocols/': [
        {
          text: '其他常用协议',
          children: [
            '/other-common-protocols/socks5/',
          ]
        }
      ],
      '/reference-model/': [],
      '/browser/': [
        {
          text: '浏览器相关',
          children: [
            '/browser/event-mechanism/',
            '/browser/security/'
          ]
        }
      ]
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
      imgLazyload: true,
      tasklist: true,
      katex: true,
      mermaid: true,
      delay: 200,
      stylize: [
        {
          matcher: '@def',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'tip', vertical: 'middle' },
              content: '定义'
            }
          }
        }
      ]
    }),
    searchProPlugin({}),
    autoCatalogPlugin({}),
    copyCodePlugin({
      showInMobile: true
    })
  ]
})
