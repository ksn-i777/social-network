import React from "react";
import s from "./Text.module.css";

type TextPropsType = {
    value: string;
}

function Text(props: TextPropsType) {
    return(
        <div className={s.text}>
            <div>{props.value}</div>
        </div>
    )
}

export default Text;
