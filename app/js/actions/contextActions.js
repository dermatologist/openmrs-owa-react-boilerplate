import contextService from '../services/contextService'

/*
 * Action Types
 */
export const LOAD_MANIFEST = 'LOAD_MANIFEST';

/*
 * Action Creators
 */


export function loadManifest() {
    const service = new contextService();
    return {type: LOAD_MANIFEST, payload: service.getManifest()};
}
