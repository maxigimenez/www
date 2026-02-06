<script setup lang="ts">
import Footer from '@/components/Footer.vue'

const { data } = await useAsyncData('shipping-build-log', () => {
  return queryCollection('shipping').path('/shipping/build-log').first()
})

const timeline = computed(() => data.value?.meta?.timeline || [])

useSeoMeta({
  title: 'Shipping — Maxi Gimenez',
  description: 'Timeline updates for the ongoing side project build.',
})
</script>

<template>
  <div class="desktop-shell">
    <div class="absolute inset-0 -z-10">
      <div class="pointer-events-none absolute inset-0 opacity-60">
        <div class="grid-overlay absolute inset-0"></div>
      </div>
    </div>

    <div class="flex">
      <main class="mx-auto flex-1 px-4 py-10 sm:px-6 lg:px-10">
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
            <div class="prompt-path">open shipping.mdx</div>
          </div>
          <div class="ml-auto flex items-center gap-2 text-xs text-slate-700">
            <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
            Ship log
          </div>
        </div>

        <BookmarkLinks />

        <div class="window-body space-y-8 pb-10">
          <header class="space-y-3">
            <p class="text-xs uppercase tracking-[0.2em] text-slate-600">Build timeline</p>
            <h1 class="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              {{ data?.title || 'Ongoing project updates' }}
            </h1>
            <p class="text-base text-slate-700 max-w-2xl">
              {{ data?.description || 'A log of what is shipping now and what is next.' }}
            </p>
          </header>

          <ol class="space-y-4 list-none p-0">
            <li
              v-for="entry in timeline"
              :key="`${entry.date}-${entry.title}`"
              class="retro-panel m-0 p-5 mb-4"
            >
              <div class="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p class="text-xs uppercase tracking-[0.14em] text-slate-500">{{ entry.date }}</p>
                  <h2 class="text-xl font-semibold text-slate-900">{{ entry.title }}</h2>
                  <a
                    v-if="entry.link"
                    :href="entry.link"
                    target="_blank"
                    rel="noopener"
                    class="mt-1 inline-flex text-xs font-semibold text-emerald-400"
                  >
                    $ open
                  </a>
                </div>
                <span class="rounded border border-slate-300 bg-white px-2 py-1 text-xs font-semibold text-emerald-700">
                  {{ entry.status }}
                </span>
              </div>
              <p class="mt-2 text-sm text-slate-700">{{ entry.summary }}</p>
            </li>
          </ol>

          <Footer />
        </div>
      </div>
      </main>
    </div>
  </div>
</template>
