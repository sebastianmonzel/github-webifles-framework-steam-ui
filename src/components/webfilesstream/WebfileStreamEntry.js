import React, {Component} from 'react';

import './WebfileStreamEntry.css';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import GetAppIcon from '@material-ui/icons/GetApp';


class WebfileStreamEntry extends Component {

    render() {
        return (
            <Box component="div" marginTop={2} marginLeft={2} marginRight={2} marginBottom={0}>
                <Card variant="outlined">
                    <CardContent>
                        {this.props.content}<br />
                        <Button href={'link'} color="primary" startIcon={<GetAppIcon />}>Download webfile</Button>
                    </CardContent>
                </Card>
            </Box>
        );
    }
}

export default WebfileStreamEntry;
