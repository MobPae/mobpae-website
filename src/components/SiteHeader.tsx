import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SECTION_LINKS } from "../siteLinks";

/**
 * Shared site-wide header. Used by the homepage and every secondary page
 * so the header is identical everywhere. Relies on the --mpw-* design
 * tokens (global, defined on :root in home.css) and home.css's .mpw-header*
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
      <a className="mpw-skip" href="#main-content">
        Skip to main content
      </a>
      <header className={`mpw-header ${stuck ? "mpw-header--stuck" : ""}`}>
        <div className="mpw-header__bar">
          <Link to="/" aria-label="MobPae home" className="mpw-logo">
            <img src="/logo.svg" alt="MobPae" />
          </Link>
          <nav className="mpw-nav" aria-label="Primary navigation">
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
          <div className="mpw-header__actions">
            <Link to="/#enquiry" className="mpw-btn mpw-header__cta">
              Get In Touch
            </Link>
            <button
              type="button"
              className="mpw-menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mpw-mobile-navigation"
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
            id="mpw-mobile-navigation"
            className="mpw-mobile"
            aria-label="Mobile navigation"
          >
            {SECTION_LINKS.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link to="/#enquiry" className="mpw-btn" onClick={() => setOpen(false)}>
              Get In Touch
            </Link>
          </nav>
        ) : null}
      </header>
    </>
  );
}
