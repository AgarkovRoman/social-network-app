let store = {

    _state: {
        profilePage: {
            PostsData: [
                {id: 1, postText: 'This is my post'},
                {id: 1, postText: 'I am learning React'},
            ],
            newPostText: '',
        },
        dialogsPage: {
            DialogsData: [
                {id: 1, name: 'Katya Shilo'},
                {id: 2, name: 'Semen Agarkov'},
                {id: 3, name: 'Zhenya Ivanov'},
            ],
            MessegesData: [
                {id: 1, message: 'Hello!'},
                {id: 2, message: 'How are you doing?'},
                {id: 3, message: 'Hi!'},
                {id: 4, message: 'I am good!'},
                {id: 5, message: 'I am good!'},
                {id: 6, message: 'I am xfdscd!'},
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

    addPost() {
        debugger;
        let newPost = {
            id: 5,
            postText: this._state.profilePage.newPostText,
        };

        this._state.profilePage.PostsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.MessegesData.push(newMessage);
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
}

// let rerenderEntireTree = () => {
//     console.log('state change');
// }

// let state = {
//     profilePage: {
//         PostsData: [
//             {id: 1, postText: 'This is my post'},
//             {id: 1, postText: 'I am learning React'},
//         ],
//         newPostText: '',
//     },
//     dialogsPage: {
//         DialogsData: [
//             {id: 1, name: 'Katya Shilo'},
//             {id: 2, name: 'Semen Agarkov'},
//             {id: 3, name: 'Zhenya Ivanov'},
//         ],
//         MessegesData: [
//             {id: 1, message: 'Hello!'},
//             {id: 2, message: 'How are you doing?'},
//             {id: 3, message: 'Hi!'},
//             {id: 4, message: 'I am good!'},
//             {id: 5, message: 'I am good!'},
//             {id: 6, message: 'I am xfdscd!'},
//         ],
//         newMessageText: '',
//     },
// }

// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         postText: state.profilePage.newPostText,
//     };
//
//     state.profilePage.PostsData.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state )
// }

// export const addMessage = () => {
//     let newMessage = {
//         id: 7,
//         message: state.dialogsPage.newMessageText,
//     };
//
//     state.dialogsPage.MessegesData.push(newMessage);
//     rerenderEntireTree(state);
// }

// export const updateNewMessageText = (newMessage) => {
//     state.dialogsPage.newMessageText = newMessage;
//     rerenderEntireTree(state)
//
//
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }


export default store;
