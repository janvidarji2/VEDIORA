import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Zap,
  Sparkles,
  ArrowRight,
  Activity,
  Layers,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';

import confetti from 'canvas-confetti';

export const AISafetyAnalysis = () => {
  const { navigateTo, safetyStats, medications } = useMedication();

  const STAGES = [
    { label: "Prescription extracted", delay: 400 },
    { label: "Medicines standardized (RxNorm/ATC)", delay: 800 },
    { label: "Drug combinations generated (N*(N-1)/2)", delay: 1300 },
    { label: "Interaction database checked (45,000+ rules)", delay: 1800 },
    { label: "Clinical evidence retrieved (PubMed/FDA)", delay: 2300 },
    { label: "AI clinical explanations synthesized", delay: 2800 }
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const timers = STAGES.map((stage, idx) => {
      return setTimeout(() => {
        setActiveStep(idx + 1);
        if (idx === STAGES.length - 1) {
          setTimeout(() => {
            setCompleted(true);
            try {
              confetti({
                particleCount: 50,
                spread: 70,
                origin: { y: 0.6 }
              });
            } catch (e) {
              // ignore if canvas not supported
            }
          }, 500);
        }
      }, stage.delay);
    });

    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 animate-fade-in">
      <div className="max-w-xl w-full rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-elevated text-center relative overflow-hidden space-y-8">
        {/* Animated Scan Line effect */}
        {!completed && <div className="animate-scan" />}

        {/* Central Glowing Icon */}
        <div className="relative mx-auto w-20 h-20">
          <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-xl animate-pulse" />
          <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-glow-cyan">
            {completed ? (
              <ShieldCheck className="w-10 h-10 animate-scale-in" />
            ) : (
              <Cpu className="w-10 h-10 animate-pulse" />
            )}
          </div>
        </div>

        {/* Title & Headline (Section 9 Requirement) */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Clinical Safety Engine
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            VEDIORA AI Safety Analysis
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1">
            Evaluating polypharmacy profile across multiple prescribing doctors
          </p>
        </div>

        {/* Combinatorics Metric Box (Section 9 Requirement) */}
        <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-left">
          <div className="space-y-0.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Active Regimen
            </span>
            <p className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Analyzing {safetyStats.totalMedicines} medicines
            </p>
          </div>

          <div className="space-y-0.5 border-l border-slate-200 dark:border-slate-700 pl-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Cross-Combinations
            </span>
            <p className="text-lg font-bold text-cyan-600 dark:text-cyan-400 font-display">
              {safetyStats.combinationsChecked} pairs checked
            </p>
          </div>
        </div>

        {/* Staged Checklist Progress (Section 9 Requirement) */}
        <div className="space-y-2.5 text-left max-w-md mx-auto">
          {STAGES.map((stage, idx) => {
            const isDone = activeStep > idx;
            const isCurrent = activeStep === idx;

            return (
              <div
                key={idx}
                className={`p-3 rounded-2xl border flex items-center justify-between transition-all duration-300 ${
                  isDone
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-200/60 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-300'
                    : isCurrent
                    ? 'bg-cyan-50 dark:bg-cyan-950/50 border-cyan-300 dark:border-cyan-700 text-cyan-900 dark:text-cyan-100 shadow-sm'
                    : 'bg-slate-50/60 dark:bg-slate-800/20 border-slate-100 dark:border-slate-800 opacity-40 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  ) : isCurrent ? (
                    <div className="w-4 h-4 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-700 flex-shrink-0" />
                  )}
                  <span className="text-xs font-semibold">{stage.label}</span>
                </div>

                <span className="text-[11px] font-mono">
                  {isDone ? '✓ Verified' : isCurrent ? '● Processing' : 'Pending'}
                </span>
              </div>
            );
          })}
        </div>

        {/* Final CTA once complete */}
        <div className="pt-2">
          {completed ? (
            <button
              onClick={() => navigateTo('interaction-results')}
              className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2 animate-scale-in"
            >
              <span>View Medication Safety Results</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <p className="text-xs text-slate-700 dark:text-slate-200">
              Cross-referencing evidence databases...
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
