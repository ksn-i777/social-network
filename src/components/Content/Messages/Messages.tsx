import React from "react";
import s from "./Messages.module.css";
import {Dialogs} from "./Dialogs/Dialogs";
import {TextsContainer} from './Texts/TextsContainer';

type MessagesPropsType = {
    store: any,
};

export function Messages(props: MessagesPropsType) {
    return(
        <div className={s.messages}>
            <Dialogs usersData={props.store.getState().messagesPage.usersData}/>
            <TextsContainer store={props.store}/>
        </div>
    )
};