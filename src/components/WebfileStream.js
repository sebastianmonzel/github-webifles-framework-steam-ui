import React, {Component} from 'react';

import WebfileStreamInput from "./WebfileStreamInput";
import WebfileStreamEntry from "./WebfileStreamEntry";


class WebfileStream extends Component {

    render() {
        return (
            <div>
                <WebfileStreamInput />
                <WebfileStreamEntry test={'hello'}/>
                <WebfileStreamEntry test={'2'}/>
                <WebfileStreamEntry/>
                <WebfileStreamEntry/>
                <WebfileStreamEntry/>
                <WebfileStreamEntry/>
            </div>
        );
    }


}

export default WebfileStream;
