import drugService from '../services/drugService'

/*
 * Action Types
 */
export const LOAD_CURRENT_DRUG = 'LOAD_CURRENT_DRUG';
export const DISCARD_CURRENT_DRUG = 'DISCARD_CURRENT_DRUG';
export const DRUG_SEARCH = 'DRUG_SEARCH';

/*
 * Action Creators
 */

export function discardCurrentDrug() {
    return {type: DISCARD_CURRENT_DRUG};
}

export function loadCurrentDrug(drugUuid) {
    return {type: LOAD_CURRENT_DRUG, payload: drugService.getDrug(drugUuid)};
}

export function drugSearch(query) {
    return {type: DRUG_SEARCH, payload: drugService.findDrugs(query)};
}