import React, { useEffect, useState } from 'react';
import { PROJECT_DOSSIERS, ProjectId } from '../data/portfolioData';

interface ProjectDossierModalProps {
  projectId: ProjectId | null;
  onClose: () => void;
  onSelectProject: (id: ProjectId) => void;
}

export const ProjectDossierModal: React.FC<ProjectDossierModalProps> = ({
  projectId,
  onClose,
  onSelectProject,
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const currentIndex = PROJECT_DOSSIERS.findIndex((p) => p.id === projectId);
  const project = currentIndex >= 0 ? PROJECT_DOSSIERS[currentIndex] : null;

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const next = PROJECT_DOSSIERS[(currentIndex + 1) % PROJECT_DOSSIERS.length];
        onSelectProject(next.id);
      } else if (e.key === 'ArrowLeft') {
        const prev =
          PROJECT_DOSSIERS[(currentIndex - 1 + PROJECT_DOSSIERS.length) % PROJECT_DOSSIERS.length];
        onSelectProject(prev.id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, currentIndex, onClose, onSelectProject]);

  if (!project) return null;

  const prevProject =
    PROJECT_DOSSIERS[(currentIndex - 1 + PROJECT_DOSSIERS.length) % PROJECT_DOSSIERS.length];
  const nextProject = PROJECT_DOSSIERS[(currentIndex + 1) % PROJECT_DOSSIERS.length];

  const toggleDeliverable = (deliverableKey: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [deliverableKey]: prev[deliverableKey] === undefined ? false : !prev[deliverableKey],
    }));
  };

  return (
    <div
      aria-labelledby="modalTitle"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm transition-opacity duration-200"
      data-purpose="project-modal"
      id="projectModal"
      role="dialog"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-2xl bg-notebook-graph rounded-2xl shadow-2xl border-4 border-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        id="modalCard"
      >
        {/* Top Folder Tab Header */}
        <div className="flex items-center justify-between border-b-2 border-blue-500 pb-3 mb-4 gap-2">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-bold text-blue-800">
            <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded text-[10px] kawaii-sticker">
              {project.category}
            </span>
            <span className="tabular-nums kawaii-sticker">{project.code}</span>
          </div>
          <button
            type="button"
            aria-label="Close Dossier"
            className="w-8 h-8 rounded-full bg-pink-500 hover:bg-pink-600 text-white font-mono font-bold text-sm flex items-center justify-center shadow transition-colors active:scale-95 shrink-0 cursor-pointer kawaii-sticker"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Dynamic Modal Content */}
        <div className="space-y-4 font-sans text-slate-800">
          <div className="space-y-3">
            <div
              className={`inline-block px-3 py-1 text-xs font-mono font-bold rounded-full border ${project.badgeClass} kawaii-sticker`}
            >
              {project.badge}
            </div>
            <h3
              id="modalTitle"
              className="text-xl sm:text-2xl font-mono font-extrabold text-slate-900 leading-snug"
            >
              {project.title}
            </h3>
            <p className="text-xs font-mono text-blue-600 font-semibold">{project.subtitle}</p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>

            <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-inner mt-3">
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="font-mono text-xs font-bold text-slate-800 uppercase">
                  Key Highlights &amp; Deliverables:
                </h4>
                <span className="text-[10px] font-mono text-slate-400">
                  Click item to toggle check
                </span>
              </div>
              <ul className="space-y-2">
                {project.deliverables.map((item) => {
                  const key = `${project.id}:${item}`;
                  const isChecked = checkedItems[key] ?? true;
                  return (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => toggleDeliverable(key)}
                        className="w-full text-left flex items-start space-x-2.5 text-xs text-slate-700 font-sans group cursor-pointer"
                      >
                        <span
                          className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center text-[10px] font-bold shrink-0 transition-colors ${
                            isChecked
                              ? 'bg-blue-600 border-blue-600 text-white'
                              : 'bg-white border-slate-300 text-transparent group-hover:border-blue-400'
                          }`}
                        >
                          ✔
                        </span>
                        <span className={isChecked ? 'text-slate-800' : 'text-slate-400 line-through'}>
                          {item}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="font-mono text-[10px] font-bold text-slate-400 uppercase mb-2">
                Focus Domains:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-50 text-blue-800 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border border-blue-200 kawaii-sticker"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onSelectProject(prevProject.id)}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-mono font-bold transition-colors cursor-pointer"
            >
              ← {prevProject.number}
            </button>
            <button
              type="button"
              onClick={() => onSelectProject(nextProject.id)}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-mono font-bold transition-colors cursor-pointer"
            >
              {nextProject.number} →
            </button>
          </div>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-900 text-white text-xs font-mono font-bold transition-all cursor-pointer kawaii-sticker"
            onClick={onClose}
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
