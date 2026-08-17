// VEDIORA - Mock Clinical Medication Dataset
// Polypharmacy patient profile: John Doe (68M, Type 2 Diabetes, Hypertension, Atrial Fibrillation, Osteoarthritis)

export const INITIAL_PATIENT = {
  id: "PAT-89241",
  name: "John Doe",
  age: 68,
  gender: "Male",
  dob: "1958-04-12",
  bloodGroup: "O+",
  weight: "76 kg",
  height: "174 cm",
  allergies: ["Penicillin", "Sulfa drugs"],
  conditions: [
    "Atrial Fibrillation (AFib)",
    "Type 2 Diabetes Mellitus",
    "Essential Hypertension",
    "Bilateral Knee Osteoarthritis",
    "Primary Hypothyroidism"
  ],
  emergencyContact: "Sarah Doe (Daughter) - +1 (555) 234-5678",
  primaryPhysician: "Dr. Amit Verma, MD",
  lastSafetyAudit: "2026-08-16"
};

export const INITIAL_MEDICATIONS = [
  // Prescribed by Cardiologist (Dr. Rahul Shah)
  {
    id: "med-1",
    name: "Warfarin",
    genericName: "Warfarin Sodium",
    brandName: "Coumadin",
    dosage: "5 mg",
    frequency: "Once daily (Evening 6:00 PM)",
    route: "Oral Tablet",
    category: "Anticoagulant / Blood Thinner",
    specialist: "Cardiology",
    prescribedBy: "Dr. Rahul Shah",
    hospital: "Metro Heart & Vascular Institute",
    prescriptionDate: "2026-08-02",
    rxNumber: "RX-CRD-8821",
    indication: "Stroke prevention in non-valvular Atrial Fibrillation",
    status: "Active",
    timing: "evening",
    color: "#ef4444"
  },
  {
    id: "med-2",
    name: "Aspirin",
    genericName: "Acetylsalicylic Acid",
    brandName: "Ecosprin 75",
    dosage: "75 mg",
    frequency: "Once daily (Morning after breakfast)",
    route: "Oral Tablet (Enteric Coated)",
    category: "Antiplatelet Agent",
    specialist: "Cardiology",
    prescribedBy: "Dr. Rahul Shah",
    hospital: "Metro Heart & Vascular Institute",
    prescriptionDate: "2026-08-02",
    rxNumber: "RX-CRD-8821",
    indication: "Secondary coronary vascular protection",
    status: "Active",
    timing: "morning",
    color: "#f59e0b"
  },
  {
    id: "med-3",
    name: "Atorvastatin",
    genericName: "Atorvastatin Calcium",
    brandName: "Lipitor",
    dosage: "20 mg",
    frequency: "Once daily (Night at bedtime)",
    route: "Oral Tablet",
    category: "HMG-CoA Reductase Inhibitor (Statin)",
    specialist: "Cardiology",
    prescribedBy: "Dr. Rahul Shah",
    hospital: "Metro Heart & Vascular Institute",
    prescriptionDate: "2026-08-02",
    rxNumber: "RX-CRD-8821",
    indication: "Hyperlipidemia & atherosclerotic cardiovascular prevention",
    status: "Active",
    timing: "bedtime",
    color: "#06b6d4"
  },

  // Prescribed by Diabetologist / Endocrinologist (Dr. Sneha Patel)
  {
    id: "med-4",
    name: "Metformin",
    genericName: "Metformin Hydrochloride",
    brandName: "Glucophage XR",
    dosage: "1000 mg",
    frequency: "Twice daily (With morning and evening meals)",
    route: "Oral Tablet (Extended Release)",
    category: "Biguanide Antidiabetic",
    specialist: "Endocrinology & Diabetes",
    prescribedBy: "Dr. Sneha Patel",
    hospital: "Apex Diabetes & Endocrine Center",
    prescriptionDate: "2026-07-20",
    rxNumber: "RX-DIA-4512",
    indication: "Type 2 Diabetes Mellitus glycemic control",
    status: "Active",
    timing: "morning_evening",
    color: "#0ea5e9"
  },
  {
    id: "med-5",
    name: "Glimepiride",
    genericName: "Glimepiride",
    brandName: "Amaryl",
    dosage: "2 mg",
    frequency: "Once daily (15 mins before breakfast)",
    route: "Oral Tablet",
    category: "Sulfonylurea Antidiabetic",
    specialist: "Endocrinology & Diabetes",
    prescribedBy: "Dr. Sneha Patel",
    hospital: "Apex Diabetes & Endocrine Center",
    prescriptionDate: "2026-07-20",
    rxNumber: "RX-DIA-4512",
    indication: "Insulin secretagogue for blood glucose control",
    status: "Active",
    timing: "morning",
    color: "#f59e0b"
  },
  {
    id: "med-6",
    name: "Sitagliptin",
    genericName: "Sitagliptin Phosphate",
    brandName: "Januvia",
    dosage: "100 mg",
    frequency: "Once daily (Morning)",
    route: "Oral Tablet",
    category: "DPP-4 Inhibitor",
    specialist: "Endocrinology & Diabetes",
    prescribedBy: "Dr. Sneha Patel",
    hospital: "Apex Diabetes & Endocrine Center",
    prescriptionDate: "2026-07-20",
    rxNumber: "RX-DIA-4512",
    indication: "Postprandial glucose management",
    status: "Active",
    timing: "morning",
    color: "#10b981"
  },

  // Prescribed by General Physician (Dr. Amit Verma)
  {
    id: "med-7",
    name: "Lisinopril",
    genericName: "Lisinopril Dihydrate",
    brandName: "Zestril",
    dosage: "10 mg",
    frequency: "Once daily (Morning 8:00 AM)",
    route: "Oral Tablet",
    category: "ACE Inhibitor",
    specialist: "General Practice",
    prescribedBy: "Dr. Amit Verma",
    hospital: "City Care Family Practice",
    prescriptionDate: "2026-06-15",
    rxNumber: "RX-GP-1092",
    indication: "Essential Hypertension & renal protection",
    status: "Active",
    timing: "morning",
    color: "#6366f1"
  },
  {
    id: "med-8",
    name: "Levothyroxine",
    genericName: "Levothyroxine Sodium",
    brandName: "Synthroid",
    dosage: "50 mcg",
    frequency: "Once daily (Empty stomach 30 mins before breakfast)",
    route: "Oral Tablet",
    category: "Thyroid Hormone Replacement",
    specialist: "General Practice",
    prescribedBy: "Dr. Amit Verma",
    hospital: "City Care Family Practice",
    prescriptionDate: "2026-06-15",
    rxNumber: "RX-GP-1092",
    indication: "Primary Hypothyroidism",
    status: "Active",
    timing: "morning_early",
    color: "#8b5cf6"
  },
  {
    id: "med-9",
    name: "Pantoprazole",
    genericName: "Pantoprazole Sodium",
    brandName: "Protonix",
    dosage: "40 mg",
    frequency: "Once daily (Before breakfast)",
    route: "Oral Delayed-Release Tablet",
    category: "Proton Pump Inhibitor (PPI)",
    specialist: "General Practice",
    prescribedBy: "Dr. Amit Verma",
    hospital: "City Care Family Practice",
    prescriptionDate: "2026-06-15",
    rxNumber: "RX-GP-1092",
    indication: "Gastric mucosal protection against NSAID/antiplatelet irritation",
    status: "Active",
    timing: "morning_early",
    color: "#14b8a6"
  },

  // Prescribed by Orthopedic Specialist (Dr. Vikram Mehta)
  {
    id: "med-10",
    name: "Celecoxib",
    genericName: "Celecoxib",
    brandName: "Celebrex",
    dosage: "200 mg",
    frequency: "Once daily (After meal, as needed for pain flare-ups)",
    route: "Oral Capsule",
    category: "COX-2 Selective NSAID",
    specialist: "Orthopedics & Joint Care",
    prescribedBy: "Dr. Vikram Mehta",
    hospital: "Sunrise Orthopedic & Sports Medicine",
    prescriptionDate: "2026-08-10",
    rxNumber: "RX-ORT-9304",
    indication: "Severe knee osteoarthritis inflammation and pain",
    status: "Active",
    timing: "afternoon",
    color: "#f43f5e"
  },
  {
    id: "med-11",
    name: "Calcium + Vitamin D3",
    genericName: "Calcium Carbonate 500mg + Cholecalciferol 400IU",
    brandName: "Caltrate 600+D",
    dosage: "500 mg / 400 IU",
    frequency: "Once daily (After lunch)",
    route: "Oral Tablet",
    category: "Mineral & Vitamin Supplement",
    specialist: "Orthopedics & Joint Care",
    prescribedBy: "Dr. Vikram Mehta",
    hospital: "Sunrise Orthopedic & Sports Medicine",
    prescriptionDate: "2026-08-10",
    rxNumber: "RX-ORT-9304",
    indication: "Bone density maintenance in degenerative joint disease",
    status: "Active",
    timing: "afternoon",
    color: "#10b981"
  },

  // DUPLICATE PRESCRIPTION (Orthopedic doctor re-prescribed Aspirin under different brand)
  {
    id: "med-12",
    name: "Aspirin (Disprin EC)",
    genericName: "Acetylsalicylic Acid",
    brandName: "Disprin Protect 75",
    dosage: "75 mg",
    frequency: "Once daily (Morning)",
    route: "Oral Tablet",
    category: "Antiplatelet / Salicylate",
    specialist: "Orthopedics & Joint Care",
    prescribedBy: "Dr. Vikram Mehta",
    hospital: "Sunrise Orthopedic & Sports Medicine",
    prescriptionDate: "2026-08-10",
    rxNumber: "RX-ORT-9304",
    indication: "Post-arthroscopy thromboprophylaxis",
    status: "Active - Duplicate Flagged",
    timing: "morning",
    isDuplicate: true,
    duplicateOf: "med-2",
    color: "#ef4444"
  }
];

