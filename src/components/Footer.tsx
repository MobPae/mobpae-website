import { Heart, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24">
      {/* Wave */}
      <>
        {/* Back Wave */}
        <div className="absolute inset-x-0 -top-16 h-16 overflow-hidden opacity-40">
          <svg
            viewBox="0 0 1440 160"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#60a5fa"
              d="M0,96L60,106.7C120,117,240,139,360,133.3C480,128,600,96,720,80C840,64,960,64,1080,80C1200,96,1320,128,1380,144L1440,160L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"
            />
          </svg>
        </div>

        {/* Front Wave */}
        <div className="absolute inset-x-0 -top-12 h-12 overflow-hidden">
          <svg
            viewBox="0 0 1440 200"
            className="h-full w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#1d4ed8"
              d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,144C672,160,768,160,864,149.3C960,139,1056,117,1152,106.7C1248,96,1344,96,1392,96L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
            />
          </svg>
        </div>
      </>

      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            {/* Brand */}
            <div>
              <h3 className="text-3xl font-black tracking-tight">MobPae</h3>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
                Financial flexibility for employees.
                <br />
                Complete visibility and control for employers.
              </p>

              <div className="mt-5 flex items-center gap-2 text-sm text-slate-300">
                <span>Made with</span>
                <Heart size={14} className="fill-red-500 text-red-500" />
                <span>in India</span>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                Explore
              </h4>

              <div className="mt-5 flex flex-col gap-3 text-sm">
                <a
                  href="#why-mobpae"
                  className="text-slate-300 transition hover:text-white"
                >
                  Why MobPae
                </a>

                <a
                  href="#how-it-works"
                  className="text-slate-300 transition hover:text-white"
                >
                  How It Works
                </a>

                <a
                  href="#benefits"
                  className="text-slate-300 transition hover:text-white"
                >
                  Benefits
                </a>

                <a
                  href="#faq"
                  className="text-slate-300 transition hover:text-white"
                >
                  FAQ
                </a>

                <a
                  href="/privacy-policy"
                  className="text-slate-300 transition hover:text-white"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
                Contact
              </h4>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="mailto:support@mobpae.com"
                  className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 text-sm text-blue-50 backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Mail size={16} />
                  support@mobpae.com
                </a>

                <a
                  href="tel:+919227012145"
                  className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 text-sm text-blue-50 backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Phone size={16} />
                  +91 92270 12145
                </a>

                <a
                  href="https://www.linkedin.com/company/mobpae"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-3 text-sm text-blue-50 backdrop-blur-sm transition hover:bg-white/20"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold">
                    in
                  </span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-6 border-t border-white/15 pt-5">
            <div className="flex flex-col items-center justify-between gap-3 text-xs text-blue-100 md:flex-row">
              <p>© {new Date().getFullYear()} MobPae. All rights reserved.</p>

              <p>Employer-backed salary access for modern workplaces.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
