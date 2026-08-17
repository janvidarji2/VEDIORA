import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  FileText,
  Sparkles,
  Plus,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Zap,
  Image as ImageIcon,
  Clock,
  Stethoscope
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';
import { SAMPLE_PRESCRIPTIONS } from '../data/mockMedications';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';

export const UploadPrescription = () => {
  const {
    navigateTo,
    loadSamplePrescription,
    addMedication,
    ocrStage,
    setOcrStage,
    addToast
  } = useMedication();

  const fileInputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState(null);

  // Manual Medicine Entry state
  const [manualMed, setManualMed] = useState({
    name: '',
    dosage: '',
    frequency: 'Once daily',
    prescribedBy: '',
    specialist: 'General Physician'
  });

  const OCR_STEPS = [
    { id: 'uploading', label: 'Uploading prescription file...' },
    { id: 'reading', label: 'Reading optical characters (OCR)...' },
    { id: 'extracting', label: 'Extracting medicine names & dosages...' },
    { id: 'standardizing', label: 'Standardizing RxNorm & ATC codes...' },
    { id: 'checking', label: 'Checking cross-prescription interactions...' },
    { id: 'generating', label: 'Generating clinical safety report...' }
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(-1);

  const triggerOcrWorkflow = (sampleId = null, customName = "Prescription_Scan.pdf") => {
    setSelectedFileName(customName);
    if (sampleId) {
      loadSamplePrescription(sampleId);
    } else {
      loadSamplePrescription('presc-cardio');
    }

    setOcrStage('processing');
    setActiveStepIndex(0);

    // Staged step progression for ultra-realistic hackathon demo
    const stepDelays = [400, 700, 600, 600, 600, 500];
    let currentStep = 0;

    const runNextStep = () => {
      if (currentStep < OCR_STEPS.length - 1) {
        currentStep++;
        setActiveStepIndex(currentStep);
        setTimeout(runNextStep, stepDelays[currentStep]);
      } else {
        setTimeout(() => {
          setOcrStage('completed');
          addToast({
            type: 'success',
            title: 'Prescription Extracted',
            message: '3 medicines successfully recognized and normalized.'
          });
          navigateTo('ocr-review');
        }, 600);
      }
    };

    setTimeout(runNextStep, stepDelays[0]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      triggerOcrWorkflow('presc-cardio', file.name);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      triggerOcrWorkflow('presc-cardio', file.name);
    }
  };

  const handleManualAdd = (e) => {
    e.preventDefault();
    if (!manualMed.name.trim() || !manualMed.dosage.trim()) {
      addToast({
        type: 'warning',
        title: 'Missing Fields',
        message: 'Please provide at least a Medicine Name and Dosage.'
      });
      return;
    }

    addMedication({
      name: manualMed.name,
      dosage: manualMed.dosage,
      frequency: manualMed.frequency,
      prescribedBy: manualMed.prescribedBy || "Dr. Treating Physician",
      specialist: manualMed.specialist
    });

    setManualMed({
      name: '',
      dosage: '',
      frequency: 'Once daily',
      prescribedBy: '',
      specialist: 'General Physician'
    });
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" /> Intelligent Prescription Intake
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
          Upload & Scan Prescription
        </h1>
        <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">
          Upload a paper prescription image or PDF to extract medicines automatically via AI OCR, or add medications manually.
        </p>
      </div>

      {/* OCR PROGRESS OVERLAY / SCREEN (Section 6 Requirement) */}
      {ocrStage === 'processing' ? (
        <div className="p-8 sm:p-12 rounded-3xl border border-cyan-200 dark:border-cyan-800 bg-white dark:bg-slate-900 shadow-elevated text-center space-y-8 animate-fade-in relative overflow-hidden">
          <div className="animate-scan" />

          <div className="max-w-md mx-auto space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white mx-auto shadow-glow-cyan">
              <Zap className="w-8 h-8 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
              AI Prescription Extraction in Progress
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-200 font-mono">
              Processing: {selectedFileName}
            </p>
          </div>

          {/* Stepper Pipeline List */}
          <div className="max-w-md mx-auto space-y-3 text-left">
            {OCR_STEPS.map((step, idx) => {
              const isDone = idx < activeStepIndex;
              const isCurrent = idx === activeStepIndex;

              return (
                <div
                  key={step.id}
                  className={`p-3 rounded-2xl border flex items-center gap-3.5 transition-all duration-300 ${
                    isCurrent
                      ? 'bg-cyan-50 dark:bg-cyan-950/50 border-cyan-300 dark:border-cyan-700 shadow-sm'
                      : isDone
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-200/60 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-300'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-800 opacity-50'
                  }`}
                >
                  <div className="flex-shrink-0">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    ) : isCurrent ? (
                      <div className="w-5 h-5 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center text-[10px] text-slate-400">
                        {idx + 1}
                      </div>
                    )}
                  </div>
                  <span className={`text-xs font-semibold ${isCurrent ? 'text-cyan-900 dark:text-cyan-200 font-bold' : isDone ? 'text-emerald-900 dark:text-emerald-200' : 'text-slate-500'}`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          {/* 1-Click Preset Samples for Instant Demo Flow */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border border-slate-800 shadow-elevated space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm font-bold tracking-tight font-display">
                  1-Click Hackathon Sample Prescriptions
                </h3>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                Click any sample to test OCR instantly
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {SAMPLE_PRESCRIPTIONS.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => triggerOcrWorkflow(sample.id, `${sample.specialty}_Rx.pdf`)}
                  className="p-3.5 rounded-2xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500 text-left transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                      {sample.specialty}
                    </span>
                    <h5 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {sample.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-1">{sample.doctor}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-300">
                    <span>{sample.medicinesDetected.length} Meds</span>
                    <span className="text-cyan-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Scan <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Large Drag & Drop Upload Zone (Section 6 Requirement) */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`p-10 sm:p-14 rounded-3xl border-2 border-dashed text-center cursor-pointer transition-all duration-300 ${
              dragActive
                ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 scale-[0.99]'
                : 'border-slate-300 dark:border-slate-700 hover:border-cyan-400 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 bg-white dark:bg-slate-900 shadow-card'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              className="hidden"
              onChange={handleFileInputChange}
            />

            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-subtle group-hover:scale-110 transition-transform">
                <UploadCloud className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
                  Drag & drop prescription image / PDF here
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-200 mt-1">
                  or <span className="font-bold text-cyan-600 dark:text-cyan-400 underline">Browse Files</span> from your computer or phone camera
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  JPG
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  PNG
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                  PDF
                </span>
                <span className="text-[11px] text-slate-700 dark:text-slate-200">Up to 25 MB</span>
              </div>
            </div>
          </div>

          {/* Manual Entry Section (Section 6 Requirement) */}
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-card space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Or enter medicines manually
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-200">
                  Add individual medications directly if you don't have a prescription file
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Manual Entry</span>
            </div>

            <form onSubmit={handleManualAdd} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Medicine Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={manualMed.name}
                    onChange={(e) => setManualMed({ ...manualMed, name: e.target.value })}
                    placeholder="e.g. Metformin"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Dosage *
                  </label>
                  <input
                    type="text"
                    required
                    value={manualMed.dosage}
                    onChange={(e) => setManualMed({ ...manualMed, dosage: e.target.value })}
                    placeholder="e.g. 500 mg"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Frequency
                  </label>
                  <select
                    value={manualMed.frequency}
                    onChange={(e) => setManualMed({ ...manualMed, frequency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Once daily (Morning)">Once daily (Morning)</option>
                    <option value="Once daily (Night)">Once daily (Night)</option>
                    <option value="Twice daily">Twice daily</option>
                    <option value="Three times daily">Three times daily</option>
                    <option value="As needed (PRN)">As needed (PRN)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                    Prescribed By (Doctor)
                  </label>
                  <input
                    type="text"
                    value={manualMed.prescribedBy}
                    onChange={(e) => setManualMed({ ...manualMed, prescribedBy: e.target.value })}
                    placeholder="e.g. Dr. Patel"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Add Medicine to Profile</span>
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo('ai-analysis')}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Analyze Medicines</span>
                </button>
              </div>
            </form>
          </div>
        </>
      )}

      {/* Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
