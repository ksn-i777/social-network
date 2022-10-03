import React from "react";
import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";

type DialogPropsType = {
    id: number;
    name: string;
    ava: string;
}

function Dialog(props: DialogPropsType) {
    return(
        <div className={s.dialog}>
            <NavLink to={'/messages/'+props.id} activeClassName={s.active}>
                <img src={props.ava} alt="ava" className={s.ava}/>
                {props.name}
            </NavLink>
        </div>
    )
}

export default Dialog;
