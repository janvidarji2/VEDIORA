import React, { useState } from 'react';
import {
  DoctorNodeObject,
  PatientProfileOrb,
  Capsule3D
} from '../common/MedicalObjects';
import { FlaskConical, BarChart3, FileText, History, Heart, ShieldCheck, MessageCircle, FileCheck2 } from 'lucide-react';

export const SpatialPersonaSwitch = () => {
  const [activePersona, setActivePersona] = useState('doctor'); // 'doctor' | 'patient'

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b border-intel-border pb-4 mb-16 font-mono text-xs text-intel-muted">
        <span className="text-intel-cyan font-bold tracking-widest">[ 07 / DUAL VIEW ]</span>
        <span>PERSONA-OPTIMIZED CLINICAL REPORTING</span>
      </div>

      {/* Grid Layout with Spatial Switch */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Spatial Switch Mechanism (4 cols) */}
        <div className="lg:col-span-4 space-y-8 text-left">
          <div className="space-y-2">
            <span className="font-mono text-xs font-extrabold text-intel-cyan tracking-widest uppercase block">
              ADAPTIVE INTERFACE
            </span>
            <h3 className="text-3xl sm:text-5xl font-extrabold text-intel-ivory font-display tracking-tight leading-tight">
              DESIGNED FOR BOTH.
            </h3>
          </div>

          <p className="text-sm text-intel-muted font-medium leading-relaxed">
            Toggle the spatial switch to observe how VEDIORA synthesizes complex pharmacology for physicians and accessible clarity for patients.
          </p>

          {/* Precision Spatial Vertical Switch */}
          <div className="p-3 rounded-2xl bg-intel-surface border border-intel-border flex flex-col gap-2 max-w-xs">
            <button
              onClick={() => setActivePersona('doctor')}
              className={`p-4 rounded-xl text-xs font-mono font-extrabold transition-all flex items-center justify-between ${
                activePersona === 'doctor'
                  ? 'bg-intel-electric text-white shadow-violet-glow'
                  : 'text-intel-muted hover:text-intel-ivory hover:bg-intel-elevated'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>👨‍⚕️</span>
                <span>PHYSICIAN VIEW</span>
              </div>
              <span className={`w-2.5 h-2.5 rounded-full ${activePersona === 'doctor' ? 'bg-white' : 'bg-intel-border'}`} />
            </button>

            <div className="h-[1px] bg-intel-border mx-2" />

            <button
              onClick={() => setActivePersona('patient')}
              className={`p-4 rounded-xl text-xs font-mono font-extrabold transition-all flex items-center justify-between ${
                activePersona === 'patient'
                  ? 'bg-intel-cyan text-intel-void shadow-cyan-glow'
                  : 'text-intel-muted hover:text-intel-ivory hover:bg-intel-elevated'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>👤</span>
                <span>PATIENT & FAMILY</span>
              </div>
              <span className={`w-2.5 h-2.5 rounded-full ${activePersona === 'patient' ? 'bg-intel-void' : 'bg-intel-border'}`} />
            </button>
          </div>
        </div>

        {/* Right Dynamic Report Dossier (8 cols) */}
        <div className="lg:col-span-8 rounded-3xl intel-panel border border-intel-border p-8 min-h-[440px] flex flex-col justify-between">
          {activePersona === 'doctor' ? (
            // Doctor Clinical Matrix
            <div className="space-y-6 animate-pop-in text-left">
              <div className="flex items-center justify-between border-b border-intel-border pb-4">
                <span className="font-mono text-xs text-intel-lavender font-bold uppercase">
                  CLINICAL PHARMACOPEIA MATRIX
                </span>
                <span className="font-mono text-[10px] text-intel-muted">
                  ICD-10 / RXNORM LEVEL 1A
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-intel-surface/90 border border-intel-border space-y-2">
                  <div className="flex items-center gap-2 text-intel-lavender text-xs font-mono font-bold">
                    <FlaskConical className="w-4 h-4 text-intel-electric" />
                    <span>CYP450 METABOLISM</span>
                  </div>
                  <p className="text-xs text-intel-muted">
                    CYP2C9 & CYP3A4 substrate clearance curves with calculated AUC shift factors.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-intel-surface/90 border border-intel-border space-y-2">
                  <div className="flex items-center gap-2 text-intel-lavender text-xs font-mono font-bold">
                    <BarChart3 className="w-4 h-4 text-intel-cyan" />
                    <span>SEVERITY INDEX</span>
                  </div>
                  <p className="text-xs text-intel-muted">
                    Rank-ordered pharmacokinetic collision coefficients based on clinical trial databases.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-intel-surface/90 border border-intel-border space-y-2">
                  <div className="flex items-center gap-2 text-intel-lavender text-xs font-mono font-bold">
                    <FileText className="w-4 h-4 text-intel-mint" />
                    <span>PUBMED CITATIONS</span>
                  </div>
                  <p className="text-xs text-intel-muted">
                    Direct DOIs and meta-analyses linked to every detected combination advisory.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-intel-surface/90 border border-intel-border space-y-2">
                  <div className="flex items-center gap-2 text-intel-lavender text-xs font-mono font-bold">
                    <History className="w-4 h-4 text-intel-amber" />
                    <span>LONGITUDINAL RX AUDIT</span>
                  </div>
                  <p className="text-xs text-intel-muted">
                    Full cross-doctor prescription provenance tracking with duplicate molecule discovery.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Patient Safe Guidance
            <div className="space-y-6 animate-pop-in text-left">
              <div className="flex items-center justify-between border-b border-intel-border pb-4">
                <span className="font-mono text-xs text-intel-aqua font-bold uppercase">
                  PATIENT SAFETY GUIDE
                </span>
                <span className="font-mono text-[10px] text-intel-muted">
                  PLAIN-LANGUAGE ADVISORY
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-intel-surface/90 border border-intel-border space-y-2">
                  <div className="flex items-center gap-2 text-intel-aqua text-xs font-display font-bold">
                    <MessageCircle className="w-4 h-4 text-intel-cyan" />
                    <span>CLEAR EXPLANATIONS</span>
                  </div>
                  <p className="text-xs text-intel-muted">
                    Zero medical jargon. Simple bullet points explaining what each medicine does.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-intel-surface/90 border border-intel-border space-y-2">
                  <div className="flex items-center gap-2 text-intel-aqua text-xs font-display font-bold">
                    <ShieldCheck className="w-4 h-4 text-intel-mint" />
                    <span>SAFETY ACTION STEPS</span>
                  </div>
                  <p className="text-xs text-intel-muted">
                    Reassuring advice on what symptoms to watch for and what to mention to your doctor.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-intel-surface/90 border border-intel-border space-y-2">
                  <div className="flex items-center gap-2 text-intel-aqua text-xs font-display font-bold">
                    <Heart className="w-4 h-4 text-intel-coral" />
                    <span>SCHEDULE SUMMARY</span>
                  </div>
                  <p className="text-xs text-intel-muted">
                    Visual morning, afternoon, and evening pill calendar with food timing instructions.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-intel-surface/90 border border-intel-border space-y-2">
                  <div className="flex items-center gap-2 text-intel-aqua text-xs font-display font-bold">
                    <FileCheck2 className="w-4 h-4 text-intel-lavender" />
                    <span>ONE-PAGE PRINTABLE CHECKLIST</span>
                  </div>
                  <p className="text-xs text-intel-muted">
                    A clean one-sheet handout you can easily bring to your next clinic appointment.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Meta */}
          <div className="pt-4 border-t border-intel-border flex items-center justify-between font-mono text-[10px] text-intel-muted">
            <span>FORMAT: DUAL REPORT GENERATION</span>
            <span className="text-intel-cyan">EXPORT READY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
