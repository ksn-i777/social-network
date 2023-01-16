import React from "react"
import s from "./Messages.module.css"
import {Message} from "./Message"
import {MessageType} from "../../../../store/dialogs-reducer"
import {Field, reduxForm} from 'redux-form'
import {Textarea} from '../../../Common/ValidatedForms'
import {maxLengthVC, requiredField} from '../../../../validators/validators'

//form

const maxLength = maxLengthVC(10)

type NewMessageReduxFormDataType = {
    newMessage: string
}

const NewMessageReduxForm = reduxForm<NewMessageReduxFormDataType>({form: 'newMessage'})(NewMessageForm)

function NewMessageForm(props:any) {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newMessage'}
                    component={Textarea}
                    placeholder={'enter your message'}
                    validate={[requiredField, maxLength]}
                />
            </div>
            <button>Send message</button>
        </form>
    )
}

//messages

type TextsPropsType = {
    messagesData:Array<MessageType>
    sendNewMessage(newMessage:string):void
};

export function Messages(props:TextsPropsType) {

    function onSendNewMessage(newMessageFormData: NewMessageReduxFormDataType):void {
        if (newMessageFormData.newMessage !== '') {
            props.sendNewMessage(newMessageFormData.newMessage)
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