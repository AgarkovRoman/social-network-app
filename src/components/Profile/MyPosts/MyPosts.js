import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let PostsData = props.postdata;

    let Posts = PostsData.map(obj => {
        return (
            <Post message={obj.postText}/>
        )
    });

    let newPostElement = React.createRef()

    let addPost = () => {
        let messageText = newPostElement.current.value;
        props.addPost(messageText);
    }

    return (
        <>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {Posts}
        </>
    )
}

export default MyPosts;
