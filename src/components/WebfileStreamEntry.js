import React, {Component} from 'react';

import './WebfileStreamEntry.css';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";


class WebfileStreamEntry extends Component {

    render() {
        return (
            <Box component="div" m={5}>
                <Card>
                    Beautiful Entry ❤ - {this.props.test}<br />
                    <Button href={'test'} color="primary">Download webfile</Button>
                </Card>
            </Box>
        );
    }
}

export default WebfileStreamEntry;
