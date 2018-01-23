import React from 'react';

import {Link} from 'react-router'
import {connect} from "react-redux";
import {loadManifest} from "../actions/contextActions";

@connect((store) => {
    return {
        href: store.context.manifest.activities.openmrs.href,
        name: store.context.manifest.name,
        version: store.context.manifest.version,
        description: store.context.manifest.version,
        developer: store.context.manifest.developer.name,
        website: store.context.manifest.developer.url,
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
                <h2>{this.props.name} | Version: {this.props.version}</h2>
                <h3>Developer: {this.props.developer} | website: {this.props.developer}</h3>
                <h4>Description: {this.props.description}</h4>
                <h5>OpenMRS root: {this.props.href}</h5>

            </div>
        )
    }
}