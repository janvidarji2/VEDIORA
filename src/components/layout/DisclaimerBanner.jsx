import React from 'react';
import { ShieldAlert, Info } from 'lucide-react';
import { useMedication } from '../../context/MedicationContext';

export const DisclaimerBanner = ({ compact = false }) => {
  const { t } = useMedication();

  if (compact) {
    return (
      <div className="flex items-center gap-2 py-2 px-3 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-200">
        <Info className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
        <p className="leading-snug">
          <span className="font-semibold text-slate-800 dark:text-slate-200">Medical Decision-Support Notice:</span> {t.disclaimer} Always consult your doctor or pharmacist before making any changes.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/70 dark:bg-amber-950/20 p-4 shadow-subtle">
      <div className="flex items-start gap-3.5">
        <div className="rounded-xl bg-amber-100 dark:bg-amber-900/50 p-2 text-amber-700 dark:text-amber-400 flex-shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5" />
        </div>
        <div className="text-xs text-amber-900 dark:text-amber-200 leading-relaxed">
          <p className="font-bold text-amber-950 dark:text-amber-100 mb-0.5 uppercase tracking-wide text-[11px]">
            Clinical Decision Support & Patient Safety Policy
          </p>
          <p>
            {t.disclaimer} VEDIORA aggregates pharmacopeia databases and evidence-based clinical rules to assist clinicians and patients in identifying potential medication risks. <strong className="font-semibold">Never stop, start, or alter your prescribed dosages without consulting your treating physician or a licensed pharmacist.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
