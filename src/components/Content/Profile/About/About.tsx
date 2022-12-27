import React from "react"
import s from './About.module.css'
import { ProfileType } from './../../../../redux/profile-reducer'
import {ProfileStatus} from './ProfileStatus'

export function About(props: ProfileType) {
    return(
        <div className={s.about}>
            <img className={s.photo} src={props.photos.large ? props.photos.large : 'https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg'} alt="avatar"/>
            <div className={s.description}>
                <p className={s.statusSpan}>Status: <ProfileStatus/></p>
                <p className={s.h3}>About me</p>
                <p className={s.p}>{props.aboutMe}</p>
            </div>
        </div>
    )
};
