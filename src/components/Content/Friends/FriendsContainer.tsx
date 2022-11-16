import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Friends} from "./Friends";
import {followAC, unfollowAC, FriendsActionsType, FriendType} from '../../../redux/friends-reducer';

type mapStateToPropsType = {
    friendsData: Array<FriendType>
}

type mapDispachToPropsType = {
    changeOnFollow(userId:number):void,
    changeOnUnfollow(userId:number):void,
}

function mapStateToProps(state: StateType):mapStateToPropsType {
    return {
        friendsData: state.friendsPage.friendsData,
    }
}

function mapDispachToProps(dispatch:(AC:FriendsActionsType) => void):mapDispachToPropsType {
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