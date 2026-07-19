import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#FBFCFF] text-[#0B1026]">
      <SiteNav />

      <main id="main-content">
        <PageHero
          eyebrow="404"
          title="This page moved."
          description="The page you are looking for does not exist yet or may have been renamed."
          actions={
            <Link
              to="/"
              className="inline-flex h-[52px] items-center gap-3 rounded-xl bg-[#315eff] px-7 text-[14px] font-[900] text-white shadow-[0_18px_44px_rgba(49,94,255,0.28)]"
            >
              Go Home <ArrowRight size={17} />
            </Link>
          }
        />
      </main>
      <SiteFooter />
    </div>
  );
}
