import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  // base: process.env.NODE_ENV === 'production' ? '/1/' : '/',
  base: '/1/',
  title: '1',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/home', '/get-started'],
  }),

  bundler: viteBundler(),
})
