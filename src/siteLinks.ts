export const SECTION_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Employers", href: "/#employers" },
  { label: "Security", href: "/#security" },
  { label: "FAQ", href: "/#faq" },
];

export const LEGACY_PAGE_REDIRECTS: Array<{ from: string; to: string }> = [
  { from: "/employers", to: "/#employers" },
  { from: "/employers/benefits", to: "/#employers" },
  { from: "/employees", to: "/#ecosystem" },
  { from: "/how-it-works", to: "/#how-it-works" },
  { from: "/product", to: "/#features" },
  { from: "/faqs", to: "/help-center" },
  { from: "/about", to: "/#about" },
  { from: "/team", to: "/" },
  { from: "/teams", to: "/" },
  { from: "/blog", to: "/" },
];
