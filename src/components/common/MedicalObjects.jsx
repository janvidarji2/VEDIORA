import React from 'react';

// 1. Precision 3D Digital Prescription Document
export const PrescriptionPaper3D = ({ title = "RX-CRD-8821", doctor = "Dr. Rahul Shah", date = "02 AUG 2026", size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-28 h-36 p-2.5",
    md: "w-40 h-52 p-4",
    lg: "w-52 h-68 p-5",
  };

  return (
    <div
      className={`relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-intel-surface/95 border border-intel-violet/30 shadow-subtle-panel backdrop-blur-xl select-none transform hover:-translate-y-1 hover:border-intel-aqua/60 transition-all ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      {/* Top Fold Accent */}
      <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-bl from-intel-electric/40 to-transparent rounded-bl-xl border-l border-b border-intel-violet/30 pointer-events-none" />

      {/* Header with Rx Stamp */}
      <div className="flex items-start justify-between border-b border-intel-border pb-2.5 mb-2.5">
        <div>
          <span className="font-mono text-[9px] font-bold text-intel-cyan uppercase tracking-wider block">
            {title}
          </span>
          <span className="font-sans text-[11px] font-extrabold text-intel-ivory leading-tight block truncate max-w-[100px]">
            {doctor}
          </span>
        </div>
        <span className="w-5 h-5 rounded-lg bg-intel-electric/20 border border-intel-electric/40 text-intel-lavender font-mono font-extrabold text-[10px] flex items-center justify-center">
          Rx
        </span>
      </div>

      {/* Prescription Technical Grid Lines */}
      <div className="space-y-1.5 opacity-70">
        <div className="h-1 bg-intel-border rounded-full w-full" />
        <div className="h-1 bg-intel-border rounded-full w-4/5" />
        <div className="h-1 bg-intel-border rounded-full w-3/4" />
        <div className="h-1 bg-intel-border rounded-full w-5/6" />
      </div>

      {/* Bottom Security Barcode & Date */}
      <div className="absolute bottom-3 left-3 right-3 pt-2 border-t border-intel-border flex items-center justify-between font-mono text-[8px] text-intel-muted">
        <span>||||||| | |||||</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

// 2. High-Precision 3D Two-Tone Medicine Capsule
export const Capsule3D = ({ name = "Metformin", dose = "500 MG", color = "violet", size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-[10px]",
    md: "px-4 py-2 text-xs",
    lg: "px-5 py-3 text-sm",
  };

  const palettes = {
    violet: {
      border: "border-intel-violet/40 hover:border-intel-lavender",
      glow: "shadow-violet-glow",
      badge: "bg-intel-electric/20 text-intel-lavender border-intel-electric/30",
      pillTop: "#8B5CF6",
      pillBot: "#1E1B4B"
    },
    cyan: {
      border: "border-intel-cyan/40 hover:border-intel-aqua",
      glow: "shadow-cyan-glow",
      badge: "bg-intel-cyan/20 text-intel-aqua border-intel-cyan/30",
      pillTop: "#06B6D4",
      pillBot: "#083344"
    },
    coral: {
      border: "border-intel-coral/40 hover:border-intel-coral",
      glow: "shadow-coral-glow",
      badge: "bg-intel-coral/20 text-rose-300 border-intel-coral/30",
      pillTop: "#F43F5E",
      pillBot: "#4C0519"
    },
    mint: {
      border: "border-intel-mint/40 hover:border-emerald-300",
      glow: "shadow-subtle-panel",
      badge: "bg-intel-mint/20 text-emerald-300 border-intel-mint/30",
      pillTop: "#10B981",
      pillBot: "#064E3B"
    },
    amber: {
      border: "border-intel-amber/40 hover:border-amber-300",
      glow: "shadow-subtle-panel",
      badge: "bg-intel-amber/20 text-amber-300 border-intel-amber/30",
      pillTop: "#F59E0B",
      pillBot: "#451A03"
    }
  };

  const c = palettes[color] || palettes.violet;

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full bg-intel-void/80 border ${c.border} backdrop-blur-md transition-all duration-300 select-none group cursor-pointer ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      {/* Mini SVG Capsule Icon */}
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 32 32" fill="none">
        <g transform="rotate(45 16 16)">
          <path d="M11 16V10C11 7.23858 13.2386 5 16 5C18.7614 5 21 7.23858 21 10V16H11Z" fill={c.pillTop} />
          <path d="M11 16V22C11 24.7614 13.2386 27 16 27C18.7614 27 21 24.7614 21 22V16H11Z" fill={c.pillBot} stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <line x1="11" y1="16" x2="21" y2="16" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
          {/* Specular Highlight */}
          <path d="M13 8C13 7 14 6 15 6" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
        </g>
      </svg>

      <span className="font-sans font-extrabold text-intel-ivory group-hover:text-white transition-colors truncate">
        {name}
      </span>

      <span className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border ${c.badge}`}>
        {dose}
      </span>
    </div>
  );
};

