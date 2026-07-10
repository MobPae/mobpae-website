import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
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
