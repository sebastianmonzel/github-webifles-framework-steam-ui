import React, {Component} from 'react';
import DatastoreConfiguration, {DATASTORE_CONFIGURATION} from "./DatastoreConfiguration";
import DatastoreInput from "./DatastoreInput";


class Configuration extends Component {

    render() {
        return (
            <div>
                <DatastoreInput />
                <h1>Configured Datastores</h1>
                {DATASTORE_CONFIGURATION
                    .map(configuration => <DatastoreConfiguration
                        name={configuration.name}
                        readonly={configuration.readOnly}
                        url={configuration.url}/>)}
            </div>
        );
    }
}

export default Configuration;
