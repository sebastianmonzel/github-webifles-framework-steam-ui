import React, {Component} from 'react';

import WebfileStreamInput from "./WebfileStreamInput";
import WebfileStreamEntry from "./WebfileStreamEntry";


class WebfileStream extends Component {

    render() {
        return (
            <div>
                <WebfileStreamInput />
                <WebfileStreamEntry test={'content'}/>
                <WebfileStreamEntry test={'2'}/>
                <WebfileStreamEntry test={'3'}/>
                <WebfileStreamEntry test={'4'}/>
                <WebfileStreamEntry test={'5'}/>
                <WebfileStreamEntry test={'6'}/>
            </div>
        );
    }


}

export default WebfileStream;
