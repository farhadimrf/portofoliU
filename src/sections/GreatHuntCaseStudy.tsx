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
  ArrowRight,
  Sparkles,
  Cpu,
  Flame,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const GreatHuntCaseStudy: React.FC = () => {
  const [activeDomain, setActiveDomain] = useState<string>('architecture');
  const sectionRef = useRef<HTMLElement>(null);
  const bridgeArrowRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const DOMAIN_TABS = [
    { id: 'architecture', label: 'Architecture & Migration', icon: Layers },
    { id: 'state', label: 'State & Data Flow', icon: RefreshCcw },
    { id: 'performance', label: 'Performance & Vitals', icon: Zap },
    { id: 'resilience', label: 'Error Handling & Sentry', icon: Shield },
    { id: 'standards', label: 'CI/CD & Engineering Standards', icon: GitBranch },
  ];

  const ACCOMPLISHMENTS = [
    {
      num: '01',
      title: 'Strangler Fig Migration',
      highlight: 'Zero Downtime',
      desc: 'Seamlessly wrapped legacy MeteorJS monolith with modern Vite shell, migrating routes incrementally without disrupting 40M+ active subscriber transactions.',
      icon: Cpu,
    },
    {
      num: '02',
      title: 'POS Latency Reduction',
      highlight: '-58% Bundle Size',
      desc: 'Optimized rendering pipelines for low-RAM dealer POS hardware, eliminating freeze states and achieving silky 60fps virtualization for 10k+ SKU tables.',
      icon: Zap,
    },
    {
      num: '03',
      title: 'State & Error Telemetry',
      highlight: 'Granular Boundaries',
      desc: 'Constructed isolated error boundaries with Sentry user-session replay redaction (zero PII leaks) and idempotent retry queues on flaky network towers.',
      icon: Shield,
    },
    {
      num: '04',
      title: 'Engineering Standards',
      highlight: '6x Faster PRs',
      desc: 'Standardized frontend guild workflows via Husky pre-commit hooks, Lint-Staged, Commitlint, automated TypeScript strict CI, and Storybook token systems.',
      icon: GitBranch,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the central transition bridge with ScrollTrigger
      if (bridgeArrowRef.current) {
        gsap.fromTo(
          bridgeArrowRef.current,
          { scale: 0.85, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            scrollTrigger: {
              trigger: bridgeArrowRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      // Animate key accomplishments grid on scroll
      if (metricsRef.current) {
        gsap.from(metricsRef.current.children, {
          y: 30,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
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
    <section id="great-hunt" ref={sectionRef} className="py-28 md:py-40 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="05"
          category="Flagship Case Study"
          headline="THE GREAT HUNT"
          subheadline="Architectural modernization of the mission-critical Digital POS platform supporting a telecom ecosystem serving 40M+ subscribers."
        />

        {/* Prominent Scale Context Badge */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-[#141519] border border-[#C5A46D]/30 shadow-[0_0_20px_rgba(197,164,109,0.12)] text-xs font-mono text-[#C5A46D] tracking-wider uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A46D] animate-pulse shrink-0" />
            <span className="font-semibold text-[#E5E0D8]">
              Digital POS Platform
            </span>
            <span className="text-[#5C5956]">·</span>
            <span className="text-[#9A9490]">Telecom Ecosystem (40M+ Subscribers)</span>
          </div>
        </div>

        {/* Interactive Modernization Architecture Card (Split Comparison) */}
        <div className="mb-14 gothic-card p-6 sm:p-10 rounded-2xl border-[#C5A46D]/30 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#5C5956] block mb-1.5">
              System Transformation
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#E5E0D8]">
              From Monolithic Chaos to Modular Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
            {/* Left: Legacy Monolith */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#0D0D10]/90 border border-[#8C2F39]/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#8C2F39]/30">
                <div className="flex items-center gap-2 text-[#8C2F39]">
                  <Flame className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">
                    Legacy Monolith
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8C2F39]/20 text-[#E8E3D9] border border-[#8C2F39]/40">
                  Pre-Modernization
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-[#9E988F]">
                <div className="flex items-center gap-2 p-2 rounded bg-[#141519]/70 border border-[#2A1D22]">
                  <span className="text-[#8C2F39] font-mono font-bold">•</span>
                  <span className="text-[#E8E3D9]">MeteorJS Runtime:</span> Synchronous blocking DDP subscriptions.
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#141519]/70 border border-[#2A1D22]">
                  <span className="text-[#8C2F39] font-mono font-bold">•</span>
                  <span className="text-[#E8E3D9]">React Class Components:</span> Tangled lifecycle hooks & memory leaks.
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#141519]/70 border border-[#2A1D22]">
                  <span className="text-[#8C2F39] font-mono font-bold">•</span>
                  <span className="text-[#E8E3D9]">Monolithic Routing:</span> Coupled dealer business logic in single bundles.
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#141519]/70 border border-[#2A1D22]">
                  <span className="text-[#8C2F39] font-mono font-bold">•</span>
                  <span className="text-[#E8E3D9]">High Fragility:</span> Untyped JavaScript runtime crashes during transactions.
                </div>
              </div>
            </div>

            {/* Center: Glowing Transition Bridge */}
            <div className="lg:col-span-1 flex flex-col items-center justify-center my-2 lg:my-0">
              <div
                ref={bridgeArrowRef}
                className="w-12 h-12 rounded-full bg-[#141519] border-2 border-[#C5A46D] flex items-center justify-center text-[#C5A46D] shadow-[0_0_20px_rgba(197,164,109,0.35)]"
              >
                <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
              </div>
              <span className="font-mono text-[9px] text-[#C5A46D] tracking-widest uppercase mt-2 hidden lg:block">
                STRANGLER
              </span>
            </div>

            {/* Right: Modern Target Architecture */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#0D0D10]/90 border border-[#C5A46D]/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#C5A46D]/30">
                <div className="flex items-center gap-2 text-[#C5A46D]">
                  <Zap className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-widest font-bold">
                    Modern Target Architecture
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C5A46D]/20 text-[#E8E3D9] border border-[#C5A46D]/40">
                  Production Target
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-[#9E988F]">
                <div className="flex items-center gap-2 p-2 rounded bg-[#141519]/70 border border-[#252C28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span><strong className="text-[#E8E3D9]">React 19 & Vite:</strong> Sub-second HMR and automated code splitting.</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#141519]/70 border border-[#252C28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span><strong className="text-[#E8E3D9]">Strict TypeScript:</strong> 100% type guardrails and API contract safety.</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#141519]/70 border border-[#252C28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span><strong className="text-[#E8E3D9]">TanStack Query:</strong> Resilient caching, optimistic UI, & offline sync.</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded bg-[#141519]/70 border border-[#252C28]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span><strong className="text-[#E8E3D9]">Modular Design:</strong> Decoupled UI modules with independent lifecycles.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Key Accomplishments Grid */}
        <div ref={metricsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {ACCOMPLISHMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="gothic-card p-6 rounded-xl flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-cinzel text-xs font-bold text-[#C5A46D]">
                      ACCOMPLISHMENT {item.num}
                    </span>
                    <div className="w-7 h-7 rounded bg-[#0D0D10] border border-[#2A2B33] flex items-center justify-center text-[#C5A46D]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h4 className="font-cinzel text-base font-bold text-[#E8E3D9]">
                    {item.title}
                  </h4>

                  <span className="inline-block px-2.5 py-0.5 rounded bg-[#C5A46D]/15 border border-[#C5A46D]/30 text-xs font-mono text-[#C5A46D] font-semibold">
                    {item.highlight}
                  </span>

                  <p className="text-xs text-[#9E988F] leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Case Study Deep Dive Tabs */}
        <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/30">
          {/* Navigation Sub-Tabs */}
          <div className="flex flex-wrap gap-2 pb-6 border-b border-[#22232B] mb-8">
            {DOMAIN_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeDomain === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDomain(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-cinzel tracking-wider uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#C5A46D] text-[#0A0A0C] font-bold shadow-[0_0_15px_rgba(197,164,109,0.35)]'
                      : 'bg-[#0D0D10] text-[#9E988F] hover:text-[#E8E3D9] border border-[#22232B]'
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
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E8E3D9]">
                  Zero-Downtime Incremental Modernization
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9E988F] leading-relaxed">
                Rather than embarking on a high-risk "big bang" rewrite that would jeopardize millions of daily retail transactions, we instituted a strict Strangler Fig modernization pattern. We wrapped the legacy MeteorJS monolithic runtime inside a Vite-powered modern shell that seamlessly intercepted routes and shared authentication sessions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#0D0D10]/80 border border-[#22232B] space-y-2">
                  <h4 className="font-cinzel text-sm font-semibold text-[#E8E3D9] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#C5A46D]" /> Route Isolation & Bridging
                  </h4>
                  <p className="text-xs text-[#9E988F] leading-relaxed">
                    Legacy Meteor templates and modern React 19 pages coexisted under a unified history proxy, allowing individual dealer workflows (SIM activation, bill payments, package recharge) to be migrated one by one.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-[#0D0D10]/80 border border-[#22232B] space-y-2">
                  <h4 className="font-cinzel text-sm font-semibold text-[#E8E3D9] flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#C5A46D]" /> Strict Module Boundaries
                  </h4>
                  <p className="text-xs text-[#9E988F] leading-relaxed">
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
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E8E3D9]">
                  Separation of Server Cache & Client UI State
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9E988F] leading-relaxed">
                Replaced unorganized global Redux boilerplate with a clear duality: TanStack Query manages asynchronous server state, automated background revalidation, and caching, while Redux Toolkit / Zustand strictly manages local UI state.
              </p>

              <div className="p-4 rounded-lg bg-[#0D0D10]/80 border border-[#22232B] space-y-3">
                <h4 className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-semibold">
                  Key State Architecture Highlights:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#9E988F]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong>Optimistic UI Updates:</strong> Immediate UI feedback on transaction creation with automated rollback on server rejection.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                    <span><strong>Idempotency Keys:</strong> Every mutation request sends a UUID key to prevent duplicate charges caused by unstable mobile connections.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
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
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E8E3D9]">
                  58% Bundle Reduction & 60fps on POS Hardware
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9E988F] leading-relaxed">
                Many retail dealer booths utilize low-spec POS terminals with constrained RAM. We conducted extensive React Profiler audits to eliminate redundant re-renders and dramatically streamline asset delivery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-[#0D0D10]/80 border border-[#22232B] text-center">
                  <span className="text-xs font-mono text-[#9E988F] block mb-1">BUNDLE SIZE</span>
                  <span className="font-cinzel text-xl font-bold text-[#C5A46D]">2.8MB → 1.1MB</span>
                  <span className="text-[11px] text-[#9E988F] block mt-1">Via Rollup manual chunks & tree-shaking</span>
                </div>
                <div className="p-4 rounded-lg bg-[#0D0D10]/80 border border-[#22232B] text-center">
                  <span className="text-xs font-mono text-[#9E988F] block mb-1">LIST RENDERING</span>
                  <span className="font-cinzel text-xl font-bold text-[#C5A46D]">Virtualized</span>
                  <span className="text-[11px] text-[#9E988F] block mt-1">10,000+ item tables rendered smoothly</span>
                </div>
                <div className="p-4 rounded-lg bg-[#0D0D10]/80 border border-[#22232B] text-center">
                  <span className="text-xs font-mono text-[#9E988F] block mb-1">FIRST CONTENTFUL PAINT</span>
                  <span className="font-cinzel text-xl font-bold text-[#C5A46D]">0.8s</span>
                  <span className="text-[11px] text-[#9E988F] block mt-1">Over 3G and cellular networks</span>
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
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E8E3D9]">
                  Proactive Sentry Telemetry & Boundary Recovery
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9E988F] leading-relaxed">
                Constructed granular React Error Boundaries around independent dashboard widgets. If one peripheral payment provider or third-party service fails, the remainder of the POS terminal continues operating without taking down the entire application.
              </p>

              <div className="p-4 rounded-lg bg-[#0D0D10]/80 border border-[#22232B] space-y-2">
                <h4 className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-semibold">
                  Telemetry Stack:
                </h4>
                <p className="text-xs sm:text-sm text-[#9E988F] leading-relaxed">
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
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E8E3D9]">
                  Automated CI/CD Hygiene & Strict Type Guardrails
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#9E988F] leading-relaxed">
                Elevated developer velocity across the frontend guild by establishing strict pre-commit hooks (Husky, lint-staged, commitlint), TypeScript strict mode, and automated PR review checks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#0D0D10]/80 border border-[#22232B]">
                  <span className="font-mono text-xs text-[#C5A46D] block mb-1 font-semibold">
                    PRE-COMMIT AUTOMATION
                  </span>
                  <p className="text-xs text-[#9E988F]">
                    Husky prevents any untyped code or ESLint violations from reaching GitHub.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[#0D0D10]/80 border border-[#22232B]">
                  <span className="font-mono text-xs text-[#C5A46D] block mb-1 font-semibold">
                    COMPONENT STORYBOOK
                  </span>
                  <p className="text-xs text-[#9E988F]">
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
