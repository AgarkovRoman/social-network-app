import React from "react";
import classes from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Message</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}
export default Navigation;