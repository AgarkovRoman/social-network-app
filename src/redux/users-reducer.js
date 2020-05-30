const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
        //     {
        //         id: 1,
        //         followed: false,
        //         imgSrc: 'https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png',
        //         firstName: 'Dmitry',
        //         lastName: 'Ivanov',
        //         status: 'I am looking for a job',
        //         location: {
        //             country: 'Russia',
        //             city: 'Saint-Petersburg',
        //         },
        //     },
        //     {
        //         id: 2,
        //         followed: true,
        //         imgSrc: 'https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png',
        //         firstName: 'Nikola',
        //         lastName: 'Protonov',
        //         status: 'Die COVID-19',
        //         location: {
        //             country: 'Ukraine',
        //             city: 'Kiev',
        //         },
        //     },
        //     {
        //         id: 3,
        //         followed: false,
        //         imgSrc: 'https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png',
        //         firstName: 'Roman',
        //         lastName: 'Romanov',
        //         status: 'Hi everyone!',
        //         location: {
        //             country: 'Russia',
        //             city: 'Moscow',
        //         },
        //     },
    ],
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
            return { ...state, users: [...state.users, ...action.users] }
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

export default usersReducer;