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
  ,
    blog: defineCollection({
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
        tag: z.array(z.string())
      })
    })
  }
})
