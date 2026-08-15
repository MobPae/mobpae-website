export const SECTION_LINKS = [
  { label: "Features", href: "/#features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Ecosystem", href: "/#ecosystem" },
  { label: "Employers", href: "/#employers" },
  { label: "Security", href: "/#security" },
  { label: "Team", href: "/#team" },
  { label: "FAQ", href: "/#faq" },
];

export const LEGACY_PAGE_REDIRECTS: Array<{ from: string; to: string }> = [
  { from: "/employers", to: "/#employers" },
  { from: "/employers/benefits", to: "/#employers" },
  { from: "/employees", to: "/#ecosystem" },
  { from: "/how-it-works", to: "/#how-it-works" },
  { from: "/product", to: "/#features" },
  { from: "/faqs", to: "/#faq" },
  { from: "/about", to: "/#about" },
  { from: "/team", to: "/#team" },
  { from: "/teams", to: "/#team" },
  { from: "/careers", to: "/#team" },
  { from: "/blog", to: "/" },
  { from: "/contact", to: "/#enquiry" },
  { from: "/help-center", to: "/#faq" },
];
