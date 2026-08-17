import React from 'react';
import {
  DoctorSticker,
  PatientSticker,
  SafetyShieldSticker,
  RiskAlertSticker
} from '../common/Stickers';
import { ArrowRight, FileText } from 'lucide-react';

export const DualReportsInteractive = ({ onOpenDoctorReport, onOpenPatientReport }) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center select-none space-y-20">
      {/* 1. THREE RISK LEVELS VISUAL CARDS (Section 14 Requirement) */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-extrabold mb-4">
          <span>🚦</span>
          <span>SAFETY CLASSIFICATION</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight mb-8">
          Clear Risk Levels.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Green Safe Card */}
          <div className="p-6 rounded-3xl bg-emerald-50/80 border-2 border-emerald-300 shadow-sticker-mint flex flex-col items-center text-center space-y-3">
            <SafetyShieldSticker size="lg" />
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-emerald-200 text-emerald-900">
              🟢 SAFE
            </span>
            <span className="text-sm font-extrabold text-emerald-950">No significant interaction</span>
          </div>

          {/* Amber Attention Card */}
          <div className="p-6 rounded-3xl bg-amber-50/80 border-2 border-amber-300 shadow-sticker flex flex-col items-center text-center space-y-3">
            <RiskAlertSticker level="moderate" size="lg" />
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-amber-200 text-amber-900">
              🟠 ATTENTION
            </span>
            <span className="text-sm font-extrabold text-amber-950">Review combination</span>
          </div>

          {/* Red High Risk Card */}
          <div className="p-6 rounded-3xl bg-rose-50/80 border-2 border-rose-300 shadow-sticker-coral flex flex-col items-center text-center space-y-3">
            <RiskAlertSticker level="high" size="lg" />
            <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-rose-200 text-rose-900">
              🔴 HIGH RISK
            </span>
            <span className="text-sm font-extrabold text-rose-950">Professional review needed</span>
          </div>
        </div>
      </div>

      {/* 2. DUAL ILLUSTRATED REPORTS (Section 15 Requirement) */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-extrabold mb-4">
          <span>📄</span>
          <span>REPORTS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight mb-8">
          One Click Reports.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Doctor Report Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-purple-200 shadow-sticker flex flex-col items-center text-center space-y-6 transform hover:scale-[1.02] transition-transform">
            <DoctorSticker specialty="Heart" size="xl" />
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">Doctor Report</h3>
              <span className="text-xs font-bold text-purple-600">Detailed • Clinical • Pharmacopeia</span>
            </div>
            <button
              onClick={onOpenDoctorReport}
              className="px-8 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm shadow-sticker transition-all flex items-center gap-2"
            >
              <span>View Doctor Report →</span>
            </button>
          </div>

          {/* Patient Report Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-purple-200 shadow-sticker flex flex-col items-center text-center space-y-6 transform hover:scale-[1.02] transition-transform">
            <PatientSticker size="xl" />
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">Patient Report</h3>
              <span className="text-xs font-bold text-emerald-600">Simple • Reassuring • Actionable</span>
            </div>
            <button
              onClick={onOpenPatientReport}
              className="px-8 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-sticker-mint transition-all flex items-center gap-2"
            >
              <span>View Patient Report →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
