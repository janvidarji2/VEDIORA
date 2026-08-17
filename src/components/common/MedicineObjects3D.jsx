import React, { useState } from 'react';

// 1. Two-Tone 3D Capsule with Specular Shine & Hover Tooltip
export const Capsule3D = ({
  name = "Metformin",
  dose = "500 mg",
  freq = "Twice daily",
  doctor = "Dr. Patel",
  topColor = "#8B5CF6",
  botColor = "#FFFFFF",
  size = "md",
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-16",
    md: "w-10 h-20",
    lg: "w-12 h-24"
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300 ${isHovered ? 'scale-115 -translate-y-2 z-40' : 'z-10'} ${className}`}
    >
      <svg viewBox="0 0 60 110" className={`${sizeClasses[size] || sizeClasses.md} drop-shadow-xl transform -rotate-12`}>
        <defs>
          <linearGradient id={`capsuleShine-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
            <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Top Half */}
        <path d="M10 50V25C10 14 19 5 30 5C41 5 50 14 50 25V50H10Z" fill={topColor} />
        {/* Specular Top Shine */}
        <path d="M16 16C20 10 26 8 32 8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
        
        {/* Center Ring */}
        <line x1="10" y1="50" x2="50" y2="50" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" />

        {/* Bottom Half */}
        <path d="M10 50V75C10 86 19 95 30 95C41 95 50 86 50 75V50H10Z" fill={botColor} />
        {/* Specular Bottom Shine */}
        <path d="M16 65V80" stroke="rgba(0,0,0,0.12)" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Floating Meta Tooltip (Section 14) */}
      {isHovered && (
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-2xl bg-universe-card border border-universe-cyan/40 shadow-glow-cyan text-left font-mono text-[10px] whitespace-nowrap pointer-events-none animate-pop-in z-50">
          <span className="font-extrabold text-white block text-xs">{name} · {dose}</span>
          <span className="text-universe-cyan block text-[9px] font-bold mt-0.5">{freq}</span>
          <span className="text-universe-muted block text-[8px] mt-0.5">Rx by {doctor}</span>
        </div>
      )}
    </div>
  );
};

// 2. Scored 3D Tablet with Bevel Highlight
export const Tablet3D = ({
  name = "Aspirin",
  dose = "75 mg",
  freq = "Once daily",
  doctor = "Dr. Shah",
  color = "#F8F7F4",
  scoreColor = "#CBD5E1",
  size = "md",
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-18 h-18"
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex items-center justify-center cursor-pointer select-none transition-all duration-300 ${isHovered ? 'scale-115 -translate-y-2 z-40' : 'z-10'} ${className}`}
    >
      <svg viewBox="0 0 70 70" className={`${sizeClasses[size] || sizeClasses.md} drop-shadow-xl`}>
        {/* Base Tablet Bevel Shadow */}
        <circle cx="35" cy="38" r="28" fill="rgba(0,0,0,0.3)" />
        <circle cx="35" cy="35" r="28" fill={color} stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
        {/* Scored Center Groove */}
        <line x1="35" y1="12" x2="35" y2="58" stroke={scoreColor} strokeWidth="2.5" strokeLinecap="round" />
        {/* Top Rim Highlight */}
        <path d="M15 25C20 16 30 12 40 12" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      </svg>

      {/* Floating Meta Tooltip */}
      {isHovered && (
        <div className="absolute -top-14 left-1/2 -translate-x-1/2 px-3.5 py-2 rounded-2xl bg-universe-card border border-universe-cyan/40 shadow-glow-cyan text-left font-mono text-[10px] whitespace-nowrap pointer-events-none animate-pop-in z-50">
          <span className="font-extrabold text-white block text-xs">{name} · {dose}</span>
          <span className="text-universe-cyan block text-[9px] font-bold mt-0.5">{freq}</span>
          <span className="text-universe-muted block text-[8px] mt-0.5">Rx by {doctor}</span>
        </div>
      )}
    </div>
  );
};

// 3. Glass Medicine Bottle
export const Bottle3D = ({ name = "Lisinopril Solution", dose = "10 mg/5ml", className = "" }) => {
  return (
    <div className={`relative inline-flex flex-col items-center select-none transform hover:scale-105 transition-transform ${className}`}>
      <svg viewBox="0 0 70 100" className="w-14 h-20 drop-shadow-2xl">
        {/* Cap */}
        <rect x="25" y="5" width="20" height="10" rx="2" fill="#8B5CF6" />
        {/* Neck */}
        <rect x="28" y="15" width="14" height="8" fill="#1E1B4B" />
        {/* Bottle Body */}
        <rect x="15" y="23" width="40" height="70" rx="8" fill="#0A122E" stroke="#06B6D4" strokeWidth="2" />
        {/* Liquid level */}
        <path d="M16 55H54V85C54 89 50 92 46 92H24C20 92 16 89 16 85V55Z" fill="rgba(6, 182, 212, 0.45)" />
        {/* Label */}
        <rect x="20" y="40" width="30" height="26" rx="2" fill="#FFFFFF" />
        <line x1="24" y1="46" x2="44" y2="46" stroke="#0F172A" strokeWidth="2" />
        <line x1="24" y1="52" x2="38" y2="52" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="24" y1="58" x2="42" y2="58" stroke="#06B6D4" strokeWidth="1" />
      </svg>
    </div>
  );
};

// 4. Blister Pack 3D
export const BlisterPack3D = ({ className = "" }) => {
  return (
    <div className={`relative inline-flex select-none transform hover:scale-105 transition-transform ${className}`}>
      <svg viewBox="0 0 100 80" className="w-22 h-18 drop-shadow-xl">
        {/* Metallic Foil Backing */}
        <rect x="5" y="5" width="90" height="70" rx="6" fill="#1E293B" stroke="#94A3B8" strokeWidth="1.5" />
        {/* Foil Bubbles */}
        <circle cx="25" cy="25" r="10" fill="#38BDF8" opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="50" cy="25" r="10" fill="#38BDF8" opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="75" cy="25" r="10" fill="#38BDF8" opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="25" cy="55" r="10" fill="#38BDF8" opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="50" cy="55" r="10" fill="#38BDF8" opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="75" cy="55" r="10" fill="#38BDF8" opacity="0.85" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    </div>
  );
};
