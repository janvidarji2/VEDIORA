import React, { useState, useEffect, useRef } from 'react';
import {
  DoctorSticker,
  PatientSticker,
  PrescriptionSticker,
  PillSticker,
  AIBotSticker,
  SafetyShieldSticker
} from '../common/Stickers';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export const HeroNetwork = ({ onCheckMedicines, onSeeHowItWorks }) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x: x * 15, y: y * 15 });
    };

    const el = containerRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 max-w-7xl mx-auto px-6 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hero Column: Minimal Text & Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          {/* Small Sticker Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 border-2 border-purple-200 text-purple-800 text-xs font-extrabold shadow-sm">
            <span className="text-sm">🛡️</span>
            <span>AI MEDICATION SAFETY</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 font-display leading-[1.08]">
            Your Medicines. <br />
            <span className="text-gradient-purple">
              One Safety Check.
            </span>
          </h1>

          {/* Short One-Sentence Tagline (Under 10 words) */}
          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
            Bring prescriptions together. Let VEDIORA check the risks.
          </p>

          {/* Primary & Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={onCheckMedicines}
              className="px-8 py-4 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-base shadow-sticker hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Check Medicines</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onSeeHowItWorks}
              className="px-6 py-4 rounded-2xl bg-white hover:bg-purple-50 border-2 border-purple-200 text-purple-900 font-extrabold text-base shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>See How It Works</span>
              <ChevronDown className="w-4 h-4 text-purple-600" />
            </button>
          </div>

          {/* 3 Tiny Visual Micro-Badges */}
          <div className="flex items-center gap-4 pt-2 text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> 100% Free Demo
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-500" /> Instant OCR
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-pink-500" /> Safe & Clear
            </span>
          </div>
        </div>

        {/* Right Column: Visual Interactive Animation Stream (7 cols) */}
        <div
          ref={containerRef}
          className="lg:col-span-7 relative h-[480px] sm:h-[540px] rounded-3xl bg-gradient-to-b from-purple-50/80 via-white to-pink-50/50 border-2 border-purple-200 shadow-sticker p-6 overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle warm dot pattern */}
          <div className="absolute inset-0 bg-warm-dots opacity-60 pointer-events-none" />

          {/* SVG Animated Flow Tracks */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Cardio Doctor -> Rx -> Patient */}
            <path
              d="M 22% 20% Q 30% 34% 50% 48%"
              fill="none"
              stroke="#D8B4FE"
              strokeWidth="3"
              strokeDasharray="6 6"
              className="animate-pulse"
            />
            {/* Diabetes Doctor -> Rx -> Patient */}
            <path
              d="M 78% 20% Q 70% 34% 50% 48%"
              fill="none"
              stroke="#D8B4FE"
              strokeWidth="3"
              strokeDasharray="6 6"
              className="animate-pulse"
            />
            {/* Patient -> AI Bot */}
            <path
              d="M 50% 56% L 50% 74%"
              fill="none"
              stroke="#10B981"
              strokeWidth="3.5"
              strokeDasharray="8 6"
            />
          </svg>

          {/* Top Doctors Row */}
          <div className="flex items-center justify-between px-4 sm:px-8 relative z-10">
            {/* Left Doctor: Heart Specialist */}
            <div
              onMouseEnter={() => setActiveTooltip('Heart Specialist')}
              onMouseLeave={() => setActiveTooltip(null)}
              className="flex flex-col items-center space-y-1 transform transition-transform"
              style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
            >
              <DoctorSticker specialty="Heart" size="lg" />
              <span className="text-xs font-bold text-purple-900 bg-white/90 px-2 py-0.5 rounded-full border border-purple-200 shadow-sm">
                Heart Doctor
              </span>
              {/* Prescribed Pills */}
              <div className="flex items-center -space-x-2 pt-1 animate-bounce-gentle">
                <PillSticker color="coral" size="sm" />
                <PillSticker color="peach" size="sm" rotate="45" />
              </div>
            </div>

            {/* Right Doctor: Diabetes Specialist */}
            <div
              onMouseEnter={() => setActiveTooltip('Diabetes Specialist')}
              onMouseLeave={() => setActiveTooltip(null)}
              className="flex flex-col items-center space-y-1 transform transition-transform"
              style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)` }}
            >
              <DoctorSticker specialty="Diabetes" size="lg" />
              <span className="text-xs font-bold text-purple-900 bg-white/90 px-2 py-0.5 rounded-full border border-purple-200 shadow-sm">
                Diabetes Doctor
              </span>
              {/* Prescribed Pills */}
              <div className="flex items-center -space-x-2 pt-1 animate-bounce-gentle">
                <PillSticker color="purple" size="sm" />
                <PillSticker color="yellow" size="sm" rotate="-30" />
              </div>
            </div>
          </div>

          {/* Center Patient Hub */}
          <div
            onMouseEnter={() => setActiveTooltip('One Patient Profile')}
            onMouseLeave={() => setActiveTooltip(null)}
            className="flex flex-col items-center justify-center relative z-20"
            style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
          >
            <div className="relative group cursor-pointer">
              <PatientSticker size="xl" />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-purple-900 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
                1 Complete Profile
              </div>
            </div>
          </div>

          {/* Bottom AI Bot & Safety Shield */}
          <div className="flex items-center justify-center gap-6 px-4 relative z-10 pb-2">
            {/* AI Bot */}
            <div
              onMouseEnter={() => setActiveTooltip('AI Safety Check')}
              onMouseLeave={() => setActiveTooltip(null)}
              className="flex items-center gap-2 p-2.5 rounded-2xl bg-white border-2 border-purple-200 shadow-sticker cursor-pointer transform hover:scale-105 transition-transform"
            >
              <AIBotSticker size="md" />
              <div className="text-left pr-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-600 block">
                  VEDIORA
                </span>
                <span className="text-xs font-extrabold text-slate-900">AI Safety Core</span>
              </div>
            </div>

            {/* Safety Shield Result */}
            <div
              onMouseEnter={() => setActiveTooltip('Safety Verified')}
              onMouseLeave={() => setActiveTooltip(null)}
              className="flex items-center gap-2 p-2.5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 shadow-sticker-mint cursor-pointer transform hover:scale-105 transition-transform"
            >
              <SafetyShieldSticker size="md" />
              <div className="text-left pr-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 block">
                  STATUS
                </span>
                <span className="text-xs font-extrabold text-emerald-900">Safety Checked</span>
              </div>
            </div>
          </div>

          {/* Micro-Tooltip Float */}
          {activeTooltip && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-extrabold shadow-lg animate-pop-in z-30">
              {activeTooltip}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
