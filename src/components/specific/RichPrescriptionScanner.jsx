import React, { useState } from 'react';
import { Capsule3D, Tablet3D, Bottle3D } from '../common/MedicineObjects3D';
import { Scan, ArrowRight, CheckCircle2, FileText, Sparkles, Upload, FileUp, Cpu } from 'lucide-react';
import { SAMPLE_PRESCRIPTIONS } from '../../data/mockMedications';

export const RichPrescriptionScanner = ({ onAddExtractedMeds }) => {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_PRESCRIPTIONS[0]);
  const [scanStep, setScanStep] = useState(0); // 0: Idle, 1: Scanning, 2: Detected, 3: Dosage/Freq, 4: Ready
  const [isDragOver, setIsDragOver] = useState(false);
  const [customFile, setCustomFile] = useState(null);

  const handleStartScan = (sample) => {
    setSelectedSample(sample);
    setScanStep(1);
    setTimeout(() => setScanStep(2), 500);
    setTimeout(() => setScanStep(3), 1000);
    setTimeout(() => setScanStep(4), 1600);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomFile(file.name);
      handleStartScan(selectedSample);
    }
  };

  return (
    <section id="section-scanner" className="py-28 px-6 lg:px-16 max-w-[1540px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-16 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-cyan font-extrabold tracking-widest block">[ 03 / HOLOGRAPHIC SCANNER ]</span>
          <span className="text-[11px]">OPTICAL PRESCRIPTION DIGITIZATION & CYP450 NORMALIZATION</span>
        </div>
        <span className="text-universe-mint font-bold flex items-center gap-2">
          <Cpu className="w-4 h-4 text-universe-mint animate-pulse" />
          PNG • JPG • PDF READY
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Scanner Canvas & Dropzone (7 cols) (Section 12 Requirement) */}
        <div className="lg:col-span-7 relative p-8 sm:p-12 rounded-[36px] universe-panel flex flex-col items-center justify-center min-h-[500px] overflow-hidden shadow-glow-core">
          {/* Laser Scanning Line */}
          {scanStep >= 1 && scanStep < 4 && <div className="animate-laser-scan-rich" />}

          {/* Large Glowing Scanner Frame with Dropzone (Section 12 Requirement) */}
          <div
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragOver(false);
              const file = e.dataTransfer.files?.[0];
              if (file) {
                setCustomFile(file.name);
                handleStartScan(selectedSample);
              }
            }}
            className={`relative z-10 p-6 sm:p-8 rounded-3xl bg-white text-slate-900 w-84 max-w-full shadow-2xl space-y-4 transform transition-all duration-300 border-2 ${
              isDragOver ? 'border-universe-cyan scale-105 shadow-glow-cyan' : 'border-slate-200'
            }`}
          >
            {/* Header & Specialty Badge */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="font-mono text-xs font-black text-universe-electric uppercase tracking-wider block">
                  {selectedSample.id.toUpperCase()}
                </span>
                <span className="font-mono text-[10px] text-slate-500 font-bold">{selectedSample.specialty} Rx</span>
              </div>
              <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-universe-violet font-mono text-xs font-extrabold">
                Rx
              </div>
            </div>

            {/* Extracted or Sample Medication Rows */}
            <div className="space-y-2 font-mono text-xs text-left">
              {selectedSample.medicinesDetected.map((m, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900">{m.name}</span>
                  <span className="text-universe-violet font-semibold">{m.dosage}</span>
                </div>
              ))}
            </div>

            {/* Doctor Signature & Drop Target */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between font-mono text-[9px] text-slate-500">
              <span>{selectedSample.doctorName}</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                OPTICALLY SIGNED
              </span>
            </div>

            {/* File Upload Drop Target */}
            <label className="block pt-2 cursor-pointer">
              <input type="file" accept=".png,.jpg,.jpeg,.pdf" className="hidden" onChange={handleFileUpload} />
              <div className="p-3 rounded-2xl border-2 border-dashed border-slate-300 hover:border-universe-violet text-center font-mono text-[10px] text-slate-600 transition-colors">
                <Upload className="w-4 h-4 mx-auto text-universe-violet mb-1" />
                <span className="font-bold">Drop prescription here</span>
                <span className="block text-[9px] text-slate-400">Supports PNG, JPG, PDF</span>
              </div>
            </label>
          </div>

          {/* Emerging 3D Medicines upon scan completion */}
          {scanStep >= 3 && (
            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex items-center justify-between z-30 pointer-events-none animate-pop-in">
              <div className="animate-float-slow">
                <Capsule3D name="Metformin" dose="1000mg" freq="Twice daily" doctor="Dr. Patel" topColor="#8B5CF6" />
              </div>
              <div className="animate-float-slow" style={{ animationDelay: '1s' }}>
                <Tablet3D name="Aspirin" dose="75mg" freq="Once daily" doctor="Dr. Shah" color="#FFFFFF" scoreColor="#CBD5E1" />
              </div>
              <div className="animate-float-slow" style={{ animationDelay: '2s' }}>
                <Tablet3D name="Warfarin" dose="5mg" freq="Daily" doctor="Dr. Shah" color="#EF4444" scoreColor="#FFFFFF" />
              </div>
            </div>
          )}

          {/* Sample Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8 z-20">
            {SAMPLE_PRESCRIPTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => handleStartScan(s)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-bold border transition-all ${
                  selectedSample.id === s.id
                    ? 'bg-universe-cyan text-universe-void border-universe-cyan shadow-glow-cyan scale-105'
                    : 'bg-universe-surface text-universe-muted border-universe-border hover:text-white'
                }`}
              >
                Scan {s.specialty} Rx
              </button>
            ))}
          </div>
        </div>

        {/* Right Stepper Pipeline & Headline (5 cols) (Section 12 Requirement) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-2">
            <span className="font-mono text-xs font-extrabold text-universe-cyan uppercase tracking-widest block">
              PRESCRIPTION UPLOAD & PARSER
            </span>
            {/* Section 12 Headline */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Bring Your Prescriptions <br />
              <span className="bg-gradient-to-r from-universe-cyan via-universe-aqua to-universe-lavender bg-clip-text text-transparent">
                Together.
              </span>
            </h2>
          </div>

          <p className="text-sm text-universe-muted font-medium leading-relaxed">
            Prescription papers are optically parsed in milliseconds. Standard active compounds, dosages, and schedules are extracted into unified clinical representations.
          </p>

          {/* 5 Checklist Items (Section 12 Requirement) */}
          <div className="space-y-2.5 font-mono text-xs">
            <div className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
              scanStep >= 1 ? 'bg-universe-surface border-universe-cyan text-universe-cyan shadow-sm' : 'bg-universe-surface/40 border-universe-border text-universe-muted'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${scanStep >= 1 ? 'text-universe-cyan' : 'text-universe-muted'}`} />
                <span>Prescription detected</span>
              </div>
              <span className="font-bold">{scanStep >= 1 ? "✓ 100%" : "PENDING"}</span>
            </div>

            <div className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
              scanStep >= 2 ? 'bg-universe-surface border-universe-violet text-universe-violet shadow-sm' : 'bg-universe-surface/40 border-universe-border text-universe-muted'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${scanStep >= 2 ? 'text-universe-violet' : 'text-universe-muted'}`} />
                <span>Medicine names extracted</span>
              </div>
              <span className="font-bold">{scanStep >= 2 ? "✓ 4 DETECTED" : "PENDING"}</span>
            </div>

            <div className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
              scanStep >= 3 ? 'bg-universe-surface border-universe-lavender text-universe-lavender shadow-sm' : 'bg-universe-surface/40 border-universe-border text-universe-muted'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${scanStep >= 3 ? 'text-universe-lavender' : 'text-universe-muted'}`} />
                <span>Dosage identified</span>
              </div>
              <span className="font-bold">{scanStep >= 3 ? "✓ POSOLOGY" : "PENDING"}</span>
            </div>

            <div className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
              scanStep >= 3 ? 'bg-universe-surface border-universe-amber text-universe-amber shadow-sm' : 'bg-universe-surface/40 border-universe-border text-universe-muted'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${scanStep >= 3 ? 'text-universe-amber' : 'text-universe-muted'}`} />
                <span>Frequency identified</span>
              </div>
              <span className="font-bold">{scanStep >= 3 ? "✓ SCHEDULED" : "PENDING"}</span>
            </div>

            <div className={`p-3 rounded-2xl border flex items-center justify-between transition-all ${
              scanStep >= 4 ? 'bg-universe-surface border-universe-mint text-universe-mint shadow-sm' : 'bg-universe-surface/40 border-universe-border text-universe-muted'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${scanStep >= 4 ? 'text-universe-mint' : 'text-universe-muted'}`} />
                <span>Ready for safety analysis</span>
              </div>
              <span className="font-bold">{scanStep >= 4 ? "✓ VERIFIED" : "PENDING"}</span>
            </div>
          </div>

          {/* Button: "Add to Medication Profile" (Section 12 Requirement) */}
          <div className="pt-2">
            <button
              onClick={() => onAddExtractedMeds && onAddExtractedMeds(selectedSample)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-universe-violet via-universe-electric to-universe-cyan hover:scale-105 text-white font-display font-extrabold text-xs shadow-glow-violet transition-all inline-flex items-center gap-2"
            >
              <span>Add to Medication Profile →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
