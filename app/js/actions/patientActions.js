import patientService from '../services/patientService'

/*
 * Action Types
 */
export const LOAD_CURRENT_PATIENT = 'LOAD_CURRENT_PATIENT';
export const DISCARD_CURRENT_PATIENT = 'DISCARD_CURRENT_PATIENT';
export const PATIENT_SEARCH = 'PATIENT_SEARCH';

/*
 * Action Creators
 */

export function discardCurrentPatient() {
    return {type: DISCARD_CURRENT_PATIENT};
}

export function loadCurrentPatient(patientUuid) {
    const service = new patientService();
    return {type: LOAD_CURRENT_PATIENT, payload: service.getPatient(patientUuid)};
}

export function patientSearch(query) {
    const service = new patientService();
    return {type: PATIENT_SEARCH, payload: service.findPatients(query)};
}