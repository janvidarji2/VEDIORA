import React, { useState, useEffect } from 'react';

export const ScrollProgressHUD = () => {
  const [activeSection, setActiveSection] = useState('01');

  const navItems = [
    { id: 'section-universe', num: '01', label: 'UNIVERSE' },
    { id: 'section-convergence', num: '02', label: 'CONVERGE' },
    { id: 'section-origin', num: '03', label: 'ORIGIN' },
    { id: 'section-scan', num: '04', label: 'SCAN' },
    { id: 'section-ai-engine', num: '05', label: 'AI CORE' },
    { id: 'section-map', num: '06', label: 'MAP' },
    { id: 'section-dual-view', num: '07', label: 'REPORTS' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.num);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-3 select-none pointer-events-auto">
      {navItems.map((item) => {
        const isActive = activeSection === item.num;
        return (
          <button
            key={item.num}
            onClick={() => scrollToSection(item.id)}
            className="group flex items-center gap-3 py-1 cursor-pointer transition-all"
          >
            <span
              className={`font-mono text-[10px] tracking-widest transition-all ${
                isActive
                  ? 'text-intel-cyan font-bold opacity-100 translate-x-0'
                  : 'text-intel-muted opacity-0 group-hover:opacity-80 translate-x-2'
              }`}
            >
              {item.label}
            </span>

            <div
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-6 bg-gradient-to-r from-intel-cyan to-intel-violet shadow-cyan-glow'
                  : 'w-1.5 bg-intel-border group-hover:w-3 group-hover:bg-intel-lavender'
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
};
