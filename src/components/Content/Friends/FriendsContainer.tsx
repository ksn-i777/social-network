import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Friends} from "./Friends";
import {followAC, unfollowAC, FriendsActionsType, FriendsPageType} from '../../../redux/friends-reducer';

function mapStateToProps(state: StateType):FriendsPageType {
    return {
        friendsData: state.friendsPage.friendsData,
    }
}

function mapDispachToProps(dispatch:(AC:FriendsActionsType) => void) {
    return {
        changeOnFollow: (userId:number) => {
            dispatch(followAC(userId))
        },
        changeOnUnfollow: (userId:number) => {
            dispatch(unfollowAC(userId))
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispachToProps)(Friends)