import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    post: defineCollection({
      type: 'page',
      source: 'post/*.md'
    }),
    shipping: defineCollection({
      type: 'page',
      source: 'shipping/*.md'
    }),
  }
})
