import React from 'react';
import classes from './Users.module.scss';
import userIcon from '../../assets/images/userIcon.svg';
import Loader from '../UI/Loader/Loader'
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api';

let Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    return <div className={classes.Users} >

        {props.isFetching ? <Loader /> : null}


        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selectedPage}
                    onClick={(e) => { props.onPageChenged(p) }}
                >{p}</span>
            })}
        </div>


        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <NavLink to={`/profile/${u.id}`}>
                        <img className={classes.Img} src={u.photos.small !== null ? u.photos.small : userIcon} alt='' />
                    </NavLink>
                </span>
                <span>

                    {u.followed
                        ? <button onClick={() => {

                            followAPI.unfollowUsers(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.toggleFollowUser(u.id);
                                    }
                                })

                        }}>Unfollow</button>

                        : <button onClick={() => {

                            followAPI.followUsers(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.toggleFollowUser(u.id);
                                    }
                                });

                        }}>Follow</button>}

                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{u.location.country}</div><div>{u.location.city}</div> */}
                    </span>
                </span>
            </div>
            )
        }
    </div >
}

export default Users