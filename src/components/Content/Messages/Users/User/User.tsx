import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number;
    name: string;
    ava: string;
};

export function User(props: DialogPropsType) {
    return(
        <div className={s.dialog}>
            <NavLink to={'/messages/'+props.id} activeClassName={s.active}>
                <img src={props.ava} alt="ava" className={s.ava}/>
                {props.name}
            </NavLink>
        </div>
    )
}