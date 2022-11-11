import React from "react";
import {
    actionAddNewMessage,
    actionNewMessageText,
    MessagesActionsType,
    TextsDataType
} from '../../../../redux/messages-reducer';
import {Texts} from './Texts';
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

function mapStateToProps(state:StateType):TextsDataType {
    return {
        textsData: state.messagesPage.textsData,
        newMessageText: state.messagesPage.newMessageText,
    }
}

function mapDispatchToProps(dispatch:(AC:MessagesActionsType) => void) {
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