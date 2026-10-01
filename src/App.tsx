import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PlatformFeatures } from './components/PlatformFeatures';
import { Workflow } from './components/Workflow';
import { MarketSection } from './components/MarketSection';
import { PricingSection } from './components/PricingSection';
import { PilotSection } from './components/PilotSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

export const App: React.FC = () => {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | undefined>(undefined);

  const handleOpenPilotModal = (tierName?: string) => {
    setSelectedTier(tierName);
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
    setSelectedTier(undefined);
  };

  const handleSeeHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] text-[#0F172A] flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onRequestPilot={() => handleOpenPilotModal()} />

      <main className="flex-grow">
        {/* Section 1: Home / Hero */}
        <Hero 
          onRequestPilot={() => handleOpenPilotModal()} 
          onSeeHowItWorks={handleSeeHowItWorks} 
        />

        {/* Section 2: About */}
        <AboutSection />

        {/* Section 3: Platform */}
        <PlatformFeatures />

        {/* Section 4: How It Works */}
        <Workflow />

        {/* Section 5: Market */}
        <MarketSection />

        {/* Section 6: Pricing */}
        <PricingSection onRequestPilot={(tier) => handleOpenPilotModal(tier)} />

        {/* Final CTA Panel & Dedicated Pilot Section */}
        <PilotSection />

        {/* Section 7: FAQ */}
        <FAQSection />
      </main>

      {/* Section 8: Footer */}
      <Footer onRequestPilot={() => handleOpenPilotModal()} />

      {/* Global Pilot Request Modal */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={handleClosePilotModal}
        selectedTier={selectedTier}
      />
    </div>
  );
};

export default App;
