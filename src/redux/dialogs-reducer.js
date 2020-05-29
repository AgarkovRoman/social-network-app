const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            state.MessegesData.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
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

export default dialogsReducer;