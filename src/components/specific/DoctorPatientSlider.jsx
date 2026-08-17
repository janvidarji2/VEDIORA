import React, { useState } from 'react';
import {
  DoctorSticker,
  PatientSticker
} from '../common/Stickers';
import { FlaskConical, BarChart3, FileText, History, MessageCircle, ShieldCheck, Heart, FileCheck2 } from 'lucide-react';

export const DoctorPatientSlider = () => {
  const [activePersona, setActivePersona] = useState('patient'); // 'doctor' | 'patient'

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center select-none">
      {/* Small Section Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-extrabold mb-4">
        <span>🔄</span>
        <span>TWO VIEWS</span>
      </div>

      {/* Large Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight mb-8">
        For Doctors. For Patients.
      </h2>

      {/* Main Switch Card */}
      <div className="max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border-2 border-purple-200 shadow-sticker space-y-8">
        {/* Large Interactive Persona Switch */}
        <div className="p-2 rounded-2xl bg-purple-50 border-2 border-purple-200 grid grid-cols-2 gap-2 max-w-md mx-auto">
          <button
            onClick={() => setActivePersona('doctor')}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 ${
              activePersona === 'doctor'
                ? 'bg-purple-600 text-white shadow-sticker'
                : 'text-purple-900 hover:bg-purple-100'
            }`}
          >
            <span>👨‍⚕️</span>
            <span>DOCTOR</span>
          </button>

          <button
            onClick={() => setActivePersona('patient')}
            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 ${
              activePersona === 'patient'
                ? 'bg-purple-600 text-white shadow-sticker'
                : 'text-purple-900 hover:bg-purple-100'
            }`}
          >
            <span>👤</span>
            <span>PATIENT</span>
          </button>
        </div>

        {/* Dynamic Display (Short Labels Only) */}
        {activePersona === 'doctor' ? (
          // Doctor View
          <div className="space-y-4 animate-pop-in">
            <div className="flex items-center justify-center mb-2">
              <DoctorSticker specialty="Heart" size="lg" />
            </div>

            <span className="text-xs font-extrabold text-purple-700 uppercase tracking-wider block">
              Clinical Precision
            </span>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-center gap-2.5">
                <FlaskConical className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">🧪 Clinical Details</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-center gap-2.5">
                <BarChart3 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">📊 Risk Severity</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">📄 PubMed Evidence</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-purple-50/80 border border-purple-200 flex items-center gap-2.5">
                <History className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">📋 Medication History</span>
              </div>
            </div>
          </div>
        ) : (
          // Patient View
          <div className="space-y-4 animate-pop-in">
            <div className="flex items-center justify-center mb-2">
              <PatientSticker size="lg" />
            </div>

            <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-wider block">
              Clear & Reassuring
            </span>

            <div className="grid grid-cols-2 gap-3 text-left">
              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center gap-2.5">
                <MessageCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">💬 Simple Explanation</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">🛡️ Safety Summary</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center gap-2.5">
                <Heart className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">❤️ What It Means</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-center gap-2.5">
                <FileCheck2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">📄 Easy Checklist</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
