import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What is ReconLoop?',
      answer:
        'ReconLoop is a reconciliation and exception-detection platform being developed for SMEs that need to check commercial, financial and operational information across multiple systems before recurring reports are submitted.'
    },
    {
      id: 'faq-2',
      question: 'Does ReconLoop replace our accounting or CRM software?',
      answer:
        'No. ReconLoop is designed to sit alongside existing business systems and provide an additional reconciliation layer before reporting.'
    },
    {
      id: 'faq-3',
      question: 'What types of systems can ReconLoop work with?',
      answer:
        'The planned connector approach includes accounting systems, CRM platforms, databases and structured spreadsheet exports, with initial UK SME use cases centred around commonly used accounting and CRM environments.'
    },
    {
      id: 'faq-4',
      question: 'Does ReconLoop change information in our existing systems?',
      answer:
        'The platform concept is based around read-only connections wherever possible, allowing information to be checked without writing changes back to source systems.'
    },
    {
      id: 'faq-5',
      question: 'What is an Integrity Certificate?',
      answer:
        'An Integrity Certificate is a timestamped reporting-cycle record showing which configured reconciliation checks were performed, their outcomes and any relevant exception sign-offs.'
    },
    {
      id: 'faq-6',
      question: 'Does ReconLoop guarantee that every report is correct?',
      answer:
        'No. ReconLoop is intended to provide a structured reconciliation and evidence process that helps identify inconsistencies before reporting. It should not be presented as an absolute guarantee that every possible reporting error has been eliminated.'
    },
    {
      id: 'faq-7',
      question: 'Who is ReconLoop designed for?',
      answer:
        'The primary target market is UK SMEs and lower mid-market organisations with recurring commercial, operational or financial reporting processes across several systems.'
    },
    {
      id: 'faq-8',
      question: 'Can ReconLoop support multi-site businesses?',
      answer:
        'Yes. Multi-site and multi-brand organisations are a key intended use case because data consolidation across different locations can create recurring reconciliation challenges.'
    },
    {
      id: 'faq-9',
      question: 'How is pricing structured?',
      answer:
        'The commercial model is designed around monthly or annual subscriptions, with tiers based primarily on the number of connected systems, reporting cycles and deployment requirements. Enterprise deployments may require custom pricing.'
    },
    {
      id: 'faq-10',
      question: 'How can I participate in an early pilot?',
      answer:
        'Use the Request a Pilot form to register interest in participating in the early customer-validation and pilot process.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-900 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-xs">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight mb-4">
            Everything You Need to Know About ReconLoop
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 font-normal">
            Straightforward answers regarding our reporting reconciliation layer, read-only connections and pilot programme.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl sm:rounded-3xl transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-400 bg-brand-50/30 shadow-soft' 
                    : 'border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-btn-${index}`}
                    className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    <span className="text-lg sm:text-xl font-bold text-navy-900 leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-brand-600 text-white rotate-180 shadow-xs' : 'bg-slate-200/80 text-slate-600'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </span>
                  </button>
                </h3>
                
                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-btn-${index}`}
                    className="px-6 sm:px-8 pb-6 sm:pb-7 text-base sm:text-lg text-slate-700 leading-relaxed font-normal animate-fadeIn border-t border-brand-100/60 pt-4"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
