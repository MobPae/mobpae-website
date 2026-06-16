import { Heart, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#f1e8e3] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c4522a] shadow-terracotta">
                {/* MobPae "M" wave icon */}
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                  <path
                    d="M1 14C1 14 4 3 7 8C10 13 11 2 14 8C17 14 21 3 21 3"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[20px] font-[800] tracking-[-0.03em] text-slate-900">
                MobPae
              </span>
            </div>

            <p className="max-w-[320px] text-[13.5px] leading-[1.8] text-slate-500">
              Financial flexibility for employees. Complete visibility and
              control for employers. Employer-backed salary access for modern
              workplaces.
            </p>

            <div className="mt-5 flex items-center gap-1.5 text-[12.5px] text-slate-400">
              <span>Made with</span>
              <Heart size={12} className="fill-red-400 text-red-400" />
              <span>in India</span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-[12px] font-[700] uppercase tracking-[0.15em] text-slate-900 mb-5">
              Explore
            </h4>
            <div className="flex flex-col gap-3.5 text-[13.5px]">
              <a href="#why-mobpae" className="text-slate-500 transition hover:text-[#c4522a]">Why MobPae</a>
              <a href="#how-it-works" className="text-slate-500 transition hover:text-[#c4522a]">How It Works</a>
              <a href="#benefits" className="text-slate-500 transition hover:text-[#c4522a]">Benefits</a>
              <a href="#faq" className="text-slate-500 transition hover:text-[#c4522a]">FAQ</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[12px] font-[700] uppercase tracking-[0.15em] text-slate-900 mb-5">
              Legal
            </h4>
            <div className="flex flex-col gap-3.5 text-[13.5px]">
              <a href="/privacy-policy" className="text-slate-500 transition hover:text-[#c4522a]">Privacy Policy</a>
              <a href="/terms" className="text-slate-500 transition hover:text-[#c4522a]">Terms &amp; Conditions</a>
              <a href="/careers" className="text-slate-500 transition hover:text-[#c4522a]">Careers</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-[700] uppercase tracking-[0.15em] text-slate-900 mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3.5">
              <a
                href="mailto:support@mobpae.com"
                className="flex items-center gap-3 text-[13.5px] text-slate-500 transition hover:text-[#c4522a] group"
              >
                <Mail size={15} className="text-[#c4522a] flex-shrink-0" />
                support@mobpae.com
              </a>

              <a
                href="tel:+919227012145"
                className="flex items-center gap-3 text-[13.5px] text-slate-500 transition hover:text-[#c4522a]"
              >
                <Phone size={15} className="text-[#c4522a] flex-shrink-0" />
                +91 92270 12145
              </a>

              <a
                href="https://www.linkedin.com/company/mobpae"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[13.5px] text-slate-500 transition hover:text-[#c4522a]"
              >
                <span className="flex h-[15px] w-[15px] items-center justify-center rounded-[3px] bg-[#c4522a] text-[8px] font-[800] text-white flex-shrink-0">
                  in
                </span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#f1e8e3] pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-[12px] text-slate-400 md:flex-row">
            <p>© {new Date().getFullYear()} MobPae. All rights reserved.</p>
            <p>Employer-backed salary access for modern workplaces.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
