import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { StatsSection } from './components/StatsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <SocialProofSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;