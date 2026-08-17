import React, { useState, useEffect } from 'react';
import {
  DoctorPatel,
  DoctorShah,
  ElderlyRajesh,
  PrescriptionSheet
} from '../characters/Characters';
import { Capsule3D, Tablet3D } from '../common/MedicineObjects3D';
import { Play, Pause, ArrowRight, ArrowLeft, X, CheckCircle2, AlertTriangle, ShieldCheck, Zap, Activity } from 'lucide-react';
import { useMedication } from '../../context/MedicationContext';

export const GuidedDemoModal = ({ isOpen, onClose }) => {
  const { loginAs } = useMedication();
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const demoSteps = [
    {
      stepNum: "01",
      title: "DOCTOR 1: CARDIOLOGIST",
      subtitle: "Cardiology Prescription Issued",
      component: (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-4 animate-pop-in">
          <DoctorShah size="sm" />
          <div className="transform rotate-2">
            <PrescriptionSheet id="RX-CRD-8821" doctor="Dr. Shah (Cardiology)" meds={["Warfarin 5mg", "Aspirin 75mg"]} size="sm" />
          </div>
        </div>
      ),
      description: "Dr. Shah prescribes Warfarin 5mg & Aspirin 75mg for post-CABG hemostasis management."
    },
    {
      stepNum: "02",
      title: "DOCTOR 2: DIABETOLOGIST",
      subtitle: "Endocrine Prescription Issued",
      component: (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-4 animate-pop-in">
          <DoctorPatel size="sm" />
          <div className="transform -rotate-2">
            <PrescriptionSheet id="RX-DIA-4019" doctor="Dr. Patel (Diabetes)" meds={["Metformin 1000mg", "Glimepiride 2mg"]} size="sm" />
          </div>
        </div>
      ),
      description: "Dr. Patel treats type 2 diabetes independently without seeing Dr. Shah's active cardiology scripts."
    },
    {
      stepNum: "03",
      title: "COMPLETE PROFILE MERGED",
      subtitle: "Optical Parsing & Unified Profile",
      component: (
        <div className="flex flex-col items-center justify-center my-4 animate-pop-in">
          <ElderlyRajesh size="md" />
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
            <Tablet3D name="Warfarin" dose="5mg" color="#EF4444" scoreColor="#FFFFFF" size="sm" />
            <Tablet3D name="Aspirin" dose="75mg" color="#FFFFFF" scoreColor="#CBD5E1" size="sm" />
            <Capsule3D name="Metformin" dose="1000mg" topColor="#8B5CF6" size="sm" />
            <Capsule3D name="Glimepiride" dose="2mg" topColor="#F59E0B" size="sm" />
          </div>
        </div>
      ),
      description: "VEDIORA merges all 4 medicines, 2 prescribers, and clinical posology into one patient timeline."
    },
    {
      stepNum: "04",
      title: "AI COMBINATORIAL CHECK",
      subtitle: "CYP450 Enzyme & Drug Interaction Test",
      component: (
        <div className="flex flex-col items-center justify-center my-4 animate-pop-in">
          <div className="w-24 h-24 rounded-full bg-universe-surface border-2 border-universe-electric shadow-glow-core flex flex-col items-center justify-center text-center animate-pulse-glow">
            <Zap className="w-8 h-8 text-universe-cyan animate-pulse" />
            <span className="font-mono text-[8px] text-universe-cyan font-bold">CYP450 MATRIX</span>
          </div>
          <span className="font-mono text-xs text-universe-lavender font-bold mt-2">
            12 Pairwise Combinations Tested
          </span>
        </div>
      ),
      description: "Every pairwise combination is evaluated in real-time against pharmacological databases and CYP2C9 clearance."
    },
    {
      stepNum: "05",
      title: "POTENTIAL RISK DETECTED",
      subtitle: "Warfarin + Aspirin Collision Isolated",
      component: (
        <div className="p-4 rounded-2xl bg-universe-surface border border-universe-coral/40 space-y-2 max-w-sm mx-auto animate-pop-in shadow-glow-coral">
          <div className="flex items-center justify-center gap-3">
            <Tablet3D name="Warfarin" dose="5mg" color="#EF4444" scoreColor="#FFFFFF" size="sm" />
            <span className="text-universe-coral font-mono text-base font-black animate-pulse">⚡</span>
            <Tablet3D name="Aspirin" dose="75mg" color="#FFFFFF" scoreColor="#CBD5E1" size="sm" />
          </div>
          <span className="font-mono text-xs font-extrabold text-universe-coral block">
            MODERATE SEVERITY · BLEEDING HAZARD
          </span>
        </div>
      ),
      description: "VEDIORA flags dual antiplatelet and anticoagulant inhibition, requiring INR monitoring and co-management."
    },
    {
      stepNum: "06",
      title: "ACTIONABLE REPORTS",
      subtitle: "Doctor Precision & Patient Guidance",
      component: (
        <div className="grid grid-cols-2 gap-3 my-4 max-w-md mx-auto animate-pop-in text-left font-mono text-xs">
          <div className="p-3.5 rounded-2xl bg-universe-surface border border-universe-violet/40">
            <span className="text-universe-violet font-extrabold block">👨‍⚕️ Doctor Report</span>
            <span className="text-[10px] text-universe-muted">CYP2C9 Lag & Evidence</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-universe-surface border border-universe-mint/40">
            <span className="text-universe-mint font-extrabold block">👤 Patient Report</span>
            <span className="text-[10px] text-universe-muted">Simple Safe Guidance</span>
          </div>
        </div>
      ),
      description: "Both specialists and patients receive tailored insights to review and safely adjust regimens."
    }
  ];

  useEffect(() => {
    if (!isOpen || !isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= demoSteps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [isOpen, isPlaying, demoSteps.length]);

  if (!isOpen) return null;

  const step = demoSteps[currentStep];

  const handleLaunchLive = () => {
    onClose();
    loginAs('patient');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-universe-void/85 backdrop-blur-md animate-pop-in select-none">
      <div className="relative w-full max-w-2xl rounded-[36px] universe-panel p-8 sm:p-10 shadow-glow-core text-universe-ivory overflow-hidden text-center space-y-6">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-universe-border font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-universe-cyan animate-ping" />
            <span className="font-extrabold text-universe-cyan tracking-widest uppercase">
              VEDIORA // HACKATHON DEMO WALKTHROUGH
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-universe-muted hover:text-white hover:bg-universe-surface transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 6-Step Ticker Pills */}
        <div className="grid grid-cols-6 gap-2">
          {demoSteps.map((s, idx) => (
            <div
              key={idx}
              onClick={() => {
                setCurrentStep(idx);
                setIsPlaying(false);
              }}
              className={`h-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentStep
                  ? 'bg-gradient-to-r from-universe-cyan to-universe-violet shadow-glow-cyan'
                  : idx < currentStep
                  ? 'bg-universe-electric/70'
                  : 'bg-universe-card'
              }`}
            />
          ))}
        </div>

        {/* Slide Content */}
        <div className="p-6 sm:p-8 rounded-3xl bg-universe-surface/80 border border-universe-border flex flex-col items-center justify-between min-h-[320px]">
          <span className="font-mono text-[10px] text-universe-cyan font-bold uppercase tracking-widest block">
            STAGE {step.stepNum} // {step.subtitle}
          </span>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight mt-1">
            {step.title}
          </h3>

          <div className="w-full my-auto py-2">
            {step.component}
          </div>

          <p className="text-xs text-universe-muted font-medium max-w-md leading-relaxed mt-2">
            {step.description}
          </p>
        </div>

        {/* Bottom HUD Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 font-mono text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-1.5 rounded-xl bg-universe-surface hover:bg-universe-card border border-universe-border text-universe-lavender font-bold transition-all flex items-center gap-1.5"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-universe-cyan" /> : <Play className="w-3.5 h-3.5 text-universe-cyan fill-universe-cyan" />}
              <span>{isPlaying ? 'PAUSE' : 'AUTO PLAY'}</span>
            </button>

            <button
              disabled={currentStep === 0}
              onClick={() => {
                setCurrentStep((prev) => Math.max(0, prev - 1));
                setIsPlaying(false);
              }}
              className="p-2 rounded-xl bg-universe-surface hover:bg-universe-card border border-universe-border text-universe-muted hover:text-white disabled:opacity-30"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>

            <button
              disabled={currentStep === demoSteps.length - 1}
              onClick={() => {
                setCurrentStep((prev) => Math.min(demoSteps.length - 1, prev + 1));
                setIsPlaying(false);
              }}
              className="p-2 rounded-xl bg-universe-surface hover:bg-universe-card border border-universe-border text-universe-muted hover:text-white disabled:opacity-30"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handleLaunchLive}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-universe-violet to-universe-electric hover:from-universe-electric hover:to-universe-violet text-white font-display font-extrabold text-xs shadow-glow-violet transition-all flex items-center gap-2 hover:scale-105"
          >
            <span>Launch Live Environment →</span>
          </button>
        </div>
      </div>
    </div>
  );
};
