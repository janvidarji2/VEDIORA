import React, { useState } from 'react';
import {
  DoctorPatel,
  DoctorShah,
  DoctorMehta,
  ElderlyRajesh,
  PrescriptionSheet
} from '../characters/Characters';
import { Capsule3D, Tablet3D } from '../common/MedicineObjects3D';
import { Sparkles, ArrowRight, Stethoscope, Activity, Network, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

export const MedicationEcosystemNetwork = ({ onSelectChain }) => {
  const [activeDoctor, setActiveDoctor] = useState('cardio'); // 'cardio' | 'diabetes' | 'gp'

  const doctorData = {
    cardio: {
      name: "Dr. Rahul Shah",
      role: "Cardiologist",
      specialty: "Heart & Vascular",
      rxNumber: "RX-CRD-8821",
      medicines: [
        { name: "Aspirin", dose: "75 mg", freq: "Once daily (Morning)" },
        { name: "Atorvastatin", dose: "20 mg", freq: "Once daily (Bedtime)" },
        { name: "Warfarin", dose: "5 mg", freq: "Once daily (Evening)" }
      ]
    },
    diabetes: {
      name: "Dr. Sneha Patel",
      role: "Diabetes Specialist",
      specialty: "Endocrinology",
      rxNumber: "RX-DIA-4019",
      medicines: [
        { name: "Metformin", dose: "1000 mg", freq: "Twice daily with meals" },
        { name: "Glimepiride", dose: "2 mg", freq: "Once daily with breakfast" }
      ]
    },
    gp: {
      name: "Dr. Vikram Mehta",
      role: "General Physician",
      specialty: "Internal Medicine",
      rxNumber: "RX-GP-1092",
      medicines: [
        { name: "Celecoxib", dose: "200 mg", freq: "Once daily as needed" },
        { name: "Calcium + D3", dose: "500 mg", freq: "Once daily with lunch" }
      ]
    }
  };

  return (
    <section id="section-network" className="py-28 px-6 lg:px-16 max-w-[1540px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-16 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-violet font-extrabold tracking-widest block">[ 01 / SPECIALIST NETWORK ]</span>
          <span className="text-[11px]">CROSS-SPECIALTY PROVENANCE</span>
        </div>
        <span className="text-universe-cyan font-bold flex items-center gap-2">
          <Network className="w-4 h-4 text-universe-cyan animate-pulse" />
          HOVER ANY SPECIALIST TO REVEAL THEIR PRESCRIPTION & MEDICINES
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Narrative & 3 Floating Doctor Cards (5 cols) (Section 6 Requirement) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div>
            <span className="font-mono text-xs font-extrabold text-universe-cyan uppercase tracking-widest block">
              SPECIALIST CONVERGENCE
            </span>

            {/* Section 6 Headline */}
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[0.92] mt-2">
              Different Specialists. <br />
              <span className="bg-gradient-to-r from-universe-cyan via-universe-lavender to-universe-violet bg-clip-text text-transparent">
                Same Patient.
              </span>
            </h2>
          </div>

          <p className="text-sm text-universe-muted font-medium leading-relaxed">
            When you move your cursor across each doctor, their card expands, their prescription slides out, and their active medicines illuminate the connection to Rajesh Kumar.
          </p>

          {/* 3 Doctor Cards: Diabetes Specialist, Cardiologist, General Physician (Section 6 Requirement) */}
          <div className="space-y-3 pt-2">
            {/* Card 1: Cardiologist */}
            <div
              onMouseEnter={() => { setActiveDoctor('cardio'); if (onSelectChain) onSelectChain('doctor'); }}
              onClick={() => setActiveDoctor('cardio')}
              className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                activeDoctor === 'cardio'
                  ? 'bg-universe-surface border-universe-coral shadow-glow-coral scale-105'
                  : 'bg-universe-surface/60 border-universe-border hover:border-universe-coral/50 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <DoctorShah size="sm" isHovered={activeDoctor === 'cardio'} />
                <div>
                  <h3 className="font-display font-extrabold text-base text-white">Cardiologist</h3>
                  <span className="font-mono text-xs text-universe-coral font-bold block">{doctorData.cardio.name}</span>
                  <span className="text-[11px] text-universe-muted">Aspirin, Atorvastatin, Warfarin</span>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 transition-transform ${activeDoctor === 'cardio' ? 'text-universe-coral translate-x-1' : 'text-universe-muted'}`} />
            </div>

            {/* Card 2: Diabetes Specialist */}
            <div
              onMouseEnter={() => { setActiveDoctor('diabetes'); if (onSelectChain) onSelectChain('doctor'); }}
              onClick={() => setActiveDoctor('diabetes')}
              className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                activeDoctor === 'diabetes'
                  ? 'bg-universe-surface border-universe-violet shadow-glow-violet scale-105'
                  : 'bg-universe-surface/60 border-universe-border hover:border-universe-violet/50 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <DoctorPatel size="sm" isHovered={activeDoctor === 'diabetes'} />
                <div>
                  <h3 className="font-display font-extrabold text-base text-white">Diabetes Specialist</h3>
                  <span className="font-mono text-xs text-universe-violet font-bold block">{doctorData.diabetes.name}</span>
                  <span className="text-[11px] text-universe-muted">Metformin, Glimepiride</span>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 transition-transform ${activeDoctor === 'diabetes' ? 'text-universe-violet translate-x-1' : 'text-universe-muted'}`} />
            </div>

            {/* Card 3: General Physician */}
            <div
              onMouseEnter={() => { setActiveDoctor('gp'); if (onSelectChain) onSelectChain('doctor'); }}
              onClick={() => setActiveDoctor('gp')}
              className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                activeDoctor === 'gp'
                  ? 'bg-universe-surface border-universe-mint shadow-glow-mint scale-105'
                  : 'bg-universe-surface/60 border-universe-border hover:border-universe-mint/50 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <DoctorMehta size="sm" isHovered={activeDoctor === 'gp'} />
                <div>
                  <h3 className="font-display font-extrabold text-base text-white">General Physician</h3>
                  <span className="font-mono text-xs text-universe-mint font-bold block">{doctorData.gp.name}</span>
                  <span className="text-[11px] text-universe-muted">Celecoxib, Calcium + D3</span>
                </div>
              </div>
              <ChevronRight className={`w-5 h-5 transition-transform ${activeDoctor === 'gp' ? 'text-universe-mint translate-x-1' : 'text-universe-muted'}`} />
            </div>
          </div>
        </div>

        {/* Right Dynamic Stage: Slide-Out Prescription & Illuminated Patient Stream (7 cols) (Section 6) */}
        <div className="lg:col-span-7 relative h-[560px] rounded-[36px] universe-panel p-8 flex items-center justify-between overflow-hidden shadow-glow-core">
          {/* Animated SVG Bright Flowing Lines to Patient */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <line
              x1="35%"
              y1="50%"
              x2="78%"
              y2="50%"
              stroke={activeDoctor === 'cardio' ? '#EF4444' : activeDoctor === 'diabetes' ? '#8B5CF6' : '#10B981'}
              strokeWidth="4"
              strokeDasharray="8 6"
              className={activeDoctor === 'cardio' ? 'moving-beam-coral' : activeDoctor === 'diabetes' ? 'moving-beam-violet' : 'moving-beam-mint'}
            />
          </svg>

          {/* Left/Center: Sliding Out Prescription Card & Medicines List (Section 6 Requirement) */}
          <div className="relative z-20 w-72 p-6 rounded-3xl bg-universe-surface/95 border border-universe-border shadow-rich-card space-y-4 animate-pop-in text-left">
            <div className="flex items-center justify-between border-b border-universe-border pb-3">
              <div>
                <span className="font-mono text-[10px] text-universe-cyan font-bold block uppercase">
                  {doctorData[activeDoctor].rxNumber}
                </span>
                <h4 className="font-display font-extrabold text-sm text-white">
                  {doctorData[activeDoctor].name}
                </h4>
              </div>
              <FileText className="w-5 h-5 text-universe-cyan" />
            </div>

            {/* Medicines appear one by one */}
            <div className="space-y-2 font-mono text-xs">
              <span className="text-[10px] text-universe-muted uppercase font-extrabold block">
                Prescribed Medicines:
              </span>
              {doctorData[activeDoctor].medicines.map((m, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-universe-void/80 border border-universe-border flex items-center justify-between animate-pop-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <span className="font-bold text-white">{m.name}</span>
                  <span className="text-universe-cyan font-bold">{m.dose}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-universe-border flex items-center justify-between text-[10px] font-mono text-universe-mint font-bold">
              <span>● ACTIVE RX INGESTED</span>
              <span>100% PARSED</span>
            </div>
          </div>

          {/* Right: Patient Hub (Rajesh Kumar) with Illuminated Connection (Section 6) */}
          <div className="relative z-20 flex flex-col items-center">
            <div className="relative">
              <ElderlyRajesh size="lg" />
              {/* Pulsing Aura */}
              <div className="absolute -inset-4 rounded-full border border-universe-cyan/40 animate-pulse pointer-events-none" />
            </div>
            <span className="font-display font-extrabold text-xs text-white mt-2 block">
              Rajesh Kumar (68M)
            </span>
            <span className="font-mono text-[10px] text-universe-mint font-bold">
              ✓ Stream Connected
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
