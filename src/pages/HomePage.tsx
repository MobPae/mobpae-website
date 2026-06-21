import { Footer } from "../components/Footer";
import { BenefitsSection } from "../components/home/BenefitsSection";
import { FaqSection } from "../components/home/FaqSection";
import { HeroSection } from "../components/home/HeroSection";
import { HowItWorksSection } from "../components/home/HowItWorksSection";
import { LaunchReadySections } from "../components/home/LaunchReadySections";
import { PricingSection } from "../components/home/PricingSection";
import { ProductScreensSection } from "../components/home/ProductScreensSection";
import { TrustedCompanies } from "../components/home/TrustedCompanies";
import { WhyMobPaeSection } from "../components/home/WhyMobPaeSection";
import { Navbar } from "../components/Navbar";
import { SEO } from "../components/SEO";

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#F6F9F8]">
      <SEO
        title="MobPae | Employer-Backed Salary Access"
        description="MobPae helps employers offer controlled earned salary access with KYC, bank verification, approvals, disbursal tracking and payroll recovery visibility."
      />
      <Navbar />
      <HeroSection />
      <TrustedCompanies />
      <ProductScreensSection />
      <WhyMobPaeSection />
      <HowItWorksSection />
      <BenefitsSection />
      <LaunchReadySections />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
