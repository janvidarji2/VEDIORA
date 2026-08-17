import React, { useState } from 'react';
import {
  CheckCircle2,
  Edit2,
  Trash2,
  Plus,
  ArrowRight,
  Sparkles,
  FileCheck,
  Stethoscope,
  AlertCircle,
  Pill,
  RotateCcw
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';
import { Modal } from '../components/common/Modal';

export const OCRReview = () => {
  const {
    extractedMedicines,
    setExtractedMedicines,
    activePrescriptionSample,
    navigateTo,
    addToast
  } = useMedication();

  // Default fallback if accessed directly
  const [medicines, setMedicines] = useState(
    extractedMedicines.length > 0
      ? extractedMedicines
      : [
          { id: '1', name: 'Metformin', dosage: '500 mg', frequency: 'Twice daily', prescribedBy: 'Dr. Patel', status: 'Verified', confidence: 99 },
          { id: '2', name: 'Aspirin', dosage: '75 mg', frequency: 'Once daily', prescribedBy: 'Dr. Shah', status: 'Verified', confidence: 98 },
          { id: '3', name: 'Atorvastatin', dosage: '10 mg', frequency: 'Once daily', prescribedBy: 'Dr. Shah', status: 'Verified', confidence: 97 }
        ]
  );

  // Edit / Add Modal state
  const [editingMed, setEditingMed] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (med) => {
    setEditingMed({ ...med });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setMedicines(prev => prev.filter(m => m.id !== id));
    addToast({
      type: 'info',
      title: 'Medicine Removed',
      message: 'Draft entry removed from review table.'
    });
  };

  const handleSaveModal = (e) => {
    e.preventDefault();
    if (!editingMed.name || !editingMed.dosage) return;

    if (editingMed.id) {
      setMedicines(prev => prev.map(m => m.id === editingMed.id ? editingMed : m));
      addToast({ type: 'success', title: 'Updated', message: 'Medicine details saved.' });
    } else {
      const newEntry = {
        ...editingMed,
        id: `med-${Date.now()}`,
        status: 'Manually Added',
        confidence: 100
      };
      setMedicines(prev => [...prev, newEntry]);
      addToast({ type: 'success', title: 'Added', message: 'New medicine added to review list.' });
    }
    setIsModalOpen(false);
  };

  const handleConfirmAndAnalyze = () => {
    commitExtractedMedicines(medicines);
    addToast({
      type: 'success',
      title: 'Prescription Verified',
      message: `${medicines.length} medicines confirmed. Starting AI safety engine...`
    });
    navigateTo('ai-analysis');
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" /> Optical Recognition Complete
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
            Review Extracted Medicines
          </h1>
          <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">
            Please review the medicines recognized from your prescription before running the interaction check.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setEditingMed({
                name: '',
                dosage: '',
                frequency: 'Once daily',
                prescribedBy: activePrescriptionSample?.doctor?.split(',')[0] || 'Dr. Consultant'
              });
              setIsModalOpen(true);
            }}
            className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Medicine</span>
          </button>
        </div>
      </div>

      {/* Detection Banner (Section 7 Requirement) */}
      <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500 text-white">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-cyan-950 dark:text-cyan-100">
              {medicines.length} medicines detected from prescription
            </h4>
            <p className="text-xs text-cyan-700 dark:text-cyan-300">
              Standardized against international RxNorm and WHO-ATC ontology.
            </p>
          </div>
        </div>

        <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200">
          Ready for Analysis
        </span>
      </div>

      {/* Extracted Medicines Table (Section 7 Requirement) */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 font-bold">
              <tr>
                <th className="px-6 py-4">Medicine</th>
                <th className="px-6 py-4">Dosage</th>
                <th className="px-6 py-4">Frequency</th>
                <th className="px-6 py-4">Prescribed By</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {medicines.map((med) => (
                <tr key={med.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Pill className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">
                          {med.name}
                        </span>
                        <div className="text-[11px] text-slate-700 dark:text-slate-200">AI Match: {med.confidence || 98}%</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {med.dosage}
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-700 dark:text-slate-300">
                    {med.frequency}
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-slate-800 dark:text-slate-200">
                    {med.prescribedBy}
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="w-3 h-3" />
                      {med.status || 'Verified'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(med)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Edit Medicine"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(med.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Delete Medicine"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Confirmation Footer (Section 7 Requirement) */}
        <div className="p-6 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-700 dark:text-slate-200">
            Confirming will cross-reference these {medicines.length} medications against your complete profile.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => navigateTo('upload-prescription')}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Re-upload
            </button>

            <button
              onClick={handleConfirmAndAnalyze}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-xs shadow-md hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Confirm & Analyze</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Edit / Add Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingMed?.id ? 'Edit Extracted Medicine' : 'Add New Medicine to Draft'}
      >
        {editingMed && (
          <form onSubmit={handleSaveModal} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Medicine Name
              </label>
              <input
                type="text"
                required
                value={editingMed.name}
                onChange={(e) => setEditingMed({ ...editingMed, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Dosage
                </label>
                <input
                  type="text"
                  required
                  value={editingMed.dosage}
                  onChange={(e) => setEditingMed({ ...editingMed, dosage: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Frequency
                </label>
                <input
                  type="text"
                  required
                  value={editingMed.frequency}
                  onChange={(e) => setEditingMed({ ...editingMed, frequency: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">
                Prescribing Doctor
              </label>
              <input
                type="text"
                value={editingMed.prescribedBy}
                onChange={(e) => setEditingMed({ ...editingMed, prescribedBy: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </Modal>
    </div>
  );
};
