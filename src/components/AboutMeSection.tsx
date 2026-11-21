import React, { useState } from 'react';
import {
  EXPERIENCES,
  PORTRAIT_URL,
  PROFILE,
  PROFILE_TAGS,
  SOFT_SKILLS,
  TECH_TOOLS,
} from '../data/portfolioData';

export const AboutMeSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-8 pb-12" data-purpose="about-me-section" id="about">
      {/* Backing Board: Rounded Cardboard desk backing with wooden/stitched border */}
      <div
        className="relative bg-boardCard rounded-3xl p-4 sm:p-8 md:p-10 shadow-tactile border-4 border-[#A37850]"
        data-purpose="cardboard-backing"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Hanging Plastic ID Badge + Lined Note */}
          <div className="lg:col-span-4 flex flex-col items-center" data-purpose="id-badge-column">
            {/* Plastic Lanyard Strap Hook */}
            <div className="w-8 h-14 bg-gradient-to-b from-blue-700 to-blue-500 rounded-b shadow-md flex items-center justify-center -mt-6 sm:-mt-10 border-t-2 border-blue-400 kawaii-sticker">
              <div className="w-3 h-5 bg-slate-200 rounded border border-slate-400 shadow-inner" />
            </div>

            {/* Yellow Plastic Hanging ID Card Holder (-3.5deg rotation) */}
            <div className="w-full max-w-[280px] bg-badgeYellow p-3 rounded-2xl shadow-badge border-2 border-amber-300 transform -rotate-[3.5deg] hover:rotate-0 transition-transform duration-300 relative z-20">
              {/* ID Card Cutout Slot for Lanyard */}
              <div className="w-12 h-2.5 bg-amber-600/40 rounded-full mx-auto mb-3 shadow-inner" />

              {/* ID Card White Inner Paper */}
              <div className="bg-white rounded-xl p-3 shadow-inner text-center border border-slate-200">
                {/* Provided Portrait Photo with CSS fallback */}
                <div className="relative w-44 h-48 mx-auto rounded-lg overflow-hidden border-2 border-slate-300 shadow-md mb-3 bg-slate-100 group">
                  {!imgError ? (
                    <img
                      alt="Indah Permatasari Workspace Portrait"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      src={PORTRAIT_URL}
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 via-pink-50 to-amber-100 flex flex-col items-center justify-center p-4 text-slate-700">
                      <span className="text-4xl mb-2">👩‍💻</span>
                      <span className="font-mono text-xs font-bold text-blue-900">
                        {PROFILE.displayName}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">IT · PLN &apos;26</span>
                    </div>
                  )}
                  <div className="absolute bottom-1 right-1 bg-pink-500 text-white font-mono text-[9px] px-1.5 py-0.5 rounded font-bold kawaii-sticker">
                    VERIFIED
                  </div>
                </div>

                <h3 className="font-mono font-extrabold text-slate-800 text-base leading-tight">
                  {PROFILE.displayName}
                </h3>
                <p className="text-xs text-blue-600 font-semibold font-mono mt-0.5">
                  Information Technology &apos;26
                </p>
                <p className="text-[10px] text-slate-400 font-mono">{PROFILE.university}</p>

                <div className="mt-2.5 pt-2 border-t border-slate-100 flex justify-between text-[9px] font-mono text-slate-500 tabular-nums">
                  <span>STATUS: ACTIVE</span>
                  <span>ROLL: {PROFILE.rollNumber}</span>
                </div>
              </div>

              {/* Kawaii ID Badge Stickers */}
              <div className="select-none">
                <div className="absolute -top-3 -right-3 bg-white border-2 border-pink-300 rounded-full w-9 h-9 flex items-center justify-center shadow-md rotate-12 text-sm kawaii-sticker">
                  ☁️
                </div>
                <div className="absolute -bottom-2 -left-3 bg-pink-500 text-white border-2 border-white rounded-full px-2 py-0.5 text-[10px] font-mono font-black shadow-md -rotate-12 kawaii-sticker">
                  ♡ CUTE
                </div>
                <div className="absolute -right-6 bottom-8 bg-amber-100 border-2 border-white rounded-2xl px-2 py-1 shadow-lg rotate-12 flex flex-col items-center kawaii-sticker">
                  <span className="text-xl">🧸</span>
                  <span className="text-[7px] font-mono font-black text-amber-900">TEDDY ♡</span>
                </div>
                <div className="absolute -left-6 top-12 bg-pink-100 border-2 border-white rounded-xl px-1.5 py-1 shadow-md -rotate-12 flex items-center gap-1 kawaii-sticker">
                  <span className="text-base">🍓</span>
                  <span className="text-[8px] font-mono font-black text-pink-600">BERRY</span>
                </div>
              </div>
            </div>

            {/* Overlapping Torn Lined Paper Note under ID Card */}
            <div
              className="w-full max-w-[270px] bg-lined-paper p-4 pb-6 rounded-b shadow-paper torn-bottom-edge border border-slate-300 -mt-6 transform rotate-2 z-10"
              data-purpose="academic-credentials-note"
            >
              <div className="font-mono text-[11px] space-y-2.5 pt-6 text-slate-700 leading-snug">
                <div>
                  <strong className="text-blue-700 block">🏛️ University:</strong>
                  <span>{PROFILE.universityRange}</span>
                </div>
                <div>
                  <strong className="text-pink-700 block">🎓 Degree:</strong>
                  <span>{PROFILE.degree}</span>
                </div>
                <div>
                  <strong className="text-amber-800 block">🏫 High School:</strong>
                  <span>{PROFILE.highSchool}</span>
                </div>
                <div>
                  <strong className="text-slate-800 block">📍 Location:</strong>
                  <span>{PROFILE.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Large Graph Paper with ABOUT ME sticker title & 2 Sub-Columns */}
          <div
            className="lg:col-span-8 bg-notebook-graph rounded-2xl p-6 sm:p-8 md:p-10 shadow-tactile border border-white relative"
            data-purpose="about-details-sheet"
          >
            {/* Spiral Punch holes header on paper */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-200">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="w-3 h-3 rounded-full bg-slate-300" />
              </div>

              {/* ABOUT ME Die-Cut Sticker Title */}
              <div className="die-cut-sticker kawaii-sticker">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-black text-blue-600 tracking-tight sticker-stroke-thin">
                  ABOUT ME
                </h2>
              </div>

              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="w-3 h-3 rounded-full bg-slate-300" />
                <span className="w-3 h-3 rounded-full bg-slate-300" />
              </div>
            </div>

            {/* 2-Column Content Layout (Experiences + Skills) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6">
              {/* Sub-Col A: Leadership & Experiences */}
              <div className="space-y-4" data-purpose="leadership-timeline">
                <h4 className="font-mono font-extrabold text-blue-700 text-sm tracking-wider uppercase flex items-center gap-2 border-b-2 border-blue-200 pb-1">
                  <span>📌</span> Experience &amp; Leadership
                </h4>

                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.title}
                    className={`bg-white/85 p-3.5 rounded-lg border-l-4 ${exp.accentBorder} shadow-sm`}
                  >
                    <div
                      className={`flex items-center justify-between text-[11px] font-mono font-bold ${exp.yearColor}`}
                    >
                      <span className="tabular-nums">{exp.year}</span>
                      <span
                        className={`${exp.badgeClass} px-2 py-0.5 rounded whitespace-nowrap kawaii-sticker`}
                      >
                        {exp.badge}
                      </span>
                    </div>
                    <h5 className="font-bold text-slate-800 text-sm mt-1">{exp.title}</h5>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>

              {/* Sub-Col B: Summary, Skills & Tools */}
              <div className="space-y-4" data-purpose="skills-and-summary">
                <h4 className="font-mono font-extrabold text-blue-700 text-sm tracking-wider uppercase flex items-center gap-2 border-b-2 border-blue-200 pb-1">
                  <span>⚡</span> Summary &amp; Tech Stack
                </h4>

                {/* Summary Box */}
                <div className="bg-white/90 p-3.5 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed shadow-sm">
                  Undergraduate IT student at <strong>{PROFILE.university}</strong> combining
                  structured analytical thinking, algorithmic problem solving in Python, scientific
                  writing, and collaborative student organization governance.
                </div>

                {/* App Badges Grid */}
                <div>
                  <p className="text-[11px] font-mono font-bold text-slate-500 mb-2">
                    TECHNICAL TOOLS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {TECH_TOOLS.map((tool) => (
                      <div
                        key={tool.name}
                        className={`flex items-center space-x-1.5 ${tool.wrapper} text-white px-2.5 py-1 rounded shadow-sm text-xs font-mono font-bold whitespace-nowrap kawaii-sticker`}
                      >
                        <span
                          className={`w-5 h-5 ${tool.badge} flex items-center justify-center rounded text-[10px] font-extrabold`}
                        >
                          {tool.code}
                        </span>
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Soft Skills & Languages */}
                <div className="pt-1">
                  <p className="text-[11px] font-mono font-bold text-slate-500 mb-2">
                    SOFT SKILLS &amp; LANGUAGES
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {SOFT_SKILLS.map((skill) => (
                      <span
                        key={skill.label}
                        className={`${skill.style} border px-2.5 py-1 rounded-full whitespace-nowrap leading-none kawaii-sticker`}
                      >
                        {skill.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick LinkedIn Note */}
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 flex items-center justify-between gap-3 text-amber-900">
                  <div className="text-xs font-mono">
                    <p className="font-bold">Connect on LinkedIn</p>
                    <p className="text-[10px] text-amber-700">Open for campus collaborations</p>
                  </div>
                  <a
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-white text-xs font-mono font-bold rounded shadow transition-colors whitespace-nowrap shrink-0 kawaii-sticker"
                    href="#contact"
                  >
                    Say Hi ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Filter Tag Pills */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-2 justify-center sm:justify-start">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">Tags:</span>
              {PROFILE_TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className={`px-3 py-1 ${tag.style} text-xs font-mono rounded-full font-bold whitespace-nowrap kawaii-sticker`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 select-none">
              <div className="bg-sky-50 border-2 border-white rounded-2xl px-3 py-1.5 shadow-md -rotate-2 flex items-center gap-2 kawaii-sticker">
                <span className="text-base">☁️◡̈</span>
                <span className="text-[10px] font-mono font-black text-sky-700">
                  You got this! ✨
                </span>
              </div>
              <span className="bg-pink-50 border border-pink-200 px-2.5 py-1 rounded-full shadow-sm text-xs font-mono text-pink-500 kawaii-sticker">
                ✨ always curious &amp; creative ♡
              </span>
            </div>

            {/* Top-right decorative tape */}
            <div className="hidden sm:block absolute -top-3 right-12 bg-pink-200/85 border border-white/80 rounded px-3 py-0.5 text-[8px] font-mono font-bold text-pink-800 rotate-3 shadow-sm kawaii-sticker select-none">
              🌸 ✦ KAWAII IT DEV ✦ 🌸
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
