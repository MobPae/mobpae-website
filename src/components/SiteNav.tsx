import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "For Employers", href: "/employers" },
  { label: "For Employees", href: "/employees" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Product", href: "/product" },
  { label: "Our Story", href: "/about" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <div className="site-nav__rail">
          <Link to="/" aria-label="MobPae home" className="site-nav__brand">
            <img
              src="/brand/mobpae-logo-nav.png"
              alt="MobPae"
              width="156"
              height="45"
              className="site-nav__brand-image"
            />
          </Link>

          <nav className="site-nav__links" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                aria-current={location.pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="site-nav__actions">
            <Link to="/#enquiry" className="site-nav__cta">
              Request Demo
            </Link>
            <button
              type="button"
              className="site-nav__menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav id="mobile-navigation" className="site-nav__mobile" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to="/#enquiry" className="site-nav__mobile-cta" onClick={() => setMenuOpen(false)}>
              Request Demo
            </Link>
          </nav>
        ) : null}
      </header>
    </>
  );
}
