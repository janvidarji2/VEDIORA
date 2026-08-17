import React, { useState } from 'react';
import {
  Users,
  FileSpreadsheet,
  AlertTriangle,
  ShieldAlert,
  Search,
  Filter,
  ArrowRight,
  Stethoscope,
  Sparkles,
  Activity,
  CheckCircle2,
  ChevronRight,
  Clock
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';
import { StatCard } from '../components/common/StatCard';
import { RiskBadge } from '../components/common/RiskBadge';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';

export const DoctorDashboard = () => {
  const {
    patientsList,
    navigateTo,
    currentUser,
    setPatient,
    selectPatient,
    addToast
  } = useMedication();

  const [searchQuery, setSearchQuery] = useState('');
  const [filterRisk, setFilterRisk] = useState('ALL'); // 'ALL' | 'HIGH' | 'MODERATE' | 'LOW'

  const filteredPatients = patientsList.filter(p => {
    const matchesRisk = filterRisk === 'ALL' || p.riskLevel === filterRisk;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.primaryCondition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRisk && matchesSearch;
  });

  const handleViewPatient = (patientObj) => {
    selectPatient(patientObj);
    addToast({
      type: 'info',
      title: 'Patient Profile Selected',
      message: `Loaded clinical chart for ${patientObj.name} (${patientObj.id})`
    });
    navigateTo('doctor-report');
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-7xl mx-auto">
      {/* Clinician Welcome Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-950 text-white border border-slate-800 shadow-elevated">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Physician Clinical Triage Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
            Polypharmacy Triage & Decision Queue
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Surveillance across your patient cohort to detect dangerous cross-specialist drug interactions.
          </p>
        </div>

        <button
          onClick={() => navigateTo('upload-prescription')}
          className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 flex-shrink-0"
        >
          <span>OCR Intake Scanner</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Summary Stat Cards (Section 16 Requirement) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Patients Reviewed"
          value="24"
          subtitle="Cohort size"
          icon={Users}
          trend="+4 this week"
          trendPositive={true}
          colorScheme="blue"
        />

        <StatCard
          title="Prescriptions Analyzed"
          value="67"
          subtitle="OCR validated"
          icon={FileSpreadsheet}
          trend="99.4% precision"
          trendPositive={true}
          colorScheme="cyan"
        />

        <StatCard
          title="High-Risk Cases"
          value="8"
          subtitle="Urgent triage"
          icon={ShieldAlert}
          trend="Requires review"
          trendPositive={false}
          colorScheme="red"
        />

        <StatCard
          title="Interactions Detected"
          value="31"
          subtitle="Active alerts"
          icon={AlertTriangle}
          trend="Pharmacopeia flagged"
          trendPositive={false}
          colorScheme="amber"
        />
      </div>

      {/* Patient Triage Table Section (Section 16 Requirement) */}
      <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-card space-y-6">
        {/* Table Header & Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              Polypharmacy Patient Queue
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-200">
              Ranked by AI Medication Safety Score and urgency of intervention
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <input
                type="text"
                placeholder="Search patient, ID, or condition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-700 dark:placeholder-slate-200 focus:outline-none focus:border-indigo-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>

            <div className="flex items-center gap-1.5">
              {['ALL', 'HIGH', 'MODERATE', 'LOW'].map((risk) => (
                <button
                  key={risk}
                  onClick={() => setFilterRisk(risk)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    filterRisk === risk
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {risk}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Patients Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 font-bold">
              <tr>
                <th className="px-6 py-4">Patient</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">Medicines</th>
                <th className="px-6 py-4">Safety Score</th>
                <th className="px-6 py-4">Risk Level</th>
                <th className="px-6 py-4">Last Analysis</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredPatients.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center text-xs">
                        {p.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block">
                          {p.name}
                        </span>
                        <span className="text-[11px] text-slate-700 dark:text-slate-200 font-mono">
                          {p.id} • {p.primaryCondition}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {p.age} yrs ({p.gender[0]})
                  </td>

                  <td className="px-6 py-4 text-xs font-semibold text-slate-800 dark:text-slate-200">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                      {p.medicinesCount} Meds ({p.prescriptionsCount} Rx)
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-mono text-slate-900 dark:text-white">
                        {p.safetyScore}/100
                      </span>
                      <div className="w-16 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            p.safetyScore < 60 ? 'bg-red-500' : p.safetyScore < 80 ? 'bg-amber-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${p.safetyScore}%` }}
                        />
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <RiskBadge severity={p.riskLevel} size="sm" />
                  </td>

                  <td className="px-6 py-4 text-xs text-slate-700 dark:text-slate-200">
                    {p.lastAnalysis}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleViewPatient(p)}
                      className="px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 font-bold text-xs transition-colors inline-flex items-center gap-1"
                    >
                      <span>View Patient</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DisclaimerBanner />
    </div>
  );
};
