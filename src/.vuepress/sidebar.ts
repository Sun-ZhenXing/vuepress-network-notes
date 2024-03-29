import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': [
    '',
    {
      children: 'structure',
      collapsible: true,
      icon: 'fluent:document-bullet-list-24-filled',
      prefix: '1.network-basic/',
      text: '1. 计算机网络基础',
    },
  ],
})
