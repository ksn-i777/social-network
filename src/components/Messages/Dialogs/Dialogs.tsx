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

let users = usersData.map(el => <Dialog id={el.id} name={el.name} />);

function Dialogs() {
    return(
        <div className={s.dialogs}>
            {users}
        </div>
    )
}

export default Dialogs;
