import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Database, 
  Clock, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  ChevronDown, 
  ChevronUp,
  Trash2
} from 'lucide-react';
import { savePilotRequest, getStoredPilotRequests, PILOT_STORAGE_KEY } from '../utils/storage';
import type { PilotSubmission } from '../types';

interface PilotFormProps {
  initialTier?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const PilotForm: React.FC<PilotFormProps> = ({ initialTier, onSuccess, isModal = false }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [organisationName, setOrganisationName] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [storedSubmissions, setStoredSubmissions] = useState<PilotSubmission[]>([]);
  const [showStoredData, setShowStoredData] = useState(false);

  // Load existing stored submissions on mount
  useEffect(() => {
    refreshStoredData();
  }, []);

  const refreshStoredData = () => {
    const records = getStoredPilotRequests();
    setStoredSubmissions(records);
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name.';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else if (phoneNumber.trim().length < 7) {
      newErrors.phoneNumber = 'Please enter a valid phone number (minimum 7 digits).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else if (!emailRegex.test(emailAddress.trim())) {
      newErrors.emailAddress = 'Please enter a valid email address.';
    }

    if (!organisationName.trim()) {
      newErrors.organisationName = 'Organisation Name is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Save to localStorage (appending to existing array)
    savePilotRequest({
      fullName,
      phoneNumber,
      emailAddress,
      organisationName
    });

    // Refresh stored list
    refreshStoredData();

    // Clear form
    setFullName('');
    setPhoneNumber('');
    setEmailAddress('');
    setOrganisationName('');
    setErrors({});
    setIsSubmitted(true);

    if (onSuccess) {
      onSuccess();
    }
  };

  const handleClearDemoStorage = () => {
    if (window.confirm('Clear demonstration submissions stored in this browser?')) {
      localStorage.removeItem(PILOT_STORAGE_KEY);
      refreshStoredData();
    }
  };

  return (
    <div className="w-full">
      {isSubmitted ? (
        <div className="p-7 sm:p-9 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-emerald-950">
            Thank you. Your pilot request has been recorded.
          </h4>
          <p className="text-sm sm:text-base text-emerald-900 max-w-md mx-auto leading-relaxed">
            Your details have been saved to your browser's local store (<code className="font-mono text-xs bg-emerald-100 px-1.5 py-0.5 rounded text-emerald-950 font-semibold">{PILOT_STORAGE_KEY}</code>).
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="text-sm font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-50 px-5 py-2.5 rounded-xl transition-colors shadow-2xs"
            >
              Submit Another Request
            </button>
            <button
              type="button"
              onClick={() => setShowStoredData(!showStoredData)}
              className="text-sm font-bold text-emerald-950 underline underline-offset-4 px-2 py-2"
            >
              {showStoredData ? 'Hide Stored Requests' : `View Stored Records (${storedSubmissions.length})`}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {initialTier && (
            <div className="text-xs sm:text-sm font-bold text-brand-900 bg-brand-50 border border-brand-200 px-3.5 py-1.5 rounded-lg inline-block">
              Selected Interest: {initialTier} Tier
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor={`fullName-${isModal ? 'modal' : 'sec'}`} className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-5 h-5" />
              </div>
              <input
                id={`fullName-${isModal ? 'modal' : 'sec'}`}
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g. John Smith"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-base text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName 
                    ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20' 
                    : 'border-slate-300 focus:border-brand-500 focus:ring-brand-100'
                }`}
                required
              />
            </div>
            {errors.fullName && (
              <p className="mt-1.5 text-xs sm:text-sm text-rose-600 flex items-center gap-1.5 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" /> {errors.fullName}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor={`phoneNumber-${isModal ? 'modal' : 'sec'}`} className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Phone Number <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-5 h-5" />
              </div>
              <input
                id={`phoneNumber-${isModal ? 'modal' : 'sec'}`}
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="e.g. +44 7123 456789"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-base text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phoneNumber 
                    ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20' 
                    : 'border-slate-300 focus:border-brand-500 focus:ring-brand-100'
                }`}
                required
              />
            </div>
            {errors.phoneNumber && (
              <p className="mt-1.5 text-xs sm:text-sm text-rose-600 flex items-center gap-1.5 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" /> {errors.phoneNumber}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor={`emailAddress-${isModal ? 'modal' : 'sec'}`} className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-5 h-5" />
              </div>
              <input
                id={`emailAddress-${isModal ? 'modal' : 'sec'}`}
                type="email"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                placeholder="e.g. john@example.co.uk"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-base text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.emailAddress 
                    ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20' 
                    : 'border-slate-300 focus:border-brand-500 focus:ring-brand-100'
                }`}
                required
              />
            </div>
            {errors.emailAddress && (
              <p className="mt-1.5 text-xs sm:text-sm text-rose-600 flex items-center gap-1.5 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" /> {errors.emailAddress}
              </p>
            )}
          </div>

          {/* Organisation Name */}
          <div>
            <label htmlFor={`organisationName-${isModal ? 'modal' : 'sec'}`} className="block text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
              Organisation Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Building2 className="w-5 h-5" />
              </div>
              <input
                id={`organisationName-${isModal ? 'modal' : 'sec'}`}
                type="text"
                value={organisationName}
                onChange={(e) => setOrganisationName(e.target.value)}
                placeholder="e.g. Apex Distribution Ltd"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border text-base text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.organisationName 
                    ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20' 
                    : 'border-slate-300 focus:border-brand-500 focus:ring-brand-100'
                }`}
                required
              />
            </div>
            {errors.organisationName && (
              <p className="mt-1.5 text-xs sm:text-sm text-rose-600 flex items-center gap-1.5 font-medium">
                <AlertCircle className="w-4 h-4 shrink-0" /> {errors.organisationName}
              </p>
            )}
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-navy-900 hover:bg-brand-800 text-white font-bold text-base sm:text-lg py-3.5 px-6 rounded-xl shadow-sm hover:shadow transition-all active:translate-y-0"
          >
            <span>Request a Pilot</span>
            <Send className="w-5 h-5 text-brand-300" />
          </button>
        </form>
      )}

      {/* LocalStorage Inspector for Evaluator / User Transparency */}
      <div className="mt-6 pt-5 border-t border-slate-200">
        <button
          type="button"
          onClick={() => {
            refreshStoredData();
            setShowStoredData(!showStoredData);
          }}
          className="w-full flex items-center justify-between text-xs sm:text-sm text-slate-600 hover:text-navy-900 transition-colors py-1.5"
        >
          <span className="flex items-center gap-2 font-bold">
            <Database className="w-4 h-4 text-brand-600" />
            LocalStorage Records: {storedSubmissions.length} saved
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
            {showStoredData ? 'Hide' : 'Inspect'}
            {showStoredData ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </span>
        </button>

        {showStoredData && (
          <div className="mt-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm animate-fadeIn space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-600">
                Key: <strong className="text-slate-900">{PILOT_STORAGE_KEY}</strong>
              </span>
              {storedSubmissions.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearDemoStorage}
                  className="inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-800 font-bold"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear Records
                </button>
              )}
            </div>

            {storedSubmissions.length === 0 ? (
              <p className="text-slate-500 italic text-center py-2 text-xs sm:text-sm font-medium">
                No submissions stored yet. Fill out the form above to record your first pilot request.
              </p>
            ) : (
              <div className="max-h-56 overflow-y-auto space-y-2.5 pr-1">
                {storedSubmissions.map((sub, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white border border-slate-200 font-mono text-xs space-y-1 shadow-2xs">
                    <div className="flex justify-between font-sans">
                      <span className="font-extrabold text-slate-900 text-sm">{sub.fullName}</span>
                      <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {new Date(sub.submissionDateTime).toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="text-slate-700 font-sans text-xs sm:text-sm">
                      {sub.organisationName} • {sub.emailAddress} • {sub.phoneNumber}
                    </div>
                    <div className="text-[11px] text-slate-400 pt-0.5">
                      ISO: {sub.submissionDateTime}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
