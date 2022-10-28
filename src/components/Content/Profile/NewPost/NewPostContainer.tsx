import React from "react";
import {actionAddNewPost, actionNewPostText} from '../../../../redux/profile-reducer';
import {NewPost} from './NewPost';
import {StoreContext} from '../../../../StoreContext';


export function NewPostContainer() {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let changeNewPostText = (newText: string) => {
                    store.dispatch (actionNewPostText(newText));
                };

                let addNewPost = () => {
                    store.dispatch (actionAddNewPost());
                };
                return <NewPost changeNewPostText={changeNewPostText} addNewPost={addNewPost} newPostText={store.getState().profilePage.newPostText}/>
            }}
        </StoreContext.Consumer>
    )
}