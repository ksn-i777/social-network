import React from "react"
import s from './News.module.css'

export const News = React.memo(() => {
    return <div className={s.news}>News</div>
})