import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TechSection } from './components/TechSection';
import { DroneIntroAnimation } from './components/DroneIntroAnimation';
import { StudioSection } from './components/StudioSection';
import { TeamSection } from './components/TeamSection';
import { Portfolio3D } from './components/Portfolio3D';
import { PartnersSection } from './components/PartnersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import 'aos/dist/aos.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Site Principal - sempre carregado */}
      <div className="relative w-full max-w-full">
        <Header />
        <main className="w-full max-w-full">
          <HeroSection />
          <ServicesSection />
          <TechSection />
          <StudioSection />
          <TeamSection />
          <Portfolio3D />
          <PartnersSection />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* WhatsApp FAB - sempre visível */}
      <WhatsAppFAB />

      {/* Animação de Introdução sobreposta */}
      <AnimatePresence>
        {showIntro && (
          <DroneIntroAnimation onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;