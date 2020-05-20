import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.Post}>
            <div className={classes.img}></div>
            <div>
                <h5>Имя Автора</h5>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Post;