import React, {Component} from 'react';

import './DatastoreConfiguration.css';
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";

export const DATASTORE_CONFIGURATION = [
    {
        "name": "public",
        "url": "https://webfiles.sebastianmonzel.de/jenkins/datastore/",
        "readOnly": true
    },
    {
        "name": "friends_only",
        "url": "https://webfiles.sebastianmonzel.de/datastore/81507a06-787c-4408-a929-dab17d5c1969",
        "readOnly": false
    },
    {
        "name": "all",
        "url": "https://webfiles.sebastianmonzel.de/datastore/25aeba09-1654-499e-bf9c-50f624a02ec6",
        "readOnly": false
    },
];

class DatastoreConfiguration extends Component {

    render() {
        return (
            <Box marginTop={0} marginLeft={2} marginRight={2} marginBottom={2}>
                <Card variant="outlined">
                    <CardContent><b>datastore name</b>: {this.props.name}<br />
                        <b>readonly:</b> {this.props.readonly.toString()}<br />
                        <b>URL</b>: {this.props.url}</CardContent>
                </Card>
            </Box>
        );
    }
}

export default DatastoreConfiguration;
