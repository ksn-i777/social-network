import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Friends} from "./Friends";
import {followAC} from "../../../redux/friends-reducer";
import {unfollowAC} from "../../../redux/friends-reducer";

const mapStateToProps = (state: StateType) => {
    return {
        friendsData: state.friendsPage.friendsData,
    }
}

const mapDispachToProps = (dispatch: any) => {
    return {
        changeOnFollow: (userId: number) => {
            dispatch(followAC(userId))
        },
        changeOnUnfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispachToProps)(Friends)