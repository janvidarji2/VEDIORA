// VEDIORA - Mock Patient Database for Clinician Dashboard & Multilingual Localization

export const MOCK_PATIENT_LIST = [
  {
    id: "PAT-89241",
    name: "John Doe",
    age: 68,
    gender: "Male",
    medicinesCount: 12,
    prescriptionsCount: 4,
    interactionsCount: 4,
    highRiskCount: 1,
    safetyScore: 72,
    riskLevel: "HIGH",
    primaryCondition: "AFib, T2DM, HTN, Osteoarthritis",
    lastAnalysis: "Today, 10:42 AM",
    status: "Needs Clinical Review",
    assignedPhysician: "Dr. Rahul Shah / Dr. Amit Verma"
  },
  {
    id: "PAT-77312",
    name: "Eleanor Vance",
    age: 74,
    gender: "Female",
    medicinesCount: 9,
    prescriptionsCount: 3,
    interactionsCount: 3,
    highRiskCount: 1,
    safetyScore: 68,
    riskLevel: "HIGH",
    primaryCondition: "Heart Failure, CKD Stage 3, Osteoporosis",
    lastAnalysis: "Yesterday, 3:15 PM",
    status: "Flagged: Hyperkalemia Risk",
    assignedPhysician: "Dr. Rahul Shah"
  },
  {
    id: "PAT-64019",
    name: "Marcus Sterling",
    age: 61,
    gender: "Male",
    medicinesCount: 7,
    prescriptionsCount: 2,
    interactionsCount: 2,
    highRiskCount: 0,
    safetyScore: 84,
    riskLevel: "MODERATE",
    primaryCondition: "Type 2 Diabetes, Dyslipidemia",
    lastAnalysis: "14 Aug 2026",
    status: "Stable on Metformin + Statin",
    assignedPhysician: "Dr. Sneha Patel"
  },
  {
    id: "PAT-51820",
    name: "Priya Sharma",
    age: 52,
    gender: "Female",
    medicinesCount: 5,
    prescriptionsCount: 2,
    interactionsCount: 1,
    highRiskCount: 0,
    safetyScore: 91,
    riskLevel: "LOW",
    primaryCondition: "Hypothyroidism, Migraine Prophylaxis",
    lastAnalysis: "12 Aug 2026",
    status: "Routine Monitoring",
    assignedPhysician: "Dr. Amit Verma"
  },
  {
    id: "PAT-43901",
    name: "Robert Chen",
    age: 79,
    gender: "Male",
    medicinesCount: 14,
    prescriptionsCount: 5,
    interactionsCount: 5,
    highRiskCount: 2,
    safetyScore: 58,
    riskLevel: "HIGH",
    primaryCondition: "Post-CABG, COPD, BPH, CKD",
    lastAnalysis: "11 Aug 2026",
    status: "Urgent Review Scheduled",
    assignedPhysician: "Dr. Rahul Shah"
  }
];

export const MOCK_HISTORY_TIMELINE = [
  {
    id: "hist-1",
    date: "16 Aug 2026",
    time: "10:42 AM",
    type: "ANALYSIS_RUN",
    title: "AI Polypharmacy Safety Analysis Executed",
    description: "Evaluated 12 active medications across 4 prescriptions. Flagged 1 High Risk (Warfarin + Aspirin) and 1 Duplicate active ingredient.",
    author: "VEDIORA AI Core Engine v2.4",
    badge: "AI Analysis",
    severity: "HIGH"
  },
  {
    id: "hist-2",
    date: "10 Aug 2026",
    time: "02:15 PM",
    type: "RX_UPLOAD",
    title: "Orthopedic Prescription Uploaded & OCR Scanned",
    description: "Prescription from Dr. Vikram Mehta (Sunrise Orthopedics) added 3 medicines: Celecoxib 200mg, Calcium 500mg, Disprin 75mg.",
    author: "John Doe (Patient Upload)",
    badge: "Prescription Added",
    severity: "INFO"
  },
  {
    id: "hist-3",
    date: "02 Aug 2026",
    time: "11:30 AM",
    type: "RX_UPLOAD",
    title: "Cardiology Prescription Uploaded",
    description: "Prescription from Dr. Rahul Shah (Metro Heart) added: Warfarin 5mg, Ecosprin 75mg, Lipitor 20mg.",
    author: "John Doe (Patient Upload)",
    badge: "Prescription Added",
    severity: "INFO"
  },
  {
    id: "hist-4",
    date: "20 Jul 2026",
    time: "04:00 PM",
    type: "DOCTOR_REVIEW",
    title: "Endocrinology Visit & Prescription Verified",
    description: "Dr. Sneha Patel renewed Metformin XR 1000mg, Glimepiride 2mg, Januvia 100mg with fasting glucose target <130 mg/dL.",
    author: "Dr. Sneha Patel",
    badge: "Doctor Verified",
    severity: "SUCCESS"
  },
  {
    id: "hist-5",
    date: "15 Jun 2026",
    time: "09:15 AM",
    type: "REPORT_EXPORT",
    title: "Clinical Safety Summary Exported to PDF",
    description: "Comprehensive interaction report shared with Dr. Amit Verma (City Care Family Practice).",
    author: "System Audit",
    badge: "Report Shared",
    severity: "INFO"
  }
];

