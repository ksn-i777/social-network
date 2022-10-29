import React from "react";
import s from "./Friend.module.css"

type FriendType = {
    id: number,
    name: string,
    followed: boolean,
    status: string,
    location: {
        country: string,
        city: string,
    },
    photo: string,
    changeOnFollow: () => void,
    changeOnUnfollow: () => void,
}

export function Friend(props: FriendType) {
    return(
        <div className={s.friend}>
            <div className={s.photoButton}>
                <img className={s.photo} src={props.photo} alt="photoUser" />
                {props.followed
                    ? <div onClick={props.changeOnUnfollow} className={`${s.button} ${s.buttonUnfollow}`}>Unfollow</div>
                    : <div onClick={props.changeOnFollow} className={`${s.button} ${s.buttonFollow}`}>Follow</div>
                }
            </div>
            <div className={s.description}>
                <div className={s.nameStatus}>
                    <div>{props.name}</div>
                    <div>{props.status}</div>
                </div>
                <div  className={s.location}>
                    <div>{props.location.country}</div>
                    <div>{props.location.city}</div>
                </div>
            </div>
            
        </div>
    )
}