<script setup lang="ts">
import Footer from '@/components/Footer.vue'

const { data: posts } = await useAsyncData(() => {
  return queryCollection('post').all()
})

useSeoMeta({
  title: 'maxi gimenez - team lead',
  description: 'Hi! I\'m Maxi, a developer from Argentina, feel free reach out!',
})
</script>

<template>
  <div className="container mx-auto max-w-screen-sm px-4 md:px-0">
    <div class="mt-12">
      <img class="rounded-full h-24 w-24 object-cover" src="/me.jpg" alt="Me in NYC early 2020" />

      <h1 class="mt-5 mb-0 text-3xl">Hi!, I'm <strong>Maxi</strong> 🇦🇷 </h1>
      <h2 class="m-0 mb-6 text-xl">Team Lead at <a href="https://checklyhq.com" title="Delightful Active Monitoring for Developers" target="_blank">ChecklyHQ</a></h2>

      <div>
        <span class="rounded-md bg-gray-200 mr-2 px-2 py-1">👨‍💻 Developer</span>
        <span class="rounded-md bg-gray-200 mr-2 px-2 py-1">✈️ Traveler</span>
        <span class="rounded-md bg-gray-200 mr-2 px-2 py-1">🚀 Maker</span>
        <span class="rounded-md bg-gray-200 mr-2 px-2 py-1">👨‍🍳 Chef Enthusiast</span>
        <span class="rounded-md bg-gray-200 mr-2 px-2 py-1">😻 Cat owner</span>
      </div>

      <p class="my-5">+10 years experienced, dynamic, and quality-oriented developer focused on creating re-usable and high-performance applications driven by client satisfaction & smooth developers experience.</p>
      <p class="my-5">Highly skilled in the end-to-end SDLC, effectively working on sustainable code thorough planification and responsible execution, crafting components libraries, and working ahead of future changes in order to save time and money.</p>

      <p class="my-5 text-gray-700">💬 Wanna talk? Reach me out on <a href="https://twitter.com/gmaxi_" title="Reach me out on X" target="_blank" className="underline">X</a>!</p>
    </div>

    <div class="my-12">
      <h2 class="text-2xl mb-8">
        <span class="w-2 h-1 bg-green-400 inline-block mr-1"></span>
        Blog
      </h2>

      <div
        v-for="post in posts"
        :key="post.id"
        class="my-6"
      >
        <RouterLink :to="{ path: post.path }">
          <h3 class="text-xl mb-2 cursor-pointer hover:text-green-400">{{ post.title }} <span class="text-gray-600 text-sm ml-1">{{ post.meta.date }}</span></h3>
        </RouterLink>
      </div>
    </div>

    <div class="my-12">
      <h2 class="text-2xl mb-8">
        <span class="w-2 h-1 bg-green-400 inline-block mr-1"></span>
        Side Projects
      </h2>

      <div class="grid md:grid-cols-2 row-gap-10 grid-cols-1 gap-6">
        <div>
          <h3 class="text-xl mb-2">🏎️ Revora</h3>
          <p class="mb-1">F1 insights for enthusiasts, engineers, and content creators.</p>
          <a href="https://revora.app/" title="Revora" target="_blank" class="underline">Check project</a>
        </div>
        <div>
          <h3 class="text-xl mb-2">📰 7Reads</h3>
          <p class="mb-1">7Reads is a minimal mindful reading list for Google Chrome.</p>
          <a href="https://7reads.now.sh/" title="7Reads" target="_blank" class="underline">Check project</a>
        </div>
        <div>
          <h3 class="text-xl mb-2">🧡 Skuap.com <span class="text-sm text-white bg-yellow-600 rounded-md py-1 px-2 uppercase">Unmaintained</span></h3>
          <p class="mb-1">Skuap is a platform designed for leaders to create high performing teams.</p>
        </div>
        <div>
          <h3 class="text-xl mb-2">💎 SheetAPI.co <span class="text-sm text-white bg-yellow-600 rounded-md py-1 px-2 uppercase">Unmaintained</span></h3>
          <p class="mb-1">SheetAPI allows to transform Google Sheet's into RESTful API's.</p>
        </div>
        <div>
          <h3 class="text-xl mb-2">📊 Updatefy.co <span class="text-sm text-white	bg-red-600 rounded-md py-1 px-2 uppercase">Exit</span></h3>
          <p class="mb-1">Updatefy is no-code platform to embed Google Sheet's into any webpage.</p>
        </div>
        <div>
          <h3 class="text-xl mb-2">🤑 CurrencyMenu.com <span class="text-sm text-white bg-yellow-600 rounded-md py-1 px-2 uppercase">Unmaintained</span></h3>
          <p class="mb-1">Discover exchange rates directly from your menu bar.</p>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
