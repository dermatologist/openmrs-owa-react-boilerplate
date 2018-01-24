import React from 'react';

import {Link} from 'react-router'
import {connect} from "react-redux";
import {loadManifest} from "../actions/contextActions";
import FindPatient from "../components/FindPatient";
import Help from "../components/Help";

import RGL, { WidthProvider } from "react-grid-layout";
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);

@connect((store) => {
    return {
        href: store.context.manifest.activities.openmrs.href,
        name: store.context.manifest.name,
        version: store.context.manifest.version,
        description: store.context.manifest.description,
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
                <h2>{this.props.name} | Version: {this.props.version}</h2>
                <h3>Developer: {this.props.developer} | website: {this.props.website}</h3>
                <h4>Description: {this.props.description}</h4>
                <h5>OpenMRS root: {this.props.href}</h5>

                <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                    <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>
                        <FindPatient/>
                    </div>
                    <div key="b" data-grid={{x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4}}>
                        {this.props.children}
                    </div>
                    <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}}>
                        <Help/>
                    </div>
                </ReactGridLayout>
            </div>
        )
    }
}