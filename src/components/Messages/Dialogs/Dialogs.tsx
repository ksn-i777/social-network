import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

function Dialogs() {
    return(
        <div className={s.dialogs}>
            <div><NavLink to="/messages/serg" activeClassName={`${s.active}`}>Serg</NavLink></div>
            <div><NavLink to="/messages/eva" activeClassName={`${s.active}`}>Eva</NavLink></div>
            <div><NavLink to="/messages/leon" activeClassName={`${s.active}`}>Leon</NavLink></div>
            <div><NavLink to="/messages/kira" activeClassName={`${s.active}`}>Kira</NavLink></div>
            <div><NavLink to="/messages/tihon" activeClassName={`${s.active}`}>Tihon</NavLink></div>
            <div><NavLink to="/messages/valera" activeClassName={`${s.active}`}>Valera</NavLink></div>
            <div><NavLink to="/messages/petr" activeClassName={`${s.active}`}>Petr</NavLink></div>
            <div><NavLink to="/messages/leonid" activeClassName={`${s.active}`}>Leonid</NavLink></div>
            <div><NavLink to="/messages/kate" activeClassName={`${s.active}`}>Kate</NavLink></div>
            <div><NavLink to="/messages/timoha" activeClassName={`${s.active}`}>Timoha</NavLink></div>
        </div>
    )
}

export default Dialogs;
