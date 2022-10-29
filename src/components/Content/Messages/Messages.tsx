import React from "react";
import s from "./Messages.module.css";
import {UsersContainer} from "./Users/UsersContainer";
import {TextsContainer} from './Texts/TextsContainer';

export function Messages() {
    return(
        <div className={s.messages}>
            <UsersContainer/>
            <TextsContainer/>
        </div>
    )
}