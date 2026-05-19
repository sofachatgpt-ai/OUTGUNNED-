// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  srcDir: 'app/',

  pinia: {
    storesDirs: ['./stores/**']
  },

  // GitHub Pages 部署配置
  app: {
    baseURL: '/outgunned/',
    buildAssetsDir: '/_nuxt/',
    head: {
      title: '逆境破局系列',
      link: [
        { rel: 'icon', type: 'image/png', href: '/outgunned/assets/official/logo.png' }
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