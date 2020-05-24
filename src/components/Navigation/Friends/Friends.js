import React from "react";
import classes from "../Friends/Friends.module.css";

const Friends = () => {
    return (
        <div className={classes.Friends}>
            <h4>Friends</h4>
            <div className={classes.img}></div>
            <p>Katya</p>
            <div className={classes.img}></div>
            <p>Zhenya</p>
        </div>

    )
}
export default Friends;
