import React from "react";
import classes from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <ul>
                <li><NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={classes.activeLink}>Dialogs</NavLink></li>
                <li><NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink></li>
                <li><NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;