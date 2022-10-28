import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {OnlineFriends} from "./OnlineFriends/OnlineFriends";
import {NavbarType} from '../../redux/navbar-reducer';

type NavPropsType = {
    navbar: NavbarType;
};

export function Nav(props: NavPropsType) {
    return(
        <nav className={s.nav}>
            <div className={s.div}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.div}><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.div}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.div}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div className={s.div}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            <div className={s.div}><OnlineFriends onlineFriendsData={props.navbar.onlineFriendsData}/></div>
        </nav>
    )
}
