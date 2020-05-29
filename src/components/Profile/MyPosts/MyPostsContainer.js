import React from "react";
import MyPosts from "./MyPosts"
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { connect } from "react-redux";


// const MyPostsContainer = (props) => {

// let state = props.store.getState();

// let addPost = () => {
//     props.store.dispatch(addPostActionCreator())
// }

// let onPostChange = (postText) => {
//     props.store.dispatch(updateNewPostTextActionCreator(postText));
// }

// return (
//     <MyPosts
//         updateNewPostText={onPostChange}
//         addPost={addPost}

//     />
// )
// }
/////////

let mapStateToProps = (state) => {
    return {
        postdata: state.profilePage.PostsData,
        newPostText: state.profilePage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (postText) => {
            dispatch(updateNewPostTextActionCreator(postText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
