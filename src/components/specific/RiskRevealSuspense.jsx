import React, { useState } from 'react';
import {
  Capsule3D,
  RiskNode3D
} from '../common/MedicalObjects';
import { ChevronDown, ChevronUp, MessageSquare, ArrowRight, Stethoscope, ShieldCheck } from 'lucide-react';

export const RiskRevealSuspense = ({ onDiscussDoctor }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showFullEvidence, setShowFullEvidence] = useState(false);

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b border-intel-border pb-4 mb-16 font-mono text-xs text-intel-muted">
        <span className="text-intel-cyan font-bold tracking-widest">[ 06 / RISK REVEAL ]</span>
        <span>EVIDENCE-BASED SAFETY DISCLOSURE</span>
      </div>

      {/* Main Suspense Container */}
      <div className="max-w-4xl mx-auto rounded-3xl intel-panel border border-intel-border p-8 sm:p-12 space-y-8 text-center">
        {/* Initial Check Complete Status */}
        <div className="flex items-center justify-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-intel-cyan animate-ping" />
          <span className="font-mono text-xs font-bold text-intel-cyan uppercase tracking-widest">
            SAFETY CHECK COMPLETE // 12 COMBINATIONS ANALYZED
          </span>
        </div>

        {/* Suspenseful 01 Potential Risk Counter */}
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-intel-ivory font-display tracking-tight leading-none">
            01 POTENTIAL RISK.
          </h2>
          <p className="text-sm text-intel-muted font-medium max-w-md mx-auto">
            1 significant pharmacodynamic synergy discovered requiring clinical review.
          </p>
        </div>

        {/* The Two Interacting Medicines */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 py-6">
          <Capsule3D name="Warfarin" dose="5 MG" color="coral" size="lg" />
          <span className="font-mono text-xl font-extrabold text-intel-coral">⚡</span>
          <Capsule3D name="Aspirin" dose="75 MG" color="coral" size="lg" />
        </div>

        {/* Risk Badge */}
        <div>
          <RiskNode3D severity="MODERATE SEVERITY" label="Co-prescription Bleed Warning" />
        </div>

        {/* "Understand why →" Trigger Button */}
        <div>
          <button
            onClick={() => setIsRevealed(!isRevealed)}
            className="px-8 py-3.5 rounded-xl bg-intel-surface hover:bg-intel-elevated border border-intel-border hover:border-intel-cyan text-intel-ivory text-xs font-mono font-bold transition-all inline-flex items-center gap-2"
          >
            <span>{isRevealed ? "COLLAPSE EXPLANATION" : "UNDERSTAND WHY →"}</span>
            {isRevealed ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-intel-cyan" />}
          </button>
        </div>

        {/* Split Visual (Section 13 Requirement: Technical Left, Human Right) */}
        {isRevealed && (
          <div className="pt-8 border-t border-intel-border grid grid-cols-1 md:grid-cols-2 gap-8 text-left animate-pop-in">
            {/* Left: Technical Interaction */}
            <div className="p-6 rounded-2xl bg-intel-base/80 border border-intel-border space-y-3">
              <span className="font-mono text-[10px] font-extrabold text-intel-cyan uppercase tracking-wider block">
                [ TECHNICAL PHARMACOKINETICS ]
              </span>
              <h4 className="text-base font-extrabold text-intel-ivory font-display">
                Dual Hemostasis Inhibition
              </h4>
              <p className="text-xs text-intel-muted leading-relaxed font-medium">
                Warfarin competitively inhibits VKORC1 to suppress factors II, VII, IX, and X. Aspirin irreversibly acetylates COX-1, halting thromboxane A2 platelet aggregation. Concurrent administration increases major GI hemorrhage relative risk by 2.4x.
              </p>
            </div>

            {/* Right: Human Dialogue Bubble Explanation */}
            <div className="p-6 rounded-2xl bg-intel-surface border border-intel-border space-y-4 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] font-extrabold text-intel-mint uppercase tracking-wider block mb-2">
                  [ PLAIN-LANGUAGE SUMMARY ]
                </span>
                <div className="p-4 rounded-2xl bg-intel-elevated border border-intel-mint/30 text-xs text-intel-ivory leading-relaxed font-medium relative">
                  <span className="text-lg mr-1.5">💬</span>
                  "These medicines both thin your blood in different ways. Taking both together without regular doctor monitoring could cause easy bruising or bleeding from small cuts."
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={onDiscussDoctor}
                  className="w-full py-3 rounded-xl bg-intel-electric hover:bg-intel-violet text-white text-xs font-display font-extrabold shadow-violet-glow transition-all flex items-center justify-center gap-2"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Discuss With Your Doctor →</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
