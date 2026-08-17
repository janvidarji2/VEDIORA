import React from 'react';
import {
  Pill,
  FileSpreadsheet,
  AlertTriangle,
  ShieldAlert,
  ArrowRight,
  UploadCloud,
  Clock,
  ChevronRight,
  Stethoscope,
  Sparkles,
  Info,
  Calendar,
  Heart
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';
import { StatCard } from '../components/common/StatCard';
import { SafetyScoreGauge } from '../components/common/SafetyScoreGauge';
import { RiskBadge } from '../components/common/RiskBadge';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';

export const PatientDashboard = () => {
  const {
    currentUser,
    patient,
    medications,
    interactions,
    duplicates,
    safetyStats,
    navigateTo,
    setSelectedInteractionId
  } = useMedication();

  // Find primary high risk, moderate risk, and low risk alerts
  const highAlert = interactions.find(i => i.severity === 'HIGH') || interactions[0];
  const modAlert = interactions.find(i => i.severity === 'MODERATE') || interactions[1];
  const lowAlert = interactions.find(i => i.severity === 'LOW') || interactions[2];

  const recentAlerts = [highAlert, modAlert, lowAlert].filter(Boolean);

  // Today's medication dosage checklist
  const todaySchedule = [
    { time: "07:30 AM", label: "Empty Stomach", meds: ["Levothyroxine 50mcg", "Pantoprazole 40mg"], taken: true },
    { time: "08:30 AM", label: "With Breakfast", meds: ["Glimepiride 2mg", "Metformin 1000mg", "Lisinopril 10mg", "Aspirin 75mg"], taken: true },
    { time: "01:30 PM", label: "With Lunch", meds: ["Calcium + Vit D3 500mg"], taken: false },
    { time: "06:00 PM", label: "Evening Dose", meds: ["Warfarin 5mg"], taken: false },
    { time: "09:30 PM", label: "At Bedtime", meds: ["Atorvastatin 20mg"], taken: false }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Banner / Welcome Strip */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white shadow-elevated">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Polypharmacy Surveillance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-display">
            Medication Safety Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-cyan-100 max-w-xl">
            Combining 12 active medicines across 4 specialist prescriptions to protect against adverse interactions.
          </p>
        </div>

        <button
          onClick={() => navigateTo('upload-prescription')}
          className="px-5 py-3 rounded-2xl bg-white text-slate-900 hover:bg-cyan-50 font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center gap-2 flex-shrink-0"
        >
          <UploadCloud className="w-4 h-4 text-cyan-600" />
          <span>Upload New Prescription</span>
        </button>
      </div>

      {/* Summary Stat Cards (Section 5 Requirement) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Medicines"
          value={safetyStats.totalMedicines}
          subtitle="Active drugs"
          icon={Pill}
          trend="+3"
          trendPositive={false}
          colorScheme="blue"
          onClick={() => navigateTo('medication-profile')}
        />

        <StatCard
          title="Active Prescriptions"
          value="4"
          subtitle="Specialists"
          icon={FileSpreadsheet}
          trend="4 Doctors"
          trendPositive={true}
          colorScheme="cyan"
          onClick={() => navigateTo('medication-profile')}
        />

        <StatCard
          title="Interactions Found"
          value={safetyStats.activeInteractions}
          subtitle="Pairs flagged"
          icon={AlertTriangle}
          trend="Needs Review"
          trendPositive={false}
          colorScheme="amber"
          onClick={() => navigateTo('interaction-results')}
        />

        <StatCard
          title="High Risk Alerts"
          value={safetyStats.highRiskAlerts}
          subtitle="Critical alert"
          icon={ShieldAlert}
          trend="Urgent Consult"
          trendPositive={false}
          colorScheme="red"
          onClick={() => navigateTo('detailed-interaction', { interactionId: 'int-1' })}
        />
      </div>

      {/* Medication Safety Score (Section 5 Requirement: 72 / 100 "Needs Attention") */}
      <SafetyScoreGauge
        score={safetyStats.safetyScore}
        status={safetyStats.safetyScoreStatus}
        breakdown={safetyStats.safetyScoreBreakdown}
        onDetailsClick={() => navigateTo('patient-report')}
      />

      {/* Duplicate Warning Callout if present */}
      {duplicates.length > 0 && (
        <div className="p-5 rounded-3xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800/80 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-2xl bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 mt-0.5">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <RiskBadge severity="DUPLICATE" />
                <span className="text-xs font-mono text-purple-700 dark:text-purple-300">Cross-Doctor Alert</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">
                Potential Duplicate Medicine: Aspirin 75mg
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-200 mt-0.5">
                Prescribed by Dr. Rahul Shah (Metro Heart) and Dr. Vikram Mehta (Sunrise Orthopedics) under different brand names.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigateTo('medication-profile')}
            className="px-4 py-2 text-xs font-bold text-purple-700 dark:text-purple-300 bg-white dark:bg-slate-900 hover:bg-purple-100 rounded-xl border border-purple-300 dark:border-purple-700 transition-all flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Review Duplication</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Recent Safety Alerts Section (Section 5 Requirement) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              Recent Safety Alerts
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-200">
              Potential drug-drug interactions detected across your combined prescriptions
            </p>
          </div>

          <button
            onClick={() => navigateTo('interaction-results')}
            className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>View All ({interactions.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recentAlerts.map((alert) => {
            const isHigh = alert.severity === 'HIGH';
            const isMod = alert.severity === 'MODERATE';

            return (
              <div
                key={alert.id}
                className={`p-5 rounded-3xl border bg-white dark:bg-slate-900 shadow-card flex flex-col justify-between transition-all hover:shadow-elevated ${
                  isHigh
                    ? 'border-red-200 dark:border-red-900/60'
                    : isMod
                    ? 'border-amber-200 dark:border-amber-900/60'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <RiskBadge severity={alert.severity} />
                    <span className="text-[11px] font-mono text-slate-700 dark:text-slate-200">{alert.id}</span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white font-display">
                      {alert.medA.name} + {alert.medB.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      {alert.headline}
                    </p>
                    <p className="text-xs text-slate-700 dark:text-slate-200 mt-1 line-clamp-2">
                      {alert.patientSummary}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-700 dark:text-slate-200">
                    Decision Support
                  </span>
                  <button
                    onClick={() => {
                      setSelectedInteractionId(alert.id);
                      navigateTo('detailed-interaction', { interactionId: alert.id });
                    }}
                    className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 flex items-center gap-1 group"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two Column Layout: Today's Schedule & Quick Action Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Today's Schedule Tracker */}
        <div className="lg:col-span-7 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                  Today's Medication Schedule
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-200">Organized to prevent absorption lag and GI irritation</p>
              </div>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              5 Time Slots
            </span>
          </div>

          <div className="space-y-2.5 pt-2">
            {todaySchedule.map((slot, idx) => (
              <div
                key={idx}
                className={`p-3.5 rounded-2xl border flex items-start justify-between gap-4 transition-all ${
                  slot.taken
                    ? 'bg-slate-50/70 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-800 opacity-80'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 px-2 py-1 rounded-lg text-xs font-mono font-bold ${
                    slot.taken ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300'
                  }`}>
                    {slot.time}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">{slot.label}</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {slot.meds.map((m, mIdx) => (
                        <span key={mIdx} className="text-xs font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <span className={`text-[11px] font-bold px-2 py-1 rounded-lg ${
                  slot.taken ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50' : 'text-amber-600 bg-amber-50 dark:bg-amber-950/50'
                }`}>
                  {slot.taken ? 'Taken' : 'Upcoming'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Patient Profile Card & Doctors */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-cyan-600" />
              <span>Prescribing Doctors (4 Specialists)</span>
            </h3>

            <div className="space-y-3">
              {[
                { name: "Dr. Rahul Shah", spec: "Cardiologist", hosp: "Metro Heart Institute", meds: 3 },
                { name: "Dr. Sneha Patel", spec: "Endocrinologist", hosp: "Apex Diabetes Center", meds: 3 },
                { name: "Dr. Vikram Mehta", spec: "Orthopedic", hosp: "Sunrise Orthopedics", meds: 3 },
                { name: "Dr. Amit Verma", spec: "General Physician", hosp: "City Care Practice", meds: 3 }
              ].map((doc, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 dark:text-white">{doc.name}</h5>
                    <p className="text-[11px] text-slate-700 dark:text-slate-200">{doc.spec} • {doc.hosp}</p>
                  </div>
                  <span className="text-xs font-bold px-2 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300">
                    {doc.meds} meds
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigateTo('patient-report')}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <span>Download Printable Safety Summary</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mandatory Safety Notice */}
      <DisclaimerBanner />
    </div>
  );
};
