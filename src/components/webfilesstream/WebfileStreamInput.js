import React, {Component} from 'react';
import './WebfileStreamInput.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import {storeWebfile} from "../../rest/webfilestream.endpoint";


class WebfileStreamInput extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {datastore: '', message: ''};
        this.doChangeDatastore = this.doChangeDatastore.bind(this);
        this.doChangeMessage = this.doChangeMessage.bind(this);
        this.doSave = this.doSave.bind(this);

    }

    render() {
        return (
            <Box component="div" m={2}>
                <TextField onChange={this.doChangeMessage} fullWidth={true} variant="outlined" label={"Message"} multiline />
                datastore:
                <Select onChange={this.doChangeDatastore} labelId="label" id="select">
                    <MenuItem value="friends_only">friends_only</MenuItem>
                    <MenuItem value="all">all</MenuItem>
                </Select><br />
                <Button onClick={this.doSave}>Save</Button>
            </Box>
        );
    }

    doChangeDatastore(e) {
        this.setState({datastore: e.target.value, message: this.state.message});
    }

    doChangeMessage(e) {
        this.setState({datastore: this.state.datastore, message: e.target.value});
    }

    doSave() {
        storeWebfile(this.state.datastore, this.state.message);
    }
}

export default WebfileStreamInput;
