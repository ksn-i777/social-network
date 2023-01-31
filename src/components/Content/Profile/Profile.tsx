import React from "react"
import s from './Profile.module.css'
import { About } from './About/About'
import { NewPostContainer } from './NewPost/NewPostContainer'
import { PostsContainer } from './Posts/PostsContainer'
import { Preloader } from '../../Common/Preloader/Preloader'
import { ProfileType, SetProfileStatusActionType } from '../../../store/profile-reducer'

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateProfileStatusTC: (status: string) => (dispatch: (AC: SetProfileStatusActionType) => void) => void
}

export const Profile = React.memo((props: ProfilePropsType) => {
    return !props.profile ? <Preloader /> :
        <div className={s.profile}>
            <About profile={props.profile} status={props.status} updateProfileStatusTC={props.updateProfileStatusTC} />
            <NewPostContainer />
            <PostsContainer />
        </div>
})