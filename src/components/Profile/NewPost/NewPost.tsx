import React, {useRef} from "react";
import s from "./NewPost.module.css"

function NewPost(props: any) {
    return (
        <div className={s.new}>
            <input className={s.input} placeholder={'Enter a message'} />
            <button onClick={() => {props.addPost()}} className={s.button}>Publish</button>
        </div>

    )
}

export default NewPost;
