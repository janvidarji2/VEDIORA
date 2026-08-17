import React from 'react';
import {
  LayoutDashboard,
  Pill,
  UploadCloud,
  Activity,
  AlertTriangle,
  FileText,
  History,
  Settings,
  LogOut,
  Stethoscope,
  ShieldCheck,
  ChevronRight,
  Sparkles,
  Users
} from 'lucide-react';
import { useMedication } from '../../context/MedicationContext';

export const Sidebar = ({ isOpen, onClose }) => {
  const {
    currentPage,
    navigateTo,
    userPersona,
    currentUser,
    logout,
    interactions,
    duplicates,
    safetyStats
  } = useMedication();

  const isDoctor = userPersona === 'doctor';

  const patientNavItems = [
    {
      id: 'patient-dashboard',
      label: 'Overview',
      icon: LayoutDashboard,
      badge: null
    },
    {
      id: 'medication-profile',
      label: 'Medication Profile',
      icon: Pill,
      badge: `${safetyStats.totalMedicines}`
    },
    {
      id: 'upload-prescription',
      label: 'Upload Prescription',
      icon: UploadCloud,
      badge: 'OCR'
    },
    {
      id: 'ai-analysis',
      label: 'Safety Analysis',
      icon: Activity,
      badge: 'AI'
    },
    {
      id: 'interaction-results',
      label: 'Interactions',
      icon: AlertTriangle,
      badge: `${interactions.length + (duplicates.length > 0 ? 1 : 0)}`,
      badgeColor: 'bg-red-500 text-white'
    },
    {
      id: 'patient-report',
      label: 'Patient Report',
      icon: FileText,
      badge: null
    },
    {
      id: 'doctor-report',
      label: 'Doctor Report',
      icon: Stethoscope,
      badge: 'Clinical'
    },
    {
      id: 'medication-history',
      label: 'Medication History',
      icon: History,
      badge: null
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      badge: null
    }
  ];

  const doctorNavItems = [
    {
      id: 'doctor-dashboard',
      label: 'Patient Triage Queue',
      icon: Users,
      badge: '24'
    },
    {
      id: 'doctor-report',
      label: 'Clinical Interaction Matrix',
      icon: Stethoscope,
      badge: 'RxNorm'
    },
    {
      id: 'medication-profile',
      label: 'Patient Med Profile',
      icon: Pill,
      badge: `${safetyStats.totalMedicines}`
    },
    {
      id: 'upload-prescription',
      label: 'OCR Rx Intake',
      icon: UploadCloud,
      badge: 'Scanner'
    },
    {
      id: 'interaction-results',
      label: 'Interaction Evidence',
      icon: AlertTriangle,
      badge: `${interactions.length}`,
      badgeColor: 'bg-red-500 text-white'
    },
    {
      id: 'patient-dashboard',
      label: 'Patient Portal Preview',
      icon: LayoutDashboard,
      badge: 'Preview'
    },
    {
      id: 'medication-history',
      label: 'Audit Log & History',
      icon: History,
      badge: null
    },
    {
      id: 'settings',
      label: 'System Settings',
      icon: Settings,
      badge: null
    }
  ];

  const navItems = isDoctor ? doctorNavItems : patientNavItems;

  const handleNavClick = (id) => {
    navigateTo(id);
    if (onClose) onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 bottom-0 z-40 w-72 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800 transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
          <div
            onClick={() => navigateTo('landing')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-display">
                  VEDIORA
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  AI
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Medication Safety System</p>
            </div>
          </div>
        </div>

        {/* Persona Mode Indicator */}
        <div className="px-5 pt-4 pb-2">
          <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isDoctor ? 'bg-indigo-400' : 'bg-cyan-400'} animate-pulse`} />
              <span className="text-xs font-semibold text-white">
                {isDoctor ? 'Doctor / Clinician Mode' : 'Patient Safety View'}
              </span>
            </div>
            <button
              onClick={() => navigateTo(isDoctor ? 'patient-dashboard' : 'doctor-dashboard')}
              className="text-[11px] font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors"
            >
              Switch
            </button>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 overflow-y-auto px-4 py-3 space-y-1.5">
          <p className="text-[11px] font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider px-3 mb-2">
            Navigation Menu
          </p>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              currentPage === item.id ||
              (item.id === 'interaction-results' && currentPage === 'detailed-interaction') ||
              (item.id === 'upload-prescription' && currentPage === 'ocr-review');

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-400 font-semibold shadow-sm border border-cyan-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-cyan-400' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        item.badgeColor || 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />}
                </div>
              </button>
            );
          })}
        </nav>

        {/* Quick Safety Summary Widget inside Sidebar */}
        <div className="p-4 mx-4 mb-3 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900 border border-slate-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Safety Index
            </span>
            <span className="text-xs font-bold text-amber-400">72 / 100</span>
          </div>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-amber-400 h-full rounded-full w-[72%]" />
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            1 High-risk interaction requires clinical attention.
          </p>
        </div>

        {/* User Profile & Logout Bottom Footer */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-10 h-10 rounded-xl object-cover border border-slate-700"
              />
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">{currentUser.name}</p>
                <p className="text-[11px] text-slate-400 truncate">{currentUser.email}</p>
              </div>
            </div>

            <button
              onClick={logout}
              title="Log Out"
              className="p-2 rounded-xl text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
