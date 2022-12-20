import React from "react"
import { Profile } from './Profile'
import { getUserTC, PostType, ProfileType } from '../../../redux/profile-reducer'
import { RootType } from '../../../redux/store'
import { connect } from "react-redux"
import {Redirect, withRouter} from 'react-router-dom'

type mapStateToPropsType = {
    profile: ProfileType,
    postsData: Array<PostType>,
    newPostText: string,
    isAuth: boolean,
}

function mapStateToProps(state: RootType):mapStateToPropsType {
    return {
        profile: state.profilePage.profile,
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        isAuth: state.auth.isAuth
    }
}
class ProfileClassContainer extends React.Component<any, any> {

    componentDidMount() {
        let userID = this.props.match.params.userId
        this.props.getUserTC(userID)
    }

    render() {
        return this.props.isAuth ? <Profile profile={this.props.profile}/> : <Redirect to={'/login'}></Redirect>
    }
}

const ProfileClassWithRouterContainer = withRouter(ProfileClassContainer)

export const ProfileContainer = connect(mapStateToProps, {getUserTC})(ProfileClassWithRouterContainer)