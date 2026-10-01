import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onRequestPilot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestPilot }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Platform', href: '#platform' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Market', href: '#market' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/90 py-3'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 text-navy-900 group"
          >
            <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-white shadow-sm group-hover:bg-brand-700 transition-colors">
              <ShieldCheck className="w-5 h-5 text-brand-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl tracking-tight text-navy-900 flex items-center">
                Recon<span className="text-brand-600">Loop</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500 hidden sm:inline-block">
                DATA INTEGRITY CERTIFICATION
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3.5 py-2 text-[15px] font-bold text-slate-700 hover:text-navy-900 hover:bg-slate-100/80 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onRequestPilot}
              className="inline-flex items-center gap-2 bg-navy-900 hover:bg-brand-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 text-brand-300" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestPilot}
              className="inline-flex items-center text-xs font-bold bg-navy-900 text-white px-3.5 py-2 rounded-lg hover:bg-brand-800"
            >
              Request a Pilot
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-1 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block px-3 py-2.5 rounded-lg text-base font-bold text-slate-800 hover:text-navy-900 hover:bg-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestPilot();
              }}
              className="w-full flex items-center justify-center gap-2 bg-navy-900 hover:bg-brand-800 text-white font-bold text-base py-3 px-4 rounded-xl shadow-sm"
            >
              <span>Request a Pilot</span>
              <ArrowRight className="w-4 h-4 text-brand-300" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
