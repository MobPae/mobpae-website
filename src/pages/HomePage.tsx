import { Footer } from "../components/Footer";
import { FaqSection } from "../components/home/FaqSection";
import { EnquirySection } from "../components/home/EnquirySection";
import { Hero } from "../components/home/Hero";
import { PremiumCampaign } from "../components/home/PremiumCampaign";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#FAF9F6]">
      {/* ── Global Aesthetic Mesh Gradient Background ── */}
      <div className="pointer-events-none fixed inset-0 flex justify-center overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] h-[70vh] w-[50vw] rounded-full bg-[#E9F6F6] opacity-60 blur-[120px]" />
        <div className="absolute top-[20%] right-[0%] h-[60vh] w-[40vw] rounded-full bg-[#F0EDFF] opacity-70 blur-[140px]" />
        <div className="absolute -bottom-[20%] left-[20%] h-[80vh] w-[60vw] rounded-full bg-[#FDF6EB] opacity-50 blur-[150px]" />
      </div>

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
