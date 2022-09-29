import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

function Dialogs() {
    return(
        <div className={s.dialogs}>
            <Dialog name={'Serg'} />
            <Dialog name={'Eva'} />
            <Dialog name={'Leon'} />
            <Dialog name={'Kira'} />
            <Dialog name={'Tihon'} />
            <Dialog name={'Valera'} />
            <Dialog name={'Petr'} />
            <Dialog name={'Leonid'} />
            <Dialog name={'Kate'} />
            <Dialog name={'Timoha'} />
        </div>
    )
}

export default Dialogs;
