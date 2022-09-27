import React from "react";
import s from './Picture.module.css'

function Picture() {
    return(
        <div>
            <img className={s.picture} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" alt="picture"/>
        </div>
    )
}

export default Picture;
