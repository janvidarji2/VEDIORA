import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_PATIENT, INITIAL_MEDICATIONS, SAMPLE_PRESCRIPTIONS } from '../data/mockMedications';
import { MOCK_INTERACTIONS, MOCK_DUPLICATES, MOCK_SAFETY_STATS } from '../data/mockInteractions';
import { MOCK_PATIENT_LIST, MOCK_HISTORY_TIMELINE, TRANSLATIONS } from '../data/mockPatients';

const MedicationContext = createContext();

export const MedicationProvider = ({ children }) => {
  // Navigation & User Session
  const [currentPage, setCurrentPage] = useState('landing');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPersona, setUserPersona] = useState('patient'); // 'patient' | 'doctor'
  const [currentUser, setCurrentUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    role: "patient",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  });

  // Clinical Patient State
  const [patient, setPatient] = useState(INITIAL_PATIENT);
  const [medications, setMedications] = useState(INITIAL_MEDICATIONS);
  const [interactions, setInteractions] = useState(MOCK_INTERACTIONS);
  const [duplicates, setDuplicates] = useState(MOCK_DUPLICATES);
  const [safetyStats, setSafetyStats] = useState(MOCK_SAFETY_STATS);
  const [history, setHistory] = useState(MOCK_HISTORY_TIMELINE);
  const [patientsList, setPatientsList] = useState(MOCK_PATIENT_LIST);

  // Active Selected Detail
  const [selectedInteractionId, setSelectedInteractionId] = useState("int-1");

  // Prescription Upload & OCR State
  const [uploadedFile, setUploadedFile] = useState(null);
  const [ocrStage, setOcrStage] = useState('idle'); // 'idle' | 'processing' | 'completed'
  const [extractedMedicines, setExtractedMedicines] = useState([]);
  const [activePrescriptionSample, setActivePrescriptionSample] = useState(null);

  // App Settings & Preferences
  const [language, setLanguage] = useState(localStorage.getItem('vediora_lang') || 'en');
  const [theme, setTheme] = useState(localStorage.getItem('vediora_theme') || 'light'); // 'light' | 'dark' | 'midnight' | 'emerald'
  const [toasts, setToasts] = useState([]);

  // Apply theme classes and attributes to document
  useEffect(() => {
    localStorage.setItem('vediora_theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-slate-50 text-slate-900 antialiased selection:bg-cyan-500 selection:text-white min-h-screen';
    } else if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-white min-h-screen';
    } else if (theme === 'midnight') {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#060D1A] text-slate-100 antialiased selection:bg-blue-500 selection:text-white min-h-screen';
    } else if (theme === 'emerald') {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#071916] text-slate-100 antialiased selection:bg-emerald-500 selection:text-white min-h-screen';
    }
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    const themeLabels = {
      light: 'Light Clinical Clean',
      dark: 'Dark HealthTech',
      midnight: 'Cyber Midnight Navy',
      emerald: 'Teal & Emerald Oasis'
    };
    addToast({
      type: 'info',
      title: 'Theme Updated',
      message: `Switched theme to ${themeLabels[newTheme] || newTheme}`
    });
  };

  // Recalculate stats dynamically when medications change
  useEffect(() => {
    const total = medications.length;
    const combCount = total > 1 ? Math.round((total * (total - 1)) / 2) : 0;
    
    // Check for duplicates
    const namesCount = {};
    let dupCount = 0;
    medications.forEach(m => {
      const cleanName = m.genericName ? m.genericName.toLowerCase() : m.name.toLowerCase();
      if (cleanName.includes('aspirin') || cleanName.includes('acetylsalicylic')) {
        namesCount['aspirin'] = (namesCount['aspirin'] || 0) + 1;
      } else {
        namesCount[cleanName] = (namesCount[cleanName] || 0) + 1;
      }
    });

    Object.values(namesCount).forEach(count => {
      if (count > 1) dupCount += count;
    });

    const highCount = interactions.filter(i => i.severity === 'HIGH').length;
    const modCount = interactions.filter(i => i.severity === 'MODERATE').length;
    const lowCount = interactions.filter(i => i.severity === 'LOW').length;

    // Compute dynamic safety score
    let score = 100;
    score -= highCount * 18;
    score -= modCount * 8;
    score -= lowCount * 2;
    if (dupCount > 0) score -= 10;
    score = Math.max(15, Math.min(100, score));

    let scoreStatus = "Optimal Safety";
    if (score < 60) scoreStatus = "Critical Attention Required";
    else if (score < 80) scoreStatus = "Needs Attention";
    else if (score < 90) scoreStatus = "Good (Minor Precautions)";

    setSafetyStats({
      totalMedicines: total,
      combinationsChecked: combCount,
      activeInteractions: interactions.length,
      duplicateMedicines: dupCount > 0 ? 2 : 0,
      highRiskAlerts: highCount,
      moderateAlerts: modCount,
      lowAlerts: lowCount,
      safeCombinations: Math.max(0, combCount - interactions.length),
      safetyScore: score,
      safetyScoreStatus: scoreStatus,
      safetyScoreBreakdown: [
        { label: "High Risk Synergies", deduction: highCount > 0 ? -18 * highCount : 0, color: "text-red-500" },
        { label: "Cross-Rx Duplication", deduction: dupCount > 0 ? -10 : 0, color: "text-red-500" },
        { label: "Metabolic / Absorption Lag", deduction: modCount > 0 ? -8 * modCount : 0, color: "text-amber-500" },
        { label: "Renal / Hepatic Profile Base", bonus: +10, color: "text-emerald-500" }
      ]
    });
  }, [medications, interactions]);

  // Toast Helper
  const addToast = ({ type = 'info', title, message, duration = 4500 }) => {
    const id = Date.now() + Math.random().toString(36).substr(2, 4);
    const newToast = { id, type, title, message };
    setToasts(prev => [...prev, newToast]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Navigation Helper
  const navigateTo = (page, params = {}) => {
    if (params.interactionId) {
      setSelectedInteractionId(params.interactionId);
    }
    // If not logged in and navigating to an internal app page, auto-login as patient for seamless demo
    if (!isLoggedIn && page !== 'landing' && page !== 'login') {
      setIsLoggedIn(true);
      setUserPersona('patient');
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auth & Persona Handlers
  const loginAs = (role) => {
    setIsLoggedIn(true);
    setUserPersona(role);
    if (role === 'patient') {
      setCurrentUser({
        name: "John Doe",
        email: "john.doe@example.com",
        role: "patient",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
      });
      navigateTo('patient-dashboard');
      addToast({
        type: 'success',
        title: 'Signed in as Patient',
        message: 'Welcome back, John! 12 active medicines loaded.'
      });
    } else {
      setCurrentUser({
        name: "Dr. Rahul Shah, MD DM",
        email: "dr.shah@metrocardio.org",
        role: "doctor",
        avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80"
      });
      navigateTo('doctor-dashboard');
      addToast({
        type: 'success',
        title: 'Signed in as Physician',
        message: 'Clinical dashboard loaded. 24 patients under monitoring.'
      });
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigateTo('landing');
    addToast({
      type: 'info',
      title: 'Logged Out',
      message: 'You have been securely signed out of VEDIORA.'
    });
  };

  // Select patient for clinician view
  const selectPatient = (patientObj) => {
    setPatient({
      ...INITIAL_PATIENT,
      id: patientObj.id,
      name: patientObj.name,
      age: patientObj.age,
      gender: patientObj.gender,
      conditions: patientObj.primaryCondition ? patientObj.primaryCondition.split(', ') : INITIAL_PATIENT.conditions
    });
  };

  // Medication Mutations
  const addMedication = (newMed) => {
    const medId = `med-${Date.now()}`;
    const formatted = {
      id: medId,
      name: newMed.name,
      genericName: newMed.genericName || newMed.name,
      brandName: newMed.brandName || newMed.name,
      dosage: newMed.dosage || "As advised",
      frequency: newMed.frequency || "Once daily",
      route: "Oral Tablet",
      category: newMed.category || "General Medication",
      specialist: newMed.specialist || "General Physician",
      prescribedBy: newMed.prescribedBy || "Dr. Medical Consultant",
      hospital: "City Health System",
      prescriptionDate: new Date().toISOString().split('T')[0],
      rxNumber: `RX-NEW-${Math.floor(1000 + Math.random() * 9000)}`,
      indication: newMed.indication || "Therapeutic support",
      status: "Active",
      timing: "morning",
      color: "#06b6d4"
    };

    setMedications(prev => [formatted, ...prev]);

    // Log in history
    const historyItem = {
      id: `hist-${Date.now()}`,
      date: "Today",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "MED_ADDED",
      title: `Added Medication: ${formatted.name} (${formatted.dosage})`,
      description: `Prescribed by ${formatted.prescribedBy}. System flagged for cross-prescription validation.`,
      author: currentUser.name,
      badge: "Medicine Added",
      severity: "INFO"
    };
    setHistory(prev => [historyItem, ...prev]);

    addToast({
      type: 'success',
      title: 'Medicine Added',
      message: `${formatted.name} ${formatted.dosage} has been added to your profile.`
    });
  };

  const updateMedication = (id, fields) => {
    setMedications(prev => prev.map(m => m.id === id ? { ...m, ...fields } : m));
    addToast({
      type: 'success',
      title: 'Medicine Updated',
      message: 'Medication record details successfully saved.'
    });
  };

  const removeMedication = (id) => {
    const target = medications.find(m => m.id === id);
    setMedications(prev => prev.filter(m => m.id !== id));
    if (target) {
      addToast({
        type: 'info',
        title: 'Medicine Removed',
        message: `${target.name} was removed from active profile.`
      });
    }
  };

  // Sample Upload Trigger
  const loadSamplePrescription = (sampleId) => {
    const sample = SAMPLE_PRESCRIPTIONS.find(s => s.id === sampleId) || SAMPLE_PRESCRIPTIONS[0];
    setActivePrescriptionSample(sample);
    setUploadedFile({
      name: `${sample.specialty}_Prescription.pdf`,
      size: "2.4 MB",
      type: "application/pdf",
      previewUrl: sample.image,
      sampleData: sample
    });
    setExtractedMedicines(sample.medicinesDetected.map((m, idx) => ({
      id: `draft-${idx}`,
      name: m.name,
      dosage: m.dosage,
      frequency: m.frequency,
      prescribedBy: m.prescriber,
      status: "AI Verified",
      confidence: m.confidence || 98
    })));
  };

  // Merge confirmed extracted medicines into active medication profile
  const commitExtractedMedicines = (confirmedList) => {
    setExtractedMedicines(confirmedList);
    // Add any unique new medicines to profile
    confirmedList.forEach(item => {
      const exists = medications.some(m => m.name.toLowerCase() === item.name.toLowerCase());
      if (!exists) {
        addMedication({
          name: item.name,
          dosage: item.dosage,
          frequency: item.frequency,
          prescribedBy: item.prescribedBy,
          specialist: activePrescriptionSample?.specialty || "General Practice"
        });
      }
    });
  };

  // Reset to full fresh demo state
  const resetDemo = () => {
    setPatient(INITIAL_PATIENT);
    setMedications(INITIAL_MEDICATIONS);
    setInteractions(MOCK_INTERACTIONS);
    setDuplicates(MOCK_DUPLICATES);
    setSafetyStats(MOCK_SAFETY_STATS);
    setHistory(MOCK_HISTORY_TIMELINE);
    setSelectedInteractionId("int-1");
    addToast({
      type: 'info',
      title: 'Demo Data Reset',
      message: '12 active medications and 4 interaction alerts restored.'
    });
  };

  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  const value = {
    currentPage,
    navigateTo,
    isLoggedIn,
    userPersona,
    setUserPersona,
    currentUser,
    loginAs,
    logout,
    patient,
    setPatient,
    selectPatient,
    medications,
    addMedication,
    updateMedication,
    removeMedication,
    interactions,
    duplicates,
    safetyStats,
    selectedInteractionId,
    setSelectedInteractionId,
    uploadedFile,
    setUploadedFile,
    ocrStage,
    setOcrStage,
    extractedMedicines,
    setExtractedMedicines,
    activePrescriptionSample,
    loadSamplePrescription,
    commitExtractedMedicines,
    history,
    patientsList,
    language,
    setLanguage,
    theme,
    setTheme,
    changeTheme,
    toasts,
    addToast,
    removeToast,
    resetDemo,
    t
  };

  return (
    <MedicationContext.Provider value={value}>
      {children}
    </MedicationContext.Provider>
  );
};

export const useMedication = () => {
  const context = useContext(MedicationContext);
  if (!context) {
    throw new Error("useMedication must be used within a MedicationProvider");
  }
  return context;
};
