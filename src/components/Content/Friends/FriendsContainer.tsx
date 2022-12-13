import React from "react"
import {connect} from "react-redux"
import {RootType} from '../../../redux/store'
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setTotalUsersCountAC,
    setCurrentPageAC,
    changePreloaderStatusAC,
    toggleButtonsDisabledAC,
    FriendsPageType
} from '../../../redux/friends-reducer'
import {Friends} from './Friends'
import {Preloader} from '../../Preloader/Preloader'
import {friendsAPI} from '../../../api/api';

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

class FriendsClassContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.changePreloaderStatus(true)
        friendsAPI.getFriends(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.changePreloaderStatus(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
        })
    }

    changeCurrentPage = (currentPageNumber: number) => {
        this.props.changePreloaderStatus(true)
        this.props.setCurrentPage(currentPageNumber)
        friendsAPI.getFriends(currentPageNumber, this.props.pageSize).then(data => {
            this.props.changePreloaderStatus(false)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
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
            disabledButtons={this.props.disabledButtons}

            follow={this.props.follow}
            unfollow={this.props.unfollow}
            changeCurrentPage={this.changeCurrentPage}
            toggleButtonsDisabled={this.props.toggleButtonsDisabled}
        />
    }
}

function mapStateToProps(state: RootType):FriendsPageType {
    return {
        friendsData: state.friendsPage.friendsData,
        currentPage: state.friendsPage.currentPage,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        preloaderStatus: state.friendsPage.preloaderStatus,
        disabledButtons: state.friendsPage.disabledButtons,
    }
}

const dispatchObj = {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setCurrentPage: setCurrentPageAC,
    changePreloaderStatus: changePreloaderStatusAC,
    toggleButtonsDisabled: toggleButtonsDisabledAC,
}
// если переименоать АС в редюсере так, чтобы свойство и значение имели одинаковое название, то dispatchObj будет таким
// dispatchObj = {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, changePreloaderStatus}

export const FriendsContainer = connect(mapStateToProps, dispatchObj)(FriendsClassContainer)