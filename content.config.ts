import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**',
      schema: z.object({
        image: z.object({
          src: z.string(),
          alt: z.string()
        }),
        date: z.date(),
        tag: z.array(z.string())
      })
    })
  },
})
