import React from "react";
import s from "./Texts.module.css";
import Text from "./Text/Text";

let textsData = [
    {id: 1, message: '111'},
    {id: 2, message: '222'},
    {id: 3, message: '333'},
    {id: 4, message: '444'},
    {id: 5, message: '555'},
    {id: 6, message: '666'},
    {id: 7, message: '777'},
    {id: 8, message: '888'},
    {id: 9, message: '999'},
];

let texts = textsData.map(el => <Text id={el.id} message={el.message} />);

function Texts() {
    return(
        <div className={s.texts}>
            {texts}
        </div>
    )
}

export default Texts;
