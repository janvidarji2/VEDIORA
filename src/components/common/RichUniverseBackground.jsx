import React, { useEffect, useRef } from 'react';

export const RichUniverseBackground = ({ activeZone = 'neutral' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle field
    const particleCount = 60;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        originX: Math.random() * width,
        originY: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2.2 + 0.8,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw cursor magnetic glow
      if (mouse.active) {
        const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 320);
        if (activeZone === 'doctor' || activeZone === 'violet') {
          glowGrad.addColorStop(0, 'rgba(139, 92, 246, 0.22)');
          glowGrad.addColorStop(0.5, 'rgba(124, 58, 237, 0.08)');
        } else if (activeZone === 'patient' || activeZone === 'aqua') {
          glowGrad.addColorStop(0, 'rgba(6, 182, 212, 0.22)');
          glowGrad.addColorStop(0.5, 'rgba(34, 211, 238, 0.08)');
        } else if (activeZone === 'medicine' || activeZone === 'mint' || activeZone === 'safe') {
          glowGrad.addColorStop(0, 'rgba(16, 185, 129, 0.22)');
          glowGrad.addColorStop(0.5, 'rgba(110, 231, 183, 0.08)');
        } else if (activeZone === 'risk' || activeZone === 'coral') {
          glowGrad.addColorStop(0, 'rgba(239, 68, 68, 0.26)');
          glowGrad.addColorStop(0.5, 'rgba(252, 165, 165, 0.08)');
        } else if (activeZone === 'attention' || activeZone === 'amber') {
          glowGrad.addColorStop(0, 'rgba(245, 158, 11, 0.24)');
          glowGrad.addColorStop(0.5, 'rgba(253, 230, 138, 0.08)');
        } else if (activeZone === 'ai' || activeZone === 'electric') {
          glowGrad.addColorStop(0, 'rgba(124, 58, 237, 0.24)');
          glowGrad.addColorStop(0.5, 'rgba(168, 85, 247, 0.08)');
        } else {
          glowGrad.addColorStop(0, 'rgba(139, 92, 246, 0.16)');
          glowGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.06)');
        }
        glowGrad.addColorStop(0.8, 'rgba(6, 11, 30, 0.02)');
        glowGrad.addColorStop(1, 'rgba(4, 7, 20, 0)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Render connecting filaments between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // 3. Render particles with magnetic bend toward cursor
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Magnetic bend toward cursor
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 220 && dist > 8) {
            const pull = ((220 - dist) / 220) * 1.2;
            p.x += (dx / dist) * pull;
            p.y += (dy / dist) * pull;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (activeZone === 'doctor') ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
        else if (activeZone === 'patient') ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`;
        else if (activeZone === 'risk') ctx.fillStyle = `rgba(239, 68, 68, ${p.alpha})`;
        else if (activeZone === 'safe') ctx.fillStyle = `rgba(16, 185, 129, ${p.alpha})`;
        else ctx.fillStyle = `rgba(196, 181, 253, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeZone]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Base Gradient Canvas with Particle Magnetic Reaction */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-90" />

      {/* 2. Medical Blueprint Technical Layer (Section 26) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08] stroke-universe-lavender pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Fine Technical Grid Pattern */}
          <pattern id="blueprintGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" strokeWidth="0.75" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#blueprintGrid)" />

        {/* Molecular Chemical Structures (Benzene rings) */}
        <g transform="translate(100, 140)" strokeWidth="1.2" fill="none">
          <polygon points="0,-25 21.6,-12.5 21.6,12.5 0,25 -21.6,12.5 -21.6,-12.5" />
          <circle cx="0" cy="0" r="14" strokeDasharray="3 3" />
          <line x1="21.6" y1="12.5" x2="40" y2="23" />
          <text x="44" y="27" fill="currentColor" fontSize="8" fontFamily="monospace">OH</text>
        </g>

        <g transform="translate(1180, 240)" strokeWidth="1.2" fill="none">
          <polygon points="0,-25 21.6,-12.5 21.6,12.5 0,25 -21.6,12.5 -21.6,-12.5" />
          <circle cx="0" cy="0" r="14" strokeDasharray="3 3" />
          <line x1="-21.6" y1="12.5" x2="-40" y2="23" />
          <text x="-58" y="27" fill="currentColor" fontSize="8" fontFamily="monospace">CH3</text>
        </g>

        {/* ECG Heartbeat Waveforms */}
        <path
          d="M 50 650 L 180 650 L 195 620 L 210 690 L 225 610 L 240 660 L 255 650 L 400 650"
          fill="none"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        <path
          d="M 980 720 L 1080 720 L 1095 690 L 1110 760 L 1125 680 L 1140 730 L 1155 720 L 1300 720"
          fill="none"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Medical Crosses & Telemetry Coordinates */}
        <g transform="translate(260, 320)" strokeWidth="1">
          <line x1="-8" y1="0" x2="8" y2="0" />
          <line x1="0" y1="-8" x2="0" y2="8" />
          <text x="12" y="4" fill="currentColor" fontSize="7" fontFamily="monospace">VEDI-SYS // LAT 37.42 // LNG -122.08</text>
        </g>

        <g transform="translate(850, 160)" strokeWidth="1">
          <line x1="-8" y1="0" x2="8" y2="0" />
          <line x1="0" y1="-8" x2="0" y2="8" />
          <text x="12" y="4" fill="currentColor" fontSize="7" fontFamily="monospace">CYP450 / 2C9 • 3A4 • 2D6</text>
        </g>
      </svg>
    </div>
  );
};
