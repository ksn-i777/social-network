import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {FriendsFunc} from "./FriendsFunc";
import {followAC, unfollowAC, setUsersAC, FriendsActionsType, FriendType} from '../../../redux/friends-reducer';
import {FriendsClass} from './FriendsClass';

type MapStateToPropsType = {
    friendsData: Array<FriendType>
}

type MapDispachToPropsType = {
    changeOnFollow(userId:string):void,
    changeOnUnfollow(userId:string):void,
    setUsers(users:Array<FriendType>):void,
}

function mapStateToProps(state: StateType):MapStateToPropsType {
    return {
        friendsData: state.friendsPage.friendsData,
    }
}

function mapDispachToProps(dispatch:(AC:FriendsActionsType) => void):MapDispachToPropsType {
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

export const FriendsContainer = connect(mapStateToProps, mapDispachToProps)(FriendsClass)