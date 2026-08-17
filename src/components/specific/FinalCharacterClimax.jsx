import React from 'react';
import {
  ElderlyRajesh,
  DoctorPatel,
  DoctorShah,
  DoctorMehta,
  VEDIAssistant,
  MedicinePill
} from '../characters/Characters';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const FinalCharacterClimax = ({ onRunSafetyCheck }) => {
  return (
    <section className="py-32 px-6 lg:px-16 max-w-[1520px] mx-auto select-none text-center relative overflow-hidden">
      {/* Editorial Headline */}
      <div className="max-w-3xl mx-auto space-y-4 mb-16">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-vediora-violet font-display tracking-tight leading-[0.92]">
          SEE THE <br />
          WHOLE PICTURE.
        </h2>
        <p className="text-base text-vediora-muted font-medium">
          Bring every prescription together.
        </p>
      </div>

      {/* Connected Climax Character Tableau (Section 23) */}
      <div className="relative max-w-4xl mx-auto min-h-[460px] flex items-center justify-center mb-12">
        {/* SVG Surrounding Connection Filaments */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <path d="M 20% 35% Q 35% 65% 50% 65%" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M 80% 35% Q 65% 65% 50% 65%" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M 50% 15% L 50% 50%" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="6 6" />
        </svg>

        {/* Central Patient with Connected Medicines */}
        <div className="relative z-20 flex flex-col items-center">
          <ElderlyRajesh size="lg" />
        </div>

        {/* Doctor Left */}
        <div className="absolute left-8 top-12 z-30 animate-float-gentle">
          <DoctorPatel size="sm" />
        </div>

        {/* VEDI Mascot Center Top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
          <VEDIAssistant size="sm" isChecking={true} />
        </div>

        {/* Doctor Right */}
        <div className="absolute right-8 top-12 z-30 animate-float-gentle" style={{ animationDelay: '1.5s' }}>
          <DoctorShah size="sm" />
        </div>

        {/* Floating Pills */}
        <div className="absolute bottom-6 left-16 z-30">
          <MedicinePill name="Warfarin" dose="5 mg" color="coral" />
        </div>
        <div className="absolute bottom-8 right-16 z-30">
          <MedicinePill name="Metformin" dose="500 mg" color="violet" />
        </div>
      </div>

      {/* Action CTA Button */}
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          onClick={onRunSafetyCheck}
          className="px-10 py-5 rounded-full bg-vediora-violet hover:bg-vediora-deepViolet text-white font-display font-extrabold text-base shadow-character hover:scale-105 transition-all flex items-center gap-3 group"
        >
          <span>Run Safety Check</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <span className="font-mono text-xs text-vediora-muted">
          Clinical decision support · Free to test
        </span>
      </div>
    </section>
  );
};
