import React, { useState } from 'react';
import {
  DoctorShah,
  MedicinePill
} from '../characters/Characters';
import { Stethoscope, ArrowRight, ChevronDown, ChevronUp, AlertTriangle } from 'lucide-react';

export const DoctorRiskExplanation = ({ onDiscussDoctor }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <section className="py-28 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="text-center max-w-xl mx-auto space-y-3 mb-16">
        <span className="font-mono text-xs font-extrabold text-vediora-coral uppercase tracking-widest block">
          [ CLINICAL RISK DISCOVERY ]
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold text-vediora-violet font-display tracking-tight leading-[0.95]">
          POTENTIAL INTERACTION.
        </h2>
        <p className="text-sm text-vediora-muted font-medium">
          Dr. Shah explains the discovered synergy between Warfarin and Aspirin.
        </p>
      </div>

      {/* Main Doctor-Led Explanation Container */}
      <div className="max-w-4xl mx-auto rounded-[36px] bg-white border border-vediora-border shadow-paper p-8 sm:p-12 space-y-8">
        {/* The Two Interacting Medicines */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MedicinePill name="Warfarin" dose="5 mg" color="coral" className="scale-110" />
          <span className="font-mono text-xl font-extrabold text-vediora-coral">⚡</span>
          <MedicinePill name="Aspirin" dose="75 mg" color="coral" className="scale-110" />
        </div>

        {/* Risk Level Badge */}
        <div className="flex justify-center">
          <span className="font-mono text-xs font-extrabold px-4 py-1.5 rounded-full bg-vediora-lightCoral text-vediora-coral border border-vediora-coral/30 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>MODERATE SEVERITY · POTENTIAL INTERACTION</span>
          </span>
        </div>

        {/* Doctor Character with Speech Bubble (Section 13 Requirement) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-4">
          {/* Doctor Character standing beside */}
          <div className="flex-shrink-0">
            <DoctorShah size="lg" />
          </div>

          {/* Editorial Speech Bubble */}
          <div className="speech-bubble p-6 max-w-md text-left space-y-4">
            <span className="font-mono text-[10px] text-vediora-lavender font-extrabold uppercase block">
              DR. SHAH SAYS:
            </span>
            <p className="text-sm font-extrabold text-vediora-charcoal leading-relaxed">
              "Warfarin and Aspirin both thin the blood in different ways. Taking them together without regular INR blood tests can increase the chance of bleeding from small cuts."
            </p>

            <div className="pt-2">
              <button
                onClick={onDiscussDoctor}
                className="w-full py-3 rounded-full bg-vediora-violet hover:bg-vediora-deepViolet text-white text-xs font-display font-extrabold shadow-character transition-all flex items-center justify-center gap-2"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Discuss With Your Doctor →</span>
              </button>
            </div>
          </div>
        </div>

        {/* Progressive Disclosure: "More details" button */}
        <div className="pt-4 border-t border-vediora-border text-center">
          <button
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="font-mono text-xs text-vediora-muted hover:text-vediora-violet font-bold transition-all inline-flex items-center gap-1.5"
          >
            <span>{isDetailsOpen ? "Hide Clinical Pharmacology" : "More Technical Details ↓"}</span>
            {isDetailsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {isDetailsOpen && (
            <div className="mt-4 p-6 rounded-2xl bg-vediora-canvasMuted/60 text-left text-xs text-vediora-charcoal space-y-2 animate-pop-in">
              <p><strong>Mechanism:</strong> Dual hemostasis inhibition (VKORC1 antagonism + COX-1 platelet inhibition).</p>
              <p><strong>Clinical Recommendation:</strong> Consider gastroprotective PPI co-prescription and monitor fecal occult blood.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
