import {LOAD_MANIFEST} from '../actions/contextActions'
import {initialContext} from "../constants/initialContext";

export default function contextReducer(state = initialContext, action) {
    switch (action.type) {
        case LOAD_MANIFEST + '_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                manifest: action.payload,
            };
        case LOAD_MANIFEST + '_REJECTED':
            return {...state, fetching: false, error: action.payload};

        case LOAD_MANIFEST + '_PENDING':
            return {...state, fetching: true};
        default:
            return state;
    }
}