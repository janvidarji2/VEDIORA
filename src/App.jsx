import React, { useState } from 'react';
import { MedicationProvider, useMedication } from './context/MedicationContext';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { ToastContainer } from './components/common/Toast';

// Pages
import { LandingPage } from './pages/LandingPage';
import { AuthPage } from './pages/AuthPage';
import { PatientDashboard } from './pages/PatientDashboard';
import { UploadPrescription } from './pages/UploadPrescription';
import { OCRReview } from './pages/OCRReview';
import { AISafetyAnalysis } from './pages/AISafetyAnalysis';
import { MedicationProfile } from './pages/MedicationProfile';
import { InteractionResults } from './pages/InteractionResults';
import { DetailedInteraction } from './pages/DetailedInteraction';
import { PatientReport } from './pages/PatientReport';
import { DoctorReport } from './pages/DoctorReport';
import { MedicationHistory } from './pages/MedicationHistory';
import { DoctorDashboard } from './pages/DoctorDashboard';
import { SettingsPage } from './pages/SettingsPage';

function AppContent() {
  const { currentPage, isLoggedIn } = useMedication();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If on landing or auth, render full-screen without sidebar
  if (currentPage === 'landing' || !isLoggedIn && currentPage !== 'login') {
    if (currentPage === 'login') {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
          <AuthPage />
          <ToastContainer />
        </div>
      );
    }
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <LandingPage />
        <ToastContainer />
      </div>
    );
  }

  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <AuthPage />
        <ToastContainer />
      </div>
    );
  }

  // Render main application with persistent sidebar & topbar
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'patient-dashboard':
        return <PatientDashboard />;
      case 'upload-prescription':
        return <UploadPrescription />;
      case 'ocr-review':
        return <OCRReview />;
      case 'ai-analysis':
        return <AISafetyAnalysis />;
      case 'medication-profile':
        return <MedicationProfile />;
      case 'interaction-results':
        return <InteractionResults />;
      case 'detailed-interaction':
        return <DetailedInteraction />;
      case 'patient-report':
        return <PatientReport />;
      case 'doctor-report':
        return <DoctorReport />;
      case 'medication-history':
        return <MedicationHistory />;
      case 'doctor-dashboard':
        return <DoctorDashboard />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <PatientDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex transition-colors">
      {/* Persistent Responsive Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72 transition-all">
        {/* Sticky Topbar */}
        <Topbar onMenuClick={() => setSidebarOpen(true)} />

        {/* Page Content Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {renderCurrentPage()}
        </main>
      </div>

      {/* Reactive Global Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <MedicationProvider>
      <AppContent />
    </MedicationProvider>
  );
}
