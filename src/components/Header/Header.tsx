import React from "react";
import s from "./Header.module.css";
import {NavLink} from 'react-router-dom';

export type HeaderPropsType = {
    login: string
    isAuth: boolean
}

export function Header(props:HeaderPropsType) {
    return(
        <header className={s.header}>
            <div></div>
            <div className={s.title}>Social Network</div>
            {props.isAuth ? <div className={s.login}>{props.login}</div> : <NavLink to={'/login'} className={s.login}>Login</NavLink>}
        </header>
    )
}