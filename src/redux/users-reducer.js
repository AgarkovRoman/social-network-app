import { userAPI, followAPI } from '../api/api'

const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_PRELOADER_FETCHING = 'TOGGLE-PRELOADER-FETCHING';
const TOGGLE_FOLLOWING_FETCHING = 'TOGGLE_FOLLOWING_FETCHING';

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
                    }
                    return u;
                }),
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_PRELOADER_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case TOGGLE_FOLLOWING_FETCHING: {
            return {
                ...state,
                isFollowingInProgress:
                    action.isFollowingInProgress
                        ? [...state.isFollowingInProgress, action.userId]
                        : state.isFollowingInProgress.filter(id => id !== action.userId),
            }
        }
        default:
            return state;
    }
}

export const toggleFollowUser = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId,
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount,
    }
}

export const togglePreloaderFetching = (isFetching) => {
    return {
        type: TOGGLE_PRELOADER_FETCHING,
        isFetching,
    }
}

export const toggleFollowingFetching = (isFollowingInProgress, userId) => {
    return {
        type: TOGGLE_FOLLOWING_FETCHING,
        isFollowingInProgress,
        userId,
    }
}

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(togglePreloaderFetching(true));

    let response = await userAPI.getUsers(currentPage, pageSize);
    dispatch(togglePreloaderFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
}


const toggelFollowFlow = async (dispatch, id, APIMethod) => {

    dispatch(toggleFollowingFetching(true, id))
    let response = await APIMethod(id)
    if (response.resultCode === 0) {
        dispatch(toggleFollowUser(id));
    }
    dispatch(toggleFollowingFetching(false, id));
}

export const follow = (id) => async (dispatch) => {
    let APIMethod = followAPI.followUsers.bind(userAPI);
    toggelFollowFlow(dispatch, id, APIMethod);
}

export const unfollow = (id) => async (dispatch) => {
    let APIMethod = followAPI.unfollowUsers.bind(userAPI);
    toggelFollowFlow(dispatch, id, APIMethod);
}

export default usersReducer;