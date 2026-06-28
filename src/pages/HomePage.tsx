import { Footer } from "../components/Footer";
import { FaqSection } from "../components/home/FaqSection";
import { EnquirySection } from "../components/home/EnquirySection";
import { PremiumCampaign } from "../components/home/PremiumCampaign";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FC]">
      <SEO
        title="MobPae | Employer-Backed Salary Access"
        description="MobPae helps employers offer controlled earned salary access with KYC, bank verification, approvals, disbursal tracking and payroll recovery visibility."
      />
      <Navbar />
      <PremiumCampaign />
      <EnquirySection />
      <FaqSection />
      <Footer />
    </main>
  );
}
