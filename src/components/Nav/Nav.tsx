import React from "react";
import s from './Nav.module.css';

function Nav() {
    return(
        <nav className={s.nav}>
            <div><a href="src/components/Nav/Nav#" className={`${s.item} ${s.active}`}>Profile</a></div>
            <div><a href="src/components/Nav/Nav#" className={s.item}>Messages</a></div>
            <div><a href="src/components/Nav/Nav#" className={s.item}>News</a></div>
            <div><a href="src/components/Nav/Nav#" className={s.item}>Music</a></div>
            <div><a href="src/components/Nav/Nav#" className={s.item}>Settings</a></div>
        </nav>
    )
}

export default Nav;
