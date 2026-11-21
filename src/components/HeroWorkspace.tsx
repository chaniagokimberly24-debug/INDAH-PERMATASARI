import React, { useState } from 'react';
import { HERO_INDEX_ITEMS, PROFILE } from '../data/portfolioData';

interface HeroWorkspaceProps {
  onOpenFolder: () => void;
  onJumpToSection: (id: string) => void;
}

export const HeroWorkspace: React.FC<HeroWorkspaceProps> = ({
  onOpenFolder,
  onJumpToSection,
}) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [boxExpanded, setBoxExpanded] = useState(false);

  const handleKeyPress = (keyLabel: string, target?: string) => {
    setActiveKey(keyLabel);
    setTimeout(() => setActiveKey(null), 400);
    if (target) {
      onJumpToSection(target);
    }
  };

  return (
    <header
      className="relative pt-6 pb-12 flex flex-col items-center justify-center min-h-[700px]"
      data-purpose="hero-workspace"
      id="hero"
    >
      {/* Stationery Prop: Drafting Triangle peeking top-left */}
      <div
        className="absolute -top-4 -left-6 w-36 h-36 border-t-[30px] border-l-[30px] border-yellow-400/80 -rotate-12 pointer-events-none drop-shadow-xl hidden lg:block"
        title="Drafting 45° Triangle"
      >
        <div className="w-full h-full border-r-2 border-b-2 border-yellow-500/50" />
      </div>

      {/* Stationery Prop: Mechanical Keyboard Edge peeking from top-center */}
      <div
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-80 h-11 bg-slate-200 rounded-b-xl border-4 border-slate-300 shadow-2xl hidden md:flex justify-around items-end pb-1.5 px-3 z-20"
        data-purpose="keyboard-edge"
      >
        <button
          type="button"
          onClick={() => handleKeyPress('ESC', 'hero')}
          className={`w-7 h-5 bg-white rounded shadow-inner text-[8px] font-mono text-slate-500 flex items-center justify-center transition-transform ${
            activeKey === 'ESC' ? 'translate-y-0.5 bg-slate-100' : 'hover:-translate-y-0.5'
          }`}
          title="Scroll to top"
        >
          ESC
        </button>
        <button
          type="button"
          onClick={() => handleKeyPress('F1', 'about')}
          className={`w-7 h-5 bg-sky-300 rounded shadow-inner text-[8px] font-mono text-sky-900 font-bold flex items-center justify-center transition-transform ${
            activeKey === 'F1' ? 'translate-y-0.5' : 'hover:-translate-y-0.5'
          }`}
          title="Jump to About Me"
        >
          F1
        </button>
        <button
          type="button"
          onClick={() => handleKeyPress('F2', 'contents')}
          className={`w-7 h-5 bg-white rounded shadow-inner text-[8px] font-mono text-slate-500 flex items-center justify-center transition-transform ${
            activeKey === 'F2' ? 'translate-y-0.5' : 'hover:-translate-y-0.5'
          }`}
          title="Jump to Contents"
        >
          F2
        </button>
        <button
          type="button"
          onClick={() => handleKeyPress('F3', 'achievements')}
          className={`w-7 h-5 bg-white rounded shadow-inner text-[8px] font-mono text-slate-500 flex items-center justify-center transition-transform ${
            activeKey === 'F3' ? 'translate-y-0.5' : 'hover:-translate-y-0.5'
          }`}
          title="Jump to Achievements"
        >
          F3
        </button>
        <button
          type="button"
          onClick={() => handleKeyPress('DEL', 'contact')}
          className={`w-7 h-5 bg-pink-400 rounded shadow-inner text-[8px] font-mono text-white font-bold flex items-center justify-center transition-transform ${
            activeKey === 'DEL' ? 'translate-y-0.5' : 'hover:-translate-y-0.5'
          }`}
          title="Jump to Contact"
        >
          DEL
        </button>
        <button
          type="button"
          onClick={() => setBoxExpanded((prev) => !prev)}
          className="w-7 h-5 bg-white rounded shadow-inner text-[8px] font-mono text-slate-500 flex items-center justify-center hover:-translate-y-0.5 transition-transform"
          title="Toggle vector bounding scale"
        >
          ~
        </button>
      </div>

      {/* Stationery Prop: Realistic 3D Yellow & Blue Folder top-left of sheet */}
      <button
        type="button"
        onClick={onOpenFolder}
        className="absolute top-2 left-2 sm:left-12 lg:left-24 z-30 transform -rotate-12 hover:rotate-0 transition-transform duration-300 hidden sm:block kawaii-sticker text-left"
        data-purpose="3d-folder"
        title="Open Projects Dossier"
      >
        <div className="w-20 h-16 bg-blue-500 rounded-lg shadow-xl relative p-1.5 border border-blue-400">
          <div className="absolute -top-2 left-2 w-8 h-3 bg-blue-600 rounded-t-md" />
          <div className="w-full h-full bg-yellow-400 rounded flex flex-col justify-end p-1.5 shadow-md">
            <span className="text-[7px] font-mono font-black text-amber-900 tracking-tighter">
              PROJECTS.ZIP
            </span>
          </div>
          <div className="absolute -right-2 top-3 w-7 h-10 bg-white shadow-md rotate-6 rounded-sm border border-slate-200" />
        </div>
      </button>

      {/* Stationery Prop: Wooden Clipboard Note top-right */}
      <button
        type="button"
        onClick={() => onJumpToSection('about')}
        className="absolute top-4 right-2 sm:right-10 lg:right-20 z-30 transform rotate-6 hover:rotate-0 transition-transform duration-300 hidden sm:block kawaii-sticker text-left"
        data-purpose="clipboard-note"
        title="Jump to About Me"
      >
        <div className="w-28 bg-[#d4a373] p-1.5 rounded-lg shadow-xl border border-[#b07d4b] relative">
          <div className="w-8 h-3 bg-slate-300 rounded-t-sm mx-auto shadow-sm -mt-2.5 border border-slate-400" />
          <div className="bg-white p-2 rounded text-[9px] font-mono text-slate-700 leading-tight shadow-inner">
            <div className="border-b border-pink-200 pb-1 mb-1 font-bold text-pink-600 flex items-center justify-between">
              <span>NOTE</span>
              <span>📍</span>
            </div>
            <p>{PROFILE.shortLocation}</p>
            <p className="text-[8px] text-slate-400 mt-1">IT·PLN &apos;26</p>
          </div>
        </div>
      </button>

      {/* Stationery Prop: Classic Yellow Hex Pencil with Pink Eraser */}
      <div
        className="absolute bottom-20 -left-2 sm:left-4 z-30 transform rotate-45 kawaii-sticker drop-shadow-xl hidden sm:block"
        data-purpose="yellow-pencil"
        title="Studio Hex Pencil"
      >
        <div className="w-3.5 h-36 bg-amber-400 border-x border-amber-600 flex flex-col justify-between items-center rounded-sm">
          <div className="w-full h-5 bg-pink-400 rounded-t-sm border-b border-slate-400" />
          <div className="w-full h-2 bg-slate-300" />
          <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[14px] border-t-amber-100 relative -bottom-3.5">
            <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[6px] border-t-slate-900 absolute -top-3.5 -left-[3px]" />
          </div>
        </div>
      </div>

      {/* Stationery Prop: Metal Scissors peeking bottom-right */}
      <div
        className="absolute bottom-24 -right-2 sm:right-8 z-30 transform -rotate-45 kawaii-sticker drop-shadow-xl hidden md:block"
        data-purpose="scissors-prop"
        title="Crafting Scissors"
      >
        <div className="relative w-16 h-20">
          <div className="w-8 h-8 rounded-full border-4 border-blue-500 absolute -top-1 -left-1" />
          <div className="w-8 h-8 rounded-full border-4 border-blue-500 absolute -top-1 -right-1" />
          <div className="w-3 h-14 bg-slate-300 border border-slate-400 absolute top-5 left-3 rotate-12 rounded" />
          <div className="w-3 h-14 bg-slate-300 border border-slate-400 absolute top-5 right-3 -rotate-12 rounded" />
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full absolute top-7 left-6.5 shadow" />
        </div>
      </div>

      {/* Stationery Prop: Chunky 3D Mouse Cursor Arrow */}
      <button
        type="button"
        onClick={() => onJumpToSection('contents')}
        className="absolute bottom-14 right-24 sm:right-40 z-30 transform rotate-6 kawaii-sticker hidden sm:block"
        data-purpose="3d-cursor"
        title="Explore Projects"
      >
        <div className="w-10 h-10 bg-amber-400 rounded-sm clip-cursor drop-shadow-[0_8px_10px_rgba(0,0,0,0.4)] flex items-center justify-center font-bold text-amber-950 text-xs border-2 border-white">
          ▲
        </div>
      </button>

      {/* ============================================== */}
      {/* The Centered Torn Spiral-Notebook Graph Paper */}
      {/* ============================================== */}
      <div
        className="relative w-full max-w-4xl bg-notebook-graph rounded-t-2xl shadow-tactile torn-bottom-edge p-6 sm:p-10 md:p-14 transform -rotate-[0.6deg] border-t-2 border-x-2 border-white/90"
        data-purpose="hero-notebook-paper"
      >
        {/* Spiral Binder Punch Holes along Top Edge */}
        <div className="absolute top-2.5 left-6 right-6 flex justify-between items-center pointer-events-none">
          <div className="flex space-x-3 sm:space-x-5">
            <span className="w-3.5 h-3.5 rounded-full bg-slate-800/80 shadow-inner" />
            <span className="w-3.5 h-3.5 rounded-full bg-slate-800/80 shadow-inner" />
            <span className="w-3.5 h-3.5 rounded-full bg-slate-800/80 shadow-inner" />
            <span className="w-3.5 h-3.5 rounded-full bg-slate-800/80 shadow-inner" />
          </div>
          <div className="flex space-x-3 sm:space-x-5">
            <span className="w-3.5 h-3.5 rounded-full bg-slate-800/80 shadow-inner" />
            <span className="w-3.5 h-3.5 rounded-full bg-slate-800/80 shadow-inner" />
            <span className="w-3.5 h-3.5 rounded-full bg-slate-800/80 shadow-inner" />
            <span className="w-3.5 h-3.5 rounded-full bg-slate-800/80 shadow-inner" />
          </div>
        </div>

        {/* Hot-Pink Binder Clamp Clamping Notebook Top-Center */}
        <div
          className="absolute -top-5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center kawaii-sticker"
          data-purpose="binder-clip"
        >
          <div className="w-8 h-6 border-2 border-slate-700 rounded-t-md -mb-1 bg-transparent" />
          <div className="w-16 h-7 bg-pink-600 rounded-sm shadow-clip flex items-center justify-center border-t border-pink-400">
            <div className="w-12 h-1 bg-pink-800/60 rounded-full" />
          </div>
        </div>

        {/* Die-Cut Tag Pill "IT · PLN / 2026" top-right corner of sheet */}
        <div
          className="absolute -top-3 -right-2 sm:right-6 transform rotate-6 z-30 kawaii-sticker"
          data-purpose="pink-badge-tag"
        >
          <div className="bg-pink-500 text-white font-mono text-xs sm:text-sm font-extrabold px-3 py-1 rounded-md shadow-lg border-2 border-white flex items-center gap-1.5 whitespace-nowrap">
            <span>⚡</span> IT · PLN / 2026
          </div>
        </div>

        {/* Handwritten Annotation Arrow to name */}
        <div
          className="absolute top-8 right-16 sm:right-28 hidden md:block select-none kawaii-sticker"
          data-purpose="handwritten-annotation"
        >
          <p className="font-handwriting text-2xl text-blue-600 font-bold -rotate-6">
            {PROFILE.name} ✦
          </p>
          <svg
            className="w-16 h-8 text-blue-500 stroke-current fill-none -rotate-12"
            viewBox="0 0 100 40"
          >
            <path d="M10,5 Q50,30 90,10" strokeLinecap="round" strokeWidth="2.5" />
            <path d="M80,18 L90,10 L82,4" strokeLinecap="round" strokeWidth="2.5" />
          </svg>
        </div>

        {/* Vector Bounding Box with 8 Resizing Blue Handles around Title */}
        <div
          onClick={() => setBoxExpanded((prev) => !prev)}
          className={`relative my-8 sm:my-10 mx-auto max-w-xl border-2 border-dashed border-cyan-500/70 p-5 sm:p-8 rounded-lg bg-white/40 backdrop-blur-[1px] cursor-pointer transition-transform duration-300 ${
            boxExpanded ? 'scale-[1.03]' : 'scale-100'
          }`}
          data-purpose="vector-bounding-box"
          title="Click to inspect vector bounding box"
        >
          {/* Resize Handles */}
          <span className="absolute -top-2 -left-2 w-3.5 h-3.5 bg-cyan-400 border border-white shadow" />
          <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-cyan-400 border border-white shadow" />
          <span className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-cyan-400 border border-white shadow" />
          <span className="absolute top-1/2 -translate-y-1/2 -right-2 w-3.5 h-3.5 bg-cyan-400 border border-white shadow" />
          <span className="absolute -bottom-2 -right-2 w-3.5 h-3.5 bg-cyan-400 border border-white shadow" />
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-cyan-400 border border-white shadow" />
          <span className="absolute -bottom-2 -left-2 w-3.5 h-3.5 bg-cyan-400 border border-white shadow" />
          <span className="absolute top-1/2 -translate-y-1/2 -left-2 w-3.5 h-3.5 bg-cyan-400 border border-white shadow" />

          {/* Giant Die-Cut Pixel Sticker Title "PORT" & "FOLIO" */}
          <div className="text-center font-mono font-black tracking-tight select-none">
            <div className="die-cut-sticker inline-block kawaii-sticker">
              <h1 className="text-[92px] text-blue-600 font-extrabold uppercase leading-none filter drop-shadow-[0_8px_0_#1d4ed8]">
                PORT
              </h1>
            </div>
            <div className="flex items-center justify-center gap-2 -mt-2 sm:-mt-5 text-[14px]">
              <div className="die-cut-sticker inline-block relative kawaii-sticker">
                <h2 className="text-[87px] text-blue-500 font-extrabold uppercase leading-none filter drop-shadow-[0_8px_0_#1d4ed8]">
                  FOL<span className="text-sky-400 inline-block">I</span>O
                </h2>
                {/* Sparkle star inside the letter O */}
                <span
                  className="absolute right-4 sm:right-6 top-1/3 text-pink-400 text-3xl sm:text-5xl animate-spin"
                  style={{ animationDuration: '9s' }}
                >
                  ✦
                </span>
              </div>
              {/* Die-Cut Stamp "2026" badge tilted next to Folio */}
              <div className="inline-block transform -rotate-12 bg-pink-500 text-white font-mono font-black px-2.5 py-1 rounded text-xs sm:text-base border-2 border-white shadow-md self-center kawaii-sticker">
                2026
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Miniature Index Inside Notebook */}
        <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs font-mono text-slate-700">
            {HERO_INDEX_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center space-x-1.5">
                <span className={`${item.color} font-bold`}>■</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          {/* Miniature Signature */}
          <div className="text-right self-end">
            <span className="font-handwriting text-xl text-slate-500 block leading-tight">
              {PROFILE.name}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              STUDENT ID // {PROFILE.studentId}
            </span>
          </div>
        </div>

        {/* Kawaii Stickers Collection Hero */}
        <div className="select-none pointer-events-none sm:pointer-events-auto">
          <div
            className="absolute -top-3 left-6 w-20 h-6 bg-pink-300/80 border border-white/70 -rotate-12 shadow-sm rounded-sm opacity-90 kawaii-sticker"
            style={{
              backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)',
              backgroundSize: '8px 8px',
            }}
          />
          <div
            className="absolute -top-2 right-10 w-20 h-6 bg-sky-300/80 border border-white/70 rotate-12 shadow-sm rounded-sm opacity-90 kawaii-sticker"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.5) 4px, rgba(255,255,255,0.5) 8px)',
            }}
          />
          <div
            className="absolute -left-4 top-1/3 bg-yellow-300 border-2 border-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg -rotate-12 text-xl animate-bounce kawaii-sticker"
            style={{ animationDuration: '3.2s' }}
          >
            <span>⭐</span>
            <span className="absolute text-[8px] font-mono font-black text-amber-900 bottom-2">
              ◡‿◡
            </span>
          </div>
          <div className="absolute -right-4 bottom-16 bg-pink-100 border-2 border-white rounded-2xl px-2.5 py-1.5 shadow-lg rotate-12 flex items-center gap-1 kawaii-sticker">
            <span className="text-base">🐾</span>
            <span className="text-[10px] font-mono font-black text-pink-600">HI! ♡</span>
          </div>
          <div className="absolute -top-7 right-28 bg-white border-2 border-pink-300 rounded-full px-2.5 py-1 shadow-lg -rotate-6 hidden sm:flex items-center gap-1.5 z-30 kawaii-sticker">
            <span className="text-lg">🐱💤</span>
            <span className="text-[9px] font-mono font-bold text-pink-600">nyaa~ (˘︶˘)</span>
          </div>
          <div className="absolute -left-6 top-10 bg-amber-50 border-2 border-white rounded-2xl p-2 shadow-lg rotate-12 hidden sm:flex flex-col items-center z-30 kawaii-sticker">
            <span className="text-2xl">🧋</span>
            <span className="text-[8px] font-mono font-black text-amber-900 bg-amber-200/80 px-1 rounded -mt-1">
              BOBA ♡
            </span>
          </div>
          <div className="absolute -top-5 left-1/3 bg-pink-100 border-2 border-white rounded-full px-2 py-0.5 shadow-md rotate-6 z-30 kawaii-sticker">
            <span className="text-base">🎀</span>
          </div>
          <div className="absolute -right-5 top-1/2 bg-red-100 border-2 border-white rounded-2xl p-1.5 shadow-lg -rotate-12 hidden sm:flex items-center gap-1 z-30 kawaii-sticker">
            <span className="text-xl">🍒</span>
            <span className="text-[8px] font-mono font-bold text-red-700">SWEET</span>
          </div>
          <div className="absolute -left-3 bottom-8 bg-yellow-100 border-2 border-white rounded-full p-1.5 shadow-md rotate-12 text-lg z-30 animate-pulse kawaii-sticker">
            🌼
          </div>
          <div className="absolute right-8 top-16 text-pink-400 text-lg animate-pulse opacity-90 kawaii-sticker">
            💖
          </div>
          <div className="absolute left-16 bottom-3 text-sky-400 text-base animate-bounce kawaii-sticker">
            ✨
          </div>
        </div>
      </div>

      {/* Hero Bottom Blueprint Capsule Pills */}
      <div
        className="mt-8 w-full max-w-4xl flex flex-wrap items-center justify-center gap-2.5 z-30"
        data-purpose="blueprint-capsules"
      >
        <span className="px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-300/40 text-blue-100 text-xs font-mono font-semibold shadow-md flex items-center gap-1.5 whitespace-nowrap kawaii-sticker">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          IT STUDENT · ITPLN
        </span>
        <span className="px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-300/40 text-blue-100 text-xs font-mono shadow-md whitespace-nowrap kawaii-sticker">
          NAME // <strong className="text-white">{PROFILE.name}</strong>
        </span>
        <span className="px-4 py-1.5 rounded-full bg-blue-900/80 border border-blue-300/40 text-blue-100 text-xs font-mono shadow-md hidden sm:inline-block whitespace-nowrap kawaii-sticker">
          MAJOR // Information Technology
        </span>
        <a
          href={PROFILE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 rounded-full bg-blue-900/80 hover:bg-blue-800 border border-blue-300/40 text-blue-100 text-xs font-mono shadow-md whitespace-nowrap kawaii-sticker"
        >
          PHONE // {PROFILE.phone}
        </a>
        <a
          href={`mailto:${PROFILE.email}`}
          className="px-4 py-1.5 rounded-full bg-blue-900/80 hover:bg-blue-800 border border-blue-300/40 text-blue-100 text-xs font-mono shadow-md whitespace-nowrap kawaii-sticker"
        >
          EMAIL // {PROFILE.email}
        </a>
      </div>
    </header>
  );
};
