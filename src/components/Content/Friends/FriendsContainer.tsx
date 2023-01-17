import React from "react"
import {connect} from "react-redux"
import {AppStateType} from '../../../store/store'
import {
    getUsersTC,
    changeCurrentPageTC,
    createFollowTC,
    deleteFollowTC,
    FriendType
} from '../../../store/friends-reducer'
import {Friends} from './Friends'
import {Preloader} from '../../Common/Preloader/Preloader'
import {withAuthRedirect} from '../../../hoc/withAuthRedirect'
import {compose} from "redux"
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
    friendsData: Array<FriendType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    preloaderStatus: boolean
    disabledButtons: Array<string>
}

function mapStateToProps(state: AppStateType):mapStateToPropsType {
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

/* const FriendsWithAuthRedirectContainer = withAuthRedirect(FriendsClassContainer)
const FriendsContainer = connect(mapStateToProps, dispatchObj)(FriendsWithAuthRedirectContainer) */

//равнозначные записи выше и ниже

export const FriendsContainer = compose(
    connect(mapStateToProps, dispatchObj),
    withAuthRedirect
)(FriendsClassContainer)