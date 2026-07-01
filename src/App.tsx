import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";
import { EmployersPage } from "./pages/EmployersPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { SecurityPage } from "./pages/SecurityPage";
import { TermsPage } from "./pages/TermsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#FAF9F6] text-[#111827]">
        {/* ── Global Aesthetic Mesh Gradient Background ── */}
        <div className="pointer-events-none fixed inset-0 flex justify-center overflow-hidden z-0">
          <div className="absolute -top-[10%] -left-[10%] h-[70vh] w-[50vw] rounded-full bg-[#E9F6F6] opacity-60 blur-[120px]" />
          <div className="absolute top-[20%] right-[0%] h-[60vh] w-[40vw] rounded-full bg-[#F0EDFF] opacity-70 blur-[140px]" />
          <div className="absolute -bottom-[20%] left-[20%] h-[80vh] w-[60vw] rounded-full bg-[#FDF6EB] opacity-50 blur-[150px]" />
        </div>

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/for-employers" element={<EmployersPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
