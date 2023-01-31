import React from "react"
import s from './About.module.css'
import { ProfileType } from '../../../../store/profile-reducer'
import { ProfileStatus } from './ProfileStatus'

type AboutPropsType = {
    profile: ProfileType
    status: string
    updateProfileStatusTC: (status: string) => void
}

export const About = React.memo((props: AboutPropsType) => {
    return (
        <div className={s.about}>
            <img className={s.photo} src={props.profile.photos.large ? props.profile.photos.large : 'https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg'} alt="avatar" />
            <div className={s.description}>
                <p className={s.statusSpan}>Status: <ProfileStatus status={props.status} updateProfileStatusTC={props.updateProfileStatusTC} /></p>
                <p className={s.h3}>About me</p>
                <p className={s.p}>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
})