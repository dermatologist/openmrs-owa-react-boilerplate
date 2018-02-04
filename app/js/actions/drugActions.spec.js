import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../actions/drugActions'
import fetchMock from 'fetch-mock'
import {LOAD_CURRENT_DRUG} from "./drugActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore()
    });

    it('creates LOAD_CURRENT_DRUG_SUCCESS when fetching drugs has been done', () => {
        fetchMock
            .getOnce('/openmrs/ws/rest/v1/drug/', {body: {drugs: []}, headers: {'content-type': 'application/json'}});


        const expectedActions = [
            {type: LOAD_CURRENT_DRUG},
            {type: 'LOAD_CURRENT_DRUG_SUCCESS', body: {drugs: []}}
        ];
        const store = mockStore({drugs: []});

        actions.loadCurrentDrug("1234").payload.then((x) => {
            // return of async actions
            return expect(x).toEqual(expectedActions)
        })
    })
});