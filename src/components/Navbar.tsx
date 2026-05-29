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
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-black text-white">
            M
          </div>

          <div className="text-2xl font-extrabold tracking-tight text-slate-950">
            Mob<span className="text-blue-600">Pae</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 text-sm font-semibold text-slate-600 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
        >
          Contact Us
        </a>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 lg:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
          <nav className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
