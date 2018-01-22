import React from 'react';
import {autobind} from 'core-decorators';

import {connect} from "react-redux"
import {patientSearch} from "../actions/patientActions";

@connect((store) => {
    return {
        patient: store.patient.singleResource,
        userFetched: store.patient.fetched,
        resources: store.patient.resources,
    };
})
export default class FindPatient extends React.Component {

    @autobind
    doSearch(query) {
        this.props.dispatch(patientSearch(query));
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search for a patient"
                       onChange={(evt) => this.doSearch(evt.target.value)}/>
                <PatientList patients={this.props.patients} routeLink="/showPatient/:patientUuid"></PatientList>
            </div>
        );
    }

    // render() {
    //     return <PatientSearch></PatientSearch>;
    // }
}