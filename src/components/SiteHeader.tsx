import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SECTION_LINKS } from "../siteLinks";

/**
 * Shared site-wide header. Used by the homepage and every secondary page
 * so the header is identical everywhere. Relies on the --bk-* design
 * tokens (global, defined on :root in home.css) and home.css's .bk-header*
 * rules, both of which load globally once home.css is imported anywhere.
 */
export function SiteHeader() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="bk-skip" href="#main-content">
        Skip to main content
      </a>
      <header className={`bk-header ${stuck ? "bk-header--stuck" : ""}`}>
        <div className="bk-header__bar">
          <Link to="/" aria-label="MobPae home" className="bk-logo">
            <img src="/logo.svg" alt="MobPae" />
          </Link>
          <nav className="bk-nav" aria-label="Primary navigation">
            {SECTION_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                aria-current={
                  location.hash === link.href.replace("/", "")
                    ? "page"
                    : undefined
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="bk-header__actions">
            <Link to="/#enquiry" className="bk-btn bk-header__cta">
              Request Demo
            </Link>
            <button
              type="button"
              className="bk-menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="bk-mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <X size={18} aria-hidden="true" />
              ) : (
                <Menu size={18} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {open ? (
          <nav
            id="bk-mobile-navigation"
            className="bk-mobile"
            aria-label="Mobile navigation"
          >
            {SECTION_LINKS.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to="/#enquiry" className="bk-btn" onClick={() => setOpen(false)}>
              Request Demo
            </Link>
          </nav>
        ) : null}
      </header>
    </>
  );
}
