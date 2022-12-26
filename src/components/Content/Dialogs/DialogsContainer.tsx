import React from "react";
import s from "./Dialogs.module.css";
import {
    actionAddNewMessage,
    actionNewMessageText,
    MessagesActionsType,
    MessageType,
    UserType
} from '../../../redux/dialogs-reducer';
import {RootType} from '../../../redux/store';
import {connect} from 'react-redux';
import {Users} from './Users/Users';
import {Messages} from './Messages/Messages';
import {Redirect} from 'react-router-dom';

type DialogsFuncContainerPropsType = {
    usersData:Array<UserType>
    messagesData:Array<MessageType>
    newMessageText:string
    changeNewMessageText(newText: string):void
    sendNewMessage():void
    isAuth: boolean
}

function DialogsFuncContainer(props:DialogsFuncContainerPropsType) {
    return props.isAuth
        ?
        <div className={s.messages}>
            <Users usersData={props.usersData}/>
            <Messages messagesData={props.messagesData} newMessageText={props.newMessageText} changeNewMessageText={props.changeNewMessageText} sendNewMessage={props.sendNewMessage}/>
        </div>
        : <Redirect to={'/login'}></Redirect>
}

type mapStateToPropsType = {
    usersData:Array<UserType>
    messagesData:Array<MessageType>
    newMessageText:string
    isAuth: boolean
}
type mapDispatchToPropsType = {
    changeNewMessageText(newText: string):void,
    sendNewMessage():void,
}

function mapStateToProps(state:RootType):mapStateToPropsType {
    return {
        usersData: state.dialogsPage.usersData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsFuncContainer)