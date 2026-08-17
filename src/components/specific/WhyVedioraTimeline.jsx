import React, { useState } from 'react';
import {
  Stethoscope,
  FileText,
  UserCheck,
  Zap,
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const WhyVedioraTimeline = () => {
  const [activeStep, setActiveStep] = useState(3); // Default on Step 04 AI Safety Check

  const timelineSteps = [
    {
      num: '01',
      title: 'Multiple Specialists',
      desc: 'Cardiologist, Diabetologist, and GP prescribe independently without shared EHR cross-visibility.',
      icon: Stethoscope,
      accent: '#8B5CF6'
    },
    {
      num: '02',
      title: 'Multiple Prescriptions',
      desc: 'Prescriptions are scattered across clinics, paper scripts, and disparate pharmacies.',
      icon: FileText,
      accent: '#06B6D4'
    },
    {
      num: '03',
      title: 'One Medication Profile',
      desc: 'Optical OCR ingests every prescription, normalizing molecules into a unified patient timeline.',
      icon: UserCheck,
      accent: '#22D3EE'
    },
    {
      num: '04',
      title: 'AI Safety Check',
      desc: 'VEDIORA evaluates all $N(N-1)/2$ pairwise combinations against CYP450 enzyme pathways.',
      icon: Zap,
      accent: '#7C3AED'
    },
    {
      num: '05',
      title: 'Risk Explanation',
      desc: 'Discovered interactions are classified by severity with clinical PubMed evidence and human summaries.',
      icon: AlertTriangle,
      accent: '#F59E0B'
    },
    {
      num: '06',
      title: 'Safer Medication Review',
      desc: 'Doctors and patients collaborate with aligned clinical intelligence, preventing adverse drug events.',
      icon: ShieldCheck,
      accent: '#10B981'
    }
  ];

  return (
    <section id="section-how-it-works" className="py-28 px-6 lg:px-16 max-w-[1540px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-16 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-violet font-extrabold tracking-widest block">[ 06 / CLINICAL WORKFLOW ]</span>
          <span className="text-[11px]">THE 6-STAGE SAFETY CONTINUUM</span>
        </div>
        <span className="text-universe-cyan font-bold flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-universe-cyan animate-pulse" />
          HOVER ANY STAGE TO INSPECT
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="font-mono text-xs font-extrabold text-universe-cyan uppercase tracking-widest block">
          WHY VEDIORA?
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[0.92]">
          From Fragmented Prescriptions <br />
          <span className="bg-gradient-to-r from-universe-cyan via-universe-lavender to-universe-violet bg-clip-text text-transparent">
            To Clinical Certainty.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-universe-muted font-medium max-w-xl mx-auto leading-relaxed">
          How VEDIORA bridges the communication gap between independent healthcare specialists.
        </p>
      </div>

      {/* Horizontal Interactive Timeline (Section 15 Requirement) */}
      <div className="relative">
        {/* Continuous Horizontal Glowing Line */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-universe-card -translate-y-1/2 z-0">
          <div
            className="h-full bg-gradient-to-r from-universe-violet via-universe-cyan to-universe-mint transition-all duration-500 ease-out"
            style={{ width: `${((activeStep + 1) / timelineSteps.length) * 100}%` }}
          />
        </div>

        {/* 6 Stage Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
          {timelineSteps.map((st, idx) => {
            const Icon = st.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={st.num}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl universe-panel transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[300px] text-left relative overflow-hidden ${
                  isActive
                    ? 'scale-105 border-universe-cyan shadow-glow-cyan bg-universe-card/90 z-20'
                    : 'border-universe-border/60 hover:border-universe-border opacity-70 hover:opacity-100'
                }`}
              >
                {/* Subtle Glow Aura when Active */}
                {isActive && (
                  <div
                    className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-40 pointer-events-none"
                    style={{ backgroundColor: st.accent }}
                  />
                )}

                {/* Top Number & Step Icon */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="font-mono text-xs font-black text-universe-muted">
                    {st.num}
                  </span>
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all"
                    style={{
                      backgroundColor: isActive ? `${st.accent}25` : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${isActive ? st.accent : 'rgba(255,255,255,0.1)'}`
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: st.accent }} />
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2 relative z-10 my-auto py-3">
                  <h3 className="font-display font-extrabold text-base text-white leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-universe-muted font-medium leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {/* Bottom Status Dot */}
                <div className="pt-3 border-t border-universe-border/40 flex items-center justify-between font-mono text-[10px] text-universe-muted relative z-10">
                  <span style={{ color: isActive ? st.accent : undefined }}>
                    STAGE {st.num}
                  </span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: isActive ? st.accent : 'rgba(255,255,255,0.2)' }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
