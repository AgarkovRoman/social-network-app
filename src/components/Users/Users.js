import React from 'react';
import classes from './Users.module.scss';
import userIcon from '../../assets/images/userIcon.svg';
import Loader from '../UI/Loader/Loader'
import { NavLink } from 'react-router-dom';
import Pagination from './Pagination';
import User from './User';

let Users = (props) => {

    return <div className={classes.Users} >

        {props.isFetching ? <Loader /> : null}


        <Pagination
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChenged={props.onPageChenged}
        />


        {
            props.users.map(u => <User
                user={u}
                key={u.id}
                toggleFollowUser={props.toggleFollowUser}
                isFollowingInProgress={props.isFollowingInProgress}
                follow={props.follow}
                unfollow={props.unfollow}
            />
            )
        }
    </div >
}

export default Users