import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import ExitToAppIcon from 'material-ui/svg-icons/action/exit-to-app';
import './navBar.css';

const NavBar = ({ links = [] }) => {
    return (
        <div class="topnav">
            {links.map(link => {
                return (
                    <NavLink to={link.asSlugPath} activeStyle={{ borderBottom: '3px solid orange' }}>
                        {link.as}
                    </NavLink>
                )
            })}
            <ExitToAppIcon className="exit"/>
        </div>
    )
}

export default withRouter(NavBar);