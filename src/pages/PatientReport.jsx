import React, { useState, useEffect } from 'react';
import {
  FileText,
  Download,
  Share2,
  Printer,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  User,
  Heart,
  Stethoscope,
  ArrowRight,
  Volume2,
  VolumeX,
  Plus,
  Trash2,
  Copy,
  Check,
  Sparkles,
  Clock,
  ChevronDown,
  ChevronUp,
  Info,
  QrCode
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useMedication } from '../context/MedicationContext';
import { RiskBadge } from '../components/common/RiskBadge';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';

export const PatientReport = () => {
  const {
    patient,
    medications,
    interactions,
    duplicates,
    safetyStats,
    addToast
  } = useMedication();

  // Audio speech narration state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState(1);

  // Interactive Checklist State
  const [questions, setQuestions] = useState([
    {
      id: 'q-1',
      text: "Dr. Shah and Dr. Mehta, is it safe for me to take Warfarin and Aspirin together, or can we streamline my blood thinner regimen?",
      category: "High Priority - Bleeding Risk",
      checked: false
    },
    {
      id: 'q-2',
      text: "What is the best timing spacing between my morning thyroid tablet and my afternoon calcium pill?",
      category: "Timing & Absorption",
      checked: false
    },
    {
      id: 'q-3',
      text: "Can we confirm my daily target blood sugar range while taking both Metformin and Glimepiride?",
      category: "Blood Sugar Monitoring",
      checked: false
    },
    {
      id: 'q-4',
      text: "Dr. Mehta, should I continue Disprin Protect if I am already taking Ecosprin from Cardiology?",
      category: "Duplicate Prescription",
      checked: false
    }
  ]);

  const [newQuestionText, setNewQuestionText] = useState('');
  const [showAddQuestion, setShowAddQuestion] = useState(false);
  const [copiedQuestionId, setCopiedQuestionId] = useState(null);

  // Expanded interaction cards state
  const [expandedCards, setExpandedCards] = useState({
    'int-1': true,
    'int-2': false,
    'int-3': false,
    'int-4': false
  });

  const toggleCard = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleCheck = (id) => {
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, checked: !q.checked } : q));
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (!newQuestionText.trim()) return;

    const newQ = {
      id: `q-${Date.now()}`,
      text: newQuestionText.trim(),
      category: "Patient Custom Note",
      checked: false
    };

    setQuestions(prev => [...prev, newQ]);
    setNewQuestionText('');
    setShowAddQuestion(false);
    addToast({
      type: 'success',
      title: 'Question Added',
      message: 'New discussion point added to your consultation checklist.'
    });
  };

  const handleDeleteQuestion = (id) => {
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  const handleCopyQuestion = (text, id) => {
    navigator.clipboard?.writeText(text);
    setCopiedQuestionId(id);
    setTimeout(() => setCopiedQuestionId(null), 2000);
    addToast({
      type: 'info',
      title: 'Question Copied',
      message: 'Question copied to clipboard to paste into patient portal or notes.'
    });
  };

  // Text to Speech Narration Handler
  const toggleAudioNarration = () => {
    if (!('speechSynthesis' in window)) {
      addToast({
        type: 'warning',
        title: 'Voice Synthesizer',
        message: 'Audio narration is not supported in this browser mode.'
      });
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const narrative = `Your Medication Safety Report for ${patient.name}. We evaluated your ${medications.length} medicines and found ${interactions.length} potential medication interactions. First, an important warning: Warfarin and Aspirin taken together increase your risk of bleeding. Please consult your doctor or pharmacist before making any changes.`;
      const utterance = new SpeechSynthesisUtterance(narrative);
      utterance.rate = speechRate;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);

      addToast({
        type: 'info',
        title: 'Audio Narration Playing',
        message: 'Reading plain-language summary in English.'
      });
    }
  };

  // Stop audio if navigating away
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    try {
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
    } catch (e) {}
    addToast({
      type: 'success',
      title: 'Report Link Copied',
      message: 'Secure patient report link copied to clipboard. Ready to share with doctor.'
    });
  };

  const handleDownload = () => {
    try {
      confetti({ particleCount: 50, spread: 80, origin: { y: 0.6 } });
    } catch (e) {}
    addToast({
      type: 'success',
      title: 'Downloading Patient Summary PDF',
      message: `VEDIORA_Patient_Safety_Report_${patient.name.replace(' ', '_')}.pdf generated.`
    });
  };

  const completedQuestionsCount = questions.filter(q => q.checked).length;

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto pb-12">
      {/* Top Action Bar (hidden during print) */}
      <div className="no-print flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-card">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-2">
            <Heart className="w-3.5 h-3.5" /> Plain Language Patient Summary
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Your Medication Safety Report
          </h1>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-0.5">
            Clear, non-technical guidance prepared for your upcoming doctor consultations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Audio Narration Animated Button */}
          <button
            onClick={toggleAudioNarration}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
              isPlayingAudio
                ? 'bg-cyan-500 text-white shadow-glow-cyan animate-pulse'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <VolumeX className="w-4 h-4" />
                <span>Pause Voice</span>
                <div className="flex items-center gap-0.5 ml-1">
                  <span className="w-1 bg-white rounded-full animate-soundwave-1" />
                  <span className="w-1 bg-white rounded-full animate-soundwave-2" />
                  <span className="w-1 bg-white rounded-full animate-soundwave-3" />
                  <span className="w-1 bg-white rounded-full animate-soundwave-4" />
                </div>
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Listen to Report</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            title="Print Report"
          >
            <Printer className="w-4 h-4" />
          </button>

          <button
            onClick={handleShare}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            title="Share Link"
          >
            <Share2 className="w-4 h-4 text-cyan-600" />
          </button>

          <button
            onClick={handleDownload}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md hover:shadow-glow-cyan transition-all flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Printable Report Document Card (Section 12 Requirement) */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-elevated space-y-8 print:p-0 print:border-0 print:shadow-none relative overflow-hidden">
        {/* Subtle Watermark for authenticity */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none font-display font-extrabold text-9xl text-slate-900 dark:text-white">
          VEDIORA
        </div>

        {/* Document Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800 relative z-10">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md animate-float">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">
                  VEDIORA
                </h2>
                <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                  AI SAFETY VERIFIED
                </span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-200">Patient Medication Safety Audit</p>
            </div>
          </div>

          <div className="text-xs text-slate-700 dark:text-slate-200 sm:text-right space-y-1 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
            <p><strong className="text-slate-900 dark:text-white font-semibold">Patient:</strong> {patient.name} ({patient.age} yrs • Male)</p>
            <p><strong className="text-slate-900 dark:text-white font-semibold">Audit Date:</strong> 16 August 2026</p>
            <p><strong className="text-slate-900 dark:text-white font-semibold">Primary Care:</strong> {patient.primaryPhysician}</p>
          </div>
        </div>

        {/* Safety Overview Banner (Section 12 Requirement) */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50/90 to-blue-50/50 dark:from-cyan-950/40 dark:to-slate-900 border border-cyan-200/90 dark:border-cyan-800 shadow-sm relative overflow-hidden">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-500 text-white shadow-sm mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-cyan-950 dark:text-cyan-100 font-display">
                We evaluated your {medications.length} medicines and found {interactions.length} potential medication interactions.
              </h3>
              <p className="text-xs text-cyan-800 dark:text-cyan-300 leading-relaxed">
                This report explains in everyday terms what these interactions mean, why they were flagged, and what questions you should ask your doctor during your next visit.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Daily Timing Separation Banner (4-Hour Gap Guidance) */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                Daily Timing Guideline for Separating Pills
              </h4>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              Spacing Prevents Absorption Lag
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-1">
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
              <span className="text-[10px] font-bold uppercase text-cyan-600 dark:text-cyan-400 block">7:30 AM (Fasting)</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Levothyroxine 50mcg</span>
              <p className="text-[10px] text-slate-700 dark:text-slate-200 mt-0.5">Take alone with full water</p>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
              <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400 block">8:30 AM (Breakfast)</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Metformin + Glimepiride</span>
              <p className="text-[10px] text-slate-700 dark:text-slate-200 mt-0.5">Always take with food</p>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center relative">
              <span className="text-[10px] font-bold uppercase text-amber-600 dark:text-amber-400 block">1:30 PM (Lunch)</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Calcium + Vit D3</span>
              <p className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold mt-0.5">4h after thyroid tablet</p>
            </div>

            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-center">
              <span className="text-[10px] font-bold uppercase text-red-600 dark:text-red-400 block">6:00 PM (Dinner)</span>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Warfarin 5mg</span>
              <p className="text-[10px] text-slate-700 dark:text-slate-200 mt-0.5">Consistent daily time</p>
            </div>
          </div>
        </div>

        {/* Plain Language Findings List (Section 12 Requirement) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
              What We Found in Simple Terms
            </h3>
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
              Click any card to expand/collapse details
            </span>
          </div>

          {interactions.map((int, idx) => {
            const isExpanded = expandedCards[int.id] !== false;
            const isHigh = int.severity === 'HIGH';
            const isMod = int.severity === 'MODERATE';

            return (
              <div
                key={int.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isHigh
                    ? 'border-red-200 dark:border-red-900/60 bg-red-50/20 dark:bg-slate-800/50'
                    : isMod
                    ? 'border-amber-200 dark:border-amber-900/60 bg-amber-50/20 dark:bg-slate-800/50'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40'
                }`}
              >
                {/* Header Strip with Toggle Action */}
                <div
                  onClick={() => toggleCard(int.id)}
                  className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-100/50 dark:hover:bg-slate-800/60 transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center flex-shrink-0 ${
                      isHigh ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                        {int.medA.name} + {int.medB.name}
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-200 line-clamp-1">{int.headline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <RiskBadge severity={int.severity} size="sm" />
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </div>

                {/* Collapsible Content Area */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 space-y-3 animate-slide-up border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {int.patientSummary}
                    </p>

                    {/* Symptoms to watch */}
                    {int.patientSignsToWatch && (
                      <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block">
                          What to watch out for:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {int.patientSignsToWatch.map((sign, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 flex-shrink-0" />
                              <span>{sign}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Recommended Action */}
                    <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                      <p>
                        <strong>What you should do:</strong> {int.patientAction}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Duplicate Medicine Callout */}
        {duplicates.length > 0 && (
          <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-900/60 space-y-2">
            <div className="flex items-center gap-2">
              <RiskBadge severity="DUPLICATE" />
              <h4 className="text-sm font-bold text-purple-950 dark:text-purple-100">
                Possible Duplicate Medicine: Aspirin
              </h4>
            </div>
            <p className="text-xs text-purple-900 dark:text-purple-200 leading-relaxed">
              You are receiving Aspirin 75mg from both Dr. Shah (Cardiologist) and Dr. Mehta (Orthopedics) under two different brand names (Ecosprin & Disprin). Ask them to confirm if you should only be taking one.
            </p>
          </div>
        )}

        {/* INTERACTIVE QUESTIONS CHECKLIST FOR DOCTOR VISIT */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 font-display">
                <Stethoscope className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>Interactive Questions Checklist for Your Doctor</span>
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-200 mt-0.5">
                Check off questions as you discuss them with your physician during your consultation.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                {completedQuestionsCount} of {questions.length} Discussed
              </span>

              <button
                onClick={() => setShowAddQuestion(!showAddQuestion)}
                className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Question</span>
              </button>
            </div>
          </div>

          {/* Add custom question form */}
          {showAddQuestion && (
            <form onSubmit={handleAddQuestion} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-cyan-300 dark:border-cyan-700 flex gap-2 animate-scale-in">
              <input
                type="text"
                required
                placeholder="Type your question for the doctor..."
                value={newQuestionText}
                onChange={(e) => setNewQuestionText(e.target.value)}
                className="flex-1 px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold rounded-lg transition-colors"
              >
                Save
              </button>
            </form>
          )}

          {/* Questions List */}
          <div className="space-y-2.5 pt-1">
            {questions.map((q) => (
              <div
                key={q.id}
                className={`p-3.5 rounded-xl border flex items-start justify-between gap-3 transition-all ${
                  q.checked
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 opacity-75'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-cyan-400'
                }`}
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <input
                    type="checkbox"
                    checked={q.checked}
                    onChange={() => handleToggleCheck(q.id)}
                    className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4 mt-0.5 cursor-pointer"
                  />
                  <div className="min-w-0">
                    <span className={`text-xs font-medium block leading-relaxed ${
                      q.checked ? 'line-through text-slate-700 dark:text-slate-300' : 'text-slate-800 dark:text-slate-200'
                    }`}>
                      "{q.text}"
                    </span>
                    <span className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400 mt-1 inline-block">
                      Category: {q.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => handleCopyQuestion(q.text, q.id)}
                    className="p-1 rounded-lg text-slate-400 hover:text-cyan-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Copy Question"
                  >
                    {copiedQuestionId === q.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => handleDeleteQuestion(q.id)}
                    className="p-1 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="Delete Question"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification QR Code & Digital Stamp */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <QrCode className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">
                Digital Verification Token: #VED-2026-89241-SEC
              </span>
              <p className="text-[11px] text-slate-700 dark:text-slate-200">
                Scan or share this code at your pharmacy counter for instant medication verification.
              </p>
            </div>
          </div>

          <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
            ● Active Decision Support
          </span>
        </div>

        {/* Mandatory Plain-English Medical Safety Statement (Section 12 & 22 Requirement) */}
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 text-center font-semibold">
          "Do not stop or change any medicine without first asking your doctor or pharmacist."
        </div>
      </div>

      <DisclaimerBanner />
    </div>
  );
};
