import React from 'react';
import { 
  XCircle, 
  CheckCircle, 
  ArrowDown, 
  AlertTriangle, 
  ShieldCheck, 
  UserCheck
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-28 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            The Reporting Dilemma
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-6">
            Reliable Reporting Starts Before the Report Is Sent.
          </h2>
          <div className="space-y-4 text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
            <p>
              Growing SMEs increasingly store the same commercial and financial information across multiple systems. A CRM may hold customer and pipeline records, accounting software may hold invoices and revenue, operational systems may hold stock or delivery data, while spreadsheets are often used to bring everything together for management reporting.
            </p>
            <p>
              Every month or quarter, someone must manually compare these numbers before submitting reports. When systems disagree, analysts often have to find the cause manually and under deadline pressure.
            </p>
            <p className="font-bold text-navy-900 text-lg sm:text-xl lg:text-2xl pt-1">
              ReconLoop automates this last-mile reconciliation process.
            </p>
          </div>
        </div>

        {/* Visual Comparison: Without vs With ReconLoop */}
        <div className="mb-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 mb-8">
            Comparing the Reporting Workflow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* WITHOUT RECONLOOP */}
            <div className="p-7 sm:p-9 rounded-3xl border border-rose-200/90 bg-white shadow-soft relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-rose-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                      <XCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">WITHOUT RECONLOOP</h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium">Traditional manual closing cycle</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-rose-700 bg-rose-100 px-3 py-1 rounded-full">
                    High Risk & Effort
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-base font-bold flex items-center gap-3.5 shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-800 text-xs font-extrabold flex items-center justify-center shrink-0">1</span>
                    <span>Disconnected systems</span>
                  </div>
                  
                  <div className="flex justify-center text-rose-400 py-0.5">
                    <ArrowDown className="w-5 h-5" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-base font-bold flex items-center gap-3.5 shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-800 text-xs font-extrabold flex items-center justify-center shrink-0">2</span>
                    <span>Manual Excel checks</span>
                  </div>

                  <div className="flex justify-center text-rose-400 py-0.5">
                    <ArrowDown className="w-5 h-5" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 text-slate-900 text-base font-bold flex items-center gap-3.5 shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-rose-100 text-rose-800 text-xs font-extrabold flex items-center justify-center shrink-0">3</span>
                    <span>Last-minute discrepancies</span>
                  </div>

                  <div className="flex justify-center text-rose-400 py-0.5">
                    <ArrowDown className="w-5 h-5" />
                  </div>

                  <div className="p-4 rounded-xl bg-rose-50 border-2 border-rose-300 text-rose-950 text-base font-extrabold flex items-center gap-3.5 shadow-xs">
                    <AlertTriangle className="w-6 h-6 text-rose-600 shrink-0" />
                    <span>Reporting risk & unverified outputs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* WITH RECONLOOP */}
            <div className="p-7 sm:p-9 rounded-3xl border-2 border-emerald-400 bg-white shadow-soft-lg relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-emerald-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                      <CheckCircle className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">WITH RECONLOOP</h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium">Automated integrity workflow</p>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-100 px-3 py-1 rounded-full">
                    Controlled & Certified
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 text-slate-900 text-base font-bold flex items-center gap-3.5 shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-emerald-200 text-emerald-900 text-xs font-extrabold flex items-center justify-center shrink-0">1</span>
                    <span>Connected systems (read-only)</span>
                  </div>
                  
                  <div className="flex justify-center text-emerald-500 py-0.5">
                    <ArrowDown className="w-5 h-5" />
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 text-slate-900 text-base font-bold flex items-center gap-3.5 shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-emerald-200 text-emerald-900 text-xs font-extrabold flex items-center justify-center shrink-0">2</span>
                    <span>Automated checks & baseline comparisons</span>
                  </div>

                  <div className="flex justify-center text-emerald-500 py-0.5">
                    <ArrowDown className="w-5 h-5" />
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 text-slate-900 text-base font-bold flex items-center gap-3.5 shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-emerald-200 text-emerald-900 text-xs font-extrabold flex items-center justify-center shrink-0">3</span>
                    <span>Exceptions identified & routed</span>
                  </div>

                  <div className="flex justify-center text-emerald-500 py-0.5">
                    <ArrowDown className="w-5 h-5" />
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/40 border border-emerald-200 text-slate-900 text-base font-bold flex items-center gap-3.5 shadow-2xs">
                    <span className="w-7 h-7 rounded-full bg-emerald-200 text-emerald-900 text-xs font-extrabold flex items-center justify-center shrink-0">4</span>
                    <span>Issues resolved or signed off</span>
                  </div>

                  <div className="flex justify-center text-emerald-500 py-0.5">
                    <ArrowDown className="w-5 h-5" />
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-600 text-white text-base font-extrabold flex items-center gap-3.5 shadow-md">
                    <ShieldCheck className="w-6 h-6 text-emerald-200 shrink-0" />
                    <span>Timestamped Integrity Certificate</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Clear Positioning: What ReconLoop is NOT vs What It IS */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-soft-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500">
                Clear Scope & Purpose
              </h4>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
                What ReconLoop Is NOT
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                To maintain simplicity and prevent software bloat, ReconLoop focuses exclusively on reporting-cycle validation:
              </p>
              <ul className="space-y-3 text-base text-slate-800 pt-2 font-medium">
                <li className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Not a replacement for accounting software (e.g. Xero, Sage, QuickBooks)</span>
                </li>
                <li className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Not a replacement for your CRM or sales operations platform</span>
                </li>
                <li className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Not a Business Intelligence (BI) visualization tool or replacement for Power BI</span>
                </li>
                <li className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Not a complex data warehouse or big-data storage lake</span>
                </li>
                <li className="flex items-center gap-3">
                  <XCircle className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Not a heavyweight enterprise data-governance platform requiring full-time engineers</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-50/60 to-slate-50 border-2 border-brand-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-navy-900">Where ReconLoop Sits</h4>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-5 font-normal">
                ReconLoop sits between your existing systems and your final reporting process.
              </p>
              <div className="p-5 rounded-xl bg-white border border-brand-200 text-sm sm:text-base text-brand-950 font-semibold leading-relaxed shadow-2xs">
                Its specific role is to check whether the numbers being reported are internally consistent across systems before reports are delivered to leadership, board members, lenders or external parties.
              </div>
            </div>

          </div>
        </div>

        {/* Founder Context Subsection - Real Experience */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-navy-950 via-slate-900 to-navy-900 text-white shadow-soft-lg border border-slate-800">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-900/80 border border-brand-700/80 text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-5">
              <UserCheck className="w-4 h-4" />
              Built From Real Reporting Experience
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-5 text-white">
              Designed from the Reality of Month-End Commercial Reconciliation
            </h3>
            
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl leading-relaxed mb-5 font-normal">
              ReconLoop is being developed by <span className="text-white font-bold underline decoration-brand-400 decoration-2 underline-offset-4">Shashi Prasad</span>, whose professional background includes commercial reporting, cross-system data consolidation, Power BI reporting, automated Excel workflows and end-to-end dataset integrity checks across high-volume reporting environments.
            </p>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              The concept translates processes previously performed manually into a repeatable, SME-focused platform designed to prevent reporting discrepancies under real deadline conditions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
