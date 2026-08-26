import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { AlertTriangle, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const LEGACY_ITEMS = [
  { label: 'Monolithic MeteorJS Runtime', note: 'Blocking DDP subscriptions & tight server-client coupling.' },
  { label: 'React Class Components', note: 'Lifecycle confusion, state drift, and uncollected memory leaks.' },
  { label: 'Untyped JavaScript', note: 'Frequent runtime crashes and undefined-is-not-a-function errors.' },
  { label: 'Monolithic Single Bundles', note: '4s+ initial parse and load overhead on low-RAM POS hardware.' },
];

const MODERN_ITEMS = [
  { label: 'Modular React 19 + Custom Hooks', note: 'Isolated side-effects, concurrent rendering, and clean domain boundaries.' },
  { label: 'Strict TypeScript Strict Mode', note: '100% compile-time type safety, discriminated unions, and contract safety.' },
  { label: 'Vite + Modern ESM Build', note: 'Sub-second HMR, automated chunk-splitting, and Rollup tree-shaking.' },
  { label: 'TanStack Query & Resilient Cache', note: 'Declarative server-state caching, background revalidation, and optimistic UI.' },
];

export const OldSystems: React.FC = () => {
  return (
    <section id="old-systems" className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="03"
          category="Architectural Evolution & Modernization"
          headline="THE OLD SYSTEMS"
          subheadline="Modernization is not about destroying the past — it is about systematically transforming legacy complexity into disciplined, high-performance architecture."
        />

        {/* Explicit Enterprise Context Tag */}
        <div className="flex justify-center mb-8 sm:mb-10 px-2">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-[#141519] border border-[#C5A46D]/35 text-[10px] sm:text-xs font-mono text-[#C5A46D] tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(197,164,109,0.12)] text-center max-w-full leading-relaxed">
            <span>[ CASE STUDY CONTEXT: MTN IRANCELL // DIGITAL POS PLATFORM // 40M+ SUBSCRIBERS ]</span>
          </div>
        </div>

        {/* Clean Modernization Blueprint */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch mb-10">

            {/* Left Card: Legacy Architecture */}
            <div className="gothic-card p-6 sm:p-7 rounded-2xl border-[#8C2F39]/30 bg-[#141519]/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#8C2F39]/25">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#8C2F39]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#8C2F39] font-bold">
                      Legacy Architecture
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#8C2F39]/15 text-[#EAE6DF] border border-[#8C2F39]/30">
                    Pre-Modernization
                  </span>
                </div>

                <div className="space-y-4">
                  {LEGACY_ITEMS.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-sm font-semibold text-[#EAE6DF] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8C2F39] shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed pl-3.5">
                        {item.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#8C2F39]/20 flex items-center justify-between text-xs font-mono text-[#847F78]">
                <span>Status: Deprecated & Migrated</span>
                <span className="text-[#8C2F39]">High Maintenance</span>
              </div>
            </div>

            {/* Center Bridge: Glowing Transition Indicator */}
            <div className="flex flex-col items-center justify-center gap-3 py-4 lg:py-0">
              <div className="w-12 h-12 rounded-full bg-[#17181C] border-2 border-[#C5A46D] flex items-center justify-center text-[#C5A46D] shadow-[0_0_20px_rgba(197,164,109,0.35)]">
                <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
              </div>
              <div className="text-center hidden lg:block">
                <span className="font-mono text-[10px] text-[#C5A46D] tracking-widest uppercase block font-semibold">
                  Strangler
                </span>
                <span className="font-mono text-[9px] text-[#847F78] uppercase tracking-wider block mt-0.5">
                  Pattern
                </span>
              </div>
            </div>

            {/* Right Card: Modernized Architecture */}
            <div className="gothic-card p-6 sm:p-7 rounded-2xl border-[#C5A46D]/35 bg-[#141519]/90 flex flex-col justify-between shadow-[0_0_25px_rgba(197,164,109,0.08)]">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#C5A46D]/25">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C5A46D]" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#C5A46D] font-bold">
                      Modernized Architecture
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#C5A46D]/15 text-[#EAE6DF] border border-[#C5A46D]/30">
                    Production Standard
                  </span>
                </div>

                <div className="space-y-4">
                  {MODERN_ITEMS.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-sm font-semibold text-[#EAE6DF] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D] shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <div className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed pl-3.5">
                        {item.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C5A46D]/20 flex items-center justify-between text-xs font-mono text-[#847F78]">
                <span>Status: Active Production</span>
                <span className="text-emerald-400 font-semibold">Zero Downtime</span>
              </div>
            </div>
          </div>

          {/* Code Transformation Illustration */}
          <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/25 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#C5A46D] block mb-1 font-semibold">
                  Code Modernization Blueprint
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-[#EAE6DF]">
                  MTN Irancell POS Modernization: From class lifecycle coupling to type-safe functional architecture
                </h3>
              </div>
              <span className="text-xs font-mono text-[#847F78]">Refactored for 40M+ platform</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Legacy code */}
              <div className="p-4 rounded-xl bg-[#0D0D10]/95 border border-[#8C2F39]/35 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#8C2F39]/25">
                  <span className="font-mono text-xs text-[#8C2F39] uppercase tracking-wider font-semibold">
                    Legacy · Meteor + Class
                  </span>
                  <span className="text-xs font-mono text-[#847F78]">Untyped</span>
                </div>
                <pre className="font-mono text-xs text-[#B8B2A7] overflow-x-auto leading-relaxed pt-1">
{`class PosTerminal extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      Meteor.call('syncPos', {
        id: nextProps.user.id
      }, (err, res) => {
        if (!err) this.setState({ data: res });
      });
    }
  }
  // Risk of memory leaks & null derefs
}`}
                </pre>
              </div>

              {/* Modern code */}
              <div className="p-4 rounded-xl bg-[#0D0D10]/95 border border-[#C5A46D]/35 space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-[#C5A46D]/25">
                  <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-semibold">
                    Modern · React 19 + TypeScript
                  </span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">Strict TS</span>
                </div>
                <pre className="font-mono text-xs text-[#EAE6DF] overflow-x-auto leading-relaxed pt-1">
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

          {/* Bottom Takeaway Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-[#17181C] border border-[#C5A46D]/30 shadow-[0_0_20px_rgba(197,164,109,0.08)] flex items-start gap-4">
            <div className="w-9 h-9 rounded-lg bg-[#0D0D0F] border border-[#C5A46D]/30 flex items-center justify-center text-[#C5A46D] shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[11px] text-[#C5A46D] uppercase tracking-wider font-semibold block">
                Architectural Principle
              </span>
              <p className="text-sm sm:text-base text-[#EAE6DF] font-medium leading-relaxed">
                Prefer incremental migration over risky rewrites: The Strangler Fig pattern modernizes core business capabilities while keeping production running with zero downtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
