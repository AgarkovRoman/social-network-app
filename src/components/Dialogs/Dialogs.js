import React from "react";
import classes from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = () => {

    let DialogsData = [
        {id:1, name: 'Roman'},
        {id:2, name: 'Katya'},
        {id:3, name: 'Zhenya'},
    ];
    let MessegesData = [
        {id:1, message: 'Hello!'},
        {id:2, message: 'How are you doing?'},
        {id:3, message: 'Hi!'},
        {id:4, message: 'I am good!'},
        {id:5, message: 'I am good!'},
        {id:5, message: 'I am xfdscd!'},
    ]

    return (
            <div className={classes.Dialogs}>
                <div className={classes.dialogsItems}>

                    {DialogsData.map((arr, index) => {
                        return (
                            <Dialog
                                name={arr.name}
                                id={arr.id}
                            />
                        )
                    })}

                </div>

                <div className={classes.messagesItems}>

                    {MessegesData.map((obj, index) => {
                        return (
                            <Message
                                message={obj.message}
                            />
                        )
                    })}

                </div>
            </div>
    )
}

export default Dialogs;