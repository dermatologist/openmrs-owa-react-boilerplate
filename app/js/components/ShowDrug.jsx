import React from 'react';
import moment from 'moment';
import {connect} from "react-redux";
import {autobind} from 'core-decorators';

@connect((store) => {
    return {
        drug: store.drug.singleResource,
        fetching: store.drug.fetching,
    };
})
export default class ShowDrug extends React.Component {

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
        else if (this.props.drug.person) {
            let pt = this.props.drug;
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