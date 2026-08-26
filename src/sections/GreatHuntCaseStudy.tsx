import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from '../components/SectionHeading';
import {
  Layers,
  Activity,
  GitBranch,
  Shield,
  Zap,
  RefreshCcw,
  CheckCircle2,
  Sparkles,
  Cpu,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const GreatHuntCaseStudy: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>('architecture');
  const sectionRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const DOMAIN_TABS = [
    { id: 'architecture', label: 'Architecture & Migration', icon: Layers },
    { id: 'state', label: 'State & Data Flow', icon: RefreshCcw },
    { id: 'performance', label: 'Performance & Hardware', icon: Zap },
    { id: 'resilience', label: 'Error Telemetry & Sentry', icon: Shield },
    { id: 'standards', label: 'CI/CD & Engineering Standards', icon: GitBranch },
  ];

  const ACCOMPLISHMENTS = [
    {
      num: '01',
      title: 'Strangler Fig Migration',
      highlight: 'Zero Downtime Rollout',
      desc: 'Seamlessly wrapped legacy MeteorJS monolith with modern Vite shell, migrating core dealer flows route-by-route without disrupting active subscriber transactions.',
      icon: Cpu,
    },
    {
      num: '02',
      title: 'POS Hardware Optimization',
      highlight: '-58% Bundle Size',
      desc: 'Optimized rendering pipelines for low-RAM dealer POS terminals, eliminating UI freeze states and achieving smooth 60fps virtualization for 10k+ SKU tables.',
      icon: Zap,
    },
    {
      num: '03',
      title: 'State & Error Telemetry',
      highlight: 'Granular Isolation',
      desc: 'Constructed isolated error boundaries with Sentry user-session replay redaction (zero PII leaks) and idempotent retry queues on flaky network connections.',
      icon: Shield,
    },
    {
      num: '04',
      title: 'Engineering Standards',
      highlight: '6x Faster PR Cycles',
      desc: 'Standardized frontend workflows via Husky pre-commit hooks, Lint-Staged, Commitlint, automated TypeScript strict CI, and Storybook token systems.',
      icon: GitBranch,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate key accomplishments grid on scroll
      if (metricsRef.current) {
        gsap.from(metricsRef.current.children, {
          y: 24,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: metricsRef.current,
            start: 'top 85%',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="great-hunt" ref={sectionRef} className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="05"
          category="Flagship Case Study"
          headline="THE GREAT HUNT"
          subheadline="Architectural modernization of the mission-critical Digital POS platform supporting a telecom ecosystem serving 40M+ subscribers."
        />

        {/* Prominent Scale Context Badge */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-[#141519] border border-[#C5A46D]/35 shadow-[0_0_20px_rgba(197,164,109,0.12)] text-xs sm:text-sm font-mono text-[#C5A46D] tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#C5A46D] animate-pulse shrink-0" />
            <span className="font-bold text-[#EAE6DF]">
              Digital POS Platform
            </span>
            <span className="text-[#847F78]">·</span>
            <span className="text-[#B8B2A7]">Nationwide Telecom Ecosystem (40M+ Subscribers)</span>
          </div>
        </div>

        {/* 4-Column Key Accomplishments Grid */}
        <div ref={metricsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {ACCOMPLISHMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="gothic-card p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300 bg-[#141519]/90 border-[rgba(255,255,255,0.06)] hover:border-[#C5A46D]/35"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#C5A46D]">
                      PILLAR {item.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#0D0D10] border border-[#2A2B33] flex items-center justify-center text-[#C5A46D]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h4 className="font-cinzel text-base font-bold text-[#EAE6DF] leading-snug">
                    {item.title}
                  </h4>

                  <span className="inline-block px-2.5 py-1 rounded-md bg-[#C5A46D]/15 border border-[#C5A46D]/30 text-xs font-mono text-[#C5A46D] font-bold">
                    {item.highlight}
                  </span>

                  <p className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Study Deep Dive Tabs */}
        <div className="gothic-card p-6 sm:p-8 md:p-10 rounded-2xl border-[#C5A46D]/30 bg-[#141519]/95 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
          {/* Navigation Sub-Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[rgba(255,255,255,0.08)] mb-8">
            {DOMAIN_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeDomain === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDomain(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A46D] text-[#0A0A0C] font-bold shadow-[0_0_15px_rgba(197,164,109,0.35)]'
                      : 'bg-[#0D0D10] text-[#B8B2A7] hover:text-[#EAE6DF] border border-[rgba(255,255,255,0.08)]'
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
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest font-semibold">
                  Migration Strategy · The Strangler Fig Pattern
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#EAE6DF]">
                  Zero-Downtime Incremental Modernization
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed max-w-4xl">
                Rather than embarking on a high-risk "big bang" rewrite that would jeopardize millions of daily retail transactions, we instituted a strict Strangler Fig modernization pattern. We wrapped the legacy MeteorJS monolithic runtime inside a Vite-powered modern shell that seamlessly intercepted routes and shared authentication sessions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] space-y-2">
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#EAE6DF] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#C5A46D]" /> Route Isolation & Bridging
                  </h4>
                  <p className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed">
                    Legacy Meteor templates and modern React 19 pages coexisted under a unified history proxy, allowing individual dealer workflows (SIM activation, bill payments, package recharge) to be migrated one by one.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] space-y-2">
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#EAE6DF] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C5A46D]" /> Strict Module Boundaries
                  </h4>
                  <p className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed">
                    Decoupled UI presentation from domain business logic using dedicated service modules and custom hooks, preventing cross-module state contamination.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeDomain === 'state' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest font-semibold">
                  State Orchestration · Predictable & Resilient
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#EAE6DF]">
                  Separation of Server Cache & Client UI State
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed max-w-4xl">
                Replaced unorganized global Redux boilerplate with a clear duality: TanStack Query manages asynchronous server state, automated background revalidation, and caching, while lightweight stores strictly manage local UI state.
              </p>

              <div className="p-5 rounded-xl bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] space-y-3">
                <h4 className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-bold">
                  Key State Architecture Highlights:
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#B8B2A7]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong className="text-[#EAE6DF]">Optimistic UI Updates:</strong> Immediate UI feedback on transaction creation with automated rollback on server rejection.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong className="text-[#EAE6DF]">Idempotency Keys:</strong> Every mutation request sends a UUID key to prevent duplicate charges caused by unstable mobile connections.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong className="text-[#EAE6DF]">Offline Storage & Sync:</strong> Cached critical dealer product inventories locally using IndexedDB for offline resilience.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeDomain === 'performance' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest font-semibold">
                  Speed & Efficiency · Hardware Optimization
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#EAE6DF]">
                  58% Bundle Reduction & 60fps on Low-RAM POS Hardware
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed max-w-4xl">
                Many retail dealer booths utilize low-spec POS terminals with constrained RAM. We conducted extensive React Profiler audits to eliminate redundant re-renders and dramatically streamline asset delivery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] text-center space-y-1">
                  <span className="text-xs font-mono text-[#847F78] block">BUNDLE SIZE</span>
                  <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#C5A46D]">2.8MB → 1.1MB</span>
                  <span className="text-xs text-[#B8B2A7] block">Via Rollup manual chunks & tree-shaking</span>
                </div>
                <div className="p-5 rounded-xl bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] text-center space-y-1">
                  <span className="text-xs font-mono text-[#847F78] block">LIST RENDERING</span>
                  <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#C5A46D]">Virtualized</span>
                  <span className="text-xs text-[#B8B2A7] block">10,000+ item tables rendered smoothly</span>
                </div>
                <div className="p-5 rounded-xl bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] text-center space-y-1">
                  <span className="text-xs font-mono text-[#847F78] block">FIRST CONTENTFUL PAINT</span>
                  <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#C5A46D]">0.8s</span>
                  <span className="text-xs text-[#B8B2A7] block">Over 3G and cellular networks</span>
                </div>
              </div>
            </div>
          )}

          {activeDomain === 'resilience' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest font-semibold">
                  Observability & Telemetry · Fault Tolerance
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#EAE6DF]">
                  Proactive Sentry Telemetry & Boundary Recovery
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed max-w-4xl">
                Constructed granular React Error Boundaries around independent dashboard widgets. If one peripheral payment provider or third-party service fails, the remainder of the POS terminal continues operating without taking down the entire application.
              </p>

              <div className="p-5 rounded-xl bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] space-y-2">
                <h4 className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-bold">
                  Telemetry Stack & Redaction:
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed">
                  Real-time error tracking with Sentry with user-session replay redaction (ensuring zero PII or sensitive payment credentials leak), coupled with custom Prometheus metrics tracking network latency and API error spikes.
                </p>
              </div>
            </div>
          )}

          {activeDomain === 'standards' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-widest font-semibold">
                  Engineering Standards · Team Alignment
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#EAE6DF]">
                  Automated CI/CD Hygiene & Strict Type Guardrails
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed max-w-4xl">
                Elevated developer velocity across the frontend guild by establishing strict pre-commit hooks (Husky, lint-staged, commitlint), TypeScript strict mode, and automated PR review checks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] space-y-1">
                  <span className="font-mono text-xs text-[#C5A46D] block font-bold">
                    PRE-COMMIT AUTOMATION
                  </span>
                  <p className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed">
                    Husky prevents any untyped code or ESLint violations from reaching GitHub.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] space-y-1">
                  <span className="font-mono text-xs text-[#C5A46D] block font-bold">
                    DESIGN SYSTEM TOKENS
                  </span>
                  <p className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed">
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
