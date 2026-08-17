import React from 'react';
import { AlertTriangle, AlertCircle, Info, CheckCircle2, Copy } from 'lucide-react';

export const RiskBadge = ({ severity = 'LOW', size = 'md', showIcon = true, label }) => {
  const sev = severity.toUpperCase();

  const config = {
    HIGH: {
      bg: 'bg-red-50 dark:bg-red-950/40',
      text: 'text-red-700 dark:text-red-400',
      border: 'border-red-200 dark:border-red-800/60',
      icon: AlertTriangle,
      defaultLabel: 'High Risk Alert',
      dot: 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]'
    },
    MODERATE: {
      bg: 'bg-amber-50 dark:bg-amber-950/40',
      text: 'text-amber-700 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-800/60',
      icon: AlertCircle,
      defaultLabel: 'Moderate Warning',
      dot: 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
    },
    LOW: {
      bg: 'bg-cyan-50 dark:bg-cyan-950/40',
      text: 'text-cyan-800 dark:text-cyan-300',
      border: 'border-cyan-200 dark:border-cyan-800/60',
      icon: Info,
      defaultLabel: 'Low Risk Advisory',
      dot: 'bg-cyan-500'
    },
    DUPLICATE: {
      bg: 'bg-purple-50 dark:bg-purple-950/40',
      text: 'text-purple-700 dark:text-purple-400',
      border: 'border-purple-200 dark:border-purple-800/60',
      icon: Copy,
      defaultLabel: 'Duplicate Detected',
      dot: 'bg-purple-500'
    },
    SAFE: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/40',
      text: 'text-emerald-700 dark:text-emerald-400',
      border: 'border-emerald-200 dark:border-emerald-800/60',
      icon: CheckCircle2,
      defaultLabel: 'No Known Interaction',
      dot: 'bg-emerald-500'
    }
  };

  const active = config[sev] || config.LOW;
  const IconComponent = active.icon;
  const displayLabel = label || active.defaultLabel;

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-xs font-semibold px-2.5 py-1 gap-1.5',
    lg: 'text-sm font-semibold px-3.5 py-1.5 gap-2'
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border ${active.bg} ${active.text} ${active.border} ${sizeClasses[size]} transition-colors`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${active.dot} animate-pulse`} />
      {showIcon && <IconComponent className={size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />}
      <span>{displayLabel}</span>
    </span>
  );
};
