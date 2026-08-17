import React, { useState } from 'react';
import {
  ArrowLeft,
  AlertTriangle,
  ShieldAlert,
  BookOpen,
  Stethoscope,
  HelpCircle,
  Activity,
  FileCheck,
  ExternalLink,
  Share2,
  Printer,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';
import { RiskBadge } from '../components/common/RiskBadge';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';

export const DetailedInteraction = () => {
  const {
    interactions,
    selectedInteractionId,
    navigateTo,
    userPersona,
    addToast
  } = useMedication();

  const [activeViewMode, setActiveViewMode] = useState(
    userPersona === 'doctor' ? 'clinical' : 'patient'
  );

  const interaction = interactions.find(i => i.id === selectedInteractionId) || interactions[0];

  if (!interaction) {
    return (
      <div className="p-12 text-center">
        <p className="text-slate-500">Interaction not found.</p>
        <button
          onClick={() => navigateTo('interaction-results')}
          className="mt-4 px-4 py-2 bg-cyan-600 text-white rounded-xl text-xs font-bold"
        >
          Back to Interactions
        </button>
      </div>
    );
  }

  const isHigh = interaction.severity === 'HIGH';
  const isMod = interaction.severity === 'MODERATE';

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Top Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigateTo('interaction-results')}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Results</span>
        </button>

        {/* Persona View Mode Switcher */}
        <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => setActiveViewMode('patient')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeViewMode === 'patient'
                ? 'bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-300 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            Patient Guide
          </button>
          <button
            onClick={() => setActiveViewMode('clinical')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeViewMode === 'clinical'
                ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-sm'
                : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
            }`}
          >
            Clinical Pharmacology
          </button>
        </div>
      </div>

      {/* Main Detail Header Card (Section 11 Requirement) */}
      <div
        className={`rounded-3xl border p-6 sm:p-8 bg-white dark:bg-slate-900 shadow-card ${
          isHigh
            ? 'border-red-200 dark:border-red-900/60'
            : isMod
            ? 'border-amber-200 dark:border-amber-900/60'
            : 'border-slate-200 dark:border-slate-800'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <RiskBadge severity={interaction.severity} label={interaction.severityLabel} size="lg" />
            <span className="text-xs font-mono text-slate-700 dark:text-slate-200">
              Interaction ID: {interaction.id}
            </span>
          </div>

          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {interaction.type}
          </span>
        </div>

        {/* Side-by-Side Medicines Comparison (Section 11 Requirement) */}
        <div className="grid grid-cols-1 sm:grid-cols-11 gap-4 items-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 mb-6">
          {/* Medicine A */}
          <div className="sm:col-span-5 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Medicine A
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              {interaction.medA.name}
            </h3>
            <p className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
              Dosage: {interaction.medA.dosage}
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-200">
              Category: {interaction.medA.category}
            </p>
            <p className="text-[11px] text-slate-700 dark:text-slate-200">
              Prescribed: {interaction.medA.prescribedBy}
            </p>
          </div>

          {/* Plus Divider */}
          <div className="sm:col-span-1 flex justify-center my-2 sm:my-0">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-slate-700 dark:text-slate-200 text-sm shadow-sm">
              +
            </div>
          </div>

          {/* Medicine B */}
          <div className="sm:col-span-5 space-y-1 sm:text-right">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Medicine B
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
              {interaction.medB.name}
            </h3>
            <p className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300">
              Dosage: {interaction.medB.dosage}
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-200">
              Category: {interaction.medB.category}
            </p>
            <p className="text-[11px] text-slate-700 dark:text-slate-200">
              Prescribed: {interaction.medB.prescribedBy}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-display mb-2">
          {interaction.headline}
        </h2>
      </div>

      {/* DUAL VIEW MODE CONTENT (Section 11 Requirement) */}
      {activeViewMode === 'patient' ? (
        /* PATIENT VIEW */
        <div className="space-y-6 animate-fade-in">
          {/* Section: What was detected? */}
          <div className="p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                What was detected?
              </h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              VEDIORA identified that <strong className="font-semibold text-slate-900 dark:text-white">{interaction.medA.name}</strong> and <strong className="font-semibold text-slate-900 dark:text-white">{interaction.medB.name}</strong> are currently listed on separate prescriptions written by different healthcare providers.
            </p>
          </div>

          {/* Section: Why does this matter? */}
          <div className="p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card space-y-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Why does this matter?
              </h3>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {interaction.patientSummary}
            </p>

            {interaction.patientSignsToWatch && (
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                  Symptoms to Monitor & Report:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                  {interaction.patientSignsToWatch.map((sign, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Section: Recommended Action (Mandatory Safety Directive) */}
          <div className="p-6 rounded-3xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/20 shadow-card space-y-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              <h3 className="text-lg font-bold text-amber-950 dark:text-amber-100 font-display">
                Recommended Patient Action
              </h3>
            </div>
            <p className="text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
              {interaction.patientAction}
            </p>
            <p className="text-xs text-amber-800 dark:text-amber-300 font-semibold pt-1">
              "Discuss this combination with your healthcare professional before adjusting or stopping your dose."
            </p>
          </div>
        </div>
      ) : (
        /* CLINICAL / DOCTOR VIEW */
        <div className="space-y-6 animate-fade-in">
          {/* Pharmacological Mechanism & Pathways */}
          <div className="p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Pharmacological Mechanism & Kinetics
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-200">CYP450 metabolism, receptor dynamics & synergistic toxicity</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
              {interaction.clinicalDetails?.mechanism}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block">
                  Severity Score
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {interaction.clinicalDetails?.severityScore}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block">
                  Evidence Grading
                </span>
                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                  {interaction.clinicalDetails?.evidenceLevel}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block">
                  Metabolic Pathway
                </span>
                <span className="text-xs font-mono font-medium text-slate-800 dark:text-slate-200">
                  {interaction.clinicalDetails?.cypPathway}
                </span>
              </div>
            </div>
          </div>

          {/* Clinical Recommendation for Physicians */}
          <div className="p-6 rounded-3xl border border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/50 dark:bg-indigo-950/20 shadow-card space-y-3">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h3 className="text-lg font-bold text-indigo-950 dark:text-indigo-100 font-display">
                Clinical Recommendation & Management Strategy
              </h3>
            </div>
            <p className="text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed">
              {interaction.clinicalDetails?.clinicalRecommendation}
            </p>
          </div>

          {/* Peer-Reviewed Evidence Sources (Section 11 Requirement: Do not fabricate) */}
          <div className="p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-600" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Peer-Reviewed Citations & Guideline References
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-700 dark:text-slate-200">Validated Citations</span>
            </div>

            <div className="space-y-3">
              {interaction.clinicalDetails?.sources?.map((src, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-start justify-between gap-4"
                >
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                      {src.title}
                    </h5>
                    <p className="text-[11px] text-slate-700 dark:text-slate-200 mt-0.5">
                      {src.source} • Year: {src.year}
                    </p>
                  </div>

                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 whitespace-nowrap">
                    {src.id}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mandatory Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
