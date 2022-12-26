import React from "react"
import { Profile } from './Profile'
import { getUserTC, PostType, ProfileType } from '../../../redux/profile-reducer'
import { RootType } from '../../../redux/store'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

class ProfileClassContainer extends React.Component<any, any> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        this.props.getUserTC(userID)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

type mapStateToPropsType = {
    profile: ProfileType,
    postsData: Array<PostType>,
    newPostText: string,
}

function mapStateToProps(state: RootType):mapStateToPropsType {
    return {
        profile: state.profilePage.profile,
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}

const ProfileClassWithRouterContainer = withRouter(ProfileClassContainer)

const ProfileWithAuthRedirectContainer = withAuthRedirect(ProfileClassWithRouterContainer)

export const ProfileContainer = connect(mapStateToProps, {getUserTC})(ProfileWithAuthRedirectContainer)