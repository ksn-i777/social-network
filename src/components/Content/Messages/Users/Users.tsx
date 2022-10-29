import React from "react";
import s from "./Users.module.css";
import {User} from "./User";
import {UserType} from '../../../../redux/messages-reducer';

type DialogsPropsData = {
    usersData: Array<UserType>;
};

export function Users(props: DialogsPropsData) {
    return(
        <div className={s.dialogs}>
            {props.usersData.map((el) => <User key={el.id} id={el.id} name={el.name} ava={el.ava} />)}
        </div>
    )
}