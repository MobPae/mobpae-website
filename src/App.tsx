import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import {
  BlogPage,
  CareersPage,
  ContactPage,
  EmployeesPage,
  EmployerBenefitsPage,
  FaqsPage,
  HelpCenterPage,
  PrivacyPolicyPage,
  TermsPage,
} from "./pages/WebsitePages";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { EmployersPage } from "./pages/EmployersPage";
import { TeamPage } from "./pages/TeamPage";
import { AboutPage } from "./pages/AboutPage";
import { SEO } from "./components/SEO";
import { getRouteMeta } from "./seo/routeMeta";

// Scroll to hash on navigation; scroll to top on route change
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // Give the page a tick to render before scrolling
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

function App() {
  return (
    <BrowserRouter>
      <RouteSEO />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employers" element={<EmployersPage />} />
        <Route path="/employers/benefits" element={<EmployerBenefitsPage />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/teams" element={<TeamPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
