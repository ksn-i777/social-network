import React from 'react'
import s from './Content.module.css'
import {ProfileContainer} from './Profile/ProfileContainer'
import {FriendsContainer} from './Friends/FriendsContainer'
import {DialogsContainer} from './Dialogs/DialogsContainer';
import {News} from './News/News'
import {Music} from './Music/Music'
import {Settings} from './Settings/Settings'
import {Route} from 'react-router-dom'
import {Login} from './Login/Login';


export function Content() {
    return (
        <div className={s.content}>
            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}></Route>
            <Route path={'/friends'} render={() => <FriendsContainer/>}></Route>
            <Route path={'/messages'} render={() => <DialogsContainer/>}></Route>
            <Route path={"/news"} render={() => <News/>}></Route>
            <Route path={"/music"} render={() => <Music/>}></Route>
            <Route path={"/settings"} render={() => <Settings/>}></Route>
            <Route path={"/login"} render={() => <Login/>}></Route>
        </div>

    )
}