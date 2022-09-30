import React from "react";
import s from "./Messages.module.css"
import Dialogs from "./Dialogs/Dialogs"
import Texts from "./Texts/Texts"

type MessagesPropsData = {
    state: any;
}

function Messages(props: MessagesPropsData) {
    return(
        <div className={s.messages}>
            <Dialogs usersData={props.state.usersData}/>
            <Texts textsData={props.state.textsData}/>
        </div>
    )
}

export default Messages;
