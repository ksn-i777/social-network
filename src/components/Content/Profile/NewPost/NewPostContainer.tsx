import React from "react";
import {actionAddNewPost, actionNewPostText} from '../../../../redux/profile-reducer';
import {NewPost} from './NewPost';

type NewPostContainerPropsType = {
    store: any,
};

export function NewPostContainer(props: NewPostContainerPropsType) {
    
    let changeNewPostText = (newText: string) => {
        props.store.dispatch (actionNewPostText(newText));
    };

    let addNewPost = () => {
        props.store.dispatch (actionAddNewPost());
    };

    return <NewPost changeNewPostText={changeNewPostText} addNewPost={addNewPost} newPostText={props.store.getState().profilePage.newPostText}/>
}