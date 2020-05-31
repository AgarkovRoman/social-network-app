import React from 'react';
import classes from './Users.module.scss';
import * as axios from "axios";
import userIcon from '../../assets/images/userIcon.svg';



class Users extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }



    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return < div className={classes.Users} >

            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && classes.selectedPage}
                        onClick={(e) => { this.onPageChenged(p) }}
                    >{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <span>
                        <img className={classes.Img} src={u.photos.small !== null ? u.photos.small : userIcon} alt='' />
                    </span>
                    <span>

                        {u.followed
                            ? <button onClick={() => { this.props.toggleFollowUser(u.id) }}>Unfolllow</button>
                            : <button onClick={() => { this.props.toggleFollowUser(u.id) }}>Folllow</button>}

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
}

export default Users;