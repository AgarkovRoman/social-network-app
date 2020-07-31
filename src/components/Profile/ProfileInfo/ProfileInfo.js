import React from "react";
import classes from "./ProfileInfo.module.css"
import Loader from "../../UI/Loader/Loader"
import ProfileStatus from '../ProfileStatus/ProfileStatus'
import UserPhoto from '../../../assets/images/userIcon.svg'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={classes.coverImage}>
            {/* <img src={"https://scontent.fhel5-1.fna.fbcdn.net/v/t1.0-9/c0.624.1536.569a/40551596_1016535835174945_7455686415490220032_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=5StMyIiujeUAX-F2ASM&_nc_ht=scontent.fhel5-1.fna&oh=89f98c009c8afa5d049f333d2d9f8f13&oe=5EE964B7"} alt=' cover' /> */}
            <div className={classes.avatar}>
                <img src={props.profile.photos.large || UserPhoto} alt='' />
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
            </div>
            <ProfileStatus
                status={props.status}
                updateStatus={props.updateStatus}
            />

            <div className={classes.userName}>
                <h2>Agarkov Roman</h2>
                <div>
                    <div>
                        Looking for a job: {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {props.profile.lookingForAJob &&
                        <div>
                            My skills: {props.profile.lookingForAJobDescription}
                        </div>
                    }
                    <div>
                        About me: {props.profile.aboutMe}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;