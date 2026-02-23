import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h1 className="text-4xl font-semibold mb-4">404</h1>
      <p className="font-serif text-lg text-muted-foreground mb-8">
        This page has been lost to the craft.
      </p>
      <Link
        href="/"
        className="font-mono text-sm text-primary hover:text-foreground transition-colors"
      >
        ← back to reality
      </Link>
    </div>
  );
}
