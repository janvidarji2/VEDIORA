import React, { useState } from 'react';
import {
  PatientSticker,
  DoctorSticker,
  PrescriptionSticker,
  PillSticker
} from '../common/Stickers';
import { X, Sparkles } from 'lucide-react';

export const MedicationConstellation = () => {
  const [activeMed, setActiveMed] = useState(null);

  const nodes = [
    { id: 'm1', name: 'Warfarin', dose: '5 mg', freq: 'Once daily (Evening)', doctor: 'Dr. Shah (Cardio)', color: 'coral' },
    { id: 'm2', name: 'Aspirin', dose: '75 mg', freq: 'Once daily (Morning)', doctor: 'Dr. Shah (Cardio)', color: 'coral' },
    { id: 'm3', name: 'Metformin', dose: '1000 mg', freq: 'Twice daily', doctor: 'Dr. Patel (Diabetes)', color: 'purple' },
    { id: 'm4', name: 'Glimepiride', dose: '2 mg', freq: 'Once daily', doctor: 'Dr. Patel (Diabetes)', color: 'yellow' },
    { id: 'm5', name: 'Celecoxib', dose: '200 mg', freq: 'Once daily PRN', doctor: 'Dr. Mehta (Ortho)', color: 'peach' },
    { id: 'm6', name: 'Lisinopril', dose: '10 mg', freq: 'Once daily', doctor: 'Dr. Verma (GP)', color: 'mint' },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center select-none">
      {/* Small Section Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-extrabold mb-4">
        <span>🌐</span>
        <span>MEDICATION NETWORK</span>
      </div>

      {/* Large Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight mb-8">
        Your Medicine Ecosystem.
      </h2>

      {/* Main Interactive Visual Network Box */}
      <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border-2 border-purple-200 shadow-sticker relative">
        {/* Doctors Row */}
        <div className="flex flex-wrap items-center justify-around gap-6 pb-8 border-b-2 border-purple-100">
          <div className="flex items-center gap-2">
            <DoctorSticker specialty="Heart" size="md" />
            <div className="text-left">
              <span className="text-xs font-extrabold text-slate-900 block">Cardiology</span>
              <span className="text-[10px] text-purple-600 font-bold">2 Medicines</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DoctorSticker specialty="Diabetes" size="md" />
            <div className="text-left">
              <span className="text-xs font-extrabold text-slate-900 block">Diabetes</span>
              <span className="text-[10px] text-purple-600 font-bold">2 Medicines</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DoctorSticker specialty="Ortho" size="md" />
            <div className="text-left">
              <span className="text-xs font-extrabold text-slate-900 block">Orthopedics</span>
              <span className="text-[10px] text-purple-600 font-bold">1 Medicine</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <DoctorSticker specialty="GP" size="md" />
            <div className="text-left">
              <span className="text-xs font-extrabold text-slate-900 block">General Practice</span>
              <span className="text-[10px] text-purple-600 font-bold">1 Medicine</span>
            </div>
          </div>
        </div>

        {/* Center Patient with Interactive Clickable Medicine Nodes */}
        <div className="py-10 flex flex-col items-center justify-center">
          <div className="mb-6">
            <PatientSticker size="xl" />
          </div>

          <span className="text-xs font-bold text-slate-400 mb-4 block">
            Click any medicine to inspect:
          </span>

          {/* Interactive Medicine Pills Grid */}
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-xl">
            {nodes.map((med) => (
              <button
                key={med.id}
                onClick={() => setActiveMed(med)}
                className={`p-2.5 rounded-2xl border-2 transition-all flex items-center gap-2 ${
                  activeMed?.id === med.id
                    ? 'bg-purple-600 text-white border-purple-600 shadow-sticker scale-105'
                    : 'bg-purple-50 hover:bg-purple-100 border-purple-200 text-slate-900'
                }`}
              >
                <PillSticker color={med.color} size="sm" />
                <span className="text-xs font-extrabold">{med.name}</span>
                <span className="text-[10px] opacity-75 font-mono">{med.dose}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Floating Mini-Card (On Click) */}
        {activeMed && (
          <div className="mt-4 p-5 rounded-2xl bg-purple-50/90 border-2 border-purple-300 max-w-sm mx-auto text-left shadow-lg animate-pop-in relative">
            <button
              onClick={() => setActiveMed(null)}
              className="absolute top-3 right-3 p-1 text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <PillSticker color={activeMed.color} size="md" />
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">{activeMed.name}</h4>
                <span className="text-xs font-bold text-purple-700">{activeMed.dose}</span>
              </div>
            </div>

            <div className="text-xs text-slate-600 space-y-1 pt-1">
              <p>⏰ <strong>Schedule:</strong> {activeMed.freq}</p>
              <p>👨‍⚕️ <strong>Prescriber:</strong> {activeMed.doctor}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
