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

function Texts() {
    return(
        <div className={s.texts}>
            <Text id={textsData[0].id} message={textsData[0].message} />
            <Text id={textsData[1].id} message={textsData[1].message} />
            <Text id={textsData[2].id} message={textsData[2].message} />
            <Text id={textsData[3].id} message={textsData[3].message} />
            <Text id={textsData[4].id} message={textsData[4].message} />
            <Text id={textsData[5].id} message={textsData[5].message} />
            <Text id={textsData[6].id} message={textsData[6].message} />
            <Text id={textsData[7].id} message={textsData[7].message} />
            <Text id={textsData[8].id} message={textsData[8].message} />
        </div>
    )
}

export default Texts;
