import React from "react";
import s from "./Text.module.css";
import {TextType} from "../../../../redux/messages-reducer";

export function Text(props: TextType) {
    return(
        <div className={s.text}>
            <div id={`${props.id}`}>{props.message}</div>
        </div>
    )
}