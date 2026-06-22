import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { label: "Employers", href: "/for-employers" },
  { label: "Product", href: "/#why-mobpae" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[#191A2E]/5 bg-white/76 backdrop-blur-2xl transition-all duration-300"
      style={{
        boxShadow: scrolled ? "0 18px 48px rgba(15, 23, 42, 0.08)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex-shrink-0" aria-label="MobPae home">
          <BrandLogo />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-[700] text-[#8D90A3] transition-colors hover:text-[#5659D9]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#7679FF] px-5 py-2.5 text-[12.5px] font-[600] text-white transition-all hover:-translate-y-0.5 hover:bg-[#5659D9] hover:shadow-[0_16px_34px_rgba(118,121,255,0.28)]"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[#191A2E]/10 bg-white text-[#62657A] transition-colors hover:border-[#A5A7FF] lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[#191A2E]/5 bg-white/96 px-4 py-3 backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-[14px] font-[700] text-[#191A2E] transition-colors hover:bg-[#F0F0F8]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center rounded-2xl bg-[#7679FF] px-4 py-3 text-[14px] font-[600] text-white transition-colors hover:bg-[#5659D9]"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
