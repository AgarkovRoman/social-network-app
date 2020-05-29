import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;