import React from 'react';
import { AlertTriangle, ArrowRight, BookOpen, Stethoscope, HelpCircle, ShieldAlert } from 'lucide-react';
import { RiskBadge } from '../common/RiskBadge';
import { useMedication } from '../../context/MedicationContext';

export const InteractionCard = ({ interaction, onDetailsClick, onEvidenceClick }) => {
  const { navigateTo } = useMedication();

  const handleDetails = () => {
    if (onDetailsClick) {
      onDetailsClick(interaction);
    } else {
      navigateTo('detailed-interaction', { interactionId: interaction.id });
    }
  };

  const isHigh = interaction.severity === 'HIGH';
  const isModerate = interaction.severity === 'MODERATE';

  return (
    <div
      className={`rounded-3xl border transition-all duration-300 overflow-hidden bg-white dark:bg-slate-900 shadow-card hover:shadow-elevated ${
        isHigh
          ? 'border-red-200/90 dark:border-red-900/60 hover:border-red-400'
          : isModerate
          ? 'border-amber-200/90 dark:border-amber-900/60 hover:border-amber-400'
          : 'border-slate-200/90 dark:border-slate-800 hover:border-cyan-400/50'
      }`}
    >
      {/* Top Header Strip */}
      <div
        className={`px-6 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 ${
          isHigh
            ? 'bg-red-50/70 dark:bg-red-950/30 border-red-100 dark:border-red-900/40'
            : isModerate
            ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900/40'
            : 'bg-slate-50 dark:bg-slate-800/40 border-slate-100 dark:border-slate-800'
        }`}
      >
        <div className="flex items-center gap-3">
          <RiskBadge severity={interaction.severity} label={interaction.severityLabel} />
          <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
            {interaction.type}
          </span>
        </div>

        <span className="text-xs font-mono text-slate-700 dark:text-slate-200">
          ID: {interaction.id}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-6 space-y-5">
        {/* Drug Pair Visual Banner */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
          <div className="flex-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Medicine A
            </span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
              {interaction.medA.name} <span className="text-xs font-normal text-slate-700 dark:text-slate-200">({interaction.medA.dosage})</span>
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-200">{interaction.medA.prescribedBy}</p>
          </div>

          <div className="flex items-center justify-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
              isHigh ? 'bg-red-100 dark:bg-red-900/60 text-red-700 dark:text-red-300' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
            }`}>
              +
            </div>
          </div>

          <div className="flex-1 sm:text-right">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
              Medicine B
            </span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
              {interaction.medB.name} <span className="text-xs font-normal text-slate-700 dark:text-slate-200">({interaction.medB.dosage})</span>
            </h4>
            <p className="text-xs text-slate-700 dark:text-slate-200">{interaction.medB.prescribedBy}</p>
          </div>
        </div>

        {/* Risk & Headline */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-1.5 flex items-center gap-2">
            {interaction.headline}
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
            {interaction.patientSummary}
          </p>
        </div>

        {/* Patient Action & Safety Directive */}
        <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="font-semibold text-amber-950 dark:text-amber-100">Recommended Patient Action:</strong> {interaction.patientAction}
          </p>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-200">
            <BookOpen className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Evidence Grade: {interaction.clinicalDetails?.evidenceLevel?.split('(')[0] || 'Level 1A'}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDetails}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors flex items-center gap-1"
            >
              <span>View Evidence</span>
            </button>

            <button
              onClick={handleDetails}
              className="px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-xl shadow-sm hover:shadow-glow-cyan transition-all flex items-center gap-1.5"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
