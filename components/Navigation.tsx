'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'home' },
  { href: '/projects', label: 'projects' },
  { href: '/blog', label: 'blog' },
  { href: '/timeline', label: 'timeline' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border">
      <div className="container py-5 flex items-center justify-between">
        <Link href="/" className="hidden lg:block font-mono text-sm font-semibold text-foreground hover:text-primary-hover active:text-primary-active transition-colors">
          maxi gimenez
        </Link>
        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-mono text-sm transition-colors ${
                pathname === link.href
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
