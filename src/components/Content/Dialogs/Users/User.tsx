import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import {UserType} from '../../../../redux/dialogs-reducer';

export function User(props:UserType) {
    return(
        <NavLink to={'/messages/'+props.id} className={s.navlink} activeClassName={s.navlinkActive}>
            <img src={props.ava} alt="ava" className={s.ava}/>
            {props.name}
        </NavLink>
    )
}