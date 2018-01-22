import {DISCARD_CURRENT_PATIENT, LOAD_CURRENT_PATIENT, PATIENT_SEARCH} from '../actions/patientActions'
import {initialState} from "../constants/initialState";

export default function patientReducer(state = initialState, action) {
    switch (action.type) {
        case DISCARD_CURRENT_PATIENT:
            return {};
        case LOAD_CURRENT_PATIENT + '_PENDING':
            return {...state, fetching: true};
        case LOAD_CURRENT_PATIENT + '_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                singleResource: action.payload,
            };
        case LOAD_CURRENT_PATIENT + '_REJECTED':
            return {...state, fetching: false, error: action.payload};

        case PATIENT_SEARCH + '_PENDING':
            return {...state, fetching: true};
        case PATIENT_SEARCH + '_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                resources: action.payload,
            };
        case PATIENT_SEARCH + '_REJECTED':
            return {...state, fetching: false, error: action.payload};
        default:
            return state;
    }
}