import React, { useState } from 'react';
import {
  DoctorPatel,
  DoctorShah,
  ElderlyRajesh,
  PrescriptionSheet
} from '../characters/Characters';
import { Capsule3D, Tablet3D } from '../common/MedicineObjects3D';
import { ArrowRight, AlertTriangle, Sparkles, HelpCircle, Network } from 'lucide-react';

export const StoryProblem = ({ onBringTogether }) => {
  const [isScattered, setIsScattered] = useState(true);

  return (
    <section id="section-problem" className="py-28 px-6 lg:px-16 max-w-[1540px] mx-auto text-center select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-16 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-coral font-extrabold tracking-widest block">[ 00 / THE BLINDSPOT ]</span>
          <span className="text-[11px]">FRAGMENTED CLINICAL VISIBILITY</span>
        </div>
        <span className="text-universe-amber font-bold flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-universe-amber animate-pulse" />
          SILOED PRESCRIBING HAZARD
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="font-mono text-xs font-extrabold text-universe-coral uppercase tracking-widest block">
          THE CLINICAL GAP
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[0.92]">
          Different Doctors. <br />
          <span className="bg-gradient-to-r from-universe-coral via-universe-amber to-universe-lavender bg-clip-text text-transparent">
            Same Patient.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-universe-muted font-medium max-w-xl mx-auto leading-relaxed">
          Doctor A prescribes for the heart. Doctor B treats diabetes. Neither clinic shares an active prescription ledger.
        </p>
      </div>

      {/* Visual Convergence Stage */}
      <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-[36px] universe-panel shadow-rich-card space-y-12 relative overflow-hidden">
        {/* Subtle Background Red Glow */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-universe-coral/10 blur-3xl pointer-events-none" />

        {/* 2 Disconnected Doctor Streams (Section 05 Requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          {/* Stream 1: Doctor A (Cardiologist) */}
          <div className="p-6 rounded-3xl bg-universe-surface/80 border border-universe-border hover:border-universe-coral/50 transition-all flex items-center justify-between gap-4">
            <DoctorShah size="sm" />
            <div className="space-y-1 text-left font-mono text-xs">
              <span className="text-universe-coral font-bold block">1. CARDIOLOGY</span>
              <span className="text-white font-extrabold">Warfarin + Aspirin</span>
              <span className="text-[10px] text-universe-muted block">Rx #CRD-8821</span>
            </div>
            <div className="flex -space-x-2">
              <Tablet3D name="Warfarin" dose="5mg" color="#EF4444" scoreColor="#FFFFFF" size="sm" />
              <Tablet3D name="Aspirin" dose="75mg" color="#FFFFFF" scoreColor="#CBD5E1" size="sm" />
            </div>
          </div>

          {/* Stream 2: Doctor B (Diabetologist) */}
          <div className="p-6 rounded-3xl bg-universe-surface/80 border border-universe-border hover:border-universe-violet/50 transition-all flex items-center justify-between gap-4">
            <DoctorPatel size="sm" />
            <div className="space-y-1 text-left font-mono text-xs">
              <span className="text-universe-violet font-bold block">2. DIABETOLOGY</span>
              <span className="text-white font-extrabold">Metformin + Glimepiride</span>
              <span className="text-[10px] text-universe-muted block">Rx #DIA-4019</span>
            </div>
            <div className="flex -space-x-2">
              <Capsule3D name="Metformin" dose="1000mg" topColor="#8B5CF6" size="sm" />
              <Capsule3D name="Glimepiride" dose="2mg" topColor="#F59E0B" size="sm" />
            </div>
          </div>
        </div>

        {/* Center Patient with Scattered Stream Lines (Section 05) */}
        <div className="relative py-6 flex flex-col items-center justify-center relative z-10">
          {/* Animated SVG Beams converging on Patient */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1="25%" y1="10%" x2="50%" y2="50%" stroke="#EF4444" strokeWidth="2" strokeDasharray="6 4" className="moving-beam-coral" />
            <line x1="75%" y1="10%" x2="50%" y2="50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 4" className="moving-beam-violet" />
          </svg>

          <div className="relative z-10">
            <ElderlyRajesh size="lg" />
          </div>

          {/* "But who sees the complete medication picture?" (Section 05 Requirement) */}
          <div className="mt-8 p-4 rounded-2xl bg-universe-void border border-universe-border max-w-md shadow-sm">
            <div className="flex items-center justify-center gap-2 text-universe-cyan font-display font-extrabold text-sm mb-1">
              <HelpCircle className="w-4 h-4 text-universe-cyan animate-pulse" />
              <span>"But who sees the complete medication picture?"</span>
            </div>
            <p className="text-xs text-universe-muted font-medium">
              Without VEDIORA, neither doctor knows what the other has prescribed.
            </p>
          </div>
        </div>

        {/* Action Button: Bring Them Together */}
        <div className="pt-2 relative z-10">
          <button
            onClick={() => {
              setIsScattered(!isScattered);
              if (onBringTogether) onBringTogether();
            }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-universe-violet to-universe-electric hover:from-universe-electric hover:to-universe-violet text-white font-display font-extrabold text-xs shadow-glow-violet hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>Unify Prescriptions into One Profile →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
