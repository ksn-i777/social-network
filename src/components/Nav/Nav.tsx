import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {OnlineFriendsContainer} from "./OnlineFriends/OnlineFriendsContainer";

export function Nav() {
    return(
        <nav className={s.nav}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
            <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            <OnlineFriendsContainer/>
        </nav>
    )
}
