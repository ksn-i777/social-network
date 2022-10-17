import React from 'react';
import s from './Content.module.css'
import {Profile} from "./Profile/Profile";
import {Messages} from "./Messages/Messages";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Route} from "react-router-dom";
import {StateType} from "../../redux/store";

type ContentPropsType = {
    state: StateType,
    dispatch: (action: any) => void,
};

export function Content(props: ContentPropsType) {
    return (
        <div className={s.content}>
            <Route
                path="/profile" render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}>
            </Route>
            <Route
                path="/messages" render={() => <Messages messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}>
            </Route>
            <Route path="/news" component={News}></Route>
            <Route path="/music" render={() => <Music/>}></Route>
            <Route path="/settings" render={() => <Settings/>}></Route>
        </div>

    );
};