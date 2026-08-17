import React, { useState } from 'react';
import {
  Pill,
  Plus,
  UploadCloud,
  Stethoscope,
  Trash2,
  Edit2,
  Sparkles,
  AlertTriangle,
  Clock,
  Building2,
  Calendar,
  Layers,
  ChevronRight,
  Filter
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';
import { Modal } from '../components/common/Modal';
import { RiskBadge } from '../components/common/RiskBadge';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';

export const MedicationProfile = () => {
  const {
    patient,
    medications,
    addMedication,
    removeMedication,
    updateMedication,
    duplicates,
    navigateTo,
    addToast
  } = useMedication();

  const [viewMode, setViewMode] = useState('list'); // 'list' | 'constellation'
  const [selectedSpecialist, setSelectedSpecialist] = useState('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '',
    frequency: 'Once daily',
    specialist: 'Cardiology',
    prescribedBy: 'Dr. Rahul Shah',
    indication: ''
  });

  // Group medications by specialist
  const specialists = Array.from(new Set(medications.map(m => m.specialist)));

  const filteredMeds = selectedSpecialist === 'ALL'
    ? medications
    : medications.filter(m => m.specialist === selectedSpecialist);

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newMed.name || !newMed.dosage) return;

    addMedication(newMed);
    setIsAddModalOpen(false);
    setNewMed({
      name: '',
      dosage: '',
      frequency: 'Once daily',
      specialist: 'Cardiology',
      prescribedBy: 'Dr. Rahul Shah',
      indication: ''
    });
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Consolidated Polypharmacy Profile
          </div>
          <h1 className="text-3xl font-extrabold text-white font-display">
            Complete Medication Profile
          </h1>
          <p className="text-sm text-slate-300 mt-1">
            All active medications from all treating doctors consolidated in one unified clinical view.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* View Mode Switcher */}
          <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1 text-xs">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                viewMode === 'list' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Specialist Groups
            </button>
            <button
              onClick={() => setViewMode('constellation')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                viewMode === 'constellation' ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-glow-cyan' : 'text-slate-400 hover:text-white'
              }`}
            >
              Constellation Map
            </button>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors flex items-center gap-1.5 border border-slate-700"
          >
            <Plus className="w-4 h-4" />
            <span>+ Add Medicine</span>
          </button>

          <button
            onClick={() => navigateTo('upload-prescription')}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-glow-cyan transition-all flex items-center gap-1.5"
          >
            <UploadCloud className="w-4 h-4" />
            <span>+ Upload Another Prescription</span>
          </button>
        </div>
      </div>

      {/* Patient Meta & Cross-Prescription Banner */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-violet-500/30 text-white shadow-card">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-bold text-xl text-cyan-400">
              {patient.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold font-display">{patient.name}</h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {patient.age} yrs • {patient.gender}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Conditions: {patient.conditions.join(' • ')}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 border-t md:border-t-0 md:border-l border-slate-800 pt-4 md:pt-0 md:pl-6">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Total Active Drugs</span>
              <span className="text-2xl font-bold text-cyan-400 font-display">{medications.length} Medicines</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block">Combined Specialists</span>
              <span className="text-2xl font-bold text-white font-display">4 Clinics</span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-cyan-300">
          <span className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-cyan-400" />
            <strong>Unified Record:</strong> All prescriptions combined into one medication profile.
          </span>
          <button
            onClick={() => navigateTo('ai-analysis')}
            className="font-bold underline hover:text-cyan-200 flex items-center gap-1"
          >
            Run Full Safety Analysis <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {viewMode === 'constellation' ? (
        <div className="animate-scale-in">
          <div className="p-6 rounded-3xl border border-violet-500/30 bg-slate-900/90 backdrop-blur-2xl">
            <h3 className="text-lg font-bold text-white font-display mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Digital Medication Constellation & Orbiting Nodes</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {medications.map((med) => (
                <div
                  key={med.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    med.isDuplicate
                      ? 'border-red-500/50 bg-red-950/20 shadow-glow-crimson'
                      : 'border-slate-800 bg-slate-950/80 hover:border-cyan-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold text-cyan-400">{med.specialist}</span>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                      {med.dosage}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display">{med.name}</h4>
                  <p className="text-xs text-slate-400 mt-1">{med.frequency}</p>
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                    <span>{med.prescribedBy}</span>
                    <span>{med.rxNumber}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Filter Tabs by Specialist */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedSpecialist('ALL')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedSpecialist === 'ALL'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              All Specialists ({medications.length})
            </button>

            {specialists.map((spec) => {
              const count = medications.filter(m => m.specialist === spec).length;
              return (
                <button
                  key={spec}
                  onClick={() => setSelectedSpecialist(spec)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    selectedSpecialist === spec
                      ? 'bg-cyan-600 text-white shadow-sm'
                      : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {spec} ({count})
                </button>
              );
            })}
          </div>
        </>
      )}

      {/* Medication Cards List Organized by Specialist (Section 8 Requirement) */}
      <div className="space-y-6">
        {specialists
          .filter(spec => selectedSpecialist === 'ALL' || selectedSpecialist === spec)
          .map((spec) => {
            const specMeds = medications.filter(m => m.specialist === spec);
            if (specMeds.length === 0) return null;

            return (
              <div
                key={spec}
                className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card space-y-4"
              >
                {/* Specialist Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                        {spec}
                      </h3>
                      <p className="text-xs text-slate-700 dark:text-slate-200">
                        {specMeds[0]?.prescribedBy} • {specMeds[0]?.hospital}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {specMeds.length} Prescribed
                  </span>
                </div>

                {/* Medicines in this Specialist Group */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                  {specMeds.map((med) => (
                    <div
                      key={med.id}
                      className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                        med.isDuplicate
                          ? 'border-purple-200 bg-purple-50/40 dark:bg-purple-950/20 dark:border-purple-900/60'
                          : 'border-slate-200/70 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block">
                              {med.category}
                            </span>
                            <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                              {med.name}
                            </h4>
                          </div>

                          {med.isDuplicate ? (
                            <RiskBadge severity="DUPLICATE" size="sm" />
                          ) : (
                            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                              {med.dosage}
                            </span>
                          )}
                        </div>

                        <div className="space-y-1 text-xs text-slate-700 dark:text-slate-200">
                          <p className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                            <span>{med.frequency}</span>
                          </p>
                          {med.indication && (
                            <p className="text-[11px] text-slate-700 dark:text-slate-200">
                              <span className="font-semibold">Indication:</span> {med.indication}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-slate-700 dark:text-slate-200">
                          {med.rxNumber}
                        </span>
                        <button
                          onClick={() => removeMedication(med.id)}
                          className="p-1 text-slate-400 hover:text-red-500 transition-colors"
                          title="Remove from profile"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>

      {/* Add Medicine Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Medicine to Complete Profile"
      >
        <form onSubmit={handleAddSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Medicine Name *
            </label>
            <input
              type="text"
              required
              value={newMed.name}
              onChange={(e) => setNewMed({ ...newMed, name: e.target.value })}
              placeholder="e.g. Clopidogrel"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Dosage *
              </label>
              <input
                type="text"
                required
                value={newMed.dosage}
                onChange={(e) => setNewMed({ ...newMed, dosage: e.target.value })}
                placeholder="e.g. 75 mg"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Frequency
              </label>
              <input
                type="text"
                value={newMed.frequency}
                onChange={(e) => setNewMed({ ...newMed, frequency: e.target.value })}
                placeholder="e.g. Once daily morning"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Specialist Category
              </label>
              <select
                value={newMed.specialist}
                onChange={(e) => setNewMed({ ...newMed, specialist: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-cyan-500"
              >
                <option value="Cardiology">Cardiology</option>
                <option value="Endocrinology & Diabetes">Endocrinology & Diabetes</option>
                <option value="Orthopedics & Joint Care">Orthopedics & Joint Care</option>
                <option value="General Practice">General Practice</option>
                <option value="Neurology">Neurology</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Prescribing Doctor
              </label>
              <input
                type="text"
                value={newMed.prescribedBy}
                onChange={(e) => setNewMed({ ...newMed, prescribedBy: e.target.value })}
                placeholder="e.g. Dr. Rahul Shah"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs shadow-md"
            >
              Add to Medication Profile
            </button>
          </div>
        </form>
      </Modal>

      <DisclaimerBanner />
    </div>
  );
};
