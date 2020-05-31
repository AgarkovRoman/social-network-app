import React from 'react';
import classes from './Users.module.scss';
import userIcon from '../../assets/images/userIcon.svg';
import Loader from '../UI/Loader/Loader'

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
                    <img className={classes.Img} src={u.photos.small !== null ? u.photos.small : userIcon} alt='' />
                </span>
                <span>

                    {u.followed
                        ? <button onClick={() => { props.toggleFollowUser(u.id) }}>Unfolllow</button>
                        : <button onClick={() => { props.toggleFollowUser(u.id) }}>Folllow</button>}

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