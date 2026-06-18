import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CareersPage } from "./pages/CareersPage";
import { EmployersPage } from "./pages/EmployersPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { SecurityPage } from "./pages/SecurityPage";
import { TermsPage } from "./pages/TermsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/for-employers" element={<EmployersPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
