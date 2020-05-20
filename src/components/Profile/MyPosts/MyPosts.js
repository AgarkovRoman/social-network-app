import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <>
            <Post message='This is my post'/>
            <Post message='I am learning React'/>
        </>
    )
}

export default MyPosts;