import { Link, useLocation } from "wouter";
import { useState } from "react";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  const baseClasses = `text-sm tracking-widest uppercase transition-colors hover:text-primary ${
    isActive ? "text-primary" : "text-white/80"
  }`;

  // For anchor links, use a regular <a> tag to allow native smooth scrolling
  if (href.startsWith("#")) {
    return (
      <a href={href} onClick={onClick} className={baseClasses}>
        {label}
      </a>
    );
  }

  // For regular routes, use wouter Link
  return (
    <Link href={href} onClick={onClick} className={baseClasses}>
      {label}
    </Link>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <Link
            href="/"
            onClick={() => {
              if (location === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              setMobileOpen(false);
            }}
            className="font-serif text-2xl tracking-widest text-white hover:text-primary transition-colors"
          >
            ASTRA VASTRA
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={location === link.href}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-between w-7 h-6 text-white"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
          >
            <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-60" : "max-h-0"}`}>
          <div className="flex flex-col gap-4 px-6 pb-4 pt-4 bg-black/95 border-t border-white/10">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={location === link.href}
                onClick={() => setMobileOpen(false)}
              />
            ))}
          </div>
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
