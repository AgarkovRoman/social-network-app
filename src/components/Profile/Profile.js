import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

    return (
        <div className={classes.Profile}>
            <ProfileInfo/>
            <MyPosts
                postdata={props.state.PostsData}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile;
