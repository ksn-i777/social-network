import React from "react";
import s from './OnlineFriends.module.css';
import {OnlineFriend} from "./OnlineFriend/OnlineFriend";
import {OnlineFriendType} from "../../../redux/store";


type OnlineFriendsPropsType = {
    onlineFriendsData: Array<OnlineFriendType>,
};

export function OnlineFriends(props: OnlineFriendsPropsType) {

    let onlineFriends = props.onlineFriendsData.map((el) => <OnlineFriend id={el.id} name={el.name} ava={el.ava}/>)
    
    return (
        <div className={s.onlineFriends}>{onlineFriends}</div>
    )
};
