import React, { useState } from 'react';
import {
  DoctorPatel,
  DoctorShah,
  DoctorMehta,
  ElderlyRajesh,
  PrescriptionSheet,
  MedicinePill
} from '../characters/Characters';
import { ArrowRight } from 'lucide-react';

export const WhoPrescribedWhat = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(0);

  const doctorsData = [
    {
      id: 0,
      name: "Dr. Patel",
      spec: "Diabetologist",
      clinic: "Apex Endocrine Center",
      rxId: "RX-DIA-4019",
      meds: [
        { name: "Metformin", dose: "500 mg", color: "violet" },
        { name: "Glimepiride", dose: "2 mg", color: "amber" }
      ]
    },
    {
      id: 1,
      name: "Dr. Shah",
      spec: "Cardiologist",
      clinic: "Metro Heart Institute",
      rxId: "RX-CRD-8821",
      meds: [
        { name: "Warfarin", dose: "5 mg", color: "coral" },
        { name: "Aspirin", dose: "75 mg", color: "coral" }
      ]
    },
    {
      id: 2,
      name: "Dr. Mehta",
      spec: "General Physician",
      clinic: "City Family Health",
      rxId: "RX-ORT-1194",
      meds: [
        { name: "Celecoxib", dose: "200 mg", color: "coral" }
      ]
    }
  ];

  const current = doctorsData[selectedDoctor];

  return (
    <section className="py-28 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
        <span className="font-mono text-xs font-extrabold text-vediora-lavender uppercase tracking-widest block">
          [ CROSS-SPECIALTY PROVENANCE ]
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-vediora-violet font-display tracking-tight leading-[0.95]">
          WHO PRESCRIBED <br />
          WHAT?
        </h2>
        <p className="text-sm text-vediora-muted font-medium">
          Click on any doctor to reveal their prescription slip and active molecules.
        </p>
      </div>

      {/* Main Free-Standing Character Trio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end justify-items-center mb-12">
        {/* Doctor 1 */}
        <div
          onClick={() => setSelectedDoctor(0)}
          className={`flex flex-col items-center cursor-pointer transition-all ${
            selectedDoctor === 0 ? 'scale-105' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <DoctorPatel size="lg" isHovered={selectedDoctor === 0} />
          <span className="font-mono text-xs font-extrabold text-vediora-violet mt-2">
            Dr. Patel · Diabetology
          </span>
        </div>

        {/* Doctor 2 */}
        <div
          onClick={() => setSelectedDoctor(1)}
          className={`flex flex-col items-center cursor-pointer transition-all ${
            selectedDoctor === 1 ? 'scale-105' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <DoctorShah size="lg" isHovered={selectedDoctor === 1} />
          <span className="font-mono text-xs font-extrabold text-vediora-violet mt-2">
            Dr. Shah · Cardiology
          </span>
        </div>

        {/* Doctor 3 */}
        <div
          onClick={() => setSelectedDoctor(2)}
          className={`flex flex-col items-center cursor-pointer transition-all ${
            selectedDoctor === 2 ? 'scale-105' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <DoctorMehta size="lg" isHovered={selectedDoctor === 2} />
          <span className="font-mono text-xs font-extrabold text-vediora-violet mt-2">
            Dr. Mehta · General Medicine
          </span>
        </div>
      </div>

      {/* Floating Active Prescription & Patient Convergence Hub */}
      <div className="max-w-3xl mx-auto rounded-[32px] bg-white border border-vediora-border shadow-paper p-8 flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Prescription Paper */}
        <div className="flex-1 space-y-3 text-left">
          <div className="flex items-center justify-between border-b border-vediora-border pb-2">
            <div>
              <span className="font-mono text-[10px] text-vediora-lavender font-extrabold uppercase block">{current.rxId}</span>
              <h4 className="font-display font-extrabold text-base text-vediora-violet">{current.name} — {current.clinic}</h4>
            </div>
            <span className="font-mono text-xs text-vediora-mint font-bold">VERIFIED</span>
          </div>

          <div className="space-y-2 pt-1">
            <span className="font-mono text-[10px] text-vediora-muted uppercase block">PRESCRIBED PAYLOAD:</span>
            <div className="flex flex-wrap gap-2">
              {current.meds.map((m, idx) => (
                <MedicinePill key={idx} name={m.name} dose={m.dose} color={m.color} />
              ))}
            </div>
          </div>
        </div>

        {/* Arrow to Patient */}
        <ArrowRight className="w-6 h-6 text-vediora-lavender hidden sm:block" />

        {/* Central Patient Recipient */}
        <div className="flex items-center gap-3">
          <ElderlyRajesh size="sm" />
          <div className="text-left">
            <span className="font-display font-extrabold text-sm text-vediora-violet block">Rajesh Kumar</span>
            <span className="font-mono text-[10px] text-vediora-muted">68 Yrs · Recipient</span>
          </div>
        </div>
      </div>
    </section>
  );
};
