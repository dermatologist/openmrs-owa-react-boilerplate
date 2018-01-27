import React from 'react'
import {Route} from 'react-router'
import App from '../containers/App'
import FindPatient from '../components/patient/FindPatient'
import ShowPatient from '../components/patient/ShowPatient'
import Help from '../components/Help'
import {loadCurrentPatient} from '../actions/patientActions'

export default (store) => {

    const fetchPatientOnEnter = (nextState, replace) => {
        store.dispatch(loadCurrentPatient(nextState.params.patientUuid));
    };

    return (
            <Route path="/" component={App}>
                <Route path="/findPatient" component={FindPatient}/>
                <Route path="/showPatient/:patientUuid" component={ShowPatient} onEnter={fetchPatientOnEnter}/>
                <Route path="/help" component={Help}/>
            </Route>
    );
}