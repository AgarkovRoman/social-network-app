import React from "react";
import Post from './Post/Post'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";


const MyPosts = (props) => {
    let PostsData = props.postdata;

    let Posts = PostsData.map(obj => {
        return (
            <Post message={obj.postText} />
        )
    });

    let newPostElement = React.createRef()


    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let postText = newPostElement.current.value;
        props.updateNewPostText(postText);
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
                    onClick={onAddPost}

                >Add post</button>
            </div>
            {Posts}
        </>
    )
}

export default MyPosts;
