import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

type NavPropsType = {
    state: any;
}

function Nav(props: NavPropsType) {
    return(
        <nav className={s.nav}>
            <div><NavLink to="/profile" activeClassName={`${s.active}`}>Profile</NavLink></div>
            <div><NavLink to="/messages" activeClassName={`${s.active}`}>Messages</NavLink></div>
            <div><NavLink to="/news" activeClassName={`${s.active}`}>News</NavLink></div>
            <div><NavLink to="/music" activeClassName={`${s.active}`}>Music</NavLink></div>
            <div><NavLink to="/settings" activeClassName={`${s.active}`}>Settings</NavLink></div>
            <div><Friends friendsData={props.state.friendsData}/></div>
        </nav>
    )
}

export default Nav;
