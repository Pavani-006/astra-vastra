import { Link, useLocation } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/add-design", label: "Add Design" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground selection:bg-primary selection:text-black">
      <header className="fixed top-0 w-full z-50 mix-blend-difference bg-black/50 backdrop-blur-md border-b border-border/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-widest text-white hover:text-primary transition-colors">
            ASTRA VASTRA
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Mobile menu could go here, keeping simple for now */}
        </div>
      </header>
      <main className="flex-1 flex flex-col pt-20">
        {children}
      </main>
      <footer className="border-t border-border/50 py-12 mt-24">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          <p className="font-serif italic text-lg text-white mb-4">Astra Vastra</p>
          <p className="tracking-widest uppercase text-xs">&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
