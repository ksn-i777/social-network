import React from "react";
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

type FriendsPropsType = {
    friendsData: any;
}

function Friends(props: FriendsPropsType) {
    return (
        <div className={s.friends}>
            {props.friendsData.map((el: { id: number; name: string; ava: string; }) => <Friend id={el.id} name={el.name} ava={el.ava}/>)}
        </div>
    )
}

export default Friends;
