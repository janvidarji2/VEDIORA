import React, { useState } from 'react';
import {
  DoctorShah,
  ElderlyRajesh
} from '../characters/Characters';
import { FlaskConical, BarChart3, FileText, History, HelpCircle, AlertCircle, CheckCircle2 } from 'lucide-react';

export const CharacterPersonaSwitch = () => {
  const [activePersona, setActivePersona] = useState('patient'); // 'doctor' | 'patient'

  return (
    <section className="py-28 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
        <span className="font-mono text-xs font-extrabold text-vediora-lavender uppercase tracking-widest block">
          [ DUAL PERSONA REPORTS ]
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-vediora-violet font-display tracking-tight leading-[0.95]">
          DOCTOR OR PATIENT?
        </h2>
        <p className="text-sm text-vediora-muted font-medium">
          Choose a character to see how VEDIORA customizes the report.
        </p>
      </div>

      {/* Two Character Buttons (Section 14) */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActivePersona('doctor')}
          className={`px-6 py-3 rounded-full text-xs font-display font-extrabold transition-all flex items-center gap-2.5 ${
            activePersona === 'doctor'
              ? 'bg-vediora-violet text-white shadow-character scale-105'
              : 'bg-white border border-vediora-border text-vediora-muted hover:text-vediora-violet'
          }`}
        >
          <span>👨‍⚕️</span>
          <span>DOCTOR VIEW</span>
        </button>

        <button
          onClick={() => setActivePersona('patient')}
          className={`px-6 py-3 rounded-full text-xs font-display font-extrabold transition-all flex items-center gap-2.5 ${
            activePersona === 'patient'
              ? 'bg-vediora-violet text-white shadow-character scale-105'
              : 'bg-white border border-vediora-border text-vediora-muted hover:text-vediora-violet'
          }`}
        >
          <span>👤</span>
          <span>PATIENT VIEW</span>
        </button>
      </div>

      {/* Dynamic Display */}
      <div className="max-w-4xl mx-auto rounded-[36px] bg-white border border-vediora-border shadow-paper p-8 sm:p-12">
        {activePersona === 'doctor' ? (
          // Doctor View
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-pop-in">
            <div className="md:col-span-4 flex justify-center">
              <DoctorShah size="lg" />
            </div>

            <div className="md:col-span-8 space-y-4 text-left">
              <span className="font-mono text-xs font-extrabold text-vediora-lavender uppercase tracking-wider block">
                CLINICAL PERSPECTIVE
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-vediora-paleLavender/50 border border-vediora-lavender/30 flex items-center gap-3">
                  <FlaskConical className="w-5 h-5 text-vediora-lavender flex-shrink-0" />
                  <span className="text-xs font-extrabold text-vediora-violet">Evidence & Citations</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-vediora-paleLavender/50 border border-vediora-lavender/30 flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-vediora-lavender flex-shrink-0" />
                  <span className="text-xs font-extrabold text-vediora-violet">Severity Scores</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-vediora-paleLavender/50 border border-vediora-lavender/30 flex items-center gap-3">
                  <FileText className="w-5 h-5 text-vediora-lavender flex-shrink-0" />
                  <span className="text-xs font-extrabold text-vediora-violet">Clinical Notes</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-vediora-paleLavender/50 border border-vediora-lavender/30 flex items-center gap-3">
                  <History className="w-5 h-5 text-vediora-lavender flex-shrink-0" />
                  <span className="text-xs font-extrabold text-vediora-violet">Full Rx History</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Patient View
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center animate-pop-in">
            <div className="md:col-span-4 flex justify-center">
              <ElderlyRajesh size="lg" />
            </div>

            <div className="md:col-span-8 space-y-4 text-left">
              <span className="font-mono text-xs font-extrabold text-vediora-mint uppercase tracking-wider block">
                PATIENT PERSPECTIVE
              </span>

              <div className="space-y-3">
                <div className="p-3.5 rounded-2xl bg-vediora-lightMint/60 border border-vediora-mint/30 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-vediora-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-extrabold text-vediora-charcoal block">What happened?</span>
                    <span className="text-xs text-vediora-muted">Two of your heart medicines work in a similar way.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-vediora-lightMint/60 border border-vediora-mint/30 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-vediora-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-extrabold text-vediora-charcoal block">Why does it matter?</span>
                    <span className="text-xs text-vediora-muted">Taking both may make minor cuts bleed a little longer.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-vediora-lightMint/60 border border-vediora-mint/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-vediora-mint flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-extrabold text-vediora-charcoal block">What should I do?</span>
                    <span className="text-xs text-vediora-muted">Mention this list to your doctor during your next visit.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
