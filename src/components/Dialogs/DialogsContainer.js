import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onChangeMessage = (messageText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(messageText))
    }

    return (
        <Dialogs
            updateNewMessage={onChangeMessage}
            sendMessage={addMessage}
            dialogsPage={state}
        />
    )
}

export default DialogsContainer;
