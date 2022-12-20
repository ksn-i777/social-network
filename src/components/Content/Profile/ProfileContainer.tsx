import React from "react"
import { Profile } from './Profile'
import { getUserTC, ProfilePageType } from '../../../redux/profile-reducer'
import { RootType } from '../../../redux/store'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

function mapStateToProps(state: RootType):ProfilePageType {
    return {
        profile: state.profilePage.profile,
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
class ProfileClassContainer extends React.Component<any, any> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        this.props.getUserTC(userID)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const ProfileClassWithRouterContainer = withRouter(ProfileClassContainer)

export const ProfileContainer = connect(mapStateToProps, {getUserTC})(ProfileClassWithRouterContainer)