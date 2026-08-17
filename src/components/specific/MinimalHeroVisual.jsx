import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export const MinimalHeroVisual = ({ onRunSafetyCheck, onExplore }) => {
  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-8 pb-20 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Top HUD Line */}
      <div className="flex items-center justify-between border-b border-minimal-border pb-4 font-mono text-xs text-minimal-muted">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-minimal-purple animate-ping" />
          <span className="text-minimal-violet font-extrabold tracking-widest uppercase">
            VEDIORA / AI MEDICATION SAFETY
          </span>
        </div>
        <span className="hidden sm:inline font-bold text-minimal-muted">
          INTELLIGENT CLINICAL DECISION SUPPORT
        </span>
      </div>

      {/* Hero Canvas Grid (Typography Left, Minimal Visual Stream Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-10">
        {/* Left Headline (6 cols) */}
        <div className="lg:col-span-6 space-y-6 text-left z-10">
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-minimal-violet font-display tracking-tight leading-[0.92]">
            SEE <br />
            THE WHOLE <br />
            MEDICATION <br />
            PICTURE.
          </h1>

          <p className="text-base sm:text-lg text-minimal-muted font-medium max-w-md leading-relaxed">
            Multiple prescriptions. One intelligent safety check.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onRunSafetyCheck}
              className="px-8 py-4 rounded-full bg-minimal-violet hover:bg-minimal-deepViolet text-white font-display font-extrabold text-sm shadow-minimal hover:scale-105 transition-all flex items-center justify-center gap-2.5 group"
            >
              <span>Run Safety Check</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExplore}
              className="px-6 py-4 rounded-full bg-white hover:bg-minimal-bgSurface border border-minimal-border text-minimal-violet font-display font-extrabold text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore</span>
              <Compass className="w-4 h-4 text-minimal-purple" />
            </button>
          </div>
        </div>

        {/* Right Minimal Connected Visual Stream (6 cols) (Section 05 Requirement) */}
        <div className="lg:col-span-6 relative h-[480px] flex items-center justify-center">
          {/* Thin Curved SVG Connection Stream */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {/* Doctor -> Rx -> Meds -> Patient -> AI -> Shield */}
            <path
              d="M 50% 10% L 50% 28% L 50% 48% L 50% 70% L 50% 88%"
              fill="none"
              stroke="#7C3AED"
              strokeWidth="1.5"
              className="curved-line-minimal opacity-60"
            />
          </svg>

          {/* Connected Minimal Vertical Pipeline */}
          <div className="relative z-10 flex flex-col items-center justify-between h-full py-4 space-y-3">
            {/* 1. Small Doctor Illustration */}
            <div
              onMouseEnter={() => setHoveredNode('doctor')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`p-3 rounded-2xl minimal-pill transition-all cursor-pointer flex items-center gap-2.5 ${
                hoveredNode === 'doctor' ? 'border-minimal-purple text-minimal-purple scale-105 shadow-md' : 'text-minimal-text'
              }`}
            >
              <span className="text-lg">👨‍⚕️</span>
              <div className="text-left pr-1">
                <span className="font-mono text-[9px] text-minimal-muted uppercase block">PRESCRIBER</span>
                <span className="font-display text-xs font-extrabold">3 Specialists</span>
              </div>
            </div>

            {/* 2. Small Prescription Paper */}
            <div
              onMouseEnter={() => setHoveredNode('rx')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`p-2.5 rounded-2xl minimal-pill transition-all cursor-pointer flex items-center gap-2 ${
                hoveredNode === 'rx' ? 'border-minimal-cyan text-minimal-cyan scale-105 shadow-md' : 'text-minimal-text'
              }`}
            >
              <span className="text-base">📄</span>
              <span className="font-mono text-[11px] font-extrabold text-minimal-text">Rx Documents</span>
            </div>

            {/* 3. Three Medicine Icons */}
            <div
              onMouseEnter={() => setHoveredNode('meds')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full minimal-pill transition-all cursor-pointer ${
                hoveredNode === 'meds' ? 'border-minimal-mint scale-105 shadow-md' : ''
              }`}
            >
              <span className="text-xs font-extrabold text-minimal-purple">💊 Metformin</span>
              <span className="text-xs font-extrabold text-minimal-coral">💊 Warfarin</span>
              <span className="text-xs font-extrabold text-minimal-mint">💊 Lisinopril</span>
            </div>

            {/* 4. Small Patient Illustration */}
            <div
              onMouseEnter={() => setHoveredNode('patient')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`p-3 rounded-2xl minimal-pill transition-all cursor-pointer flex items-center gap-2.5 ${
                hoveredNode === 'patient' ? 'border-minimal-purple text-minimal-purple scale-105 shadow-md' : 'text-minimal-text'
              }`}
            >
              <span className="text-lg">👤</span>
              <div className="text-left pr-1">
                <span className="font-mono text-[9px] text-minimal-muted uppercase block">ONE PATIENT</span>
                <span className="font-display text-xs font-extrabold">Complete Profile</span>
              </div>
            </div>

            {/* 5. VEDIORA AI Node */}
            <div
              onMouseEnter={() => setHoveredNode('ai')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`px-4 py-2 rounded-full minimal-pill transition-all cursor-pointer flex items-center gap-2 ${
                hoveredNode === 'ai' ? 'border-minimal-purple shadow-glow-ai scale-105 bg-minimal-violet text-white' : 'bg-white text-minimal-violet'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-minimal-cyan animate-ping" />
              <span className="font-mono text-xs font-extrabold">VEDIORA AI CORE</span>
            </div>

            {/* 6. Shield */}
            <div
              onMouseEnter={() => setHoveredNode('shield')}
              onMouseLeave={() => setHoveredNode(null)}
              className={`p-2 rounded-xl minimal-pill transition-all cursor-pointer flex items-center gap-2 ${
                hoveredNode === 'shield' ? 'border-minimal-mint text-minimal-mint scale-105' : 'text-minimal-mint'
              }`}
            >
              <ShieldCheck className="w-5 h-5 text-minimal-mint" />
              <span className="font-mono text-xs font-bold text-minimal-text">Safety Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
