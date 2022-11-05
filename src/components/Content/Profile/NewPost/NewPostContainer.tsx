import React from "react";
import {addNewPostAC, newPostTextAC, ProfileActionsType} from '../../../../redux/profile-reducer';
import {NewPost} from './NewPost';
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: (AC: ProfileActionsType) => void) => {
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