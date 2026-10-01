import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { PilotForm } from './PilotForm';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

export const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose, selectedTier }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-fadeIn"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-navy-900 text-brand-400 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 id="modal-title" className="text-xl font-bold text-navy-900">
              Request a Pilot
            </h3>
            <p className="text-xs text-slate-500">
              Register interest for early customer-validation and pilot access
            </p>
          </div>
        </div>

        {/* Form Body */}
        <PilotForm initialTier={selectedTier} isModal={true} />
      </div>
    </div>
  );
};
