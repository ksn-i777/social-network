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
    FriendsPageType
} from '../../../redux/friends-reducer';
import axios from 'axios';
import {Friends} from './Friends'
import { Preloader } from "../../Preloader/Preloader";

type MapStateToPropsType = FriendsPageType

function mapStateToProps(state: StateType):MapStateToPropsType {
    return {
        friendsData: state.friendsPage.friendsData,
        currentPage: state.friendsPage.currentPage,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        preloaderStatus: state.friendsPage.preloaderStatus,
    }
}

/* type MapDispachToPropsType = {
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<FriendType>) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    setCurrentPage: (currentPage: number) => void,
    changePreloaderStatus: (newPreloaderStatus: boolean) => void,
}
function mapDispachToProps(dispatch:(AC:FriendsActionsType) => void):MapDispachToPropsType {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
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
} */

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
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            changeCurrentPage={this.changeCurrentPage}
        />
    }
}

const dispatchObj = {follow: followAC, unfollow: unfollowAC, setUsers: setUsersAC, setTotalUsersCount: setTotalUsersCountAC, setCurrentPage: setCurrentPageAC, changePreloaderStatus: changePreloaderStatusAC}
// если переименоать АС в редюсере так, чтобы свойство и значение имели одинаковое название, то dispatchObj будет таким
// dispatchObj = {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, changePreloaderStatus}

export const FriendsClassContainer = connect(mapStateToProps, dispatchObj)(FriendsClass)