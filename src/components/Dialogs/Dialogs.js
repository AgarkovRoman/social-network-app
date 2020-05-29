import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;

    let dialogsData = state.DialogsData;
    let messegesData = state.MessegesData;

    let dialogsElements = dialogsData.map((arr, index) => {
        return (
            <Dialog
                name={arr.name}
                id={arr.id}
            />
        )
    });

    let messegesElements = messegesData.map((obj, index) => {
        return (
            <Message
                message={obj.message}
            />
        )
    });

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
        newMessageElement.current.value = '';
    }

    let onChangeMessage = () => {
        let messageText = newMessageElement.current.value;
        props.store.dispatch(updateNewMessageTextActionCreator(messageText))
    }

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messagesItems}>
                {messegesElements}
                <hr />
                <textarea
                    ref={newMessageElement}
                    placeholder="Write a message"
                    value={props.newMessageText}
                    onChange={onChangeMessage}
                />
                <button
                    onClick={addMessage}
                >Send</button>
            </div>
        </div>
    )
}

export default Dialogs;
