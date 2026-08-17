import React, { useState } from 'react';
import {
  MedicinePill,
  PrescriptionSheet
} from '../characters/Characters';
import { Scan, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SAMPLE_PRESCRIPTIONS } from '../../data/mockMedications';

export const FloatingPrescriptionScanner = ({ onAddExtractedMeds }) => {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_PRESCRIPTIONS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [extractedMolecules, setExtractedMolecules] = useState([
    { name: "Warfarin", dose: "5 mg", color: "coral" },
    { name: "Aspirin", dose: "75 mg", color: "coral" },
    { name: "Atorvastatin", dose: "20 mg", color: "mint" }
  ]);

  const handleScanSample = (sample) => {
    setSelectedSample(sample);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setExtractedMolecules(
        sample.medicinesDetected.map((m, idx) => ({
          name: m.name,
          dose: m.dosage,
          color: idx === 0 ? "coral" : idx === 1 ? "amber" : "violet"
        }))
      );
    }, 1400);
  };

  return (
    <section className="py-28 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
        <span className="font-mono text-xs font-extrabold text-vediora-lavender uppercase tracking-widest block">
          [ OPTICAL PARSING ]
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-vediora-violet font-display tracking-tight leading-[0.95]">
          DROP PRESCRIPTION.
        </h2>
        <p className="text-sm text-vediora-muted font-medium">
          Floating paper intake without rectangular forms.
        </p>
      </div>

      {/* Main Floating Scanner Canvas */}
      <div className="max-w-3xl mx-auto rounded-[36px] bg-white border border-vediora-border shadow-paper p-8 sm:p-12 space-y-8 text-center">
        {/* Floating Paper Prescription with Scanning Laser Line */}
        <div className="relative p-10 rounded-3xl bg-vediora-canvasMuted/50 border border-vediora-border flex flex-col items-center justify-center min-h-[260px] overflow-hidden">
          {/* Animated Laser Scanning Line */}
          {isScanning && <div className="animate-laser-scan-paper" />}

          <div className="transform hover:rotate-2 transition-transform">
            <PrescriptionSheet
              id={selectedSample.id.toUpperCase()}
              doctor={selectedSample.doctorName}
              meds={selectedSample.medicinesDetected.map(m => `${m.name} ${m.dosage}`)}
              size="md"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {SAMPLE_PRESCRIPTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScanSample(s)}
                className={`px-3 py-1 rounded-full font-mono text-xs font-bold border transition-all ${
                  selectedSample.id === s.id
                    ? 'bg-vediora-violet text-white border-vediora-violet'
                    : 'bg-white text-vediora-muted border-vediora-border hover:text-vediora-violet'
                }`}
              >
                {s.specialty} Rx
              </button>
            ))}
          </div>
        </div>

        {/* Extracted Medicines Heading & Output */}
        <div className="space-y-4">
          <span className="font-mono text-xs font-extrabold text-vediora-mint uppercase tracking-wider block">
            {extractedMolecules.length} MEDICINES FOUND
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {extractedMolecules.map((m, idx) => (
              <div key={idx} className="animate-pop-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <MedicinePill name={m.name} dose={m.dose} color={m.color} />
              </div>
            ))}
          </div>
        </div>

        {/* Primary Action Button */}
        <div className="pt-2">
          <button
            onClick={() => onAddExtractedMeds && onAddExtractedMeds(selectedSample)}
            className="px-8 py-4 rounded-full bg-vediora-violet hover:bg-vediora-deepViolet text-white font-display font-extrabold text-sm shadow-character hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>Add to Profile →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
