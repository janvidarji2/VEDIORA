import React, { useState, useEffect } from 'react';
import {
  AIBotSticker,
  PillSticker,
  RiskAlertSticker
} from '../common/Stickers';
import { Check, AlertTriangle, ArrowRight, Zap } from 'lucide-react';

export const AISafetyCoreInteractive = ({ onSeeRisk }) => {
  const [currentPairIdx, setCurrentPairIdx] = useState(0);

  const pairs = [
    { a: 'Warfarin 5mg', colorA: 'coral', b: 'Aspirin 75mg', colorB: 'coral', flag: 'High Bleed Risk' },
    { a: 'Metformin 1000mg', colorA: 'purple', b: 'Glimepiride 2mg', colorB: 'yellow', flag: 'Hypoglycemia' },
    { a: 'Warfarin 5mg', colorA: 'coral', b: 'Celecoxib 200mg', colorB: 'peach', flag: 'CYP2C9 Lag' },
    { a: 'Lisinopril 10mg', colorA: 'mint', b: 'Atorvastatin 20mg', colorB: 'purple', flag: 'Safe' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPairIdx((prev) => (prev + 1) % pairs.length);
    }, 2200);
    return () => clearInterval(timer);
  }, [pairs.length]);

  const currentPair = pairs[currentPairIdx];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto text-center select-none">
      {/* Small Section Pill */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-extrabold mb-4">
        <span>🤖</span>
        <span>AI ANALYSIS</span>
      </div>

      {/* Large Heading */}
      <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight mb-8">
        Now, Let AI Check.
      </h2>

      {/* Visual AI Hub */}
      <div className="max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-white border-2 border-purple-200 shadow-sticker space-y-8">
        {/* Center AI Bot with Combinations Animation */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="relative">
            <AIBotSticker size="xl" />
          </div>

          {/* Active Animated Combination Stream */}
          <div className="p-4 rounded-2xl bg-purple-50/80 border-2 border-purple-200 flex items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <PillSticker color={currentPair.colorA} size="sm" />
              <span className="text-xs font-extrabold text-slate-900">{currentPair.a}</span>
            </div>

            <span className="text-sm font-extrabold text-purple-600">+</span>

            <div className="flex items-center gap-2">
              <PillSticker color={currentPair.colorB} size="sm" rotate="45" />
              <span className="text-xs font-extrabold text-slate-900">{currentPair.b}</span>
            </div>
          </div>

          {/* Small Counter Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-extrabold">
            <Zap className="w-3.5 h-3.5 text-purple-600" />
            <span>12 combinations checked</span>
          </div>
        </div>

        {/* 3 Animated Checkmarks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto text-xs font-extrabold text-slate-800">
          <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800">
            <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
            <span>Medicines identified</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800">
            <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
            <span>Medicines compared</span>
          </div>

          <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800">
            <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">✓</span>
            <span>Risks checked</span>
          </div>
        </div>

        {/* Automatic Risk Discovery Result */}
        <div className="pt-4 border-t-2 border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-200">
          <div className="flex items-center gap-3">
            <RiskAlertSticker level="moderate" size="sm" />
            <div className="text-left">
              <span className="text-xs font-extrabold text-amber-900 block">1 potential risk found</span>
              <span className="text-[11px] text-amber-700">Warfarin + Aspirin overlap</span>
            </div>
          </div>

          <button
            onClick={onSeeRisk}
            className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <span>See the risk →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
