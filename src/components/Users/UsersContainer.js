import Users from './Users';
import { connect } from 'react-redux';
import { setUsersActionCreator, toggleFollowActionCreator } from "../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
    }
}


const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserContainer