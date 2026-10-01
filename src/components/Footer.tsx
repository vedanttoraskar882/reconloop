import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface FooterProps {
  onRequestPilot: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot }) => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: ReconLoop (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <ShieldCheck className="w-6 h-6 text-brand-400" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Recon<span className="text-brand-400">Loop</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              Automated data reconciliation and reporting-integrity workflows designed for growing UK businesses.
            </p>

            <div className="text-xs sm:text-sm text-slate-400 pt-2 font-mono">
              Independent data-integrity certification for recurring commercial and finance reporting cycles.
            </div>
          </div>

          {/* Column 2: Platform (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3 text-sm sm:text-base font-medium">
              <li>
                <a 
                  href="#platform" 
                  onClick={scrollTo('platform')} 
                  className="hover:text-white transition-colors"
                >
                  Reconciliation
                </a>
              </li>
              <li>
                <a 
                  href="#platform" 
                  onClick={scrollTo('platform')} 
                  className="hover:text-white transition-colors"
                >
                  Exception Management
                </a>
              </li>
              <li>
                <a 
                  href="#platform" 
                  onClick={scrollTo('platform')} 
                  className="hover:text-white transition-colors"
                >
                  Integrity Certificates
                </a>
              </li>
              <li>
                <a 
                  href="#platform" 
                  onClick={scrollTo('platform')} 
                  className="hover:text-white transition-colors"
                >
                  Variance Trends
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3 text-sm sm:text-base font-medium">
              <li>
                <a 
                  href="#about" 
                  onClick={scrollTo('about')} 
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#market" 
                  onClick={scrollTo('market')} 
                  className="hover:text-white transition-colors"
                >
                  Market
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={scrollTo('pricing')} 
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  onClick={scrollTo('faq')} 
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Started (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              Get Started
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              Explore how automated baseline reconciliation can protect your next reporting cycle.
            </p>
            <div className="pt-2">
              <button
                onClick={onRequestPilot}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm py-3 px-5 rounded-xl shadow-sm transition-all"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-14 pt-8 border-t border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div>
            © 2026 ReconLoop. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-medium">
            <span className="cursor-pointer hover:text-slate-300 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-slate-300 transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
