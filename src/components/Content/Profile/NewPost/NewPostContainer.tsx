import React from "react";
import {addNewPostAC, newPostTextAC, newPostTextType, ProfileActionsType} from '../../../../redux/profile-reducer';
import {NewPost} from './NewPost';
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

function mapStateToProps(state:StateType):newPostTextType {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

function mapDispatchToProps(dispatch:(AC:ProfileActionsType) => void) {
    return {
        changeNewPostText: (newText: string) => {
            dispatch (newPostTextAC(newText));
        },
        addNewPost: () => {
            dispatch (addNewPostAC());
        },
    }
}

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)