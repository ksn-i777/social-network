import React, { ComponentType } from "react"
import { Profile } from './Profile'
import { getProfileTC, ProfileType, getProfileStatusTC, updateProfileStatusTC } from '../../../store/profile-reducer'
import { AppStateType } from '../../../store/store'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from "redux"
import { getProfile, getProfileStatus } from "../../../selectors/profile-selectors"

class ProfileClassContainer extends React.Component<any, any> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        this.props.getProfileTC(userID)
        this.props.getProfileStatusTC(userID)
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateProfileStatusTC={updateProfileStatusTC}/>
    }
}

type mapStateToPropsType = {
    profile: ProfileType
    status: string
}

function mapStateToProps(state: AppStateType):mapStateToPropsType {
    return {
        profile: getProfile(state),
        status: getProfileStatus(state),
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