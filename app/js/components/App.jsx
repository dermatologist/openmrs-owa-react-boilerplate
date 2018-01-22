import React from 'react';

import {Link} from 'react-router'
import {connect} from "react-redux";
import {loadManifest} from "../actions/contextActions";

@connect((store) => {
    return {
        href: store.context.manifest.activities.openmrs.href,
    };
})
export default class App extends React.Component {
    componentWillMount() {
        this.props.dispatch(loadManifest());
    }

    render() {
        return (
            <div>
                <h1>React Example</h1>
                <ul role="nav">
                    <li><Link to="/findPatient" activeClassName="active">Find</Link></li>
                    <li><Link to="/help" activeClassName="active">Help</Link></li>
                </ul>
                {this.props.children}
                {this.props.href}
            </div>
        )
    }
}