import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { label: "Employers", href: "/for-employers" },
  { label: "Product", href: "/#product" },
  { label: "How It Works", href: "/#workflow" },
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
    <header className="fixed left-0 right-0 top-6 z-50 mx-auto w-[92%] max-w-5xl sm:w-[85%] lg:w-[75%]">
      <div
        className="flex items-center justify-between rounded-[32px] overflow-hidden border border-black/[0.04] bg-white/90 px-6 py-3 shadow-[0px_8px_30px_rgba(0,0,0,0.04)] backdrop-blur-[12px] transition-all duration-300"
        style={{
          boxShadow: scrolled ? "0 18px 48px rgba(15, 23, 42, 0.08)" : "0px 8px 30px rgba(0, 0, 0, 0.04)",
          transform: "translateZ(0)", // Force GPU acceleration to further prevent blur bleeding
        }}
      >
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
              className="text-[13px] font-[600] text-[#6B7280] transition-colors hover:text-[#111827]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#111827] px-6 py-2.5 text-[13px] font-[600] text-white transition-all hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_16px_34px_rgba(17,24,39,0.22)]"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#6B7280] transition-colors hover:border-[#111827] hover:text-[#111827] lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-[#111827]/5 bg-white/96 px-4 py-3 backdrop-blur-2xl lg:hidden">
          <nav className="grid gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-[14px] font-[700] text-[#111827] transition-colors hover:bg-[#F8F9FC]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex items-center justify-center rounded-2xl bg-[#5B3CE3] px-4 py-3 text-[14px] font-[600] text-white transition-colors hover:bg-[#4E32CA]"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
