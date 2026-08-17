import React, { useState } from 'react';
import {
  PillSticker,
  RiskAlertSticker
} from '../common/Stickers';
import { ChevronDown, ChevronUp, Stethoscope, ShieldCheck, ArrowRight } from 'lucide-react';

export const RiskDetectionSection = ({ onLearnMore }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center select-none">
      {/* Small Section Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-800 text-xs font-extrabold mb-4">
        <span>⚡</span>
        <span>INTERACTION DISCOVERY</span>
      </div>

      {/* Large Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight mb-8">
        Potential Risk Detected.
      </h2>

      {/* Main Interaction Card */}
      <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border-2 border-amber-200 shadow-sticker space-y-8">
        {/* Two Giant Medicine Stickers with Lightning */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {/* Medicine A */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-purple-50 border-2 border-purple-200 w-44">
            <PillSticker color="coral" size="lg" />
            <span className="text-sm font-extrabold text-slate-900 mt-2">Warfarin</span>
            <span className="text-xs font-bold text-purple-600">5 mg</span>
          </div>

          {/* Lightning Bolt */}
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border-2 border-amber-300 text-amber-600 font-extrabold text-2xl flex items-center justify-center animate-bounce-gentle">
            ⚡
          </div>

          {/* Medicine B */}
          <div className="flex flex-col items-center p-4 rounded-2xl bg-purple-50 border-2 border-purple-200 w-44">
            <PillSticker color="coral" size="lg" rotate="45" />
            <span className="text-sm font-extrabold text-slate-900 mt-2">Aspirin</span>
            <span className="text-xs font-bold text-purple-600">75 mg</span>
          </div>
        </div>

        {/* Risk Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border-2 border-amber-300 text-amber-900 text-xs font-extrabold">
          <span>🟠</span>
          <span>MODERATE • Potential Interaction</span>
        </div>

        {/* One Short Sentence */}
        <p className="text-base text-slate-700 font-bold max-w-md mx-auto">
          These medicines may increase the chance of bleeding when combined.
        </p>

        {/* Expandable "Why? ↓" Button for Progressive Disclosure */}
        <div className="pt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-6 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-extrabold transition-all inline-flex items-center gap-2"
          >
            <span>{isExpanded ? 'Hide Details' : 'Why?'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Progressive Disclosure Panel (Appears on click) */}
        {isExpanded && (
          <div className="pt-6 border-t-2 border-slate-100 text-left space-y-4 animate-pop-in">
            <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200">
              <span className="text-xs font-extrabold text-purple-900 block mb-1">
                💡 What is happening:
              </span>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Warfarin and Aspirin both thin the blood using different body mechanisms. Taking both together without a doctor's review can make minor cuts or stomach irritation bleed longer.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 flex items-start gap-3">
              <span className="text-lg">🛡️</span>
              <div>
                <span className="text-xs font-extrabold text-emerald-900 block mb-0.5">
                  Recommended Next Step:
                </span>
                <p className="text-xs text-emerald-800 font-medium">
                  Review your complete medicine list with your cardiologist or primary doctor. Do not stop medicines on your own.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
