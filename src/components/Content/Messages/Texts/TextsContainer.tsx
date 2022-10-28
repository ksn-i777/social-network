import React from "react";
import {actionAddNewMessage, actionNewMessageText} from "../../../../redux/messages-reducer";
import {Texts} from './Texts';

type TextsContainerPropsType = {
    store: any,
};

export function TextsContainer(props: TextsContainerPropsType) {

    const changeNewMessageText = (newText: string) => {
        props.store.dispatch(actionNewMessageText(newText));
    };

    const sendNewMessage = () => {
        props.store.dispatch(actionAddNewMessage());
    };

    return <Texts
                changeNewMessageText={changeNewMessageText}
                sendNewMessage={sendNewMessage}
                textsData={props.store.getState().messagesPage.textsData}
                newMessageText={props.store.getState().messagesPage.newMessageText}
            />
}