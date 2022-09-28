import React from "react";
import s from "./Messages.module.css"
import Dialogs from "./Dialogs/Dialogs"
import Texts from "./Texts/Texts"

function Messages() {
    return(
        <div className={s.messages}>
            <Dialogs />
            <Texts />
        </div>
    )
}

export default Messages;
