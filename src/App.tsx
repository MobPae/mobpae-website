import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SEO } from "./components/SEO";
import { getRouteMeta } from "./seo/routeMeta";
import { LEGACY_PAGE_REDIRECTS } from "./siteLinks";

// Belt-and-suspenders re-assertion — the primary fix is an inline
// script at the very top of index.html's <head>, which runs early
// enough to beat the browser's own scroll-position restoration on a
// hard refresh. By the time this module runs, that's already handled;
// this just keeps it "manual" for any later same-tab reload too.
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));
const PrivacyPolicyPage = lazy(() => import("./pages/WebsitePages").then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsPage = lazy(() => import("./pages/WebsitePages").then((m) => ({ default: m.TermsPage })));
const HelpCenterPage = lazy(() => import("./pages/WebsitePages").then((m) => ({ default: m.HelpCenterPage })));
const CareersPage = lazy(() => import("./pages/WebsitePages").then((m) => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import("./pages/WebsitePages").then((m) => ({ default: m.ContactPage })));

// A hand-rolled smooth scroll rather than scrollIntoView/scrollTo's own
// "smooth" option — that native behavior is what section nav links used
// to rely on, but its animation is opaque (no control over duration or
// easing, and it's the browser compositor's call whether it runs at
// all). Driving it via rAF ourselves means the "little animation" is
// actually guaranteed to happen and always finishes, and gives an
// eased, on-brand feel instead of whatever curve the platform defaults
// to. Skips straight to the end for prefers-reduced-motion.
function animatedScrollTo(targetY: number, duration = 650) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) return;

  const instant = "instant" as ScrollBehavior;

  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    window.scrollTo({ top: targetY, left: 0, behavior: instant });
    return;
  }

  const start = performance.now();
  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;

  function step(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Every per-frame jump must itself be instant — the global
    // `html { scroll-behavior: smooth }` (index.css) otherwise applies
    // to these calls too (the two-argument scrollTo(x, y) form doesn't
    // opt out of it the way the options-object form with an explicit
    // behavior does), so each step tried to smooth-animate on top of
    // the one before it instead of landing where this easing put it.
    window.scrollTo({
      top: startY + distance * easeInOutCubic(progress),
      left: 0,
      behavior: instant,
    });
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  // Safety net: environments that never schedule a rendering frame (an
  // inactive/backgrounded tab, some automated test harnesses) would
  // otherwise leave the page exactly where it started, forever. This
  // guarantees the section is actually reached even then.
  setTimeout(() => {
    if (Math.abs(window.scrollY - targetY) > 2) {
      window.scrollTo({ top: targetY, left: 0, behavior: instant });
    }
  }, duration + 150);
}

function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const attempt = (tries: number) => {
        const el = document.getElementById(id);
        if (el) {
          // scroll-margin-top (set globally on section[id] in home.css)
          // is what keeps the fixed header from covering the section's
          // own heading — read it back here since a manual scrollTo
          // doesn't apply it the way scrollIntoView would have.
          const offset = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
          const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
          animatedScrollTo(targetY);
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
          "main section, main article, main form, [data-reveal]"
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
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
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
