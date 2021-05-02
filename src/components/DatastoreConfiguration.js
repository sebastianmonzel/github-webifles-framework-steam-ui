import React, {Component} from 'react';

import './DatastoreConfiguration.css';

class DatastoreConfiguration extends Component {

    render() {
        return (
            <div className={'configuration-entry'} >
                <b>datastore name</b>: {this.props.name}<br />
                <b>URL</b>: {this.props.url}
            </div>
        );
    }
}

export default DatastoreConfiguration;
