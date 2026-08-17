import React, { useState, useEffect } from 'react';
import {
  PieChart,
  BarChart3,
  TrendingUp,
  Activity,
  Layers,
  ShieldCheck,
  AlertTriangle,
  Stethoscope,
  User,
  ArrowRight,
  Filter,
  CheckCircle2,
  Share2,
  Printer,
  FileText,
  FileCheck2,
  Heart,
  MessageCircle,
  HelpCircle,
  FlaskConical,
  History
} from 'lucide-react';
import { DoctorPatel, ElderlyRajesh } from '../characters/Characters';

export const VisualAnalyticsReport = () => {
  const [sliderPos, setSliderPos] = useState(0); // 0: Doctor (100% doc), 100: Patient (100% patient)
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'safe' | 'moderate' | 'high'
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [safetyScore, setSafetyScore] = useState(0);

  useEffect(() => {
    // Safety score gauge animation from 0 -> 82 (Section 19.06)
    let score = 0;
    const interval = setInterval(() => {
      score += 2;
      if (score <= 82) {
        setSafetyScore(score);
      } else {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  }, []);

  // Data for Charts
  const riskDistribution = [
    { label: 'Safe', pct: 75, color: '#10B981', count: 9 },
    { label: 'Moderate Attention', pct: 17, color: '#F59E0B', count: 2 },
    { label: 'High Risk', pct: 8, color: '#EF4444', count: 1 },
  ];

  const severityBars = [
    { level: 'Low / Minor Interaction', value: 78, color: '#10B981' },
    { level: 'Moderate Pharmacodynamic Synergy', value: 45, color: '#F59E0B' },
    { level: 'High Risk Contraindication', value: 18, color: '#EF4444' },
  ];

  const specialtyDistribution = [
    { name: 'Cardiology (Dr. Shah)', count: 2, pct: 40, color: '#EF4444' },
    { name: 'Diabetology (Dr. Patel)', count: 2, pct: 40, color: '#8B5CF6' },
    { name: 'Orthopedics & Spine', count: 1, pct: 20, color: '#06B6D4' },
    { name: 'General Medicine (Dr. Mehta)', count: 1, pct: 20, color: '#10B981' },
  ];

  const medicationRiskPoints = [
    { name: 'Metformin', dose: '500 mg', doctor: 'Dr. Patel (Diabetes)', x: 18, y: 75, risk: 'safe', color: '#10B981' },
    { name: 'Aspirin', dose: '75 mg', doctor: 'Dr. Shah (Cardiology)', x: 44, y: 45, risk: 'moderate', color: '#F59E0B' },
    { name: 'Warfarin', dose: '5 mg', doctor: 'Dr. Shah (Cardiology)', x: 68, y: 35, risk: 'moderate', color: '#EF4444' },
    { name: 'Celecoxib', dose: '200 mg', doctor: 'Dr. Mehta (GP)', x: 88, y: 28, risk: 'high', color: '#EF4444' },
  ];

  const filteredPoints = activeFilter === 'all'
    ? medicationRiskPoints
    : medicationRiskPoints.filter(p => p.risk === activeFilter);

  const isDoctorView = sliderPos < 50;

  return (
    <section id="section-reports" className="py-28 px-6 lg:px-16 max-w-[1540px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-12 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-violet font-extrabold tracking-widest block">[ 05 / GRAPHICAL REPORTS & EXPERIENCE ]</span>
          <span className="text-[11px]">AI MEDICAL ANALYTICS VISUALIZATION ENGINE</span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-full bg-universe-surface hover:bg-universe-card border border-universe-border text-universe-lavender font-mono text-xs transition-all flex items-center gap-1.5 hover:scale-105"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Export Clinical PDF</span>
          </button>
        </div>
      </div>

      {/* SECTION 11 & 14: PATIENT VS DOCTOR EXPERIENCE & REPORT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* DOCTOR REPORT CARD (Section 14 & 11) */}
        <div
          onClick={() => setSliderPos(0)}
          className={`p-8 rounded-[36px] universe-panel transition-all duration-300 cursor-pointer text-left space-y-5 border-2 ${
            isDoctorView ? 'border-universe-violet shadow-glow-violet bg-universe-card/90' : 'border-universe-border/50 hover:border-universe-border opacity-70'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-universe-violet/20 border border-universe-violet/40 flex items-center justify-center text-universe-lavender">
              <Stethoscope className="w-6 h-6 text-universe-lavender" />
            </div>
            <span className="font-mono text-[10px] uppercase font-bold text-universe-violet px-3 py-1 rounded-full bg-universe-violet/10 border border-universe-violet/30">
              CLINICAL SUITE
            </span>
          </div>

          <div>
            <span className="font-mono text-xs font-black text-universe-cyan uppercase tracking-wider block">
              FOR DOCTORS
            </span>
            <h3 className="text-2xl font-extrabold text-white font-display mt-0.5">
              Doctor Clinical Report
            </h3>
          </div>

          {/* Section 11 & 14 Checklist items */}
          <div className="space-y-2 font-mono text-xs text-universe-muted">
            <div className="flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-universe-violet" />
              <span>Complete medication history & dosages</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-universe-violet" />
              <span>Pharmacokinetic interaction severity</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-universe-violet" />
              <span>PubMed evidence & CYP450 pathways</span>
            </div>
            <div className="flex items-center gap-2">
              <History className="w-4 h-4 text-universe-violet" />
              <span>Clinical notes & risk timeline</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={(e) => { e.stopPropagation(); setSliderPos(0); }}
              className="w-full py-3.5 rounded-2xl bg-universe-violet hover:bg-universe-electric text-white font-display font-extrabold text-xs shadow-glow-violet transition-all flex items-center justify-center gap-2"
            >
              <span>View Doctor Report →</span>
            </button>
          </div>
        </div>

        {/* PATIENT REPORT CARD (Section 14 & 11) */}
        <div
          onClick={() => setSliderPos(100)}
          className={`p-8 rounded-[36px] universe-panel transition-all duration-300 cursor-pointer text-left space-y-5 border-2 ${
            !isDoctorView ? 'border-universe-mint shadow-glow-mint bg-universe-card/90' : 'border-universe-border/50 hover:border-universe-border opacity-70'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-universe-mint/20 border border-universe-mint/40 flex items-center justify-center text-universe-mint">
              <User className="w-6 h-6 text-universe-mint" />
            </div>
            <span className="font-mono text-[10px] uppercase font-bold text-universe-mint px-3 py-1 rounded-full bg-universe-mint/10 border border-universe-mint/30">
              REASSURING SUMMARY
            </span>
          </div>

          <div>
            <span className="font-mono text-xs font-black text-universe-mint uppercase tracking-wider block">
              FOR PATIENTS
            </span>
            <h3 className="text-2xl font-extrabold text-white font-display mt-0.5">
              Patient Safety Report
            </h3>
          </div>

          {/* Section 11 & 14 Checklist items */}
          <div className="space-y-2 font-mono text-xs text-universe-muted">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-universe-mint" />
              <span>Simple, clear explanation without jargon</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-universe-mint" />
              <span>What the warning means for daily health</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-universe-mint" />
              <span>What to do next & doctor visit checklist</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-universe-mint" />
              <span>Easy-to-understand medication overview</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={(e) => { e.stopPropagation(); setSliderPos(100); }}
              className="w-full py-3.5 rounded-2xl bg-universe-mint hover:bg-universe-lightMint text-universe-void font-display font-extrabold text-xs shadow-glow-mint transition-all flex items-center justify-center gap-2"
            >
              <span>View Patient Report →</span>
            </button>
          </div>
        </div>
      </div>

      {/* DRAGGABLE CENTER SLIDER: Clinical View ↔ Simple Patient View (Section 11 Requirement) */}
      <div className="max-w-2xl mx-auto mb-16 p-6 rounded-[28px] universe-panel space-y-4 shadow-rich-card text-center">
        <div className="flex items-center justify-between font-display text-sm font-extrabold px-2">
          <div className={`flex items-center gap-2 transition-colors ${isDoctorView ? 'text-universe-violet scale-105' : 'text-universe-muted'}`}>
            <span>👨‍⚕️</span>
            <span>Clinical View</span>
          </div>

          <span className="font-mono text-[10px] text-universe-cyan uppercase tracking-wider">
            {isDoctorView ? "CLINICAL GRAPHS ACTIVE" : "SIMPLE REASSURING VIEW ACTIVE"}
          </span>

          <div className={`flex items-center gap-2 transition-colors ${!isDoctorView ? 'text-universe-mint scale-105' : 'text-universe-muted'}`}>
            <span>👤</span>
            <span>Simple Patient View</span>
          </div>
        </div>

        {/* Draggable Range Slider (Section 11) */}
        <div className="relative flex items-center">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="w-full h-3 bg-universe-void rounded-full appearance-none cursor-pointer accent-universe-violet border border-universe-border"
          />
        </div>

        <div className="flex justify-center gap-4 pt-1">
          <button
            onClick={() => setSliderPos(0)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all ${sliderPos === 0 ? 'bg-universe-violet text-white font-bold shadow-glow-violet' : 'text-universe-muted hover:text-white'}`}
          >
            Clinical View (0%)
          </button>
          <button
            onClick={() => setSliderPos(100)}
            className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all ${sliderPos === 100 ? 'bg-universe-mint text-universe-void font-bold shadow-glow-mint' : 'text-universe-muted hover:text-white'}`}
          >
            Patient View (100%)
          </button>
        </div>
      </div>

      {/* DYNAMIC MORPHING VIEW */}
      {isDoctorView ? (
        // ------------------ DOCTOR CLINICAL REPORT (Section 21 & 19) ------------------
        <div className="space-y-8 animate-pop-in">
          {/* Top Metric Strip & Character Header (Section 21) */}
          <div className="p-8 rounded-[36px] universe-panel flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow-violet">
            <div className="flex items-center gap-6">
              <DoctorPatel size="md" />
              <div className="text-left space-y-1">
                <span className="font-mono text-xs font-black text-universe-cyan uppercase tracking-wider block">
                  PATIENT SAFETY REPORT
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Rajesh Kumar · 68 Yrs (M)
                </h3>
                <span className="font-mono text-xs text-universe-muted block">
                  Primary ID: PT-99201 • Cross-Reconciliation Active
                </span>
              </div>
            </div>

            {/* Visual Statistics: 6 Medicines, 3 Specialists, 12 Combinations, 1 Potential Risk */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto font-mono text-center">
              <div className="p-4 rounded-2xl bg-universe-surface/80 border border-universe-border">
                <span className="font-display text-3xl font-extrabold text-white block">6</span>
                <span className="text-[10px] text-universe-muted uppercase">Medicines</span>
              </div>
              <div className="p-4 rounded-2xl bg-universe-surface/80 border border-universe-border">
                <span className="font-display text-3xl font-extrabold text-universe-cyan block">3</span>
                <span className="text-[10px] text-universe-muted uppercase">Specialists</span>
              </div>
              <div className="p-4 rounded-2xl bg-universe-surface/80 border border-universe-border">
                <span className="font-display text-3xl font-extrabold text-universe-lavender block">12</span>
                <span className="text-[10px] text-universe-muted uppercase">Combinations</span>
              </div>
              <div className="p-4 rounded-2xl bg-universe-surface/80 border border-universe-coral/40">
                <span className="font-display text-3xl font-extrabold text-universe-coral block">1</span>
                <span className="text-[10px] text-universe-coral uppercase font-bold">Potential Risk</span>
              </div>
            </div>
          </div>

          {/* Row 2: 01 Risk Distribution Donut & 06 Safety Score Gauge (Section 19.01 & 19.06) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 01 — RISK DISTRIBUTION DONUT (5 cols) */}
            <div className="lg:col-span-5 p-8 rounded-[36px] universe-panel flex flex-col justify-between text-left shadow-rich-card">
              <div>
                <span className="font-mono text-xs font-extrabold text-universe-lavender uppercase tracking-widest block">
                  01 — RISK DISTRIBUTION
                </span>
                <h3 className="font-display text-lg font-extrabold text-white mt-1">
                  Active Formulary Safety Split
                </h3>
              </div>

              {/* Donut Chart SVG */}
              <div className="relative w-48 h-48 mx-auto my-6 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Safe Segment (75%) */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="179 238" strokeDashoffset="0" className="hover:opacity-90 transition-opacity cursor-pointer" />
                  {/* Moderate Segment (17%) */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#F59E0B" strokeWidth="12" strokeDasharray="40 238" strokeDashoffset="-179" className="hover:opacity-90 transition-opacity cursor-pointer" />
                  {/* High Risk Segment (8%) */}
                  <circle cx="50" cy="50" r="38" fill="none" stroke="#EF4444" strokeWidth="12" strokeDasharray="19 238" strokeDashoffset="-219" className="hover:opacity-90 transition-opacity cursor-pointer" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="font-display text-3xl font-extrabold text-white">75%</span>
                  <span className="font-mono text-[9px] text-universe-mint font-bold uppercase">SAFE RATIO</span>
                </div>
              </div>

              {/* Interactive Legend with filter trigger */}
              <div className="flex items-center justify-around font-mono text-xs pt-4 border-t border-universe-border">
                <button
                  onClick={() => setActiveFilter(activeFilter === 'safe' ? 'all' : 'safe')}
                  className={`flex items-center gap-1.5 font-bold transition-all ${activeFilter === 'safe' ? 'text-universe-mint scale-110' : 'text-universe-mint/70 hover:text-universe-mint'}`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-universe-mint" /> 75% Safe
                </button>
                <button
                  onClick={() => setActiveFilter(activeFilter === 'moderate' ? 'all' : 'moderate')}
                  className={`flex items-center gap-1.5 font-bold transition-all ${activeFilter === 'moderate' ? 'text-universe-amber scale-110' : 'text-universe-amber/70 hover:text-universe-amber'}`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-universe-amber" /> 17% Attention
                </button>
                <button
                  onClick={() => setActiveFilter(activeFilter === 'high' ? 'all' : 'high')}
                  className={`flex items-center gap-1.5 font-bold transition-all ${activeFilter === 'high' ? 'text-universe-coral scale-110' : 'text-universe-coral/70 hover:text-universe-coral'}`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-universe-coral" /> 8% Risk
                </button>
              </div>
            </div>

            {/* 06 — SAFETY SCORE GAUGE & 02 SEVERITY (7 cols) (Section 19.06 & 19.02) */}
            <div className="lg:col-span-7 p-8 rounded-[36px] universe-panel flex flex-col justify-between text-left shadow-rich-card">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs font-extrabold text-universe-cyan uppercase tracking-widest block">
                    06 — SAFETY SCORE & SEVERITY
                  </span>
                  <h3 className="font-display text-lg font-extrabold text-white mt-1">
                    Medication Safety Score & Conflict Margin
                  </h3>
                </div>

                {/* Circular Gauge 82 (Section 19.06) */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-universe-surface border border-universe-border">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#06B6D4"
                        strokeWidth="3.5"
                        strokeDasharray={`${safetyScore}, 100`}
                      />
                    </svg>
                    <span className="absolute font-display text-sm font-extrabold text-white">{safetyScore}</span>
                  </div>
                  <div className="text-left font-mono text-[10px]">
                    <span className="text-universe-cyan font-bold block">SAFETY SCORE</span>
                    <span className="text-universe-muted">OPTIMAL RANGE</span>
                  </div>
                </div>
              </div>

              {/* 02 — Animated Severity Bars */}
              <div className="space-y-4 my-auto py-4">
                {severityBars.map((bar, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="font-bold text-white">{bar.level}</span>
                      <span className="font-extrabold" style={{ color: bar.color }}>{bar.value}% Margin</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-universe-void overflow-hidden border border-universe-border">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${bar.value}%`, backgroundColor: bar.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-universe-border flex items-center justify-between font-mono text-xs text-universe-muted">
                <span>EVALUATION ENGINE: CYP450 + FDA RCT</span>
                <span className="text-universe-cyan font-bold">LEVEL 1A CLINICAL ADVISORY</span>
              </div>
            </div>
          </div>

          {/* Row 3: 03 Risk Trend Graph & 05 Specialist Contribution (Section 19.03 & 19.05) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 03 — RISK TREND DRAWING LINE GRAPH (7 cols) */}
            <div className="lg:col-span-7 p-8 rounded-[36px] universe-panel flex flex-col justify-between text-left shadow-rich-card">
              <div>
                <span className="font-mono text-xs font-extrabold text-universe-electric uppercase tracking-widest block">
                  03 — LONGITUDINAL RISK TREND
                </span>
                <h3 className="font-display text-lg font-extrabold text-white mt-1">
                  Adverse Event Probability Timeline
                </h3>
              </div>

              {/* SVG Area Line Graph */}
              <div className="relative h-44 w-full my-4 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="trendGradUniverse" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Area Fill */}
                  <path d="M 0 90 Q 80 40 160 70 T 320 30 L 400 50 L 400 120 L 0 120 Z" fill="url(#trendGradUniverse)" />
                  {/* Line Stroke with draw animation */}
                  <path d="M 0 90 Q 80 40 160 70 T 320 30 L 400 50" fill="none" stroke="#8B5CF6" strokeWidth="3" />
                  {/* Interactive Data Points */}
                  <circle cx="0" cy="90" r="4" fill="#8B5CF6" />
                  <circle cx="80" cy="55" r="4" fill="#8B5CF6" />
                  <circle cx="160" cy="70" r="4" fill="#8B5CF6" />
                  <circle cx="240" cy="45" r="4" fill="#8B5CF6" />
                  <circle cx="320" cy="30" r="6" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" className="animate-ping" />
                  <circle cx="320" cy="30" r="5" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx="400" cy="50" r="4" fill="#10B981" />
                </svg>
              </div>

              <div className="flex items-center justify-between font-mono text-[10px] text-universe-muted pt-2 border-t border-universe-border">
                <span>JAN 2026</span>
                <span>MAR 2026</span>
                <span>MAY 2026</span>
                <span>JUL 2026</span>
                <span className="text-universe-coral font-black">AUG 2026 (RISK FLAGGED)</span>
              </div>
            </div>

            {/* 05 — SPECIALIST CONTRIBUTION (5 cols) (Section 19.05) */}
            <div className="lg:col-span-5 p-8 rounded-[36px] universe-panel flex flex-col justify-between text-left shadow-rich-card">
              <div>
                <span className="font-mono text-xs font-extrabold text-universe-mint uppercase tracking-widest block">
                  05 — SPECIALIST ORIGINS
                </span>
                <h3 className="font-display text-lg font-extrabold text-white mt-1">
                  Molecules by Prescriber
                </h3>
              </div>

              <div className="space-y-3.5 my-auto py-2">
                {specialtyDistribution.map((spec, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-white">{spec.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 rounded-full bg-universe-void overflow-hidden border border-universe-border">
                        <div className="h-full rounded-full" style={{ width: `${spec.pct * 2}%`, backgroundColor: spec.color }} />
                      </div>
                      <span className="text-universe-muted">{spec.count} Meds</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-universe-border font-mono text-[10px] text-universe-muted">
                TOTAL PRESCRIBING SATELLITES: 4 CLINICS
              </div>
            </div>
          </div>

          {/* Row 4: Interactive Medication Risk Scatter Graph (Section 20) */}
          <div className="p-8 rounded-[36px] universe-panel text-left space-y-6 shadow-rich-card">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs font-extrabold text-universe-cyan uppercase tracking-widest block">
                  INTERACTIVE MEDICATION RISK PLANE
                </span>
                <h3 className="font-display text-lg font-extrabold text-white mt-1">
                  Hover Point to Inspect · Click Severity Category to Filter
                </h3>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1 rounded-full border ${activeFilter === 'all' ? 'bg-universe-violet text-white border-universe-violet' : 'text-universe-muted border-universe-border'}`}
                >
                  All ({medicationRiskPoints.length})
                </button>
                <button
                  onClick={() => setActiveFilter('moderate')}
                  className={`px-3 py-1 rounded-full border ${activeFilter === 'moderate' ? 'bg-universe-amber text-universe-void border-universe-amber font-bold' : 'text-universe-amber border-universe-border'}`}
                >
                  Attention (2)
                </button>
                <button
                  onClick={() => setActiveFilter('high')}
                  className={`px-3 py-1 rounded-full border ${activeFilter === 'high' ? 'bg-universe-coral text-white border-universe-coral font-bold' : 'text-universe-coral border-universe-border'}`}
                >
                  High (1)
                </button>
              </div>
            </div>

            {/* Coordinate Plane Canvas */}
            <div className="relative h-56 rounded-2xl bg-universe-void/80 border border-universe-border p-6 overflow-hidden">
              {/* Grid Axis Lines */}
              <div className="absolute left-10 right-6 top-1/2 h-[1px] bg-universe-border" />
              <div className="absolute top-4 bottom-8 left-1/2 w-[1px] bg-universe-border" />

              {/* Y Axis Labels */}
              <span className="absolute top-3 left-3 font-mono text-[9px] text-universe-coral font-bold">HIGH RISK</span>
              <span className="absolute bottom-3 left-3 font-mono text-[9px] text-universe-mint font-bold">SAFE PROFILE</span>

              {/* Interactive Points */}
              {filteredPoints.map((pt, idx) => (
                <div
                  key={idx}
                  style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  onMouseEnter={() => setHoveredPoint(pt)}
                  onMouseLeave={() => setHoveredPoint(null)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-125 z-20"
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white shadow-md flex items-center justify-center animate-pulse-subtle"
                    style={{ backgroundColor: pt.color }}
                  />
                  <span className="font-mono text-[10px] font-extrabold text-white block mt-1 whitespace-nowrap">
                    {pt.name}
                  </span>
                </div>
              ))}

              {/* Hover Tooltip Overlay */}
              {hoveredPoint && (
                <div className="absolute top-4 right-4 p-4 rounded-2xl bg-universe-card border border-universe-border shadow-glow-cyan font-mono text-xs space-y-1 z-30 animate-pop-in text-left">
                  <span className="font-extrabold text-white block text-sm">{hoveredPoint.name} · {hoveredPoint.dose}</span>
                  <span className="text-[10px] text-universe-muted block">{hoveredPoint.doctor}</span>
                  <span className="font-bold text-[10px] block mt-1" style={{ color: hoveredPoint.color }}>
                    SEVERITY TIER: {hoveredPoint.risk.toUpperCase()}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // ------------------ PATIENT REASSURING REPORT (Section 22) ------------------
        <div className="max-w-4xl mx-auto space-y-8 animate-pop-in">
          {/* Patient Header (Section 22) */}
          <div className="p-8 rounded-[36px] universe-panel flex flex-col md:flex-row items-center justify-between gap-6 shadow-glow-mint text-left">
            <div className="flex items-center gap-6">
              <ElderlyRajesh size="md" />
              <div className="space-y-1">
                <span className="font-mono text-xs font-black text-universe-mint uppercase tracking-wider block">
                  YOUR MEDICATION SAFETY SUMMARY
                </span>
                <h3 className="font-display text-3xl font-extrabold text-white">
                  Rajesh's Safe Routine
                </h3>
                <span className="font-mono text-xs text-universe-muted block">
                  Everything checked across all 3 doctors.
                </span>
              </div>
            </div>

            {/* Clear Status Counts (Section 22: 🟢 5 Safe, 🟠 1 Needs Review, 🔴 0 High Risk) */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="px-4 py-2 rounded-2xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                5 Safe
              </span>
              <span className="px-4 py-2 rounded-2xl bg-amber-950/80 border border-amber-500/40 text-amber-400 font-bold flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                1 Needs Review
              </span>
              <span className="px-4 py-2 rounded-2xl bg-universe-card border border-universe-border text-universe-muted font-bold">
                0 High Risk
              </span>
            </div>
          </div>

          {/* Color Coded Status List */}
          <div className="p-8 rounded-[36px] universe-panel space-y-4 text-left shadow-rich-card">
            <h4 className="font-display font-extrabold text-lg text-white">
              Medication Safety Breakdown
            </h4>

            <div className="space-y-3 font-sans">
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🟢</span>
                  <div>
                    <span className="font-display font-extrabold text-sm text-white block">Metformin, Atorvastatin & Glimepiride</span>
                    <span className="font-mono text-xs text-universe-muted">Safe to take together according to your schedule</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-emerald-400 font-extrabold">VERIFIED SAFE</span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-950/40 border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🟠</span>
                  <div>
                    <span className="font-display font-extrabold text-sm text-white block">Warfarin + Aspirin</span>
                    <span className="font-mono text-xs text-universe-muted">Both thin your blood · Discuss with your cardiologist during next visit</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-amber-400 font-extrabold">REVIEW WITH DOCTOR</span>
              </div>
            </div>

            {/* "What should I do?" Action (Section 22) */}
            <div className="pt-6 border-t border-universe-border space-y-4">
              <div className="flex items-center gap-3 text-universe-cyan font-display font-extrabold text-base">
                <ShieldCheck className="w-5 h-5 text-universe-cyan" />
                <span>Next Recommended Steps</span>
              </div>
              <p className="text-sm text-universe-muted font-medium leading-relaxed">
                Continue taking your prescribed medicines as directed. Print or share this safety summary so your cardiologist and diabetologist can align on your blood thinner schedule.
              </p>
              <div>
                <button
                  onClick={() => alert("Summary exported. Ready to show your doctor.")}
                  className="px-8 py-3.5 rounded-full bg-universe-violet hover:bg-universe-electric text-white font-display font-extrabold text-xs shadow-glow-violet transition-all inline-flex items-center gap-2"
                >
                  <span>Export Summary for Doctor Visit →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
