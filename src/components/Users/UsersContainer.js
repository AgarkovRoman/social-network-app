import React from 'react';
import { connect } from 'react-redux';
import { setUsers, toggleFollowUser, setCurrentPage, setTotalUsersCount, togglePreloaderFetching, toggleFollowingFetching } from "../../redux/users-reducer";
import Users from './Users'
import { userAPI } from '../../api/api'

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.togglePreloaderFetching(true);

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.togglePreloaderFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        });
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.togglePreloaderFetching(true);

        userAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.togglePreloaderFetching(false);
                this.props.setUsers(data.items);
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

                    toggleFollowingFetching={this.props.toggleFollowingFetching}
                    isFollowingInProgress={this.props.isFollowingInProgress}
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

        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

const UserContainer = connect(mapStateToProps, {
    toggleFollowUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    togglePreloaderFetching,
    toggleFollowingFetching,
})(UsersContainer);

export default UserContainer