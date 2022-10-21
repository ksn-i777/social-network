import React from "react";
import s from "./Texts.module.css";
import {Text} from "./Text/Text";
import {actionAddNewMessage, actionNewMessageText, TextType} from "../../../../redux/store";

type TextsPropsType = {
    textsData: Array<TextType>,
    newMessageText: string,
    dispatch: (action: any) => void,
};

export function Texts(props: TextsPropsType) {

    let ref = React.createRef<HTMLTextAreaElement>();

    const newMessage = () => {
        let newTextMessage = ref.current?.value;
        props.dispatch(actionNewMessageText(newTextMessage));
    };
    const sendNewMessage = () => {
        if (ref.current?.value !== (null || '')) {
            props.dispatch(actionAddNewMessage());
        }
    };
    return (
        <div>
            <div className={s.texts}>
                {props.textsData.map((el: { id: number, message: string }) => <Text id={el.id} message={el.message}/>)}
            </div>
            <div>
                <textarea value={props.newMessageText} ref={ref} onChange={newMessage}></textarea>
            </div>
            <div>
                <button onClick={sendNewMessage}>Send message</button>
            </div>
        </div>
    )
};