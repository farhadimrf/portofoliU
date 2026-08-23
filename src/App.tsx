import { InsightProvider } from './hooks/useInsight';
import { LanternCursor } from './components/LanternCursor';
import { AtmosphericBackground } from './components/AtmosphericBackground';
import { Navbar } from './components/Navbar';
import { InsightHUD } from './components/InsightHUD';
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
      <div className="relative min-h-screen bg-[#0A0A0C] text-[#E8E3D9] selection:bg-[#8C2F39]/40 selection:text-[#E8E3D9]">
        {/* Subtle Lantern follower on desktop */}
        <LanternCursor />

        {/* Multi-layered gothic atmospheric background */}
        <AtmosphericBackground />

        {/* Minimal fixed navigation bar */}
        <Navbar />

        {/* Interactive Floating Insight HUD & Milestone Toast */}
        <InsightHUD />

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

          {/* Section 05: The Great Hunt (Flagship Case Study) */}
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
