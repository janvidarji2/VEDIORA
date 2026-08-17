import React, { useState, useEffect, useRef } from 'react';
import {
  DoctorPatel,
  DoctorShah,
  DoctorMehta,
  ElderlyRajesh,
  PrescriptionSheet,
  MedicinePill
} from '../characters/Characters';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroCharacterCanvas = ({ onCheckMedicines, onExploreStory }) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x: x * 12, y: y * 12 });
    };

    const el = canvasRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={canvasRef}
      className="relative min-h-[95vh] pt-12 pb-24 px-6 lg:px-16 max-w-[1520px] mx-auto select-none flex flex-col justify-between"
    >
      {/* Top Left Editorial Headline & Open Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Editorial Text Block (4 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left z-20 pt-4">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-extrabold text-vediora-lavender uppercase tracking-widest">
            <span>VEDIORA</span>
            <span>/</span>
            <span>MEDICATION SAFETY</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold text-vediora-violet font-display tracking-tight leading-[0.92]">
            WHEN <br />
            DOCTORS <br />
            DON'T SEE <br />
            THE WHOLE <br />
            PICTURE.
          </h1>

          <p className="text-base text-vediora-muted font-medium max-w-xs leading-relaxed">
            VEDIORA connects the medicines.
          </p>

          {/* Clean Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <button
              onClick={onCheckMedicines}
              className="px-8 py-4 rounded-full bg-vediora-violet hover:bg-vediora-deepViolet text-white font-display font-extrabold text-sm shadow-character hover:scale-105 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Check Medicines</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreStory}
              className="px-6 py-4 rounded-full bg-white hover:bg-vediora-canvasMuted border border-vediora-border text-vediora-violet font-display font-extrabold text-sm transition-all"
            >
              See the Story ↓
            </button>
          </div>
        </div>

        {/* Character Stage: 3 Doctors & Central Patient (7 cols) */}
        <div className="lg:col-span-7 relative h-[560px] sm:h-[620px] flex items-center justify-center">
          {/* SVG Animated Curved Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Dr. Patel (Top Left) -> Patient (Bottom Center) */}
            <path
              d="M 18% 30% Q 25% 65% 50% 75%"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="2"
              className="curved-line-violet"
            />
            {/* Dr. Shah (Top Center) -> Patient */}
            <path
              d="M 50% 28% L 50% 70%"
              fill="none"
              stroke="#EF4444"
              strokeWidth="2"
              className="curved-line-coral"
            />
            {/* Dr. Mehta (Top Right) -> Patient */}
            <path
              d="M 82% 30% Q 75% 65% 50% 75%"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
              className="curved-line-mint"
            />
          </svg>

          {/* Top Doctors Row (Standing directly on canvas, NOT in boxes!) */}
          <div className="absolute top-4 inset-x-0 flex items-center justify-between px-4 sm:px-8 z-20">
            {/* Doctor 1: Dr. Patel (Diabetes) */}
            <div
              onMouseEnter={() => setActiveTooltip("DIABETES SPECIALIST · METFORMIN")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="flex flex-col items-center cursor-pointer transform transition-transform"
              style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)` }}
            >
              <DoctorPatel size="lg" />
              <div className="mt-1 transform -rotate-3 hover:rotate-0 transition-transform">
                <PrescriptionSheet id="RX-DIA" doctor="Dr. Patel" meds={["Metformin 500mg"]} size="sm" />
              </div>
            </div>

            {/* Doctor 2: Dr. Shah (Cardiology) */}
            <div
              onMouseEnter={() => setActiveTooltip("CARDIOLOGIST · WARFARIN & ASPIRIN")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="flex flex-col items-center cursor-pointer transform transition-transform"
              style={{ transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.2}px)` }}
            >
              <DoctorShah size="lg" />
              <div className="mt-1 transform rotate-2 hover:rotate-0 transition-transform">
                <PrescriptionSheet id="RX-CRD" doctor="Dr. Shah" meds={["Warfarin 5mg", "Aspirin 75mg"]} size="sm" />
              </div>
            </div>

            {/* Doctor 3: Dr. Mehta (General Physician) */}
            <div
              onMouseEnter={() => setActiveTooltip("GENERAL PHYSICIAN · CELECOXIB")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="flex flex-col items-center cursor-pointer transform transition-transform"
              style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * 0.4}px)` }}
            >
              <DoctorMehta size="lg" />
              <div className="mt-1 transform rotate-4 hover:rotate-0 transition-transform">
                <PrescriptionSheet id="RX-GP" doctor="Dr. Mehta" meds={["Celecoxib 200mg"]} size="sm" />
              </div>
            </div>
          </div>

          {/* Central Elderly Patient Hero (Bottom Center) */}
          <div
            onMouseEnter={() => setActiveTooltip("COMPLETE MEDICATION PROFILE")}
            onMouseLeave={() => setActiveTooltip(null)}
            className="absolute bottom-2 z-30 cursor-pointer flex flex-col items-center"
            style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
          >
            <ElderlyRajesh size="lg" />
          </div>

          {/* Micro-Tooltip Float */}
          {activeTooltip && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[11px] font-extrabold text-vediora-violet bg-white border border-vediora-violet/20 px-3.5 py-1 rounded-full shadow-md z-40 animate-pop-in">
              {activeTooltip}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
