import React, { useState } from 'react';
import {
  PrescriptionPaper3D,
  Capsule3D
} from '../common/MedicalObjects';
import { Scan, CheckCircle2, ArrowRight, UploadCloud, RefreshCw } from 'lucide-react';
import { SAMPLE_PRESCRIPTIONS } from '../../data/mockMedications';

export const PrescriptionScannerDigital = ({ onAddExtractedMeds }) => {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_PRESCRIPTIONS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [extractedMolecules, setExtractedMolecules] = useState([
    { name: "Warfarin", dose: "5 MG", color: "coral" },
    { name: "Aspirin", dose: "75 MG", color: "coral" },
    { name: "Atorvastatin", dose: "20 MG", color: "cyan" }
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
          color: idx === 0 ? "coral" : idx === 1 ? "amber" : "cyan"
        }))
      );
    }, 1500);
  };

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b border-intel-border pb-4 mb-16 font-mono text-xs text-intel-muted">
        <span className="text-intel-cyan font-bold tracking-widest">[ 03 / SCAN ]</span>
        <span>OPTICAL PHARMACOPEIA EXTRACTION</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Scanner Frame (7 cols) */}
        <div className="lg:col-span-7 relative h-[520px] rounded-3xl intel-panel-glow border border-intel-cyan/40 p-8 flex flex-col justify-between overflow-hidden">
          {/* Animated Vertical Laser Beam */}
          {isScanning && <div className="animate-laser-beam" />}

          {/* Scanner Header */}
          <div className="flex items-center justify-between border-b border-intel-border pb-4 relative z-10 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Scan className="w-4 h-4 text-intel-cyan animate-pulse" />
              <span className="text-intel-ivory font-bold">DIGITAL INTAKE FRAME</span>
            </div>
            <span className="text-intel-cyan">OPTICAL RESOLUTION: 600 DPI</span>
          </div>

          {/* Center Floating Document Window */}
          <div className="my-auto flex flex-col items-center justify-center relative z-10 space-y-4">
            <div className="relative transform hover:scale-105 transition-transform">
              <PrescriptionPaper3D
                title={`SPECIMEN // ${selectedSample.id.toUpperCase()}`}
                doctor={selectedSample.doctorName}
                date="02 AUG 2026"
                size="md"
              />
            </div>

            {/* Live Status Ticker */}
            <div className="font-mono text-xs text-intel-lavender flex items-center gap-2 bg-intel-surface/90 px-4 py-1.5 rounded-full border border-intel-border">
              <span className="w-2 h-2 rounded-full bg-intel-cyan animate-ping" />
              <span>{isScanning ? "PROCESSING OCR MATRIX..." : `SPECIMEN LOADED: ${selectedSample.specialty}`}</span>
            </div>
          </div>

          {/* Bottom Preset Switcher */}
          <div className="pt-4 border-t border-intel-border flex flex-wrap items-center justify-between gap-3 relative z-10">
            <span className="font-mono text-[10px] text-intel-muted">TEST SPECIMENS:</span>
            <div className="flex items-center gap-2">
              {SAMPLE_PRESCRIPTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleScanSample(s)}
                  className={`px-3 py-1 rounded-lg font-mono text-xs font-bold border transition-all ${
                    selectedSample.id === s.id
                      ? 'bg-intel-cyan/20 border-intel-cyan text-intel-aqua shadow-sm'
                      : 'bg-intel-surface border-intel-border text-intel-muted hover:text-intel-ivory'
                  }`}
                >
                  {s.specialty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Extracted Objects Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-2">
            <span className="font-mono text-xs font-extrabold text-intel-cyan tracking-widest uppercase block">
              REAL-TIME MOLECULAR PARSING
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-intel-ivory font-display tracking-tight leading-tight">
              {extractedMolecules.length} MEDICINES <br />
              <span className="text-editorial-gradient">IDENTIFIED.</span>
            </h2>
          </div>

          <p className="text-sm text-intel-muted font-medium leading-relaxed">
            Prescription text is parsed, mapped to standardized RxNorm codes, and instantiated as interactive 3D payloads.
          </p>

          {/* Floating 3D Extracted Medicines List */}
          <div className="space-y-3">
            {extractedMolecules.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-intel-surface/80 border border-intel-border flex items-center justify-between animate-pop-in"
              >
                <Capsule3D name={m.name} dose={m.dose} color={m.color} size="md" />
                <span className="font-mono text-[10px] text-intel-mint flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  VERIFIED
                </span>
              </div>
            ))}
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <button
              onClick={() => onAddExtractedMeds && onAddExtractedMeds(selectedSample)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-intel-electric hover:bg-intel-violet text-white font-display font-extrabold text-sm shadow-violet-glow hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5"
            >
              <span>ADD TO MEDICATION PROFILE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
