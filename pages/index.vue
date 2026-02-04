<script setup lang="ts">
import Footer from '@/components/Footer.vue'

const { data: posts } = await useAsyncData(() => queryCollection('post').all())

const sideProjects = [
  {
    emoji: '🏎️',
    title: 'Revora',
    description: 'F1 insights for enthusiasts, engineers, and creators.',
    link: 'https://revora.app/',
    status: 'Live',
    tone: 'emerald',
  },
  {
    emoji: '📰',
    title: '7Reads',
    description: 'A mindful reading list extension that respects your attention.',
    link: 'https://7reads.now.sh/',
    status: 'Live',
    tone: 'sky',
  },
  {
    emoji: '🧡',
    title: 'Skuap.com',
    description: 'A platform for leaders to build high performing teams.',
    link: null,
    status: 'Paused',
    tone: 'amber',
  },
  {
    emoji: '💎',
    title: 'SheetAPI.co',
    description: 'Turn Google Sheets into RESTful APIs with minutes of setup.',
    link: null,
    status: 'Paused',
    tone: 'amber',
  },
  {
    emoji: '📊',
    title: 'Updatefy.co',
    description: 'No-code embeds for Google Sheets. Shipped, sold, and sunset.',
    link: null,
    status: 'Exit',
    tone: 'rose',
  },
  {
    emoji: '🤑',
    title: 'CurrencyMenu.com',
    description: 'Menu bar app to view live exchange rates at a glance.',
    link: null,
    status: 'Paused',
    tone: 'amber',
  },
]

const focuses = [
  {
    title: 'Product leadership',
    description: 'Leading teams shipping monitoring tools at ChecklyHQ, keeping engineers fast and fearless.',
  },
  {
    title: 'Engineering craft',
    description: 'Guiding frontend architecture, design systems, and durable delivery practices.',
  },
  {
    title: 'Playful storytelling',
    description: 'Blending sharp execution with a friendly, human tone across docs, talks, and UX.',
  },
]

const stats = [
  { label: 'Years shipping', value: '14+' },
  { label: 'Teams led', value: '4' },
  { label: 'Side projects', value: '6' },
  { label: 'Countries worked from', value: '7' },
]

useSeoMeta({
  title: 'Maxi Gimenez — Engineering Manager & Maker',
  description: 'Engineering manager at ChecklyHQ with 14+ years building high-performing engineering teams and playful products.',
})
</script>

