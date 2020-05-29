import React from "react";
import MyPosts from "./MyPosts"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";


const MyPostsContainer = (props) => {
    debugger
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (postText) => {
        props.store.dispatch(updateNewPostTextActionCreator(postText));
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            postdata={state.profilePage.PostsData}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;
