import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { AlertTriangle, Zap, CheckCircle, Flame } from 'lucide-react';

export const OldSystems: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'interactive'>('comparison');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const LEGACY_POINTS = [
    {
      title: 'Monolithic MeteorJS Runtime',
      problem: 'Tight server-client coupling, blocking DDP socket bottlenecks, and lack of modular bundling.',
    },
    {
      title: 'React Class Components & Lifecycle Chaos',
      problem: 'Complex `componentWillReceiveProps` chains, memory leaks in unmounted listeners, and prop-drilling.',
    },
    {
      title: 'Unchecked JavaScript Runtime Bugs',
      problem: 'Frequent `undefined is not a function` production crashes and untyped payload parsing.',
    },
    {
      title: 'Bloated Bundles & Slow Cold Starts',
      problem: 'Massive monolithic bundle files causing 4s+ initial load times on mobile and POS hardware.',
    },
  ];

  const MODERN_POINTS = [
    {
      title: 'Modular React 19 & Functional Hooks',
      solution: 'Clean unidirectional data flow, custom reusable hooks, concurrent rendering, and isolated side effects.',
    },
    {
      title: 'Strict TypeScript Type Contracts',
      solution: '100% compile-time safety, strict null checks, discriminated unions, and auto-generated API types.',
    },
    {
      title: 'Vite & Modern Build Ecosystem',
      solution: 'Sub-second HMR development, automated Rollup tree-shaking, and lightweight chunk splitting.',
    },
    {
      title: 'Resilient Cache & Optimistic UI',
      solution: 'TanStack Query with offline caching, background revalidation, and instant optimistic updates.',
    },
  ];

  return (
    <section id="old-systems" className="py-24 md:py-36 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="03"
          category="THE OLD SYSTEMS // THE ARCHAEOLOGY OF DEBT"
          headline="Every system has a history."
          subheadline="Modernization is not about destroying the past, but transforming legacy chaos into disciplined, high-performance architecture."
        />

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-[#141519] border border-white/[0.06]">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2 rounded-lg font-cinzel text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-[#C5A46D] text-[#0A0A0C] font-bold shadow-[0_0_15px_rgba(197,164,109,0.35)]'
                  : 'text-[#9E988F] hover:text-[#E8E3D9]'
              }`}
            >
              Side-by-Side Analysis
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-5 py-2 rounded-lg font-cinzel text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'interactive'
                  ? 'bg-[#C5A46D] text-[#0A0A0C] font-bold shadow-[0_0_15px_rgba(197,164,109,0.35)]'
                  : 'text-[#9E988F] hover:text-[#E8E3D9]'
              }`}
            >
              Metamorphosis Slider
            </button>
          </div>
        </div>

        {activeTab === 'comparison' ? (
          /* Side by Side Architectural Comparison Grid */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old World / Legacy */}
            <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#8C2F39]/40 bg-gradient-to-b from-[#141519] via-[#141215] to-[#120F12] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#8C2F39]/30">
                <div className="flex items-center gap-2 text-[#8C2F39]">
                  <Flame className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">LEGACY ANOMALIES</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#8C2F39]/20 text-[#E8E3D9] border border-[#8C2F39]/40">
                  MeteorJS · Class Components
                </span>
              </div>

              <div className="space-y-4">
                {LEGACY_POINTS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#0D0D10]/80 border border-[#2A1D22] space-y-1">
                    <div className="flex items-center gap-2 text-[#E8E3D9] font-cinzel text-sm font-semibold">
                      <AlertTriangle className="w-4 h-4 text-[#8C2F39] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#9E988F] leading-relaxed pl-6">
                      {item.problem}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#8C2F39]/20 flex items-center justify-between text-xs font-mono text-[#9E988F]">
                <span>State: High Fragility</span>
                <span className="text-[#8C2F39] font-bold">Requires Refactoring</span>
              </div>
            </div>

            {/* The New World / Modern */}
            <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/40 bg-gradient-to-b from-[#141519] via-[#14171A] to-[#111417] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#C5A46D]/30">
                <div className="flex items-center gap-2 text-[#C5A46D]">
                  <Zap className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">MODERN ARCHITECTURE</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#C5A46D]/20 text-[#E8E3D9] border border-[#C5A46D]/40">
                  React 19 · TypeScript · Vite
                </span>
              </div>

              <div className="space-y-4">
                {MODERN_POINTS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#0D0D10]/80 border border-[#252C28] space-y-1">
                    <div className="flex items-center gap-2 text-[#E8E3D9] font-cinzel text-sm font-semibold">
                      <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#9E988F] leading-relaxed pl-6">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5A46D]/20 flex items-center justify-between text-xs font-mono text-[#9E988F]">
                <span>State: Scalable & Tested</span>
                <span className="text-[#C5A46D] font-bold">Production Ready</span>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Metamorphosis Comparison Slider */
          <div className="max-w-4xl mx-auto gothic-card p-6 sm:p-10 rounded-2xl border-[#C5A46D]/30">
            <div className="text-center mb-6 space-y-2">
              <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest">
                Interactive Codebase Refactoring Inspection
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E8E3D9]">
                Slide to Witness Code Metamorphosis
              </h3>
              <p className="text-xs sm:text-sm text-[#9E988F] max-w-lg mx-auto">
                Drag the threshold slider to witness how legacy imperative JavaScript transforms into clean declarative TypeScript with custom hooks.
              </p>
            </div>

            {/* Slider control */}
            <div className="mb-8 px-4">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full h-2 bg-[#0D0D10] rounded-lg appearance-none cursor-pointer accent-[#C5A46D]"
                aria-label="Codebase metamorphosis slider"
              />
              <div className="flex justify-between text-xs font-mono text-[#9E988F] mt-2">
                <span className={sliderPosition < 50 ? 'text-[#8C2F39] font-bold' : ''}>
                  0% Legacy Monolith
                </span>
                <span className="text-[#C5A46D] font-bold">{sliderPosition}% Modernized</span>
                <span className={sliderPosition > 50 ? 'text-[#C5A46D] font-bold' : ''}>
                  100% Target Architecture
                </span>
              </div>
            </div>

            {/* Code Transformation Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Legacy Code Box */}
              <div
                className={`p-5 rounded-xl border transition-all duration-300 ${
                  sliderPosition < 60
                    ? 'bg-[#181215] border-[#8C2F39]/60 shadow-[0_0_20px_rgba(140,47,57,0.2)]'
                    : 'bg-[#0D0D10]/50 border-white/[0.05] opacity-40'
                }`}
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#8C2F39]/30">
                  <span className="text-xs font-mono text-[#8C2F39] font-bold uppercase">
                    Legacy Class Component (2018)
                  </span>
                  <span className="text-[10px] font-mono text-[#9E988F]">Unchecked Types</span>
                </div>
                <pre className="font-mono text-xs text-[#9E988F] overflow-x-auto leading-relaxed">
{`class PosTerminal extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      Meteor.call('syncPosTransactions', {
        id: nextProps.user.id
      }, (err, res) => {
        if (!err) this.setState({ data: res });
      });
    }
  }
  // Potential memory leaks & null derefs
}`}
                </pre>
              </div>

              {/* Modern Code Box */}
              <div
                className={`p-5 rounded-xl border transition-all duration-300 ${
                  sliderPosition >= 40
                    ? 'bg-[#141A17] border-[#C5A46D]/60 shadow-[0_0_20px_rgba(197,164,109,0.2)]'
                    : 'bg-[#0D0D10]/50 border-white/[0.05] opacity-40'
                }`}
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#C5A46D]/30">
                  <span className="text-xs font-mono text-[#C5A46D] font-bold uppercase">
                    Modern React 19 + TanStack Query
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Strict TS</span>
                </div>
                <pre className="font-mono text-xs text-[#E8E3D9] overflow-x-auto leading-relaxed">
{`export const PosTerminal: React.FC<PosProps> = ({ 
  dealerId 
}) => {
  const { data, isPending } = useQuery<PosData>({
    queryKey: ['pos-terminal', dealerId],
    queryFn: () => fetchDealerTransactions(dealerId),
    staleTime: 1000 * 60 * 5,
  });

  // Zero memory leaks, optimistic UI
  return <TransactionGrid data={data} />;
};`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
