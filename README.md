# Maxi's Engineering Log 🚀

Hola 👋! I'm **Maxi**, an engineering manager from 🇦🇷 living in 🇮🇪. This project is my personal portfolio, blog, and development timeline, built with Next.js and automated with AI.

👨‍💻 Developer - ✈️ Traveler - 🚀 Maker - 👨‍🍳 Chef Enthusiast - 🐶 Pet lover

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- **Content:** Markdown parsed with `gray-matter` and rendered with `react-markdown`
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)

## ✨ Key Features

- **Timeline:** A daily automated update log of my engineering activities.
- **Projects:** Showcase of my work with tech stacks and links.
- **Blog:** Markdown-based blog posts with reading time and images.
- **Automation:** GitHub Action that summarizes daily commits using Gemini AI.
- **Modern UI:** Clean, responsive design inspired by high-end developer tools.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components (including `shadcn/ui`).
- `content/`: Markdown files for blog posts, projects, and timeline updates.
  - `blog/`: Articles and blog content.
  - `projects/`: Project showcases.
  - `updates/`: Daily timeline updates.
- `lib/`: Utility functions and markdown parsers.
- `scripts/`: Automation scripts for content generation.
- `public/`: Static assets and blog images.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm

### Installation

```bash
pnpm install
```

### Local Development

```bash
pnpm dev
```

### Build for Production

```bash
pnpm build
pnpm start
```

## 🤖 Daily Timeline Automation

This project features a fully automated timeline update system:
1.  **GitHub Action:** Runs daily at 20:00 UTC (`.github/workflows/daily-timeline-update.yml`).
2.  **AI Summary:** Uses Gemini AI to summarize the day's git commits.
3.  **Content Creation:** Automatically generates a new markdown entry in `content/updates/`.

## 📄 License

This project is personal and for portfolio purposes.

---

## Connect with me
- **LinkedIn:** [maxigimenez](https://www.linkedin.com/in/maxigimenez/)
