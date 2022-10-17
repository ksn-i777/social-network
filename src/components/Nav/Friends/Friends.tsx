import React from "react";
import s from './Friends.module.css';
import {Friend} from "./Friend/Friend";
import {FriendType} from "../../../redux/store";

type FriendsPropsType = {
    friendsData: Array<FriendType>,
};

export function Friends(props: FriendsPropsType) {
    return (
        <div className={s.friends}>
            {props.friendsData.map((el) => <Friend id={el.id} name={el.name} ava={el.ava}/>)}
        </div>
    )
};
