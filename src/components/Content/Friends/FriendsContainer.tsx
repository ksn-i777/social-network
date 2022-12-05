import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {FriendsFunc} from "./FriendsFunc";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setTotalUsersCountAC,
    setCurrentPageAC,
    FriendsActionsType,
    FriendType,
    FriendsPageType
} from '../../../redux/friends-reducer';
import {FriendsClass} from './FriendsClass';

type MapStateToPropsType = FriendsPageType

type MapDispachToPropsType = {
    changeOnFollow: (userId: string) => void,
    changeOnUnfollow: (userId: string) => void,
    setUsers: (users: Array<FriendType>) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    setCurrentPage: (currentPage: number) => void,
}

function mapStateToProps(state: StateType):MapStateToPropsType {
    return {
        friendsData: state.friendsPage.friendsData,
        currentPage: state.friendsPage.currentPage,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
    }
}

function mapDispachToProps(dispatch:(AC:FriendsActionsType) => void):MapDispachToPropsType {
    return {
        changeOnFollow: (userId: string) => {
            dispatch(followAC(userId))
        },
        changeOnUnfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<FriendType>) => {
            dispatch(setUsersAC(users))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
}

export const FriendsContainer = connect(mapStateToProps, mapDispachToProps)(FriendsClass)