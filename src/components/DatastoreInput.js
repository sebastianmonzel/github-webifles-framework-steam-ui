import React, {Component} from 'react';

import './DatastoreConfiguration.css';

class DatastoreInput extends Component {

    render() {
        return (
            <div className={'configuration-entry'} >
                <b>datastore name</b>: <input /><br />
                <b>URL</b>: <input />
                <input type={"button"} value={"abschicken"}/>
            </div>
        );
    }
}

export default DatastoreInput;
