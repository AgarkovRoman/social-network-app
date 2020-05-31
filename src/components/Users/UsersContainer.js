import Users from './Users';
import { connect } from 'react-redux';
import { setUsersActionCreator, toggleFollowActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from "../../redux/users-reducer";


let mapStateToProps = (state) => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollowUser: (userId) => {
            dispatch(toggleFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        },
    }
}


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer