import React, { useState } from 'react';
import {
  User,
  Bell,
  Globe,
  Eye,
  Shield,
  LogOut,
  Sparkles,
  CheckCircle2,
  Lock,
  Moon,
  Sun,
  Smartphone,
  Save
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';
import { DisclaimerBanner } from '../components/layout/DisclaimerBanner';

export const SettingsPage = () => {
  const {
    currentUser,
    patient,
    language,
    setLanguage,
    theme,
    setTheme,
    changeTheme,
    logout,
    addToast
  } = useMedication();

  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'notifications' | 'language' | 'accessibility' | 'privacy'

  // Form states
  const [notifications, setNotifications] = useState({
    highRiskEmail: true,
    highRiskSms: true,
    duplicateAlerts: true,
    refillReminders: false,
    weeklySafetySummary: true
  });

  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('medium'); // 'small' | 'medium' | 'large'

  const handleSave = () => {
    addToast({
      type: 'success',
      title: 'Preferences Saved',
      message: 'Your system settings and accessibility preferences have been updated.'
    });
  };

  const tabs = [
    { id: 'profile', label: 'Profile & Demographics', icon: User },
    { id: 'notifications', label: 'Notification Alerts', icon: Bell },
    { id: 'language', label: 'Language & Localization', icon: Globe },
    { id: 'accessibility', label: 'Accessibility & Display', icon: Eye },
    { id: 'privacy', label: 'Privacy & Security', icon: Shield }
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" /> System Preferences
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white font-display">
          Settings & Preferences
        </h1>
        <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">
          Manage your patient account, notification triggers, language options, and accessibility preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        {/* Left Side: Tabs Navigation */}
        <div className="md:col-span-4 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-card space-y-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold transition-all text-left ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-400'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}

          <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out of VEDIORA</span>
            </button>
          </div>
        </div>

        {/* Right Side: Tab Contents */}
        <div className="md:col-span-8 rounded-3xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-card space-y-6">
          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display border-b border-slate-100 dark:border-slate-800 pb-3">
                Patient Demographics & Medical ID
              </h3>

              <div className="flex items-center gap-4">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-500"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{currentUser.name}</h4>
                  <p className="text-xs text-slate-700 dark:text-slate-200 font-mono">Patient ID: {patient.id} • {patient.bloodGroup}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    defaultValue={patient.name}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Primary Email</label>
                  <input
                    type="email"
                    defaultValue={currentUser.email}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Primary Physician</label>
                  <input
                    type="text"
                    defaultValue={patient.primaryPhysician}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1">Emergency Contact</label>
                  <input
                    type="text"
                    defaultValue={patient.emergencyContact}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS TAB */}
          {activeTab === 'notifications' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display border-b border-slate-100 dark:border-slate-800 pb-3">
                Clinical Alert & Notification Settings
              </h3>

              <div className="space-y-4">
                {[
                  { key: 'highRiskEmail', label: 'Immediate High-Risk Interaction Email', desc: 'Alert treating doctors and patient whenever a Level 1A interaction is uploaded.' },
                  { key: 'highRiskSms', label: 'SMS Emergency Push for Bleeding / Severe Risk', desc: 'Instant text message alert for high-risk anticoagulant synergies.' },
                  { key: 'duplicateAlerts', label: 'Duplicate Prescription Notification', desc: 'Warn when multiple doctors prescribe identical chemical entities.' },
                  { key: 'weeklySafetySummary', label: 'Weekly Medication Safety Digest', desc: 'Summary of ongoing medication profile and upcoming dose timing.' }
                ].map((item) => (
                  <label key={item.key} className="flex items-start justify-between gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 cursor-pointer">
                    <div>
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">{item.label}</span>
                      <span className="text-[11px] text-slate-700 dark:text-slate-200">{item.desc}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications[item.key]}
                      onChange={(e) => setNotifications({ ...notifications, [item.key]: e.target.checked })}
                      className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4 mt-1"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* LANGUAGE & LOCALIZATION TAB (Section 17 Requirement) */}
          {activeTab === 'language' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display border-b border-slate-100 dark:border-slate-800 pb-3">
                  Language & Multilingual Support (Section 17)
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-200 mt-1">
                  VEDIORA is engineered with full multi-language capabilities for diverse demographic healthcare needs.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { code: 'en', name: 'English', native: 'English', desc: 'Default Clinical Standard', flag: '🇬🇧' },
                  { code: 'hi', name: 'Hindi', native: 'हिन्दी', desc: 'भारतीय राष्ट्रीय भाषा', flag: '🇮🇳' },
                  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', desc: 'પ્રાદેશિક ભાષા સપોર્ટ', flag: '🇮🇳' }
                ].map((lang) => (
                  <div
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      addToast({ type: 'info', title: 'Language Changed', message: `Interface updated to ${lang.native}` });
                    }}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                      language === lang.code
                        ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-100 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl">{lang.flag}</span>
                      {language === lang.code && <CheckCircle2 className="w-4 h-4 text-cyan-500" />}
                    </div>
                    <h4 className="text-sm font-bold">{lang.name}</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-200 font-semibold">{lang.native}</p>
                    <p className="text-[10px] text-slate-700 dark:text-slate-200 mt-1">{lang.desc}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <span className="font-bold text-slate-900 dark:text-white uppercase text-[10px] tracking-wider block">
                  Current Language Sample Preview:
                </span>
                <p className="italic">
                  {language === 'hi'
                    ? '"VEDIORA एक निर्णय-सहायक प्रणाली है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है।"'
                    : language === 'gu'
                    ? '"VEDIORA એ ક્લિનિકલ નિર્ણય-સહાયક સાધન છે અને વ્યાવસાયિક તબીબી સલાહનું સ્થાન લેતું નથી."'
                    : '"VEDIORA is a decision-support tool and does not replace professional medical advice."'}
                </p>
              </div>
            </div>
          )}

          {/* ACCESSIBILITY TAB */}
          {activeTab === 'accessibility' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display border-b border-slate-100 dark:border-slate-800 pb-3">
                  Visual Theme & Accessibility Customization
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-200 mt-1">
                  Choose your preferred medical visual palette or enable high-contrast accessibility mode.
                </p>
              </div>

              {/* Visual 4-Theme Selection Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    id: 'light',
                    name: 'Light Clinical Clean',
                    desc: 'Crisp medical white background with Navy headers & Cyan accents.',
                    cardBg: 'bg-white border-slate-200 text-slate-900',
                    dot: 'bg-cyan-500',
                    icon: Sun,
                    iconColor: 'text-amber-500'
                  },
                  {
                    id: 'dark',
                    name: 'Dark HealthTech SaaS',
                    desc: 'Stealth Midnight slate with glowing cyan accents and high-visibility alerts.',
                    cardBg: 'bg-slate-900 border-slate-700 text-white',
                    dot: 'bg-cyan-400',
                    icon: Moon,
                    iconColor: 'text-cyan-400'
                  },
                  {
                    id: 'midnight',
                    name: 'Cyber Midnight Navy',
                    desc: 'Deep cosmic navy background with vibrant electric blue highlights.',
                    cardBg: 'bg-[#060D1A] border-blue-900 text-white',
                    dot: 'bg-blue-500',
                    icon: Sparkles,
                    iconColor: 'text-blue-400'
                  },
                  {
                    id: 'emerald',
                    name: 'Teal & Emerald Oasis',
                    desc: 'Organic forest slate background with refreshing mint & sage green tones.',
                    cardBg: 'bg-[#071916] border-emerald-800 text-white',
                    dot: 'bg-emerald-400',
                    icon: Sparkles,
                    iconColor: 'text-emerald-400'
                  }
                ].map((tCard) => {
                  const IconComp = tCard.icon;
                  const isSelected = theme === tCard.id;

                  return (
                    <div
                      key={tCard.id}
                      onClick={() => changeTheme(tCard.id)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-cyan-500 shadow-elevated scale-[1.02]'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-400 opacity-80 hover:opacity-100'
                      } ${tCard.cardBg}`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <IconComp className={`w-4 h-4 ${tCard.iconColor}`} />
                          <h4 className="text-xs font-bold">{tCard.name}</h4>
                        </div>
                        {isSelected ? (
                          <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                        ) : (
                          <div className={`w-3 h-3 rounded-full ${tCard.dot}`} />
                        )}
                      </div>
                      <p className="text-[11px] opacity-80 leading-relaxed">{tCard.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">High Contrast Mode</span>
                    <span className="text-[11px] text-slate-700 dark:text-slate-200">Enhance text borders and severity badges for visual accessibility</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={highContrast}
                    onChange={(e) => setHighContrast(e.target.checked)}
                    className="rounded text-cyan-600 focus:ring-cyan-500 w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}

          {/* PRIVACY & SECURITY TAB */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display border-b border-slate-100 dark:border-slate-800 pb-3">
                Security, Data Sovereignty & Medical Compliance
              </h3>

              <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200">
                  <span className="font-bold block mb-1">✓ End-to-End Encrypted Storage (AES-256)</span>
                  Prescription images and medication OCR extracts are tokenized and protected under HIPAA compliance standards.
                </div>

                <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-900 text-cyan-900 dark:text-cyan-200">
                  <span className="font-bold block mb-1">✓ Strict Decision-Support Isolation</span>
                  VEDIORA does not directly mutate electronic health records or cancel prescriptions without verified physician sign-off.
                </div>
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md hover:shadow-glow-cyan transition-all flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>

      <DisclaimerBanner />
    </div>
  );
};
