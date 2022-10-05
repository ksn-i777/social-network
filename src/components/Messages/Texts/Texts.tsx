import React from "react";
import s from "./Texts.module.css";
import Text from "./Text/Text";
import { newMessageActionCreater, newMessageTextActionCreater } from "../../../redux/store";

function Texts(props: any) {

    let ref = React.createRef<HTMLTextAreaElement>();

    const newMessage = () => {
        let newTextMessage = ref.current?.value;
        props.dispatch (newMessageTextActionCreater(newTextMessage));
    }
    const sendNewMessage = () => {
        if (ref.current?.value !== (null || '')) {
            props.dispatch (newMessageActionCreater()); 
        } 
    }
    return(
        <div>
            <div className={s.texts}>
                {props.textsData.map((el: {id: number, message: string}) => <Text id={el.id} message={el.message} />)}
            </div>
            <div>
                <textarea value={props.newMessageText} ref={ref} onChange={newMessage}></textarea>
            </div>
            <div>
                <button onClick={sendNewMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Texts;
