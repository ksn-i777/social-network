import React from "react"
import s from './About.module.css'

export function About(props: any) {
    return(
        <div className={s.about}>
            <img className={s.photo} src={props.photos.large ? props.photos.large : 'https://www.freeiconspng.com/uploads/blue-user-icon-32.jpg'} alt="avatar"/>
            <div className={s.description}>
                <h3 className={s.h3}>About me</h3>
                <p className={s.p}>{props.aboutMe}</p>
            </div>
        </div>
    )
};
