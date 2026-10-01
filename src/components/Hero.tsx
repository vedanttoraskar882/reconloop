import React from 'react';
import { ArrowRight, Shield, Eye, Cpu, Award } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onRequestPilot: () => void;
  onSeeHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot, onSeeHowItWorks }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-100/90 via-sky-50/40 to-slate-100/80 bg-grid-pattern">
      {/* Background ambient lighting */}
      <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-brand-100/30 via-transparent to-transparent pointer-events-none -z-10" />
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header & Value Proposition */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-slate-200 text-navy-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-600 animate-pulse"></span>
            DATA INTEGRITY FOR SME REPORTING
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.12] mb-6">
            Catch Reporting Errors Before They Leave Your Business.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
            ReconLoop automatically reconciles commercial, financial and operational data across your existing systems, flags inconsistencies before reporting deadlines and creates a timestamped Integrity Certificate when your reporting cycle has passed its configured checks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={onRequestPilot}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-navy-900 hover:bg-brand-800 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-5 h-5 text-brand-300" />
            </button>

            <button
              onClick={onSeeHowItWorks}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold text-base sm:text-lg px-7 py-4 rounded-xl border border-slate-300 shadow-xs hover:border-slate-400 transition-all"
            >
              <span>See How It Works</span>
            </button>
          </div>

          {/* Value Points Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 max-w-4xl mx-auto text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <Eye className="w-5 h-5 text-brand-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">Read-Only Connections</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <Cpu className="w-5 h-5 text-brand-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">Automated Reconciliation</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <Shield className="w-5 h-5 text-brand-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">Exception Detection</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <Award className="w-5 h-5 text-brand-600 shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">Integrity Certificates</span>
            </div>
          </div>

          {/* Clarification banner */}
          <div className="mt-5 text-sm font-medium text-slate-600">
            Catch inconsistencies before reports are submitted — without heavy enterprise engineering overhead.
          </div>
        </div>

        {/* Hero Interactive Dashboard Visual */}
        <HeroVisual />
      </div>
    </section>
  );
};
