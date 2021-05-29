import React, {Component} from 'react';

import WebfileStreamInput from "./WebfileStreamInput";
import {retrieveWebfiles} from "../../rest/webfilestream.endpoint";
import Box from "@material-ui/core/Box";
import WebfileStreamEntry from "./WebfileStreamEntry";


class WebfileStream extends Component {

    state = {
        webfiles: []
    }


    constructor(props) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        retrieveWebfiles()
            .then(data => {
                console.log(data);
                this.setState({webfiles: data.webfiles});
            });
    }

    render() {
        let key = 0;
        return <Box>
            <WebfileStreamInput/>
            {this.state && this.state.webfiles ? this.state.webfiles
                .map(webfile => <WebfileStreamEntry key={key++} content={webfile.firstname} date={webfile.date}/>) : <Box />}
        </Box>;
    }

}

export default WebfileStream;
