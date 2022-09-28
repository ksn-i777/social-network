import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message: string;
    likes: number;
}

function Post(props: PostPropsType) {
    return (
        <div className={s.post}>
            <img className={s.ava} src="https://pm1.narvii.com/6783/e3b67784dbfabe6c0a7f15fa46043c2b522acfe5v2_hq.jpg" alt="ava"/>
            <div className={s.text}>
                <div className={s.message}>{props.message}</div>
                <div className={s.likes}>likes: {props.likes}</div>
            </div>
        </div>

    )
}

export default Post;
