import React from "react";
import s from "./Messages.module.css"
import Dialogs from "./Dialogs/Dialogs"
import Texts from "./Texts/Texts"

function Messages(props: any) {
    return(
        <div className={s.messages}>
            <Dialogs usersData={props.state.usersData}/>
            <Texts
                textsData={props.state.textsData}
                newMessageText={props.state.newMessageText}
                dispatch={props.dispatch}/>
        </div>
    )
}

export default Messages;
