import React from 'react';
import { Copy, AlertCircle, ShieldAlert, ArrowRight, Check } from 'lucide-react';
import { RiskBadge } from '../common/RiskBadge';
import { useMedication } from '../../context/MedicationContext';

export const DuplicateCard = ({ duplicate, onReviewClick }) => {
  const { navigateTo } = useMedication();

  const handleReview = () => {
    if (onReviewClick) {
      onReviewClick();
    } else {
      navigateTo('medication-profile');
    }
  };

  return (
    <div className="rounded-3xl border border-purple-200/90 dark:border-purple-900/60 bg-white dark:bg-slate-900 shadow-card hover:shadow-elevated transition-all overflow-hidden">
      {/* Header Banner */}
      <div className="px-6 py-3.5 bg-purple-50/70 dark:bg-purple-950/30 border-b border-purple-100 dark:border-purple-900/40 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <RiskBadge severity="DUPLICATE" label="Potential Duplicate Medicine" />
          <span className="text-xs font-semibold text-purple-900 dark:text-purple-300">
            {duplicate.activeIngredient}
          </span>
        </div>
        <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-medium">
          Source: Multiple Prescriptions
        </span>
      </div>

      <div className="p-6 space-y-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
          {duplicate.headline}
        </h3>

        {/* Multi-Prescription Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {duplicate.prescriptions.map((rx, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-purple-50/40 dark:bg-slate-800/60 border border-purple-100 dark:border-slate-800"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                  Prescription {idx + 1}
                </span>
                <span className="text-xs font-mono text-slate-700 dark:text-slate-200">{rx.rxDate}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                {rx.tradeName} <span className="text-xs font-normal text-slate-700 dark:text-slate-200">({rx.dosage})</span>
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-200 mt-0.5">{rx.doctor}</p>
              <p className="text-[11px] text-slate-700 dark:text-slate-200 mt-2 font-medium">
                Indication: {rx.indication}
              </p>
            </div>
          ))}
        </div>

        {/* Explanation */}
        <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
          {duplicate.explanation}
        </p>

        {/* Patient Action Alert */}
        <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold text-amber-950 dark:text-amber-100">Patient Safety Guidance:</strong> {duplicate.action} Do not stop either prescription without your physician's confirmation.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={handleReview}
            className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-xl shadow-sm hover:shadow-elevated transition-all flex items-center gap-1.5"
          >
            <span>Review Medication Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
