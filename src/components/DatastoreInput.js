import React, {Component} from 'react';

import './DatastoreConfiguration.css';
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class DatastoreInput extends Component {

    render() {
        return (
            <Box m={5}>
                <TextField variant="outlined" label={"datastore name"} value={this.props.name} />
                <TextField variant="outlined" label={"URL"} value={this.props.url} />
                <Button>Abschicken</Button>
            </Box>
        );
    }
}

export default DatastoreInput;
