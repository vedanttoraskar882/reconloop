import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PilotForm } from './PilotForm';

export const PilotSection: React.FC = () => {
  return (
    <section id="pilot" className="py-24 sm:py-28 bg-gradient-to-b from-white to-slate-100/90 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-navy-900 rounded-3xl text-white p-8 sm:p-12 lg:p-16 shadow-soft-lg overflow-hidden relative border border-slate-800">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-400/15 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            
            {/* Left Column: Value proposition and Final CTA Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-950/90 border border-brand-700/70 text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                Customer Validation & Early Access
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Know Your Numbers Are Ready Before You Send Them.
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal">
                Explore how ReconLoop could help your team identify reporting inconsistencies earlier, create a clearer exception-resolution process and build a documented integrity trail for recurring reporting cycles.
              </p>

              <div className="pt-4 space-y-3.5">
                <div className="flex items-center gap-3 text-base sm:text-lg text-slate-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                  <span>Purpose-built for UK SME finance & reporting controllers</span>
                </div>
                <div className="flex items-center gap-3 text-base sm:text-lg text-slate-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                  <span>Read-only connectors with zero operational write-backs</span>
                </div>
                <div className="flex items-center gap-3 text-base sm:text-lg text-slate-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
                  <span>Structured Integrity Certificate at every reporting close</span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Request a Pilot Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-7 sm:p-9 text-slate-900 shadow-2xl border border-slate-200">
              <div className="mb-6 pb-4 border-b border-slate-150">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                  Request a Pilot
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-1 font-medium">
                  Fill in your details below to register interest in the pilot programme.
                </p>
              </div>

              <PilotForm isModal={false} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
