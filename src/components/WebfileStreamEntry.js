import React, {Component} from 'react';

import './WebfileStreamEntry.css';


class WebfileStreamEntry extends Component {

    render() {
        return (
            <div className="stream-entry">
                Beautiful Entry ❤ - {this.props.test}<br />
                <a href={'test'}>Download webfile</a>
            </div>
        );
    }
}

export default WebfileStreamEntry;
