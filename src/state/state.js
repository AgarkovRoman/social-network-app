const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {

    _state: {
        profilePage: {
            PostsData: [
                { id: 1, postText: 'This is my post' },
                { id: 1, postText: 'I am learning React' },
            ],
            newPostText: '',
        },
        dialogsPage: {
            DialogsData: [
                { id: 1, name: 'Katya Shilo' },
                { id: 2, name: 'Semen Agarkov' },
                { id: 3, name: 'Zhenya Ivanov' },
            ],
            MessegesData: [
                { id: 1, message: 'Hello!' },
                { id: 2, message: 'How are you doing?' },
                { id: 3, message: 'Hi!' },
                { id: 4, message: 'I am good!' },
                { id: 5, message: 'I am good!' },
                { id: 6, message: 'I am xfdscd!' },
            ],
            newMessageText: '',
        },
    },
    _callSubscriber() {
        console.log('state change');
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    _addPost() {
        let newPost = {
            id: 5,
            postText: this._state.profilePage.newPostText,
        };

        this._state.profilePage.PostsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.MessegesData.push(newMessage);
        this._callSubscriber(this._state);
    },
    _updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },


    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if (action.type === ADD_MESSAGE) {
            this._addMessage();
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newMessage);
        }
    },
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

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (messageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessage: messageText,
    }
}


export default store;
