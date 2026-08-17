import React, { useState, useEffect } from 'react';
import { useMedication } from '../context/MedicationContext';
import { RichUniverseBackground } from '../components/common/RichUniverseBackground';
import { IntroLoadingExperience } from '../components/common/IntroLoadingExperience';
import { RichHeroEcosystem } from '../components/specific/RichHeroEcosystem';
import { StoryProblem } from '../components/specific/StoryProblem';
import { MedicationEcosystemNetwork } from '../components/specific/MedicationEcosystemNetwork';
import { MedicineConvergence } from '../components/specific/MedicineConvergence';
import { RichPrescriptionScanner } from '../components/specific/RichPrescriptionScanner';
import { AISafetyEngineCenterpiece } from '../components/specific/AISafetyEngineCenterpiece';
import { InteractionConstellationRich } from '../components/specific/InteractionConstellationRich';
import { InteractionMatrixInteractive } from '../components/specific/InteractionMatrixInteractive';
import { MedicationProfileConstellation } from '../components/specific/MedicationProfileConstellation';
import { VisualAnalyticsReport } from '../components/specific/VisualAnalyticsReport';
import { WhyVedioraTimeline } from '../components/specific/WhyVedioraTimeline';
import { FinalClimaxCTA } from '../components/specific/FinalClimaxCTA';
import { GuidedDemoModal } from '../components/specific/GuidedDemoModal';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';
import { ShieldCheck, Play, ArrowRight, Activity, Sparkles, AlertTriangle } from 'lucide-react';

