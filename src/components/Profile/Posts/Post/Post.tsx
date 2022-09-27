import React from "react";
import s from "./Post.module.css"

type PostPropsType = {
    message: string;
    likes: number;
}

function Post(props: PostPropsType) {
    return (
        <div>
            <img className={s.ava} src="https://nash.live/img/forall/u/0/29/20190911154809-52881.jpg" alt="ava"/>
            <span>{props.message}</span>
            <div>likes: {props.likes}</div>
        </div>

    )
}

export default Post;
