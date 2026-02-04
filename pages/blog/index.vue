<script setup lang="ts">
import Footer from '@/components/Footer.vue'

const { data: posts } = await useAsyncData(() => queryCollection('post').all())

useSeoMeta({
  title: 'Blog — Maxi Gimenez',
  description: 'Notes on engineering leadership, frontend systems, and building products.',
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
            <div class="h-6 w-6 rounded bg-gradient-to-br from-green-400 to-green-300 flex items-center justify-center text-slate-900 font-bold">/</div>
            <div class="text-slate-700">blog.mdx</div>
          </div>
          <div class="ml-auto flex items-center gap-2 text-xs text-slate-700">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            Reading list
          </div>
        </div>

        <BookmarkLinks />

        <div class="window-body space-y-10 pb-10">
          <header class="space-y-3">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-600">Blog index</p>
            <h1 class="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">All posts</h1>
            <p class="text-base text-slate-700 max-w-2xl">Writing about engineering leadership, frontend systems, and building teams that ship.</p>
          </header>

          <div class="grid gap-4 md:grid-cols-2">
            <NuxtLink
              v-for="post in posts || []"
              :key="post.id"
              :to="{ path: post.path }"
              class="retro-panel flex flex-col gap-2 p-5 transition hover:-translate-y-1 hover:border-slate-400 hover:shadow-lg"
            >
              <p class="text-xs uppercase tracking-[0.15em] text-slate-500">{{ post.meta.date }}</p>
              <h3 class="text-xl font-semibold text-slate-900">{{ post.title }}</h3>
              <p class="text-sm text-slate-700 line-clamp-2">
                {{ post.description || post.excerpt || 'Notes on engineering leadership, frontend craft, and product mindset.' }}
              </p>
              <span class="text-sm font-semibold text-emerald-700">Read post →</span>
            </NuxtLink>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>
