import React from 'react';
import {
  COURSEWORK_ITEMS,
  HONORS_MILESTONES,
  INTEREST_ITEMS,
} from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section
      className="relative pt-6 pb-12"
      data-purpose="achievements-section"
      id="achievements"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: Big Wooden Clipboard with Lined Paper */}
        <div
          className="lg:col-span-7 bg-[#B07D4B] p-4 sm:p-6 rounded-2xl shadow-tactile border-4 border-[#82542B] relative"
          data-purpose="wooden-clipboard"
        >
          {/* Metal Clip Clamp at Top Center */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 rounded-t-lg shadow-md border border-slate-400 flex items-center justify-center z-20 kawaii-sticker">
            <div className="w-10 h-2 bg-slate-600 rounded-full" />
          </div>

          {/* Lined Paper Sheet inside clipboard */}
          <div className="bg-lined-paper rounded-xl p-5 sm:p-7 shadow-inner border border-slate-200 mt-2 text-slate-800">
            <div className="border-b-2 border-pink-400 pb-2 mb-4 flex justify-between items-center gap-2">
              <h3 className="font-mono font-black text-lg sm:text-xl text-blue-900 tracking-tight flex items-center gap-2">
                <span>📋</span> HONORS &amp; MILESTONES
              </h3>
              <span className="text-xs font-mono font-bold text-pink-600 tabular-nums kawaii-sticker">
                2024–2026
              </span>
            </div>

            {/* Milestone Items */}
            <ul className="space-y-4 font-sans text-xs sm:text-sm">
              {HONORS_MILESTONES.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="text-lg shrink-0 kawaii-sticker">{item.icon}</span>
                  <div>
                    <strong className="text-slate-900 font-bold block">{item.title}</strong>
                    <span className="text-slate-600 text-xs">{item.detail}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-3 border-t border-slate-300 flex flex-wrap justify-between items-center gap-2 text-[10px] font-mono text-slate-500">
              <span>RECORD_VERIFIED: YES</span>
              <span>SMAS WIRA BHAKTI &amp; ITPLN</span>
            </div>
          </div>

          {/* Honors Cute Stickers */}
          <div className="select-none">
            <div className="absolute -top-3 -right-3 bg-pink-400 text-white border-2 border-white rounded-full w-9 h-9 flex items-center justify-center shadow-md rotate-12 text-sm kawaii-sticker">
              💖
            </div>
            <div className="absolute -bottom-3 -left-3 bg-yellow-300 text-amber-900 border-2 border-white rounded-full w-9 h-9 flex items-center justify-center shadow-md -rotate-12 text-sm kawaii-sticker">
              🌟
            </div>
            <div className="absolute -top-6 -left-3 bg-yellow-100 border-2 border-white rounded-2xl px-2.5 py-1 shadow-lg -rotate-12 flex items-center gap-1.5 kawaii-sticker">
              <span className="text-lg">🏆◡̈</span>
              <span className="text-[8px] font-mono font-black text-amber-900">CHAMPION!</span>
            </div>
            <div className="absolute -bottom-4 right-8 bg-pink-100 border-2 border-white rounded-full px-2.5 py-0.5 shadow-md rotate-6 flex items-center gap-1 kawaii-sticker">
              <span className="text-sm">🎖️</span>
              <span className="text-[8px] font-mono font-bold text-pink-700">PROUD!</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Stacked Sticky Post-It Notes (Coursework + Passions) */}
        <div className="lg:col-span-5 space-y-6" data-purpose="stacked-sticky-notes">
          {/* Sticky Note 1: Yellow (#FEF08A) - Coursework */}
          <div
            className="bg-postItYellow p-5 sm:p-6 rounded-lg shadow-paper transform rotate-2 hover:rotate-0 transition-transform duration-200 border-t-8 border-yellow-300 relative"
            data-purpose="yellow-sticky-note"
          >
            {/* Pin tack graphic */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-500 shadow-md border border-red-700 kawaii-sticker" />

            <div className="font-mono text-xs font-black text-amber-900 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>ITPLN RELEVANT COURSEWORK</span>
              <span className="tabular-nums kawaii-sticker">2026 // B.Sc</span>
            </div>
            <p className="text-xs text-amber-950 mb-3 leading-relaxed">
              Key foundational courses shaping systematic algorithmic thinking and software logic:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono font-bold">
              {COURSEWORK_ITEMS.map((course) => (
                <div
                  key={course}
                  className="bg-yellow-200/80 p-2 rounded border border-yellow-400/60 text-amber-900 kawaii-sticker"
                >
                  {course}
                </div>
              ))}
            </div>
            <span className="block mt-4 font-handwriting text-right text-lg text-amber-800 -rotate-2">
              &quot;code cleanly, verify rigorously&quot;
            </span>
            <div className="absolute -bottom-3 -right-2 bg-white border-2 border-yellow-300 rounded-full w-8 h-8 flex items-center justify-center shadow-md rotate-12 select-none text-base kawaii-sticker">
              🌼
            </div>
          </div>

          {/* Sticky Note 2: White Grid Note - Passions */}
          <div
            className="bg-notebook-graph p-5 sm:p-6 rounded-lg shadow-paper transform -rotate-1 hover:rotate-0 transition-transform duration-200 border-2 border-white relative"
            data-purpose="white-grid-sticky-note"
          >
            {/* Tape graphic on top */}
            <div className="absolute -top-3 left-10 w-16 h-5 bg-white/75 backdrop-blur-sm -rotate-6 border border-slate-200 shadow-sm kawaii-sticker" />

            <div className="font-mono text-xs font-black text-blue-900 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>INTERESTS &amp; EXPLORATION</span>
              <span className="kawaii-sticker">✦ ✦ ✦</span>
            </div>
            <ul className="text-xs text-slate-700 space-y-2 font-mono">
              {INTEREST_ITEMS.map((item) => (
                <li key={item.text} className="flex items-start space-x-2">
                  <span className={`${item.arrowColor} font-bold kawaii-sticker`}>→</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
