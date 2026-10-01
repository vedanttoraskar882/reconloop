import React from 'react';
import { 
  Building, 
  Store, 
  ShieldAlert, 
  TrendingUp, 
  UserCheck2, 
  FileSpreadsheet, 
  CheckCircle, 
  Server, 
  MinusCircle 
} from 'lucide-react';

export const MarketSection: React.FC = () => {
  const targets = [
    {
      id: 1,
      title: 'SME Finance & Commercial Reporting Teams',
      icon: Building,
      description:
        'Businesses with approximately 20–500 employees running recurring monthly or quarterly reporting cycles across multiple operational and financial systems.',
      highlight: '20–500 Employees'
    },
    {
      id: 2,
      title: 'Multi-Site & Multi-Brand Operators',
      icon: Store,
      description:
        'Retail, hospitality, franchise and distributed organisations consolidating performance, stock, revenue and cost metrics across multiple locations or operating brands.',
      highlight: 'Multi-Location Data'
    },
    {
      id: 3,
      title: 'Businesses Under External Scrutiny',
      icon: ShieldAlert,
      description:
        'Organisations required to demonstrate rigorous internal reporting controls and data provenance to lenders, investors, franchisors, larger enterprise customers or due-diligence teams.',
      highlight: 'Lenders & Investors'
    },
    {
      id: 4,
      title: 'Growing Businesses Outgrowing Spreadsheets',
      icon: TrendingUp,
      description:
        'Companies rapidly adding new CRM systems, modern cloud accounting platforms, e-commerce stores and specialised operational tools where manual spreadsheet cross-checking has become brittle.',
      highlight: 'Multi-System Complexity'
    },
    {
      id: 5,
      title: 'Businesses Changing Finance Leadership',
      icon: UserCheck2,
      description:
        'Organisations where an incoming Finance Director, Financial Controller or Head of Reporting wants immediate, transparent evidence around inherited numbers and reconciliation processes.',
      highlight: 'Leadership Transition'
    }
  ];

  return (
    <section id="market" className="py-24 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            Target Audience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
            Built for Growing UK Businesses That Have Outgrown Manual Reconciliation
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
            Whether managing multi-location trading, satisfying bank covenant reporting, or streamlining month-end closing, ReconLoop brings structure to fragmented numbers.
          </p>
        </div>

        {/* 5 Target Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-24">
          {targets.map((target, idx) => {
            const Icon = target.icon;
            return (
              <div
                key={target.id}
                className={`bg-slate-50/70 rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-brand-300 hover:bg-white hover:shadow-soft-lg transition-all flex flex-col justify-between ${
                  idx === 0 ? 'lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 text-navy-900 flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-brand-900 bg-brand-100 border border-brand-200 px-3 py-1 rounded-full">
                      {target.highlight}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 mb-3">
                    {target.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {target.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Market Positioning Comparison */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-md">
              Strategic Landscape
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 mt-3">
              Where ReconLoop Fits in the Market
            </h3>
            <p className="text-base sm:text-lg text-slate-700 mt-3 font-normal">
              The market already includes established enterprise reconciliation and data-observability platforms, while ReconLoop is positioned specifically around SME reporting workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* LEFT: Manual Excel Reconciliation */}
            <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-9 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-500">
                  <FileSpreadsheet className="w-5 h-5 text-slate-600" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">Traditional Method</span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2">Manual Excel Reconciliation</h4>
                <p className="text-sm text-slate-500 mb-7 font-medium">
                  VLOOKUPs, manual copy-pasting, and last-minute discrepancy hunting.
                </p>

                <ul className="space-y-4 text-sm sm:text-base text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>Low initial financial cost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MinusCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>High manual workload every cycle</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MinusCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Heavily person-dependent & knowledge siloed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MinusCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Difficult to scale as systems multiply</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MinusCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>Limited independent evidence trail</span>
                  </li>
                </ul>
              </div>

              <div className="mt-9 pt-5 border-t border-slate-200 text-xs sm:text-sm text-slate-500 text-center font-medium">
                High operational friction & hidden risk
              </div>
            </div>

            {/* CENTRE: ReconLoop (Promoted) */}
            <div className="bg-navy-900 text-white rounded-3xl p-8 sm:p-9 border-2 border-brand-500 shadow-soft-lg flex flex-col justify-between relative transform lg:-translate-y-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-md">
                SME Focused
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-brand-400">
                  <CheckCircle className="w-5 h-5 text-brand-400" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">The Sweet Spot</span>
                </div>
                <h4 className="text-2xl font-extrabold text-white mb-2">ReconLoop</h4>
                <p className="text-sm text-slate-300 mb-7 font-medium">
                  Automated verification built specifically for SME finance and operations workflows.
                </p>

                <ul className="space-y-4 text-sm sm:text-base text-slate-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span className="font-bold text-white">SME-focused architecture</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span>Guided configuration without SQL/code</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span>Reusable reconciliation rules across cycles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span>Structured reporting-cycle workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                    <span className="font-bold text-white">Timestamped Integrity Certificate</span>
                  </li>
                </ul>
              </div>

              <div className="mt-9 pt-5 border-t border-slate-800 text-xs sm:text-sm text-brand-300 text-center font-bold">
                Accessible, repeatable data governance
              </div>
            </div>

            {/* RIGHT: Enterprise Platforms */}
            <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-9 border border-slate-200 shadow-soft flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2 text-slate-500">
                  <Server className="w-5 h-5 text-slate-600" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600">Enterprise Tools</span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-2">Enterprise Platforms</h4>
                <p className="text-sm text-slate-500 mb-7 font-medium">
                  Heavy data observability & large-scale corporate reconciliation software.
                </p>

                <ul className="space-y-4 text-sm sm:text-base text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>High technical depth & deep telemetry</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>Larger implementation requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>Designed primarily for large data-engineering teams</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>Substantial ongoing administrative overhead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>Often disproportionate for mid-market needs</span>
                  </li>
                </ul>
              </div>

              <div className="mt-9 pt-5 border-t border-slate-200 text-xs sm:text-sm text-slate-500 text-center font-medium">
                Over-engineered for standard SME closing cycles
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
