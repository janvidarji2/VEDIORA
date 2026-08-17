// VEDIORA - Clinical Drug-Drug Interactions & Safety Rules Database

export const MOCK_INTERACTIONS = [
  // 1. HIGH RISK: Warfarin + Aspirin
  {
    id: "int-1",
    severity: "HIGH",
    severityLabel: "High Risk Alert",
    type: "Pharmacodynamic Synergistic Anticoagulation",
    medA: {
      name: "Warfarin",
      dosage: "5 mg",
      category: "Vitamin K Antagonist Anticoagulant",
      prescribedBy: "Dr. Rahul Shah (Cardiology)"
    },
    medB: {
      name: "Aspirin",
      dosage: "75 mg",
      category: "Antiplatelet Agent (Salicylate)",
      prescribedBy: "Dr. Rahul Shah (Cardiology) / Dr. Vikram Mehta (Orthopedics)"
    },
    headline: "Severe Major Bleeding & Hemorrhage Risk",
    patientSummary: "Taking Warfarin (blood thinner) and Aspirin (platelet blocker) together significantly reduces your blood's ability to clot. This combination markedly increases your risk of internal bleeding, severe stomach ulcers, or prolonged bleeding even from minor injuries.",
    patientAction: "Consult your cardiologist or primary doctor before making any medication changes. Do not stop either medicine on your own, as sudden discontinuation can increase stroke risk.",
    patientSignsToWatch: [
      "Unusual bruising or bleeding from gums/nose",
      "Dark, tarry, or bloody stools",
      "Pink or red urine",
      "Persistent unexplained dizziness, weakness or severe headaches"
    ],
    clinicalDetails: {
      mechanism: "Dual hemostatic impairment: Warfarin inhibits Vitamin K epoxide reductase (reducing Factors II, VII, IX, X), while Aspirin causes irreversible COX-1 inhibition preventing Thromboxane A2 (TXA2)-mediated platelet aggregation. Concurrent therapy produces a 3- to 5-fold multiplier in gastrointestinal and intracranial hemorrhage risk without proportional ischemic benefit in stable AFib.",
      severityScore: "Class A / Major Contraindication Warning",
      evidenceLevel: "Level 1A (Multiple Randomized Controlled Trials, FDA Boxed Warning)",
      cypPathway: "Warfarin S-enantiomer metabolized primarily via CYP2C9; Aspirin binds albumin and non-selectively acetylates platelets.",
      sources: [
        { title: "CHEST Guideline: Antithrombotic Therapy in AFib & CAD", source: "American College of Chest Physicians (ACCP)", year: "2024", id: "PMID: 34182451" },
        { title: "FDA Safety Alert: Concomitant Anticoagulants and NSAIDs/Salicylates", source: "US Food & Drug Administration", year: "2023", id: "FDA-2023-W-019" },
        { title: "British National Formulary (BNF 86): Warfarin + Antiplatelet Interactions", source: "BMJ Group & Royal Pharmaceutical Society", year: "2025", id: "BNF-86-SEC-2.8.2" }
      ],
      clinicalRecommendation: "Re-evaluate necessity of dual antithrombotic therapy. If indication is stable AFib + remote CAD (>1 yr post-PCI), guidelines recommend discontinuing Aspirin and maintaining oral anticoagulation monotherapy. If combination is strictly required, ensure PPI co-prescription (e.g., Pantoprazole) and strict INR monitoring (target 2.0-2.5)."
    }
  },

  // 2. MODERATE RISK: Warfarin + Celecoxib
  {
    id: "int-2",
    severity: "MODERATE",
    severityLabel: "Moderate Risk Warning",
    type: "Pharmacokinetic & Pharmacodynamic Interaction",
    medA: {
      name: "Warfarin",
      dosage: "5 mg",
      category: "Anticoagulant",
      prescribedBy: "Dr. Rahul Shah (Cardiology)"
    },
    medB: {
      name: "Celecoxib",
      dosage: "200 mg",
      category: "Selective COX-2 NSAID",
      prescribedBy: "Dr. Vikram Mehta (Orthopedics)"
    },
    headline: "Enhanced Anticoagulant Effect & Gastric Mucosal Risk",
    patientSummary: "Celecoxib can slow down how your liver removes Warfarin from your system, causing your blood to become thinner than expected. Additionally, anti-inflammatory pain medications can irritate the stomach lining.",
    patientAction: "Speak to your doctor or pharmacist about safer pain relief alternatives (such as topical therapies or acetaminophen) that don't interfere with your blood thinner.",
    patientSignsToWatch: [
      "Stomach burning or indigestion",
      "Bleeding that takes longer than usual to stop",
      "Blood in stool or vomit"
    ],
    clinicalDetails: {
      mechanism: "Celecoxib moderately inhibits CYP2C9, the primary metabolic enzyme for the active (S)-warfarin enantiomer. This leads to elevated plasma S-warfarin concentrations, prolonged prothrombin time (PT), elevated INR, and synergistic GI mucosal vulnerability.",
      severityScore: "Class B / Moderate Significant Interaction",
      evidenceLevel: "Level 1B (Pharmacokinetic studies & Cohort Trials)",
      cypPathway: "CYP2C9 competitive substrate / weak-moderate inhibitor.",
      sources: [
        { title: "Metabolic Interactions of NSAIDs and Warfarin", source: "Journal of Clinical Pharmacology", year: "2023", id: "PMID: 31892102" },
        { title: "AHA Scientific Statement on NSAID Use in Cardiovascular Disease", source: "Circulation", year: "2024", id: "PMID: 35012480" }
      ],
      clinicalRecommendation: "Avoid systemic NSAIDs if feasible. If required for acute flare-up, monitor INR closely within 3-5 days of initiation, use the lowest effective dose for shortest duration, and maintain PPI gastroprotection."
    }
  },

  // 3. MODERATE RISK: Metformin + Glimepiride
  {
    id: "int-3",
    severity: "MODERATE",
    severityLabel: "Moderate Risk Warning",
    type: "Pharmacodynamic Synergistic Hypoglycemia",
    medA: {
      name: "Metformin",
      dosage: "1000 mg",
      category: "Biguanide Antidiabetic",
      prescribedBy: "Dr. Sneha Patel (Endocrinology)"
    },
    medB: {
      name: "Glimepiride",
      dosage: "2 mg",
      category: "Sulfonylurea Antidiabetic",
      prescribedBy: "Dr. Sneha Patel (Endocrinology)"
    },
    headline: "Increased Risk of Low Blood Sugar (Hypoglycemia)",
    patientSummary: "Both medicines work together to lower your blood sugar. While this is often prescribed intentionally for diabetes control, combining a sulfonylurea (Glimepiride) with Metformin increases the chance of blood sugar dropping too low, especially if you skip meals or exercise heavily.",
    patientAction: "Always carry fast-acting glucose tablets or fruit juice. Keep a regular meal schedule and monitor your blood sugar as advised by your endocrinologist.",
    patientSignsToWatch: [
      "Shakiness, trembling, or sudden sweating",
      "Fast heartbeat or palpitations",
      "Confusion, mood changes, or lightheadedness",
      "Sudden intense hunger"
    ],
    clinicalDetails: {
      mechanism: "Glimepiride stimulates pancreatic beta-cell insulin secretion by closing ATP-sensitive K+ channels, while Metformin decreases hepatic gluconeogenesis and enhances peripheral insulin sensitivity. The secretagogue action of Glimepiride carries intrinsic hypoglycemia risk amplified in elderly patients (age >65) or during caloric restriction.",
      severityScore: "Class C / Synergistic Therapy with Monitoring",
      evidenceLevel: "Level 1A (ADA / EASD Clinical Practice Guidelines)",
      cypPathway: "Glimepiride CYP2C9 substrate; Metformin cleared renally via OCT1/OCT2 transporters.",
      sources: [
        { title: "Standards of Medical Care in Diabetes - 2026", source: "American Diabetes Association (ADA)", year: "2026", id: "ADA-CARE-2026-S9" },
        { title: "Sulfonylurea-Associated Hypoglycemia in Older Adults", source: "The Lancet Diabetes & Endocrinology", year: "2023", id: "PMID: 32014589" }
      ],
      clinicalRecommendation: "Confirm patient adheres to structured meals. In a 68-year-old with multiple comorbidities, consider modern guideline recommendations to de-escalate Glimepiride in favor of SGLT2i / GLP-1 RA or DPP-4i monotherapy to minimize hypoglycemia hazards."
    }
  },

  // 4. LOW RISK: Calcium Carbonate + Levothyroxine
  {
    id: "int-4",
    severity: "LOW",
    severityLabel: "Low Risk Advisory",
    type: "Pharmacokinetic Chelation & Absorption Reduction",
    medA: {
      name: "Levothyroxine",
      dosage: "50 mcg",
      category: "Thyroid Hormone Replacement",
      prescribedBy: "Dr. Amit Verma (General Practice)"
    },
    medB: {
      name: "Calcium + Vit D3",
      dosage: "500 mg",
      category: "Mineral Supplement",
      prescribedBy: "Dr. Vikram Mehta (Orthopedics)"
    },
    headline: "Reduced Thyroid Hormone Absorption",
    patientSummary: "Calcium supplements can bind to thyroid hormone medicine in your stomach, preventing your body from absorbing the full thyroid dose. This can make your thyroid medicine less effective over time.",
    patientAction: "Take your Levothyroxine first thing in the morning on an empty stomach with a full glass of water, and wait at least 4 hours before taking your Calcium supplement (after lunch or dinner).",
    patientSignsToWatch: [
      "Sluggishness, unexplained fatigue, or feeling unusually cold",
      "Dry skin or sudden unexpected weight gain (signs of low thyroid)"
    ],
    clinicalDetails: {
      mechanism: "Insoluble chelate complex formation: Divalent calcium cations (Ca2+) bind levothyroxine in the gastrointestinal tract, significantly decreasing intestinal absorption (AUC reduced by 20-30%) and leading to elevated serum TSH levels.",
      severityScore: "Class D / Minor Spacing Interaction",
      evidenceLevel: "Level 1B (Prospective Cross-Over Pharmacokinetic Studies)",
      cypPathway: "Physical gastrointestinal binding (no hepatic enzyme involvement).",
      sources: [
        { title: "ATA Guidelines for the Treatment of Hypothyroidism", source: "American Thyroid Association", year: "2024", id: "PMID: 25232774" }
      ],
      clinicalRecommendation: "Advise patient to maintain a strict minimum 4-hour temporal separation between Levothyroxine (fasting AM) and Calcium carbonate (post-lunch or evening)."
    }
  }
];

