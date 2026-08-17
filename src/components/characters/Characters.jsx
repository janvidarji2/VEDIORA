import React from 'react';
import { Stethoscope, HeartPulse, Activity, User, ShieldCheck, FileText, CheckCircle2, Zap, Heart, Sparkles, Crosshair } from 'lucide-react';

// =========================================================================
// 1. DR. RAHUL SHAH — CARDIOLOGY SPECIALIST NODE
// High-tech glassmorphic clinical specialist badge with glowing telemetry
// =========================================================================
export const DoctorShah = ({ size = "md", isHovered = false, className = "" }) => {
  const sizeClasses = {
    sm: "w-28 py-2.5 px-3",
    md: "w-40 py-3.5 px-4",
    lg: "w-48 py-4 px-5",
    xl: "w-56 py-5 px-6"
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-9 h-9",
    xl: "w-11 h-11"
  };

  return (
    <div
      className={`group relative inline-flex flex-col items-center justify-between rounded-2xl universe-panel border border-universe-coral/40 shadow-glow-coral transition-all duration-300 select-none cursor-pointer ${
        isHovered ? 'scale-105 -translate-y-1.5 border-universe-coral bg-universe-card/90 shadow-glow-coral' : 'bg-universe-surface/85 hover:border-universe-coral/70'
      } ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      {/* Ambient Glow Aura */}
      <div className="absolute -inset-1 rounded-2xl bg-universe-coral/15 blur-md pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

      {/* Top Clinical Specialty Icon */}
      <div className="relative z-10 flex items-center justify-between w-full mb-2">
        <div className="w-9 h-9 rounded-xl bg-universe-coral/20 border border-universe-coral/40 flex items-center justify-center text-universe-coral shadow-sm">
          <HeartPulse className={iconSizes[size] || "w-5 h-5"} />
        </div>
        <span className="font-mono text-[9px] font-extrabold text-universe-coral px-2 py-0.5 rounded-full bg-universe-coral/15 border border-universe-coral/30">
          CARDIO
        </span>
      </div>

      {/* Doctor Name & Role */}
      <div className="relative z-10 text-left w-full space-y-0.5">
        <h4 className="font-display font-extrabold text-xs text-white leading-tight">
          Dr. Rahul Shah
        </h4>
        <span className="font-mono text-[10px] text-universe-muted block">
          Cardiology MD
        </span>
      </div>

      {/* Bottom Status Dot */}
      <div className="relative z-10 flex items-center justify-between w-full pt-2 mt-2 border-t border-universe-border/60 font-mono text-[9px] text-universe-muted">
        <span className="flex items-center gap-1.5 text-universe-coral font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-universe-coral animate-pulse" />
          Rx Active
        </span>
        <span className="text-[8px] text-universe-muted">#CRD-88</span>
      </div>
    </div>
  );
};

// =========================================================================
// 2. DR. SNEHA PATEL — DIABETOLOGY SPECIALIST NODE
// High-tech glassmorphic clinical specialist badge with glowing telemetry
// =========================================================================
export const DoctorPatel = ({ size = "md", isHovered = false, className = "" }) => {
  const sizeClasses = {
    sm: "w-28 py-2.5 px-3",
    md: "w-40 py-3.5 px-4",
    lg: "w-48 py-4 px-5",
    xl: "w-56 py-5 px-6"
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-9 h-9",
    xl: "w-11 h-11"
  };

  return (
    <div
      className={`group relative inline-flex flex-col items-center justify-between rounded-2xl universe-panel border border-universe-violet/40 shadow-glow-violet transition-all duration-300 select-none cursor-pointer ${
        isHovered ? 'scale-105 -translate-y-1.5 border-universe-violet bg-universe-card/90 shadow-glow-violet' : 'bg-universe-surface/85 hover:border-universe-violet/70'
      } ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      {/* Ambient Glow Aura */}
      <div className="absolute -inset-1 rounded-2xl bg-universe-violet/15 blur-md pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

      {/* Top Clinical Specialty Icon */}
      <div className="relative z-10 flex items-center justify-between w-full mb-2">
        <div className="w-9 h-9 rounded-xl bg-universe-violet/20 border border-universe-violet/40 flex items-center justify-center text-universe-lavender shadow-sm">
          <Activity className={iconSizes[size] || "w-5 h-5"} />
        </div>
        <span className="font-mono text-[9px] font-extrabold text-universe-lavender px-2 py-0.5 rounded-full bg-universe-violet/15 border border-universe-violet/30">
          DIABETES
        </span>
      </div>

      {/* Doctor Name & Role */}
      <div className="relative z-10 text-left w-full space-y-0.5">
        <h4 className="font-display font-extrabold text-xs text-white leading-tight">
          Dr. Sneha Patel
        </h4>
        <span className="font-mono text-[10px] text-universe-muted block">
          Diabetology MD
        </span>
      </div>

      {/* Bottom Status Dot */}
      <div className="relative z-10 flex items-center justify-between w-full pt-2 mt-2 border-t border-universe-border/60 font-mono text-[9px] text-universe-muted">
        <span className="flex items-center gap-1.5 text-universe-lavender font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-universe-lavender animate-pulse" />
          Rx Active
        </span>
        <span className="text-[8px] text-universe-muted">#DIA-40</span>
      </div>
    </div>
  );
};

// =========================================================================
// 3. DR. VIKRAM MEHTA — GENERAL PHYSICIAN NODE
// High-tech glassmorphic clinical specialist badge with glowing telemetry
// =========================================================================
export const DoctorMehta = ({ size = "md", isHovered = false, className = "" }) => {
  const sizeClasses = {
    sm: "w-28 py-2.5 px-3",
    md: "w-40 py-3.5 px-4",
    lg: "w-48 py-4 px-5",
    xl: "w-56 py-5 px-6"
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-9 h-9",
    xl: "w-11 h-11"
  };

  return (
    <div
      className={`group relative inline-flex flex-col items-center justify-between rounded-2xl universe-panel border border-universe-mint/40 shadow-glow-mint transition-all duration-300 select-none cursor-pointer ${
        isHovered ? 'scale-105 -translate-y-1.5 border-universe-mint bg-universe-card/90 shadow-glow-mint' : 'bg-universe-surface/85 hover:border-universe-mint/70'
      } ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      {/* Ambient Glow Aura */}
      <div className="absolute -inset-1 rounded-2xl bg-universe-mint/15 blur-md pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

      {/* Top Clinical Specialty Icon */}
      <div className="relative z-10 flex items-center justify-between w-full mb-2">
        <div className="w-9 h-9 rounded-xl bg-universe-mint/20 border border-universe-mint/40 flex items-center justify-center text-universe-mint shadow-sm">
          <Stethoscope className={iconSizes[size] || "w-5 h-5"} />
        </div>
        <span className="font-mono text-[9px] font-extrabold text-universe-mint px-2 py-0.5 rounded-full bg-universe-mint/15 border border-universe-mint/30">
          GEN MED
        </span>
      </div>

      {/* Doctor Name & Role */}
      <div className="relative z-10 text-left w-full space-y-0.5">
        <h4 className="font-display font-extrabold text-xs text-white leading-tight">
          Dr. Vikram Mehta
        </h4>
        <span className="font-mono text-[10px] text-universe-muted block">
          Internal Medicine GP
        </span>
      </div>

      {/* Bottom Status Dot */}
      <div className="relative z-10 flex items-center justify-between w-full pt-2 mt-2 border-t border-universe-border/60 font-mono text-[9px] text-universe-muted">
        <span className="flex items-center gap-1.5 text-universe-mint font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-universe-mint animate-pulse" />
          Rx Active
        </span>
        <span className="text-[8px] text-universe-muted">#GP-10</span>
      </div>
    </div>
  );
};

// =========================================================================
// 4. RAJESH KUMAR — CENTRAL PATIENT PROFILE HUB (68 YRS)
// Futuristic holographic medical profile orb with glowing biometric telemetry
// =========================================================================
export const ElderlyRajesh = ({ size = "lg", isBreathing = true, className = "" }) => {
  const sizeClasses = {
    sm: "w-36 p-3",
    md: "w-48 p-4",
    lg: "w-64 p-5",
    xl: "w-72 p-6"
  };

  return (
    <div className={`relative inline-flex flex-col items-center select-none ${isBreathing ? 'animate-float-slow' : ''} ${className}`}>
      {/* Outer Luminous Biometric Pulse Halo */}
      <div className="absolute -inset-4 rounded-full bg-universe-cyan/15 blur-2xl pointer-events-none animate-pulse" />

      {/* Main Holographic Patient Card Hub */}
      <div className={`relative z-10 rounded-[32px] universe-panel border border-universe-cyan/50 shadow-glow-cyan bg-universe-surface/90 text-center space-y-3 ${sizeClasses[size] || sizeClasses.lg}`}>
        {/* Top Biometric Shield Node */}
        <div className="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-tr from-universe-void to-universe-surface border border-universe-cyan flex items-center justify-center shadow-glow-cyan">
          <User className="w-8 h-8 text-universe-cyan" />
          {/* Concentric Pulse Ring */}
          <div className="absolute -inset-1.5 rounded-2xl border border-universe-cyan/40 border-dashed animate-spin-slow pointer-events-none" />
        </div>

        {/* Patient Details & Clinical Tag */}
        <div className="space-y-1">
          <span className="font-mono text-[9px] font-extrabold text-universe-cyan uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-universe-cyan/10 border border-universe-cyan/30 inline-block">
            PATIENT PROFILE
          </span>
          <h3 className="font-display font-extrabold text-base sm:text-lg text-white">
            Rajesh Kumar
          </h3>
          <span className="font-mono text-[11px] text-universe-muted block">
            68 Yrs · Male (PT-99201)
          </span>
        </div>

        {/* Telemetry Vitals Mini Strip */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-universe-border/60 font-mono text-[10px]">
          <div className="p-1.5 rounded-xl bg-universe-void/60 border border-universe-border">
            <span className="text-universe-muted block text-[8px]">RECONCILED</span>
            <span className="text-white font-extrabold">3 Doctors</span>
          </div>
          <div className="p-1.5 rounded-xl bg-universe-void/60 border border-universe-border">
            <span className="text-universe-muted block text-[8px]">FORMULARY</span>
            <span className="text-universe-mint font-extrabold">6 Meds</span>
          </div>
        </div>

        {/* Safety Sync Badge */}
        <div className="flex items-center justify-center gap-1.5 text-universe-mint font-mono text-[10px] font-bold pt-1">
          <span className="w-2 h-2 rounded-full bg-universe-mint animate-ping" />
          <span>Profile Synchronized</span>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 5. VEDI — THE VISUAL AI BRAND MASCOT
// =========================================================================
export const VEDIAssistant = ({ size = "md", isChecking = false, className = "" }) => {
  const sizeMap = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24"
  };

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size] || sizeMap.md} ${className}`}>
      {/* Outer Luminous Neural Pulse Ring */}
      <div className="absolute -inset-2 rounded-full bg-universe-cyan/20 blur-xl animate-pulse" />

      {/* Main Mascot Shield Face */}
      <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-universe-deep to-universe-surface border border-universe-cyan flex items-center justify-center shadow-glow-core">
        <Zap className="w-1/2 h-1/2 text-universe-cyan animate-pulse" />
      </div>
    </div>
  );
};

// =========================================================================
// 6. FLOATING PAPER PRESCRIPTION SHEET
// =========================================================================
export const PrescriptionSheet = ({ id = "RX-01", doctor = "Dr. Patel", meds = ["Metformin 500mg"], size = "md", className = "" }) => {
  return (
    <div className={`paper-prescription p-4 select-none cursor-pointer ${className}`}>
      {/* Fold Accent */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
        <span className="font-mono text-[10px] font-black text-universe-electric uppercase">{id}</span>
        <span className="font-mono text-[9px] font-bold text-slate-500">{doctor}</span>
      </div>

      <div className="space-y-1">
        {meds.map((m, idx) => (
          <div key={idx} className="flex items-center gap-1.5 text-xs font-extrabold text-slate-800">
            <span className="w-1.5 h-1.5 rounded-full bg-universe-violet" />
            <span>{m}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// =========================================================================
// 7. PRECISION MEDICINE CAPSULE / TABLET OBJECT
// =========================================================================
export const MedicinePill = ({ name = "Metformin", dose = "500 mg", color = "violet", className = "" }) => {
  const colorMap = {
    violet: "bg-purple-100 text-purple-900 border-purple-300",
    mint: "bg-emerald-100 text-emerald-900 border-emerald-300",
    coral: "bg-rose-100 text-rose-900 border-rose-300",
    amber: "bg-amber-100 text-amber-900 border-amber-300"
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border shadow-sm backdrop-blur-sm select-none transition-transform hover:scale-105 cursor-pointer ${colorMap[color] || colorMap.violet} ${className}`}>
      <span className="w-2 h-2 rounded-full bg-current opacity-80" />
      <span className="font-extrabold text-xs">{name}</span>
      <span className="font-mono text-[10px] opacity-75">{dose}</span>
    </div>
  );
};
