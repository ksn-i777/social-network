import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {Friends} from "./Friends";
import {followAC, unfollowAC, setUsersAC, FriendsActionsType, FriendType} from '../../../redux/friends-reducer';

type mapStateToPropsType = {
    friendsData: Array<FriendType>
}

type mapDispachToPropsType = {
    changeOnFollow(userId:string):void,
    changeOnUnfollow(userId:string):void,
    setUsers(users:Array<FriendType>):void,
}

function mapStateToProps(state: StateType):mapStateToPropsType {
    return {
        friendsData: state.friendsPage.friendsData,
    }
}

function mapDispachToProps(dispatch:(AC:FriendsActionsType) => void):mapDispachToPropsType {
    return {
        changeOnFollow: (userId:string) => {
            dispatch(followAC(userId))
        },
        changeOnUnfollow: (userId:string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users:Array<FriendType>) => {
            dispatch(setUsersAC(users))
        },
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispachToProps)(Friends)