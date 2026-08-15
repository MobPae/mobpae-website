import { Link } from "react-router-dom";
import { SECTION_LINKS } from "../siteLinks";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 8.48H3.16V21H7V8.48Zm6.32 0H9.5V21h3.77v-6.19c0-3.44 4.48-3.72 4.48 0V21H21v-7.93c0-6.17-6.91-5.94-7.68-2.91V8.48Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L22.75 22h-6.844l-5.36-7.02L4.36 22H1.1l8.03-9.17L1.5 2h7.02l4.84 6.42L18.244 2Zm-1.2 18h1.9L7.03 4H5l12.044 16Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/mobpae", Icon: LinkedInIcon, color: "#0A66C2" },
  { label: "Instagram", href: "https://www.instagram.com/mobpae/", Icon: InstagramIcon, color: "#E4405F" },
  { label: "X (Twitter)", href: "", Icon: XIcon, color: "#000000" },
];

const footerColumns = [
  {
    heading: "Explore",
    links: SECTION_LINKS.slice(0, 4),
  },
  {
    heading: "Company",
    links: [
      ...SECTION_LINKS.slice(4),
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Get started",
    links: [{ label: "Request Demo", href: "/#enquiry" }],
  },
  {
    heading: "Legal",
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
                src="/brand/mobpae-logo.svg"
                alt="MobPae"
                width="176"
                height="53"
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p>
              Your Trusted Financial Partner. Employer-powered salary access built for responsible
              liquidity, payroll clarity, and workforce wellbeing.
            </p>
            <div className="site-footer__socials" aria-label="Social links">
              {socialLinks.map(({ label, href, Icon, color }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`MobPae on ${label}`}
                    style={{ color }}
                  >
                    <Icon />
                  </a>
                ) : (
                  <span key={label} aria-hidden="true" style={{ color }}>
                    <Icon />
                  </span>
                )
              )}
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