export const LandingPage = () => {
  const { navigateTo, loginAs, addToast, addMedication } = useMedication();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeZone, setActiveZone] = useState('neutral');
  const [activeNav, setActiveNav] = useState('hero');
  const [hasLoaded, setHasLoaded] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll listener to update active navigation segment & background particle field color zone
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      const problemEl = document.getElementById('section-problem');
      const networkEl = document.getElementById('section-network');
      const convergenceEl = document.getElementById('section-convergence');
      const scannerEl = document.getElementById('section-scanner');
      const aiEl = document.getElementById('section-ai');
      const riskEl = document.getElementById('section-risk');
      const matrixEl = document.getElementById('section-matrix');
      const profileEl = document.getElementById('section-profile');
      const reportsEl = document.getElementById('section-reports');
      const howEl = document.getElementById('section-how-it-works');

      if (reportsEl && scrollPos >= reportsEl.offsetTop) {
        setActiveNav('Reports');
        setActiveZone('violet');
      } else if (profileEl && scrollPos >= profileEl.offsetTop) {
        setActiveNav('Medication Network');
        setActiveZone('aqua');
      } else if (riskEl && scrollPos >= riskEl.offsetTop) {
        setActiveNav('AI Safety');
        setActiveZone('coral');
      } else if (aiEl && scrollPos >= aiEl.offsetTop) {
        setActiveNav('AI Safety');
        setActiveZone('electric');
      } else if (scannerEl && scrollPos >= scannerEl.offsetTop) {
        setActiveNav('Medication Network');
        setActiveZone('aqua');
      } else if (networkEl && scrollPos >= networkEl.offsetTop) {
        setActiveNav('Medication Network');
        setActiveZone('doctor');
      } else if (problemEl && scrollPos >= problemEl.offsetTop) {
        setActiveNav('Problem');
        setActiveZone('coral');
      } else {
        setActiveNav('hero');
        setActiveZone('neutral');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScanSampleAdd = (sample) => {
    sample.medicinesDetected.forEach((m) => {
      addMedication({
        name: m.name,
        dosage: m.dosage,
        frequency: m.frequency,
        prescribedBy: m.prescriber,
        specialist: sample.specialty
      });
    });
    addToast({
      type: 'success',
      title: 'Prescription Ingested',
      message: `${sample.medicinesDetected.length} medicines extracted from ${sample.specialty} Rx.`
    });
    loginAs('patient');
    navigateTo('ai-analysis');
  };

  return (
    <div className="min-h-screen bg-universe-void text-universe-ivory selection:bg-universe-electric selection:text-white relative overflow-x-hidden">
      {/* 1. Cinematic Intro Loading Screen (Section 30) */}
      {!hasLoaded && <IntroLoadingExperience onComplete={() => setHasLoaded(true)} />}

      {/* 2. Cursor-Reactive Magnetic Particle & Medical Blueprint Canvas */}
      <RichUniverseBackground activeZone={activeZone} />

      {/* 3. Floating Magnetic Navigation (Section 18 Requirement) */}
      <header className="sticky top-4 z-50 max-w-7xl mx-auto w-[94%] px-6 py-3.5 rounded-full universe-panel shadow-rich-card flex items-center justify-between transition-all">
        {/* Brand */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 cursor-pointer select-none group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-universe-violet to-universe-cyan flex items-center justify-center text-white font-extrabold text-sm shadow-glow-violet group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-universe-cyan transition-colors">
            VEDIORA
          </span>
        </div>

        {/* Center Section Menu: Problem, How It Works, Medication Network, AI Safety, Reports */}
        <nav className="hidden md:flex items-center gap-6 font-mono font-bold text-xs">
          <button
            onClick={() => scrollTo('section-problem')}
            className={`transition-colors flex items-center gap-1 ${
              activeNav === 'Problem' ? 'text-universe-coral font-extrabold scale-105' : 'text-universe-muted hover:text-white'
            }`}
          >
            <span>Problem</span>
          </button>

          <button
            onClick={() => scrollTo('section-how-it-works')}
            className={`transition-colors flex items-center gap-1 ${
              activeNav === 'How It Works' ? 'text-universe-cyan font-extrabold scale-105' : 'text-universe-muted hover:text-white'
            }`}
          >
            <span>How It Works</span>
          </button>

          <button
            onClick={() => scrollTo('section-network')}
            className={`transition-colors flex items-center gap-1 ${
              activeNav === 'Medication Network' ? 'text-universe-violet font-extrabold scale-105' : 'text-universe-muted hover:text-white'
            }`}
          >
            <span>Medication Network</span>
          </button>

          <button
            onClick={() => scrollTo('section-ai')}
            className={`transition-colors flex items-center gap-1 ${
              activeNav === 'AI Safety' ? 'text-universe-electric font-extrabold scale-105' : 'text-universe-muted hover:text-white'
            }`}
          >
            <span>AI Safety</span>
          </button>

          <button
            onClick={() => scrollTo('section-reports')}
            className={`transition-colors flex items-center gap-1 ${
              activeNav === 'Reports' ? 'text-universe-lavender font-extrabold scale-105' : 'text-universe-muted hover:text-white'
            }`}
          >
            <span>Reports</span>
          </button>
        </nav>

        {/* Right CTA Actions: DEMO MODE & Run Safety Check (Section 18 & 19 Requirement) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="px-4 py-2 rounded-full bg-universe-surface hover:bg-universe-card text-universe-cyan font-mono text-xs font-bold border border-universe-cyan/30 shadow-sm transition-all flex items-center gap-1.5 hover:scale-105"
          >
            <Play className="w-3 h-3 text-universe-cyan fill-universe-cyan animate-pulse" />
            <span>DEMO MODE</span>
          </button>

          <button
            onClick={() => loginAs('patient')}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-universe-violet via-universe-electric to-universe-cyan hover:scale-105 text-white font-display font-extrabold text-xs shadow-glow-violet transition-all flex items-center gap-1.5"
          >
            <span>Run Safety Check →</span>
          </button>
        </div>
      </header>

      {/* Floating Mini Telemetry Badges Across Canvas */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
        <div className="absolute top-32 right-12 px-3 py-1.5 rounded-2xl universe-panel text-[10px] font-mono font-bold text-universe-cyan border border-universe-cyan/30 shadow-floating-panel animate-float-slow hidden xl:block">
          ● 6 Active Molecules
        </div>

        <div className="absolute top-[48%] left-8 px-3 py-1.5 rounded-2xl universe-panel text-[10px] font-mono font-bold text-universe-lavender border border-universe-violet/30 shadow-floating-panel animate-float-slow hidden xl:block" style={{ animationDelay: '1.5s' }}>
          ◆ 3 Dispersed Clinics
        </div>

        <div className="absolute top-[72%] right-10 px-3 py-1.5 rounded-2xl universe-panel text-[10px] font-mono font-bold text-universe-mint border border-universe-mint/30 shadow-floating-panel animate-float-slow hidden xl:block" style={{ animationDelay: '2.5s' }}>
          ✓ 82 Safety Score
        </div>
      </div>

      {/* Main Experience Journey */}
      <main className="space-y-6 relative z-10">
        {/* 01 — HERO (Rich Interactive Medical Universe) (Sections 3 & 4) */}
        <RichHeroEcosystem
          onRunSafetyCheck={() => loginAs('patient')}
          onExplore={() => scrollTo('section-problem')}
          onHoverZone={(z) => setActiveZone(z)}
        />

        {/* 02 — SCROLL STORY: THE PROBLEM (Section 5) */}
        <StoryProblem onBringTogether={() => scrollTo('section-convergence')} />

        {/* 03 — DIFFERENT SPECIALISTS. SAME PATIENT. (Section 6) */}
        <MedicationEcosystemNetwork onSelectChain={(doc) => setActiveZone(doc)} />

        {/* 04 — SCROLL STORY: MEDICINE CONVERGENCE (Section 7) */}
        <MedicineConvergence onProceedToAI={() => scrollTo('section-ai')} />

        {/* 05 — HOLOGRAPHIC PRESCRIPTION SCANNER (Section 12) */}
        <RichPrescriptionScanner onAddExtractedMeds={handleScanSampleAdd} />

        {/* 06 — AI SAFETY ENGINE CENTERPIECE (Section 8) */}
        <AISafetyEngineCenterpiece onInspectRisk={() => scrollTo('section-risk')} />

        {/* 07 — RISK DETECTION & EXPLANATION (Section 9) */}
        <InteractionConstellationRich onExploreReports={() => scrollTo('section-matrix')} />

        {/* 08 — INTERACTIVE INTERACTION MATRIX (Section 10) */}
        <div id="section-matrix">
          <InteractionMatrixInteractive />
        </div>

        {/* 09 — DIGITAL MEDICATION CONSTELLATION ECOSYSTEM (Section 13) */}
        <MedicationProfileConstellation />

        {/* 10 — GRAPHICAL REPORTS & DOCTOR ↔ PATIENT SLIDER (Sections 11 & 14) */}
        <VisualAnalyticsReport />

        {/* 11 — WHY VEDIORA 6-STAGE TIMELINE (Section 15) */}
        <WhyVedioraTimeline />

        {/* 12 — FINAL CHARACTER CLIMAX CTA (Section 23) */}
        <FinalClimaxCTA onRunCheck={() => loginAs('patient')} />

        {/* Mandatory Safety Disclaimer Banner (Section 22) */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <DisclaimerBanner />
        </div>
      </main>

      {/* Futuristic Universe Footer */}
      <footer className="border-t border-universe-border py-12 px-6 bg-universe-void relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-universe-muted text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-universe-violet/20 border border-universe-violet/40 flex items-center justify-center text-universe-lavender">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-display font-extrabold text-sm text-white">
              VEDIORA · AI MEDICATION SAFETY SYSTEM
            </span>
          </div>

          <p className="max-w-md font-sans text-xs text-universe-muted leading-relaxed">
            "VEDIORA provides medication safety insights to support healthcare professionals and patients. It does not replace professional medical advice."
          </p>

          <span className="text-universe-cyan font-bold px-3 py-1 rounded-full bg-universe-surface border border-universe-border">
            HACKATHON DEMO V5.0 ACTIVE
          </span>
        </div>
      </footer>

      {/* Interactive Guided Demo HUD Modal (Section 19) */}
      <GuidedDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
};
