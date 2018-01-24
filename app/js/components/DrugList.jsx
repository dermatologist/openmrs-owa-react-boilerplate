import React from 'react';

import {Link} from 'react-router'

export class DrugList extends React.Component {
    renderLink(pt) {
        return (
            <Link to={this.props.routeLink.replace(":drugUuid", pt.uuid)}>
                {pt.display}
            </Link>
        )
    }

    render() {
        if (this.props.drugs == null) {
            return null;
        } else if (this.props.drugs.loading) {
            return <div>Loading...</div>;
        } else if (this.props.drugs.length === 0) {
            return <div>None</div>;
        } else {
            return (
                <ul>
                    {this.props.drugs.map((pt) => <li key={pt.uuid}>{this.renderLink(pt)}</li>)}
                </ul>
            );
        }
    }
}