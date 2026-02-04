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
  <div class="desktop-shell">
    <div class="absolute inset-0 -z-10">
      <div class="pointer-events-none absolute inset-0 opacity-60">
        <div class="grid-overlay absolute inset-0"></div>
      </div>
    </div>

    <div class="mx-auto flex-1 px-4 py-10 sm:px-6 lg:px-10">
      <div class="window max-w-6xl mx-auto w-full">
        <div class="window-toolbar">
          <div class="flex items-center gap-2">
            <RouterLink :to="{ path: '/' }" class="toolbar-btn flex items-center justify-center">
              ◀
            </RouterLink>
            <button class="toolbar-btn">▶</button>
            <button class="toolbar-btn">↻</button>
          </div>
          <div class="ml-3 flex items-center gap-2 text-xs">
            <div class="text-slate-700">blog/{{ post.slug || 'post' }}.md</div>
          </div>
          <div class="ml-auto flex items-center gap-2 text-xs text-slate-700">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            Reading mode
          </div>
        </div>

        <BookmarkLinks />

        <div class="window-body space-y-10 pb-10">
          <header class="space-y-3">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-600">Blog · {{ post.meta.date }}</p>
            <h1 class="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">{{ post.title }}</h1>
          </header>

          <div
            v-if="post.meta.image"
            class="mt-6 overflow-hidden rounded-md border border-slate-200"
          >
            <img :src="post.meta.image" class="h-80 w-full object-cover" />
          </div>

          <article class="glass-panel soft-border mt-6 space-y-4 p-6 rounded-md">
            <ContentRenderer :value="post" class="space-y-4" />
          </article>

          <div class="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
