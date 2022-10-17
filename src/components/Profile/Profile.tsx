import React from "react";
import s from './Profile.module.css';
import {About} from "./About/About";
import {NewPost} from "./NewPost/NewPost";
import {Posts} from "./Posts/Posts";
import {ProfilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType,
    dispatch: (action: any) => void,
};

export function Profile(props: ProfilePropsType) {
    return(
        <div className={s.profile}>
            <About />
            <NewPost dispatch={props.dispatch} newPostText={props.profilePage.newPostText}/>
            <Posts postsData={props.profilePage.postsData}/>
        </div>
    )
};
