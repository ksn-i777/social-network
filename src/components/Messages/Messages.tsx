import React from "react";
import s from "./Messages.module.css"
import Dialogs from "./Dialogs/Dialogs"
import Texts from "./Texts/Texts"

type MessagesPropsData = {
    usersData: any;
    textsData: any;
}

function Messages(props: MessagesPropsData) {
    return(
        <div className={s.messages}>
            <Dialogs usersData={props.usersData}/>
            <Texts textsData={props.textsData}/>
        </div>
    )
}

export default Messages;
