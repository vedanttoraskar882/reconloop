import React, { useState } from 'react';
import { 
  Plug, 
  GitBranch, 
  CheckCheck, 
  AlertCircle, 
  FileCheck, 
  ShieldCheck, 
  Info,
  ChevronRight
} from 'lucide-react';

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: '01',
      id: 1,
      title: 'Connect',
      icon: Plug,
      summary: 'Read-only access & uploads',
      description:
        'Connect the business systems contributing information to the reporting cycle using read-only connectors or structured data uploads.',
      deliverable: 'Secure read-only mapping established'
    },
    {
      number: '02',
      id: 2,
      title: 'Baseline',
      icon: GitBranch,
      summary: 'Snapshot & prior comparison',
      description:
        'ReconLoop captures the reporting-cycle dataset and establishes the relevant comparison baseline.',
      deliverable: 'Approved cycle reference locked'
    },
    {
      number: '03',
      id: 3,
      title: 'Reconcile',
      icon: CheckCheck,
      summary: 'Automated multi-system cross-checks',
      description:
        'Records, totals and key metrics are checked across connected systems and against configured reconciliation rules.',
      deliverable: 'Validation rules evaluated across tables'
    },
    {
      number: '04',
      id: 4,
      title: 'Resolve',
      icon: AlertCircle,
      summary: 'Variance review & sign-off',
      description:
        'Variances outside defined tolerances are surfaced as exceptions for investigation, resolution or formal acceptance.',
      deliverable: 'Exceptions routed to designated owners'
    },
    {
      number: '05',
      id: 5,
      title: 'Certify',
      icon: FileCheck,
      summary: 'Timestamped evidence generated',
      description:
        'Once the required checks have been completed, ReconLoop generates a timestamped Integrity Certificate documenting the reporting-cycle checks and outcomes.',
      deliverable: 'Auditable certification pack issued'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            5-Step Operational Flow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
            From Disconnected Systems to Verified Reporting in Five Steps
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
            A repeatable cycle structure that transforms hurried month-end spreadsheet cross-checks into an orderly, evidence-backed workflow.
          </p>
        </div>

        {/* Desktop Horizontal Workflow */}
        <div className="hidden lg:block mb-20">
          {/* Progress bar line */}
          <div className="relative mb-10">
            <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-slate-200 -translate-y-1/2 z-0 rounded-full" />
            <div 
              className="absolute top-1/2 left-0 h-1.5 bg-brand-600 -translate-y-1/2 transition-all duration-500 z-0 rounded-full"
              style={{ width: `${((activeStep - 1) / 4) * 100}%` }}
            />
            
            <div className="relative z-10 flex justify-between">
              {steps.map((step) => {
                const Icon = step.icon;
                const isCurrent = activeStep === step.id;
                const isPassed = activeStep >= step.id;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-base transition-all duration-300 ${
                        isCurrent
                          ? 'bg-navy-900 text-white shadow-soft-lg scale-110 ring-4 ring-brand-200'
                          : isPassed
                          ? 'bg-brand-600 text-white shadow-xs'
                          : 'bg-white text-slate-400 border-2 border-slate-300 group-hover:border-slate-400'
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="mt-4 text-xs font-mono font-bold text-slate-500 uppercase tracking-wider group-hover:text-slate-700">
                      Step {step.number}
                    </span>
                    <span className={`text-base font-extrabold mt-0.5 ${isCurrent ? 'text-navy-900' : 'text-slate-600'}`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card */}
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-soft-lg transition-all duration-300">
            {steps
              .filter((s) => s.id === activeStep)
              .map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="grid grid-cols-12 gap-10 items-center">
                    <div className="col-span-8 space-y-5">
                      <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-brand-800 bg-brand-50 border border-brand-200 px-3 py-1.5 rounded-lg">
                        <span>STAGE {step.number} OF 05</span>
                        <span>•</span>
                        <span>{step.summary}</span>
                      </div>
                      <h3 className="text-3xl font-extrabold text-navy-900">
                        {step.title}
                      </h3>
                      <p className="text-lg text-slate-700 leading-relaxed max-w-2xl font-normal">
                        {step.description}
                      </p>
                      <div className="pt-2 flex items-center gap-2.5 text-sm sm:text-base font-bold text-emerald-800">
                        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>Key Outcome: {step.deliverable}</span>
                      </div>
                    </div>

                    <div className="col-span-4 bg-slate-50 p-7 rounded-2xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-navy-900 text-brand-400 flex items-center justify-center shadow-xs">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Reconciliation Step</div>
                          <div className="text-base font-bold text-navy-900">{step.title} Workflow</div>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        Structured controls eliminate last-minute scrambles and unclear responsibility.
                      </p>
                      <div className="flex items-center justify-between text-sm pt-4 border-t border-slate-200 font-semibold">
                        <span className="text-slate-500">Step {step.id} of 5</span>
                        <button
                          onClick={() => setActiveStep(activeStep < 5 ? activeStep + 1 : 1)}
                          className="inline-flex items-center gap-1.5 text-brand-700 hover:text-brand-900"
                        >
                          <span>{activeStep < 5 ? 'Next Step' : 'Cycle Again'}</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Steps Layout */}
        <div className="lg:hidden space-y-5 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-start gap-4 mb-3.5">
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-brand-300 flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-brand-700 uppercase tracking-wider">
                      Step {step.number} • {step.summary}
                    </span>
                    <h3 className="text-lg font-bold text-navy-900 mt-0.5">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-emerald-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* IMPORTANT DATA ARCHITECTURE MESSAGE */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-soft-lg">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5">
              <Info className="w-4 h-4 text-brand-400" />
              Reporting Architecture
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 text-white">
              Designed Around Reporting Cycles, Not Continuous Data Replication
            </h3>
            
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed mb-5 font-normal">
              ReconLoop is intended to work primarily with discrete reporting-cycle snapshots rather than maintaining a continuously synchronised copy of every customer's live operational data.
            </p>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The working cycle data can be used during reconciliation while the resulting certificate and relevant exception history form the longer-term reporting record.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
