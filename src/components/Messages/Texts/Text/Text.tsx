import React from "react";
import s from "./Text.module.css";

type TextPropsType = {
    id: number;
    message: string;
}

function Text(props: TextPropsType) {
    return(
        <div className={s.text}>
            <div id={''+props.id}>{props.message}</div>
        </div>
    )
}

export default Text;
