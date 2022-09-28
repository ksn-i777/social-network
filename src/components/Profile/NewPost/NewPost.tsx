import React from "react";
import s from "./NewPost.module.css"

function NewPost() {
    return (
        <div className={s.new}>
            <input className={s.input} placeholder={'Enter a message'} />
            <button className={s.button}>Publish</button>
        </div>

    )
}

export default NewPost;
