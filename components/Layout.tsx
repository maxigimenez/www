import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'home' },
  { to: '/projects', label: 'projects' },
  { to: '/blog', label: 'blog' },
  { to: '/timeline', label: 'timeline' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="container py-5 flex items-center justify-between">
          <Link to="/" className="font-mono text-sm font-semibold text-foreground hover:text-primary transition-colors">
            maxi gimenez
          </Link>
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-mono text-sm transition-colors ${
                  location.pathname === link.to
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="h-4 w-4 hidden dark:block" />
              <Moon className="h-4 w-4 block dark:hidden" />
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="container py-12 md:py-16">
          {children}
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
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
              href="mailto:hello@maxigimenez.xyz"
              className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
