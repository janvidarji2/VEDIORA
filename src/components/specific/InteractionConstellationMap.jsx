import React, { useState } from 'react';
import {
  Capsule3D,
  RiskNode3D
} from '../common/MedicalObjects';
import { Sparkles, Info, ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

export const InteractionConstellationMap = () => {
  const [selectedEdge, setSelectedEdge] = useState({
    medA: "Warfarin",
    doseA: "5 MG",
    medB: "Aspirin",
    doseB: "75 MG",
    level: "MODERATE",
    type: "Pharmacodynamic Synergy",
    desc: "Concurrent use of dual antiplatelet/anticoagulant agents significantly increases upper GI and systemic bleeding risk.",
    recommendation: "Re-evaluate dual therapy indication with prescribing cardiologist; monitor INR and fecal occult blood."
  });

  const constellationNodes = [
    { id: 'w', name: 'Warfarin', dose: '5 MG', x: 25, y: 30, color: 'coral' },
    { id: 'a', name: 'Aspirin', dose: '75 MG', x: 75, y: 25, color: 'coral' },
    { id: 'm', name: 'Metformin', dose: '1000 MG', x: 20, y: 70, color: 'violet' },
    { id: 'g', name: 'Glimepiride', dose: '2 MG', x: 70, y: 75, color: 'amber' },
    { id: 'c', name: 'Celecoxib', dose: '200 MG', x: 50, y: 15, color: 'coral' },
    { id: 'l', name: 'Lisinopril', dose: '10 MG', x: 50, y: 85, color: 'mint' },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 max-w-[1520px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex items-center justify-between border-b border-intel-border pb-4 mb-16 font-mono text-xs text-intel-muted">
        <span className="text-intel-cyan font-bold tracking-widest">[ 05 / MAP ]</span>
        <span>MEDICATION INTERACTION CONSTELLATION</span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Constellation Canvas Panel (8 cols) */}
        <div className="lg:col-span-8 relative h-[560px] rounded-3xl intel-panel border border-intel-border p-8 overflow-hidden">
          <div className="absolute inset-0 bg-dot-matrix opacity-25 pointer-events-none" />

          {/* SVG Constellation Filaments */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Warfarin <-> Aspirin (Coral Risk) */}
            <line x1="25%" y1="30%" x2="75%" y2="25%" className="luminous-line-coral" strokeWidth="2.5" />
            {/* Warfarin <-> Celecoxib (Coral Risk) */}
            <line x1="25%" y1="30%" x2="50%" y2="15%" className="luminous-line-coral" strokeWidth="2" strokeDasharray="6 4" />
            {/* Metformin <-> Glimepiride (Amber Attention) */}
            <line x1="20%" y1="70%" x2="70%" y2="75%" className="luminous-line-violet" strokeWidth="1.8" strokeDasharray="4 4" />
            {/* Lisinopril <-> Atorvastatin (Mint Safe) */}
            <line x1="50%" y1="85%" x2="20%" y2="70%" className="luminous-line-mint opacity-60" strokeWidth="1" />
            <line x1="50%" y1="85%" x2="75%" y2="25%" className="luminous-line-mint opacity-60" strokeWidth="1" />
          </svg>

          {/* Interactive Nodes Positioned Absolutely */}
          {constellationNodes.map((node) => (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-transform"
            >
              <Capsule3D name={node.name} dose={node.dose} color={node.color} size="sm" />
            </div>
          ))}

          {/* Legend HUD */}
          <div className="absolute bottom-6 left-6 flex items-center gap-6 font-mono text-[11px] bg-intel-surface/90 px-4 py-2 rounded-xl border border-intel-border z-20">
            <span className="flex items-center gap-1.5 text-intel-mint">
              <span className="w-2.5 h-0.5 bg-intel-mint rounded-full" /> SAFE
            </span>
            <span className="flex items-center gap-1.5 text-intel-amber">
              <span className="w-2.5 h-0.5 bg-intel-amber rounded-full" /> ATTENTION
            </span>
            <span className="flex items-center gap-1.5 text-intel-coral">
              <span className="w-2.5 h-0.5 bg-intel-coral rounded-full" /> HIGH RISK
            </span>
          </div>
        </div>

        {/* Right Inspection Dossier Column (4 cols) */}
        <div className="lg:col-span-4 space-y-6 text-left">
          <div className="space-y-2">
            <span className="font-mono text-xs font-extrabold text-intel-cyan tracking-widest uppercase block">
              COLLISION DOSSIER
            </span>
            <h3 className="text-3xl font-extrabold text-intel-ivory font-display tracking-tight">
              {selectedEdge.medA} + {selectedEdge.medB}
            </h3>
          </div>

          {/* Risk Badge */}
          <div>
            <RiskNode3D severity={selectedEdge.level} label={selectedEdge.type} />
          </div>

          <div className="p-6 rounded-2xl bg-intel-surface/90 border border-intel-border space-y-4">
            <div>
              <span className="font-mono text-[10px] text-intel-muted uppercase tracking-wider block mb-1">
                MECHANISM:
              </span>
              <p className="text-xs text-intel-ivory/90 leading-relaxed font-medium">
                {selectedEdge.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-intel-border">
              <span className="font-mono text-[10px] text-intel-mint uppercase tracking-wider block mb-1">
                CLINICAL ACTION:
              </span>
              <p className="text-xs text-emerald-300/90 leading-relaxed font-medium">
                {selectedEdge.recommendation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