// DUPLICATE MEDICINES DETECTED ACROSS SPECIALISTS
export const MOCK_DUPLICATES = [
  {
    id: "dup-1",
    activeIngredient: "Acetylsalicylic Acid (Aspirin)",
    severity: "HIGH",
    headline: "Duplicate Active Ingredient Prescribed by Two Different Doctors",
    prescriptions: [
      {
        doctor: "Dr. Rahul Shah (Cardiologist)",
        hospital: "Metro Heart & Vascular Institute",
        tradeName: "Ecosprin 75",
        dosage: "75 mg",
        frequency: "Once daily (Morning)",
        rxDate: "2026-08-02",
        indication: "Cardiovascular secondary prophylaxis"
      },
      {
        doctor: "Dr. Vikram Mehta (Orthopedic Specialist)",
        hospital: "Sunrise Orthopedic & Sports Medicine",
        tradeName: "Disprin Protect 75",
        dosage: "75 mg",
        frequency: "Once daily (Morning)",
        rxDate: "2026-08-10",
        indication: "Post-arthroscopy thromboprophylaxis"
      }
    ],
    explanation: "You have been prescribed Aspirin twice under two different brand names (Ecosprin and Disprin) by your Cardiologist and Orthopedic doctor. Taking both would double your daily Aspirin intake to 150 mg, drastically increasing your bleeding risk without added medical benefit.",
    action: "Do not stop any medicine abruptly. Contact Dr. Shah and Dr. Mehta to confirm your single target daily dose."
  }
];

// STATS SUMMARY
export const MOCK_SAFETY_STATS = {
  totalMedicines: 12,
  combinationsChecked: 66,
  activeInteractions: 4,
  duplicateMedicines: 2,
  highRiskAlerts: 1,
  moderateAlerts: 2,
  lowAlerts: 1,
  safeCombinations: 60,
  safetyScore: 72,
  safetyScoreStatus: "Needs Attention",
  safetyScoreBreakdown: [
    { label: "Drug-Drug Synergy Risk", deduction: -15, color: "text-red-500" },
    { label: "Cross-Prescription Duplication", deduction: -10, color: "text-red-500" },
    { label: "Metabolic / Absorption Lag", deduction: -3, color: "text-amber-500" },
    { label: "Optimal Renal/Hepatic Dosing", bonus: +10, color: "text-emerald-500" }
  ]
};
