import React from "react";
import s from './Description.module.css'

function Description() {
    return(
        <div className={s.about}>
            <h3 className={s.h3}>About me</h3>
            <p className={s.p}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque autem beatae blanditiis consequatur culpa dignissimos distinctio expedita inventore itaque, labore officiis porro possimus, quidem rerum similique sunt tempora vitae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque autem beatae blanditiis consequatur culpa dignissimos distinctio expedita inventore itaque, labore officiis porro possimus, quidem rerum similique sunt tempora vitae.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque autem beatae blanditiis consequatur culpa dignissimos distinctio expedita inventore itaque, labore officiis porro possimus, quidem rerum similique sunt tempora vitae.
            </p>
        </div>
    )
}

export default Description;
