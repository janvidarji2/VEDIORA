/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        universe: {
          void: '#040714',
          deep: '#060B1E',
          surface: '#0A122E',
          card: '#0D173D',
          border: 'rgba(139, 92, 246, 0.22)',
          borderHover: 'rgba(6, 182, 212, 0.45)',
          violet: '#8B5CF6',
          electric: '#7C3AED',
          lavender: '#C4B5FD',
          cyan: '#06B6D4',
          aqua: '#22D3EE',
          mint: '#10B981',
          lightMint: '#6EE7B7',
          amber: '#F59E0B',
          lightAmber: '#FDE68A',
          coral: '#EF4444',
          lightCoral: '#FCA5A5',
          cream: '#FDFBF7',
          ivory: '#F8F7F4',
          muted: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-core': '0 0 80px rgba(139, 92, 246, 0.4), 0 0 35px rgba(6, 182, 212, 0.3)',
        'glow-cyan': '0 0 35px rgba(6, 182, 212, 0.35)',
        'glow-violet': '0 0 35px rgba(139, 92, 246, 0.35)',
        'glow-coral': '0 0 35px rgba(239, 68, 68, 0.4)',
        'glow-mint': '0 0 35px rgba(16, 185, 129, 0.35)',
        'glow-amber': '0 0 35px rgba(245, 158, 11, 0.35)',
        'rich-card': '0 20px 50px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
        'floating-panel': '0 12px 30px -8px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(139, 92, 246, 0.25)',
      },
      animation: {
        'orbit-slow': 'orbitSlow 26s linear infinite',
        'orbit-reverse': 'orbitReverse 32s linear infinite',
        'spin-slow': 'orbitSlow 16s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite',
        'laser-scan-rich': 'laserScanRich 2.4s ease-in-out infinite alternate',
        'breathe': 'breathe 4s ease-in-out infinite',
        'blink': 'blink 3.5s ease-in-out infinite',
        'pop-in': 'popIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'beam-flow': 'beamFlow 2.5s linear infinite',
      },
      keyframes: {
        orbitSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        laserScanRich: {
          '0%': { top: '3%', opacity: '0.7' },
          '100%': { top: '96%', opacity: '0.95' },
        },
        breathe: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-3px) scale(1.015)' },
        },
        blink: {
          '0%, 90%, 100%': { opacity: '1', transform: 'scaleY(1)' },
          '95%': { opacity: '0.2', transform: 'scaleY(0.1)' },
        },
        popIn: {
          '0%': { opacity: '0', transform: 'scale(0.92) translateY(6px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        beamFlow: {
          '0%': { strokeDashoffset: '48' },
          '100%': { strokeDashoffset: '0' },
        }
      }
    },
  },
  plugins: [],
}
