import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NotFoundIllustration } from "../components/NotFoundIllustration";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SECTION_LINKS } from "../siteLinks";
import "./home.css";

export function NotFoundPage() {
  return (
    <div className="bk-home">
      <SiteHeader />
      <main id="main-content">
        <section className="bk-404">
          <div className="bk-rail">
            <div className="bk-404__art">
              <NotFoundIllustration />
            </div>
            <span className="bk-page-hero__eyebrow">404</span>
            <h1>This page moved.</h1>
            <p>
              The page you are looking for does not exist yet or may have
              been renamed.
            </p>
            <div className="bk-page-hero__actions">
              <Link to="/" className="bk-btn">
                Go Home <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <nav className="bk-404-links" aria-label="Suggested pages">
              {SECTION_LINKS.map((link) => (
                <Link key={link.href} to={link.href}>
                  {link.label} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
