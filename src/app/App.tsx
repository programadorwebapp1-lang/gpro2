import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ApiIntegrationsSection } from "./components/ApiIntegrationsSection";
import { ScreensSection } from "./components/ScreensSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { PricingSection } from "./components/PricingSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ApiIntegrationsSection />
        <ScreensSection />
        <BenefitsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
