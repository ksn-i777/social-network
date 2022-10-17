import React from "react";
import s from "./Messages.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {Texts} from "./Texts/Texts";
import {MessagesPageType} from "../../redux/store";

type MessagesPropsType = {
    messagesPage: MessagesPageType,
    dispatch: (action: any) => void,
};

export function Messages(props: MessagesPropsType) {
    return(
        <div className={s.messages}>
            <Dialogs usersData={props.messagesPage.usersData}/>
            <Texts
                textsData={props.messagesPage.textsData}
                newMessageText={props.messagesPage.newMessageText}
                dispatch={props.dispatch}/>
        </div>
    )
};