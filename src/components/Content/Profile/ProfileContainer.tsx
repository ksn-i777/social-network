import React, {ComponentType} from "react"
import { Profile } from './Profile'
import { getProfileTC, PostType, ProfileType, getProfileStatusTC, updateProfileStatusTC } from '../../../redux/profile-reducer'
import { RootType } from '../../../redux/store'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from "redux"

class ProfileClassContainer extends React.Component<any, any> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if(!userID) {userID = 26782}
        this.props.getProfileTC(userID)
        this.props.getProfileStatusTC(userID)
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateProfileStatusTC={updateProfileStatusTC}/>
    }
}

type mapStateToPropsType = {
    profile: ProfileType,
    postsData: Array<PostType>,
    newPostText: string,
    status: string,
}

function mapStateToProps(state: RootType):mapStateToPropsType {
    return {
        profile: state.profilePage.profile,
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        status: state.profilePage.status
    }
}

/* const ProfileClassWithRouterContainer = withRouter(ProfileClassContainer)
const ProfileWithAuthRedirectContainer = withAuthRedirect(ProfileClassWithRouterContainer)
const ProfileContainer = connect(mapStateToProps, {getUserTC})(ProfileWithAuthRedirectContainer) */

//равнозначные записи выше и ниже

export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, {getProfileTC, getProfileStatusTC, updateProfileStatusTC}),
    withAuthRedirect,
    withRouter 
)(ProfileClassContainer)