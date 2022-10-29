import React, {ChangeEvent} from "react";
import s from "./Texts.module.css";
import {Text} from "./Text/Text";
import {TextType} from "../../../../redux/messages-reducer";

type TextsPropsType = {
    changeNewMessageText: (newText: string) => void,
    sendNewMessage: () => void,
    textsData: Array<TextType>,
    newMessageText: string,
};

export function Texts(props: TextsPropsType) {

    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.changeNewMessageText(newText);
    };
    const onSendNewMessage = () => {
        if (props.newMessageText !== '') {
            props.sendNewMessage();
        }
    };
    return (
        <div>
            <div className={s.texts}>
                {props.textsData.map((el: { id: number, message: string }) => <Text key={el.id} id={el.id} message={el.message}/>)}
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