import React from 'react';

export const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendPositive,
  colorScheme = 'cyan', // 'cyan' | 'red' | 'amber' | 'emerald' | 'blue'
  onClick
}) => {
  const schemes = {
    cyan: {
      border: 'hover:border-cyan-400/50',
      iconBg: 'bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400',
      accent: 'from-cyan-500/10 to-transparent'
    },
    red: {
      border: 'hover:border-red-400/50 border-red-200/70 dark:border-red-900/40 bg-red-50/30 dark:bg-red-950/10',
      iconBg: 'bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400',
      accent: 'from-red-500/10 to-transparent'
    },
    amber: {
      border: 'hover:border-amber-400/50',
      iconBg: 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400',
      accent: 'from-amber-500/10 to-transparent'
    },
    emerald: {
      border: 'hover:border-emerald-400/50',
      iconBg: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400',
      accent: 'from-emerald-500/10 to-transparent'
    },
    blue: {
      border: 'hover:border-blue-400/50',
      iconBg: 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400',
      accent: 'from-blue-500/10 to-transparent'
    }
  };

  const scheme = schemes[colorScheme] || schemes.cyan;

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-card transition-all duration-300 ${scheme.border} ${onClick ? 'cursor-pointer hover:shadow-elevated hover:-translate-y-0.5' : ''}`}
    >
      <div className={`absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl ${scheme.accent} rounded-bl-full pointer-events-none`} />
      
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200">{title}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
              {value}
            </span>
            {subtitle && (
              <span className="text-xs text-slate-700 dark:text-slate-200 font-medium">
                {subtitle}
              </span>
            )}
          </div>
        </div>

        {Icon && (
          <div className={`rounded-xl p-3 ${scheme.iconBg}`}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      {trend && (
        <div className="mt-3 flex items-center gap-1.5 text-xs">
          <span className={`font-medium ${trendPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
            {trend}
          </span>
          <span className="text-slate-700 dark:text-slate-200">vs last check</span>
        </div>
      )}
    </div>
  );
};
