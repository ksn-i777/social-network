import React, {ChangeEvent} from "react";
import s from "./Messages.module.css";
import {Message} from "./Message";
import {MessageType} from "../../../../redux/dialogs-reducer";

type TextsPropsType = {
    newMessageText:string,
    messagesData:Array<MessageType>,
    changeNewMessageText(newText:string):void,
    sendNewMessage():void,
};

export function Messages(props:TextsPropsType) {

    function onChangeNewMessageText(e:ChangeEvent<HTMLTextAreaElement>):void {
        const newText:string = e.currentTarget.value
        props.changeNewMessageText(newText);
    }
    function onSendNewMessage():void {
        if (props.newMessageText !== '') {
            props.sendNewMessage();
        }
    }
    return (
        <div>
            <div className={s.texts}>
                {props.messagesData.map(el => <Message key={el.id} id={el.id} message={el.message}/>)}
            </div>
            <div>
                <textarea value={props.newMessageText} onChange={onChangeNewMessageText}></textarea>
            </div>
            <div>
                <button onClick={onSendNewMessage}>Send message</button>
            </div>
        </div>
    )
}