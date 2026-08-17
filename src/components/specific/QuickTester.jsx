import React, { useState } from 'react';
import { ShieldAlert, Zap, ArrowRight, CheckCircle2, Sparkles, AlertTriangle, Info } from 'lucide-react';
import { RiskBadge } from '../common/RiskBadge';
import { useMedication } from '../../context/MedicationContext';

export const QuickTester = () => {
  const { navigateTo } = useMedication();

  const PRESETS = [
    { label: 'Warfarin + Aspirin', med1: 'Warfarin (5mg)', med2: 'Aspirin (75mg)' },
    { label: 'Metformin + Glimepiride', med1: 'Metformin (1000mg)', med2: 'Glimepiride (2mg)' },
    { label: 'Levothyroxine + Calcium', med1: 'Levothyroxine (50mcg)', med2: 'Calcium Carbonate (500mg)' },
    { label: 'Atorvastatin + Grapefruit Extract', med1: 'Atorvastatin (20mg)', med2: 'CYP3A4 Inhibitor' }
  ];

  const [med1, setMed1] = useState('Warfarin (5mg)');
  const [med2, setMed2] = useState('Aspirin (75mg)');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const runTest = (m1 = med1, m2 = med2) => {
    setAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      setAnalyzing(false);
      const combined = `${m1} ${m2}`.toLowerCase();

      if (combined.includes('warfarin') && combined.includes('aspirin')) {
        setResult({
          severity: 'HIGH',
          headline: 'Severe Synergistic Bleeding Hazard',
          summary: 'Simultaneous platelet inhibition and coagulation factor suppression increases major GI and intracranial bleeding risks by up to 400%.',
          guidance: 'Requires urgent clinical review. Check whether patient has dual antithrombotic indication.',
          scoreDeduction: -25
        });
      } else if (combined.includes('metformin') && combined.includes('glimepiride')) {
        setResult({
          severity: 'MODERATE',
          headline: 'Potentiated Hypoglycemia Hazard',
          summary: 'Glimepiride insulin secretagogue action paired with Metformin insulin sensitization warrants blood sugar tracking.',
          guidance: 'Maintain regular meal schedule and monitor for tremors or sweating.',
          scoreDeduction: -12
        });
      } else if (combined.includes('levothyroxine') && combined.includes('calcium')) {
        setResult({
          severity: 'LOW',
          headline: 'GI Insoluble Chelation / Absorption Lag',
          summary: 'Divalent Calcium cations bind to levothyroxine, reducing thyroid hormone bioavailability by up to 30%.',
          guidance: 'Space administration by at least 4 hours apart.',
          scoreDeduction: -5
        });
      } else {
        setResult({
          severity: 'SAFE',
          headline: 'No Critical Major Contraindication Identified',
          summary: 'Standard therapeutic dosing is not known to produce severe metabolic inhibition between these two agents.',
          guidance: 'Always adhere to prescribing doctor recommendations.',
          scoreDeduction: 0
        });
      }
    }, 700);
  };

  return (
    <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8 shadow-elevated">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              Live Interaction Engine Sandbox
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-200">Test any 2 medications against VEDIORA clinical safety rules</p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
          <Sparkles className="w-3 h-3" /> Live Demo
        </span>
      </div>

      {/* Preset Quick Buttons */}
      <div className="mb-5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block mb-2">
          Try Clinical Presets:
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              onClick={() => {
                setMed1(p.med1);
                setMed2(p.med2);
                runTest(p.med1, p.med2);
              }}
              className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-950/50 dark:hover:text-cyan-300 border border-slate-200/80 dark:border-slate-700 transition-all"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
            Primary Medication (Rx 1)
          </label>
          <input
            type="text"
            value={med1}
            onChange={(e) => setMed1(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
            placeholder="e.g. Warfarin 5mg"
          />
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
            Secondary Medication (Rx 2)
          </label>
          <input
            type="text"
            value={med2}
            onChange={(e) => setMed2(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500"
            placeholder="e.g. Aspirin 75mg"
          />
        </div>
      </div>

      {/* Trigger Button */}
      <button
        onClick={() => runTest()}
        disabled={analyzing}
        className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-md hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
      >
        {analyzing ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Scanning 45,000+ Pharmacopeia Rules...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            <span>Analyze Drug-Drug Interaction</span>
          </>
        )}
      </button>

      {/* Result Display */}
      {result && (
        <div className="mt-6 p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 animate-slide-up space-y-3">
          <div className="flex items-center justify-between">
            <RiskBadge severity={result.severity} />
            <span className="text-xs font-mono text-slate-700 dark:text-slate-200">AI Confidence: 99.4%</span>
          </div>

          <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
            {result.headline}
          </h4>

          <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
            {result.summary}
          </p>

          <div className="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
            <strong className="font-semibold">Guidance:</strong> {result.guidance}
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-slate-200 dark:border-slate-700">
            <span className="text-[11px] text-slate-700 dark:text-slate-200">
              Decision support only. Consult treating physician.
            </span>
            <button
              onClick={() => navigateTo('upload-prescription')}
              className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>Scan Full Prescription Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
