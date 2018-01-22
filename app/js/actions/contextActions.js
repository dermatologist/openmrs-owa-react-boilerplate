import contextService from '../services/contextService'

/*
 * Action Types
 */
export const LOAD_MANIFEST = 'LOAD_MANIFEST';

/*
 * Action Creators
 */


export function loadManifest() {
    return {type: LOAD_MANIFEST, payload: contextService.getManifest()};
}
