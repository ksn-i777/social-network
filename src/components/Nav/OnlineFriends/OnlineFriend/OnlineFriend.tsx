import React from "react";
import s from './OnlineFriend.module.css';
import {OnlineFriendType} from "../../../../redux/navbar-reducer";

type OnlineFriendPropsType = OnlineFriendType;

export function OnlineFriend(props: OnlineFriendPropsType) {
    return(
        <div className={s.onlineFriend}>
            <img className={s.ava} src={props.ava} alt="ava"/>
            <div className={s.name} id={`${props.id}`}>{props.name}</div>
        </div>
    )
};
