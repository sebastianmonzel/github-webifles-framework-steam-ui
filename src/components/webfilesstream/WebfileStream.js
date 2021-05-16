import React, {Component} from 'react';

import WebfileStreamInput from "./WebfileStreamInput";
import WebfileStreamEntry from "./WebfileStreamEntry";
import Box from "@material-ui/core/Box";
import {retrieveWebfiles} from "../../rest/webfilestream.endpoint";


class WebfileStream extends Component {

    render() {

        let webfiles = retrieveWebfiles();

        let box = <Box>
            <WebfileStreamInput/>
            {webfiles
                .map(webfile => <WebfileStreamEntry content={webfile.text} date={webfile.date}/>)
            }
        </Box>;

        return box;
    }

}

export default WebfileStream;
