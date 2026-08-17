import React, { useState } from 'react';
import {
  DoctorPatel,
  DoctorShah,
  DoctorMehta,
  ElderlyRajesh,
  VEDIAssistant,
  MedicinePill,
  PrescriptionSheet
} from '../characters/Characters';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';

export const CharacterScrollStory = ({ onProceedToAI }) => {
  const [activeAct, setActiveAct] = useState(0);

  const acts = [
    {
      num: "01",
      title: "3 DOCTORS",
      subtitle: "Different Prescriptions.",
      caption: "Cardiologist, Diabetologist, and General Physician write isolated prescriptions without mutual visibility.",
      content: (
        <div className="flex items-center justify-around gap-4 my-6">
          <DoctorPatel size="md" />
          <DoctorShah size="md" />
          <DoctorMehta size="md" />
        </div>
      )
    },
    {
      num: "02",
      title: "6 MEDICINES",
      subtitle: "Active Molecules Prescribed.",
      caption: "Metformin, Glimepiride, Warfarin, Aspirin, Celecoxib, and Lisinopril emerge from separate clinical visits.",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 max-w-md mx-auto animate-pop-in">
          <MedicinePill name="Warfarin" dose="5 mg" color="coral" />
          <MedicinePill name="Aspirin" dose="75 mg" color="coral" />
          <MedicinePill name="Metformin" dose="500 mg" color="violet" />
          <MedicinePill name="Glimepiride" dose="2 mg" color="amber" />
          <MedicinePill name="Celecoxib" dose="200 mg" color="coral" />
          <MedicinePill name="Lisinopril" dose="10 mg" color="mint" />
        </div>
      )
    },
    {
      num: "03",
      title: "1 PATIENT",
      subtitle: "One Body. All Prescriptions.",
      caption: "Rajesh (68M) ingests every prescribed tablet together at home.",
      content: (
        <div className="flex justify-center my-6 animate-pop-in">
          <ElderlyRajesh size="lg" />
        </div>
      )
    },
    {
      num: "04",
      title: "1 COMPLETE PROFILE",
      subtitle: "The Missing Holistic Picture.",
      caption: "VEDIORA merges the disconnected prescriptions into a single, unified digital medication profile.",
      content: (
        <div className="relative flex flex-col items-center justify-center my-6 animate-pop-in">
          <ElderlyRajesh size="md" />
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-sm">
            <MedicinePill name="Warfarin" dose="5 mg" color="coral" />
            <MedicinePill name="Aspirin" dose="75 mg" color="coral" />
            <MedicinePill name="Metformin" dose="500 mg" color="violet" />
            <MedicinePill name="Celecoxib" dose="200 mg" color="amber" />
          </div>
        </div>
      )
    },
    {
      num: "05",
      title: "NOW CHECK THEM TOGETHER.",
      subtitle: "VEDI AI Safety Analysis.",
      caption: "Combinatorial AI analyzes all 66 pairs to prevent adverse drug events and bleeding risks.",
      content: (
        <div className="flex flex-col items-center justify-center my-6 animate-pop-in space-y-4">
          <VEDIAssistant size="lg" isChecking={true} />
          <span className="font-mono text-xs text-vediora-mint font-extrabold px-3 py-1 rounded-full bg-vediora-lightMint">
            ✓ 66 PAIRS CHECKED IN 0.4s
          </span>
        </div>
      )
    }
  ];

  const act = acts[activeAct];

  return (
    <section className="py-28 px-6 lg:px-16 max-w-[1520px] mx-auto select-none">
      {/* Editorial Navigation Ticker */}
      <div className="flex flex-wrap items-center justify-between border-b border-vediora-border pb-4 mb-16 font-mono text-xs">
        <span className="text-vediora-lavender font-bold tracking-widest">[ SCROLL STORY // 5 ACTS ]</span>
        <div className="flex items-center gap-2">
          {acts.map((a, idx) => (
            <button
              key={a.num}
              onClick={() => setActiveAct(idx)}
              className={`px-3 py-1 rounded-full transition-all ${
                activeAct === idx
                  ? 'bg-vediora-violet text-white font-extrabold shadow-sm'
                  : 'bg-white text-vediora-muted hover:text-vediora-charcoal border border-vediora-border'
              }`}
            >
              Act {a.num}
            </button>
          ))}
        </div>
      </div>

      {/* Main Act Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Act Typography (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <span className="font-mono text-xs font-extrabold text-vediora-lavender uppercase tracking-widest block">
            ACT {act.num} / {act.subtitle}
          </span>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-vediora-violet font-display tracking-tight leading-[0.95]">
            {act.title}
          </h2>

          <p className="text-base text-vediora-muted font-medium max-w-md leading-relaxed">
            {act.caption}
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button
              disabled={activeAct === acts.length - 1}
              onClick={() => setActiveAct((prev) => Math.min(acts.length - 1, prev + 1))}
              className="px-6 py-3 rounded-full bg-vediora-violet hover:bg-vediora-deepViolet text-white text-xs font-display font-extrabold shadow-character transition-all flex items-center gap-2 disabled:opacity-40"
            >
              <span>Next Act →</span>
            </button>

            {activeAct === acts.length - 1 && (
              <button
                onClick={onProceedToAI}
                className="px-6 py-3 rounded-full bg-vediora-mint hover:bg-emerald-600 text-white text-xs font-display font-extrabold shadow-sm transition-all"
              >
                Run AI Safety Check
              </button>
            )}
          </div>
        </div>

        {/* Right Dynamic Character Canvas (7 cols) */}
        <div className="lg:col-span-7 relative min-h-[460px] rounded-[36px] bg-white border border-vediora-border shadow-paper p-8 flex flex-col justify-center items-center overflow-hidden">
          {act.content}
        </div>
      </div>
    </section>
  );
};
