import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { AlertTriangle, CheckCircle, ArrowDown } from 'lucide-react';

const LEGACY_ITEMS = [
  { label: 'MeteorJS Runtime', note: 'Blocking DDP subscriptions, monolithic coupling' },
  { label: 'React Class Components', note: 'Lifecycle chaos, memory leaks, prop-drilling' },
  { label: 'Untyped JavaScript', note: 'Runtime crashes, undefined is not a function' },
  { label: 'Monolithic Bundles', note: '4s+ initial load on low-spec POS hardware' },
];

const MODERN_ITEMS = [
  { label: 'React 19 + Functional Hooks', note: 'Clean data flow, isolated side effects, concurrent rendering' },
  { label: 'Strict TypeScript', note: '100% compile-time safety, discriminated unions, auto-generated API types' },
  { label: 'Vite + Modern Build', note: 'Sub-second HMR, Rollup tree-shaking, lightweight chunk splitting' },
  { label: 'TanStack Query', note: 'Resilient cache, background revalidation, optimistic UI' },
];

export const OldSystems: React.FC = () => {
  return (
    <section id="old-systems" className="py-28 md:py-40 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="03"
          category="The Old Systems"
          headline="THE TRANSFORMATION OF OLD SYSTEMS"
          subheadline="Modernization is not about destroying the past — it is about transforming legacy complexity into disciplined, high-performance architecture."
        />

        {/* Transformation view */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-start">

            {/* Legacy column */}
            <div className="gothic-card p-6 rounded-2xl border-[#8C2F39]/25">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[#8C2F39]/20">
                <AlertTriangle className="w-4 h-4 text-[#8C2F39]/70" />
                {/* LEVEL 3: Label */}
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#8C2F39]/60">
                  Legacy
                </span>
              </div>
              <div className="space-y-3">
                {LEGACY_ITEMS.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    {/* LEVEL 2: Item name */}
                    <div className="text-sm font-medium text-[#E5E0D8]/80">{item.label}</div>
                    <div className="text-xs text-[#5C5956] leading-relaxed">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transition arrow */}
            <div className="flex flex-col items-center justify-center gap-2 py-6 lg:py-0 lg:pt-16">
              <div className="w-8 h-8 rounded-full bg-[#17181C] border border-[#C5A46D]/30 flex items-center justify-center text-[#C5A46D]/60">
                <ArrowDown className="w-4 h-4 lg:rotate-[-90deg]" />
              </div>
              <span className="font-mono text-[9px] text-[#5C5956] tracking-[0.2em] uppercase hidden lg:block rotate-0">
                Modernized
              </span>
            </div>

            {/* Modern column */}
            <div className="gothic-card p-6 rounded-2xl border-[#C5A46D]/25">
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-[#C5A46D]/20">
                <CheckCircle className="w-4 h-4 text-[#C5A46D]/70" />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#C5A46D]/60">
                  Modern
                </span>
              </div>
              <div className="space-y-3">
                {MODERN_ITEMS.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-sm font-medium text-[#E5E0D8]">{item.label}</div>
                    <div className="text-xs text-[#9A9490] leading-relaxed">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code metamorphosis — kept as useful technical illustration */}
          <div className="mt-10 gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/20">
            <div className="mb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5956]">
                Code Transformation
              </span>
              <h3 className="text-lg font-semibold text-[#E5E0D8] mt-1">
                From class-based to functional architecture
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Legacy code */}
              <div className="p-4 rounded-xl bg-[#0D0D0F]/90 border border-[#8C2F39]/25">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#8C2F39]/20">
                  <span className="font-mono text-[9px] text-[#8C2F39]/70 uppercase tracking-[0.2em]">
                    Legacy · 2018
                  </span>
                  <span className="text-[9px] font-mono text-[#5C5956]">Untyped</span>
                </div>
                <pre className="font-mono text-xs text-[#5C5956] overflow-x-auto leading-relaxed">
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
  // Memory leaks & null derefs
}`}
                </pre>
              </div>

              {/* Modern code */}
              <div className="p-4 rounded-xl bg-[#0D0D0F]/90 border border-[#C5A46D]/20">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#C5A46D]/20">
                  <span className="font-mono text-[9px] text-[#C5A46D]/60 uppercase tracking-[0.2em]">
                    Modern · React 19 + TS
                  </span>
                  <span className="text-[9px] font-mono text-emerald-500/70">Strict TS</span>
                </div>
                <pre className="font-mono text-xs text-[#E5E0D8]/80 overflow-x-auto leading-relaxed">
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
        </div>
      </div>
    </section>
  );
};
