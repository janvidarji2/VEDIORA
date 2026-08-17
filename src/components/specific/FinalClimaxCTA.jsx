import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Pill, CheckCircle2 } from 'lucide-react';
import { DoctorPatel, DoctorShah, DoctorMehta, ElderlyRajesh, VEDIAssistant } from '../characters/Characters';

export const FinalClimaxCTA = ({ onRunCheck }) => {
  return (
    <section className="py-32 px-6 lg:px-16 max-w-[1540px] mx-auto select-none text-center relative overflow-hidden">
      {/* Background Radial Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-universe-violet/15 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Character Ensemble: Doctors + Patient + VEDI Core (Section 32) */}
        <div className="flex flex-wrap items-end justify-center gap-6 sm:gap-10 pb-4">
          <div className="transform -rotate-3 hover:rotate-0 transition-transform">
            <DoctorPatel size="sm" />
          </div>
          <div className="transform -translate-y-2 hover:scale-105 transition-transform">
            <ElderlyRajesh size="md" />
          </div>
          <div className="transform translate-y-1">
            <VEDIAssistant size="md" />
          </div>
          <div className="transform -translate-y-2 hover:scale-105 transition-transform">
            <DoctorShah size="sm" />
          </div>
          <div className="transform rotate-3 hover:rotate-0 transition-transform">
            <DoctorMehta size="sm" />
          </div>
        </div>

        {/* Large Editorial Headline */}
        <div className="space-y-4">
          <span className="font-mono text-xs font-extrabold text-universe-cyan uppercase tracking-widest block">
            [ CLINICAL HARMONIZATION ]
          </span>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white font-display tracking-tight leading-[0.92]">
            ONE UNIFIED <br />
            <span className="bg-gradient-to-r from-universe-cyan via-universe-lavender to-universe-violet bg-clip-text text-transparent">
              MEDICATION PICTURE.
            </span>
          </h2>
          <p className="text-base text-universe-muted font-medium max-w-lg mx-auto leading-relaxed">
            Eliminate cross-specialty blindspots. Verify multi-drug compatibility in seconds.
          </p>
        </div>

        {/* Action Button & Floating Badges */}
        <div className="flex flex-col items-center justify-center gap-6 pt-2">
          <button
            onClick={onRunCheck}
            className="px-12 py-5 rounded-full bg-gradient-to-r from-universe-violet via-universe-electric to-universe-cyan hover:scale-105 text-white font-display font-extrabold text-base shadow-glow-violet transition-all flex items-center gap-3 group"
          >
            <span>Run Safety Check Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Clinical Assurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-universe-muted">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-universe-mint" />
              <span>Multi-Specialty Reconciled</span>
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-universe-cyan" />
              <span>CYP450 Pathway Verified</span>
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-universe-lavender" />
              <span>Zero Prescription Blindspots</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
