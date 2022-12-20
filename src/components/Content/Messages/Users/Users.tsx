import React from "react"
import s from "./Users.module.css"
import {User} from "./User"
import {UserType} from '../../../../redux/messages-reducer'
import {Redirect} from 'react-router-dom'

type UsersPropsData = {
    usersData:Array<UserType>
    isAuth: boolean
};

export function Users(props:UsersPropsData) {
    return props.isAuth
        ? <div className={s.users}>{props.usersData.map((el) => <User key={el.id} id={el.id} name={el.name} ava={el.ava} />)}</div>
        : <Redirect to={'/login'}></Redirect>
}