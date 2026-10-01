import React, { useState } from 'react';
import { 
  Database, 
  FileSpreadsheet, 
  Layers, 
  Check, 
  FileCheck, 
  ArrowRight, 
  ShieldCheck, 
  Building2, 
  Calendar, 
  Clock 
} from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeCycle] = useState<'Sep-2026' | 'Aug-2026'>('Sep-2026');

  return (
    <div className="relative mx-auto w-full max-w-5xl rounded-3xl border border-slate-300/80 bg-white p-5 sm:p-7 lg:p-8 shadow-soft-lg">
      
      {/* Decorative top window bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-3.5 h-3.5 rounded-full bg-slate-300"></span>
          <span className="w-3.5 h-3.5 rounded-full bg-slate-300"></span>
          <span className="w-3.5 h-3.5 rounded-full bg-slate-300"></span>
          <span className="ml-2 text-xs sm:text-sm font-bold text-slate-600 tracking-wide font-mono">
            RECONLOOP // RECONCILIATION RUNTIME MONITOR
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Cycle Status: Active Verification
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200 font-mono">
            <Calendar className="w-4 h-4 text-slate-500" />
            <span>Cycle: {activeCycle}</span>
          </div>
        </div>
      </div>

      {/* 4-Stage Workflow Architecture Header */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/80 border border-slate-200">
          <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-800 text-xs font-extrabold flex items-center justify-center">1</span>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Step 1</div>
            <div className="text-sm font-bold text-slate-900">Source Systems</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100/80 border border-slate-200">
          <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-800 text-xs font-extrabold flex items-center justify-center">2</span>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Step 2</div>
            <div className="text-sm font-bold text-slate-900">Reconciliation</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200">
          <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-900 text-xs font-extrabold flex items-center justify-center">3</span>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800">Step 3</div>
            <div className="text-sm font-bold text-slate-900">Exception Review</div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
          <span className="w-6 h-6 rounded-full bg-emerald-200 text-emerald-900 text-xs font-extrabold flex items-center justify-center">4</span>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">Step 4</div>
            <div className="text-sm font-bold text-emerald-950">Certification</div>
          </div>
        </div>
      </div>

      {/* Main Flow Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
        
        {/* Source Systems (Columns 1-3) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider px-1">
            <span>Source Systems</span>
            <span className="text-xs text-brand-700 font-semibold bg-brand-50 px-2 py-0.5 rounded">Read-Only</span>
          </div>

          <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:border-brand-300 hover:bg-white transition-all shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">CRM Pipeline</div>
                  <div className="text-xs text-slate-500">Sales & Contracts</div>
                </div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-mono font-medium">1,420 rec</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:border-brand-300 hover:bg-white transition-all shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Accounting Ledger</div>
                  <div className="text-xs text-slate-500">Invoices & Revenue</div>
                </div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-mono font-medium">3,892 rec</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:border-brand-300 hover:bg-white transition-all shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Operations Data</div>
                  <div className="text-xs text-slate-500">Delivery & Fulfilment</div>
                </div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-mono font-medium">2,110 rec</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:border-brand-300 hover:bg-white transition-all shadow-2xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Spreadsheet Model</div>
                  <div className="text-xs text-slate-500">Management Pack</div>
                </div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 font-mono font-medium">24 sheets</span>
            </div>
          </div>
        </div>

        {/* Center Connection Indicator */}
        <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 shadow-2xs">
            <ArrowRight className="w-5 h-5 text-brand-600" />
          </div>
        </div>

        {/* Engine & Exception Review (Columns 5-8) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="p-5 rounded-2xl border-2 border-brand-200 bg-gradient-to-b from-brand-50/70 via-white to-white shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-brand-600 text-white flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-sm font-extrabold text-navy-900 tracking-tight">Reconciliation Engine</span>
              </div>
              <span className="text-xs bg-brand-100 text-brand-900 font-bold px-2.5 py-1 rounded-full border border-brand-200">
                Baseline v2.4
              </span>
            </div>

            {/* Check KPI Badges */}
            <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-2xl font-extrabold text-slate-900 leading-tight">48</div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">Checks Passed</div>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 shadow-2xs">
                <div className="text-2xl font-extrabold text-amber-700 leading-tight">3</div>
                <div className="text-xs font-bold text-amber-800 mt-0.5">Flagged</div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 shadow-2xs">
                <div className="text-2xl font-extrabold text-emerald-700 leading-tight">3</div>
                <div className="text-xs font-bold text-emerald-800 mt-0.5">Resolved</div>
              </div>
            </div>

            {/* Reconciliation Run Logs */}
            <div className="space-y-2 text-left">
              <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Exception Review Log</span>
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> All signed off
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800">Revenue Cutoff Check</span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Resolved</span>
                </div>
                <div className="text-xs text-slate-600">
                  CRM vs Ledger invoice mismatch £12,400. Mapped to deferred income.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800">Stock In-Transit vs Received</span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Accepted</span>
                </div>
                <div className="text-xs text-slate-600">
                  Ops batch #894 confirmed signed by depot manager on 30 Sep.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Connection Indicator */}
        <div className="hidden lg:flex lg:col-span-1 justify-center items-center">
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-500 shadow-2xs">
            <ArrowRight className="w-5 h-5 text-emerald-600" />
          </div>
        </div>

        {/* Integrity Certificate (Columns 10-12) */}
        <div className="lg:col-span-3">
          <div className="p-5 rounded-2xl border-2 border-emerald-500/40 bg-emerald-50/50 shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/15 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-800 bg-emerald-200/70 px-2.5 py-1 rounded">
                Certification
              </span>
              <span className="text-xs text-slate-600 font-mono font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                30-Sep-2026
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900 leading-tight">Integrity Certificate</div>
                <div className="text-xs font-bold text-emerald-700">Reporting Cycle Verified</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-slate-800 text-xs sm:text-sm space-y-2 mb-4 shadow-2xs">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Cycle ID:</span>
                <span className="font-mono font-bold text-slate-900">RC-2026-09</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Rules Executed:</span>
                <span className="font-bold text-slate-900">48 / 48 verified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Exceptions:</span>
                <span className="font-bold text-slate-900">3 documented & closed</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Sign-off:</span>
                <span className="font-bold text-emerald-700">Financial Controller</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600 font-mono border-t border-emerald-200 pt-2.5">
              <span className="font-bold">SHA-256: 8f9b...e21a</span>
              <span className="text-brand-800 font-bold">PDF | CSV</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom status line */}
      <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs sm:text-sm text-slate-600 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
          <span className="font-medium">Targeted at UK SME & mid-market monthly/quarterly closing cycles</span>
        </div>
        <div className="text-slate-500 text-xs font-medium">
          Simpler, SME-accessible alternative to enterprise data observability
        </div>
      </div>
    </div>
  );
};
