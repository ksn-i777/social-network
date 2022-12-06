import React from "react";
import {addNewPostAC, newPostTextAC, ProfileActionsType} from '../../../../redux/profile-reducer';
import {NewPost} from './NewPost';
import {connect} from "react-redux";
import {RootType} from "../../../../redux/store";

type mapStateToPropsType = {
    newPostText: string,
}
type mapDispatchToPropsType = {
    changeNewPostText(newText: string):void,
    addNewPost():void,
}

function mapStateToProps(state:RootType):mapStateToPropsType {
    return {
        newPostText: state.profilePage.newPostText,
    }
}

function mapDispatchToProps(dispatch:(AC:ProfileActionsType) => void):mapDispatchToPropsType {
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