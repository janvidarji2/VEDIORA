import React, { useState, useEffect } from 'react';
import { Zap, ShieldCheck, Activity, ArrowRight, Layers, Sparkles, Cpu, Search, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Capsule3D, Tablet3D } from '../common/MedicineObjects3D';

export const AISafetyEngineCenterpiece = ({ onInspectRisk }) => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [combosCount, setCombosCount] = useState(0);
  const [progressPct, setProgressPct] = useState(0);
  const [cursorTilt, setCursorTilt] = useState({ x: 0, y: 0 });

  // 6 Orbiting AI Pipeline Nodes (Section 8 Requirement)
  const orbitingNodes = [
    { title: "Medicine Identification", icon: Search, accent: "#06B6D4" },
    { title: "RxNorm Normalization", icon: Cpu, accent: "#8B5CF6" },
    { title: "Interaction Analysis", icon: Activity, accent: "#EF4444" },
    { title: "Evidence Retrieval", icon: FileText, accent: "#22D3EE" },
    { title: "Risk Assessment", icon: AlertTriangle, accent: "#F59E0B" },
    { title: "AI Explanation", icon: Sparkles, accent: "#10B981" }
  ];

  // 6 Combinations (Section 8 Requirement)
  const combos = [
    { pair: "A + B", names: "Metformin + Glimepiride", status: "SAFE", color: "#10B981" },
    { pair: "A + C", names: "Metformin + Aspirin", status: "SAFE", color: "#10B981" },
    { pair: "A + D", names: "Metformin + Atorvastatin", status: "SAFE", color: "#10B981" },
    { pair: "B + C", names: "Glimepiride + Aspirin", status: "MODERATE", color: "#F59E0B" },
    { pair: "B + D", names: "Glimepiride + Atorvastatin", status: "SAFE", color: "#10B981" },
    { pair: "C + D", names: "Warfarin + Aspirin", status: "COLLISION", color: "#EF4444" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIdx((prev) => (prev + 1) % orbitingNodes.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [orbitingNodes.length]);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      if (count <= 6) {
        setCombosCount(count);
        setProgressPct(Math.round((count / 6) * 100));
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setCursorTilt({ x: x * 12, y: -y * 12 });
  };

  return (
    <section id="section-ai" className="py-28 px-6 lg:px-16 max-w-[1540px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-16 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-electric font-extrabold tracking-widest block">[ 04 / AI SAFETY CORE ]</span>
          <span className="text-[11px]">N-DIMENSIONAL PHARMACOKINETIC ENGINE</span>
        </div>
        <span className="text-universe-cyan font-bold flex items-center gap-2">
          <Activity className="w-4 h-4 text-universe-cyan animate-pulse" />
          {combosCount} COMBINATIONS ANALYZED ({progressPct}% COMPLETE)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Narrative Block (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <span className="font-mono text-xs font-extrabold text-universe-electric uppercase tracking-widest block">
            NEURAL PHARMACOLOGY
          </span>

          {/* Section 8 Headline */}
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[0.92]">
            Now VEDIORA <br />
            <span className="bg-gradient-to-r from-universe-electric via-universe-lavender to-universe-cyan bg-clip-text text-transparent">
              Thinks.
            </span>
          </h2>

          <p className="text-sm text-universe-muted font-medium leading-relaxed">
            VEDIORA tests every pairwise combination against active pharmacological databases, verifying metabolic clearance pathways before ingestion.
          </p>

          {/* 6 Sequential Orbiting Nodes Checklist (Section 8 Requirement) */}
          <div className="space-y-2 font-mono text-xs">
            {orbitingNodes.map((node, idx) => {
              const Icon = node.icon;
              const isCurrent = activeStepIdx === idx;
              const isDone = idx <= activeStepIdx;

              return (
                <div
                  key={node.title}
                  className={`p-3 rounded-2xl border flex items-center justify-between transition-all duration-300 ${
                    isCurrent
                      ? 'bg-universe-surface border-universe-cyan text-white shadow-glow-cyan scale-[1.02]'
                      : isDone
                      ? 'bg-universe-surface/60 border-universe-border text-universe-lavender'
                      : 'bg-universe-void/40 border-universe-border/40 text-universe-muted'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" style={{ color: node.accent }} />
                    <span className="font-bold">{node.title}</span>
                  </div>
                  <span className="text-[10px] font-extrabold" style={{ color: node.accent }}>
                    {isCurrent ? "ACTIVE" : isDone ? "✓ COMPLETE" : "PENDING"}
                  </span>
                </div>
              );
            })}
          </div>

          {/* 6 Combinations Analyzed Ticker (Section 8 Requirement) */}
          <div className="p-4 rounded-2xl bg-universe-surface/60 border border-universe-border font-mono text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-universe-cyan font-bold uppercase tracking-wider block">
                PAIRWISE ANALYSIS ({combosCount}/6):
              </span>
              <span className="text-universe-lavender font-black text-xs">6 COMBINATIONS ANALYZED</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              {combos.map((c) => (
                <div key={c.pair} className="flex items-center justify-between p-1.5 rounded-lg bg-universe-void/60 border border-universe-border/60">
                  <span className="text-white font-bold">{c.pair}</span>
                  <span className="font-bold" style={{ color: c.color }}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onInspectRisk}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-universe-violet to-universe-electric hover:from-universe-electric hover:to-universe-violet text-white font-display font-extrabold text-xs shadow-glow-violet hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Inspect Flagged Synergy →</span>
            </button>
          </div>
        </div>

        {/* Right Giant Layered AI Safety Core & Orbiting Nodes (7 cols) */}
        <div
          onMouseMove={handleMouseMove}
          className="lg:col-span-7 relative h-[560px] rounded-[36px] universe-panel flex items-center justify-center p-8 overflow-hidden shadow-glow-core transition-transform duration-200"
          style={{
            transform: `perspective(1000px) rotateX(${cursorTilt.y}deg) rotateY(${cursorTilt.x}deg)`
          }}
        >
          {/* Outer Layered Rotating Orbit Rings (Section 8 & 16) */}
          <div className="absolute w-[460px] h-[460px] rounded-full border border-universe-violet/30 border-dashed animate-orbit-slow pointer-events-none" />
          <div className="absolute w-[360px] h-[360px] rounded-full border border-universe-cyan/30 border-dotted animate-orbit-reverse pointer-events-none" />
          <div className="absolute w-[260px] h-[260px] rounded-full border border-universe-electric/25 pointer-events-none" />

          {/* Animated Connecting Beams */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <line x1="20%" y1="20%" x2="80%" y2="20%" stroke="#EF4444" strokeWidth="2" strokeDasharray="8 6" className="moving-beam-coral" />
            <line x1="20%" y1="20%" x2="20%" y2="80%" stroke="#10B981" strokeWidth="1.5" className="moving-beam-mint" />
            <line x1="80%" y1="20%" x2="80%" y2="80%" stroke="#10B981" strokeWidth="1.5" className="moving-beam-mint" />
            <line x1="20%" y1="80%" x2="80%" y2="80%" stroke="#F59E0B" strokeWidth="1.5" className="moving-beam-amber" />
          </svg>

          {/* Central AI Safety Core with "ANALYZING" inside (Section 8 Requirement) */}
          <div className="relative z-20 w-48 h-48 rounded-full bg-gradient-to-tr from-universe-void via-universe-deep to-universe-surface border-2 border-universe-electric shadow-glow-core flex flex-col items-center justify-center text-center p-4 animate-pulse-glow">
            <div className="relative">
              <Zap className="w-10 h-10 text-universe-cyan mb-1 animate-pulse" />
              <div className="absolute -inset-2 rounded-full border border-universe-violet/50 border-dashed animate-spin-slow pointer-events-none" />
            </div>
            <span className="font-display text-xs font-black text-white tracking-wider block mt-1">
              VEDIORA AI
            </span>
            <span className="font-mono text-[10px] font-black text-universe-cyan tracking-widest uppercase mt-0.5">
              ANALYZING
            </span>
            <span className="font-mono text-[9px] text-universe-mint font-bold mt-1">
              {progressPct}% EVALUATED
            </span>
          </div>

          {/* 4 Orbiting 3D Medicines */}
          <div className="absolute top-10 left-10 z-20 animate-float-slow">
            <Capsule3D name="Metformin" dose="1000mg" freq="Twice daily" doctor="Dr. Patel" topColor="#8B5CF6" />
          </div>
          <div className="absolute top-10 right-10 z-20 animate-float-slow" style={{ animationDelay: '1s' }}>
            <Tablet3D name="Warfarin" dose="5mg" freq="Daily" doctor="Dr. Shah" color="#EF4444" scoreColor="#FFFFFF" />
          </div>
          <div className="absolute bottom-10 left-10 z-20 animate-float-slow" style={{ animationDelay: '2s' }}>
            <Tablet3D name="Aspirin" dose="75mg" freq="Once daily" doctor="Dr. Shah" color="#FFFFFF" scoreColor="#CBD5E1" />
          </div>
          <div className="absolute bottom-10 right-10 z-20 animate-float-slow" style={{ animationDelay: '3s' }}>
            <Capsule3D name="Glimepiride" dose="2mg" freq="Once daily" doctor="Dr. Patel" topColor="#F59E0B" />
          </div>
        </div>
      </div>
    </section>
  );
};
