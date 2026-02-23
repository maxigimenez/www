# GEMINI.md - Maxi's Engineering Log

## Project Overview
**Maxi's Engineering Log** is a personal portfolio and blog application built with Next.js 16 (App Router). It features a timeline, project showcase, and a blog with markdown support.

### Core Technologies
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/) (with exact versions)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/) components
- **Content:** Markdown files in `content/` (blog, projects, updates) parsed with `gray-matter`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)

### Architecture
- `app/`: Next.js App Router pages, layouts, and global styles.
- `components/`: Reusable UI components, including `shadcn/ui` primitives.
- `content/`: Markdown-based content for the blog, projects, and timeline updates.
- `lib/`: Utility functions, including `content.ts` for fetching and parsing Markdown.
- `hooks/`: Custom React hooks.
- `public/`: Static assets, including blog images in `public/blog/`.

---

## Building and Running

### Prerequisites
- Node.js (v18+)
- pnpm

### Key Commands
- **Development:** `pnpm dev` (runs Next.js dev server)
- **Build:** `pnpm build` (generates production build)
- **Start:** `pnpm start` (starts production server)
- **Lint:** `pnpm lint`

---

## Development Conventions

### Content Management
- **Blog Posts:** Add `.md` files to `content/blog/`. Use frontmatter for `title`, `date`, `excerpt`, `readingTime`, and `coverImage`.
- **Projects:** Add `.md` files to `content/projects/`. Use frontmatter for `title`, `description`, `techStack`, `status`, `link`, `linkLabel`, and `order` (for sorting).
- **Timeline Updates:** Add `.md` files to `content/updates/` using `YYYY-MM-DD.md` naming convention.

### Styling & Components
- Use **shadcn/ui** components located in `components/ui/`.
- Use the `cn()` utility from `@/lib/utils` for conditional class merging.
- Markdown content is rendered with `react-markdown` and styled using the `prose` class from Tailwind Typography.
- **Dependencies:** All dependencies must use **exact versions** (no `^` or `~`). This is enforced via `.npmrc`.

### Automated Timeline Updates
- A GitHub Action (`.github/workflows/daily-timeline-update.yml`) runs daily at 20:00 UTC.
- It summarizes the day's commits using Gemini AI and adds a new entry to `content/updates/`.
- **Note:** Requires a `GEMINI_API_KEY` secret to be configured in the GitHub repository settings.

### Path Aliases
- Use the `@/` alias to refer to the project root directory.
