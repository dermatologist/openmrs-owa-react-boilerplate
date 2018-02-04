import reducer from '../reducers/patientReducer'
import {initialState} from '../constants/initialState'
import * as types from '../actions/patientActions'

describe('patient reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    });

    it('should handle FETCH_PATIENT', () => {
        expect(
            reducer([], {
                type: types.LOAD_CURRENT_PATIENT,
                payload: {}
            })
        ).toEqual([])


    })
});
