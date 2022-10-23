import React, {ChangeEvent} from "react";
import s from "./Texts.module.css";
import {Text} from "./Text/Text";
import {actionAddNewMessage, actionNewMessageText, TextType} from "../../../../redux/store";

type TextsPropsType = {
    textsData: Array<TextType>,
    newMessageText: string,
    dispatch: (action: any) => void,
};

export function Texts(props: TextsPropsType) {

    const onChangeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(actionNewMessageText(newText));
    };
    const sendNewMessage = () => {
        if (props.newMessageText !== (null || '')) {
            props.dispatch(actionAddNewMessage());
        }
    };
    return (
        <div>
            <div className={s.texts}>
                {props.textsData.map((el: { id: number, message: string }) => <Text id={el.id} message={el.message}/>)}
            </div>
            <div>
                <textarea value={props.newMessageText} onChange={onChangeNewMessageText}></textarea>
            </div>
            <div>
                <button onClick={sendNewMessage}>Send message</button>
            </div>
        </div>
    )
};