// 3. Central Translucent Circular VEDIORA AI Core
export const AICoreOrb = ({ size = "lg", className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Outer Rotating Technical Compass Ring */}
      <div className="absolute -inset-10 rounded-full border border-intel-violet/20 animate-orbit-slow pointer-events-none" />
      <div className="absolute -inset-16 rounded-full border border-intel-cyan/15 border-dashed animate-orbit-reverse pointer-events-none" />

      {/* Main Glass Core Sphere */}
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-intel-plum/90 via-intel-surface/95 to-intel-base/90 border-2 border-intel-violet/50 shadow-core-glow flex flex-col items-center justify-center text-center p-4 backdrop-blur-3xl">
        {/* Inner Pulsing Radar Arc */}
        <div className="absolute inset-3 rounded-full border border-intel-cyan/30 animate-pulse-subtle pointer-events-none" />

        {/* Central Logo Symbol */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-intel-electric to-intel-cyan flex items-center justify-center text-white shadow-cyan-glow mb-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>

        <span className="font-mono text-[10px] font-extrabold uppercase tracking-widest text-intel-cyan">
          VEDIORA
        </span>
        <span className="font-display text-base sm:text-lg font-extrabold text-intel-ivory tracking-tight">
          AI SAFETY CORE
        </span>
        <span className="font-mono text-[9px] text-intel-lavender/70 mt-1">
          N(N-1)/2 ENGINE
        </span>
      </div>
    </div>
  );
};

// 4. Central Patient Medical Identity Orb
export const PatientProfileOrb = ({ name = "John Doe", age = "68M", medCount = "6 Active Meds", className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Outer Luminous Radius */}
      <div className="absolute -inset-6 rounded-full bg-intel-cyan/10 blur-xl pointer-events-none" />

      <div className="relative px-6 py-4 rounded-3xl bg-gradient-to-r from-intel-surface/90 to-intel-base/95 border border-intel-cyan/40 shadow-cyan-glow flex items-center gap-4 backdrop-blur-2xl">
        {/* Avatar Ring */}
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-intel-cyan to-intel-violet flex items-center justify-center text-white font-display font-extrabold text-lg shadow-md">
          {name.split(" ").map(n => n[0]).join("")}
        </div>

        <div className="text-left">
          <div className="flex items-center gap-2">
            <h4 className="font-display text-base font-extrabold text-intel-ivory">{name}</h4>
            <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded bg-intel-cyan/15 text-intel-aqua border border-intel-cyan/30">
              {age}
            </span>
          </div>
          <span className="font-mono text-[11px] text-intel-muted block mt-0.5">
            {medCount}
          </span>
        </div>
      </div>
    </div>
  );
};

// 5. Precision Technical Doctor Silhouette / Node
export const DoctorNodeObject = ({ name = "Dr. Rahul Shah", role = "Cardiology", hospital = "Metro Heart", icon = "❤️", className = "" }) => {
  return (
    <div className={`p-4 rounded-2xl bg-intel-surface/80 border border-intel-border hover:border-intel-violet/60 transition-all shadow-subtle-panel backdrop-blur-xl flex items-center gap-3 select-none ${className}`}>
      <div className="w-10 h-10 rounded-xl bg-intel-elevated border border-intel-border flex items-center justify-center text-lg">
        {icon}
      </div>
      <div className="text-left">
        <h5 className="font-display text-xs font-extrabold text-intel-ivory leading-tight">{name}</h5>
        <span className="font-mono text-[10px] text-intel-cyan block mt-0.5">{role}</span>
        <span className="font-sans text-[9px] text-intel-muted block">{hospital}</span>
      </div>
    </div>
  );
};

// 6. Geometric Precision Warning Beacon
export const RiskNode3D = ({ severity = "HIGH", label = "Major Bleed Synergy", className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-intel-coral/15 border border-intel-coral/50 shadow-coral-glow backdrop-blur-md select-none ${className}`}>
      <span className="w-2 h-2 rounded-full bg-intel-coral animate-ping" />
      <span className="font-mono text-[10px] font-extrabold text-intel-coral uppercase tracking-wider">
        {severity} • {label}
      </span>
    </div>
  );
};
