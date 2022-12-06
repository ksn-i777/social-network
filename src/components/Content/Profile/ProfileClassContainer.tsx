import React from "react"
import { Profile } from './Profile'
import { ProfilePageType, setProfileAC } from './../../../redux/profile-reducer'
import { RootType } from './../../../redux/store'
import { connect } from "react-redux"
import axios from 'axios'

function mapStateToProps(state: RootType):ProfilePageType {
    return {
        profile: state.profilePage.profile,
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

class ProfileClass extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
            this.props.setProfile(res.data)
        })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

export const ProfileClassContainer = connect(mapStateToProps, {setProfile: setProfileAC})(ProfileClass)