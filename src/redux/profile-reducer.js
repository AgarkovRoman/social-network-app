import { userAPI, profileAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const SET_STATUS = 'SET_STATUS';

let initialState = {
    PostsData: [
        { id: 1, postText: 'This is my post' },
        { id: 2, postText: 'I am learning React' },
    ],
    newPostText: '',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                postText: action.newPostText,
            };

            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                //newPostText: '',
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                PostsData: state.PostsData.filter(p => p.id != action.postId)
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const deletePostActionCreator = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}

// export const updateNewPostTextActionCreator = (postText) => {
//     return {
//         type: UPDATE_NEW_POST_TEXT,
//         newText: postText,
//     }
// }

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status,
    }
}

export const getProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                debugger;
                dispatch(setStatus(response.data));
            })
    }
}

export const updateStatus = (userId) => {
    return (dispatch) => {
        profileAPI.updateStatus(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(response.data));
                }
            })
    }
}

export default profileReducer;