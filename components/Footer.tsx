export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()} Maxi Gimenez
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/maxigimenez"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/maxigimenez"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            linkedin
          </a>
          <a
            href="mailto:gimenez.maxi@gmail.com"
            className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
