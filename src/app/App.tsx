import { useEffect } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ApiIntegrationsSection } from "./components/ApiIntegrationsSection";
import { ScreensSection } from "./components/ScreensSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { PricingSection } from "./components/PricingSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { VideoPage } from "./components/VideoPage";

function HomeContent() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const id = location.hash.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ApiIntegrationsSection />
      <ScreensSection />
      <BenefitsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/videos" element={<VideoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
