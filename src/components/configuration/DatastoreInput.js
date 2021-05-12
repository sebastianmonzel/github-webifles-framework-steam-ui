import React, {Component} from 'react';

import './DatastoreConfiguration.css';
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {CardContent} from "@material-ui/core";

class DatastoreInput extends Component {

    render() {
        return (
            <Box component={"div"} m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <TextField variant="outlined" fullWidth={true} label={"datastore name"} value={this.props.name} /><br/><br />
                        <TextField variant="outlined" fullWidth={true} label={"URL"} value={this.props.url} /><br />
                        <Button>Add Datastore</Button>
                    </CardContent>
                </Card>
            </Box>
        );
    }
}

export default DatastoreInput;
