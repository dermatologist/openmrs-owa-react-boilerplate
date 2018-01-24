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



    render() {
        if (this.props.fetching) {
            return <div>Loading...</div>
        }
        else if (this.props.drug != null) {
            let pt = this.props.drug;
            return (
                <div>
                    <h2>{pt}</h2>
                </div>
            )
        }
        else {
            return <div></div>
        }
    }
}