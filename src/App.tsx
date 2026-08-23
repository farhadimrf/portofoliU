import { InsightProvider } from './hooks/useInsight';
import { LanternCursor } from './components/LanternCursor';
import { AtmosphericBackground } from './components/AtmosphericBackground';
import { Navbar } from './components/Navbar';
import { InsightModal } from './components/InsightModal';

// Sections
import { Hero } from './sections/Hero';
import { HunterAbout } from './sections/HunterAbout';
import { OldSystems } from './sections/OldSystems';
import { Regions } from './sections/Regions';
import { GreatHuntCaseStudy } from './sections/GreatHuntCaseStudy';
import { BossFights } from './sections/BossFights';
import { Arsenal } from './sections/Arsenal';
import { Workshop } from './sections/Workshop';
import { InsightLore } from './sections/InsightLore';
import { HuntersDream } from './sections/HuntersDream';
import { Contact } from './sections/Contact';

function App() {
  return (
    <InsightProvider>
      <div className="relative min-h-screen bg-[#0D0D0F] text-[#E5E0D8] selection:bg-[#8C2F39]/40 selection:text-[#E5E0D8]">
        {/* Subtle Lantern follower on desktop */}
        <LanternCursor />

        {/* Multi-layered gothic atmospheric background */}
        <AtmosphericBackground />

        {/* Minimal fixed navigation bar */}
        <Navbar />

        {/* Main Content Layout Container */}
        <main className="relative z-10">
          {/* Section 01: The Hunt */}
          <Hero />

          {/* Section 02: The Hunter */}
          <HunterAbout />

          {/* Section 03: The Old Systems */}
          <OldSystems />

          {/* Section 04: The Regions */}
          <Regions />

          {/* Section 05: The Great Hunt (Case Study) */}
          <GreatHuntCaseStudy />

          {/* Section 06: Boss Fights */}
          <BossFights />

          {/* Section 07: Hunter's Arsenal */}
          <Arsenal />

          {/* Section 08: The Workshop */}
          <Workshop />

          {/* Section 09: Insight */}
          <InsightLore />

          {/* Section 10: The Hunter's Dream */}
          <HuntersDream />

          {/* Section 11: Contact & Footer */}
          <Contact />
        </main>

        {/* Unlocked Insight Principles Modal */}
        <InsightModal />
      </div>
    </InsightProvider>
  );
}

export default App;
