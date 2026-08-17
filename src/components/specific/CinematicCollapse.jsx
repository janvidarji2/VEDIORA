import React, { useState } from 'react';
import {
  PatientProfileOrb,
  Capsule3D
} from '../common/MedicalObjects';
import { ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export const CinematicCollapse = ({ onProceedToOrbit }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const medications = [
    { name: "Warfarin", dose: "5 MG", color: "coral", spec: "Cardiology" },
    { name: "Aspirin", dose: "75 MG", color: "coral", spec: "Cardiology" },
    { name: "Metformin", dose: "1000 MG", color: "violet", spec: "Diabetology" },
    { name: "Glimepiride", dose: "2 MG", color: "amber", spec: "Diabetology" },
    { name: "Celecoxib", dose: "200 MG", color: "coral", spec: "Orthopedics" },
    { name: "Lisinopril", dose: "10 MG", color: "mint", spec: "General Medicine" }
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b border-intel-border pb-4 mb-16 font-mono text-xs text-intel-muted">
        <span className="text-intel-cyan font-bold tracking-widest">[ 01 / CONVERGENCE ]</span>
        <span>DIGITAL MEDICAL IDENTITY</span>
      </div>

      {/* Cinematic Editorial Statement Sequence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
        <div className="lg:col-span-6 space-y-6 text-left">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-intel-ivory font-display tracking-tight leading-[1.05]">
            ONE PATIENT. <br />
            <span className="text-intel-muted">MANY PRESCRIPTIONS.</span> <br />
            <span className="text-editorial-gradient">ONE COMPLETE VIEW.</span>
          </h2>

          <p className="text-sm sm:text-base text-intel-muted font-medium max-w-lg leading-relaxed">
            Prescriptions issued across separate clinics converge into a single, unified digital medication profile.
          </p>

          {/* 3 Large Editorial Numbers (Section 07) */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-intel-border">
            <div>
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-intel-ivory block">06</span>
              <span className="font-mono text-xs text-intel-cyan tracking-wider uppercase mt-1 block">MEDICINES</span>
            </div>
            <div>
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-intel-ivory block">03</span>
              <span className="font-mono text-xs text-intel-lavender tracking-wider uppercase mt-1 block">SPECIALISTS</span>
            </div>
            <div>
              <span className="font-display text-4xl sm:text-5xl font-extrabold text-intel-mint block">01</span>
              <span className="font-mono text-xs text-intel-mint tracking-wider uppercase mt-1 block">PROFILE</span>
            </div>
          </div>
        </div>

        {/* Right Digital Medical Identity Object (Section 07) */}
        <div className="lg:col-span-6 relative h-[480px] rounded-3xl intel-panel border border-intel-border overflow-hidden flex flex-col items-center justify-center p-8">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {/* Central Patient Orb */}
          <div className="relative z-20 mb-8">
            <PatientProfileOrb name="Rajesh Kumar" age="68M" medCount="Unified Safety Matrix" />
          </div>

          {/* Orbiting Capsule Grid */}
          <div className="relative z-20 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg">
            {medications.map((m, idx) => (
              <div
                key={idx}
                className="transform hover:scale-105 transition-transform"
              >
                <Capsule3D name={m.name} dose={m.dose} color={m.color} size="sm" />
              </div>
            ))}
          </div>

          {/* Bottom Trigger Action */}
          <div className="mt-8 relative z-20">
            <button
              onClick={onProceedToOrbit}
              className="px-6 py-2.5 rounded-xl bg-intel-surface border border-intel-border hover:border-intel-cyan text-intel-ivory text-xs font-mono font-bold transition-all flex items-center gap-2"
            >
              <span>TRACE MEDICINE ORIGINS</span>
              <ArrowRight className="w-3.5 h-3.5 text-intel-cyan" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
