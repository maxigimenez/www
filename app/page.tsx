import Link from 'next/link';

export default function Index() {
  return (
    <div className="max-w-lg">
      <h1 className="text-2xl mb-6 font-semibold">Maxi Gimenez</h1>
      <p className="font-serif text-lg leading-relaxed text-foreground mb-4">
        I build tools, lead teams, and write about the craft of software engineering.
      </p>
      <p className="font-serif text-base leading-relaxed text-muted-foreground mb-8">
        Currently focused on growing engineering teams and shipping side projects in the margins.
        When I'm not at a screen, I'm probably wild camping somewhere, shuffling Magic the gathering cards, or being ignored by my cat Annu.
      </p>

      <div className="flex flex-col gap-3">
        <Link
          href="/projects"
          className="font-mono text-sm text-primary hover:text-foreground transition-colors inline-flex items-center gap-2 group"
        >
          → side projects
        </Link>
        <Link
          href="/blog"
          className="font-mono text-sm text-primary hover:text-foreground transition-colors inline-flex items-center gap-2 group"
        >
          → blog
        </Link>
        <Link
          href="/timeline"
          className="font-mono text-sm text-primary hover:text-foreground transition-colors inline-flex items-center gap-2 group"
        >
          → timeline
        </Link>
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <p className="font-serif text-sm text-muted-foreground leading-relaxed">
          Like building things or want to talk tech?{' '}
          <a
            href="mailto:gimenez.maxi@gmail.com"
            className="text-primary hover:text-foreground transition-colors underline underline-offset-2 decoration-primary/40"
          >
            Let's grab a coffee
          </a>
          .
        </p>
      </div>
    </div>
  );
}
