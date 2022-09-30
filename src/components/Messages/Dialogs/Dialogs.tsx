import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

type DialogsPropsData = {
    usersData: any;
}

function Dialogs(props: DialogsPropsData) {
    return(
        <div className={s.dialogs}>
            {props.usersData.map((el: {id: number, name: string}) => <Dialog id={el.id} name={el.name} />)}
        </div>
    )
}

export default Dialogs;
