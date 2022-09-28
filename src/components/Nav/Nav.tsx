import React from "react";
import s from './Nav.module.css';

function Nav() {
    return(
        <nav className={s.nav}>
            <div><a href="/profile" className={`${s.item} ${s.active}`}>Profile</a></div>
            <div><a href="/messages" className={s.item}>Messages</a></div>
            <div><a href="/news" className={s.item}>News</a></div>
            <div><a href="/music" className={s.item}>Music</a></div>
            <div><a href="/settings" className={s.item}>Settings</a></div>
        </nav>
    )
}

export default Nav;
