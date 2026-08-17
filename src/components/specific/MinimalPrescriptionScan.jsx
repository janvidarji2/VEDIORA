import React, { useState } from 'react';
import { Scan, ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import { SAMPLE_PRESCRIPTIONS } from '../../data/mockMedications';

export const MinimalPrescriptionScan = ({ onAddExtractedMeds }) => {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_PRESCRIPTIONS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [foundItems, setFoundItems] = useState([
    { name: "Metformin", dose: "500 mg", color: "purple" },
    { name: "Aspirin", dose: "75 mg", color: "coral" },
    { name: "Atorvastatin", dose: "10 mg", color: "cyan" },
    { name: "Glimepiride", dose: "2 mg", color: "amber" }
  ]);

  const handleScan = (sample) => {
    setSelectedSample(sample);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setFoundItems(
        sample.medicinesDetected.map((m, idx) => ({
          name: m.name,
          dose: m.dosage,
          color: idx === 0 ? "purple" : idx === 1 ? "coral" : idx === 2 ? "cyan" : "amber"
        }))
      );
    }, 1300);
  };

  return (
    <section id="section-scan" className="py-24 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b border-minimal-border pb-4 mb-16 font-mono text-xs text-minimal-muted">
        <span className="text-minimal-violet font-extrabold tracking-widest">[ 02 / SCAN PRESCRIPTION ]</span>
        <span>OPTICAL INGESTION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Floating Paper Scanner (6 cols) */}
        <div className="lg:col-span-6 relative p-8 sm:p-12 rounded-[32px] bg-white border border-minimal-border shadow-minimal flex flex-col items-center justify-center min-h-[340px] overflow-hidden">
          {/* Animated Scanning Line */}
          {isScanning && <div className="animate-laser-scan-minimal" />}

          <div className="p-6 rounded-2xl bg-minimal-bgSurface border border-minimal-border text-center space-y-3 transform hover:scale-105 transition-transform cursor-pointer">
            <span className="text-3xl block">📄</span>
            <div>
              <span className="font-mono text-xs font-extrabold text-minimal-violet uppercase block">
                {selectedSample.specialty} PRESCRIPTION
              </span>
              <span className="font-mono text-[10px] text-minimal-muted">
                {selectedSample.doctorName}
              </span>
            </div>
          </div>

          {/* Sample Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {SAMPLE_PRESCRIPTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScan(s)}
                className={`px-3 py-1 rounded-full font-mono text-xs font-bold border transition-all ${
                  selectedSample.id === s.id
                    ? 'bg-minimal-violet text-white border-minimal-violet'
                    : 'bg-white text-minimal-muted border-minimal-border hover:text-minimal-violet'
                }`}
              >
                {s.specialty}
              </button>
            ))}
          </div>
        </div>

        {/* Right Extracted Medicine Tokens (6 cols) */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <div className="space-y-2">
            <span className="font-mono text-xs font-extrabold text-minimal-purple uppercase tracking-widest block">
              REAL-TIME OCR EXTRACTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-minimal-violet font-display tracking-tight">
              {foundItems.length} Medicines Found.
            </h2>
          </div>

          <p className="text-sm text-minimal-muted font-medium max-w-md leading-relaxed">
            Prescription tokens are normalized against clinical formulary databases without requiring manual entry.
          </p>

          {/* Extracted Token List */}
          <div className="grid grid-cols-2 gap-3 max-w-md">
            {foundItems.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white border border-minimal-border flex items-center justify-between shadow-sm animate-pop-in"
              >
                <div>
                  <span className="font-display font-extrabold text-xs text-minimal-violet block">{item.name}</span>
                  <span className="font-mono text-[10px] text-minimal-muted">{item.dose}</span>
                </div>
                <CheckCircle2 className="w-4 h-4 text-minimal-mint" />
              </div>
            ))}
          </div>

          {/* Add to Profile Action */}
          <div className="pt-2">
            <button
              onClick={() => onAddExtractedMeds && onAddExtractedMeds(selectedSample)}
              className="px-8 py-3.5 rounded-full bg-minimal-violet hover:bg-minimal-deepViolet text-white font-display font-extrabold text-xs shadow-minimal hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <span>Add to Medication Profile →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
