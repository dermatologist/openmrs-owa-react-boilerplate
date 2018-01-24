import {DISCARD_CURRENT_DRUG, DRUG_SEARCH, LOAD_CURRENT_DRUG} from '../actions/drugActions'
import {initialState} from "../constants/initialState";

export default function drugReducer(state = initialState, action) {
    switch (action.type) {
        case DISCARD_CURRENT_DRUG:
            return {};
        case LOAD_CURRENT_DRUG + '_PENDING':
            return {...state, fetching: true};
        case LOAD_CURRENT_DRUG + '_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                singleResource: action.payload.data,
            };
        case LOAD_CURRENT_DRUG + '_REJECTED':
            return {...state, fetching: false, error: action.payload};

        case DRUG_SEARCH + '_PENDING':
            return {...state, fetching: true};
        case DRUG_SEARCH + '_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                resources: action.payload.data.results,
            };
        case DRUG_SEARCH + '_REJECTED':
            return {...state, fetching: false, error: action.payload};
        default:
            return state;
    }
}