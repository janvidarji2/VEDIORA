import React, { useState } from 'react';
import {
  PrescriptionSticker,
  PillSticker
} from '../common/Stickers';
import { UploadCloud, CheckCircle2, ArrowRight, RefreshCw, Scan } from 'lucide-react';
import { SAMPLE_PRESCRIPTIONS } from '../../data/mockMedications';

export const PrescriptionScannerInteractive = ({ onAddExtractedMeds }) => {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_PRESCRIPTIONS[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [foundItems, setFoundItems] = useState([
    { name: 'Warfarin', dose: '5 mg', color: 'coral' },
    { name: 'Aspirin', dose: '75 mg', color: 'coral' },
    { name: 'Atorvastatin', dose: '20 mg', color: 'purple' }
  ]);

  const handleScanSample = (sample) => {
    setSelectedSample(sample);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      setFoundItems(
        sample.medicinesDetected.map((m, idx) => ({
          name: m.name,
          dose: m.dosage,
          color: idx === 0 ? 'coral' : idx === 1 ? 'peach' : 'purple'
        }))
      );
    }, 1400);
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center select-none">
      {/* Small Section Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-800 text-xs font-extrabold mb-4">
        <span>🔍</span>
        <span>SCANNER</span>
      </div>

      {/* Large Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight mb-8">
        Drop. Scan. Done.
      </h2>

      {/* Main Illustrated Scanner Box */}
      <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border-2 border-purple-200 shadow-sticker space-y-8">
        {/* Prescription Dropzone Window */}
        <div className="relative p-8 rounded-3xl bg-purple-50/70 border-2 border-dashed border-purple-300 flex flex-col items-center justify-center space-y-4 overflow-hidden min-h-[260px]">
          {/* Animated Scanning Beam */}
          {isScanning && <div className="animate-scan-beam" />}

          <PrescriptionSticker size="xl" />

          <div className="text-center">
            <span className="text-sm font-extrabold text-purple-950 block">Drop Prescription Here</span>
            <span className="text-xs font-bold text-purple-500">PNG • JPG • PDF</span>
          </div>

          {/* Preset Buttons for 1-Click Testing */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {SAMPLE_PRESCRIPTIONS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => handleScanSample(sample)}
                className={`px-3 py-1 rounded-xl text-xs font-extrabold border transition-all ${
                  selectedSample.id === sample.id
                    ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                    : 'bg-white text-purple-900 border-purple-200 hover:bg-purple-100'
                }`}
              >
                {sample.specialty} Rx
              </button>
            ))}
          </div>
        </div>

        {/* Popping Medicine Stickers Output */}
        <div className="space-y-3">
          <span className="text-xs font-extrabold text-slate-700 uppercase tracking-wider block">
            {foundItems.length} Medicines Detected
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {foundItems.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center gap-2.5 shadow-sm animate-pop-in"
              >
                <PillSticker color={item.color} size="sm" />
                <div className="text-left">
                  <span className="text-xs font-extrabold text-slate-900 block truncate">{item.name}</span>
                  <span className="text-[11px] font-bold text-emerald-700">{item.dose}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: Add to Profile */}
        <div className="pt-2">
          <button
            onClick={() => onAddExtractedMeds && onAddExtractedMeds(selectedSample)}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm shadow-sticker hover:scale-105 transition-all inline-flex items-center justify-center gap-2"
          >
            <span>Add to Profile →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
