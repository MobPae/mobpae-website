import { Footer } from "../components/Footer";
import { FaqSection } from "../components/home/FaqSection";
import { EnquirySection } from "../components/home/EnquirySection";
import { Hero } from "../components/home/Hero";
import { PremiumCampaign } from "../components/home/PremiumCampaign";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <main className="relative min-h-screen bg-transparent">
      <div className="relative z-10">
        <SEO
          title="MobPae | Employer-Backed Salary Access"
          description="MobPae helps employers offer controlled earned salary access with KYC, bank verification, approvals, disbursal tracking and payroll recovery visibility."
        />
        <Navbar />
        <Hero />
        <PremiumCampaign />
        <EnquirySection />
        <FaqSection />
        <Footer />
      </div>
    </main>
  );
}
