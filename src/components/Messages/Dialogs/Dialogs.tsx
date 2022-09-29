import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";

let usersData = [
    {id: 1, name: 'Serg'},
    {id: 2, name: 'Eva'},
    {id: 3, name: 'Leon'},
    {id: 4, name: 'Kira'},
    {id: 5, name: 'Tihon'},
    {id: 6, name: 'Sveta'},
    {id: 7, name: 'Petr'},
    {id: 8, name: 'Leonid'},
    {id: 9, name: 'Kate'},
];

function Dialogs() {
    return(
        <div className={s.dialogs}>
            <Dialog id={usersData[0].id} name={usersData[0].name} />
            <Dialog id={usersData[1].id} name={usersData[1].name} />
            <Dialog id={usersData[2].id} name={usersData[2].name} />
            <Dialog id={usersData[3].id} name={usersData[3].name} />
            <Dialog id={usersData[4].id} name={usersData[4].name} />
            <Dialog id={usersData[5].id} name={usersData[5].name} />
            <Dialog id={usersData[6].id} name={usersData[6].name} />
            <Dialog id={usersData[7].id} name={usersData[7].name} />
            <Dialog id={usersData[8].id} name={usersData[8].name} />
        </div>
    )
}

export default Dialogs;
