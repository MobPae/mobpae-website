import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { SECTION_LINKS } from "../siteLinks";

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 8.48H3.16V21H7V8.48Zm6.32 0H9.5V21h3.77v-6.19c0-3.44 4.48-3.72 4.48 0V21H21v-7.93c0-6.17-6.91-5.94-7.68-2.91V8.48Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      aria-hidden="true"
    >
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

/**
 * Shared site-wide footer. Used by the homepage and every secondary page
 * (Careers, Contact, Help Center, Privacy Policy, Terms, …) so the footer
 * is identical everywhere. Relies on the --mpw-* design tokens, which are
 * defined on :root in home.css, and on home.css's .mpw-footer* rules — both
 * load globally once home.css is imported anywhere in the app.
 */
export function SiteFooter() {
  return (
    <footer className="mpw-footer">
      <div className="mpw-rail">
        <div className="mpw-footer__grid">
          <div>
            <p className="mpw-footer__title">Company</p>
            <p>
              Employer-powered salary access for responsible liquidity, payroll
              clarity, and workforce wellbeing.
            </p>
            <div className="mpw-contact-line">
              <Mail size={18} aria-hidden="true" />
              <a href="mailto:support@mobpae.com">support@mobpae.com</a>
            </div>
            <div className="mpw-contact-line">
              <MapPin size={18} aria-hidden="true" />
              <span>Gujarat, Ahmedabad — 382470</span>
            </div>
            <div className="mpw-follow">
              <span>Follow us on:</span>
              <div className="mpw-follow__icons">
                <a
                  href="https://linkedin.com/company/mobpae"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="MobPae on LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="https://www.instagram.com/mobpae/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="MobPae on Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="mpw-footer__title">Information</p>
            <ul>
              {SECTION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mpw-footer__title">Quick links</p>
            <ul>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="mpw-footer__title">Resources</p>
            <ul>
              <li>
                <Link to="/help-center">Help Center</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mpw-footer__bottom">
          <Link to="/" className="mpw-logo" aria-label="MobPae home">
            <img src="/logo.svg" alt="MobPae" />
          </Link>
          <p>
            Copyright © {new Date().getFullYear()} MobPae | All Rights Reserved
          </p>
          <span className="mpw-made-in-india">
            <span aria-hidden="true">🇮🇳</span> Made in India
          </span>
        </div>
      </div>
    </footer>
  );
}
