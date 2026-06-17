import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Product",      href: "/#why-mobpae" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing",      href: "/#pricing" },
  { label: "FAQ",          href: "/#faq" },
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
      className="sticky top-0 z-50 bg-white border-b border-[#e8ddd4] transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 4px 20px rgba(28,18,9,0.08)" : "none" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-[#c4522a]">
            <svg width="20" height="14" viewBox="0 0 22 16" fill="none">
              <path
                d="M1 13C1 13 4 3 7 8C10 13 11 2 14 8C17 14 21 3 21 3"
                stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[15px] font-[800] tracking-[0.12em] text-[#1c1209] uppercase leading-none">
            MOBPAE
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-[500] text-[#6b5e53] transition-colors hover:text-[#1c1209]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#1c1209] px-5 py-2.5 text-[12.5px] font-[600] text-white transition-all hover:bg-[#c4522a]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#ede8e2] text-[#6b5e53] transition-colors hover:border-[#d4c4ba] lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[#e8ddd4] bg-white px-4 py-3 lg:hidden">
          <nav className="grid gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-[14px] font-[500] text-[#1c1209] hover:bg-[#f0ebe4] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center rounded-xl bg-[#1c1209] px-4 py-3 text-[14px] font-[600] text-white transition-colors hover:bg-[#c4522a]"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
