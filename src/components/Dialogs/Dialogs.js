import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form'
// import { Redirect } from 'react-router-dom';

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

    let addMessage = (values) => {
        // newMessageElement.current.value = '';
        props.sendMessage(values.newMessageText);
    }

    // if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={classes.Dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messagesItems}>
                {messegesElements}
                <hr />
                <AddMessageReduxForm onSubmit={addMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageText' placeholder='Enter your message'>
                {/* <textarea
                    ref={newMessageElement}
                    placeholder="Write a message"
                    value={props.newMessageText}
                    onChange={onChangeMessage}
                /> */}
            </Field>
            <div>
                <button
                // onClick={addMessage}
                >Send
            </button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)


export default Dialogs;