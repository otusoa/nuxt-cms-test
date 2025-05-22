import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSitemapCollection } from '@nuxtjs/sitemap/content'

const tagOptions = ['その他', 'Linux', 'Nuxt(Vue.js)', 'マネジメント'] as const;

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
          tag: z.array(z.enum(tagOptions)),
        }),
      }),
    ),
    blog: defineCollection(
      asSitemapCollection({
        source: 'blog/*.md',
        type: 'page',
        schema: z.object({
          image: z.object({
            src: z.string(),
            alt: z.string()
          }),
          date: z.date(),
          tag: z.array(z.enum(tagOptions)),
        }),
      }),
    ),
  },
})
