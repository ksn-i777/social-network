import React from "react"
import {connect} from "react-redux"
import {RootType} from '../../../redux/store'
import {
    getUsersTC,
    changeCurrentPageTC,
    createFollowTC,
    deleteFollowTC,
    FriendType
} from '../../../redux/friends-reducer'
import {Friends} from './Friends'
import {Preloader} from '../../Preloader/Preloader'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'

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
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
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

                createFollow={this.props.createFollowTC}
                deleteFollow={this.props.deleteFollowTC}

                changeCurrentPage={(currentPageNumber: number) => {this.props.changeCurrentPageTC(currentPageNumber)}}/>
    }
}

type mapStateToPropsType = {
    friendsData: Array<FriendType>,
    currentPage: number,
    pageSize: number,
    totalUsersCount: number,
    preloaderStatus: boolean,
    disabledButtons: Array<string>,
}

function mapStateToProps(state: RootType):mapStateToPropsType {
    return {
        preloaderStatus: state.friendsPage.preloaderStatus,

        friendsData: state.friendsPage.friendsData,
        currentPage: state.friendsPage.currentPage,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        disabledButtons: state.friendsPage.disabledButtons,
    }
}

const dispatchObj = {
    getUsersTC,
    changeCurrentPageTC,
    createFollowTC,
    deleteFollowTC,
}
// если переименоать АС в редюсере так, чтобы свойство и значение имели одинаковое название, то dispatchObj будет таким
// dispatchObj = {follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, changePreloaderStatus}

const FriendsWithAuthRedirectContainer = withAuthRedirect(FriendsClassContainer)

export const FriendsContainer = connect(mapStateToProps, dispatchObj)(FriendsWithAuthRedirectContainer)