import React from "react"
import { Profile } from './Profile'
import { ProfilePageType, setProfileAC } from './../../../redux/profile-reducer'
import { RootType } from './../../../redux/store'
import { connect } from "react-redux"
import axios from 'axios'
import { withRouter } from "react-router-dom"

function mapStateToProps(state: RootType):ProfilePageType {
    return {
        profile: state.profilePage.profile,
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
class ProfileClass extends React.Component<any, any> {

    componentDidMount() {
        if(this.props.match.params.userId) {
            axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then(res => {this.props.setProfile(res.data)})
        } else {this.props.setProfile()}
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const ProfileClassWithRouterContainer = withRouter(ProfileClass)

export const ProfileClassContainer = connect(mapStateToProps, {setProfile: setProfileAC})(ProfileClassWithRouterContainer)