import React from 'react';
import classes from './Users.module.scss';
import * as axios from "axios";
import userIcon from '../../assets/images/userIcon.png';

let Users = (props) => {
    if (props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

            props.setUsers(response.data.items);
        });
    }


    return <div className={classes.Users}>
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
    </div>
}

export default Users