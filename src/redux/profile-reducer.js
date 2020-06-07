import { userAPI } from '../api/api'

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {
    PostsData: [
        { id: 1, postText: 'This is my post' },
        { id: 2, postText: 'I am learning React' },
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                postText: state.newPostText,
            };

            return {
                ...state,
                PostsData: [...state.PostsData, newPost],
                newPostText: '',
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (postText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: postText,
    }
}

export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}

export const getProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}
export default profileReducer;