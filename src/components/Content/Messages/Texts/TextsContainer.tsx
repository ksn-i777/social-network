import React from "react";
import {actionAddNewMessage, actionNewMessageText} from "../../../../redux/messages-reducer";
import {Texts} from './Texts';
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        textsData: state.messagesPage.textsData,
        newMessageText: state.messagesPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeNewMessageText: (newText: string) => {
            dispatch(actionNewMessageText(newText));
        },
        sendNewMessage: () => {
            dispatch(actionAddNewMessage())
        },
    }
}

export const TextsContainer = connect(mapStateToProps, mapDispatchToProps)(Texts)