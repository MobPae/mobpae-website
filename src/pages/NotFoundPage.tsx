import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

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
        />
      </main>
      <SiteFooter />
    </div>
  );
}