<template>
  <div class="desktop-shell">
    <div class="absolute inset-0 pointer-events-none opacity-60">
      <div class="grid-overlay absolute inset-0"></div>
    </div>

    <div class="flex">
      <main class="mx-auto flex-1 px-4 py-10 sm:px-6 lg:px-10">
        <div class="window max-w-6xl mx-auto">
          <div class="window-toolbar">
            <div class="flex items-center gap-2">
              <button class="toolbar-btn">◀</button>
              <button class="toolbar-btn">▶</button>
              <button class="toolbar-btn">↻</button>
            </div>
            <div class="ml-3 flex items-center gap-2 text-xs">
              <div class="h-6 w-6 rounded bg-gradient-to-br from-orange-400 to-amber-200 flex items-center justify-center text-slate-900 font-bold">MG</div>
              <div class="text-slate-700">home.mdx</div>
            </div>
          </div>

          <div class="border-b border-slate-300 bg-slate-50 px-3 py-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
            <a href="#work" class="flex items-center gap-1 border border-slate-300 bg-white px-2 py-1 rounded">
              <Icon name="uil:briefcase" />
              Work
            </a>
            <a href="#projects" class="flex items-center gap-1 border border-slate-300 bg-white px-2 py-1 rounded">
              <Icon name="uil:apps" />
              Projects
            </a>
            <a href="/blog" class="flex items-center gap-1 border border-slate-300 bg-white px-2 py-1 rounded">
              <Icon name="uil:document-layout-left" />
              Blog
            </a>
            <a href="/resume.pdf" target="_blank" class="flex items-center gap-1 border border-slate-300 bg-white px-2 py-1 rounded">
              <Icon name="uil:file-alt" />
              Resume
            </a>
            <a href="mailto:gimenez.maxi@gmail.com" class="flex items-center gap-1 border border-slate-300 bg-white px-2 py-1 rounded">
              <Icon name="uil:envelope-alt" />
              Email
            </a>
            <a href="https://github.com/maxigimenez" target="_blank" class="flex items-center gap-1 border border-slate-300 bg-white px-2 py-1 rounded">
              <Icon name="uil:github" />
              GitHub
            </a>
            <a href="https://linkedin.com/in/maxigimenez/" target="_blank" class="flex items-center gap-1 border border-slate-300 bg-white px-2 py-1 rounded">
              <Icon name="uil:linkedin" />
              LinkedIn
            </a>
            <a href="https://instagram.com/gmaxi_" target="_blank" class="flex items-center gap-1 border border-slate-300 bg-white px-2 py-1 rounded">
              <Icon name="uil:instagram" />
              Instagram
            </a>
          </div>

          <div class="window-body space-y-10 pb-10">
            <section class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div class="space-y-5">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="label-pill">
                    <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Available for chats
                  </span>
                  <span class="label-pill">Engineering manager</span>
                </div>
                <div class="space-y-3">
                  <h1 class="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                    Maxi Gimenez — engineering leader building resilient products and teams.
                  </h1>
                  <p class="max-w-2xl text-base text-slate-700">
                    Full-stack and frontend background, now leading cross-functional squads at <a href="https://checklyhq.com" target="_blank">ChecklyHQ</a>. I hire thoughtfully, set clear expectations, and stay hands-on with production systems while mentoring engineers and shipping scalable, customer-critical products.
                  </p>
                </div>

                <div class="flex flex-wrap gap-3">
                  <a href="mailto:gimenez.maxi@gmail.com" class="rounded border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-semibold text-amber-100 shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5">
                    Talk with me
                  </a>
                  <a href="/resume.pdf" target="_blank" class="rounded border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400">
                    Download resume
                  </a>
                </div>
              </div>

              <div class="space-y-4">
                <div class="retro-panel p-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="h-8 w-8 rounded bg-orange-200 border border-amber-300 flex items-center justify-center text-lg">🛠️</div>
                      <div class="leading-tight">
                        <p class="text-sm font-semibold text-slate-900">Ongoing build</p>
                        <p class="text-xs text-slate-600">Weekend ship mode</p>
                      </div>
                    </div>
                    <RouterLink :to="{ path: '/ongoing' }" class="text-xs font-semibold text-indigo-700 hover:text-indigo-900">
                      View →
                    </RouterLink>
                  </div>
                  <div class="mt-3 rounded border border-slate-200 bg-slate-50 p-3 text-sm text-slate-800">
                    <p class="font-semibold">Telemetry companion</p>
                    <p class="text-slate-700">A small app for visualizing dev/test metrics with playful desktop UI. Shipping in public.</p>
                  </div>
                </div>

                <div class="retro-panel p-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-[11px] uppercase tracking-[0.18em] text-slate-500">Last role</p>
                      <p class="text-lg font-semibold text-slate-900">
                        Engineering Manager @ <a href="https://checklyhq.com" target="_blank" class="text-indigo-800 hover:text-indigo-900">ChecklyHQ</a>
                      </p>
                    </div>
                    <span class="rounded border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700">Remote</span>
                  </div>
                  <div class="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    <span class="rounded border border-slate-300 bg-white px-2 py-1">Stack: Vue.js</span>
                    <span class="rounded border border-slate-300 bg-white px-2 py-1">Nuxt.js</span>
                    <span class="rounded border border-slate-300 bg-white px-2 py-1">TypeScript</span>
                    <span class="rounded border border-slate-300 bg-white px-2 py-1">Node.js</span>
                    <span class="rounded border border-slate-300 bg-white px-2 py-1">PostgreSQL</span>
                    <span class="rounded border border-slate-300 bg-white px-2 py-1">Vercel</span>
                    <span class="rounded border border-slate-300 bg-white px-2 py-1">AWS</span>
                    <span class="rounded border border-slate-300 bg-white px-2 py-1">Claude Code</span>
                    <span class="rounded border border-slate-300 bg-white px-2 py-1">OpenAI Codex</span>
                  </div>
                  <ul class="mt-3 space-y-2 text-sm text-slate-700">
                    <li>Lead a team of six engineers owning Checkly’s Synthetics product and core platform areas for large, high-traffic customers.</li>
                    <li>Stay hands-on across frontend, backend, and infrastructure.</li>
                    <li>Built and shipped synthetic monitoring features to catch issues before users feel them.</li>
                    <li>Partner with product and customers to turn real needs into scalable solutions.</li>
                    <li>Support engineers via 1:1s, expectations, and feedback so they grow and do their best work.</li>
                    <li>Balance delivery with long-term technical decisions to keep the platform reliable and ready to scale.</li>
                    <li>AI-assisted development: use Claude Code and OpenAI Codex (with guardrails) to accelerate features, refactors, and debugging without compromising quality or security.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="projects" class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-slate-600">Weekend builds</p>
                  <h2 class="text-3xl font-semibold text-slate-900">Side projects that keep me curious</h2>
                </div>
                <p class="text-sm text-slate-600">Small bets, real users, plenty of learnings.</p>
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div v-for="project in sideProjects" :key="project.title" class="retro-panel p-5">
                  <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-3">
                      <span class="text-2xl">{{ project.emoji }}</span>
                      <h3 class="text-xl font-semibold text-slate-900">{{ project.title }}</h3>
                    </div>
                    <span
                      class="rounded px-3 py-1 text-xs font-semibold border border-slate-300 bg-white"
                      :class="{
                        'text-emerald-700': project.tone === 'emerald',
                        'text-rose-700': project.tone === 'rose',
                        'text-sky-700': project.tone === 'sky',
                        'text-amber-700': project.tone === 'amber',
                      }"
                    >
                      {{ project.status }}
                    </span>
                  </div>
                  <p class="text-slate-700">{{ project.description }}</p>
                  <div class="mt-2 flex items-center justify-between text-sm text-slate-600">
                    <div class="flex items-center gap-2">
                      <span class="h-2 w-2 rounded-full bg-slate-400"></span>
                      <span>Built with care</span>
                    </div>
                    <a
                      v-if="project.link"
                      :href="project.link"
                      target="_blank"
                      class="text-sm font-semibold text-indigo-700 hover:text-indigo-900"
                    >
                      View →
                    </a>
                    <span v-else class="text-sm text-slate-500">
                      Archived
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section id="blog" class="space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-slate-600">Writing</p>
                  <h2 class="text-3xl font-semibold text-slate-900">Latest blog notes</h2>
                </div>
                <p class="text-sm text-slate-600">Product, engineering, and the occasional Formula 1 tangent.</p>
              </div>

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
                    {{ post.description }}
                  </p>
                  <span class="text-sm font-semibold text-indigo-700">Read post →</span>
                </NuxtLink>
              </div>
            </section>

            <section class="retro-panel flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p class="text-sm text-slate-600">Let’s connect</p>
                <h2 class="text-2xl font-semibold text-slate-900">Want to chat about products or teams?</h2>
                <p class="text-slate-700">Ping me for product leadership, frontend systems, or a side project idea.</p>
              </div>
              <div class="flex flex-wrap gap-3">
                <a href="mailto:gimenez.maxi@gmail.com" class="rounded bg-slate-900 px-5 py-3 text-sm font-semibold text-amber-100 shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition">
                  Email me
                </a>
                <a href="/resume.pdf" target="_blank" class="rounded border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400">
                  Resume
                </a>
              </div>
            </section>

            <Footer />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
