import React, { useState } from 'react';
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Microscope,
  FileText,
  Pill,
  User,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';

export const SpecialistsSelector = ({ onSelectSpecialist }) => {
  const [activeDoctorId, setActiveDoctorId] = useState('cardio');

  const doctors = [
    {
      id: 'cardio',
      name: 'Dr. Rahul Shah, MD DM',
      role: 'Cardiology Specialist',
      hospital: 'Metro Heart & Vascular Institute',
      icon: HeartPulse,
      theme: 'cyan',
      glow: 'border-cyan-500/50 shadow-glow-cyan',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      rxDate: '02 Aug 2026',
      rxNumber: 'RX-CRD-8821',
      medicines: [
        { name: 'Warfarin Sodium', dose: '5 mg', freq: 'Once daily (Evening)', class: 'Anticoagulant', warning: 'High Bleeding Synergy' },
        { name: 'Aspirin (Ecosprin)', dose: '75 mg', freq: 'Once daily (Morning)', class: 'Antiplatelet', warning: 'Duplicate Detected' },
        { name: 'Atorvastatin', dose: '20 mg', freq: 'Once daily (Bedtime)', class: 'Statin', warning: null }
      ]
    },
    {
      id: 'diab',
      name: 'Dr. Sneha Patel, MD',
      role: 'Diabetology & Endocrinology',
      hospital: 'Apex Diabetes Center',
      icon: Activity,
      theme: 'violet',
      glow: 'border-violet-500/50 shadow-glow-violet',
      badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
      rxDate: '20 Jul 2026',
      rxNumber: 'RX-DIA-4512',
      medicines: [
        { name: 'Metformin XR', dose: '1000 mg', freq: 'Twice daily with meals', class: 'Biguanide', warning: null },
        { name: 'Glimepiride', dose: '2 mg', freq: 'Once daily before breakfast', class: 'Sulfonylurea', warning: 'Hypoglycemia Risk' },
        { name: 'Sitagliptin', dose: '100 mg', freq: 'Once daily (Morning)', class: 'DPP-4 Inhibitor', warning: null }
      ]
    },
    {
      id: 'ortho',
      name: 'Dr. Vikram Mehta, MS',
      role: 'Orthopedic & Joint Care',
      hospital: 'Sunrise Orthopedic Clinic',
      icon: Stethoscope,
      theme: 'amber',
      glow: 'border-amber-500/50 shadow-glow-amber',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      rxDate: '10 Aug 2026',
      rxNumber: 'RX-ORT-9304',
      medicines: [
        { name: 'Celecoxib', dose: '200 mg', freq: 'Once daily PRN pain', class: 'COX-2 NSAID', warning: 'Metabolic CYP2C9 Lag' },
        { name: 'Disprin Protect (Aspirin)', dose: '75 mg', freq: 'Once daily (Morning)', class: 'Salicylate', warning: 'DUPLICATE OF ECOSPRIN' },
        { name: 'Calcium + Vit D3', dose: '500 mg', freq: 'Once daily with lunch', class: 'Mineral Supplement', warning: 'Thyroid Spacing Lag' }
      ]
    },
    {
      id: 'gp',
      name: 'Dr. Amit Verma, MD',
      role: 'General Practice & Internal Med',
      hospital: 'City Care Family Practice',
      icon: Microscope,
      theme: 'emerald',
      glow: 'border-emerald-500/50 shadow-glow-emerald',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      rxDate: '15 Jun 2026',
      rxNumber: 'RX-GP-1092',
      medicines: [
        { name: 'Lisinopril', dose: '10 mg', freq: 'Once daily morning', class: 'ACE Inhibitor', warning: null },
        { name: 'Levothyroxine', dose: '50 mcg', freq: 'Fasting 30m before breakfast', class: 'Thyroid Hormone', warning: 'Calcium Chelation Risk' },
        { name: 'Pantoprazole', dose: '40 mg', freq: 'Fasting morning', class: 'Proton Pump Inhibitor', warning: null }
      ]
    }
  ];

  const selectedDoc = doctors.find(d => d.id === activeDoctorId) || doctors[0];

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>SECTION 02 — CROSS-SPECIALTY PRESCRIPTION INTAKE</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
          Different Specialists. <br />
          <span className="text-gradient-ai">
            Same Patient.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Click or hover across the treating physicians below to inspect how individual prescriptions are structured, extracted, and interconnected.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Doctor Selection Cards (4 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2">
            Select Treating Doctor
          </p>

          {doctors.map((doc) => {
            const Icon = doc.icon;
            const isSelected = doc.id === activeDoctorId;

            return (
              <div
                key={doc.id}
                onClick={() => setActiveDoctorId(doc.id)}
                onMouseEnter={() => setActiveDoctorId(doc.id)}
                className={`p-5 rounded-2xl cursor-pointer border transition-all duration-300 flex items-center justify-between ${
                  isSelected
                    ? `bg-slate-900/90 ${doc.glow} scale-[1.02]`
                    : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/70 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isSelected
                        ? 'bg-gradient-to-tr from-cyan-500 to-violet-600 text-white shadow-md'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-display">{doc.name}</h3>
                    <p className="text-xs text-slate-400">{doc.role}</p>
                    <span className="text-[10px] text-slate-500 font-mono">{doc.hospital}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${doc.badgeColor}`}>
                    {doc.medicines.length} Meds
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Sliding Prescription & Interactive Medicine Stream (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-7 rounded-3xl border border-violet-500/30 bg-vediora-bg-surface/90 backdrop-blur-2xl shadow-elevated relative overflow-hidden">
            {/* Header with Prescription Metadata */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white font-display">
                      {selectedDoc.name}
                    </h3>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">
                      {selectedDoc.rxNumber}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Prescription Date: <strong className="text-slate-200">{selectedDoc.rxDate}</strong> • {selectedDoc.hospital}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>OCR Extracted</span>
              </div>
            </div>

            {/* Prescribed Medicines in this Slip */}
            <div className="mt-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Prescribed Medications ({selectedDoc.medicines.length})
              </p>

              {selectedDoc.medicines.map((med, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <Pill className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-bold text-white font-display">{med.name}</h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                          {med.dose}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {med.freq} • <span className="text-slate-500">{med.class}</span>
                      </p>
                    </div>
                  </div>

                  {med.warning && (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-red-500/10 border border-red-500/30 text-[10px] font-bold text-red-400">
                      <AlertTriangle className="w-3 h-3" />
                      <span>{med.warning}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Target Patient Flow Link */}
            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-cyan-400" />
                <span>Converging into <strong>John Doe's (68M)</strong> unified record</span>
              </div>
              <span className="text-cyan-400 font-bold flex items-center gap-1">
                Stream Connected <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
