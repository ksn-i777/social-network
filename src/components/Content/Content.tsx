import React from 'react'
import s from './Content.module.css'
import {ProfileClassContainer} from './Profile/ProfileClassContainer'
import {FriendsClassContainer} from './Friends/FriendsClassContainer'
import {Messages} from './Messages/Messages'
import {News} from './News/News'
import {Music} from './Music/Music'
import {Settings} from './Settings/Settings'
import {Route} from 'react-router-dom'

export function Content() {
    return (
        <div className={s.content}>
            <Route
                path="/profile/:userId?" render={() => <ProfileClassContainer/>}>
            </Route>
            <Route
                path="/friends" render={() => <FriendsClassContainer/>}>
            </Route>
            <Route
                path="/messages" render={() => <Messages/>}>
            </Route>
            <Route path="/news" render={() => <News/>}></Route>
            <Route path="/music" render={() => <Music/>}></Route>
            <Route path="/settings" render={() => <Settings/>}></Route>
        </div>

    );
}