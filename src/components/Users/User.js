import React from 'react';
import classes from './Users.module.scss';
import userIcon from '../../assets/images/userIcon.svg';
import { NavLink } from 'react-router-dom';

let User = ({ user, ...props }) => {
    return <div>
        <span>
            <NavLink to={`/profile/${user.id}`}>
                <img className={classes.Img} src={user.photos.small !== null ? user.photos.small : userIcon} alt='' />
            </NavLink>
        </span>
        <span>
            {user.followed
                ? <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => { props.unfollow(user.id) }} >Unfollow</button>
                : <button disabled={props.isFollowingInProgress.some(id => id === user.id)} onClick={() => { props.follow(user.id) }}   >Follow</button>
            }
        </span>
        <span>
            <span>
                <div>{user.name}</div><div>{user.status}</div>
            </span>
            <span>
                {/* <div>{user.location.country}</div><div>{user.location.city}</div> */}
            </span>
        </span>
    </div>

}

export default User