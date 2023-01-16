import React, {ComponentType} from "react"
import s from "./Dialogs.module.css"
import {
    actionAddNewMessage,
    MessagesActionsType,
    MessageType,
    UserType
} from '../../../redux/dialogs-reducer'
import {RootType} from '../../../redux/store'
import {connect} from 'react-redux'
import {Users} from './Users/Users'
import {Messages} from './Messages/Messages'
import { withAuthRedirect } from "../../../hoc/withAuthRedirect"
import { compose } from "redux"

type DialogsPropsType = {
    usersData:Array<UserType>
    messagesData:Array<MessageType>
    sendNewMessage(newMessage:string):void,
}

function Dialogs(props:DialogsPropsType) {
    return (
        <div className={s.messages}>
            <Users usersData={props.usersData}/>
            <Messages messagesData={props.messagesData} sendNewMessage={props.sendNewMessage}/>
        </div>
    )
}

type mapStateToPropsType = {
    usersData:Array<UserType>
    messagesData:Array<MessageType>
}
type mapDispatchToPropsType = {
    sendNewMessage(newMessage:string):void,
}

function mapStateToProps(state:RootType):mapStateToPropsType {
    return {
        usersData: state.dialogsPage.usersData,
        messagesData: state.dialogsPage.messagesData,
    }
}
function mapDispatchToProps(dispatch:(AC:MessagesActionsType) => void):mapDispatchToPropsType {
    return {
        sendNewMessage: (newMessage:string) => {
            dispatch(actionAddNewMessage(newMessage))
        },
    }
}

/* const DialogsWithAuthRedirectContainer = withAuthRedirect(Dialogs as ComponentType)
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWithAuthRedirectContainer) */

//равнозначные записи выше и ниже

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs as ComponentType)