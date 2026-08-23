import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { RefreshCw, AlertTriangle, Zap, CheckCircle, Flame, Shield } from 'lucide-react';

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
    <section id="old-systems" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          category="THE OLD SYSTEMS"
          headline="Every system has a history."
          subheadline="Modernization is not about destroying the past, but transforming legacy chaos into disciplined, high-performance architecture."
        />

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-[#17181C] border border-[#2C2D35]">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-5 py-2 rounded-md font-cinzel text-xs uppercase tracking-wider transition-all ${
                activeTab === 'comparison'
                  ? 'bg-[#C5A46D] text-[#0D0D0F] font-bold shadow-[0_0_15px_rgba(197,164,109,0.3)]'
                  : 'text-[#9B9488] hover:text-[#E5E0D8]'
              }`}
            >
              Side-by-Side Analysis
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-5 py-2 rounded-md font-cinzel text-xs uppercase tracking-wider transition-all ${
                activeTab === 'interactive'
                  ? 'bg-[#C5A46D] text-[#0D0D0F] font-bold shadow-[0_0_15px_rgba(197,164,109,0.3)]'
                  : 'text-[#9B9488] hover:text-[#E5E0D8]'
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
            <div className="gothic-card p-6 sm:p-8 rounded-xl border-[#8C2F39]/40 bg-gradient-to-b from-[#17181C] via-[#141215] to-[#120F12] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#8C2F39]/30">
                <div className="flex items-center gap-2 text-[#8C2F39]">
                  <Flame className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">LEGACY ANOMALIES</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#8C2F39]/20 text-[#E5E0D8] border border-[#8C2F39]/40">
                  MeteorJS · Class Components
                </span>
              </div>

              <div className="space-y-4">
                {LEGACY_POINTS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#0D0D0F]/70 border border-[#2A2024] space-y-1">
                    <div className="flex items-center gap-2 text-[#E5E0D8] font-cinzel text-sm font-semibold">
                      <AlertTriangle className="w-4 h-4 text-[#8C2F39] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#9B9488] leading-relaxed pl-6">
                      {item.problem}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#8C2F39]/20 flex items-center justify-between text-xs font-mono text-[#9B9488]">
                <span>State: High Fragility</span>
                <span className="text-[#8C2F39] font-bold">Needs Refactoring</span>
              </div>
            </div>

            {/* The New World / Modern */}
            <div className="gothic-card p-6 sm:p-8 rounded-xl border-[#C5A46D]/40 bg-gradient-to-b from-[#17181C] via-[#171A1D] to-[#111417] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#C5A46D]/30">
                <div className="flex items-center gap-2 text-[#C5A46D]">
                  <Zap className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">MODERN ARCHITECTURE</span>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#C5A46D]/20 text-[#E5E0D8] border border-[#C5A46D]/40">
                  React 19 · TypeScript · Vite
                </span>
              </div>

              <div className="space-y-4">
                {MODERN_POINTS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#0D0D0F]/70 border border-[#252C28] space-y-1">
                    <div className="flex items-center gap-2 text-[#E5E0D8] font-cinzel text-sm font-semibold">
                      <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-[#9B9488] leading-relaxed pl-6">
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5A46D]/20 flex items-center justify-between text-xs font-mono text-[#9B9488]">
                <span>State: Scalable & Tested</span>
                <span className="text-[#C5A46D] font-bold">Production Ready</span>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Metamorphosis Comparison Slider */
          <div className="max-w-4xl mx-auto gothic-card p-6 sm:p-8 rounded-xl">
            <div className="mb-4 text-center">
              <span className="text-xs font-mono text-[#C5A46D] tracking-widest uppercase">
                Drag slider to witness architectural metamorphosis
              </span>
            </div>

            <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden border border-[#2C2D35] select-none bg-[#0D0D0F]">
              {/* Modern Layer (Full width in background) */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#171C19] to-[#0E1310] text-[#E5E0D8]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C5A46D]/20 border border-[#C5A46D]/40 text-xs font-mono text-[#C5A46D] mb-3">
                    <Shield className="w-3.5 h-3.5" /> MODERN PLATFORM (REACT + VITE)
                  </div>
                  <h4 className="font-cinzel text-xl sm:text-2xl font-bold mb-2 text-[#E5E0D8]">
                    Modular Functional Architecture
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9B9488] max-w-md">
                    Strict TypeScript compilation, isolated domain stores, tree-shaken bundles, and sub-100ms response cycles.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 font-mono text-xs text-[#C5A46D]">
                  <div className="p-2.5 rounded bg-[#0D0D0F]/80 border border-[#252C28]">
                    <span className="text-[#9B9488] block text-[10px]">BUNDLE SIZE</span>
                    <strong className="text-[#E5E0D8] text-sm">-58% Optimized</strong>
                  </div>
                  <div className="p-2.5 rounded bg-[#0D0D0F]/80 border border-[#252C28]">
                    <span className="text-[#9B9488] block text-[10px]">TYPE COVERAGE</span>
                    <strong className="text-[#E5E0D8] text-sm">94.8% Strict</strong>
                  </div>
                </div>
              </div>

              {/* Legacy Layer (Clipped by slider position) */}
              <div
                className="absolute inset-y-0 left-0 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#201518] to-[#120D0F] border-r-2 border-[#C5A46D] shadow-[0_0_25px_rgba(0,0,0,0.9)] overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="w-[600px] sm:w-[700px]">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#8C2F39]/20 border border-[#8C2F39]/40 text-xs font-mono text-[#E5E0D8] mb-3">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#8C2F39]" /> LEGACY SYSTEM (METEORJS)
                  </div>
                  <h4 className="font-cinzel text-xl sm:text-2xl font-bold mb-2 text-[#E5E0D8]">
                    Monolithic Class Components
                  </h4>
                  <p className="text-xs sm:text-sm text-[#9B9488] max-w-md">
                    Unstructured global state mutations, blocking socket transports, and high memory leaks across long sessions.
                  </p>
                </div>
                <div className="w-[600px] sm:w-[700px] grid grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-2.5 rounded bg-[#0D0D0F]/80 border border-[#3A1F26]">
                    <span className="text-[#9B9488] block text-[10px]">RUNTIME BUGS</span>
                    <strong className="text-[#8C2F39] text-sm">High Cascades</strong>
                  </div>
                  <div className="p-2.5 rounded bg-[#0D0D0F]/80 border border-[#3A1F26]">
                    <span className="text-[#9B9488] block text-[10px]">HMR REBUILD</span>
                    <strong className="text-[#8C2F39] text-sm">~6.5s Slow</strong>
                  </div>
                </div>
              </div>

              {/* Slider Thumb Handle */}
              <div
                className="absolute top-0 bottom-0 -ml-3 flex items-center justify-center pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-7 h-7 rounded-full bg-[#C5A46D] border-2 border-[#0D0D0F] shadow-[0_0_15px_rgba(197,164,109,0.8)] flex items-center justify-center text-[#0D0D0F]">
                  <RefreshCw className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Slider Range Input */}
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs font-mono text-[#8C2F39]">LEGACY</span>
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full accent-[#C5A46D] cursor-pointer"
                aria-label="Legacy to Modern transformation percentage"
              />
              <span className="text-xs font-mono text-[#C5A46D]">MODERN</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
