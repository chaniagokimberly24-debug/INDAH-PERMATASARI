import React from 'react';
import { PROFILE } from '../data/portfolioData';

interface TopWorkspaceNavProps {
  onOpenFirstProject: () => void;
}

export const TopWorkspaceNav: React.FC<TopWorkspaceNavProps> = ({ onOpenFirstProject }) => {
  return (
    <nav
      className="relative z-30 pt-6 px-4 sm:px-8 pb-3 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 backdrop-blur-sm bg-blue-950/20"
      data-purpose="workspace-nav"
    >
      <a
        href="#hero"
        className="flex items-center space-x-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 rounded-md"
      >
        <span className="w-3.5 h-3.5 rounded-full bg-pink-500 shadow-[0_0_10px_#ec4899] shrink-0" />
        <span className="font-mono text-sm tracking-wider font-extrabold text-white flex items-center gap-2 whitespace-nowrap">
          <span>{PROFILE.handle}</span>
          <span className="text-blue-300">//</span>
          <span className="bg-blue-800/80 text-blue-100 text-xs px-2.5 py-0.5 rounded border border-blue-400/40 whitespace-nowrap">
            {PROFILE.edition}
          </span>
        </span>
      </a>

      <div className="flex flex-wrap items-center gap-2">
        <a
          className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 hover:bg-white text-white hover:text-blue-900 transition-all border border-white/20 shadow-sm whitespace-nowrap shrink-0"
          href="#about"
        >
          #about
        </a>
        <a
          className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 hover:bg-white text-white hover:text-blue-900 transition-all border border-white/20 shadow-sm whitespace-nowrap shrink-0"
          href="#contents"
        >
          #contents
        </a>
        <a
          className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 hover:bg-white text-white hover:text-blue-900 transition-all border border-white/20 shadow-sm whitespace-nowrap shrink-0"
          href="#achievements"
        >
          #achievements
        </a>
        <button
          type="button"
          onClick={onOpenFirstProject}
          className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-blue-800/70 hover:bg-blue-700 text-blue-100 transition-all border border-blue-400/30 shadow-sm whitespace-nowrap shrink-0 hidden sm:inline-flex items-center gap-1"
          title="Quick Open Project Dossiers"
        >
          <span>📁</span>
          <span>dossiers</span>
        </button>
        <a
          className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-pink-500 hover:bg-pink-400 text-white transition-all shadow-md shadow-pink-500/30 whitespace-nowrap shrink-0"
          href="#contact"
        >
          #contact
        </a>
      </div>
    </nav>
  );
};
