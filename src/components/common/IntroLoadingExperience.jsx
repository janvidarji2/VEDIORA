import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

export const IntroLoadingExperience = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0: Logo, 1: Nodes Connect, 2: AI Activate, 3: Shield, 4: Done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 350);
    const t2 = setTimeout(() => setPhase(2), 750);
    const t3 = setTimeout(() => setPhase(3), 1150);
    const t4 = setTimeout(() => {
      setPhase(4);
      if (onComplete) onComplete();
    }, 1500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  if (phase === 4) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#040714] flex flex-col items-center justify-center select-none animate-fade-out transition-opacity duration-300">
      <div className="relative flex flex-col items-center">
        {/* Central Logo & Shield */}
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-universe-violet via-universe-electric to-universe-cyan p-[2px] shadow-glow-core mb-6 animate-pulse-glow">
          <div className="w-full h-full rounded-3xl bg-universe-void flex items-center justify-center">
            {phase >= 3 ? (
              <ShieldCheck className="w-10 h-10 text-universe-mint animate-pop-in" />
            ) : phase >= 2 ? (
              <Zap className="w-10 h-10 text-universe-cyan animate-pulse" />
            ) : (
              <span className="font-display text-2xl font-black text-white">V</span>
            )}
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-white font-display tracking-tight mb-2">
          VEDIORA
        </h1>

        <span className="font-mono text-xs text-universe-cyan font-bold tracking-widest uppercase">
          {phase === 0 && "INITIALIZING ENGINE..."}
          {phase === 1 && "CONNECTING MEDICINES..."}
          {phase === 2 && "CALCULATING SAFETY PROFILE..."}
          {phase === 3 && "VERIFIED SECURE"}
        </span>

        {/* Progress Filament */}
        <div className="w-48 h-1 rounded-full bg-universe-card overflow-hidden mt-6">
          <div
            className="h-full bg-gradient-to-r from-universe-violet to-universe-cyan transition-all duration-300 ease-out"
            style={{ width: `${(phase + 1) * 25}%` }}
          />
        </div>
      </div>
    </div>
  );
};
