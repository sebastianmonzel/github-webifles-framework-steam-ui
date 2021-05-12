import React, {Component} from 'react';

import WebfileStreamInput from "./WebfileStreamInput";
import WebfileStreamEntry from "./WebfileStreamEntry";
import Box from "@material-ui/core/Box";


class WebfileStream extends Component {

    render() {
        return (
            <Box>
                <WebfileStreamInput />
                <WebfileStreamEntry content={'Beautiful Entry ❤ - content'}/>
                <WebfileStreamEntry content={'Beautiful Entry ❤ - 2'}/>
                <WebfileStreamEntry content={'Beautiful Entry ❤ - 3'}/>
                <WebfileStreamEntry content={'Beautiful Entry ❤ - 4'}/>
                <WebfileStreamEntry content={'Beautiful Entry ❤ - 5'}/>
                <WebfileStreamEntry content={'Beautiful Entry ❤ - 6'}/>
            </Box>
        );
    }

}

export default WebfileStream;
