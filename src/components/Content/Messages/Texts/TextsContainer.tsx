import React from "react";
import {
    actionAddNewMessage,
    actionNewMessageText,
    MessagesActionsType,
    TextType
} from '../../../../redux/messages-reducer';
import {Texts} from './Texts';
import {connect} from "react-redux";
import {RootType} from "../../../../redux/store";

type mapStateToPropsType = {
    textsData:Array<TextType>,
    newMessageText:string,
    isAuth: boolean,
}

type mapDispatchToPropsType = {
    changeNewMessageText(newText: string):void,
    sendNewMessage():void,
}

function mapStateToProps(state:RootType):mapStateToPropsType {
    return {
        textsData: state.messagesPage.textsData,
        newMessageText: state.messagesPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
}

function mapDispatchToProps(dispatch:(AC:MessagesActionsType) => void):mapDispatchToPropsType {
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