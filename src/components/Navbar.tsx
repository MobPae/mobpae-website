import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why MobPae", href: "#why-mobpae" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#f1e8e3]/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#c4522a] text-base font-black text-white shadow-warm">
            M
          </div>
          <div className="text-[22px] font-[800] tracking-[-0.03em] text-slate-950 leading-none">
            Mob<span className="text-[#c4522a]">Pae</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-[13.5px] font-[500] text-slate-500 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-[#c4522a]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#c4522a] px-5 py-2.5 text-[13px] font-[600] text-white shadow-warm transition-all duration-200 hover:bg-[#a8411f] hover:-translate-y-px"
          >
            Contact Us
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 lg:hidden"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[#f1e8e3] bg-white/98 px-4 py-3 lg:hidden">
          <nav className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-[14px] font-[500] text-slate-700 hover:bg-[#fdf3ee] hover:text-[#c4522a] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center rounded-xl bg-[#c4522a] px-4 py-3 text-[14px] font-[600] text-white"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
