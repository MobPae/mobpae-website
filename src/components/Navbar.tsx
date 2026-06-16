import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Product",    href: "/#why-mobpae" },
  { label: "Employers",  href: "/#benefits" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ",        href: "/#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#faf6f1] border-b border-[#ede8e2]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-[9px] bg-[#c4522a]"
          >
            {/* MobPae wave M */}
            <svg width="20" height="14" viewBox="0 0 22 16" fill="none">
              <path
                d="M1 13C1 13 4 3 7 8C10 13 11 2 14 8C17 14 21 3 21 3"
                stroke="white"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[15px] font-[900] tracking-[0.14em] text-[#1c1209] uppercase leading-none">
            MOBPAE
          </span>
        </a>

        {/* Desktop nav + CTA — all right-aligned */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-[500] text-[#6b5e53] transition-colors hover:text-[#1c1209]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#faq"
            className="inline-flex items-center justify-center rounded-[10px] bg-[#1c1209] px-4 py-2 text-[12px] font-[600] text-white transition-all hover:bg-[#c4522a]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#ede8e2] text-slate-500 lg:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[#ede8e2] bg-[#faf6f1] px-4 py-3 lg:hidden">
          <nav className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-[14px] font-[500] text-[#1c1209] hover:bg-[#f0ebe4] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#faq"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center rounded-xl bg-[#1c1209] px-4 py-3 text-[14px] font-[600] text-white"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
