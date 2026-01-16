import React from "react";
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { OverviewSection } from './components/OverviewSection';
import { MissionSection } from './components/MissionSection';
import { AudienceSection } from './components/AudienceSection';
import { ProgramSection } from './components/ProgramSection';
import { ImpactSection } from './components/ImpactSection';
import { OrganizersSection } from './components/OrganizersSection';
import { ScheduleSection } from './components/ScheduleSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div id="overview">
          <OverviewSection />
        </div>
        
        <div id="mission">
          <MissionSection />
        </div>
        
        <AudienceSection />
        
        <div id="program">
          <ProgramSection />
        </div>
        
        <ImpactSection />
        
        <OrganizersSection />
        
        <div id="schedule">
          <ScheduleSection />
        </div>
        
        <div id="register">
          <RegistrationSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
