import React, { useState } from 'react';
import {
  DoctorNodeObject,
  PrescriptionPaper3D,
  Capsule3D,
  PatientProfileOrb
} from '../common/MedicalObjects';
import { ArrowRight, Sparkles, Plus } from 'lucide-react';

export const DoctorPrescriptionOrbit = () => {
  const [activeDoc, setActiveDoc] = useState(0);

  const doctors = [
    {
      id: 0,
      name: "Dr. Rahul Shah",
      role: "Cardiology",
      hospital: "Metro Heart Institute",
      icon: "❤️",
      rxId: "RX-CRD-8821",
      date: "02 AUG 2026",
      meds: [
        { name: "Warfarin", dose: "5 MG", color: "coral" },
        { name: "Aspirin", dose: "75 MG", color: "coral" },
        { name: "Atorvastatin", dose: "20 MG", color: "cyan" }
      ]
    },
    {
      id: 1,
      name: "Dr. Ananya Patel",
      role: "Diabetology & Endocrine",
      hospital: "Apex Care Center",
      icon: "⚡",
      rxId: "RX-DIA-4019",
      date: "28 JUL 2026",
      meds: [
        { name: "Metformin", dose: "1000 MG", color: "violet" },
        { name: "Glimepiride", dose: "2 MG", color: "amber" }
      ]
    },
    {
      id: 2,
      name: "Dr. Vikram Mehta",
      role: "Orthopedics & Spine",
      hospital: "City Joint Clinic",
      icon: "🦴",
      rxId: "RX-ORT-1194",
      date: "14 JUL 2026",
      meds: [
        { name: "Celecoxib", dose: "200 MG", color: "coral" },
        { name: "Calcium + D3", dose: "500 MG", color: "mint" }
      ]
    }
  ];

  const currentDoctor = doctors[activeDoc];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b border-intel-border pb-4 mb-16 font-mono text-xs text-intel-muted">
        <span className="text-intel-cyan font-bold tracking-widest">[ 02 / ORIGIN ]</span>
        <span>PRESCRIBER NETWORK & RX STREAM</span>
      </div>

      {/* Asymmetric Section Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Headline (4 cols) */}
        <div className="lg:col-span-4 space-y-6 text-left">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-intel-ivory font-display tracking-tight leading-[0.95]">
            WHERE DID <br />
            <span className="text-editorial-gradient">THESE MEDICINES</span> <br />
            COME FROM?
          </h2>

          <p className="text-sm text-intel-muted font-medium leading-relaxed">
            Select or hover any prescriber to inspect their siloed prescription and extracted molecular payloads.
          </p>

          {/* Doctor Selector List */}
          <div className="space-y-3 pt-4">
            {doctors.map((doc, idx) => (
              <div
                key={doc.id}
                onMouseEnter={() => setActiveDoc(idx)}
                onClick={() => setActiveDoc(idx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  activeDoc === idx
                    ? 'bg-intel-surface border-intel-cyan shadow-cyan-glow'
                    : 'bg-intel-base/60 border-intel-border hover:border-intel-borderHover'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{doc.icon}</span>
                  <div>
                    <h4 className="text-sm font-extrabold text-intel-ivory">{doc.name}</h4>
                    <span className="font-mono text-xs text-intel-cyan">{doc.role}</span>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-intel-muted">{doc.meds.length} Meds</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Interactive Orbit Viewer (8 cols) */}
        <div className="lg:col-span-8 relative min-h-[500px] rounded-3xl intel-panel border border-intel-border p-8 flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

          {/* Top Bar with Active Doctor Meta */}
          <div className="flex items-center justify-between border-b border-intel-border pb-4 relative z-10">
            <div>
              <span className="font-mono text-xs font-bold text-intel-lavender uppercase tracking-wider block">
                ACTIVE RX SOURCE
              </span>
              <h3 className="font-display text-lg font-extrabold text-intel-ivory">
                {currentDoctor.name} — {currentDoctor.hospital}
              </h3>
            </div>
            <span className="font-mono text-xs text-intel-cyan px-3 py-1 rounded-full bg-intel-cyan/10 border border-intel-cyan/30">
              {currentDoctor.rxId}
            </span>
          </div>

          {/* Center Prescription Slide & Emerging Medicines */}
          <div className="my-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Prescription Document */}
            <div className="flex justify-center">
              <PrescriptionPaper3D
                title={currentDoctor.rxId}
                doctor={currentDoctor.name}
                date={currentDoctor.date}
                size="md"
              />
            </div>

            {/* Emerging Medicines Connecting to Patient */}
            <div className="space-y-4 text-left">
              <span className="font-mono text-[11px] font-extrabold text-intel-muted uppercase tracking-wider block">
                EXTRACTED PHARMACOPEIA PAYLOAD:
              </span>

              <div className="space-y-2.5">
                {currentDoctor.meds.map((m, idx) => (
                  <div
                    key={idx}
                    className="animate-pop-in"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <Capsule3D name={m.name} dose={m.dose} color={m.color} size="md" />
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-intel-border flex items-center gap-2 text-xs font-mono text-intel-mint">
                <span className="w-2 h-2 rounded-full bg-intel-mint animate-pulse" />
                <span>STREAMED DIRECTLY INTO PATIENT PROFILE</span>
              </div>
            </div>
          </div>

          {/* Bottom Patient Anchor */}
          <div className="pt-4 border-t border-intel-border flex items-center justify-between relative z-10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-intel-muted">TARGET RECIPIENT:</span>
              <span className="font-display text-sm font-extrabold text-intel-ivory">Rajesh Kumar (68M)</span>
            </div>
            <span className="font-mono text-[10px] text-intel-lavender">ORIGIN VERIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
