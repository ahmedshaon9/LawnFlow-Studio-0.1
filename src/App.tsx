import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Results from './components/Results';
import Pricing from './components/Pricing';
import ContactFooter from './components/ContactFooter';
import AuditModal from './components/AuditModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [selectedPlanForAudit, setSelectedPlanForAudit] = useState<string | undefined>(undefined);

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAudit = (planName?: string) => {
    setSelectedPlanForAudit(planName);
    setAuditModalOpen(true);
  };

  // Section observer to update active nav link on scroll
  useEffect(() => {
    if (loading) return;

    const sections = ['hero', 'services', 'how-it-works', 'results', 'pricing', 'contact'];

    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (sectionId === 'contact') {
              setActiveSection('pricing');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-bg text-text-primary selection:bg-[#10B981]/30 selection:text-white">
      {/* Section 1: Loading Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Floating Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 2: Hero */}
        <Hero
          onGetAudit={() => handleOpenAudit()}
          onSeeHowItWorks={() => scrollToSection('services')}
        />

        {/* Section 3: Services */}
        <Services onOpenAudit={() => handleOpenAudit()} />

        {/* Section 4: How It Works (Process) */}
        <HowItWorks onOpenAudit={() => handleOpenAudit()} />

        {/* Section 5: Results */}
        <Results onOpenAudit={() => handleOpenAudit()} />

        {/* Section 6: Pricing */}
        <Pricing
          onSelectPlan={(plan) => handleOpenAudit(plan)}
          onOpenAudit={() => handleOpenAudit()}
        />

        {/* Section 7: Contact / Footer */}
        <ContactFooter onOpenAudit={() => handleOpenAudit()} />
      </main>

      {/* Interactive Free Audit & Calendly Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        initialPlan={selectedPlanForAudit}
      />
    </div>
  );
}
