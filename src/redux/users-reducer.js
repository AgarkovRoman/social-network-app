const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_PRELOADER_FETCHING = 'TOGGLE-PRELOADER-FETCHING';

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: !u.followed }
                        //return {...u, followed: !followed}
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
        default:
            return state;
    }
}

export const toggleFollowActionCreator = (userId) => {
    return {
        type: TOGGLE_FOLLOW,
        userId,
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}

export const setCurrentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount,
    }
}

export const togglePreloaderFetchingActionCreator = (isFetching) => {
    return {
        type: TOGGLE_PRELOADER_FETCHING,
        isFetching,
    }
}

export default usersReducer;