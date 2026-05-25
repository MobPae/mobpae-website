export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} MOBPAE SERVICES PRIVATE LIMITED</p>
        <div className="flex gap-5">
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
          <a href="#faq" className="hover:text-primary">
            FAQ
          </a>
          <a href="mailto:support@mobpae.com" className="hover:text-primary">
            support@mobpae.com
          </a>
        </div>
      </div>
    </footer>
  );
}
