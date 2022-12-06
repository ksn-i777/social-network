import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Friend.module.css"

type FriendPropsType = {
    id:string,
    name:string,
    photo:string,
    status:string,
    followed:boolean,
    changeOnFollow():void,
    changeOnUnfollow():void,
}

export function Friend(props:FriendPropsType) {
    return(
        <div className={s.friend}>
            <div className={s.photoButton}>
                <NavLink to={'/profile/' + props.id} activeClassName={s.photo}><img className={s.photo} src={props.photo ? props.photo : 'https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg'} alt="photoUser" /></NavLink>
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
                    <div>{'country'}</div>
                    <div>{'city'}</div>
                </div>
            </div>
            
        </div>
    )
}