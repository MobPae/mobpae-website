export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4">
        <div>
          <p className="text-2xl font-bold">
            Mob<span className="text-blue-400">Pae</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
            A salary advance platform helping employers support employee
            financial wellness with simple, transparent workflows.
          </p>
        </div>

        <div>
          <p className="font-semibold">Product</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <a href="#how-it-works" className="hover:text-white">
              How it works
            </a>
            <a href="#benefits" className="hover:text-white">
              Benefits
            </a>
            <a href="#employers" className="hover:text-white">
              For Employers
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-400">
            <a href="#contact" className="hover:text-white">
              Request Demo
            </a>
            <a href="mailto:support@mobpae.com" className="hover:text-white">
              support@mobpae.com
            </a>
          </div>
        </div>

        <div>
          <p className="font-semibold">Social</p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/mobpae/"
              target="_blank"
              rel="noreferrer"
              aria-label="MobPae LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-[13px] font-black text-white transition hover:scale-105"
            >
              in
            </a>

            <a
              href="https://www.facebook.com/mobpae"
              target="_blank"
              rel="noreferrer"
              aria-label="MobPae Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-[16px] font-black text-white transition hover:scale-105"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/mobpae"
              target="_blank"
              rel="noreferrer"
              aria-label="MobPae Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-[13px] font-black text-white transition hover:scale-105"
            >
              IG
            </a>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            Follow MobPae for product updates, launch news and workplace
            financial wellness insights.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} MOBPAE SERVICES PRIVATE LIMITED. All
            rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
