// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/sitemap',
    "nuxt-gtag",
    "@nuxtjs/google-adsense",
    'nuxt-seo-utils',
    'nuxt-site-config',
    '@nuxt/content',
    "@nuxthub/core",
    '@nuxtjs/robots',
    '@sentry/nuxt/module',
  ],

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-04-03',

  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],

  nitro: {
    preset: 'cloudflare_pages',
  },

  gtag: {
    id: "G-3ZKKED8546",
  },

  googleAdsense: {
    id: 'ca-pub-4706745506007924',
    pageLevelAds: true,
  },

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB'
    },
    preview: {
      api: 'https://api.nuxt.studio'
    },
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-dark',
          }
        },
        toc: {
          depth: 3,
          searchDepth: 3,
        }
      }
    }
  },

  hub: {
    database: true
  },

  sitemap: {
    xsl: false,
  },

  site: {
    url: "https://org.pitahex.com",
    name: "ピタマイ(PitaMai)・ブログ",
  },

  sentry: {
    sourceMapsUploadOptions: {
      org: 'pitamai-technology',
      project: 'javascript-nuxt',
    },
  },

  sourcemap: {
    client: 'hidden',
  },
})