import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Layers, Activity, GitBranch, Shield, Zap, RefreshCcw, CheckCircle } from 'lucide-react';

export const GreatHuntCaseStudy: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>('architecture');

  const DOMAIN_TABS = [
    { id: 'architecture', label: 'Architecture & Migration', icon: Layers },
    { id: 'state', label: 'State & Data Flow', icon: RefreshCcw },
    { id: 'performance', label: 'Performance & Vitals', icon: Zap },
    { id: 'resilience', label: 'Error Handling & Monitoring', icon: Shield },
    { id: 'standards', label: 'CI/CD & Code Standards', icon: GitBranch },
  ];

  return (
    <section id="great-hunt" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="05"
          category="THE GREAT HUNT // FLAGSHIP CASE STUDY"
          headline="MTN Irancell: Digital POS Platform"
          subheadline="Architectural modernization of a mission-critical dealer platform serving 40M+ telecom subscribers nationwide."
        />

        {/* High-Level Impact Metrics Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
          <div className="p-5 rounded-xl gothic-card border-[#C5A46D]/30 text-center">
            <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-[#E5E0D8] mb-1">
              40M+
            </span>
            <span className="text-xs font-mono uppercase text-[#C5A46D] tracking-wider">
              Subscribers Supported
            </span>
          </div>

          <div className="p-5 rounded-xl gothic-card border-[#C5A46D]/30 text-center">
            <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-[#E5E0D8] mb-1">
              0 Min
            </span>
            <span className="text-xs font-mono uppercase text-[#C5A46D] tracking-wider">
              Migration Downtime
            </span>
          </div>

          <div className="p-5 rounded-xl gothic-card border-[#C5A46D]/30 text-center">
            <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-[#E5E0D8] mb-1">
              -58%
            </span>
            <span className="text-xs font-mono uppercase text-[#C5A46D] tracking-wider">
              Initial Bundle Size
            </span>
          </div>

          <div className="p-5 rounded-xl gothic-card border-[#C5A46D]/30 text-center">
            <span className="block font-cinzel text-2xl sm:text-4xl font-bold text-[#E5E0D8] mb-1">
              99.98%
            </span>
            <span className="text-xs font-mono uppercase text-[#C5A46D] tracking-wider">
              Transaction Reliability
            </span>
          </div>
        </div>

        {/* Case Study Deep Dive Tabs */}
        <div className="max-w-5xl mx-auto gothic-card p-6 sm:p-8 rounded-xl border-[#C5A46D]/30">
          {/* Navigation Sub-Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#2C2D35] mb-8">
            {DOMAIN_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeDomain === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDomain(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-cinzel tracking-wider uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A46D] text-[#0D0D0F] font-bold shadow-[0_0_15px_rgba(197,164,109,0.3)]'
                      : 'bg-[#17181C] text-[#9B9488] hover:text-[#E5E0D8] border border-[#2A2B33]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Domain Tab Contents */}
          {activeDomain === 'architecture' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest">
                  Migration Strategy // The Strangler Fig Pattern
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E5E0D8]">
                  Zero-Downtime Incremental Modernization
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9B9488] leading-relaxed">
                Rather than embarking on a catastrophic "big bang" rewrite that would jeopardize millions of daily retail transactions, we instituted a strict Strangler Fig modernization pattern. We wrapped the legacy MeteorJS monolithic runtime inside a Vite-powered modern shell that seamlessly intercepted routes and shared authentication sessions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35] space-y-2">
                  <h4 className="font-cinzel text-sm font-semibold text-[#E5E0D8] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#C5A46D]" /> Route Isolation & Bridging
                  </h4>
                  <p className="text-xs text-[#9B9488] leading-relaxed">
                    Legacy Meteor templates and modern React 19 pages coexisted under a unified history proxy, allowing individual dealer workflows (SIM activation, bill payments, package recharge) to be migrated one by one.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35] space-y-2">
                  <h4 className="font-cinzel text-sm font-semibold text-[#E5E0D8] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C5A46D]" /> Strict Module Boundaries
                  </h4>
                  <p className="text-xs text-[#9B9488] leading-relaxed">
                    Decoupled UI presentation from domain business logic using dedicated service modules and custom hooks, preventing cross-module state contamination.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeDomain === 'state' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest">
                  State Orchestration // Predictable & Resilient
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E5E0D8]">
                  Separation of Server Cache & Client UI State
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9B9488] leading-relaxed">
                Replaced unorganized global Redux boilerplate with a clear duality: TanStack Query manages asynchronous server state, automated background revalidation, and caching, while Redux Toolkit / Zustand strictly manages local UI state.
              </p>

              <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35] space-y-3">
                <h4 className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-semibold">
                  Key State Architecture Highlights:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#9B9488]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong>Optimistic UI Updates:</strong> Immediate UI feedback on transaction creation with automated rollback on server rejection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong>Idempotency Keys:</strong> Every mutation request sends a UUID key to prevent duplicate charges caused by unstable mobile connections.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong>Offline Storage & Sync:</strong> Cached critical dealer product inventories locally using IndexedDB for offline resilience.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeDomain === 'performance' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest">
                  Speed & Efficiency // Hardware Optimization
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E5E0D8]">
                  58% Bundle Reduction & 60fps on POS Hardware
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9B9488] leading-relaxed">
                Many retail dealer booths utilize low-spec POS terminals with constrained RAM. We conducted extensive React Profiler audits to eliminate redundant re-renders and dramatically streamline asset delivery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35] text-center">
                  <span className="text-xs font-mono text-[#9B9488] block mb-1">BUNDLE SIZE</span>
                  <span className="font-cinzel text-xl font-bold text-[#C5A46D]">2.8MB → 1.1MB</span>
                  <span className="text-[11px] text-[#9B9488] block mt-1">Via Rollup manual chunks & tree-shaking</span>
                </div>
                <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35] text-center">
                  <span className="text-xs font-mono text-[#9B9488] block mb-1">LIST RENDERING</span>
                  <span className="font-cinzel text-xl font-bold text-[#C5A46D]">Virtualized</span>
                  <span className="text-[11px] text-[#9B9488] block mt-1">10,000+ item tables rendered smoothly</span>
                </div>
                <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35] text-center">
                  <span className="text-xs font-mono text-[#9B9488] block mb-1">FIRST CONTENTFUL PAINT</span>
                  <span className="font-cinzel text-xl font-bold text-[#C5A46D]">0.8s</span>
                  <span className="text-[11px] text-[#9B9488] block mt-1">Over 3G and cellular networks</span>
                </div>
              </div>
            </div>
          )}

          {activeDomain === 'resilience' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest">
                  Observability & Telemetry // Fault Tolerance
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E5E0D8]">
                  Proactive Sentry Telemetry & Boundary Recovery
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9B9488] leading-relaxed">
                Constructed granular React Error Boundaries around independent dashboard widgets. If one peripheral payment provider or third-party service fails, the remainder of the POS terminal continues operating without taking down the entire application.
              </p>

              <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35] space-y-2">
                <h4 className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-semibold">
                  Telemetry Stack:
                </h4>
                <p className="text-xs sm:text-sm text-[#9B9488] leading-relaxed">
                  Real-time error tracking with Sentry with user-session replay redaction (ensuring zero PII or sensitive payment credentials leak), coupled with custom Prometheus metrics tracking network latency and API error spikes.
                </p>
              </div>
            </div>
          )}

          {activeDomain === 'standards' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest">
                  Engineering Standards // Team Alignment
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E5E0D8]">
                  Automated CI/CD Hygiene & Strict Type Guardrails
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9B9488] leading-relaxed">
                Elevated developer velocity across the frontend guild by establishing strict pre-commit hooks (Husky, lint-staged, commitlint), TypeScript strict mode, and automated PR review checks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35]">
                  <span className="font-mono text-xs text-[#C5A46D] block mb-1 font-semibold">
                    PRE-COMMIT AUTOMATION
                  </span>
                  <p className="text-xs text-[#9B9488]">
                    Husky prevents any untyped code or ESLint violations from reaching GitHub.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35]">
                  <span className="font-mono text-xs text-[#C5A46D] block mb-1 font-semibold">
                    COMPONENT STORYBOOK
                  </span>
                  <p className="text-xs text-[#9B9488]">
                    Shared design system tokens preventing UI drift across parallel sprint teams.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
