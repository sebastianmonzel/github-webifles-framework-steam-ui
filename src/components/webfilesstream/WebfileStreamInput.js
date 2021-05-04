import React, {Component} from 'react';
import './WebfileStreamInput.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


class WebfileStreamInput extends Component {

    render() {
        return (
            <Box component="div" m={5}>
                <TextField fullWidth={true} variant="outlined" label={"Message"} multiline />
                datastore:
                <Select labelId="label" id="select">
                    <MenuItem value="10">friends_only</MenuItem>
                    <MenuItem value="20">all</MenuItem>
                </Select><br />
                <Button>Save</Button>
            </Box>
        );
    }
}

export default WebfileStreamInput;
