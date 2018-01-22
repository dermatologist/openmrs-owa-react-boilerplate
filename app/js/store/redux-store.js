import {applyMiddleware, combineReducers, createStore} from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import logger from "redux-logger";
import patientReducer from "../reducers/patientReducer"
import drugReducer from "../reducers/drugReducer";

export default function () {
    const reducer = combineReducers({

        patient: patientReducer,
        drug: drugReducer,

    });
    const store = createStore(reducer, {}, applyMiddleware(
        thunkMiddleware,
        promiseMiddleware(),
        logger()
    ));
    return store;
}
