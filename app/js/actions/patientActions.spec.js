import * as actions from '../actions/patientActions'
import {LOAD_CURRENT_PATIENT} from "./patientActions";

describe('actions', () => {
    it('should create an action to load patient', () => {
        const patientUUID = '1234';
        const expectedAction = {
            type: LOAD_CURRENT_PATIENT,
            payload: Promise
        };
        expect(actions.loadCurrentPatient(patientUUID)).type = LOAD_CURRENT_PATIENT
    })
});