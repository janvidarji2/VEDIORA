import React, { useState } from 'react';
import {
  Menu,
  Search,
  Globe,
  Sun,
  Moon,
  UploadCloud,
  Plus,
  Bell,
  Stethoscope,
  User,
  RotateCcw,
  Palette,
  Sparkles
} from 'lucide-react';
import { useMedication } from '../../context/MedicationContext';

export const Topbar = ({ onMenuClick, onAddMedicineClick }) => {
  const {
    currentUser,
    userPersona,
    loginAs,
    navigateTo,
    language,
    setLanguage,
    theme,
    setTheme,
    changeTheme,
    resetDemo,
    medications,
    addToast
  } = useMedication();

  const [searchQuery, setSearchQuery] = useState('');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);

  const isDoctor = userPersona === 'doctor';

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Search query in medications
    const match = medications.find(m =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (m.genericName && m.genericName.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (match) {
      addToast({
        type: 'info',
        title: 'Medication Found',
        message: `${match.name} (${match.dosage}) prescribed by ${match.prescribedBy}`
      });
      navigateTo('medication-profile');
    } else {
      addToast({
        type: 'info',
        title: 'Searching Knowledge Base',
        message: `Querying pharmacopeia for "${searchQuery}"...`
      });
    }
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'हिन्दी (Hindi)', flag: '🇮🇳' },
    { code: 'gu', label: 'ગુજરાતી (Gujarati)', flag: '🇮🇳' }
  ];

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between h-20 px-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      {/* Left: Mobile Menu Trigger + Greeting */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-label="Toggle Navigation"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
              Good morning, <span className="text-cyan-600 dark:text-cyan-400">{currentUser.name}</span>
            </h2>
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {isDoctor ? <Stethoscope className="w-3 h-3 text-indigo-500" /> : <User className="w-3 h-3 text-cyan-500" />}
              {isDoctor ? 'Cardiologist' : 'Patient ID: PAT-89241'}
            </span>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-200 hidden md:block">
            {isDoctor
              ? 'Multi-specialist clinical decision matrix and active drug-drug surveillance.'
              : 'Unified safety audit across all your prescriptions.'}
          </p>
        </div>
      </div>

      {/* Right: Search, Persona Switcher, Actions, Tools */}
      <div className="flex items-center gap-3">
        {/* Search Input */}
        <form onSubmit={handleSearch} className="relative hidden md:block w-48 lg:w-64">
          <input
            type="text"
            placeholder="Search medicine / drug..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-cyan-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-700 dark:placeholder-slate-200 focus:outline-none transition-all"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
        </form>

        {/* Persona Quick Switcher Pill */}
        <div className="hidden sm:flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
          <button
            onClick={() => loginAs('patient')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              !isDoctor
                ? 'bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-300 shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Patient View
          </button>
          <button
            onClick={() => loginAs('doctor')}
            className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
              isDoctor
                ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-sm'
                : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Doctor View
          </button>
        </div>

        {/* Language Selector */}
        <div className="relative">
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-xs font-medium"
            title="Switch Language"
          >
            <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="uppercase text-xs font-bold">{language}</span>
          </button>

          {showLanguageDropdown && (
            <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 animate-scale-in">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 mb-1">
                Select Language
              </div>
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLanguage(l.code);
                    setShowLanguageDropdown(false);
                    addToast({
                      type: 'info',
                      title: 'Language Updated',
                      message: `Switched language to ${l.label}`
                    });
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                    language === l.code ? 'font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/30' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </span>
                  {language === l.code && <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Theme Palette Switcher Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowThemeDropdown(!showThemeDropdown)}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
            title="Choose Color Theme"
          >
            {theme === 'light' ? (
              <Sun className="w-4 h-4 text-amber-500" />
            ) : theme === 'emerald' ? (
              <Sparkles className="w-4 h-4 text-emerald-400" />
            ) : theme === 'midnight' ? (
              <Moon className="w-4 h-4 text-blue-400" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-400" />
            )}
            <Palette className="w-3.5 h-3.5 text-slate-400 hidden sm:inline" />
          </button>

          {showThemeDropdown && (
            <div className="absolute right-0 mt-2 w-52 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 animate-scale-in">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 border-b border-slate-100 dark:border-slate-800 mb-1 flex items-center justify-between">
                <span>Select Theme</span>
                <span className="text-[9px] font-mono text-cyan-600 dark:text-cyan-400">VEDIORA UI</span>
              </div>

              {[
                { id: 'light', label: 'Light Clinical', desc: 'Snow White & Cyan', swatch: 'bg-white border-slate-300', dot: 'bg-cyan-500' },
                { id: 'dark', label: 'Dark HealthTech', desc: 'Midnight & Neon Cyan', swatch: 'bg-slate-900 border-slate-700', dot: 'bg-cyan-400' },
                { id: 'midnight', label: 'Cyber Midnight', desc: 'Deep Navy & Blue', swatch: 'bg-[#060D1A] border-blue-900', dot: 'bg-blue-500' },
                { id: 'emerald', label: 'Teal & Emerald', desc: 'Mint & Forest Slate', swatch: 'bg-[#071916] border-emerald-800', dot: 'bg-emerald-400' }
              ].map((tPreset) => (
                <button
                  key={tPreset.id}
                  onClick={() => {
                    changeTheme(tPreset.id);
                    setShowThemeDropdown(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors ${
                    theme === tPreset.id
                      ? 'font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-50/50 dark:bg-cyan-950/40'
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded-full border shadow-sm ${tPreset.swatch} flex items-center justify-center`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${tPreset.dot}`} />
                    </div>
                    <div>
                      <p className="font-semibold leading-tight">{tPreset.label}</p>
                      <p className="text-[10px] text-slate-700 dark:text-slate-200">{tPreset.desc}</p>
                    </div>
                  </div>
                  {theme === tPreset.id && <span className="w-2 h-2 rounded-full bg-cyan-500" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Demo Reset Button */}
        <button
          onClick={resetDemo}
          title="Reset Demo Dataset"
          className="p-2 rounded-xl text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors hidden sm:block"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        {/* Primary Action Button */}
        <button
          onClick={() => navigateTo('upload-prescription')}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-md hover:shadow-glow-cyan transition-all"
        >
          <UploadCloud className="w-4 h-4" />
          <span className="hidden sm:inline">Upload Prescription</span>
          <span className="sm:hidden">Upload</span>
        </button>
      </div>
    </header>
  );
};
