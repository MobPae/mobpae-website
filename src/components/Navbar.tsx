import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Employers",    href: "/for-employers" },
  { label: "Product",      href: "/#why-mobpae" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Security",     href: "/security" },
  { label: "Pricing",      href: "/#pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-emerald-950/5 bg-white/76 backdrop-blur-2xl transition-all duration-300"
      style={{ boxShadow: scrolled ? "0 18px 48px rgba(15, 23, 42, 0.08)" : "none" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-800 shadow-[0_14px_30px_rgba(16,185,129,0.28)]">
            <svg width="20" height="14" viewBox="0 0 22 16" fill="none">
              <path
                d="M1 13C1 13 4 3 7 8C10 13 11 2 14 8C17 14 21 3 21 3"
                stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[15px] font-[900] tracking-[0.13em] text-slate-950 uppercase leading-none">
            MOBPAE
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-[700] text-slate-500 transition-colors hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-[12.5px] font-[800] text-white transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-[0_16px_34px_rgba(16,185,129,0.28)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-950/10 bg-white text-slate-700 transition-colors hover:border-emerald-300 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-emerald-950/5 bg-white/96 px-4 py-3 backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-[14px] font-[700] text-slate-900 transition-colors hover:bg-emerald-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center rounded-2xl bg-emerald-600 px-4 py-3 text-[14px] font-[800] text-white transition-colors hover:bg-emerald-700"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
