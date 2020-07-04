import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from './Dialogs'
import { connect } from "react-redux";
import Dialog from "./Dialog/Dialog";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        },
        // updateNewMessage: (messageText) => {
        //     dispatch(updateNewMessageTextActionCreator(messageText));
        // },
    }
}

compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
