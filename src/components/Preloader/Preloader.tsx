import React from "react";
import preloader from './preloader.gif'
import s from './Preloader.module.css'

export function Preloader() {
    return(
        <div className={s.preloader}>
            <img src={preloader} alt="preloader" />
        </div>
    )
}
