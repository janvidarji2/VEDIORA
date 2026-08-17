import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Zap, ShieldAlert } from 'lucide-react';

export const AISafetyOrbSection = ({ onInspectRisk }) => {
  const [activeStage, setActiveStage] = useState(0);
  const stages = ["IDENTIFYING", "NORMALIZING", "CHECKING", "EXPLAINING"];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <section id="section-ai-safety" className="py-24 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b border-minimal-border pb-4 mb-16 font-mono text-xs text-minimal-muted">
        <span className="text-minimal-violet font-extrabold tracking-widest">[ 03 / AI SAFETY ]</span>
        <span>COMBINATORIAL COMPUTATION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Heading & Lifecycle Typography (6 cols) */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-minimal-violet font-display tracking-tight leading-[0.92]">
            CHECK <br />
            EVERYTHING <br />
            TOGETHER.
          </h2>

          <p className="text-sm text-minimal-muted font-medium max-w-md leading-relaxed">
            Every cross-prescription combination is analyzed for metabolic CYP450 collisions and clinical synergies.
          </p>

          {/* Animated Stepper Typography (Section 11) */}
          <div className="flex items-center gap-2 pt-2 font-mono text-xs font-extrabold">
            {stages.map((stg, idx) => (
              <span
                key={stg}
                className={`transition-all duration-300 ${
                  activeStage === idx
                    ? 'text-minimal-purple font-black scale-105'
                    : 'text-minimal-muted/40'
                }`}
              >
                {stg} {idx < stages.length - 1 ? '→' : ''}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={onInspectRisk}
              className="px-8 py-3.5 rounded-full bg-minimal-violet hover:bg-minimal-deepViolet text-white font-display font-extrabold text-xs shadow-minimal hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Explore Interaction Network →</span>
            </button>
          </div>
        </div>

        {/* Right Futuristic AI Orb & Interaction Network (6 cols) */}
        <div className="lg:col-span-6 relative h-[440px] rounded-[36px] bg-white border border-minimal-border shadow-minimal flex items-center justify-center p-8 overflow-hidden">
          {/* Subtle Rotating Compass Ring */}
          <div className="absolute w-72 h-72 rounded-full border border-minimal-purple/10 border-dashed animate-spin-slow pointer-events-none" />

          {/* SVG Interaction Network Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="#10B981" strokeWidth="1" />
            <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="#10B981" strokeWidth="1" />
            <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>

          {/* Central AI Orb */}
          <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-tr from-minimal-violet via-minimal-purple to-minimal-cyan p-[2px] shadow-glow-ai flex items-center justify-center animate-pulse-subtle">
            <div className="w-full h-full rounded-full bg-minimal-bgPure flex flex-col items-center justify-center text-center">
              <Zap className="w-6 h-6 text-minimal-purple mb-1" />
              <span className="font-mono text-[9px] font-black text-minimal-violet">VEDI AI</span>
            </div>
          </div>

          {/* Corner Medicine Nodes */}
          <div className="absolute top-10 left-10 z-20 px-2.5 py-1 rounded-full bg-white border border-minimal-coral text-xs font-mono font-bold text-minimal-coral">
            Warfarin 5mg
          </div>
          <div className="absolute top-10 right-10 z-20 px-2.5 py-1 rounded-full bg-white border border-minimal-coral text-xs font-mono font-bold text-minimal-coral">
            Aspirin 75mg
          </div>
          <div className="absolute bottom-10 left-10 z-20 px-2.5 py-1 rounded-full bg-white border border-minimal-mint text-xs font-mono font-bold text-minimal-mint">
            Metformin 500mg
          </div>
          <div className="absolute bottom-10 right-10 z-20 px-2.5 py-1 rounded-full bg-white border border-minimal-amber text-xs font-mono font-bold text-minimal-amber">
            Glimepiride 2mg
          </div>
        </div>
      </div>
    </section>
  );
};
