import React, { useState, useEffect } from 'react';

export const VerticalFeatureHUD = () => {
  const [activeSection, setActiveSection] = useState('01');

  const navItems = [
    { id: 'section-profile', num: '01', label: 'Medication Profile' },
    { id: 'section-scan', num: '02', label: 'Prescription Scan' },
    { id: 'section-ai-safety', num: '03', label: 'AI Safety' },
    { id: 'section-risk', num: '04', label: 'Risk Analysis' },
    { id: 'section-reports', num: '05', label: 'Graphical Reports' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 280;
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

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-4 select-none">
      {navItems.map((item) => {
        const isActive = activeSection === item.num;
        return (
          <button
            key={item.num}
            onClick={() => scrollTo(item.id)}
            className="group flex items-center gap-3 py-1 cursor-pointer transition-all"
          >
            <span
              className={`font-mono text-xs transition-all ${
                isActive
                  ? 'text-minimal-violet font-extrabold opacity-100 translate-x-0'
                  : 'text-minimal-muted opacity-0 group-hover:opacity-80 translate-x-2'
              }`}
            >
              {item.num} · {item.label}
            </span>

            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'w-6 bg-minimal-purple shadow-sm'
                  : 'w-2 bg-minimal-border group-hover:w-4 group-hover:bg-minimal-purple/50'
              }`}
            />
          </button>
        );
      })}
    </aside>
  );
};
