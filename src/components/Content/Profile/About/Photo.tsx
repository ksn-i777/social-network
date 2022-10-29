import React from "react";
import s from './Photo.module.css';

export function Photo() {
    return(
        <div>
            <img className={s.photo} src="https://aif-s3.aif.ru/images/019/507/eeba36a2a2d37754bab8b462f4262d97.jpg" alt="girl"/>
        </div>
    )
};