export const SAMPLE_PRESCRIPTIONS = [
  {
    id: "presc-cardio",
    title: "Cardiology Prescription",
    doctor: "Dr. Rahul Shah, MD DM (Cardiology)",
    specialty: "Cardiology",
    hospital: "Metro Heart & Vascular Institute",
    date: "12 Aug 2026",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    medicinesDetected: [
      { name: "Warfarin Sodium", dosage: "5 mg", frequency: "Once daily (Night)", prescriber: "Dr. Rahul Shah", confidence: 98 },
      { name: "Aspirin (Ecosprin)", dosage: "75 mg", frequency: "Once daily (Morning)", prescriber: "Dr. Rahul Shah", confidence: 99 },
      { name: "Atorvastatin", dosage: "20 mg", frequency: "Once daily (Bedtime)", prescriber: "Dr. Rahul Shah", confidence: 97 }
    ]
  },
  {
    id: "presc-diab",
    title: "Diabetology & Endocrine Rx",
    doctor: "Dr. Sneha Patel, MD (Endocrinology)",
    specialty: "Endocrinology",
    hospital: "Apex Diabetes & Endocrine Center",
    date: "20 Jul 2026",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    medicinesDetected: [
      { name: "Metformin XR", dosage: "1000 mg", frequency: "Twice daily", prescriber: "Dr. Sneha Patel", confidence: 99 },
      { name: "Glimepiride", dosage: "2 mg", frequency: "Once daily", prescriber: "Dr. Sneha Patel", confidence: 96 },
      { name: "Sitagliptin", dosage: "100 mg", frequency: "Once daily", prescriber: "Dr. Sneha Patel", confidence: 95 }
    ]
  },
  {
    id: "presc-ortho",
    title: "Orthopedic & Pain Clinic Rx",
    doctor: "Dr. Vikram Mehta, MS (Orthopedics)",
    specialty: "Orthopedics",
    hospital: "Sunrise Orthopedic & Sports Medicine",
    date: "10 Aug 2026",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=600&q=80",
    medicinesDetected: [
      { name: "Celecoxib", dosage: "200 mg", frequency: "Once daily PRN", prescriber: "Dr. Vikram Mehta", confidence: 97 },
      { name: "Calcium + Vit D3", dosage: "500 mg", frequency: "Once daily", prescriber: "Dr. Vikram Mehta", confidence: 98 },
      { name: "Aspirin (Disprin)", dosage: "75 mg", frequency: "Once daily", prescriber: "Dr. Vikram Mehta", confidence: 99 }
    ]
  },
  {
    id: "presc-gp",
    title: "Primary Care / Family Health Rx",
    doctor: "Dr. Amit Verma, MD (Internal Medicine)",
    specialty: "General Practice",
    hospital: "City Care Family Practice",
    date: "15 Jun 2026",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    medicinesDetected: [
      { name: "Lisinopril", dosage: "10 mg", frequency: "Once daily", prescriber: "Dr. Amit Verma", confidence: 99 },
      { name: "Levothyroxine", dosage: "50 mcg", frequency: "Once daily fasting", prescriber: "Dr. Amit Verma", confidence: 98 },
      { name: "Pantoprazole", dosage: "40 mg", frequency: "Once daily fasting", prescriber: "Dr. Amit Verma", confidence: 99 }
    ]
  }
];
