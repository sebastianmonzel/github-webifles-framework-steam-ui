import React, {Component} from 'react';

import './DatastoreConfiguration.css';
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";

class DatastoreConfiguration extends Component {

    render() {
        return (
            <Box marginTop={0} marginLeft={2} marginRight={2} marginBottom={2}>
                <Card variant="outlined">
                    <CardContent><b>datastore name</b>: {this.props.name}<br />
                        readonly: {this.props.readonly.toString()}<br />
                        <b>URL</b>: {this.props.url}</CardContent>
                </Card>
            </Box>
        );
    }
}

export default DatastoreConfiguration;
