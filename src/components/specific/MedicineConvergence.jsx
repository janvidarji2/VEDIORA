import React, { useState } from 'react';
import { ElderlyRajesh } from '../characters/Characters';
import { Capsule3D, Tablet3D } from '../common/MedicineObjects3D';
import { ArrowRight, Sparkles, ShieldCheck, Zap, Layers } from 'lucide-react';

export const MedicineConvergence = ({ onProceedToAI }) => {
  const [isMerged, setIsMerged] = useState(true);

  return (
    <section id="section-convergence" className="py-28 px-6 lg:px-16 max-w-[1540px] mx-auto text-center select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-16 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-mint font-extrabold tracking-widest block">[ 02 / CONVERGENCE ]</span>
          <span className="text-[11px]">DISPARATE MOLECULES UNIFIED</span>
        </div>
        <span className="text-universe-cyan font-bold flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-universe-mint animate-pulse" />
          MULTIPLE PRESCRIBERS → ONE PROFILE
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="font-mono text-xs font-extrabold text-universe-mint uppercase tracking-widest block">
          THE HARMONIZATION MOMENT
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[0.92]">
          Medicines Converge. <br />
          <span className="bg-gradient-to-r from-universe-mint via-universe-aqua to-universe-cyan bg-clip-text text-transparent">
            One Complete Profile.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-universe-muted font-medium max-w-xl mx-auto leading-relaxed">
          Watch disparate medication streams merge seamlessly around Rajesh Kumar before passing to the AI core.
        </p>
      </div>

      {/* Visual Hub Card with 3 Metrics (Section 07 Requirement) */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[36px] universe-panel shadow-rich-card space-y-10 relative overflow-hidden">
        {/* Patient with Orbiting 3D Medicines */}
        <div className="relative py-8 flex flex-col items-center justify-center">
          {/* Animated SVG Convergence Beams */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="15%" y1="20%" x2="50%" y2="50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 4" className="moving-beam-violet" />
            <line x1="85%" y1="20%" x2="50%" y2="50%" stroke="#F59E0B" strokeWidth="2" strokeDasharray="6 4" className="moving-beam-amber" />
            <line x1="15%" y1="80%" x2="50%" y2="50%" stroke="#EF4444" strokeWidth="2" strokeDasharray="6 4" className="moving-beam-coral" />
            <line x1="85%" y1="80%" x2="50%" y2="50%" stroke="#06B6D4" strokeWidth="2" strokeDasharray="6 4" className="moving-beam-cyan" />
          </svg>

          {/* 4 Converging Medicines (Section 07 Requirement: Metformin, Glimepiride, Aspirin, Atorvastatin) */}
          <div className="absolute top-0 left-6 sm:left-16 animate-float-slow">
            <Capsule3D name="Metformin" dose="1000mg" freq="Twice daily" doctor="Dr. Patel" topColor="#8B5CF6" />
          </div>
          <div className="absolute top-0 right-6 sm:right-16 animate-float-slow" style={{ animationDelay: '0.8s' }}>
            <Capsule3D name="Glimepiride" dose="2mg" freq="Once daily" doctor="Dr. Patel" topColor="#F59E0B" />
          </div>
          <div className="absolute bottom-4 left-6 sm:left-16 animate-float-slow" style={{ animationDelay: '1.6s' }}>
            <Tablet3D name="Aspirin" dose="75mg" freq="Once daily" doctor="Dr. Shah" color="#FFFFFF" scoreColor="#CBD5E1" />
          </div>
          <div className="absolute bottom-4 right-6 sm:right-16 animate-float-slow" style={{ animationDelay: '2.4s' }}>
            <Capsule3D name="Atorvastatin" dose="20mg" freq="At bedtime" doctor="Dr. Shah" topColor="#06B6D4" />
          </div>

          <div className="relative z-10">
            <ElderlyRajesh size="lg" />
          </div>

          {/* Unified Profile Badge (Section 07) */}
          <div className="mt-8 flex items-center gap-2 px-5 py-2.5 rounded-full bg-universe-surface border border-universe-mint/40 shadow-glow-mint text-universe-mint font-display font-extrabold text-sm z-10">
            <ShieldCheck className="w-5 h-5 text-universe-mint" />
            <span>COMPLETE MEDICATION PROFILE</span>
          </div>
        </div>

        {/* 3 Metrics: 4 medicines, 3 prescribers, 2 conditions (Section 07 Requirement) */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-universe-border font-mono text-center relative z-10">
          <div className="p-4 sm:p-6 rounded-2xl bg-universe-surface/80 border border-universe-border">
            <span className="font-display text-3xl sm:text-4xl font-extrabold text-white block">4</span>
            <span className="text-xs font-bold text-universe-cyan uppercase">Medicines</span>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-universe-surface/80 border border-universe-border">
            <span className="font-display text-3xl sm:text-4xl font-extrabold text-universe-lavender block">3</span>
            <span className="text-xs font-bold text-universe-lavender uppercase">Prescribers</span>
          </div>

          <div className="p-4 sm:p-6 rounded-2xl bg-universe-surface/80 border border-universe-border">
            <span className="font-display text-3xl sm:text-4xl font-extrabold text-universe-mint block">2</span>
            <span className="text-xs font-bold text-universe-mint uppercase">Conditions</span>
          </div>
        </div>

        {/* Action Button: Stream to AI Core */}
        <div className="pt-2 relative z-10">
          <button
            onClick={onProceedToAI}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-universe-violet via-universe-electric to-universe-cyan hover:scale-105 text-white font-display font-extrabold text-xs shadow-glow-violet transition-all inline-flex items-center gap-2"
          >
            <span>Pass Profile into VEDIORA AI Engine →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
