import React from "react";
import s from './Profile.module.css';
import {About} from "./About/About";
import {NewPostContainer} from './NewPost/NewPostContainer';
import {Posts} from './Posts/Posts';

type ProfilePropsType = {
    store: any,
};

export function Profile(props: ProfilePropsType) {
    return(
        <div className={s.profile}>
            <About/>
            <NewPostContainer store={props.store}/>
            <Posts postsData={props.store.getState().profilePage.postsData}/>
        </div>
    )
}