import React from "react";
import s from "./Texts.module.css";
import Text from "./Text/Text";

type TextsPropsData = {
    textsData: any;
}

function Texts(props: TextsPropsData) {
    return(
        <div className={s.texts}>
            {props.textsData.map((el: {id: number, message: string}) => <Text id={el.id} message={el.message} />)}
        </div>
    )
}

export default Texts;
