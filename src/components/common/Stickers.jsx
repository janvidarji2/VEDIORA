import React from 'react';

// 1. Premium Illustrated Doctor Badge / Avatar (Cardiologist, Diabetologist, GP)
export const DoctorSticker = ({ specialty = 'Heart', size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  const badgeTheme = {
    Heart: { border: 'border-universe-coral/50', icon: '🫀', text: 'Cardiology', accent: '#EF4444' },
    Diabetes: { border: 'border-universe-violet/50', icon: '🩸', text: 'Diabetology', accent: '#8B5CF6' },
    Ortho: { border: 'border-universe-cyan/50', icon: '🦴', text: 'Orthopedics', accent: '#06B6D4' },
    GP: { border: 'border-universe-mint/50', icon: '🩺', text: 'Internal Med', accent: '#10B981' }
  };

  const theme = badgeTheme[specialty] || badgeTheme.Heart;

  return (
    <div className={`relative inline-flex items-center justify-center rounded-2xl bg-universe-surface border ${theme.border} shadow-lg p-2 select-none transform hover:scale-105 transition-transform ${sizeMap[size] || sizeMap.md} ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="docSkinSticker" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ECC0A2" />
            <stop offset="100%" stopColor="#D99B77" />
          </linearGradient>
          <linearGradient id="docCoatSticker" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
        </defs>
        {/* Doctor Lab Coat */}
        <path d="M14 58V40C14 30 22 26 32 26C42 26 50 30 50 40V58H14Z" fill="url(#docCoatSticker)" />
        <path d="M26 26L32 38L38 26" fill="#1E1B4B" />
        <path d="M22 27L30 44H26L16 34" fill="#FFFFFF" />
        <path d="M42 27L34 44H38L48 34" fill="#FFFFFF" />
        {/* Stethoscope */}
        <path d="M24 28C24 35 27 41 32 41C37 41 40 35 40 28" fill="none" stroke={theme.accent} strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="44" r="2.5" fill="#E2E8F0" stroke={theme.accent} strokeWidth="1" />

        {/* Neck */}
        <rect x="29" y="20" width="6" height="8" fill="url(#docSkinSticker)" />

        {/* Head Contour */}
        <circle cx="32" cy="18" r="9" fill="url(#docSkinSticker)" />
        {/* Hair */}
        <path d="M23 16C23 10 27 7 32 7C37 7 41 10 41 16C41 12 37 9 32 9C27 9 23 12 23 16Z" fill="#1E1228" />
        
        {/* Refined Facial Features */}
        <circle cx="29" cy="17" r="0.9" fill="#1E1B4B" />
        <circle cx="35" cy="17" r="0.9" fill="#1E1B4B" />
        <path d="M30.5 22C31.5 23 32.5 23 33.5 22" stroke="#9A4E29" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
      {/* Tiny Specialty Icon Badge */}
      <span className="absolute -bottom-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-universe-surface border border-universe-border shadow-sm font-extrabold text-white">
        {theme.icon}
      </span>
    </div>
  );
};

// 2. Premium Illustrated Patient Badge / Avatar (Rajesh Kumar)
export const PatientSticker = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  return (
    <div className={`relative inline-flex items-center justify-center rounded-2xl bg-universe-surface border border-universe-violet/50 shadow-lg p-2 select-none transform hover:scale-105 transition-transform ${sizeMap[size] || sizeMap.md} ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="patSkinSticker" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ECC0A2" />
            <stop offset="100%" stopColor="#D99B77" />
          </linearGradient>
          <linearGradient id="patCardiganSticker" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
        </defs>
        {/* Cardigan Body */}
        <path d="M14 58V42C14 32 22 28 32 28C42 28 50 32 50 42V58H14Z" fill="url(#patCardiganSticker)" />
        <path d="M28 28L32 36L36 28" fill="#E0F2FE" />
        <line x1="32" y1="36" x2="32" y2="58" stroke="#4338CA" strokeWidth="1.5" />

        {/* Neck */}
        <rect x="29" y="21" width="6" height="8" fill="url(#patSkinSticker)" />

        {/* Head Contour */}
        <circle cx="32" cy="18" r="9" fill="url(#patSkinSticker)" />
        {/* Silver Hair */}
        <path d="M23 16C23 9 27 6 32 6C37 6 41 9 41 16C41 11 37 8 32 8C27 8 23 11 23 16Z" fill="#E2E8F0" />
        
        {/* Glasses */}
        <rect x="26" y="15" width="4.5" height="3.5" rx="1" fill="none" stroke="#64748B" strokeWidth="0.8" />
        <rect x="33.5" y="15" width="4.5" height="3.5" rx="1" fill="none" stroke="#64748B" strokeWidth="0.8" />
        <line x1="30.5" y1="16.5" x2="33.5" y2="16.5" stroke="#64748B" strokeWidth="0.8" />

        {/* Eyes Behind Glasses */}
        <circle cx="28.2" cy="16.7" r="0.7" fill="#1E1B4B" />
        <circle cx="35.7" cy="16.7" r="0.7" fill="#1E1B4B" />

        {/* Dignified Expression */}
        <path d="M30 22C31 23 33 23 34 22" stroke="#9A4E29" strokeWidth="0.8" strokeLinecap="round" />
      </svg>
      <span className="absolute -bottom-1 -right-1 text-[9px] px-1.5 py-0.5 rounded-full bg-universe-surface border border-universe-mint/50 font-bold text-universe-mint">
        68M
      </span>
    </div>
  );
};

// 3. Illustrated Prescription Slip Sticker
export const PrescriptionSticker = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-24 h-28'
  };

  return (
    <div className={`relative inline-flex items-center justify-center rounded-2xl bg-universe-surface border border-universe-cyan/40 shadow-lg p-2 select-none transform hover:rotate-3 hover:scale-105 transition-transform ${sizeMap[size] || sizeMap.md} ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
        <rect x="12" y="10" width="40" height="48" rx="6" fill="#0A122E" stroke="#06B6D4" strokeWidth="1" />
        <text x="18" y="25" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#06B6D4">Rx</text>
        <line x1="18" y1="32" x2="44" y2="32" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="38" x2="38" y2="38" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="18" y1="44" x2="42" y2="44" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="24" y="6" width="16" height="6" rx="3" fill="#8B5CF6" />
      </svg>
      <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-universe-surface border border-universe-cyan/40 font-bold text-universe-cyan">
        Rx
      </span>
    </div>
  );
};

// 4. Illustrated Capsule / Tablet Pill Sticker
export const PillSticker = ({ color = 'purple', size = 'md', rotate = '0', className = '' }) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const colorPalettes = {
    purple: { top: '#8B5CF6', bot: '#FFFFFF', stroke: '#7C3AED' },
    mint: { top: '#10B981', bot: '#ECFDF5', stroke: '#059669' },
    peach: { top: '#F59E0B', bot: '#FEF3C7', stroke: '#D97706' },
    coral: { top: '#EF4444', bot: '#FEE2E2', stroke: '#DC2626' },
    yellow: { top: '#FACC15', bot: '#FEF9C3', stroke: '#CA8A04' }
  };

  const current = colorPalettes[color] || colorPalettes.purple;

  return (
    <div
      style={{ transform: `rotate(${rotate}deg)` }}
      className={`relative inline-flex items-center justify-center p-1 select-none transform hover:scale-110 transition-transform ${sizeMap[size] || sizeMap.md} ${className}`}
    >
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-md">
        <g transform="rotate(45 32 32)">
          <path d="M22 32V20C22 14.4772 26.4772 10 32 10C37.5228 10 42 14.4772 42 20V32H22Z" fill={current.top} />
          <path d="M22 32V44C22 49.5228 26.4772 54 32 54C37.5228 54 42 49.5228 42 44V32H22Z" fill={current.bot} stroke={current.stroke} strokeWidth="1.5" />
          <line x1="22" y1="32" x2="42" y2="32" stroke={current.stroke} strokeWidth="1.5" />
          <path d="M26 16C26 14 28 12 30 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
};

// 5. Illustrated Friendly AI Bot Sticker
export const AIBotSticker = ({ size = 'md', isPulse = true, className = '' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  return (
    <div className={`relative inline-flex items-center justify-center rounded-2xl bg-universe-surface border border-universe-cyan/40 shadow-glow-cyan p-2 select-none transform hover:scale-105 transition-transform ${sizeMap[size] || sizeMap.md} ${isPulse ? 'animate-bounce-gentle' : ''} ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-md">
        <line x1="32" y1="12" x2="32" y2="18" stroke="#06B6D4" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="10" r="3.5" fill="#06B6D4" />
        <rect x="14" y="18" width="36" height="32" rx="10" fill="#060B1E" stroke="#8B5CF6" strokeWidth="2" />
        <rect x="18" y="24" width="28" height="16" rx="5" fill="#040714" />
        <circle cx="26" cy="32" r="3" fill="#06B6D4" />
        <circle cx="38" cy="32" r="3" fill="#06B6D4" />
        <path d="M28 44C30 45.5 34 45.5 36 44" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className="absolute -bottom-1 -right-1 text-[9px] px-1.5 py-0.5 rounded-full bg-universe-cyan text-universe-void font-bold">
        AI
      </span>
    </div>
  );
};

// 6. Illustrated Embossed Safety Shield Sticker
export const SafetyShieldSticker = ({ size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28'
  };

  return (
    <div className={`relative inline-flex items-center justify-center rounded-2xl bg-universe-surface border border-universe-mint/50 shadow-glow-mint p-2 select-none transform hover:scale-105 transition-transform ${sizeMap[size] || sizeMap.md} ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-md">
        <path d="M32 10L48 16V30C48 42 41 50 32 54C23 50 16 42 16 30V16L32 10Z" fill="#10B981" />
        <path d="M25 31L30 36L40 24" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

// 7. Illustrated Risk Alert Sticker
export const RiskAlertSticker = ({ level = 'moderate', size = 'md', className = '' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const isHigh = level === 'high';

  return (
    <div className={`relative inline-flex items-center justify-center rounded-2xl bg-universe-surface ${isHigh ? 'border border-universe-coral/50 shadow-glow-coral' : 'border border-universe-amber/50 shadow-glow-amber'} p-2 select-none transform hover:scale-105 transition-transform ${sizeMap[size] || sizeMap.md} ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" className="w-full h-full drop-shadow-md">
        <path d="M32 12L52 48H12L32 12Z" fill={isHigh ? '#EF4444' : '#F59E0B'} />
        <line x1="32" y1="24" x2="32" y2="36" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="32" cy="42" r="2" fill="#FFFFFF" />
      </svg>
    </div>
  );
};
