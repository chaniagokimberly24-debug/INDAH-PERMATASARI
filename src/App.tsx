/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AboutMeSection } from './components/AboutMeSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { ContentsSection } from './components/ContentsSection';
import { HeroWorkspace } from './components/HeroWorkspace';
import { ProjectDossierModal } from './components/ProjectDossierModal';
import { TopWorkspaceNav } from './components/TopWorkspaceNav';
import { ProjectId } from './data/portfolioData';

const RULER_TOP = ['0cm', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100cm'];
const RULER_SIDE = ['—0', '—20', '—40', '—60', '—80', '—100', '—120'];

export default function App() {
  const [activeProjectId, setActiveProjectId] = useState<ProjectId | null>(null);

  const handleJumpToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen p-2 sm:p-5 md:p-8 font-sans">
      {/* Outer warm mahogany wooden desk frame mimicking real studio table */}
      <div
        className="relative max-w-7xl mx-auto rounded-3xl bg-[#8D5B3C] p-3 sm:p-6 md:p-8 shadow-[inset_0_4px_16px_rgba(0,0,0,0.6),0_25px_60px_rgba(0,0,0,0.7)] border-4 border-[#5E3821]"
        data-purpose="desk-frame"
      >
        {/* The blue self-healing drafting cutting mat with grid lines & millimeter graduations */}
        <div
          className="relative rounded-2xl bg-mat-grid overflow-hidden border-2 border-blue-400/40 shadow-inner"
          data-purpose="drafting-cutting-mat"
        >
          <div className="absolute inset-0 mat-radial-glow pointer-events-none" />

          {/* Top/Left Millimeter Measuring Ruler Accents */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-blue-900/60 flex items-end justify-between px-3 text-[9px] font-mono text-blue-200/70 border-b border-blue-400/30 select-none z-10">
            {RULER_TOP.map((mark) => (
              <span key={mark}>| {mark}</span>
            ))}
          </div>
          <div className="absolute top-4 left-0 bottom-0 w-4 bg-blue-900/60 hidden sm:flex flex-col justify-between py-4 text-[8px] font-mono text-blue-200/70 border-r border-blue-400/30 select-none z-10">
            {RULER_SIDE.map((mark) => (
              <span key={mark}>{mark}</span>
            ))}
          </div>

          <TopWorkspaceNav onOpenFirstProject={() => setActiveProjectId('kti')} />

          {/* Main Workspace Stage Container */}
          <main className="relative z-20 p-4 sm:p-8 md:p-12 space-y-16 sm:space-y-24">
            <HeroWorkspace
              onOpenFolder={() => setActiveProjectId('kti')}
              onJumpToSection={handleJumpToSection}
            />
            <AboutMeSection />
            <ContentsSection onSelectProject={(id) => setActiveProjectId(id)} />
            <AchievementsSection />
            <ContactFooterSection />
          </main>
        </div>
      </div>

      {/* Interactive Modal File Folder simulating opening a physical folder on the desk */}
      <ProjectDossierModal
        projectId={activeProjectId}
        onClose={() => setActiveProjectId(null)}
        onSelectProject={(id) => setActiveProjectId(id)}
      />
    </div>
  );
}
