import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

export default defineContentConfig({
  collections: {
    content: defineCollection(
      asSitemapCollection({
        type: 'page',
        source: '**',
        schema: z.object({
          image: z.object({
            src: z.string(),
            alt: z.string()
          }),
          date: z.date(),
          tag: z.enum(['その他', 'Linux', 'Nuxt(Vue.js)']).optional(),
        }),
      }),
    ),
    blog: defineCollection(
      asSitemapCollection({
        // Load every file inside the `content` directory
        source: 'blog/*.md',
        // Specify the type of content in this collection
        type: 'page',
        schema: z.object({
          image: z.object({
            src: z.string(),
            alt: z.string()
          }),
          date: z.date(),
          tag: z.enum(['その他', 'Linux', 'Nuxt(Vue.js)']).optional(),
        }),
      }),
    ),
  },
})
