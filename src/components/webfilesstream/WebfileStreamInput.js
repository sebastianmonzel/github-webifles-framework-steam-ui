import React, {Component} from 'react';
import './WebfileStreamInput.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";


class WebfileStreamInput extends Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {datastore: ''};
        this.doChange = this.doChange.bind(this);
        this.doSave = this.doSave.bind(this);

    }

    render() {
        return (
            <Box component="div" m={2}>
                <TextField fullWidth={true} variant="outlined" label={"Message"} multiline />
                datastore:
                <Select onChange={this.doChange} labelId="label" id="select">
                    <MenuItem value="friends_only">friends_only</MenuItem>
                    <MenuItem value="all">all</MenuItem>
                </Select><br />
                <Button onClick={this.doSave}>Save</Button>
            </Box>
        );
    }

    doChange(e) {
        this.setState({datastore: e.target.value});
    }

    doSave() {

        axios({
            method: 'post',
            url: '/login',
            data: {
                datastore: this.state.datastore,
                lastName: 'Williams'
            }
        });

        console.log("save");
    }
}

export default WebfileStreamInput;
