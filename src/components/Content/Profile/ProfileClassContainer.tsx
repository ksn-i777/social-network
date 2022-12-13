import React from "react"
import { Profile } from './Profile'
import { ProfilePageType, setProfileAC } from '../../../redux/profile-reducer'
import { RootType } from '../../../redux/store'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import {profileAPI} from '../../../api/api';

function mapStateToProps(state: RootType):ProfilePageType {
    return {
        profile: state.profilePage.profile,
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
class ProfileClassContainer extends React.Component<any, any> {

    componentDidMount() {
        if(this.props.match.params.userId) {
            profileAPI.getProfile(this.props.match.params.userId).then(data => {this.props.setProfile(data)})
        } else {this.props.setProfile()}
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const ProfileClassWithRouterContainer = withRouter(ProfileClassContainer)

export const ProfileContainer = connect(mapStateToProps, {setProfile: setProfileAC})(ProfileClassWithRouterContainer)