import React, { useState, useEffect, useRef } from 'react';
import {
  PrescriptionPaper3D,
  Capsule3D,
  AICoreOrb,
  PatientProfileOrb,
  DoctorNodeObject,
  RiskNode3D
} from '../common/MedicalObjects';
import { ArrowRight, Terminal, Activity, ShieldCheck, Compass } from 'lucide-react';

export const MedicationUniverseHero = ({ onLaunchCheck, onScrollExplore }) => {
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      setMouseOffset({
        x: x * 24,
        y: y * 24,
        rotX: -y * 8,
        rotY: x * 8
      });
    };

    const el = containerRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-8 pb-16 px-6 lg:px-12 max-w-[1520px] mx-auto select-none overflow-hidden">
      {/* Top HUD Line */}
      <div className="flex items-center justify-between border-b border-intel-border pb-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-intel-cyan animate-ping" />
          <span className="text-intel-cyan font-bold tracking-widest">
            VEDIORA / MEDICATION INTELLIGENCE
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-intel-muted">
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-intel-lavender" />
            ENGINE V4.2
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-intel-mint" />
            LIVE DECISION SUPPORT
          </span>
        </div>
      </div>

      {/* Asymmetric Full-Screen Grid (Editorial Left, 3D Universe Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8">
        {/* Left Editorial Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8 text-left z-20">
          <div className="space-y-3">
            <span className="font-mono text-xs font-extrabold text-intel-cyan tracking-widest uppercase block">
              [ 00 / SYSTEM INTENT ]
            </span>

            {/* Massive Editorial Headline */}
            <h1 className="text-5xl sm:text-7xl font-extrabold text-intel-ivory font-display tracking-tighter leading-[0.95]">
              THE MEDICINES <br />
              <span className="text-editorial-gradient">YOU DON'T SEE</span> <br />
              TOGETHER.
            </h1>
          </div>

          {/* Underneath, very small */}
          <p className="text-sm sm:text-base text-intel-muted font-medium max-w-md leading-relaxed">
            One patient. Multiple prescriptions. One safety view.
          </p>

          {/* Precision Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onLaunchCheck}
              className="px-7 py-4 rounded-xl bg-intel-electric hover:bg-intel-violet text-white font-display font-extrabold text-sm shadow-violet-glow hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5 group"
            >
              <span>Launch Safety Check</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onScrollExplore}
              className="px-6 py-4 rounded-xl bg-intel-surface/80 hover:bg-intel-elevated border border-intel-border text-intel-ivory font-display font-extrabold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-intel-cyan" />
              <span>Explore Universe</span>
            </button>
          </div>

          {/* Technical Micro-Telemetry Data */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-intel-border text-left font-mono">
            <div>
              <span className="text-[10px] text-intel-muted block">PRESCRIBERS</span>
              <span className="text-sm font-extrabold text-intel-ivory">03 SPECIALISTS</span>
            </div>
            <div>
              <span className="text-[10px] text-intel-muted block">MEDICATIONS</span>
              <span className="text-sm font-extrabold text-intel-cyan">06 MOLECULES</span>
            </div>
            <div>
              <span className="text-[10px] text-intel-muted block">PAIR COVERAGE</span>
              <span className="text-sm font-extrabold text-intel-lavender">66 COMBOS</span>
            </div>
          </div>
        </div>

        {/* Right 3D Medication Universe Field (7 cols) */}
        <div
          ref={containerRef}
          className="lg:col-span-7 relative h-[560px] sm:h-[640px] rounded-3xl intel-panel border border-intel-border overflow-hidden flex items-center justify-center"
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Subtle Tech Grid & Radial Lighting */}
          <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-intel-violet/10 blur-3xl pointer-events-none" />

          {/* Dynamic 3D Spatial Plane */}
          <div
            className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${mouseOffset.rotX}deg) rotateY(${mouseOffset.rotY}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* SVG Connecting Luminous Filaments */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              {/* Doctor 1 to Core */}
              <line x1="22%" y1="20%" x2="50%" y2="50%" className="luminous-line-violet opacity-60" strokeWidth="1" strokeDasharray="4 4" />
              {/* Doctor 2 to Core */}
              <line x1="80%" y1="24%" x2="50%" y2="50%" className="luminous-line-cyan opacity-60" strokeWidth="1" strokeDasharray="4 4" />
              {/* Patient to Core */}
              <line x1="50%" y1="84%" x2="50%" y2="50%" className="luminous-line-mint opacity-70" strokeWidth="1.5" />
              {/* Risk collision connection */}
              <line x1="30%" y1="62%" x2="72%" y2="60%" className="luminous-line-coral opacity-80" strokeWidth="1.5" />
            </svg>

            {/* Central VEDIORA AI Core (Section 04) */}
            <div
              onMouseEnter={() => setActiveTooltip("SAFETY ENGINE")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="relative z-20 cursor-pointer transform hover:scale-105 transition-transform"
              style={{ transform: `translateZ(40px) translate(${mouseOffset.x * 0.2}px, ${mouseOffset.y * 0.2}px)` }}
            >
              <AICoreOrb />
            </div>

            {/* Top Left: Doctor 01 (Cardiology) & Prescription Paper */}
            <div
              onMouseEnter={() => setActiveTooltip("CARDIOLOGY SPECIALIST")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="absolute top-10 left-6 sm:left-12 z-30 transition-transform cursor-pointer"
              style={{ transform: `translateZ(70px) translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)` }}
            >
              <DoctorNodeObject name="Dr. R. Shah" role="Cardiology" hospital="Metro Heart" icon="❤️" />
              <div className="mt-2 -ml-2 transform -rotate-6">
                <PrescriptionPaper3D title="RX-CRD-8821" doctor="Dr. R. Shah" size="sm" />
              </div>
            </div>

            {/* Top Right: Doctor 02 (Endocrinology) & Prescription Paper */}
            <div
              onMouseEnter={() => setActiveTooltip("DIABETES SPECIALIST")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="absolute top-12 right-6 sm:right-12 z-30 transition-transform cursor-pointer"
              style={{ transform: `translateZ(50px) translate(${mouseOffset.x * -0.4}px, ${mouseOffset.y * -0.4}px)` }}
            >
              <DoctorNodeObject name="Dr. A. Patel" role="Diabetology" hospital="Apex Endocrine" icon="⚡" />
              <div className="mt-2 -mr-2 transform rotate-6">
                <PrescriptionPaper3D title="RX-DIA-4019" doctor="Dr. A. Patel" size="sm" />
              </div>
            </div>

            {/* Floating Medicine Capsules around Universe */}
            {/* Med 1: Warfarin */}
            <div
              onMouseEnter={() => setActiveTooltip("WARFARIN / 5 MG")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="absolute top-44 left-24 z-30 animate-pulse-subtle"
              style={{ transform: `translateZ(90px) translate(${mouseOffset.x * 0.7}px, ${mouseOffset.y * 0.7}px)` }}
            >
              <Capsule3D name="Warfarin" dose="5 MG" color="coral" size="sm" />
            </div>

            {/* Med 2: Aspirin */}
            <div
              onMouseEnter={() => setActiveTooltip("ASPIRIN / 75 MG")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="absolute top-48 right-24 z-30 animate-pulse-subtle"
              style={{ transform: `translateZ(85px) translate(${mouseOffset.x * -0.6}px, ${mouseOffset.y * -0.6}px)` }}
            >
              <Capsule3D name="Aspirin" dose="75 MG" color="coral" size="sm" />
            </div>

            {/* Med 3: Metformin */}
            <div
              onMouseEnter={() => setActiveTooltip("METFORMIN / 500 MG")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="absolute bottom-36 left-16 z-30"
              style={{ transform: `translateZ(60px) translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px)` }}
            >
              <Capsule3D name="Metformin" dose="500 MG" color="violet" size="sm" />
            </div>

            {/* Med 4: Atorvastatin */}
            <div
              onMouseEnter={() => setActiveTooltip("ATORVASTATIN / 20 MG")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="absolute bottom-40 right-16 z-30"
              style={{ transform: `translateZ(65px) translate(${mouseOffset.x * -0.5}px, ${mouseOffset.y * -0.5}px)` }}
            >
              <Capsule3D name="Atorvastatin" dose="20 MG" color="cyan" size="sm" />
            </div>

            {/* Bottom Patient Profile Hub */}
            <div
              onMouseEnter={() => setActiveTooltip("ONE PATIENT PROFILE")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="absolute bottom-6 z-30 cursor-pointer"
              style={{ transform: `translateZ(80px) translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)` }}
            >
              <PatientProfileOrb name="Rajesh Kumar" age="68M" medCount="6 Active Molecules" />
            </div>

            {/* Active Risk Indicator Beacon */}
            <div
              onMouseEnter={() => setActiveTooltip("POTENTIAL DRUG INTERACTION")}
              onMouseLeave={() => setActiveTooltip(null)}
              className="absolute top-36 z-30"
              style={{ transform: `translateZ(100px) translate(${mouseOffset.x * 0.1}px, ${mouseOffset.y * 0.1}px)` }}
            >
              <RiskNode3D severity="ATTENTION" label="Warfarin + Aspirin" />
            </div>
          </div>

          {/* Minimalist Monospace Floating Label (Section 05) */}
          {activeTooltip && (
            <div className="absolute top-6 left-6 font-mono text-[10px] font-extrabold text-intel-cyan tracking-widest bg-intel-surface/90 border border-intel-border px-3 py-1 rounded-md backdrop-blur-md animate-fade-in z-40">
              TARGET // {activeTooltip}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
