import { Footer } from "../components/Footer";
import { BenefitsSection } from "../components/home/BenefitsSection";
import { FaqSection } from "../components/home/FaqSection";
import { HeroSection } from "../components/home/HeroSection";
import { HowItWorksSection } from "../components/home/HowItWorksSection";
import { PricingSection } from "../components/home/PricingSection";
import { TrustedCompanies } from "../components/home/TrustedCompanies";
import { WhyMobPaeSection } from "../components/home/WhyMobPaeSection";
import { Navbar } from "../components/Navbar";

export function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TrustedCompanies />
      <WhyMobPaeSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
