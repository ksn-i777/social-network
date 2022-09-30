import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css"

type PostsPropsType = {
    postsData: any;
}

function Posts(props: PostsPropsType) {
    return (
        <div className={s.posts}>
            {props.postsData.map((el: { id: number; message: string; likes: number; }) => <Post id={el.id} message={el.message} likes={el.likes}/>)}
        </div>
    )
}

export default Posts;
