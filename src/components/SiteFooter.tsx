// ── Social icons ──────────────────────────────────────────────────────────────
function IconLinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" rx="4" fill="rgba(255,255,255,0.15)"/>
      <path d="M5.25 7.5H5.25H5.25v5.25h-1.5V7.5h1.5zM4.5 6.375a.875.875 0 1 1 0-1.75.875.875 0 0 1 0 1.75zM13.5 12.75h-1.5v-2.625c0-.75-.375-1.125-.938-1.125-.562 0-.937.375-.937 1.125V12.75H8.625V7.5h1.5v.75c.375-.563.938-.938 1.688-.938 1.312 0 1.687.938 1.687 2.063V12.75z" fill="currentColor"/>
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" rx="4" fill="rgba(255,255,255,0.15)"/>
      <rect x="4.5" y="4.5" width="9" height="9" rx="2.5" stroke="currentColor" strokeWidth="1.25" fill="none"/>
      <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.25" fill="none"/>
      <circle cx="12" cy="6" r="0.75" fill="currentColor"/>
    </svg>
  );
}
function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="18" rx="4" fill="rgba(255,255,255,0.15)"/>
      <path d="M4 4l4.45 5.9L4 14h1.13l3.81-4.36L12.1 14H15l-4.68-6.21L14.67 4h-1.13l-3.42 3.91L6.9 4H4z" fill="currentColor"/>
    </svg>
  );
}

// ── Link hover helpers ─────────────────────────────────────────────────────────
const hoverWhite = (e: React.MouseEvent<HTMLAnchorElement>) =>
  (e.currentTarget.style.color = "#fff");
const unhoverWhite = (e: React.MouseEvent<HTMLAnchorElement>) =>
  (e.currentTarget.style.color = "rgba(255,255,255,0.65)");

function FooterCol({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <p style={{ fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px" }}>
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
          <a
            href={l.href}
            style={{ fontSize: 13.5, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 100ms ease" }}
            onMouseEnter={hoverWhite}
            onMouseLeave={unhoverWhite}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ background: "#1A3AE8", fontFamily: "Inter, ui-sans-serif, sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px clamp(20px,5vw,32px) 0" }}>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr 1fr", gap: "24px 40px", paddingBottom: 28, borderBottom: "1px solid rgba(255,255,255,0.15)" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: 8, padding: "6px 12px", marginBottom: 12 }}>
              <img src="/brand/mobpae-logo-horizontal.svg" alt="MobPae" style={{ height: 20, width: "auto", display: "block" }} />
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.65, margin: "0 0 18px", maxWidth: 200 }}>
              Your Trusted Financial Partner. Employer-backed salary access for modern workplaces.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
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
                  style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", transition: "color 100ms ease, transform 100ms ease", display: "block" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color="#fff"; (e.currentTarget as HTMLElement).style.transform="translateY(-1px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.8)"; (e.currentTarget as HTMLElement).style.transform="translateY(0)"; }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <FooterCol heading="Product">
            <FooterLinks links={[
              { label: "For Employers",  href: "/#employers"    },
              { label: "For Employees",  href: "/#employees"    },
              { label: "How it works",   href: "/#how-it-works" },
              { label: "Resources",      href: "/product"       },
            ]} />
          </FooterCol>

          {/* Company */}
          <FooterCol heading="Company">
            <FooterLinks links={[
              { label: "About Us",   href: "/#about"   },
              { label: "Team",       href: "/team"     },
              { label: "Careers",    href: "/careers"  },
              { label: "Contact Us", href: "/#enquiry" },
            ]} />
          </FooterCol>

          {/* Resources */}
          <FooterCol heading="Resources">
            <FooterLinks links={[
              { label: "Privacy Policy",     href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms"          },
            ]} />
          </FooterCol>

          {/* Contact */}
          <FooterCol heading="Contact">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a
                href="mailto:support@mobpae.com"
                style={{ fontSize: 13.5, color: "rgba(255,255,255,0.8)", textDecoration: "none", transition: "color 100ms ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              >
                support@mobpae.com
              </a>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.65 }}>
                Ahmedabad, Gujarat<br />India — 382470
              </p>
              <a
                href="https://linkedin.com/company/mobpae"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", textDecoration: "none", transition: "color 100ms ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                LinkedIn →
              </a>
              <a
                href="/#enquiry"
                style={{
                  marginTop: 4,
                  display: "inline-flex",
                  alignItems: "center",
                  height: 34,
                  padding: "0 14px",
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 7,
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "#fff",
                  textDecoration: "none",
                  transition: "background 100ms ease",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)")}
              >
                Request a demo
              </a>
            </div>
          </FooterCol>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, padding: "14px 0" }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", margin: 0 }}>
            © {new Date().getFullYear()} MobPae Services Pvt. Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", margin: 0 }}>
            Built for responsible salary access.
          </p>
        </div>
      </div>
    </footer>
  );
}
