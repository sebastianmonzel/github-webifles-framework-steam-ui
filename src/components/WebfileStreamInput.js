import React, {Component} from 'react';
import './WebfileStreamInput.css';


class WebfileStreamInput extends Component {

    render() {
        return (
            <div className="stream-input">
                <textarea className="stream-text-input">Add some Text</textarea><br />
                <select>
                    <option value={'friends_only'}>friends_only</option>
                    <option value={'all'}>all</option>
                </select>
                <input type={"button"} value={"abschicken"}/>
            </div>
        );
    }
}

export default WebfileStreamInput;
