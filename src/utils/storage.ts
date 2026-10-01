import type { PilotSubmission } from '../types';

export const PILOT_STORAGE_KEY = 'reconloopPilotRequests';

export function getStoredPilotRequests(): PilotSubmission[] {
  try {
    const raw = localStorage.getItem(PILOT_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Failed to read pilot requests from localStorage:', error);
    return [];
  }
}

export function savePilotRequest(submission: Omit<PilotSubmission, 'submissionDateTime'>): PilotSubmission {
  const existingSubmissions = getStoredPilotRequests();
  
  const newSubmission: PilotSubmission = {
    fullName: submission.fullName.trim(),
    phoneNumber: submission.phoneNumber.trim(),
    emailAddress: submission.emailAddress.trim(),
    organisationName: submission.organisationName.trim(),
    submissionDateTime: new Date().toISOString()
  };

  existingSubmissions.push(newSubmission);

  try {
    localStorage.setItem(PILOT_STORAGE_KEY, JSON.stringify(existingSubmissions));
  } catch (error) {
    console.error('Failed to save pilot request to localStorage:', error);
  }

  return newSubmission;
}
