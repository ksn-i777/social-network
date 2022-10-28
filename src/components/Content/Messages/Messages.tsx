import React from "react";
import s from "./Messages.module.css";
import {Users} from "./Users/Users";
import {TextsContainer} from './Texts/TextsContainer';
import {StoreContext} from '../../../StoreContext';

export function Messages() {
    return(
        <div className={s.messages}>
            <StoreContext.Consumer>
                {(store) => {
                    return <Users usersData={store.getState().messagesPage.usersData}/>
                }}
            </StoreContext.Consumer>
            <TextsContainer/>
        </div>
    )
}