import React from "react";
import {Posts} from "./Posts";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";
import {PostDataType} from '../../../../redux/profile-reducer';

function mapStateToProps(state:StateType):PostDataType {
    return {
        postsData: state.profilePage.postsData,
    }
}

export const PostsContainer = connect(mapStateToProps)(Posts)