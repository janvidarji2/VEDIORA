import React, { useState, useEffect } from 'react';
import {
  ElderlyRajesh,
  VEDIAssistant,
  MedicinePill
} from '../characters/Characters';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export const VEDIAISafetyCheck = ({ onInspectRisk }) => {
  const [activePairIdx, setActivePairIdx] = useState(0);

  const pairs = [
    { a: "Warfarin 5mg", colorA: "coral", b: "Aspirin 75mg", colorB: "coral", status: "POTENTIAL BLEED RISK", flag: "coral" },
    { a: "Metformin 500mg", colorA: "violet", b: "Glimepiride 2mg", colorB: "amber", status: "HYPOGLYCEMIA MONITOR", flag: "amber" },
    { a: "Lisinopril 10mg", colorA: "mint", b: "Celecoxib 200mg", colorB: "coral", status: "EVALUATING BP EFFECT", flag: "violet" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePairIdx((prev) => (prev + 1) % pairs.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [pairs.length]);

  const pair = pairs[activePairIdx];

  return (
    <section className="py-28 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
        <span className="font-mono text-xs font-extrabold text-vediora-lavender uppercase tracking-widest block">
          [ AI COMPUTATION ]
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-vediora-violet font-display tracking-tight leading-[0.95]">
          AI SAFETY CHECK.
        </h2>
        <p className="text-sm text-vediora-muted font-medium">
          VEDI evaluates all 66 combinations across Rajesh's prescriptions.
        </p>
      </div>

      {/* Main Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left VEDI AI Mascot & Dynamic Evaluation (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="flex items-center gap-4">
            <VEDIAssistant size="lg" isChecking={true} />
            <div>
              <span className="font-mono text-xs font-extrabold text-vediora-lavender uppercase tracking-widest block">
                VEDI IS CHECKING...
              </span>
              <h3 className="text-2xl font-extrabold text-vediora-violet font-display">
                Combinatorial Collision
              </h3>
            </div>
          </div>

          {/* Active Testing Combination Strip */}
          <div className="p-4 rounded-2xl bg-white border border-vediora-border shadow-paper flex items-center justify-between">
            <span className="font-extrabold text-xs text-vediora-violet">{pair.a}</span>
            <span className="font-mono text-xs text-vediora-lavender font-bold">↕</span>
            <span className="font-extrabold text-xs text-vediora-violet">{pair.b}</span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-vediora-muted">STATUS:</span>
            <span className={`font-extrabold ${pair.flag === 'coral' ? 'text-vediora-coral' : 'text-vediora-amber'}`}>
              {pair.status}
            </span>
          </div>

          {/* Action Trigger */}
          <div className="pt-2">
            <button
              onClick={onInspectRisk}
              className="px-8 py-3.5 rounded-full bg-vediora-violet hover:bg-vediora-deepViolet text-white font-display font-extrabold text-xs shadow-character transition-all flex items-center gap-2"
            >
              <span>See Flagged Risk →</span>
            </button>
          </div>
        </div>

        {/* Right Patient with Orbiting Molecules (7 cols) */}
        <div className="lg:col-span-7 relative h-[480px] rounded-[36px] bg-white border border-vediora-border shadow-paper flex items-center justify-center p-8 overflow-hidden">
          {/* Central Patient */}
          <div className="relative z-20">
            <ElderlyRajesh size="lg" />
          </div>

          {/* Orbiting Molecules */}
          <div className="absolute top-12 left-16 z-30 animate-float-gentle">
            <MedicinePill name="Warfarin" dose="5 mg" color="coral" />
          </div>
          <div className="absolute top-16 right-16 z-30 animate-float-gentle" style={{ animationDelay: '1s' }}>
            <MedicinePill name="Aspirin" dose="75 mg" color="coral" />
          </div>
          <div className="absolute bottom-16 left-20 z-30 animate-float-gentle" style={{ animationDelay: '2s' }}>
            <MedicinePill name="Metformin" dose="500 mg" color="violet" />
          </div>
          <div className="absolute bottom-20 right-20 z-30 animate-float-gentle" style={{ animationDelay: '3s' }}>
            <MedicinePill name="Celecoxib" dose="200 mg" color="amber" />
          </div>
        </div>
      </div>
    </section>
  );
};
