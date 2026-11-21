import React, { useState } from 'react';
import { PROJECT_DOSSIERS, ProjectDossier, ProjectFilter, ProjectId } from '../data/portfolioData';

interface ContentsSectionProps {
  onSelectProject: (id: ProjectId) => void;
}

const FILTER_OPTIONS: { id: ProjectFilter; label: string }[] = [
  { id: 'all', label: 'All (4)' },
  { id: 'research', label: 'Research' },
  { id: 'engineering', label: 'Code & Logic' },
  { id: 'leadership', label: 'Leadership' },
];

export const ContentsSection: React.FC<ContentsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<ProjectFilter>('all');

  const visibleProjects: ProjectDossier[] =
    filter === 'all'
      ? PROJECT_DOSSIERS
      : PROJECT_DOSSIERS.filter((project) => project.filterGroup === filter);

  return (
    <section className="relative pt-6 pb-12" data-purpose="projects-contents-section" id="contents">
      {/* CONTENTS Die-Cut Header with Blue & White Sticker Effect */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="die-cut-sticker inline-block kawaii-sticker">
          <h2 className="text-4xl sm:text-6xl font-mono font-black text-white tracking-wider filter drop-shadow-[0_6px_0_#0D47A1]">
            CONTENTS &gt;&gt;&gt;&gt;
          </h2>
        </div>
        <span className="hidden md:inline-block h-1 flex-1 bg-blue-400/40 rounded" />
        <span className="text-xs font-mono text-blue-100 bg-blue-900/80 px-3.5 py-1.5 rounded-full border border-blue-300/30 whitespace-nowrap kawaii-sticker">
          CLICK CARD TO PREVIEW DOSSIER
        </span>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {FILTER_OPTIONS.map((opt) => {
          const isActive = filter === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => setFilter(opt.id)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-bold transition-all whitespace-nowrap cursor-pointer border ${
                isActive
                  ? 'bg-amber-400 text-amber-950 border-white shadow-md'
                  : 'bg-blue-950/50 text-blue-100 border-blue-300/30 hover:bg-blue-900/80'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Staggered 4-Card Spiral Notebook Grid with Hot-Pink Binder Clips */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch"
        data-purpose="project-cards-container"
      >
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelectProject(project.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectProject(project.id);
              }
            }}
            className={`project-card group relative bg-notebook-graph rounded-xl p-5 pt-8 shadow-paper border-2 border-white torn-bottom-edge cursor-pointer transform ${project.tiltClass} hover:rotate-0 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-400`}
            data-project-id={project.id}
            data-purpose={`project-card-${project.number}`}
          >
            {/* Hot-Pink Binder Clip Clamping Top Center */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center kawaii-sticker">
              <div className="w-6 h-4 border-2 border-slate-700 rounded-t-sm bg-transparent" />
              <div className="w-12 h-5 bg-pink-500 rounded-sm shadow-md flex items-center justify-center">
                <div className="w-8 h-0.5 bg-pink-700" />
              </div>
            </div>

            {/* Top Notebook Holes */}
            <div className="flex justify-between items-center px-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>

            {/* Visual Thumbnail Mock */}
            <div
              className={`relative bg-gradient-to-br ${project.thumbGradient} rounded-lg p-3 text-white shadow-md overflow-hidden aspect-[4/3] flex flex-col justify-between mb-4 border ${project.thumbBorder}`}
            >
              <div className="flex justify-between items-center">
                <span
                  className={`${project.thumbTopLabelClass} font-mono text-[9px] px-1.5 py-0.5 rounded kawaii-sticker`}
                >
                  {project.thumbTopLabel}
                </span>
                <span className="text-xs font-mono">{project.thumbIcon}</span>
              </div>
              <div className="text-center my-auto">
                <span
                  className={`text-2xl font-black block ${
                    project.id === 'python' ? 'text-yellow-400 font-mono' : ''
                  }`}
                >
                  {project.thumbCenterTitle}
                </span>
                <span className="text-[10px] font-mono text-white/80">
                  {project.thumbCenterSubtitle}
                </span>
              </div>
              <span className="text-[9px] font-mono text-white/80 truncate">
                {project.thumbFooter}
              </span>
            </div>

            {/* Card Body Content */}
            <div className="space-y-1.5 flex-1">
              <span className="font-mono font-black text-2xl text-blue-600 block leading-none tabular-nums">
                {project.number}
              </span>
              <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-600 transition-colors">
                {project.shortTitle}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">{project.shortDesc}</p>
            </div>

            <div className="mt-4 pt-3 pb-2 border-t border-slate-200/80 flex items-center justify-between text-xs font-mono font-bold text-blue-600">
              <span>VIEW DOSSIER</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                ↗
              </span>
            </div>

            {/* Corner Kawaii Stickers */}
            <div
              className={`absolute top-2 right-2 ${project.cornerStickerBg} border rounded-full px-2 py-0.5 text-[10px] font-mono font-bold shadow-sm kawaii-sticker select-none`}
            >
              {project.cornerStickerEmoji}
            </div>

            {project.bottomStickerLabel ? (
              <div
                className={`absolute bottom-9 right-2 ${project.bottomStickerColor} border-2 border-white rounded-2xl px-2 py-1 shadow-md select-none flex items-center gap-1 kawaii-sticker`}
              >
                <span className="text-sm">{project.bottomStickerEmoji}</span>
                <span className="text-[8px] font-mono font-bold">{project.bottomStickerLabel}</span>
              </div>
            ) : (
              <div className="absolute bottom-9 right-2 bg-amber-100 border-2 border-white rounded-full w-9 h-9 flex items-center justify-center shadow-md rotate-12 select-none text-base kawaii-sticker">
                {project.bottomStickerEmoji}
              </div>
            )}

            <div
              className={`absolute top-12 -left-3 ${project.sideStickerBg} border-2 border-white rounded-full px-2 py-0.5 text-[8px] font-mono font-black shadow-md select-none kawaii-sticker`}
            >
              {project.sideStickerLabel}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
