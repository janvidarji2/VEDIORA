import React, { useState } from 'react';
import {
  ShieldCheck,
  Stethoscope,
  User,
  ArrowRight,
  Lock,
  Mail,
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useMedication } from '../context/MedicationContext';

export const AuthPage = () => {
  const { loginAs, navigateTo } = useMedication();

  const [role, setRole] = useState('patient'); // 'patient' | 'doctor'
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
    if (newRole === 'patient') {
      setEmail('john.doe@example.com');
    } else {
      setEmail('dr.shah@metrocardio.org');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAs(role);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-stretch">
      {/* LEFT SIDE: Medical / AI Visual & Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 text-white p-12 flex-col justify-between relative overflow-hidden">
        {/* Background Gradients & Graphic Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-500/20 via-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Top Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer relative z-10"
          onClick={() => navigateTo('landing')}
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-glow-cyan">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-white font-display">
                VEDIORA
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                AI HEALTH
              </span>
            </div>
            <p className="text-xs text-slate-400">AI Medication Safety System</p>
          </div>
        </div>

        {/* Center: Visual Card & Highlights */}
        <div className="relative z-10 space-y-8 my-auto max-w-lg">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Polypharmacy Risk Guard
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
              Bring every prescription together. Protect every patient.
            </h2>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed">
              Detect cross-doctor drug interactions, avoid accidental duplications, and get evidence-based clinical risk reports in seconds.
            </p>
          </div>

          {/* Mini Interactive Preview Card */}
          <div className="rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-700/80 p-5 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-300">Live Clinical Check</span>
              <span className="text-[11px] font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded-md border border-red-800/60">
                High Risk Alert
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="text-cyan-400">Warfarin (5mg)</span>
              <span>+</span>
              <span className="text-amber-400">Aspirin (75mg)</span>
            </div>
            <p className="text-xs text-slate-400">
              Synergistic anticoagulation hazard detected across Cardiology & Orthopedic prescriptions.
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full compliance with Clinical Pharmacopeia & FDA safety guidelines</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Physician-in-the-loop decision support workflow</span>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="relative z-10 text-[11px] text-slate-700 dark:text-slate-200">
          VEDIORA is a decision-support tool and does not replace professional medical advice.
        </div>
      </div>

      {/* RIGHT SIDE: Authentication Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo View */}
          <div className="lg:hidden flex items-center gap-3 mb-6" onClick={() => navigateTo('landing')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white font-display">
                VEDIORA
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-200">AI Medication Safety</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
              {isSignUp ? 'Create your VEDIORA account' : 'Welcome back'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 mt-1">
              Select your role to access your personalized medication safety portal.
            </p>
          </div>

          {/* Quick Demo Autofill Banner */}
          <div className="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-cyan-900 dark:text-cyan-200 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Hackathon Demo 1-Click Login
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => loginAs('patient')}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-cyan-200 dark:border-cyan-700 hover:border-cyan-500 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-600 transition-all flex flex-col items-center gap-1 text-center shadow-sm"
              >
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-semibold">Demo Patient</span>
                <span>John Doe (12 Meds)</span>
              </button>

              <button
                type="button"
                onClick={() => loginAs('doctor')}
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-700 hover:border-indigo-500 text-xs font-bold text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition-all flex flex-col items-center gap-1 text-center shadow-sm"
              >
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 uppercase tracking-wider font-semibold">Demo Physician</span>
                <span>Dr. Rahul Shah, MD</span>
              </button>
            </div>
          </div>

          {/* Role Selection Tabs */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 block mb-2">
              Select Role
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleRoleChange('patient')}
                className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all ${
                  role === 'patient'
                    ? 'border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/40 text-cyan-900 dark:text-cyan-200 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-xl ${role === 'patient' ? 'bg-cyan-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                  <User className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold">Patient</p>
                  <p className="text-[11px] text-slate-700 dark:text-slate-200">Safety & Prescriptions</p>
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange('doctor')}
                className={`p-3.5 rounded-2xl border flex items-center gap-3 transition-all ${
                  role === 'doctor'
                    ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 shadow-sm'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-xl ${role === 'doctor' ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                  <Stethoscope className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold">Doctor</p>
                  <p className="text-[11px] text-slate-700 dark:text-slate-200">Clinical Dashboard</p>
                </div>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="name@example.com"
                />
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="••••••••••••"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 dark:text-slate-400">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-cyan-600 focus:ring-cyan-500"
                />
                <span>Remember me</span>
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Demo password reset instructions simulated."); }} className="font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-md hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
            >
              <span>{isSignUp ? 'Create Account' : 'Sign In to Portal'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Toggle Sign up / Login */}
          <div className="text-center text-xs text-slate-700 dark:text-slate-200">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  Sign In
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  Create account
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
