import React from "react";
import s from './Friend.module.css';

type FriendPropsType = {
    id: number,
    name: string,
    ava: string,
};

export function Friend(props: FriendPropsType) {
    return(
        <div className={s.friend}>
            <img className={s.ava} src={props.ava} alt="ava"/>
            <div className={s.name} id={`${props.id}`}>{props.name}</div>
        </div>
    )
};
