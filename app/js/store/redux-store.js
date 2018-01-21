import {applyMiddleware, combineReducers, createStore} from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import logger from "redux-logger";
import * as reducers from '../reducers/patientReducer'

export default function () {
    const reducer = combineReducers(reducers);
    const store = createStore(reducer, {}, applyMiddleware(
        thunkMiddleware,
        promiseMiddleware(),
        logger()
    ));
    return store;
}
