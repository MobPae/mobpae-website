import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { NotFoundIllustration } from "../components/NotFoundIllustration";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { SECTION_LINKS } from "../siteLinks";

export function NotFoundPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--mp-page)", color: "var(--mp-ink)" }}>
      <SiteNav />

      <main id="main-content">
        <PageHero
          eyebrow="404"
          title="This page moved."
          description="The page you are looking for does not exist yet or may have been renamed."
          actions={
            <Link to="/" className="premium-button">
              Go Home <ArrowRight size={17} />
            </Link>
          }
        >
          <div style={{ maxWidth: 340, margin: "0 auto" }}>
            <NotFoundIllustration />
          </div>
        </PageHero>

        <section style={{ padding: "0 0 clamp(64px, 8vw, 110px)" }}>
          <div className="site-rail">
            <p style={{ margin: "0 0 14px", color: "var(--mp-muted)", fontSize: 14 }}>
              Or head to one of these instead:
            </p>
            <nav
              aria-label="Suggested pages"
              style={{ display: "flex", flexWrap: "wrap", gap: "14px 28px" }}
            >
              {SECTION_LINKS.map((link) => (
                <Link key={link.href} to={link.href} className="text-link">
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
