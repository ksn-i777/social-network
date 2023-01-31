import React from "react"
import s from './Music.module.css'

export const Music = React.memo(() => {
    return <div className={s.music}>Music</div>
})