💊 VEDIORA

AI-Powered Medication Safety & Prescription Analysis Platform

VEDIORA is a modern web-based medication safety platform designed to help patients and healthcare professionals understand prescriptions, identify potential medication risks, and access clear medication-related insights.

The platform combines prescription processing, OCR-based medicine extraction, AI-assisted safety analysis, medication interaction checking, and patient/doctor reporting into a single interface.

---

🚀 Key Features

📋 Prescription Upload

- Upload prescription documents for analysis.
- Extract medication information from prescription images/documents.
- Review extracted information before analysis.

🔍 OCR Review

- Review medicines detected from uploaded prescriptions.
- Verify and correct extracted medication information.
- Provides an additional validation step before safety analysis.

🤖 AI Safety Analysis

- Analyze medications for potential safety concerns.
- Identify possible medication-related risks.
- Present safety insights in an easy-to-understand format.

💊 Medication Profile

- View detailed information about prescribed medicines.
- Organize medication information in a structured interface.
- Maintain a clearer overview of current medications.

⚠️ Drug Interaction Analysis

- Detect potential interactions between medications.
- Display interaction results.
- Provide detailed information about identified interactions.

📊 Patient Reports

- Generate patient-focused medication reports.
- Present medication and safety information in a simple format.
- Help patients better understand their medication profile.

🩺 Doctor Reports

- Provide a professional medication summary for healthcare professionals.
- Present relevant medication and interaction information.
- Support better review of a patient's medication history.

👨‍⚕️ Doctor Dashboard

- Dedicated dashboard for healthcare professionals.
- Access medication-related information and reports.

📈 Medication History

- Maintain and review previous medication information.
- Helps users track their medication journey.

⚙️ Settings

- Application preferences and user-related configuration.
- Responsive interface with light/dark theme support.

---

🏗️ Application Workflow

                    ┌──────────────────┐
                    │     VEDIORA      │
                    └────────┬─────────┘
                             │
                    ┌────────▼─────────┐
                    │  User / Doctor   │
                    │    Login         │
                    └────────┬─────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
       ┌──────▼──────┐              ┌───────▼───────┐
       │   Patient   │              │     Doctor    │
       │  Dashboard  │              │    Dashboard  │
       └──────┬──────┘              └───────┬───────┘
              │                             │
       ┌──────▼──────────┐                  │
       │ Upload          │                  │
       │ Prescription    │                  │
       └──────┬──────────┘                  │
              │                             │
       ┌──────▼──────────┐                  │
       │   OCR Review    │                  │
       └──────┬──────────┘                  │
              │                             │
       ┌──────▼──────────┐                  │
       │ AI Safety       │                  │
       │ Analysis        │                  │
       └──────┬──────────┘                  │
              │                             │
       ┌──────▼──────────┐                  │
       │ Medication      │                  │
       │ Profile         │                  │
       └──────┬──────────┘                  │
              │                             │
       ┌──────▼──────────┐                  │
       │ Interaction     │                  │
       │ Analysis        │                  │
       └──────┬──────────┘                  │
              │                             │
        ┌─────┴───────────┐                 │
        │                 │                 │
   ┌────▼─────┐     ┌─────▼─────┐           │
   │ Patient  │     │  Doctor   │◄──────────┘
   │  Report  │     │  Report   │
   └──────────┘     └───────────┘

---

🛠️ Tech Stack

Frontend

- React 19
- Vite
- JavaScript / JSX
- Tailwind CSS
- React DOM

UI & Components

- Lucide React – icons
- clsx – conditional class handling
- Canvas Confetti – visual feedback/effects

Development Tools

- Vite – development server and build tool
- Oxlint – code linting
- PostCSS
- Autoprefixer

The repository's current package configuration confirms React, Vite, Tailwind CSS, Lucide React, clsx, Canvas Confetti, and Oxlint dependencies.

---

📁 Project Structure

VEDIORA/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   └── layout/
│   │
│   ├── context/
│   │   └── MedicationContext
│   │
│   ├── data/
│   │
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── AuthPage.jsx
│   │   ├── PatientDashboard.jsx
│   │   ├── DoctorDashboard.jsx
│   │   ├── UploadPrescription.jsx
│   │   ├── OCRReview.jsx
│   │   ├── AISafetyAnalysis.jsx
│   │   ├── MedicationProfile.jsx
│   │   ├── InteractionResults.jsx
│   │   ├── DetailedInteraction.jsx
│   │   ├── PatientReport.jsx
│   │   ├── DoctorReport.jsx
│   │   ├── MedicationHistory.jsx
│   │   └── SettingsPage.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md

The current repository contains dedicated page components for authentication, prescription upload, OCR review, AI safety analysis, medication interactions, patient/doctor reports, dashboards, history, and settings.

---

⚙️ Installation & Setup

1. Clone the Repository

git clone https://github.com/janvidarji2/VEDIORA.git

2. Navigate to the Project

cd VEDIORA

3. Install Dependencies

npm install

4. Start the Development Server

npm run dev

The application will be available at the local URL provided by Vite.

---

🏗️ Build for Production

npm run build

To preview the production build:

npm run preview

---

🧹 Code Quality

Run the project's linter using:

npm run lint

---

🔐 Important Note

VEDIORA is intended as a software prototype / decision-support interface.

Medication information and AI-generated safety insights should not replace professional medical advice. Users should consult a qualified healthcare professional before making decisions about starting, stopping, or changing medication.

---

🎯 Project Objectives

- Simplify prescription understanding.
- Reduce medication-related confusion.
- Provide structured medication information.
- Identify potential medication interactions.
- Improve communication between patients and healthcare professionals.
- Provide patient-friendly and doctor-friendly reports.
- Create a centralized medication safety workflow.

---

🔮 Future Enhancements

- 🔗 Real-time medicine database integration
- 🧠 Advanced AI/ML medication risk prediction
- 📷 Improved prescription OCR accuracy
- 💬 AI medication assistant
- 🔔 Medication reminders and notifications
- 🏥 Electronic Health Record integration
- 📱 Progressive Web App / mobile application
- 🌐 Multilingual medication explanations
- 🔐 Secure cloud-based patient records
- 📊 Advanced analytics for healthcare professionals

---

👩‍💻 Contributors

VEDIORA Development Team

Built as a healthcare technology project focused on improving medication safety and accessibility through modern web technologies and AI-assisted analysis.

---

📜 License

This project is developed for educational and project purposes.

---

⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

Repository:
"VEDIORA on GitHub" (https://reference-url-citation.invalid/4)
