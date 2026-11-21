import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';

export const ContactFooterSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    } catch {
      // Fallback copy via temporary input
      const input = document.createElement('input');
      input.value = PROFILE.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2800);
    }
  };

  return (
    <footer className="relative pt-6 pb-6" data-purpose="contact-footer" id="contact">
      {/* Large Torn Paper Contact Sheet */}
      <div
        className="relative bg-notebook-graph rounded-2xl px-6 py-8 sm:px-10 sm:py-10 pb-10 shadow-tactile torn-bottom-edge border-2 border-white max-w-4xl mx-auto text-center"
        data-purpose="contact-card"
      >
        {/* Top Kawaii Stickers */}
        <div className="select-none">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-pink-400 text-sm animate-pulse kawaii-sticker">
            ✨ ✦ 💖 ✦ ✨
          </div>
          <div className="absolute top-4 left-4 bg-pink-100 border-2 border-pink-300 text-pink-700 font-mono font-black text-[10px] px-2.5 py-1 rounded-full -rotate-12 shadow-sm hidden md:block kawaii-sticker">
            LET&apos;S BE FRIENDS! ♡
          </div>
          <div className="absolute -top-5 right-6 bg-pink-50 border-2 border-white rounded-2xl px-2.5 py-1 shadow-lg rotate-6 hidden sm:flex items-center gap-1.5 kawaii-sticker">
            <span className="text-xl">💌🕊️</span>
            <span className="text-[9px] font-mono font-black text-pink-600">MAIL ME! ♡</span>
          </div>
        </div>

        {/* Die-Cut Sticker Title */}
        <div className="die-cut-sticker inline-block mb-3 mt-2 kawaii-sticker">
          <h2 className="text-3xl sm:text-5xl font-mono font-black text-blue-600 sticker-stroke-thin">
            LET&apos;S COLLABORATE ✦
          </h2>
        </div>

        <p className="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 mb-6 font-mono leading-relaxed">
          Available for undergraduate IT project collaborations, academic research initiatives,
          software logic workshops, and student tech councils.
        </p>

        {/* Tactile Interactive Contact Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5">
          <a
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap kawaii-sticker"
            href={`mailto:${PROFILE.email}`}
          >
            <span>✉️</span>
            <span>Send Email</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className={`px-5 py-3 rounded-xl border-2 font-mono font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap cursor-pointer kawaii-sticker ${
              copied
                ? 'bg-pink-100 border-pink-400 text-pink-800'
                : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300'
            }`}
            title="Copy email to clipboard"
          >
            <span>📋</span>
            <span>{copied ? 'Copied! ✨' : 'Copy Address'}</span>
          </button>

          <a
            className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-mono font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap kawaii-sticker"
            href={PROFILE.whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>💬</span>
            <span>WhatsApp: {PROFILE.phone}</span>
          </a>

          <a
            className="px-5 py-3 rounded-xl bg-[#0A66C2] hover:bg-blue-800 text-white font-mono font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95 whitespace-nowrap kawaii-sticker"
            href={PROFILE.linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>💼</span>
            <span>LinkedIn Profile</span>
          </a>
        </div>

        {/* Toast notification container for copy action */}
        <div
          className={`transition-opacity duration-300 inline-block bg-slate-900 text-white text-xs font-mono px-4 py-1.5 rounded-full shadow-lg mb-2 ${
            copied ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          role="status"
          aria-live="polite"
        >
          ✨ Copied: {PROFILE.email} to clipboard!
        </div>

        {/* Bottom Metadata Row + Side Cute Stickers positioned cleanly */}
        <div className="mt-4 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-slate-500 gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-50 border border-amber-200 rounded-xl px-2 py-0.5 text-[10px] font-bold text-amber-900 hidden sm:inline-flex items-center gap-1 kawaii-sticker">
              <span>🍩</span>
              <span>SWEET TALK</span>
            </span>
            <span>Based in {PROFILE.shortLocation} • ITPLN</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Portfolio Blueprint Version 3.4 // Year 2026</span>
            <span className="bg-amber-100 border border-amber-300 rounded-xl px-2 py-0.5 text-[10px] font-bold text-amber-900 hidden sm:inline-flex items-center gap-1 kawaii-sticker">
              <span>☕</span>
              <span>say hi! ◡̈</span>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Blueprint Desk Status Bar */}
      <div
        className="mt-8 bg-blue-950/70 border border-blue-400/30 rounded-xl p-3 sm:p-4 text-center font-mono text-xs text-blue-200 flex flex-wrap items-center justify-between gap-3"
        data-purpose="desk-status-bar"
      >
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="font-bold text-white">{PROFILE.displayName}</span>
          <span className="text-blue-400">|</span>
          <span>SMAS Wira Bhakti &apos;26 ➔ IT·PLN &apos;26</span>
        </div>
        <div className="text-[11px] text-blue-300">
          © 2026 {PROFILE.name} — Crafted on a Blue Cutting Mat.
        </div>
      </div>
    </footer>
  );
};
