import React from 'react';
import { connect } from 'react-redux';
import { toggleFollowUser, setCurrentPage, togglePreloaderFetching, toggleFollowingFetching, getUsers, follow, unfollow } from "../../redux/users-reducer";
import Users from './Users'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
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

                    isFollowingInProgress={this.props.isFollowingInProgress}

                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
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

//let withRedirectComponent = withAuthRedirect(UsersContainer)

// const UserContainer = connect(mapStateToProps, {
//     toggleFollowUser,
//     setCurrentPage,
//     togglePreloaderFetching,
//     toggleFollowingFetching,
//     getUsers,
//     follow,
//     unfollow,
// })(withRedirectComponent);

// export default UserContainer

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        toggleFollowUser,
        setCurrentPage,
        togglePreloaderFetching,
        toggleFollowingFetching,
        getUsers,
        follow,
        unfollow,
    })
)(UsersContainer)