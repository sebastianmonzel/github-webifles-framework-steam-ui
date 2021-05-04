import React, {Component} from 'react';

import WebfileStreamInput from "./WebfileStreamInput";
import WebfileStreamEntry from "./WebfileStreamEntry";
import Box from "@material-ui/core/Box";


class WebfileStream extends Component {

    render() {
        return (
            <Box m={6}>
                <WebfileStreamInput />
                <WebfileStreamEntry test={'content'}/>
                <WebfileStreamEntry test={'2'}/>
                <WebfileStreamEntry test={'3'}/>
                <WebfileStreamEntry test={'4'}/>
                <WebfileStreamEntry test={'5'}/>
                <WebfileStreamEntry test={'6'}/>
            </Box>
        );
    }


}

export default WebfileStream;
