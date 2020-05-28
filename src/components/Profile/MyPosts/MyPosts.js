import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../state/state";


const MyPosts = (props) => {

    let PostsData = props.postdata;

    let Posts = PostsData.map(obj => {
        return (
            <Post message={obj.postText}/>
        )
    });

    let newPostElement = React.createRef()


    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let postText = newPostElement.current.value;
        // props.updateNewPostText(messageText);
        // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: postText };
        props.dispatch(updateNewPostTextActionCreator(postText));
    }



    return (
        <>
            <h3>My posts</h3>
            <div>
                <textarea
                    ref={newPostElement}
                    onChange={onPostChange}
                    value={props.newPostText}
                />

                <button
                    onClick={addPost}

                >Add post</button>
            </div>
            {Posts}
        </>
    )
}

export default MyPosts;
