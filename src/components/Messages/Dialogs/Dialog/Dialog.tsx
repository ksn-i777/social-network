import React from "react";
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number;
    name: string;
}

function Dialog(props: DialogPropsType) {
    return(
        <div className={s.dialog}>
            <div><NavLink to={'/messages/'+props.id} activeClassName={`${s.active}`}>{props.name}</NavLink></div>
        </div>
    )
}

export default Dialog;
