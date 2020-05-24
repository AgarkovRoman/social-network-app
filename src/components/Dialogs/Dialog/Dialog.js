import React from "react";
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog}>
            <div className={classes.img}></div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;
