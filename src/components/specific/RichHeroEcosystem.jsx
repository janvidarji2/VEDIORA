import React, { useState, useEffect, useRef } from 'react';
import {
  DoctorPatel,
  DoctorShah,
  DoctorMehta,
  ElderlyRajesh,
  PrescriptionSheet
} from '../characters/Characters';
import { Capsule3D, Tablet3D, Bottle3D, BlisterPack3D } from '../common/MedicineObjects3D';
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Zap,
  Activity,
  Pill,
  Sparkles,
  Microscope,
  AlertTriangle,
  FileText,
  Stethoscope,
  UserCheck
} from 'lucide-react';

export const RichHeroEcosystem = ({ onRunSafetyCheck, onExplore, onHoverZone }) => {
  const [activeZone, setActiveZone] = useState('all');
  const [btnHovered, setBtnHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0, rotX: 0, rotY: 0 });
  const [stats, setStats] = useState({ specialists: 0, medicines: 0, rxs: 0, checks: 0, patients: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    // Number animation on page mount
    const timer = setTimeout(() => {
      setStats({
        specialists: 3,
        medicines: 6,
        rxs: 4,
        checks: 12,
        patients: 1
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      setMouseOffset({
        x: x * 20,
        y: y * 20,
        rotX: -y * 6,
        rotY: x * 6
      });
    };

    const el = containerRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleZone = (zone) => {
    setActiveZone(zone);
    if (onHoverZone) onHoverZone(zone);
  };

  return (
    <section className="relative min-h-[96vh] pt-8 pb-16 px-6 lg:px-16 max-w-[1540px] mx-auto select-none flex flex-col justify-between overflow-hidden">
      {/* Top Floating Technical HUD Telemetry (Section 07 Requirement) */}
      <div className="flex flex-wrap items-center justify-between border-b border-universe-border pb-4 font-mono text-[11px] text-universe-muted gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-universe-cyan animate-ping" />
          <span className="text-white font-extrabold tracking-widest uppercase">
            VEDIORA / MEDICATION SAFETY NETWORK
          </span>
        </div>

        {/* Live Animated Technical Annotations */}
        <div className="flex flex-wrap items-center gap-3 text-[10px]">
          <span className="px-3 py-1 rounded-full bg-universe-card border border-universe-violet/40 text-universe-lavender font-bold shadow-sm">
            0{stats.specialists} SPECIALISTS
          </span>
          <span className="px-3 py-1 rounded-full bg-universe-card border border-universe-cyan/40 text-universe-cyan font-bold shadow-sm">
            0{stats.medicines} MEDICINES
          </span>
          <span className="px-3 py-1 rounded-full bg-universe-card border border-universe-mint/40 text-universe-mint font-bold shadow-sm">
            0{stats.rxs} PRESCRIPTIONS
          </span>
          <span className="px-3 py-1 rounded-full bg-universe-card border border-universe-coral/40 text-universe-coral font-bold shadow-sm">
            {stats.checks < 10 ? `0${stats.checks}` : stats.checks} COMBOS CHECKED
          </span>
          <span className="px-3 py-1 rounded-full bg-universe-card border border-universe-aqua/40 text-universe-aqua font-bold shadow-sm">
            0{stats.patients} PATIENT
          </span>
        </div>
      </div>

      {/* Main Asymmetric Ecosystem Stage (Section 3 & 4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8 relative">
        {/* Left Editorial Headline (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left z-20">
          <div className="space-y-3">
            {/* Small Badge (Section 3 Requirement) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-universe-violet/20 border border-universe-violet/40 text-universe-lavender font-mono text-xs font-bold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-universe-cyan" />
              <span>AI-POWERED MEDICATION SAFETY</span>
            </div>

            {/* Large Headline (Section 3 Requirement) */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-[0.92]">
              Every Prescription. <br />
              <span className="bg-gradient-to-r from-universe-cyan via-universe-aqua to-universe-lavender bg-clip-text text-transparent">
                One Complete Safety View.
              </span>
            </h1>
          </div>

          {/* Subheading (Section 3 Requirement) */}
          <p className="text-sm sm:text-base text-universe-muted font-medium max-w-md leading-relaxed">
            VEDIORA brings medicines prescribed by different specialists into one intelligent medication profile and identifies potential medication risks before they become a problem.
          </p>

          {/* Primary Action Buttons (Section 3 & 28 Requirement) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onExplore}
              className="px-7 py-4 rounded-full bg-universe-surface/90 hover:bg-universe-card border border-universe-border hover:border-universe-cyan text-universe-lavender font-display font-extrabold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-universe-cyan" />
              <span>Explore VEDIORA</span>
            </button>

            <button
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              onClick={onRunSafetyCheck}
              className="relative px-8 py-4 rounded-full bg-gradient-to-r from-universe-violet via-universe-electric to-universe-cyan hover:scale-105 text-white font-display font-extrabold text-sm shadow-glow-violet transition-all duration-300 flex items-center justify-center gap-2.5 group overflow-hidden"
            >
              <span>Run Safety Check</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${btnHovered ? 'translate-x-1' : ''}`} />
              {btnHovered && (
                <Pill className="w-3.5 h-3.5 text-universe-cyan animate-spin-slow transition-all" />
              )}
            </button>
          </div>

          {/* Three Free-Standing Illustrated Doctors (Section 3 & 6 Left Requirement) */}
          <div className="pt-6">
            <span className="font-mono text-[10px] font-extrabold text-universe-muted uppercase tracking-widest block mb-2">
              DISPERSED SPECIALISTS (NO DIRECT EHR LINK)
            </span>
            <div className="flex items-end gap-4">
              <div
                onMouseEnter={() => handleZone('doctor')}
                onMouseLeave={() => handleZone('all')}
                className="cursor-pointer transform hover:scale-105 transition-transform"
              >
                <DoctorPatel size="sm" isHovered={activeZone === 'doctor'} />
              </div>
              <div
                onMouseEnter={() => handleZone('doctor')}
                onMouseLeave={() => handleZone('all')}
                className="cursor-pointer transform hover:scale-105 transition-transform"
              >
                <DoctorShah size="sm" isHovered={activeZone === 'doctor'} />
              </div>
              <div
                onMouseEnter={() => handleZone('doctor')}
                onMouseLeave={() => handleZone('all')}
                className="cursor-pointer transform hover:scale-105 transition-transform"
              >
                <DoctorMehta size="sm" isHovered={activeZone === 'doctor'} />
              </div>
            </div>
          </div>
        </div>

        {/* Right 3D/2.5D Interactive Medication Network (Section 3 & 4 Right) */}
        <div
          ref={containerRef}
          className="lg:col-span-7 relative h-[560px] sm:h-[640px] flex items-center justify-center transition-transform duration-200"
          style={{
            perspective: '1200px',
            transform: `rotateX(${mouseOffset.rotX}deg) rotateY(${mouseOffset.rotY}deg)`
          }}
        >
          {/* SVG Animated Connecting Glowing Lines (Section 1 & 4) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Doctor -> Rx */}
            <path d="M 12% 75% Q 25% 25% 42% 20%" fill="none" strokeWidth="2" className="moving-beam-violet" />
            {/* Rx -> Meds */}
            <path d="M 42% 20% Q 55% 15% 72% 26%" fill="none" strokeWidth="2" className="moving-beam-cyan" />
            {/* Meds -> Patient */}
            <path d="M 72% 26% Q 80% 48% 68% 60%" fill="none" strokeWidth="2" className="moving-beam-mint" />
            {/* Patient -> AI Core */}
            <path d="M 68% 60% Q 52% 85% 36% 85%" fill="none" strokeWidth="2" className="moving-beam-coral" />
          </svg>

          {/* 1. Floating Prescriptions (Section 3) */}
          <div
            className="absolute top-4 left-1/4 z-20 transform -rotate-6 hover:rotate-0 transition-transform cursor-pointer"
            style={{ transform: `translate(${mouseOffset.x * 0.3}px, ${mouseOffset.y * 0.3}px)` }}
          >
            <PrescriptionSheet id="RX-CARDIO-88" doctor="Dr. Shah (Cardiology)" meds={["Warfarin 5mg", "Aspirin 75mg"]} size="sm" />
          </div>

          <div
            className="absolute top-10 right-8 z-20 transform rotate-6 hover:rotate-0 transition-transform cursor-pointer"
            style={{ transform: `translate(${mouseOffset.x * -0.3}px, ${mouseOffset.y * -0.3}px)` }}
          >
            <PrescriptionSheet id="RX-DIAB-40" doctor="Dr. Patel (Diabetes)" meds={["Metformin 500mg", "Glimepiride 2mg"]} size="sm" />
          </div>

          {/* 2. Floating 3D Medicine Objects (Section 3) */}
          <div
            className="absolute top-36 left-8 z-30 animate-float-slow"
            style={{ transform: `translate(${mouseOffset.x * 0.5}px, ${mouseOffset.y * 0.5}px)` }}
          >
            <Capsule3D name="Metformin" dose="500 mg" freq="Twice daily" doctor="Dr. Patel" topColor="#8B5CF6" botColor="#FFFFFF" />
          </div>

          <div
            className="absolute top-40 right-28 z-30 animate-float-slow"
            style={{ animationDelay: '1.2s', transform: `translate(${mouseOffset.x * -0.4}px, ${mouseOffset.y * -0.4}px)` }}
          >
            <Tablet3D name="Aspirin" dose="75 mg" freq="Once daily" doctor="Dr. Shah" color="#FFFFFF" scoreColor="#CBD5E1" />
          </div>

          <div
            className="absolute bottom-28 right-4 z-30 animate-float-slow"
            style={{ animationDelay: '2.4s', transform: `translate(${mouseOffset.x * -0.2}px, ${mouseOffset.y * -0.2}px)` }}
          >
            <Bottle3D name="Lisinopril" />
          </div>

          <div className="absolute bottom-20 left-4 z-30">
            <BlisterPack3D />
          </div>

          {/* 3. Central Patient (Rajesh Kumar) (Section 3) */}
          <div
            onMouseEnter={() => handleZone('patient')}
            onMouseLeave={() => handleZone('all')}
            className="absolute top-1/3 right-1/4 z-20 cursor-pointer transform hover:scale-105 transition-transform"
            style={{ transform: `translate(${mouseOffset.x * 0.15}px, ${mouseOffset.y * 0.15}px)` }}
          >
            <ElderlyRajesh size="lg" />
          </div>

          {/* 4. Floating Nodes: AI Analysis & Risk Alert (Section 3 Requirement) */}
          <div
            className="absolute top-20 right-4 z-30 px-3 py-1.5 rounded-2xl bg-universe-surface/90 border border-universe-cyan/40 shadow-glow-cyan text-[10px] font-mono text-universe-cyan flex items-center gap-1.5 animate-pulse"
            style={{ transform: `translate(${mouseOffset.x * -0.6}px, ${mouseOffset.y * -0.6}px)` }}
          >
            <Microscope className="w-3.5 h-3.5" />
            <span>🔬 AI ANALYSIS ACTIVE</span>
          </div>

          <div
            className="absolute top-52 left-2 z-30 px-3 py-1.5 rounded-2xl bg-universe-coral/20 border border-universe-coral/40 shadow-glow-coral text-[10px] font-mono text-universe-coral flex items-center gap-1.5 animate-bounce-gentle"
            style={{ transform: `translate(${mouseOffset.x * 0.6}px, ${mouseOffset.y * 0.6}px)` }}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>⚠️ RISK ALERT ISOLATED</span>
          </div>

          {/* 5. Central VEDIORA AI SAFETY CORE (Center-Bottom) (Section 3 & 4) */}
          <div
            onMouseEnter={() => handleZone('ai')}
            onMouseLeave={() => handleZone('all')}
            className="absolute bottom-2 left-1/3 -translate-x-1/2 z-30 flex items-center gap-3.5 p-4 rounded-3xl universe-panel shadow-glow-core cursor-pointer transform hover:scale-105 transition-transform"
            style={{ transform: `translate(${mouseOffset.x * 0.1}px, ${mouseOffset.y * 0.1}px)` }}
          >
            <div className="relative w-14 h-14 rounded-2xl bg-universe-surface flex items-center justify-center border border-universe-cyan">
              <Zap className="w-6 h-6 text-universe-cyan animate-pulse" />
              <div className="absolute -inset-1 rounded-2xl border border-universe-violet/50 border-dashed animate-spin-slow pointer-events-none" />
            </div>

            <div className="text-left font-mono">
              <span className="text-[10px] text-universe-cyan font-extrabold tracking-widest uppercase block">
                VEDIORA AI
              </span>
              <span className="font-display font-extrabold text-sm text-white block">
                SAFETY CORE
              </span>
              <span className="text-[9px] text-universe-mint block font-bold mt-0.5">
                ✓ 12 Combinations Evaluated
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
