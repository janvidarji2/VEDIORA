import React, { useState } from 'react';
import { ShieldCheck, Info, X, Stethoscope, FileText, CheckCircle2, AlertTriangle } from 'lucide-react';
import { ElderlyRajesh, DoctorPatel, DoctorShah, DoctorMehta } from '../characters/Characters';
import { Capsule3D, Tablet3D } from '../common/MedicineObjects3D';

export const MedicationProfileConstellation = () => {
  const [selectedMed, setSelectedMed] = useState(null);

  const medications = [
    {
      id: 'm1',
      name: 'Metformin',
      dose: '1000 mg',
      freq: 'Twice daily with meals',
      doctor: 'Dr. Patel (Diabetes Specialist)',
      rxId: 'RX-DIA-4019',
      riskStatus: 'Safe',
      riskColor: '#10B981',
      pos: { x: '22%', y: '30%' }
    },
    {
      id: 'm2',
      name: 'Glimepiride',
      dose: '2 mg',
      freq: 'Once daily with breakfast',
      doctor: 'Dr. Patel (Diabetes Specialist)',
      rxId: 'RX-DIA-4019',
      riskStatus: 'Safe',
      riskColor: '#10B981',
      pos: { x: '22%', y: '70%' }
    },
    {
      id: 'm3',
      name: 'Warfarin',
      dose: '5 mg',
      freq: 'Once daily in the evening',
      doctor: 'Dr. Shah (Cardiologist)',
      rxId: 'RX-CRD-8821',
      riskStatus: 'Moderate Attention',
      riskColor: '#EF4444',
      pos: { x: '78%', y: '25%' }
    },
    {
      id: 'm4',
      name: 'Aspirin',
      dose: '75 mg',
      freq: 'Once daily after breakfast',
      doctor: 'Dr. Shah (Cardiologist)',
      rxId: 'RX-CRD-8821',
      riskStatus: 'Moderate Attention',
      riskColor: '#F59E0B',
      pos: { x: '78%', y: '50%' }
    },
    {
      id: 'm5',
      name: 'Atorvastatin',
      dose: '20 mg',
      freq: 'Once daily at bedtime',
      doctor: 'Dr. Shah (Cardiologist)',
      rxId: 'RX-CRD-8821',
      riskStatus: 'Safe',
      riskColor: '#10B981',
      pos: { x: '78%', y: '75%' }
    },
    {
      id: 'm6',
      name: 'Celecoxib',
      dose: '200 mg',
      freq: 'As needed for joint inflammation',
      doctor: 'Dr. Mehta (General Physician)',
      rxId: 'RX-GP-1092',
      riskStatus: 'Safe',
      riskColor: '#10B981',
      pos: { x: '50%', y: '85%' }
    }
  ];

  return (
    <section id="section-profile" className="py-28 px-6 lg:px-16 max-w-[1540px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-16 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-cyan font-extrabold tracking-widest block">[ 01 / MEDICATION ECOSYSTEM ]</span>
          <span className="text-[11px]">DIGITAL MEDICATION CONSTELLATION</span>
        </div>
        <span className="text-universe-lavender font-bold flex items-center gap-2">
          <Info className="w-4 h-4 text-universe-cyan animate-pulse" />
          CLICK ANY MEDICINE NODE TO INSPECT DETAILS
        </span>
      </div>

      <div className="max-w-5xl mx-auto rounded-[36px] universe-panel shadow-rich-card p-8 sm:p-12 text-center space-y-8 relative overflow-hidden">
        {/* Constellation Canvas (Section 13 Requirement) */}
        <div className="relative h-[480px] flex items-center justify-center">
          {/* Animated Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {medications.map((med) => (
              <line
                key={med.id}
                x1="50%"
                y1="45%"
                x2={med.pos.x}
                y2={med.pos.y}
                stroke={selectedMed?.id === med.id ? '#06B6D4' : 'rgba(139, 92, 246, 0.25)'}
                strokeWidth={selectedMed?.id === med.id ? '3' : '1.5'}
                strokeDasharray={selectedMed?.id === med.id ? '8 4' : '4 4'}
                className="transition-all duration-300"
              />
            ))}
          </svg>

          {/* Left: Doctor 1 (Dr. Patel) */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
            <DoctorPatel size="sm" />
          </div>

          {/* Right: Doctor 2 (Dr. Shah) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
            <DoctorShah size="sm" />
          </div>

          {/* Center: Patient Hub (Rajesh Kumar) (Section 13) */}
          <div className="relative z-20 flex flex-col items-center">
            <ElderlyRajesh size="lg" />
          </div>

          {/* Orbiting Medicine Nodes (Section 13) */}
          {medications.map((med) => (
            <div
              key={med.id}
              style={{ left: med.pos.x, top: med.pos.y }}
              onClick={() => setSelectedMed(med)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-30 px-3.5 py-2 rounded-full universe-panel border shadow-sm transition-all cursor-pointer hover:scale-110 ${
                selectedMed?.id === med.id
                  ? 'border-universe-cyan shadow-glow-cyan scale-110 bg-universe-surface'
                  : 'border-universe-border hover:border-universe-cyan'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: med.riskColor }} />
                <span className="font-display font-extrabold text-xs text-white">{med.name}</span>
                <span className="font-mono text-[9px] text-universe-cyan font-bold">{med.dose}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Detail Card (On Click) (Section 13 Requirement) */}
        {selectedMed && (
          <div className="p-6 rounded-3xl bg-universe-surface border border-universe-cyan/40 shadow-glow-cyan max-w-lg mx-auto text-left space-y-3 animate-pop-in relative z-40">
            <div className="flex items-center justify-between border-b border-universe-border pb-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedMed.riskColor }} />
                <h4 className="font-display font-extrabold text-base text-white">
                  {selectedMed.name} ({selectedMed.dose})
                </h4>
              </div>
              <button
                onClick={() => setSelectedMed(null)}
                className="p-1 rounded-lg text-universe-muted hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 font-mono text-xs text-universe-muted">
              <div>
                <span className="text-[10px] text-universe-cyan block uppercase">Frequency:</span>
                <span className="text-white font-bold">{selectedMed.freq}</span>
              </div>
              <div>
                <span className="text-[10px] text-universe-lavender block uppercase">Prescribing Doctor:</span>
                <span className="text-white font-bold">{selectedMed.doctor}</span>
              </div>
              <div>
                <span className="text-[10px] text-universe-muted block uppercase">Source Prescription:</span>
                <span className="text-universe-cyan font-bold">{selectedMed.rxId}</span>
              </div>
              <div>
                <span className="text-[10px] text-universe-mint block uppercase">Risk Status:</span>
                <span className="font-bold" style={{ color: selectedMed.riskColor }}>{selectedMed.riskStatus}</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Bar: Complete Digital Ecosystem */}
        <div className="pt-6 border-t border-universe-border flex flex-wrap items-center justify-between font-mono text-xs text-universe-muted gap-2">
          <span>6 MOLECULES • 3 PRESCRIBING SPECIALISTS</span>
          <div className="flex items-center gap-1.5 text-universe-mint font-bold">
            <ShieldCheck className="w-4 h-4 text-universe-mint" />
            <span>UNIFIED RECONCILED ECOSYSTEM</span>
          </div>
        </div>
      </div>
    </section>
  );
};
