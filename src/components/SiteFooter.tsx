import { Link } from "react-router-dom";

const footerColumns = [
  {
    heading: "For Employers",
    links: [
      { label: "Overview", href: "/employers" },
      { label: "Benefits", href: "/employers/benefits" },
      { label: "Request Demo", href: "/#enquiry" },
    ],
  },
  {
    heading: "For Employees",
    links: [
      { label: "Overview", href: "/employees" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Help Center", href: "/help-center" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__rail">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link to="/" aria-label="MobPae home" className="site-footer__logo">
              <img
                src="/brand/mobpae-logo-horizontal.png"
                alt="MobPae"
                width="168"
                height="40"
              />
            </Link>
            <p>
              Your Trusted Financial Partner. Employer-powered salary access built for responsible
              liquidity, payroll clarity, and workforce wellbeing.
            </p>
            <div className="site-footer__socials" aria-label="Social links">
              <a
                href="https://linkedin.com/company/mobpae"
                target="_blank"
                rel="noreferrer"
                aria-label="MobPae on LinkedIn"
              >
                <span aria-hidden="true">in</span>
              </a>
            </div>
          </div>

          <div className="site-footer__columns">
            {footerColumns.map((column) => (
              <div key={column.heading}>
                <p>{column.heading}</p>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>Copyright © {new Date().getFullYear()} MobPae</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
