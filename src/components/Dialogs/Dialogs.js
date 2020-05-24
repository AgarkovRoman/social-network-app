import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsData = props.state.DialogsData;
    let messegesData = props.state.MessegesData;

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
        props.addMessage();
        newMessageElement.current.value = '';
    }

    let onChangeMessage = () => {
        let messageText = newMessageElement.current.value;
        props.updateNewMessageText(messageText);
    }

    return (
            <div className={classes.Dialogs}>
                <div className={classes.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={classes.messagesItems}>
                    {messegesElements}
                    <hr/>
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
