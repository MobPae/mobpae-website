import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold tracking-tight text-dark">
          Mob<span className="text-primary">Pae</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#how-it-works" className="hover:text-primary">
            How it works
          </a>
          <a href="#benefits" className="hover:text-primary">
            Benefits
          </a>
          <a href="#employers" className="hover:text-primary">
            Employers
          </a>
          <a href="#faq" className="hover:text-primary">
            FAQ
          </a>
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft md:flex"
        >
          Get Started <ArrowRight size={16} />
        </a>
      </div>
    </header>
  );
}
