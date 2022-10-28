import React from "react";
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import {OnlineFriends} from "./OnlineFriends/OnlineFriends";
import {StoreContext} from '../../StoreContext';

export function Nav() {
    return(
        <nav className={s.nav}>
            <div className={s.div}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.div}><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.div}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.div}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div className={s.div}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            <div className={s.div}>
                <StoreContext.Consumer>
                    {(store) => {
                        return <OnlineFriends onlineFriendsData={store.getState().navbar.onlineFriendsData}/>
                    }}
                </StoreContext.Consumer>

            </div>
        </nav>
    )
}
