import { Link } from "react-router-dom";

// ── Social icons ──────────────────────────────────────────────────────────────
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" rx="4" fill="#EEF2FF"/>
      <path d="M5.25 7.5H5.25H5.25v5.25h-1.5V7.5h1.5zM4.5 6.375a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75zM13.5 12.75h-1.5v-2.625c0-.75-.375-1.125-.938-1.125-.562 0-.937.375-.937 1.125V12.75H8.625V7.5h1.5v.75c.375-.563.938-.938 1.688-.938 1.312 0 1.687.938 1.687 2.063V12.75z" fill="currentColor"/>
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" rx="4" fill="#EEF2FF"/>
      <rect x="4.5" y="4.5" width="9" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.25" fill="none"/>
      <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.25" fill="none"/>
      <circle cx="12" cy="6" r="0.75" fill="currentColor"/>
    </svg>
  );
}
function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" rx="4" fill="#EEF2FF"/>
      <path d="M4 4l4.45 5.9L4 14h1.13l3.81-4.36L12.1 14H15l-4.68-6.21L14.67 4h-1.13l-3.42 3.91L6.9 4H4z" fill="currentColor"/>
    </svg>
  );
}

// ── Link hover helpers ─────────────────────────────────────────────────────────
const hoverBlue = (e: React.MouseEvent<HTMLAnchorElement>) =>
  (e.currentTarget.style.color = "#315EFF");
const unhoverBlue = (e: React.MouseEvent<HTMLAnchorElement>) =>
  (e.currentTarget.style.color = "#5B6270");

function FooterCol({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ fontSize: 11, fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>
        {heading}
      </p>
      {children}
    </div>
  );
}

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 9 }}>
      {links.map(l => (
        <li key={l.label}>
          <Link
            to={l.href}
            style={{ fontSize: 13.5, color: "#5B6270", textDecoration: "none", transition: "color 100ms ease" }}
            onMouseEnter={hoverBlue}
            onMouseLeave={unhoverBlue}
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ background: "#fff", fontFamily: "Manrope, ui-sans-serif, sans-serif" }}>
      <div style={{ maxWidth: 1840, margin: "0 auto", padding: "40px clamp(20px,4vw,48px) 0" }}>

        {/* Main grid */}
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: "24px 40px", paddingBottom: 28, borderBottom: "1px solid #E6E8EE" }}>

          {/* Brand */}
          <div>
            <Link to="/" aria-label="MobPae home" style={{ display: "inline-flex", alignItems: "center", marginBottom: 14, textDecoration: "none" }}>
              <img
                src="/logo-horizontal.svg"
                alt="MobPae"
                width="177"
                height="22"
                style={{ objectFit: "contain", display: "block" }}
              />
            </Link>
            <p style={{ fontSize: 13, color: "#5B6270", lineHeight: 1.65, margin: "0 0 18px", whiteSpace: "nowrap" }}>
              Your Trusted Financial Partner.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 8, marginLeft: -13 }}>
              {[
                { href: "https://linkedin.com/company/mobpae", label: "LinkedIn",  Icon: IconLinkedIn  },
                { href: "https://instagram.com/mobpae",        label: "Instagram", Icon: IconInstagram },
                { href: "https://x.com/mobpae",               label: "X",         Icon: IconX         },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{ width: 44, height: 44, color: "#5B6270", textDecoration: "none", transition: "color 100ms ease, transform 100ms ease", display: "flex", alignItems: "center", justifyContent: "center" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="#315EFF"; (e.currentTarget as HTMLElement).style.transform="translateY(-1px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="#5B6270"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <FooterCol heading="Product">
            <FooterLinks links={[
              { label: "For Employers",  href: "/employers"    },
              { label: "Employer Benefits", href: "/employers/benefits" },
              { label: "For Employees",  href: "/employees"    },
              { label: "How it works",   href: "/how-it-works" },
              { label: "Product overview", href: "/product"    },
            ]} />
          </FooterCol>

          {/* Company */}
          <FooterCol heading="Company">
            <FooterLinks links={[
              { label: "About Us",   href: "/about"    },
              { label: "Careers",    href: "/careers"  },
              { label: "Contact Us", href: "/#enquiry" },
            ]} />
          </FooterCol>

          {/* Resources */}
          <FooterCol heading="Resources">
            <FooterLinks links={[
              { label: "FAQs",               href: "/faqs"           },
              { label: "Help Center",        href: "/help-center"    },
              { label: "Privacy Policy",     href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms"          },
            ]} />
          </FooterCol>

          {/* Contact */}
          <FooterCol heading="Contact">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:support@mobpae.com"
                style={{ fontSize: 13.5, color: "#5B6270", textDecoration: "none", transition: "color 100ms ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#315EFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#5B6270")}
              >
                support@mobpae.com
              </a>
              <p style={{ fontSize: 13, color: "#5B6270", margin: 0, lineHeight: 1.65 }}>
                Ahmedabad, Gujarat<br />India — 382470
              </p>
              <a
                href="https://linkedin.com/company/mobpae"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: "#6B7280", textDecoration: "none", transition: "color 100ms ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#315EFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6B7280")}
              >
                LinkedIn →
              </a>
              <Link
                to="/#enquiry"
                style={{
                  marginTop: 4,
                  display: "inline-flex",
                  alignItems: "center",
                  height: 44,
                  padding: "0 14px",
                  background: "#315EFF",
                  border: "1px solid #315EFF",
                  borderRadius: 7,
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "#fff",
                  textDecoration: "none",
                  transition: "background 100ms ease",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#2A51E0")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "#315EFF")}
              >
                Request a demo
              </Link>
            </div>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, padding: "14px 0" }}>
          <p style={{ fontSize: 12, color: "#6B7280", margin: 0 }}>
            © {new Date().getFullYear()} MobPae Services Pvt. Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "#6B7280", margin: 0 }}>
            Built for responsible salary access.
          </p>
        </div>
      </div>
    </footer>
  );
}
