import React from 'react';

import {Link} from 'react-router'
import {connect} from "react-redux";
import {loadManifest} from "../actions/contextActions";
import FindPatient from "../components/FindPatient";

import RGL, {WidthProvider} from "react-grid-layout";
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import ShowPatient from "../components/ShowPatient";
import FindDrug from "../components/FindDrug";
import ShowDrug from "../components/ShowDrug";
import '../styles/grid.css';

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
            <div className="container">
                <div className="row">
                    <div className="span12">

                <h1>React Example</h1>
                <ul role="nav">
                    <li><Link to="/findPatient" activeClassName="active">Find</Link></li>
                    <li><Link to="/help" activeClassName="active">Help</Link></li>
                </ul>

                        <ReactGridLayout className="layout" cols={12} rowHeight={30} width={1200}>
                            <div key="title" data-grid={{x: 0, y: 0, w: 12, h: 2, static: true}}>
                                <h2>{this.props.name} | Version: {this.props.version}</h2>
                            </div>
                            <div key="patient" data-grid={{x: 0, y: 3, w: 4, h: 2, static: true}}>
                                <FindPatient/>
                            </div>
                            <div key="patient-show" className="results-panel"
                                 data-grid={{x: 0, y: 7, w: 4, h: 2, minWidth: 2, minHeight: 3}}>
                                <ShowPatient/>
                            </div>
                            <div key="drug" data-grid={{x: 6, y: 3, w: 4, h: 2, static: true}}>
                                <FindDrug/>
                            </div>
                            <div key="drug-show" className="results-panel"
                                 data-grid={{x: 6, y: 7, w: 4, h: 2, minWidth: 2, minHeight: 3}}>
                                <ShowDrug/>
                            </div>
                            <div key="footer" data-grid={{x: 0, y: 10, w: 12, h: 2, static: true}}>
                                <small>
                                    <b>Developer:</b> {this.props.developer} | website: {this.props.website}<br/>
                                    <b>Description:</b> {this.props.description}<br/>
                                    <b>OpenMRS root:</b> {this.props.href}
                                </small>
                    </div>
                </ReactGridLayout>
                    </div>
                </div>
            </div>
        )
    }
}