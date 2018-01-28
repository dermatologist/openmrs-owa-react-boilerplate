import React from 'react';
import {autobind} from 'core-decorators';

import {connect} from "react-redux"
import {drugSearch} from "../../actions/drugActions";
import {DrugList} from "./DrugList"

@connect((store) => {
    return {
        resources: store.drug.resources,
    };
})
export default class FindDrug extends React.Component {

    @autobind
    doSearch(query) {
        this.props.dispatch(drugSearch(query));
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search for a drug"
                       onChange={(evt) => this.doSearch(evt.target.value)}/>
                <DrugList drugs={this.props.resources} routeLink="/showDrug/:drugUuid"></DrugList>
            </div>
        );
    }

    // render() {
    //     return <DrugSearch></DrugSearch>;
    // }
}