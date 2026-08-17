import React from 'react';
import { ShieldCheck, ShieldAlert, AlertTriangle, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const SafetyScoreGauge = ({ score = 72, status = "Needs Attention", breakdown = [], onDetailsClick }) => {
  // Calculate SVG stroke offset for 220 radius circle
  const size = 190;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // Use a 270-degree arc or full circle
  const progress = Math.min(100, Math.max(0, score));
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  let scoreColor = '#f59e0b'; // amber
  let scoreGlow = 'rgba(245, 158, 11, 0.3)';
  let bgGradient = 'from-amber-500/10 via-amber-500/5 to-transparent';
  let badgeStyle = 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800';

  if (score >= 85) {
    scoreColor = '#10b981'; // emerald
    scoreGlow = 'rgba(16, 185, 129, 0.3)';
    bgGradient = 'from-emerald-500/10 via-emerald-500/5 to-transparent';
    badgeStyle = 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800';
  } else if (score < 60) {
    scoreColor = '#ef4444'; // red
    scoreGlow = 'rgba(239, 68, 68, 0.3)';
    bgGradient = 'from-red-500/10 via-red-500/5 to-transparent';
    badgeStyle = 'bg-red-100 dark:bg-red-950/60 text-red-800 dark:text-red-300 border-red-200 dark:border-red-800';
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card">
      <div className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-br ${bgGradient} rounded-full blur-3xl pointer-events-none`} />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        {/* Left Side: Circular Gauge */}
        <div className="flex items-center gap-6">
          <div className="relative flex items-center justify-center">
            <svg width={size} height={size} className="transform -rotate-90">
              {/* Background Track */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className="text-slate-100 dark:text-slate-800"
                fill="none"
              />
              {/* Progress Stroke */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={scoreColor}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
                style={{
                  transition: 'stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1), stroke 0.5s ease',
                  filter: `drop-shadow(0 0 6px ${scoreGlow})`
                }}
              />
            </svg>

            {/* Centered Score Readout */}
            <div className="absolute flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                {score}
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                out of 100
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                Safety Index
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${badgeStyle}`}>
                {status}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              Medication Safety Score
            </h3>
            <p className="text-sm text-slate-700 dark:text-slate-200 mt-1 max-w-sm">
              Continuous polypharmacy evaluation comparing 12 medications across 4 active specialist prescriptions.
            </p>
          </div>
        </div>

        {/* Right Side: Score Breakdown Factors */}
        <div className="w-full lg:w-auto min-w-[280px] bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/80">
          <p className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider mb-2.5 flex items-center justify-between">
            <span>Score Factors</span>
            <span className="text-[11px] font-normal text-slate-700 dark:text-slate-200">AI Risk Matrix</span>
          </p>

          <div className="space-y-2">
            {breakdown.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-200/50 dark:border-slate-700/50 last:border-0">
                <span className="text-slate-700 dark:text-slate-300 font-medium">{item.label}</span>
                <span className={`font-bold ${item.color}`}>
                  {item.deduction ? `${item.deduction} pts` : item.bonus ? `+${item.bonus} pts` : '0 pts'}
                </span>
              </div>
            ))}
          </div>

          {onDetailsClick && (
            <button
              onClick={onDetailsClick}
              className="mt-3 w-full py-1.5 px-3 rounded-lg text-xs font-semibold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 transition-colors flex items-center justify-center gap-1"
            >
              <span>View Full Clinical Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
