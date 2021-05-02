import React, {Component} from 'react';
import {Link} from "react-router-dom";



class Navigation extends Component {

    render() {
        return (
            <div>
                <Link to={"/webfilestream"}>Webfile Stream</Link><br />
                <Link to={"/webfileconfiguration"}>Webfile Configuration</Link>
            </div>
        );
    }
}

export default Navigation;
