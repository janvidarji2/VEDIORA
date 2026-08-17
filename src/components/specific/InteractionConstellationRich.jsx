import React, { useState } from 'react';
import { Capsule3D, Tablet3D } from '../common/MedicineObjects3D';
import { AlertTriangle, ShieldAlert, ArrowRight, ChevronDown, ChevronUp, Stethoscope, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';

export const InteractionConstellationRich = ({ onExploreReports }) => {
  const [isExplaining, setIsExplaining] = useState(true);

  return (
    <section id="section-risk" className="py-28 px-6 lg:px-16 max-w-[1540px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-16 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-coral font-extrabold tracking-widest block">[ 05 / RISK DETECTION ]</span>
          <span className="text-[11px]">COMBINATORIAL INTERACTION ISOLATION</span>
        </div>
        <span className="text-universe-amber font-bold flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-universe-coral animate-pulse" />
          1 PAIRWISE INTERACTION FLAGGED
        </span>
      </div>

      {/* Main Large Glowing Interaction Card (Section 9 Requirement) */}
      <div className="max-w-5xl mx-auto rounded-[36px] universe-panel p-8 sm:p-12 text-center space-y-8 shadow-glow-coral relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute w-[500px] h-[300px] bg-universe-coral/10 rounded-full blur-3xl -top-20 -left-20 pointer-events-none" />

        {/* Section 9 Headline */}
        <div className="space-y-2 relative z-10">
          <span className="font-mono text-xs font-extrabold text-universe-coral uppercase tracking-widest block">
            INTERACTION IDENTIFIED
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            A Potential Risk Has Been Detected.
          </h2>
          <p className="text-sm text-universe-muted font-medium max-w-lg mx-auto leading-relaxed">
            Prescribed independently across two specialists without a shared cross-reconciliation ledger.
          </p>
        </div>

        {/* MEDICINE A + MEDICINE C → POTENTIAL INTERACTION (Section 9 Requirement) */}
        <div className="p-6 rounded-3xl bg-universe-surface/90 border border-universe-coral/40 space-y-6 relative z-10 shadow-rich-card">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 py-2">
            <div className="flex flex-col items-center space-y-2 animate-pop-in">
              <Tablet3D name="Warfarin" dose="5 mg" freq="Daily" doctor="Dr. Shah (Cardiology)" color="#EF4444" scoreColor="#FFFFFF" className="scale-125" />
              <div className="font-mono text-xs text-left">
                <span className="text-universe-coral font-bold block">MEDICINE A</span>
                <span className="text-white font-extrabold">Warfarin 5mg</span>
              </div>
            </div>

            {/* Glowing Connector Plus */}
            <div className="flex flex-col items-center space-y-1">
              <span className="font-mono text-3xl font-black text-universe-coral animate-pulse">+</span>
              <span className="font-mono text-[9px] text-universe-amber font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-universe-amber/10 border border-universe-amber/30">
                SYNERGY
              </span>
            </div>

            <div className="flex flex-col items-center space-y-2 animate-pop-in">
              <Tablet3D name="Aspirin" dose="75 mg" freq="Once daily" doctor="Dr. Shah (Cardiology)" color="#FFFFFF" scoreColor="#CBD5E1" className="scale-125" />
              <div className="font-mono text-xs text-left">
                <span className="text-universe-cyan font-bold block">MEDICINE C</span>
                <span className="text-white font-extrabold">Aspirin 75mg</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-universe-border/60 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-universe-muted">RESULT:</span>
              <span className="text-white font-extrabold uppercase">POTENTIAL INTERACTION</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-universe-muted">RISK:</span>
              <span className="px-3 py-1 rounded-full bg-universe-amber/20 border border-universe-amber/40 text-universe-amber font-black">
                MODERATE
              </span>
            </div>
          </div>
        </div>

        {/* Action Button: Toggle Explanation Panel */}
        <div className="relative z-10">
          <button
            onClick={() => setIsExplaining(!isExplaining)}
            className="px-8 py-3.5 rounded-full bg-universe-surface hover:bg-universe-card border border-universe-border hover:border-universe-coral text-white font-display font-extrabold text-xs shadow-sm transition-all inline-flex items-center gap-2"
          >
            <span>{isExplaining ? "Hide Risk Advisory" : "Understand Why →"}</span>
            {isExplaining ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4 text-universe-coral" />}
          </button>
        </div>

        {/* Section 9 Explanation Panel ("Why does this matter?" & "Recommended action") */}
        {isExplaining && (
          <div className="pt-6 border-t border-universe-border grid grid-cols-1 md:grid-cols-2 gap-6 text-left animate-pop-in relative z-10">
            {/* "Why does this matter?" (Section 9 Requirement) */}
            <div className="p-6 rounded-3xl bg-universe-card/90 border border-universe-border space-y-3">
              <div className="flex items-center gap-2 text-universe-cyan font-display font-extrabold text-sm">
                <HelpCircle className="w-4 h-4 text-universe-cyan" />
                <span>Why does this matter?</span>
              </div>
              <p className="text-xs text-white leading-relaxed font-medium">
                The combination may increase the potential for an adverse effect. Warfarin suppresses clotting factors while Aspirin inhibits platelet aggregation, significantly increasing bleeding duration without regular INR oversight.
              </p>
            </div>

            {/* "Recommended action" (Section 9 Requirement) */}
            <div className="p-6 rounded-3xl bg-universe-card/90 border border-universe-mint/30 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-universe-mint font-display font-extrabold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-universe-mint" />
                  <span>Recommended action</span>
                </div>
                <p className="text-xs text-white leading-relaxed font-medium mt-2">
                  Review the patient's complete medication history with a qualified healthcare professional. Do not stop or alter dosages independently.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onExploreReports}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-universe-violet to-universe-electric hover:from-universe-electric hover:to-universe-violet text-white font-display font-extrabold text-xs shadow-glow-violet transition-all flex items-center justify-center gap-2 hover:scale-[1.02]"
                >
                  <span>Explore Cross-Prescription Matrix →</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
