import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div className={classes.Profile}>
            <ProfileInfo />
            <MyPostsContainer
            // store={props.store}

            // postdata={props.state.PostsData}
            // newPostText={props.state.newPostText}
            // dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile;
