import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "For Employers", href: "/employers" },
  { label: "For Employees", href: "/employees" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Resources", href: "/product" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on nav
  useEffect(() => setMenuOpen(false), [location]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: 72,
        display: "flex",
        alignItems: "center",
        background: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.72)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid #E6E8EE",
        transition: "background 200ms ease, box-shadow 200ms ease",
        boxShadow: scrolled ? "0 1px 24px rgba(20,30,60,0.07)" : "none",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(20px,5vw,32px)", width: "100%", display: "flex", alignItems: "center", gap: 32 }}>
        {/* Logo */}
        <Link to="/" style={{ flexShrink: 0, display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="/brand/mobpae-logo-horizontal.svg" alt="MobPae" style={{ height: 28, width: "auto" }} />
        </Link>

        {/* Desktop nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4, flex: 1, overflowX: "auto", whiteSpace: "nowrap" }} className="hide-scrollbar nav-desktop">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                padding: "6px 12px",
                fontSize: 14,
                fontWeight: 500,
                color: "#5B6270",
                textDecoration: "none",
                borderRadius: 8,
                transition: "color 120ms ease, background 120ms ease",
                flexShrink: 0,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0B0D12"; (e.currentTarget as HTMLElement).style.background = "#F6F7F9"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#5B6270"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/#enquiry"
          className="nav-cta"
          style={{
            flexShrink: 0,
            height: 38,
            padding: "0 18px",
            background: "#315EFF",
            color: "#fff",
            fontSize: 13.5,
            fontWeight: 600,
            borderRadius: 8,
            display: "inline-flex",
            alignItems: "center",
            textDecoration: "none",
            transition: "background 120ms ease, transform 120ms ease",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2A51E0"; (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#315EFF"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        >
          Request a demo
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4, color: "#0B0D12" }}
          className="nav-hamburger"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <line x1="3" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                <line x1="3" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "absolute", top: 72, left: 0, right: 0,
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid #E6E8EE",
          padding: "12px clamp(20px,5vw,32px) 16px",
          display: "flex", flexDirection: "column", gap: 4,
          boxShadow: "0 12px 40px rgba(20,30,60,0.08)",
        }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} style={{ padding: "10px 12px", fontSize: 15, fontWeight: 500, color: "#0B0D12", textDecoration: "none", borderRadius: 10 }}>
              {l.label}
            </a>
          ))}
          <a href="/#enquiry" style={{ marginTop: 8, height: 44, background: "#315EFF", color: "#fff", fontSize: 14, fontWeight: 600, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
            Request a demo
          </a>
        </div>
      )}
    </header>
  );
}
