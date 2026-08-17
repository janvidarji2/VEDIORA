import React, { useState } from 'react';
import { ArrowRight, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

export const CircularRiskIndicator = ({ onDiscussWithDoctor }) => {
  const [isExplained, setIsExplained] = useState(false);

  return (
    <section id="section-risk" className="py-24 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b border-minimal-border pb-4 mb-16 font-mono text-xs text-minimal-muted">
        <span className="text-minimal-violet font-extrabold tracking-widest">[ 04 / RISK ANALYSIS ]</span>
        <span>CIRCULAR SEVERITY INDEX</span>
      </div>

      <div className="max-w-2xl mx-auto rounded-[36px] bg-white border border-minimal-border shadow-minimal p-8 sm:p-12 text-center space-y-8">
        {/* Animated Circular Arc Risk Indicator (Section 13) */}
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Arc */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#F3F2ED"
              strokeWidth="7"
            />
            {/* Animated Risk Arc (60% coverage for Moderate) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="7"
              strokeDasharray="251.2"
              strokeDashoffset="100"
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-[10px] text-minimal-muted uppercase tracking-widest block">SEVERITY</span>
            <span className="font-display text-2xl font-extrabold text-minimal-amber">MODERATE</span>
          </div>
        </div>

        {/* Short Text */}
        <div className="space-y-1">
          <h3 className="font-display font-extrabold text-xl text-minimal-violet">
            1 Potential Interaction
          </h3>
          <p className="text-xs text-minimal-muted font-medium">
            Warfarin + Aspirin concurrent administration detected.
          </p>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={() => setIsExplained(!isExplained)}
            className="px-8 py-3.5 rounded-full bg-minimal-violet hover:bg-minimal-deepViolet text-white font-display font-extrabold text-xs shadow-minimal hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>{isExplained ? "Hide Explanation" : "Understand Risk →"}</span>
            {isExplained ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Progressive Disclosure Explanation */}
        {isExplained && (
          <div className="pt-6 border-t border-minimal-border text-left space-y-3 animate-pop-in">
            <div className="p-4 rounded-2xl bg-minimal-bgSurface border border-minimal-border text-xs text-minimal-text space-y-1.5">
              <span className="font-mono text-[10px] font-extrabold text-minimal-violet uppercase block">
                WHAT DOES THIS MEAN?
              </span>
              <p className="leading-relaxed">
                Both Warfarin and Aspirin thin the blood using different body mechanisms. Taking them together without a doctor's review can make minor cuts bleed longer.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onDiscussWithDoctor}
                className="w-full py-3 rounded-full bg-minimal-purple hover:bg-purple-700 text-white font-display font-extrabold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Full Graphical Reports →</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
