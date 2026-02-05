## Session Notes

- Design direction is now Warp/terminal-inspired: dark shell, high-contrast text, emerald accents, command-like UI language, and preserved window/chrome structure across pages.
- Shared window pattern is active in `pages/index.vue`, `pages/blog/index.vue`, `pages/post/[slug].vue`, and `pages/shipping.vue`:
  - toolbar buttons + command chip (`.prompt-path`)
  - bookmark links below toolbar stay constant during navigation
  - consistent max-width container and in-window content body
- Command chips were normalized from `cat ...` to `open ...` everywhere:
  - `open home.mdx`, `open blog.mdx`, `open shipping.mdx`, `open blog/<slug>`
- Home page side-project cards were redesigned as terminal cards:
  - use Nuxt icon library (no emojis)
  - header command per card: `$ code ./<project-slug>`
  - status as check-style tag (`✓ Live`, `✓ Paused`, `✓ Exit`)
  - action link for live projects: `$ open <project-slug>`
  - removed traffic-light dots, “Built with care”, and “Archived” text
- “Ongoing build” panel icon treatment was adjusted for contrast with the dark theme:
  - removed bright green gradient block
  - now uses darker terminal-style icon container + subtle emerald border/accent
- “my cat” hover text keeps tooltip behavior with `public/annu.jpg` and now matches link green (`text-emerald-400`) instead of custom/alternate green.
- Earlier experimental prompt/check styling on top hero chips and “Last role” bullet list was reverted (user preference).

## Pending / Next Steps

- Optional: make blog cards match the same terminal-card visual grammar as side projects.
- Optional: reduce/resolve the existing Tailwind/PostCSS gradient warning surfaced during `npm run build` (non-blocking, current build passes).
- Note: there is currently no dedicated `/ongoing` page file in `pages/`; ongoing content currently points to `/shipping`.
