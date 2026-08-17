import React, { useState } from 'react';
import {
  Grid,
  ShieldCheck,
  AlertTriangle,
  Info,
  CheckCircle2,
  X,
  BookOpen,
  ArrowRight,
  Sparkles,
  Search,
  Activity
} from 'lucide-react';

export const InteractionMatrixInteractive = () => {
  const [selectedPair, setSelectedPair] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null);

  const meds = [
    { id: 'warf', name: 'Warfarin', short: 'WARF', spec: 'Cardiology' },
    { id: 'asp', name: 'Aspirin', short: 'ASP', spec: 'Cardiology' },
    { id: 'ator', name: 'Atorvastatin', short: 'ATOR', spec: 'Cardiology' },
    { id: 'metf', name: 'Metformin', short: 'METF', spec: 'Diabetes' },
    { id: 'glim', name: 'Glimepiride', short: 'GLIM', spec: 'Diabetes' },
    { id: 'cel', name: 'Celecoxib', short: 'CEL', spec: 'Orthopedics' },
    { id: 'levo', name: 'Levothyroxine', short: 'LEVO', spec: 'GP' },
    { id: 'calc', name: 'Calcium+D3', short: 'CALC', spec: 'Orthopedics' },
  ];

  // Lookup matrix map
  const matrixData = {
    'warf_asp': { risk: 'HIGH', label: 'Severe Bleeding Hazard', desc: 'Synergistic anticoagulation + platelet aggregation block.' },
    'asp_warf': { risk: 'HIGH', label: 'Severe Bleeding Hazard', desc: 'Synergistic anticoagulation + platelet aggregation block.' },
    'warf_cel': { risk: 'MOD', label: 'CYP2C9 Metabolic Lag', desc: 'Celecoxib inhibits S-warfarin liver clearance, elevating INR.' },
    'cel_warf': { risk: 'MOD', label: 'CYP2C9 Metabolic Lag', desc: 'Celecoxib inhibits S-warfarin liver clearance, elevating INR.' },
    'metf_glim': { risk: 'MOD', label: 'Synergistic Hypoglycemia', desc: 'Combined insulin sensitization & secretion increases low glucose risk.' },
    'glim_metf': { risk: 'MOD', label: 'Synergistic Hypoglycemia', desc: 'Combined insulin sensitization & secretion increases low glucose risk.' },
    'levo_calc': { risk: 'LOW', label: 'Chelation Absorption Lag', desc: 'Calcium binds levothyroxine in GI tract; separate doses by 4+ hours.' },
    'calc_levo': { risk: 'LOW', label: 'Chelation Absorption Lag', desc: 'Calcium binds levothyroxine in GI tract; separate doses by 4+ hours.' },
    'asp_cel': { risk: 'MOD', label: 'GI Mucosal Irritation', desc: 'Dual NSAID/salicylate therapy amplifies peptic ulceration risk.' },
    'cel_asp': { risk: 'MOD', label: 'GI Mucosal Irritation', desc: 'Dual NSAID/salicylate therapy amplifies peptic ulceration risk.' }
  };

  const getCellData = (id1, id2) => {
    if (id1 === id2) return { risk: 'SELF', label: 'Identical Drug', desc: '-' };
    const key = `${id1}_${id2}`;
    return matrixData[key] || { risk: 'SAFE', label: 'Safe Compatibility', desc: 'No significant pharmacokinetic or pharmacodynamic conflict.' };
  };

  return (
    <section className="relative py-28 px-6 lg:px-16 max-w-[1540px] mx-auto select-none">
      {/* Editorial Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-universe-border pb-4 mb-16 gap-4 font-mono text-xs text-universe-muted">
        <div>
          <span className="text-universe-cyan font-extrabold tracking-widest block">[ 07 / INTERACTION MATRIX ]</span>
          <span className="text-[11px]">CROSS-PRESCRIBER TOPOLOGICAL MATRIX</span>
        </div>
        <span className="text-universe-mint font-bold flex items-center gap-2">
          <Activity className="w-4 h-4 text-universe-mint animate-pulse" />
          CLICK ANY CELL FOR DEEP EVIDENCE
        </span>
      </div>

      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span className="font-mono text-xs font-extrabold text-universe-cyan uppercase tracking-widest block">
          COMBINATORIAL SAFETY TOPOLOGY
        </span>

        <h2 className="text-4xl sm:text-6xl font-extrabold text-white font-display tracking-tight leading-[0.92]">
          See What Other <br />
          <span className="bg-gradient-to-r from-universe-cyan via-universe-lavender to-universe-violet bg-clip-text text-transparent">
            Systems Miss.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-universe-muted max-w-2xl mx-auto leading-relaxed">
          Every medication node is mapped across all active prescribers. Hover over any glowing intersection to view real-time pharmacodynamic checks or click for clinical drill-down.
        </p>

        {/* Legend (Section 10 Requirement) */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-universe-coral shadow-glow-coral animate-pulse" />
            <span className="text-universe-coral font-bold">Red: High-Risk Conflict</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-universe-amber shadow-glow-amber" />
            <span className="text-universe-amber font-bold">Amber: Potential Interaction</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-universe-cyan" />
            <span className="text-universe-cyan font-bold">Cyan: Minor Timing Advisory</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-universe-mint shadow-glow-mint" />
            <span className="text-universe-mint font-bold">Green: Safe Compatibility</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive 8x8 Grid (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-[36px] universe-panel shadow-rich-card overflow-x-auto">
          <table className="w-full border-collapse select-none">
            <thead>
              <tr>
                <th className="p-2 text-left text-[11px] font-mono text-universe-muted">MED</th>
                {meds.map((m) => (
                  <th key={m.id} className="p-2 text-center text-[10px] font-mono text-universe-cyan font-extrabold">
                    {m.short}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {meds.map((rowMed) => (
                <tr key={rowMed.id}>
                  <td className="p-2 text-[11px] font-bold text-white font-display whitespace-nowrap">
                    {rowMed.name}
                  </td>

                  {meds.map((colMed) => {
                    const data = getCellData(rowMed.id, colMed.id);
                    const isSelf = data.risk === 'SELF';
                    const isHigh = data.risk === 'HIGH';
                    const isMod = data.risk === 'MOD';
                    const isLow = data.risk === 'LOW';
                    const isSafe = data.risk === 'SAFE';

                    let cellStyle = 'bg-universe-void/60 border-universe-border text-universe-muted';
                    if (isHigh) cellStyle = 'bg-universe-coral/25 border-universe-coral text-universe-coral shadow-glow-coral animate-pulse';
                    else if (isMod) cellStyle = 'bg-universe-amber/20 border-universe-amber text-universe-amber shadow-glow-amber';
                    else if (isLow) cellStyle = 'bg-universe-cyan/15 border-universe-cyan text-universe-cyan';
                    else if (isSafe) cellStyle = 'bg-universe-mint/10 border-universe-mint/30 text-universe-mint hover:bg-universe-mint/20';

                    return (
                      <td key={colMed.id} className="p-1.5 text-center">
                        <button
                          disabled={isSelf}
                          onMouseEnter={() => setHoveredCell({ row: rowMed, col: colMed, data })}
                          onMouseLeave={() => setHoveredCell(null)}
                          onClick={() => setSelectedPair({ row: rowMed, col: colMed, data })}
                          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl border text-[10px] font-bold flex items-center justify-center transition-all ${cellStyle} ${
                            isSelf ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110 cursor-pointer'
                          }`}
                        >
                          {isSelf ? '•' : isHigh ? '!' : isMod ? '▲' : isLow ? 'i' : '✓'}
                        </button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Quick Hover Tooltip Status Bar (Section 10) */}
          <div className="mt-6 pt-4 border-t border-universe-border flex items-center justify-between text-xs font-mono">
            {hoveredCell ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-white font-display">
                  {hoveredCell.row.name} + {hoveredCell.col.name}:
                </span>
                <span
                  className={`font-extrabold ${
                    hoveredCell.data.risk === 'HIGH'
                      ? 'text-universe-coral'
                      : hoveredCell.data.risk === 'MOD'
                      ? 'text-universe-amber'
                      : hoveredCell.data.risk === 'LOW'
                      ? 'text-universe-cyan'
                      : 'text-universe-mint'
                  }`}
                >
                  {hoveredCell.data.label}
                </span>
              </div>
            ) : (
              <span className="text-universe-muted">Hover over any intersection to preview clinical interaction</span>
            )}
            <span className="text-[10px] font-mono text-universe-cyan hidden sm:inline">Click node for deep clinical panel</span>
          </div>
        </div>

        {/* Right Column: Deep Interaction Inspector Panel (4 cols) */}
        <div className="lg:col-span-4">
          <div className="p-6 sm:p-8 rounded-[36px] universe-panel shadow-rich-card space-y-4 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-universe-border">
              <h3 className="text-xs font-bold uppercase tracking-wider text-universe-cyan flex items-center gap-2">
                <Info className="w-4 h-4 text-universe-cyan" />
                <span>Node Inspection</span>
              </h3>
              {selectedPair && (
                <button
                  onClick={() => setSelectedPair(null)}
                  className="p-1 rounded-lg text-universe-muted hover:text-white hover:bg-universe-surface"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {selectedPair ? (
              <div className="space-y-4 animate-pop-in">
                <div className="p-4 rounded-2xl bg-universe-surface/80 border border-universe-border space-y-2">
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border inline-block ${
                      selectedPair.data.risk === 'HIGH'
                        ? 'bg-universe-coral/20 text-universe-coral border-universe-coral/40'
                        : selectedPair.data.risk === 'MOD'
                        ? 'bg-universe-amber/20 text-universe-amber border-universe-amber/40'
                        : selectedPair.data.risk === 'LOW'
                        ? 'bg-universe-cyan/20 text-universe-cyan border-universe-cyan/40'
                        : 'bg-universe-mint/20 text-universe-mint border-universe-mint/40'
                    }`}
                  >
                    {selectedPair.data.risk} RISK SEVERITY
                  </span>

                  <h4 className="text-lg font-extrabold text-white font-display">
                    {selectedPair.row.name} + {selectedPair.col.name}
                  </h4>
                  <p className="text-xs text-universe-muted font-medium">{selectedPair.data.label}</p>
                </div>

                <div className="text-xs text-universe-ivory space-y-3 font-sans">
                  <p className="leading-relaxed text-universe-muted">{selectedPair.data.desc}</p>
                  <div className="p-3.5 rounded-2xl bg-universe-void border border-universe-border space-y-1 font-mono text-[10px]">
                    <span className="uppercase font-bold text-universe-cyan block">
                      Sources & Evidence
                    </span>
                    <p className="text-universe-muted">
                      Standardized RxNorm cross-index • FDA Safety database • Level 1A guidelines
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-universe-muted space-y-3">
                <Grid className="w-10 h-10 text-universe-border mx-auto" />
                <p className="text-xs max-w-xs mx-auto leading-relaxed">
                  Click any intersection in the matrix to load pharmacokinetics, enzyme pathways, and clinical citations.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
