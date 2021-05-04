import React, {Component} from 'react';
import Link from "@material-ui/core/Link";
import RouterLink from "@material-ui/core/Link";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from '@material-ui/icons/Home'
import SettingsIcon from '@material-ui/icons/Settings';
import LocationOnIcon from '@material-ui/icons/LocationOn'


class Navigation extends Component {

    render() {

        return (
            <BottomNavigation showLabels>
                <BottomNavigationAction label="webfiles stream" icon={<HomeIcon />} href={"/webfilestream"} />
                <BottomNavigationAction label="Configuration" icon={<SettingsIcon />} href={"/webfileconfiguration"} />
            </BottomNavigation>
        );
    }
}

export default Navigation;
