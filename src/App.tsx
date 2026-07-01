import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import {
  AboutPage,
  BlogPage,
  CareersPage,
  ContactPage,
  EmployeesPage,
  EmployerBenefitsPage,
  EmployersPage,
  FaqsPage,
  HelpCenterPage,
  HowItWorksPage,
  PrivacyPolicyPage,
  TermsPage,
} from "./pages/WebsitePages";

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
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
