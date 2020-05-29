import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsData = state.DialogsData;
    let messegesData = state.MessegesData;

    let dialogsElements = dialogsData.map((arr, index) => {
        return (
            <Dialog
                key={arr.id}
                name={arr.name}
                id={arr.id}
            />
        )
    });

    let messegesElements = messegesData.map((obj, index) => {
        return (
            <Message
                key={obj.id}
                message={obj.message}
            />
        )
    });

    let newMessageElement = React.createRef()

    let addMessage = () => {
        newMessageElement.current.value = '';
        props.sendMessage();
    }

    let onChangeMessage = () => {
        let messageText = newMessageElement.current.value;
        props.updateNewMessage(messageText)
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
