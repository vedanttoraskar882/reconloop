import React from 'react';
import { Check, ArrowRight, Layers, FileCode2, Users2, SlidersHorizontal, CheckCircle2 } from 'lucide-react';

interface PricingProps {
  onRequestPilot: (tierName?: string) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onRequestPilot }) => {
  return (
    <section id="pricing" className="py-24 sm:py-28 bg-gradient-to-b from-slate-100/90 via-sky-50/25 to-slate-100/90 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            Commercial Tiers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
            Simple Plans Designed Around Your Reporting Environment
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
            Aligned with your number of connected systems, closing cycle cadence and organisational complexity.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          
          {/* Card 1: Starter */}
          <div className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-brand-200 transition-all flex flex-col justify-between">
            <div>
              <div className="mb-5 pb-4 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                  Starter Tier
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">Starter</h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
                  Best for: Single-department reporting teams.
                </p>
              </div>

              <div className="my-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                  Pilot / Launch Pricing
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium">
                  Contact us for tailored pilot onboarding
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
                  Plan includes:
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Single-department deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Core reconciliation workflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Connected-system support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Reporting-cycle checks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Exception detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-900">Integrity Certificate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Reporting-cycle history</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-9 pt-6 border-t border-slate-100">
              <button
                onClick={() => onRequestPilot('Starter')}
                className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-brand-800 text-white font-bold text-base py-3.5 px-5 rounded-xl shadow-sm hover:shadow transition-all"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-brand-300" />
              </button>
            </div>
          </div>

          {/* Card 2: Growth (Featured) */}
          <div className="bg-gradient-to-b from-brand-50/70 via-white to-white rounded-3xl p-8 sm:p-9 border-2 border-brand-500 shadow-soft-lg transition-all flex flex-col justify-between relative transform lg:-translate-y-2">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-5 rounded-full shadow-md">
              Most Suitable for Growing Teams
            </div>

            <div>
              <div className="mb-5 pb-4 border-b border-brand-100/70">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-700">
                  Growth Tier
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">Growth</h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
                  Best for: Multi-site, multi-brand or multi-department businesses.
                </p>
              </div>

              <div className="my-6 p-5 rounded-2xl bg-brand-50/90 border border-brand-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                  Contact Us
                </div>
                <div className="text-xs sm:text-sm text-brand-950 mt-1.5 font-medium">
                  Configured around your active cycle volume
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                  Everything in Starter, plus:
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-slate-800">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-navy-900">Multi-system reconciliation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span>Multiple reporting workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span>Multi-site / multi-brand use</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span>Advanced reconciliation configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span>Exception routing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span>Variance trends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span className="font-semibold text-navy-900">Integrity Certificates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                    <span>Extended reporting history</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-9 pt-6 border-t border-brand-100">
              <button
                onClick={() => onRequestPilot('Growth')}
                className="w-full inline-flex items-center justify-center gap-2 bg-navy-900 hover:bg-brand-700 text-white font-bold text-base py-3.5 px-5 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4 text-brand-300" />
              </button>
            </div>
          </div>

          {/* Card 3: Enterprise */}
          <div className="bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 shadow-soft hover:shadow-soft-lg hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="mb-5 pb-4 border-b border-slate-100">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                  Enterprise Tier
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mt-1">Enterprise</h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
                  Best for: Mid-market organisations requiring additional configuration and support.
                </p>
              </div>

              <div className="my-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
                  Custom Pricing
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium">
                  Scoped to your infrastructure & reporting topology
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400">
                  Enterprise features:
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>SSO roadmap / enterprise capability</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom connectors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Higher data volumes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dedicated onboarding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Complex reconciliation environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Custom rules</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-9 pt-6 border-t border-slate-100">
              <button
                onClick={() => onRequestPilot('Enterprise')}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-navy-900 font-bold text-base py-3.5 px-5 rounded-xl border border-slate-300 transition-all hover:border-slate-400 shadow-2xs"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>
          </div>

        </div>

        {/* Pricing Model & Additional Commercial Services Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-soft-lg">
          <div className="max-w-5xl mx-auto">
            
            {/* Header */}
            <div className="border-b border-slate-150 pb-6 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
                <SlidersHorizontal className="w-3.5 h-3.5 text-brand-600" />
                Commercial Structure
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight mb-3">
                Pricing Model
              </h3>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                ReconLoop is designed around monthly or annual SaaS subscriptions, with commercial tiers based primarily on:
              </p>
            </div>

            {/* 3 Core Criteria Cards with clear readability */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/70 border border-slate-200/90 flex items-center gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Criteria 1</div>
                  <div className="text-base font-bold text-navy-900">Number of connected systems</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/70 border border-slate-200/90 flex items-center gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Criteria 2</div>
                  <div className="text-base font-bold text-navy-900">Reporting cycles per month</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/70 border border-slate-200/90 flex items-center gap-3.5 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Criteria 3</div>
                  <div className="text-base font-bold text-navy-900">Deployment complexity</div>
                </div>
              </div>
            </div>

            {/* Additional Commercial Services Section */}
            <div>
              <div className="mb-6">
                <h4 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight">
                  Additional Commercial Services
                </h4>
                <p className="text-sm sm:text-base text-slate-600 mt-1">
                  Optional specialised professional services and extension modules described in the business plan:
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Service 1 */}
                <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-brand-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-2xs">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h5 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                      Implementation & Rule Design
                    </h5>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                      Paid onboarding and configuration for organisations with more complex system environments.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-brand-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-2xs">
                      <Users2 className="w-5 h-5" />
                    </div>
                    <h5 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                      Accountancy Practice Programme
                    </h5>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                      Multi-client licensing and reconciliation workspaces for bookkeeping and accountancy practices.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-brand-300 transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-brand-700 flex items-center justify-center mb-4 shadow-2xs">
                      <FileCode2 className="w-5 h-5" />
                    </div>
                    <h5 className="text-base sm:text-lg font-bold text-navy-900 mb-2">
                      Certificate API Add-On
                    </h5>
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                      A paid future and additional capability allowing customers to expose certificate status within their own reporting environments.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
