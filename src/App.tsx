import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SEO } from "./components/SEO";
import { getRouteMeta } from "./seo/routeMeta";
import { LEGACY_PAGE_REDIRECTS } from "./siteLinks";

const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));
const PrivacyPolicyPage = lazy(() => import("./pages/WebsitePages").then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import("./pages/WebsitePages").then((m) => ({ default: m.TermsPage })));

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const attempt = (tries: number) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (tries > 0) {
          setTimeout(() => attempt(tries - 1), 80);
        }
      };
      attempt(10);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);
  return null;
}

function RouteSEO() {
  const { pathname } = useLocation();
  const meta = getRouteMeta(pathname);
  return (
    <SEO
      title={meta.title}
      description={meta.description}
      path={meta.canonicalPath}
      robots={meta.robots}
    />
  );
}

function ScrollRevealEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let observer: IntersectionObserver | undefined;
    document.documentElement.classList.add("motion-ready");

    frame = window.requestAnimationFrame(() => {
      const nodes = Array.from(
        document.querySelectorAll<HTMLElement>(
          "main section, main article, main form, footer .site-footer__main > div, [data-reveal]"
        )
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("reveal-visible");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
      );

      nodes.forEach((node, index) => {
        node.classList.add("motion-reveal");
        node.style.setProperty("--reveal-delay", `${Math.min((index % 7) * 42, 252)}ms`);
        observer?.observe(node);
      });
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}

function PageSkeleton() {
  return (
    <div className="page-skeleton" aria-label="Loading page" aria-live="polite">
      <div className="skeleton-nav">
        <div className="skeleton-logo site-skeleton" />
        <div className="skeleton-nav-links">
          <span className="site-skeleton" />
          <span className="site-skeleton" />
          <span className="site-skeleton" />
          <span className="site-skeleton" />
        </div>
        <div className="skeleton-cta site-skeleton" />
      </div>
      <main className="skeleton-main">
        <div className="skeleton-copy">
          <div className="site-skeleton skeleton-pill" />
          <div className="site-skeleton skeleton-title" />
          <div className="site-skeleton skeleton-title short" />
          <div className="site-skeleton skeleton-line" />
          <div className="site-skeleton skeleton-line medium" />
        </div>
        <div className="skeleton-card site-skeleton" />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RouteSEO />
      <ScrollToHash />
      <ScrollRevealEffects />
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          {LEGACY_PAGE_REDIRECTS.map((route) => (
            <Route
              key={route.from}
              path={route.from}
              element={<Navigate to={route.to} replace />}
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
