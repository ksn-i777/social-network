import React, {ComponentType} from "react";
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
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

type DialogsPropsType = {
    usersData:Array<UserType>
    messagesData:Array<MessageType>
    newMessageText:string
    changeNewMessageText(newText: string):void,
    sendNewMessage():void,
}

function Dialogs(props:DialogsPropsType) {
    return (
        <div className={s.messages}>
            <Users usersData={props.usersData}/>
            <Messages messagesData={props.messagesData} newMessageText={props.newMessageText} changeNewMessageText={props.changeNewMessageText} sendNewMessage={props.sendNewMessage}/>
        </div>
    )
}

type mapStateToPropsType = {
    usersData:Array<UserType>
    messagesData:Array<MessageType>
    newMessageText:string
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

const DialogsWithAuthRedirectContainer = withAuthRedirect(Dialogs as ComponentType)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirectContainer)