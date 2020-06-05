import React from 'react';
import { connect } from 'react-redux';
import { setUsers, toggleFollowUser, setCurrentPage, setTotalUsersCount, togglePreloaderFetching } from "../../redux/users-reducer";
import * as axios from "axios";
import Users from './Users'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.togglePreloaderFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.togglePreloaderFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloaderFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.togglePreloaderFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <>
                < Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChenged={this.onPageChenged}
                    users={this.props.users}
                    toggleFollowUser={this.props.toggleFollowUser}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

const UserContainer = connect(mapStateToProps, {
    toggleFollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togglePreloaderFetching,
})(UsersContainer);

export default UserContainer