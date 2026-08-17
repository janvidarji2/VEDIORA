import React, { useState } from 'react';
import {
  DoctorPatel,
  DoctorShah,
  DoctorMehta,
  ElderlyRajesh,
  VEDIAssistant,
  PrescriptionSheet,
  MedicinePill
} from '../characters/Characters';
import { ArrowRight, Sparkles, Check, RefreshCw } from 'lucide-react';

export const PrescriptionHandoffInteractive = () => {
  const [handoffStep, setHandoffStep] = useState(0); // 0: None, 1: Dr. Patel, 2: Dr. Shah, 3: Dr. Mehta (All delivered)

  const deliveredMeds = [
    { name: "Metformin", dose: "500 mg", color: "violet", by: "Dr. Patel" },
    { name: "Warfarin", dose: "5 mg", color: "coral", by: "Dr. Shah" },
    { name: "Aspirin", dose: "75 mg", color: "coral", by: "Dr. Shah" },
    { name: "Celecoxib", dose: "200 mg", color: "amber", by: "Dr. Mehta" }
  ];

  return (
    <section className="py-28 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="text-center max-w-xl mx-auto space-y-4 mb-16">
        <span className="font-mono text-xs font-extrabold text-vediora-lavender uppercase tracking-widest block">
          [ SIGNATURE INTERACTION ]
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-vediora-violet font-display tracking-tight leading-[0.95]">
          THE PRESCRIPTION <br />
          HANDOFF.
        </h2>
        <p className="text-sm text-vediora-muted font-medium">
          Click each specialist to hand off their prescription to Rajesh.
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative min-h-[580px] rounded-[36px] bg-gradient-to-b from-white/90 via-vediora-canvasMuted/50 to-white/90 border border-vediora-border shadow-paper p-8 flex flex-col justify-between overflow-hidden">
        {/* Doctors Stage Top Row */}
        <div className="grid grid-cols-3 gap-4 items-end justify-items-center relative z-20 pb-4">
          {/* Doctor 1 */}
          <div
            onClick={() => setHandoffStep(1)}
            className={`flex flex-col items-center cursor-pointer transition-all ${handoffStep >= 1 ? 'opacity-50 scale-95' : 'hover:scale-105'}`}
          >
            <DoctorPatel size="md" isHovered={handoffStep === 0} />
            <button className="mt-2 px-3 py-1 rounded-full bg-vediora-paleLavender text-vediora-violet font-mono text-[10px] font-extrabold border border-vediora-lavender/30">
              {handoffStep >= 1 ? "✓ Handed Off" : "1. Hand Off Rx"}
            </button>
          </div>

          {/* Doctor 2 */}
          <div
            onClick={() => setHandoffStep(2)}
            className={`flex flex-col items-center cursor-pointer transition-all ${handoffStep >= 2 ? 'opacity-50 scale-95' : 'hover:scale-105'}`}
          >
            <DoctorShah size="md" isHovered={handoffStep === 1} />
            <button className="mt-2 px-3 py-1 rounded-full bg-vediora-paleLavender text-vediora-violet font-mono text-[10px] font-extrabold border border-vediora-lavender/30">
              {handoffStep >= 2 ? "✓ Handed Off" : "2. Hand Off Rx"}
            </button>
          </div>

          {/* Doctor 3 */}
          <div
            onClick={() => setHandoffStep(3)}
            className={`flex flex-col items-center cursor-pointer transition-all ${handoffStep >= 3 ? 'opacity-50 scale-95' : 'hover:scale-105'}`}
          >
            <DoctorMehta size="md" isHovered={handoffStep === 2} />
            <button className="mt-2 px-3 py-1 rounded-full bg-vediora-paleLavender text-vediora-violet font-mono text-[10px] font-extrabold border border-vediora-lavender/30">
              {handoffStep >= 3 ? "✓ Handed Off" : "3. Hand Off Rx"}
            </button>
          </div>
        </div>

        {/* Center Delivering Animation & Patient Hub */}
        <div className="my-auto py-6 flex flex-col items-center justify-center relative z-20">
          <div className="relative">
            <ElderlyRajesh size="lg" />

            {/* Orbiting Delivered Medicines */}
            {handoffStep >= 1 && (
              <div className="absolute -top-4 -left-16 animate-pop-in">
                <MedicinePill name="Metformin" dose="500 mg" color="violet" />
              </div>
            )}
            {handoffStep >= 2 && (
              <>
                <div className="absolute -top-6 -right-16 animate-pop-in" style={{ animationDelay: '100ms' }}>
                  <MedicinePill name="Warfarin" dose="5 mg" color="coral" />
                </div>
                <div className="absolute -bottom-2 -left-20 animate-pop-in" style={{ animationDelay: '200ms' }}>
                  <MedicinePill name="Aspirin" dose="75 mg" color="coral" />
                </div>
              </>
            )}
            {handoffStep >= 3 && (
              <div className="absolute -bottom-2 -right-20 animate-pop-in" style={{ animationDelay: '300ms' }}>
                <MedicinePill name="Celecoxib" dose="200 mg" color="amber" />
              </div>
            )}
          </div>
        </div>

        {/* Bottom VEDI AI Wake-up (Section 22 Climax) */}
        <div className="pt-4 border-t border-vediora-border flex flex-col sm:flex-row items-center justify-between gap-4 relative z-20">
          {handoffStep >= 3 ? (
            <div className="flex items-center gap-3 animate-pop-in">
              <VEDIAssistant size="sm" isChecking={true} />
              <div className="text-left">
                <span className="font-display font-extrabold text-sm text-vediora-violet block">
                  VEDI WOKE UP!
                </span>
                <span className="font-mono text-xs text-vediora-mint font-bold">
                  All 3 Prescriptions Joined. AI Safety Check Ready.
                </span>
              </div>
            </div>
          ) : (
            <span className="font-mono text-xs text-vediora-muted">
              Step {handoffStep} of 3 prescriptions delivered
            </span>
          )}

          <button
            onClick={() => setHandoffStep(0)}
            className="px-4 py-1.5 rounded-full bg-white hover:bg-vediora-canvasMuted border border-vediora-border text-vediora-charcoal text-xs font-mono font-bold transition-all flex items-center gap-1.5"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Flow</span>
          </button>
        </div>
      </div>
    </section>
  );
};
