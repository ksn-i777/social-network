import React from "react";
import {actionAddNewPost, actionNewPostText} from '../../../../redux/profile-reducer';
import {NewPost} from './NewPost';
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeNewPostText: (newText: string) => {
            dispatch (actionNewPostText(newText));
        },
        addNewPost: () => {
            dispatch (actionAddNewPost());
        },
    }
}

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)