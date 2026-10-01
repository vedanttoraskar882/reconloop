import React from 'react';
import { 
  Plug, 
  GitCompare, 
  Sliders, 
  Users, 
  Award, 
  TrendingUp, 
  CalendarDays, 
  History,
  ArrowDown,
  ArrowRight,
  Database,
  Building2,
  FileSpreadsheet,
  CheckCircle2,
  FileCheck2,
  AlertCircle
} from 'lucide-react';

export const PlatformFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Read-Only System Connectors',
      icon: Plug,
      description:
        'Connect accounting packages, CRMs, spreadsheet exports and structured databases without writing information back to source systems.',
      detail:
        'Planned connector categories include commonly used systems such as Xero, QuickBooks, Sage, HubSpot, Salesforce Essentials, Excel, and SQL-based databases (shown as illustrative categories, not formal commercial partnerships).'
    },
    {
      id: 2,
      title: 'Cycle Baselining',
      icon: GitCompare,
      description:
        'Capture each reporting cycle and compare it with the most recent confirmed baseline so genuine business changes can be separated from possible reporting inconsistencies.',
      detail:
        'Prevents false alarms by grounding cross-checks in historical cycle parameters and established variance margins.'
    },
    {
      id: 3,
      title: 'Rule-Based Exception Engine',
      icon: Sliders,
      description:
        'Configure tolerance thresholds, field mappings and cross-system matching rules without requiring users to write SQL or scripts.',
      detail:
        'Accessible no-code configuration designed specifically for finance controllers, commercial analysts and reporting managers.'
    },
    {
      id: 4,
      title: 'Exception Ownership & Routing',
      icon: Users,
      description:
        'Each flagged discrepancy can be associated with its source, the validation rule involved and the relevant data owner so issues can be reviewed efficiently.',
      detail:
        'Avoids vague blame by linking each variance directly to the originating system, rule threshold and designated reviewer.'
    },
    {
      id: 5,
      title: 'Integrity Certificate',
      icon: Award,
      description:
        'Once checks have been completed and exceptions resolved or accepted, ReconLoop can create a dated record showing which checks were performed and how they were handled.',
      detail:
        'Includes planned export formats in PDF, CSV and JSON to share with management, audit reviewers or lenders.'
    },
    {
      id: 6,
      title: 'Variance Trend View',
      icon: TrendingUp,
      description:
        'Track recurring exception patterns to identify which systems, fields or processes regularly create reporting problems.',
      detail:
        'Gain visibility over root causes over time, identifying recurring manual spreadsheet adjustments or sync delays.'
    },
    {
      id: 7,
      title: 'Cycle Calendar',
      icon: CalendarDays,
      description:
        'Organise recurring reporting and reconciliation windows with reporting-cycle deadlines and reminders.',
      detail:
        'Align team close schedules for month-end, quarter-end or ad-hoc commercial reporting cutoffs.'
    },
    {
      id: 8,
      title: 'Audit-Ready History',
      icon: History,
      description:
        'Maintain a history of reporting cycles, exceptions, resolutions and Integrity Certificates for future internal or external review.',
      detail:
        'Permanent evidence log proving how variances were handled and authorised before reports were finalised.'
    }
  ];

  return (
    <section id="platform" className="py-24 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-5">
            A Purpose-Built Reconciliation Layer for SME Reporting
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
            Designed for businesses without dedicated data-engineering teams, ReconLoop delivers core reconciliation, exception routing and certification without technical bloat.
          </p>
        </div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-24">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-slate-50/70 rounded-3xl p-7 border border-slate-200 hover:border-brand-300 hover:bg-white hover:shadow-soft-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-navy-900 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center mb-6 transition-colors shadow-2xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-navy-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-5">
                    {feature.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {feature.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Platform Architecture Visual Flow */}
        <div className="bg-gradient-to-b from-slate-50 to-slate-100/80 rounded-3xl p-7 sm:p-12 border border-slate-200/90 shadow-soft-lg">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-bold text-brand-700 uppercase tracking-widest bg-brand-100/80 border border-brand-200 px-3 py-1 rounded-md">
              Architecture Overview
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 mt-3">
              How Data Moves Through the Reconciliation Layer
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Read-only extraction, rule evaluation, exception resolution, and immutable certification.
            </p>
          </div>

          {/* Responsive Architecture Flow */}
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-5 relative">
            
            {/* 1. SOURCE SYSTEMS */}
            <div className="flex-1 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Stage 1</div>
                <h4 className="text-base font-extrabold text-slate-900 mb-4">SOURCE SYSTEMS</h4>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">Accounting Packages</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-indigo-600" />
                    <span className="font-medium">CRM & Sales Pipeline</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                    <span className="font-medium">Operational Systems</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <FileSpreadsheet className="w-4 h-4 text-amber-600" />
                    <span className="font-medium">Spreadsheets & Exports</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-purple-600" />
                    <span className="font-medium">Structured Databases</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500 text-center font-medium">
                Customer Source Data
              </div>
            </div>

            {/* Direction Indicator */}
            <div className="flex lg:hidden justify-center text-slate-400 py-1">
              <ArrowDown className="w-6 h-6 text-brand-600" />
            </div>
            <div className="hidden lg:flex items-center text-slate-400">
              <ArrowRight className="w-6 h-6 text-brand-600" />
            </div>

            {/* 2. READ-ONLY CONNECTOR LAYER */}
            <div className="flex-1 bg-brand-50/70 border-2 border-brand-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-2">Stage 2</div>
                <h4 className="text-base font-extrabold text-navy-900 mb-3">READ-ONLY CONNECTOR LAYER</h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                  Captures reporting-cycle snapshots through authenticated read-only interfaces or structured files.
                </p>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-2.5 rounded-xl bg-white border border-brand-100 text-slate-800 font-semibold shadow-2xs">
                    • Zero write-back to source
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-brand-100 text-slate-800 font-semibold shadow-2xs">
                    • Isolated cycle extraction
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-brand-100 text-slate-800 font-semibold shadow-2xs">
                    • Secure credential isolation
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-brand-200 text-xs text-brand-900 text-center font-bold">
                Non-intrusive ingestion
              </div>
            </div>

            {/* Direction Indicator */}
            <div className="flex lg:hidden justify-center text-slate-400 py-1">
              <ArrowDown className="w-6 h-6 text-brand-600" />
            </div>
            <div className="hidden lg:flex items-center text-slate-400">
              <ArrowRight className="w-6 h-6 text-brand-600" />
            </div>

            {/* 3. RECONCILIATION ENGINE */}
            <div className="flex-1 bg-navy-900 text-white rounded-2xl p-6 flex flex-col justify-between shadow-soft-lg">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-2">Stage 3</div>
                <h4 className="text-base font-extrabold text-white mb-4">RECONCILIATION ENGINE</h4>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    <span className="font-bold text-brand-300">Field Mapping:</span>
                    <p className="text-xs text-slate-300 mt-0.5">Align disparate naming & codes</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    <span className="font-bold text-brand-300">Cross-System Matching:</span>
                    <p className="text-xs text-slate-300 mt-0.5">Reconcile transaction & period totals</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    <span className="font-bold text-brand-300">Tolerance Rules:</span>
                    <p className="text-xs text-slate-300 mt-0.5">Define % or value thresholds</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    <span className="font-bold text-brand-300">Baseline Comparison:</span>
                    <p className="text-xs text-slate-300 mt-0.5">Compare to prior approved cycle</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-800 text-xs text-slate-400 text-center font-mono">
                Automated rule evaluation
              </div>
            </div>

            {/* Direction Indicator */}
            <div className="flex lg:hidden justify-center text-slate-400 py-1">
              <ArrowDown className="w-6 h-6 text-brand-600" />
            </div>
            <div className="hidden lg:flex items-center text-slate-400">
              <ArrowRight className="w-6 h-6 text-brand-600" />
            </div>

            {/* 4. EXCEPTION MANAGEMENT */}
            <div className="flex-1 bg-amber-50/90 border-2 border-amber-200 rounded-2xl p-6 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2">Stage 4</div>
                <h4 className="text-base font-extrabold text-amber-950 mb-3">EXCEPTION MANAGEMENT</h4>
                <div className="space-y-2 text-xs sm:text-sm text-amber-950">
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 flex items-center gap-2 font-semibold shadow-2xs">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Variance detection</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 flex items-center gap-2 font-semibold shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Owner assignment</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 flex items-center gap-2 font-semibold shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Resolution / sign-off</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-amber-200 text-xs text-amber-900 text-center font-bold">
                Structured accountability
              </div>
            </div>

            {/* Direction Indicator */}
            <div className="flex lg:hidden justify-center text-slate-400 py-1">
              <ArrowDown className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="hidden lg:flex items-center text-slate-400">
              <ArrowRight className="w-6 h-6 text-emerald-600" />
            </div>

            {/* 5. INTEGRITY CERTIFICATE */}
            <div className="flex-1 bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 flex flex-col justify-between shadow-soft">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">Stage 5</div>
                <div className="flex items-center gap-2 mb-3">
                  <FileCheck2 className="w-5 h-5 text-emerald-700" />
                  <h4 className="text-base font-extrabold text-emerald-950">INTEGRITY CERTIFICATE</h4>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed mb-4">
                  Timestamped certificate validating all configured checks passed or exceptions accepted.
                </p>
                <div className="p-3 rounded-xl bg-white border border-emerald-200 text-xs sm:text-sm text-slate-800 space-y-1.5 shadow-2xs">
                  <div className="font-bold text-emerald-950">Output Artifacts:</div>
                  <div className="font-medium">• Executive Summary (PDF)</div>
                  <div className="font-medium">• Check Log (CSV)</div>
                  <div className="font-medium">• Structured Manifest (JSON)</div>
                </div>
              </div>
              <div className="mt-5 pt-3 border-t border-emerald-200 text-xs text-emerald-900 text-center font-extrabold">
                Permanent Evidence Record
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
