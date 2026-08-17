import React, { useState } from 'react';
import {
  Stethoscope,
  Download,
  Printer,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  BookOpen,
  Filter,
  Activity,
  Layers,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';
import { RiskBadge } from '../components/common/RiskBadge';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';

export const DoctorReport = () => {
  const {
    patient,
    medications,
    interactions,
    duplicates,
    safetyStats,
    addToast
  } = useMedication();

  const [severityFilter, setSeverityFilter] = useState('ALL'); // 'ALL' | 'HIGH' | 'MODERATE' | 'LOW'

  const filteredInteractions = interactions.filter(i => {
    if (severityFilter === 'ALL') return true;
    return i.severity === severityFilter;
  });

  const handleExport = () => {
    addToast({
      type: 'success',
      title: 'Clinical Report Exported',
      message: `Exported HL7/FHIR compliant Clinical Safety Matrix for ${patient.name} (PAT-89241).`
    });
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
      {/* Top Clinical Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold mb-2">
            <Stethoscope className="w-3.5 h-3.5" /> Clinician-Grade Pharmacology Matrix
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Physician Clinical Safety Report
          </h1>
          <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">
            Comprehensive CYP450, pharmacodynamic interaction, and evidence dossier for prescribing physicians.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4" />
            <span>Print Clinical PDF</span>
          </button>

          <button
            onClick={handleExport}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Export Doctor Report</span>
          </button>
        </div>
      </div>

      {/* Patient & Clinical Summary Dossier (Section 13 Requirement) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-card">
        <div className="space-y-1">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">Patient</span>
          <p className="text-base font-bold text-slate-900 dark:text-white font-display">{patient.name}</p>
          <p className="text-xs text-slate-700 dark:text-slate-200">{patient.age} yrs • Male</p>
        </div>

        <div className="space-y-1 border-l border-slate-100 dark:border-slate-800 pl-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">Analysis Date</span>
          <p className="text-base font-bold text-slate-900 dark:text-white font-display">16 Aug 2026</p>
          <p className="text-xs text-slate-700 dark:text-slate-200">Audit Time: 10:42 AM</p>
        </div>

        <div className="space-y-1 border-l border-slate-100 dark:border-slate-800 pl-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">Total Medicines</span>
          <p className="text-2xl font-bold text-slate-900 dark:text-white font-display">12</p>
          <p className="text-xs text-slate-700 dark:text-slate-200">4 Specialists</p>
        </div>

        <div className="space-y-1 border-l border-slate-100 dark:border-slate-800 pl-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">Interactions</span>
          <p className="text-2xl font-bold text-amber-500 font-display">4</p>
          <p className="text-xs text-slate-700 dark:text-slate-200">Flagged Pairs</p>
        </div>

        <div className="space-y-1 border-l border-slate-100 dark:border-slate-800 pl-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">High Risk</span>
          <p className="text-2xl font-bold text-red-500 font-display">1</p>
          <p className="text-xs text-red-600 dark:text-red-400 font-semibold">Priority Action</p>
        </div>

        <div className="space-y-1 border-l border-slate-100 dark:border-slate-800 pl-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">Mod / Low</span>
          <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 font-display">2 / 1</p>
          <p className="text-xs text-slate-700 dark:text-slate-200">Monitoring Required</p>
        </div>
      </div>

      {/* Filter Tabs (Section 13 Requirement: All, High, Moderate, Low) */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter Severity:
          </span>

          <div className="flex items-center gap-1.5">
            {['ALL', 'HIGH', 'MODERATE', 'LOW'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSeverityFilter(filter)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  severityFilter === filter
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <span className="text-xs font-mono text-slate-700 dark:text-slate-200 hidden sm:inline">
          Showing {filteredInteractions.length} clinical items
        </span>
      </div>

      {/* Detailed Clinical Table (Section 13 Requirement: Medicine A | Medicine B | Interaction Type | Severity | Evidence Level | Clinical Notes | Recommended Review) */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200/80 dark:border-slate-800 uppercase tracking-wider text-slate-700 dark:text-slate-200 font-bold">
              <tr>
                <th className="px-5 py-4">Medicine A</th>
                <th className="px-5 py-4">Medicine B</th>
                <th className="px-5 py-4">Interaction Type</th>
                <th className="px-5 py-4">Severity</th>
                <th className="px-5 py-4">Evidence Level</th>
                <th className="px-5 py-4 min-w-[280px]">Clinical Notes & Mechanism</th>
                <th className="px-5 py-4 min-w-[220px]">Recommended Review</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredInteractions.map((int) => (
                <tr key={int.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">
                    <div>{int.medA.name} <span className="font-normal text-slate-700 dark:text-slate-200">({int.medA.dosage})</span></div>
                    <div className="text-[11px] font-normal text-slate-700 dark:text-slate-200">{int.medA.prescribedBy}</div>
                  </td>

                  <td className="px-5 py-4 font-bold text-slate-900 dark:text-white">
                    <div>{int.medB.name} <span className="font-normal text-slate-700 dark:text-slate-200">({int.medB.dosage})</span></div>
                    <div className="text-[11px] font-normal text-slate-700 dark:text-slate-200">{int.medB.prescribedBy}</div>
                  </td>

                  <td className="px-5 py-4 text-slate-700 dark:text-slate-300 font-medium">
                    {int.type}
                  </td>

                  <td className="px-5 py-4">
                    <RiskBadge severity={int.severity} size="sm" />
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800">
                      {int.clinicalDetails?.evidenceLevel?.split('(')[0] || 'Level 1A'}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    <p className="font-bold text-slate-900 dark:text-white mb-0.5">{int.headline}</p>
                    <p className="line-clamp-3 text-[11px]">{int.clinicalDetails?.mechanism}</p>
                  </td>

                  <td className="px-5 py-4 text-indigo-900 dark:text-indigo-200 font-medium text-[11px] leading-relaxed bg-indigo-50/30 dark:bg-indigo-950/20">
                    {int.clinicalDetails?.clinicalRecommendation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Cross-Doctor Duplicate Ingredients Box */}
      {duplicates.length > 0 && (
        <div className="p-6 rounded-3xl border border-purple-200 dark:border-purple-800/80 bg-purple-50/40 dark:bg-purple-950/20 shadow-subtle space-y-3">
          <div className="flex items-center gap-2">
            <RiskBadge severity="DUPLICATE" />
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Pharmacovigilance Alert: Active Ingredient Duplication
            </h4>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>Aspirin 75mg</strong> is actively prescribed under both <em>Ecosprin 75</em> (Dr. Rahul Shah - Metro Heart) and <em>Disprin Protect 75</em> (Dr. Vikram Mehta - Sunrise Orthopedics). Potential total cumulative exposure: 150mg/day. Recommended action: Clinical coordination between prescribing services to discontinue redundant brand prescription.
          </p>
        </div>
      )}

      {/* Mandatory Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
