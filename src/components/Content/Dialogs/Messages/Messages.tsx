import React from "react"
import s from "./Messages.module.css"
import {Message} from "./Message"
import {MessageType} from "../../../../redux/dialogs-reducer"
import {Field, reduxForm} from 'redux-form'

//form

type NewMessageReduxFormDataType = {
    newMessage: string
}

const NewMessageReduxForm = reduxForm<NewMessageReduxFormDataType>({form: 'newMessage'})(NewMessageForm)

function NewMessageForm(props:any) {
    console.log(props)
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessage'} component={'textarea'} placeholder={'enter your message'}/>
            </div>
            <button>Send message</button>
        </form>
    )
}

//messages

type TextsPropsType = {
    messagesData:Array<MessageType>,
    sendNewMessage(newMessage:string):void,
};

export function Messages(props:TextsPropsType) {

    function onSendNewMessage(newMessageFormData: NewMessageReduxFormDataType):void {
        if (newMessageFormData.newMessage !== '') {
            props.sendNewMessage(newMessageFormData.newMessage);
        }
    }

    return (
        <div>
            <div className={s.texts}>
                {props.messagesData.map(el => <Message key={el.id} id={el.id} message={el.message}/>)}
            </div>
            <NewMessageReduxForm onSubmit={onSendNewMessage}/>
        </div>
    )
}