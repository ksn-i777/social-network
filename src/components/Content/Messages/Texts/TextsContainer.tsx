import React from "react";
import {actionAddNewMessage, actionNewMessageText} from "../../../../redux/messages-reducer";
import {Texts} from './Texts';
import {StoreContext} from '../../../../StoreContext';

export function TextsContainer() {

    return (
        <StoreContext.Consumer>
            {(store) => {

                const changeNewMessageText = (newText: string) => {
                    store.dispatch(actionNewMessageText(newText));
                };

                const sendNewMessage = () => {
                    store.dispatch(actionAddNewMessage());
                };

                return <Texts
                            changeNewMessageText={changeNewMessageText}
                            sendNewMessage={sendNewMessage}
                            textsData={store.getState().messagesPage.textsData}
                            newMessageText={store.getState().messagesPage.newMessageText}
                />
            }}
        </StoreContext.Consumer>
    )
}