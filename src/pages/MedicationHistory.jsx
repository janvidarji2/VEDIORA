import React, { useState } from 'react';
import {
  History,
  Clock,
  Filter,
  Calendar,
  User,
  ShieldAlert,
  FileCheck,
  UploadCloud,
  CheckCircle2,
  Stethoscope,
  Activity,
  Sparkles,
  Search
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';
import { RiskBadge } from '../components/common/RiskBadge';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';

export const MedicationHistory = () => {
  const { history, patient, navigateTo } = useMedication();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('ALL'); // 'ALL' | 'ANALYSIS_RUN' | 'RX_UPLOAD' | 'DOCTOR_REVIEW'

  const filteredHistory = history.filter(item => {
    const matchesType = filterType === 'ALL' || item.type === filterType;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getEventIcon = (type, severity) => {
    switch (type) {
      case 'ANALYSIS_RUN':
        return <Activity className="w-5 h-5 text-cyan-500" />;
      case 'RX_UPLOAD':
        return <UploadCloud className="w-5 h-5 text-blue-500" />;
      case 'DOCTOR_REVIEW':
        return <Stethoscope className="w-5 h-5 text-emerald-500" />;
      case 'MED_ADDED':
        return <CheckCircle2 className="w-5 h-5 text-purple-500" />;
      default:
        return <FileCheck className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Header (Section 15 Requirement) */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-2">
            <History className="w-3.5 h-3.5" /> Longitudinal Audit Trail
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Medication History & Timeline
          </h1>
          <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">
            Complete chronological record of uploaded prescriptions, AI safety runs, and physician reviews.
          </p>
        </div>

        <button
          onClick={() => navigateTo('upload-prescription')}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md hover:shadow-glow-cyan transition-all flex items-center gap-1.5"
        >
          <UploadCloud className="w-4 h-4" />
          <span>Upload New Record</span>
        </button>
      </div>

      {/* Search & Filter Bar (Section 15 Requirement: Date, Doctor, Medicine, Risk level) */}
      <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Filter events, doctors, or meds..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-700 dark:placeholder-slate-200 focus:outline-none focus:border-cyan-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {[
            { id: 'ALL', label: 'All Activities' },
            { id: 'ANALYSIS_RUN', label: 'AI Analyses' },
            { id: 'RX_UPLOAD', label: 'Prescriptions' },
            { id: 'DOCTOR_REVIEW', label: 'Doctor Visits' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setFilterType(f.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filterType === f.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Stream (Section 15 Requirement) */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
        {filteredHistory.map((item, idx) => (
          <div key={item.id} className="relative group animate-slide-up">
            {/* Timeline Dot Icon */}
            <div className="absolute -left-6 sm:-left-8 top-1 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 group-hover:border-cyan-500 flex items-center justify-center shadow-sm transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
            </div>

            {/* Event Card */}
            <div className="p-6 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-card hover:shadow-elevated transition-all space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-700 dark:text-slate-200 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.date} • {item.time}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-700 dark:text-slate-200">
                  {item.author}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                {item.title}
              </h4>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <DisclaimerBanner />
    </div>
  );
};
