import { existsSync } from 'node:fs'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  srcDir: 'app/',

  pinia: {
    storesDirs: ['./stores/**'],
    plugins: ['~/plugins/pinia-persist.ts']
  },

  // GitHub Pages 部署配置
  app: {
    baseURL: existsSync('.openai/hosting.json') ? '/' : '/outgunned/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: 'OUTGUNNED 中文角色卡',
      link: [
        { rel: 'icon', href: (existsSync('.openai/hosting.json') ? '/' : '/outgunned/') + 'favicon.ico' }
      ]
    }
  },

  router: {
    options: {
      hashMode: true
    }
  },

  // 靜態生成設定
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false
    }
  },
  
  // 確保 SPA 模式用於 GitHub Pages
  ssr: false,
  
})