import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    post: defineCollection({
      type: 'page',
      source: 'post/*.md'
    })
  }
})
