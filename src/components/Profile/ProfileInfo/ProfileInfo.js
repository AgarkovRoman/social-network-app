import React from "react";
import classes from "./ProfileInfo.module.css"
import Loader from "../../UI/Loader/Loader"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader />
    }
    return (
        <div className={classes.coverImage}>
            <img src='https://scontent.fhel5-1.fna.fbcdn.net/v/t1.0-9/c0.624.1536.569a/40551596_1016535835174945_7455686415490220032_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=5StMyIiujeUAX-F2ASM&_nc_ht=scontent.fhel5-1.fna&oh=89f98c009c8afa5d049f333d2d9f8f13&oe=5EE964B7' />
            <div className={classes.avatar}>
                {/* <img src='https://scontent.fhel5-1.fna.fbcdn.net/v/t1.0-1/p320x320/90357812_1439202346241623_4493627494993231872_o.jpg?_nc_cat=108&_nc_sid=dbb9e7&_nc_ohc=4CJ5LjGpB0QAX9rl4ir&_nc_ht=scontent.fhel5-1.fna&_nc_tp=6&oh=e25c3e266cccbe145e75aa6a068e457c&oe=5EE970E2' /> */}
                <img src={props.profile.photos.large} />
            </div>
            <div className={classes.userName}>
                <h2>Agarkov Roman</h2>
            </div>
        </div>
    )
}

export default ProfileInfo;