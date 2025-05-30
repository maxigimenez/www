<script setup>
import Footer from '@/components/Footer.vue'

const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`post-${slug}`, () => {
  return queryCollection('post').path(`/post/${slug}`).first()
})

useSeoMeta({
  title: `${post.value?.title} - maxi gimenez`,
})
</script>

<template>
  <div
    v-if="post.meta.image"
    class="w-full"
  >
    <img :src="post.meta.image" class="h-80 w-full object-cover" />
  </div>

  <div class="container mx-auto max-w-screen-sm px-4 md:px-0 mt-10">
    <RouterLink
      :to="{ path: '/' }"
      class="flex items-center gap-2"
    >
      <Icon name="uil:arrow-left" />
      <a class="text-sm">Go back</a>
    </RouterLink>

    <h1 class="text-3xl mt-3">{{ post.title }}</h1>
    <div class="text-gray-600 text-sm mb-4">Published on {{ post.meta.date }}</div>

    <article class="mb-10">
      <ContentRenderer :value="post" class="space-y-2" />
    </article>

    <Footer />
  </div>
</template>
