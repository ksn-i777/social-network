import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css"

let postsData = [
    {id: 1, message: 'Yaaahhhooo', likes: 77},
    {id: 2, message: 'Happy birthday to me!', likes: 100},
    {id: 3, message: 'Have a good day!', likes: 60},
    {id: 4, message: 'How are you?', likes: 30},
    {id: 5, message: 'Hi. It is my first post', likes: 15},
];

let posts = postsData.map(el => <Post id={el.id} message={el.message} likes={el.likes}/>);

function Posts() {
    return (
        <div className={s.posts}>
            {posts}
        </div>

    )
}

export default Posts;