export const TRANSLATIONS = {
  en: {
    appName: "VEDIORA",
    tagline: "AI-Powered Medication Safety System",
    heroTitle: "AI-Powered Medication Safety",
    heroSubtitle: "Bring every prescription together. Detect hidden medication risks before they become a problem.",
    checkMedicines: "Check My Medicines",
    seeHowItWorks: "See How It Works",
    safetyScore: "Medication Safety Score",
    needsAttention: "Needs Attention",
    totalMedicines: "Total Medicines",
    activePrescriptions: "Active Prescriptions",
    interactionsFound: "Interactions Found",
    highRiskAlerts: "High Risk Alerts",
    disclaimer: "VEDIORA is a clinical decision-support tool and does not replace professional medical advice.",
    consultDoctor: "Consult your doctor or pharmacist before making any medication changes."
  },
  hi: {
    appName: "VEDIORA",
    tagline: "एआई-संचालित दवा सुरक्षा प्रणाली",
    heroTitle: "एआई-संचालित दवा सुरक्षा",
    heroSubtitle: "हर डॉक्टर के पर्चे को एक साथ लाएं। छिपे हुए दवा के खतरों को पहले ही पहचानें।",
    checkMedicines: "मेरी दवाओं की जांच करें",
    seeHowItWorks: "देखें यह कैसे काम करता है",
    safetyScore: "दवा सुरक्षा स्कोर",
    needsAttention: "ध्यान देने की आवश्यकता है",
    totalMedicines: "कुल दवाएं",
    activePrescriptions: "सक्रिय नुस्खे",
    interactionsFound: "इंटरैक्शन पाए गए",
    highRiskAlerts: "उच्च जोखिम वाले अलर्ट",
    disclaimer: "VEDIORA एक निर्णय-सहायक प्रणाली है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है।",
    consultDoctor: "दवा में कोई भी बदलाव करने से पहले अपने डॉक्टर या फार्मासिस्ट से परामर्श लें।"
  },
  gu: {
    appName: "VEDIORA",
    tagline: "AI-સંચાલિત દવા સુરક્ષા સિસ્ટમ",
    heroTitle: "AI-સંચાલિત દવા સુરક્ષા",
    heroSubtitle: "દરેક પ્રિસ્ક્રિપ્શનને એક સાથે લાવો. ગંભીર દવાઓની આડઅસરોને સમયસર ઓળખો.",
    checkMedicines: "મારી દવાઓ તપાસો",
    seeHowItWorks: "તે કેવી રીતે કાર્ય કરે છે તે જુઓ",
    safetyScore: "દવા સુરક્ષા સ્કોર",
    needsAttention: "ધ્યાન આપવાની જરૂર છે",
    totalMedicines: "કુલ દવાઓ",
    activePrescriptions: "સક્રિય પ્રિસ્ક્રિપ્શન્સ",
    interactionsFound: "શોધાયેલી ક્રિયાપ્રતિક્રિયાઓ",
    highRiskAlerts: "ઉચ્ચ જોખમ ચેતવણીઓ",
    disclaimer: "VEDIORA એ ક્લિનિકલ નિર્ણય-સહાયક સાધન છે અને વ્યાવસાયિક તબીબી સલાહનું સ્થાન લેતું નથી.",
    consultDoctor: "દવામાં કોઈપણ ફેરફાર કરતા પહેલા હંમેશા તમારા ડોક્ટર અથવા ફાર્માસિસ્ટની સલાહ લો."
  }
};
