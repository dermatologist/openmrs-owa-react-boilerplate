import React from 'react';
import moment from 'moment';
import {connect} from "react-redux";
import {autobind} from 'core-decorators';

@connect((store) => {
    return {
        patient: store.patient.singleResource,
        fetching: store.patient.fetching,
    };
})
export default class ShowPatient extends React.Component {

    @autobind
    ageFrom(birthdate) {
        return moment().diff(moment(birthdate), 'years')
    }

    @autobind
    displayGender(person) {
        if (person.gender === 'M') {
            return "Male";
        } else if (person.gender === "F") {
            return "Female";
        } else {
            return "Other";
        }
    }

    render() {
        if (this.props.fetching) {
            return <div>Loading...</div>
        }
        else if (this.props.patient.person) {
            let pt = this.props.patient;
            return (
                <div>
                    <h2>{pt.person.preferredName.display}</h2>
                    <h3>{this.displayGender(pt.person)}, {this.ageFrom(pt.person.birthdate)} year(s)</h3>
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}