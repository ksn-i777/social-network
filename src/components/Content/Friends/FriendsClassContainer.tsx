import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setTotalUsersCountAC,
    setCurrentPageAC,
    changePreloaderStatusAC,
    FriendsActionsType,
    FriendType,
    FriendsPageType
} from '../../../redux/friends-reducer';
import axios from 'axios';
import {Friends} from './Friends'
import { Preloader } from "../../Preloader/Preloader";

type MapStateToPropsType = FriendsPageType

type MapDispachToPropsType = {
    changeOnFollow: (userId: string) => void,
    changeOnUnfollow: (userId: string) => void,
    setUsers: (users: Array<FriendType>) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    setCurrentPage: (currentPage: number) => void,
    changePreloaderStatus: (newPreloaderStatus: boolean) => void,
}

function mapStateToProps(state: StateType):MapStateToPropsType {
    return {
        friendsData: state.friendsPage.friendsData,
        currentPage: state.friendsPage.currentPage,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        preloaderStatus: state.friendsPage.preloaderStatus,
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
        },
        changePreloaderStatus: (newPreloaderStatus: boolean) => {
            dispatch(changePreloaderStatusAC(newPreloaderStatus))
        }
    }
}

class FriendsClass extends React.Component<any, any> {

    componentDidMount() {
        this.props.changePreloaderStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.changePreloaderStatus(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
        
    }

    changeCurrentPage = (currentPageNumber: number) => {
        this.props.changePreloaderStatus(true)
        this.props.setCurrentPage(currentPageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.changePreloaderStatus(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    render() {
        return this.props.preloaderStatus
        ? <Preloader/>
        : <Friends
            friendsData={this.props.friendsData}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            changeOnFollow={this.props.changeOnFollow}
            changeOnUnfollow={this.props.changeOnUnfollow}
            changeCurrentPage={this.changeCurrentPage}
        />
    }
}

export const FriendsClassContainer = connect(mapStateToProps, mapDispachToProps)(FriendsClass)