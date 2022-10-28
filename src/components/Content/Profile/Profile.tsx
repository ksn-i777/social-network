import React from "react";
import s from './Profile.module.css';
import {About} from "./About/About";
import {NewPostContainer} from './NewPost/NewPostContainer';
import {Posts} from './Posts/Posts';
import {StoreContext} from '../../../StoreContext';

export function Profile() {
    return(
        <div className={s.profile}>
            <About/>
            <NewPostContainer/>
            <StoreContext.Consumer>
                {(store) => {
                    return <Posts postsData={store.getState().profilePage.postsData}/>
                }}
            </StoreContext.Consumer>
        </div>
    )
}