import React, { ChangeEvent } from "react"
import s from './About.module.css'
import { ProfileType } from '../../../../store/profile-reducer'
import { ProfileStatus } from './ProfileStatus'

type AboutPropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string
    updateProfileStatusTC: (status: string) => void
    updatePhotoTC: (photo: any) => void
}

export const About = React.memo((props: AboutPropsType) => {

    const changePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.updatePhotoTC(e.target.files[0])
        }
    }

    return (
        <div className={s.about}>
            <div className={s.photoContainer}>
                <img className={s.photo} src={props.profile.photos.large || 'https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg'} alt="avatar" />
                {props.isOwner && <input type={'file'} className={s.changePhotoInput} onChange={changePhoto} />}
            </div>
            <div className={s.description}>
                <p className={s.statusSpan}>Status: <ProfileStatus status={props.status} updateProfileStatusTC={props.updateProfileStatusTC} /></p>
                <p className={s.h3}>About me</p>
                <p className={s.p}>{props.profile.aboutMe}</p>
            </div>
        </div>
    )
})