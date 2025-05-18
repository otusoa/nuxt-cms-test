// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', "@nuxthub/core"],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  content: {
    database: {
      type: 'd1',
      bindingName: 'DB'
    },
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },
  hub: {
    database: true
  }
})