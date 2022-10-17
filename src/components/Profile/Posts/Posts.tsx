import React from "react";
import s from "./Posts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/store";

type PostsPropsType = {
    postsData: Array<PostType>;
};

export function Posts(props: PostsPropsType) {
    return (
        <div className={s.posts}>
            {props.postsData.map((el) => <Post id={el.id} message={el.message} likes={el.likes}/>)}
        </div>
    )
};
